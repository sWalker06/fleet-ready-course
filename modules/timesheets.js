// Fleet Ready module: Pay Only for Hours Worked
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("timesheets", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Check the hours you pay against the hours worked, by exception.",
 "problem": [
  "In many fleets, timesheets are trusted as written and overtime is paid as claimed.",
  "Small daily gaps add up.  Even 15 minutes a day per driver is more than 60 hours a year each, and the data to check it is often already in your tracking system."
 ],
 "cost": "",
 "signs": [
  "Timesheets are taken as written, or there's no consistent record",
  "Nobody has compared timesheets with vehicle hours",
  "Overtime is paid as claimed, with no set process",
  "Payroll takes most of a day each week"
 ],
 "good": [
  "Hours come from the system's start and finish times, checked by exception",
  "Timesheets match vehicle hours with no significant gaps",
  "Overtime is checked against system data before approval",
  "You can prove hours to a customer from system data"
 ],
 "fixes": [
  [
   "Start and finish times from the vehicle",
   "Hours recorded from when vehicles actually start and stop work."
  ],
  [
   "Payroll integration",
   "Hours flow into payroll automatically instead of being retyped."
  ],
  [
   "Job and location records",
   "Evidence to back up the hours on a customer invoice if they're ever questioned."
  ]
 ],
 "fails": [
  [
   "Systems didn't connect",
   "If tracking and payroll don't talk, someone still has to compare them by hand, and it stops happening."
  ],
  [
   "The team never adopted it",
   "Explain to drivers why hours are checked.  Done openly, it protects good drivers as much as the business."
  ]
 ],
 "target": "Check every timesheet against vehicle hours by exception within two months, and cut payroll time by half.",
 "questions": [
  "Can start and finish times be exported to our payroll system automatically?",
  "Can you flag only the timesheets that don't match, rather than all of them?",
  "Can we produce proof of hours for a customer invoice from your data?"
 ],
 "actions": [
  "Compare one week of timesheets with vehicle hours for three drivers",
  "Time how long payroll takes this week",
  "Write down how overtime is approved today",
  "Check whether mileage or hours already feed payroll"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "The gap between hours paid and hours worked.",
 numSub: "Your drivers, their hourly rate and your best guess at the daily gap between hours paid and hours worked.",
 typicalCost: "",
 nums: [
  {id:"drivers", label:"Drivers", min:1, max:150, step:1, val:15},
  {id:"rate", label:"Average hourly rate", pre:"£", min:0, max:40, step:0.5, val:14},
  {id:"mins", label:"Minutes a day paid but not worked (per driver)", min:0, max:60, step:5, val:15},
  {id:"days", label:"Working days a month", min:1, max:31, step:1, val:22}
 ],
 calc: function(v){
  var hrs=v.drivers*v.mins/60*v.days*12, y=hrs*v.rate;
  return {
   figs:[{label:"Paid for hours not worked, a year", value:money(y), hl:true},{label:"Hours a year", value:num(Math.round(hrs))+" hrs"},{label:"Per driver a year", value:money(y/Math.max(v.drivers,1))}],
   chart:{title:"Cost of the timesheet gap", rows:[{l:"Per month",v:money(y/12),w:100/12,c:"#FFB37D"},{l:"Per year",v:money(y),w:100,c:"#B84E1C"}]},
   leak:y/12, headline:v.mins>0?v.mins+" minutes a day per driver adds up to "+num(Math.round(hrs))+" hours, about "+money(y)+" a year.":""
  };
 },
 questions: [
  {text:"How are driver hours recorded for payroll?", short:"Recording hours",
   answers:["From system start and finish times, checked by exception","Timesheets checked against tracking","Timesheets taken as written","No consistent record"],
   tip:"Take one week of timesheets for three drivers and put them next to vehicle start and finish times.  That shows whether there's a gap worth chasing."},
  {text:"Have you ever compared timesheets with actual vehicle hours?", short:"Comparing with vehicle hours",
   answers:["Yes, no significant gaps","Yes, occasional small gaps","Yes, regular gaps","Never"],
   tip:"Compare a month of timesheets with vehicle hours and only look at the ones that don't match.  Checking by exception takes minutes, not hours."},
  {text:"How is overtime approved?", short:"Approving overtime",
   answers:["Checked against system data first","Signed off by a manager","Paid as claimed","No set process"],
   tip:"Write down how overtime is approved today, then add one step: check the claim against vehicle hours before it's signed off."},
  {text:"How long does driver payroll take each week?", short:"Time spent on payroll",
   answers:["Under an hour","A few hours","Most of a day","More than that"],
   tip:"Time this week's payroll.  If hours could flow from the vehicle into payroll, most of that time comes back."},
  {text:"If a customer disputes the hours on an invoice, can you prove them?", short:"Proving hours to customers",
   answers:["Yes, from system data","Usually","Sometimes","No"],
   tip:"Pick one recent invoice and see whether you could prove the hours from system data.  If not, that's money at risk on every disputed bill."}
 ],
 results: [
  "Your hours are recorded and checked against real data.  This module covers how to use the same data to back up customer invoices.",
  "Timesheets are mostly trusted as written.  Even 15 minutes a day per driver adds up to more than 60 hours a year each.  This module shows how to check hours by exception.",
  "Hours paid aren't being checked against hours worked.  Small daily gaps become a large yearly payroll cost.  This module shows how to use the data you already have to close them."
 ]
};

return {lesson: LESSON, quiz: M};
});
