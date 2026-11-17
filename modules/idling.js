// Fleet Ready module: Stop Paying for Engines Standing Still
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("idling", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Put a number on engines running with nowhere to go.",
 "problem": [
  "Engines left running while vehicles are parked, loading, waiting or keeping the cab warm burn fuel with no miles to show for it.",
  "Because it isn't usually measured, nobody knows what it's costing.  Once it's visible, it's often one of the easiest leaks to fix."
 ],
 "cost": "",
 "signs": [
  "Idling isn't measured, or it's measured but nobody looks",
  "Engines run for over 30 minutes a day while parked",
  "Drivers don't really know what idling costs",
  "There's no idling policy, or only an informal one"
 ],
 "good": [
  "Idling measured per vehicle, with alerts and targets",
  "Under ten minutes a day of parked engine time",
  "Drivers see their own idling figures",
  "A clear policy, monitored with alerts"
 ],
 "fixes": [
  [
   "Idling reports and alerts",
   "Idle time measured per vehicle and driver, with alerts when it runs too long."
  ],
  [
   "Driver behaviour scoring",
   "Idling included in each driver's score, so it's part of the same conversation as fuel."
  ],
  [
   "Engine data",
   "Real fuel burned while idling, so the cost is a figure rather than a guess."
  ]
 ],
 "fails": [
  [
   "The saving was never measured",
   "Without a before-and-after figure, idling creeps back within months."
  ],
  [
   "The team never adopted it",
   "A policy drivers don't understand the reason for won't stick.  Show them the numbers."
  ]
 ],
 "target": "Cut average idle time per vehicle by half within three months.",
 "questions": [
  "Can you report idle time per vehicle and per driver?",
  "Can we set an alert when a vehicle idles for longer than a set time?",
  "Is idling included in driver scoring, and can we adjust how much it counts?"
 ],
 "actions": [
  "Measure idle time per vehicle for one week",
  "Agree a simple idling policy with the team",
  "Share each driver's idling figure with them",
  "Measure again in a month and compare"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "The fuel burned while the vehicle isn't going anywhere.",
 numSub: "Your best guess at idling and your fuel price.  We'll show what engines running on the spot cost a month.",
 typicalCost: "",
 nums: [
  {id:"vehicles", label:"Vehicles", min:1, max:150, step:1, val:12},
  {id:"mins", label:"Idle minutes per vehicle a day", min:0, max:180, step:5, val:30},
  {id:"lph", label:"Litres burned per idle hour (your best guess)", min:0.2, max:5, step:0.1, val:1.5},
  {id:"price", label:"Fuel price per litre", pre:"£", min:0.5, max:3, step:0.01, val:1.45},
  {id:"days", label:"Working days a month", min:1, max:31, step:1, val:22}
 ],
 calc: function(v){
  var l=v.vehicles*v.mins/60*v.lph*v.days, m=l*v.price;
  return {
   figs:[{label:"Fuel burned standing still a month", value:money(m), hl:true},{label:"Litres a month", value:num(Math.round(l))+" L"},{label:"Halving idle time saves a year", value:money(m*6)}],
   chart:{title:"Idling cost a year", rows:[{l:"Now",v:money(m*12),w:100,c:"#B84E1C"},{l:"With idle time halved",v:money(m*6),w:50,c:"#FF8A3D"}]},
   leak:m, headline:"Idling burns about "+num(Math.round(l))+" litres a month, around "+money(m)+", based on your own estimates."
  };
 },
 questions: [
  {text:"Do you measure engine idling time per vehicle?", short:"Measuring idling",
   answers:["Yes, with alerts and targets","Measured but not looked at","Aware of it but not measured","No"],
   tip:"Measure idle time per vehicle for one week.  Replace the guess above with the real figure and the cost becomes hard to ignore."},
  {text:"On a typical day, how long does an engine run while the vehicle is parked (loading, waiting, keeping the cab warm)?", short:"Daily idle time",
   answers:["Under 10 minutes","10 to 30 minutes","30 to 60 minutes","Over an hour or don't know"],
   tip:"Find the three vehicles with the most idle time and ask their drivers why.  The reasons are usually fixable: heaters, waiting times or habit."},
  {text:"Do drivers know how much idling costs?", short:"Drivers knowing the cost",
   answers:["Yes, and they see their own figures","We've told them","Not really","No"],
   tip:"Share each driver's own idling figure with them, with the cost in pounds.  A number drivers can see changes more than a rule they're told."},
  {text:"Do you have an idling policy?", short:"Idling policy",
   answers:["Yes, monitored with alerts","Yes, but not monitored","An informal understanding","None"],
   tip:"Agree a simple idling policy with the team, with the reason behind it, then set an alert when a vehicle idles longer than you've agreed."},
  {text:"Have you tried to reduce idling before?", short:"Past attempts",
   answers:["Yes, and we measured the result","Yes, but didn't measure it","We talked about it","No"],
   tip:"Measure now, act for a month, then measure again.  Without a before-and-after figure, idling creeps back within months."}
 ],
 results: [
  "Idling is measured and managed.  This module covers how to keep it from creeping back.",
  "Engines are running while vehicles are parked and it isn't being tracked closely.  That's fuel spent with no miles to show for it.  This module shows how to measure it and bring it down.",
  "Idling isn't measured, so nobody knows what it's costing.  It's often one of the easiest leaks to fix once it's visible.  This module shows how to put a number on it."
 ]
};

return {lesson: LESSON, quiz: M};
});
