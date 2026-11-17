// Fleet Ready module: Cut Your Fuel Bill Through Driver Coaching
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("fuel", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Find the gap between your best and worst drivers, and coach it out.",
 "problem": [
  "Fuel is usually the biggest running cost in a fleet, and most operators can only see the total bill.  That tells you what you spent, not why.",
  "On similar work, the gap between your best and worst drivers is often 12 to 15%.  It comes from habits like harsh acceleration, speeding and idling, and habits can be coached."
 ],
 "cost": "£3,000 to £5,000 a year.",
 "signs": [
  "You can see the total fuel bill but not explain why it changed",
  "Nobody knows the economy gap between your best and worst driver",
  "Coaching only happens after an incident, or as a reminder to everyone",
  "Fuel card spend isn't checked against the miles driven"
 ],
 "good": [
  "Fuel spend can be explained by vehicle and by driver",
  "The gap between best and worst drivers is tracked and coached",
  "Drivers have regular one-to-ones using their own data",
  "Fuel card spend is checked automatically, with exceptions flagged"
 ],
 "fixes": [
  [
   "Engine (CAN bus) fuel data",
   "Real consumption read from the vehicle, rather than estimated from miles."
  ],
  [
   "Driver behaviour scoring",
   "Harsh braking, acceleration, cornering, speeding and idling scored automatically for every driver."
  ],
  [
   "Fuel card matching",
   "Card spend linked to mileage, so discrepancies and misuse show up straight away."
  ]
 ],
 "fails": [
  [
   "The saving was never measured",
   "If no target is set before you start, nobody can say whether coaching worked, and it quietly stops."
  ],
  [
   "Data wasn't accurate enough",
   "Estimated fuel figures and unmatched cards make the league table unfair, and drivers stop trusting it."
  ]
 ],
 "target": "Cut fuel spend by 8% within six months by coaching the five drivers with the lowest economy.",
 "questions": [
  "Does your fuel figure come from the engine, or is it estimated from mileage?",
  "Can scoring be set to suit our vehicles and type of work?",
  "How are fuel card transactions matched to vehicles, and how are exceptions flagged?"
 ],
 "actions": [
  "Rank drivers doing similar work by fuel economy",
  "Work out the gap between your best and worst driver",
  "Book a one-to-one with the bottom two, using their own figures",
  "Check last month's fuel card spend against miles for three vehicles"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "How an 8% saving can hide in data you already collect.",
 numSub: "Your monthly fuel spend and how many drivers you have.  We'll show what closing part of the driver gap is worth.",
 typicalCost: "£3,000 to £5,000 a year",
 nums: [
  {id:"fuel", label:"Fuel spend a month", pre:"£", min:0, max:100000, step:250, val:9000},
  {id:"drivers", label:"Drivers", min:1, max:150, step:1, val:12},
  {id:"gap", label:"Gap you could close (%)", min:1, max:12, step:1, val:4}
 ],
 calc: function(v){
  var m=v.fuel*v.gap/100, y=m*12;
  return {
   figs:[{label:"A month at a "+v.gap+"% saving", value:money(m), hl:true},{label:"A year", value:money(y)},{label:"Per driver a year", value:money(y/Math.max(v.drivers,1))}],
   chart:{title:"What a "+v.gap+"% fuel saving is worth", rows:[{l:"Per month",v:money(m),w:100/36,c:"#FFB37D"},{l:"Per year",v:money(y),w:100/3,c:"#FF8A3D"},{l:"Over three years",v:money(y*3),w:100,c:"#B84E1C"}]},
   leak:m, headline:v.fuel>0?"Closing "+v.gap+"% of your fuel spend is worth about "+money(m)+" a month.  The gap between best and worst drivers is often 12 to 15%, so "+v.gap+"% is a cautious target.":""
  };
 },
 questions: [
  {text:"Could you explain why your fuel bill changed over the last 12 months?", short:"Explaining the fuel bill",
   answers:["Yes, by vehicle and driver","Roughly","Only the total bill","No"],
   tip:"Put fuel card litres next to tracked miles for each vehicle for the last three months.  The odd ones out explain most of the change."},
  {text:"Do you know the fuel economy gap between your best and worst driver on similar work?", short:"Best to worst driver gap",
   answers:["Yes, tracked and coached","Known but not acted on","We could find out","No"],
   tip:"Rank drivers doing similar work by miles per gallon and work out the gap between top and bottom.  That gap is the size of the prize."},
  {text:"How are drivers coached on the habits that burn fuel (harsh acceleration, speeding)?", short:"Coaching drivers",
   answers:["Regular one-to-ones using their data","Only after an incident","General reminders to everyone","Not at all"],
   tip:"Book a one-to-one with the bottom two drivers using their own figures.  General reminders to everyone rarely change anyone."},
  {text:"How do you check fuel card spend against the miles driven?", short:"Fuel card checks",
   answers:["Automatically, with exceptions flagged","Monthly, by hand","Only if something looks odd","We don't"],
   tip:"Check last month's fuel card spend against miles for three vehicles.  If the litres don't match the miles, find out why before the next card bill."},
  {text:"In the last 12 months, have you used fuel data to change something?", short:"Acting on fuel data",
   answers:["Yes, and we measured the saving","Yes, but didn't measure it","We talked about it","No"],
   tip:"Set one target with a number in it, such as 4% off fuel in six months, and measure it monthly.  Without a before figure, coaching quietly stops."}
 ],
 results: [
  "Your fuel spend is measured and managed.  This module covers the last few habits that still push the bill up, so you can check you've got them all.",
  "You can see some of your fuel spend but not where it's going by driver.  The gap between best and worst drivers is often 12 to 15% on similar work.  This module shows how to close it with coaching.",
  "Your fuel bill is running with nothing to explain it or bring it down.  The data to change that is usually already in your system.  This module shows how to find the gap and coach it out."
 ]
};

return {lesson: LESSON, quiz: M};
});
