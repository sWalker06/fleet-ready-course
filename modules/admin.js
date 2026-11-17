// Fleet Ready module: Win Back Hours from Fleet Admin
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("admin", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Hand the repeat work to the system and give the hours back.",
 "problem": [
  "Every week, hours go on fleet admin that a system could do: logging mileage, reconciling fuel, chasing defects, building reports from three or four sources.",
  "Spreadsheets aren't the problem on their own.  The problem is when they become the glue between systems that should be talking to each other, and when everything stops if one person is off."
 ],
 "cost": "£1,000 to £2,000 per vehicle a year.",
 "signs": [
  "More than five hours a week go on fleet admin",
  "Tachograph downloads happen when someone remembers",
  "Most weekly reports are built by hand",
  "If the admin person was off for two weeks, a lot would slip"
 ],
 "good": [
  "Under two hours a week of fleet admin",
  "Downloads happen remotely and automatically",
  "Reports arrive by themselves",
  "The system keeps running whoever is off"
 ],
 "fixes": [
  [
   "System integration",
   "Fleet data flows into payroll, maintenance and finance without anyone retyping it."
  ],
  [
   "Scheduled reports and dashboards",
   "One live view instead of a weekly report assembled from several sources."
  ],
  [
   "Automatic downloads and reminders",
   "Tachograph downloads and service reminders that don't depend on someone's memory."
  ]
 ],
 "fails": [
  [
   "Systems didn't connect",
   "If a new system needs its own spreadsheet to talk to the old one, the admin just moves."
  ],
  [
   "Business changed, the system didn't",
   "Ask what it costs to add vehicles, data sources or reports before you commit."
  ]
 ],
 "target": "Take five hours a week off fleet admin within three months by automating the two biggest jobs.",
 "questions": [
  "Which of our systems can you connect to, and can you show us a customer already running that connection?",
  "What would our weekly reports look like if they were sent automatically?",
  "What does it cost to add a new data source or report later?"
 ],
 "actions": [
  "Add up the hours spent on fleet admin each week",
  "List every spreadsheet used to run the fleet",
  "Pick the two highest-volume manual jobs",
  "Write down what would stop if your admin person was off for two weeks"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "The weekly jobs that could be automated down to minutes.",
 numSub: "Roughly how many hours a week go on fleet admin and what those hours cost.",
 typicalCost: "£1,000 to £2,000 per vehicle a year",
 nums: [
  {id:"vehicles", label:"Vehicles", min:1, max:150, step:1, val:12},
  {id:"hours", label:"Hours a week on fleet admin", min:0, max:60, step:0.5, val:8},
  {id:"rate", label:"Hourly cost of whoever does it", pre:"£", min:0, max:80, step:1, val:18}
 ],
 calc: function(v){
  var y=v.hours*v.rate*52, back=Math.min(5,v.hours)*v.rate*52;
  return {
   figs:[{label:"Fleet admin a year", value:money(y), hl:true},{label:"Per vehicle a year", value:money(y/Math.max(v.vehicles,1))},{label:"Five hours a week back is worth", value:money(back)+" a year"}],
   chart:{title:"Fleet admin cost a year", rows:[{l:"Now",v:money(y),w:100,c:"#B84E1C"},{l:"With five hours a week automated",v:money(y-back),w:y>0?(y-back)/y*100:0,c:"#FF8A3D"}]},
   leak:back/12, headline:"Fleet admin costs about "+money(y)+" a year.  Taking five hours a week off it is worth "+money(back)+"."
  };
 },
 questions: [
  {text:"How many hours a week go on fleet admin (defects, compliance, tachographs, spreadsheets)?", short:"Hours on admin",
   answers:["Under 2","2 to 5","5 to 10","Over 10"],
   tip:"Add up one week's fleet admin hours properly, job by job.  The two biggest jobs are where to start automating."},
  {text:"How are tachograph and driver card downloads handled?", short:"Tachograph downloads",
   answers:["Remotely and automatically, or we don't run tachograph vehicles","Manually, on a fixed schedule","Manually, when someone remembers","We're not sure they're all done"],
   tip:"Check every vehicle and driver card is downloaded on time this month.  Then ask whether remote download would take the job off the list."},
  {text:"How many of your weekly fleet reports are built by hand?", short:"Hand-built reports",
   answers:["None, they arrive automatically","One or two","Most of them","All of them"],
   tip:"List every weekly report built by hand and who reads it.  Drop the ones nobody acts on and schedule the rest."},
  {text:"Where do your maintenance schedules live?", short:"Maintenance schedules",
   answers:["In our fleet system, with reminders","A shared calendar","A spreadsheet","On paper or in someone's head"],
   tip:"Move maintenance schedules into one system with reminders, so nothing depends on one person remembering."},
  {text:"If your fleet admin person was off for two weeks, what would happen?", short:"Cover when someone's off",
   answers:["Nothing, the system keeps running","A few things would slip","A lot would slip","It would stop"],
   tip:"Write down what would stop if your admin person was off for two weeks.  Each item on that list is a job for the system, not a person."}
 ],
 results: [
  "Most of your fleet admin already runs itself.  This module shows a few more jobs that could come off the to-do list.",
  "Hours are going each week on jobs a system could do.  In many fleets those hours add up to £1,000 to £2,000 per vehicle a year.  This module shows which jobs to automate first.",
  "Admin is swallowing hours every week and relies on people remembering.  That's a cost and a risk.  This module shows how to hand the repeat work to the system."
 ]
};

return {lesson: LESSON, quiz: M};
});
