// Fleet Ready module: Control Private Use of Your Vehicles
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("private-use", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "See how your vehicles are used outside work, and set clear rules.",
 "problem": [
  "When vehicles go home with drivers, some private use is normal.  The problem is when nobody knows how much there is.",
  "Unmanaged private use is fuel, wear and risk the business is paying for, and it can affect tax and insurance in ways many operators haven't checked."
 ],
 "cost": "",
 "signs": [
  "There's no policy, or only an informal understanding",
  "You don't know how often vehicles move outside working hours",
  "Business and private miles can only be split by asking drivers",
  "Many drivers take vehicles home with no tracking of it"
 ],
 "good": [
  "A clear policy, monitored with alerts",
  "Vehicles don't move without a work reason, and you'd know if they did",
  "Drivers log private and business trips in the system",
  "You've checked that private miles are covered for tax and insurance"
 ],
 "fixes": [
  [
   "Out-of-hours alerts",
   "A warning when a vehicle moves outside the times you set."
  ],
  [
   "Private and business trip logging",
   "Drivers mark trips as private or business, so mileage is split properly."
  ],
  [
   "A written policy",
   "Clear rules drivers have seen and agreed to, backed up by the data."
  ]
 ],
 "fails": [
  [
   "The team never adopted it",
   "Monitoring without a policy drivers understand feels like spying.  Agree the rules first."
  ],
  [
   "Wrong product for the problem",
   "Check the system lets drivers mark private trips, and how that shows in reports."
  ]
 ],
 "target": "Have a written private use policy agreed with every driver and out-of-hours alerts on within one month.",
 "questions": [
  "Can drivers mark trips as private, and how does that show in reports?",
  "Can out-of-hours alerts be set per vehicle?",
  "How is private trip data handled, and who can see it?"
 ],
 "actions": [
  "Write a simple private use policy",
  "Run an out-of-hours movement report for last month",
  "List which drivers take vehicles home",
  "Ask your accountant and broker whether private miles affect your tax or cover"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "Vehicle use outside work that you're paying for.",
 numSub: "How many vehicles go home and your best guess at private miles.  If you did Module 1, we've filled in your cost per mile.",
 typicalCost: "",
 nums: [
  {id:"vehicles", label:"Vehicles that go home with drivers", min:0, max:150, step:1, val:6},
  {id:"miles", label:"Private miles per vehicle a week", min:0, max:300, step:5, val:40},
  {id:"cpm", label:"Running cost per mile, before wages", pre:"£", min:0.1, max:3, step:0.01, val:0.6, fromCpm:true}
 ],
 calc: function(v){
  var mi=v.vehicles*v.miles*52, y=mi*v.cpm;
  return {
   figs:[{label:"Private miles cost a year", value:money(y), hl:true},{label:"Private miles a year", value:num(Math.round(mi))},{label:"Per vehicle a year", value:money(y/Math.max(v.vehicles,1))}],
   chart:{title:"Cost of private miles", rows:[{l:"Per month",v:money(y/12),w:100/12,c:"#FFB37D"},{l:"Per year",v:money(y),w:100,c:"#B84E1C"}]},
   leak:y/12, headline:v.vehicles>0?"About "+num(Math.round(mi))+" private miles a year at "+money(v.cpm,2)+" a mile costs around "+money(y)+".":""
  };
 },
 questions: [
  {text:"Do you have a policy on private or out-of-hours vehicle use?", short:"Private use policy",
   answers:["Yes, monitored with alerts","Yes, but not monitored","An informal understanding","None"],
   tip:"Write a one-page private use policy and agree it with drivers before switching on any monitoring.  Rules first, then data."},
  {text:"How often do vehicles move outside working hours without a work reason?", short:"Out-of-hours movement",
   answers:["Never, and we'd know","Rarely","Regularly","Don't know"],
   tip:"Run an out-of-hours movement report for last month.  It replaces the guess above with your real figure."},
  {text:"Can you tell business miles from private miles?", short:"Splitting private and business miles",
   answers:["Yes, drivers log it in the system","Roughly","Only by asking drivers","No"],
   tip:"Check whether your system lets drivers mark a trip as private or business, and how that shows in reports."},
  {text:"Do drivers take vehicles home?", short:"Vehicles going home",
   answers:["No, or only with clear rules","Some do, with rules","Many do, informally","Most do and we don't track it"],
   tip:"List which drivers take vehicles home and why.  Some will be essential for the work, and some will be habit."},
  {text:"Have you checked whether private miles affect your tax or insurance?", short:"Tax and insurance",
   answers:["Yes, and we're covered","We think we're covered","We've not checked","Didn't know it could"],
   tip:"Ask your accountant and broker whether private miles affect your tax or cover.  It's a five-minute question that can save a nasty surprise."}
 ],
 results: [
  "Private use is clear and monitored.  This module covers how to keep the records tidy for tax and insurance.",
  "Vehicles sometimes move without a work reason and it isn't always clear why.  Unmanaged private use adds fuel, wear and risk you're paying for.  This module shows how to set and monitor a simple policy.",
  "Nobody knows how much your vehicles are used outside work.  That's fuel, wear and risk you're paying for.  This module shows how to see it and set the rules."
 ]
};

return {lesson: LESSON, quiz: M};
});
