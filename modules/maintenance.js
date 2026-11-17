// Fleet Ready module: Catch Breakdowns Before They Happen
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("maintenance", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Catch faults before they become breakdowns.",
 "problem": [
  "Breakdowns rarely come out of nowhere.  The warning is often sitting in the vehicle's fault codes days before it stops, but it only gets seen at the next service or when the driver rings from the roadside.",
  "Reactive repairs typically cost three to four times the planned version, before you count the lost day, the hire vehicle and the job that didn't get done."
 ],
 "cost": "£1,500 to £3,000 per vehicle.",
 "signs": [
  "Three or more unplanned breakdowns or off-road days a year, or nobody records them",
  "Fault codes are found at the next service, or when the vehicle stops",
  "Services are scheduled from a spreadsheet, or when a driver mentions it",
  "Driver-reported defects arrive on paperwork later, or not at all"
 ],
 "good": [
  "Fault code alerts arrive the same day",
  "Services and MOTs are scheduled automatically from mileage or engine hours",
  "Defects reach whoever fixes them digitally, the same day",
  "You know what a day off the road costs per vehicle, and track it"
 ],
 "fixes": [
  [
   "Engine data and fault codes",
   "Diagnostics read straight from the vehicle, with alerts when a warning appears."
  ],
  [
   "Reminders from real usage",
   "Services triggered by actual mileage or engine hours, not dates in a diary."
  ],
  [
   "Digital walkaround checks",
   "Defects logged on a phone and passed straight to the maintenance record."
  ]
 ],
 "fails": [
  [
   "Systems didn't connect",
   "Fault alerts that go to an inbox nobody reads, or checks that never reach the workshop, change nothing."
  ],
  [
   "Data wasn't accurate enough",
   "Not every system reads every make's fault codes.  Check yours are covered before relying on it."
  ]
 ],
 "target": "Halve unplanned off-road days over the next 12 months.",
 "questions": [
  "Which fault codes can you read for our vehicle makes, and how do the alerts reach us?",
  "Can service reminders run from engine hours as well as mileage?",
  "Do walkaround defects feed straight into the maintenance record?"
 ],
 "actions": [
  "Count last year's unplanned off-road days",
  "Work out what one day off the road costs you: lost work, hire and overtime",
  "Move service and MOT dates out of the spreadsheet into a reminder system",
  "Find out how fault codes are seen today, and by whom"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "Spotting the breakdown days before it strands a vehicle.",
 numSub: "Last year's unplanned off-road days and what a day off the road costs you: lost work, hire vehicles and overtime.",
 typicalCost: "£1,500 to £3,000 per vehicle",
 nums: [
  {id:"vehicles", label:"Vehicles", min:1, max:150, step:1, val:12},
  {id:"days", label:"Unplanned off-road days last year", min:0, max:200, step:1, val:10},
  {id:"daycost", label:"Cost of one day off the road", pre:"£", min:0, max:3000, step:25, val:600}
 ],
 calc: function(v){
  var y=v.days*v.daycost;
  return {
   figs:[{label:"Unplanned downtime a year", value:money(y), hl:true},{label:"Per vehicle a year", value:money(y/Math.max(v.vehicles,1))},{label:"Saved a year by halving it", value:money(y/2)}],
   chart:{title:"Downtime cost a year", rows:[{l:"Now",v:money(y),w:100,c:"#B84E1C"},{l:"If you halve off-road days",v:money(y/2),w:50,c:"#FF8A3D"}]},
   leak:y/12, headline:y>0?"Unplanned downtime cost you about "+money(y)+" last year.  Halving it is worth "+money(y/2)+" a year.":""
  };
 },
 questions: [
  {text:"How many unplanned breakdowns or off-road days did you have in the last 12 months?", short:"Unplanned off-road days",
   answers:["None","1 to 2","3 to 5","More than 5 or not recorded"],
   tip:"Start a simple log of every unplanned off-road day: vehicle, cause and days lost.  You can't halve a number you don't record."},
  {text:"When a vehicle logs a fault code or warning light, when do you find out?", short:"Seeing fault codes",
   answers:["The same day, by alert","When the driver reports it","At the next service","When it breaks down"],
   tip:"Find out whether your system can read fault codes for your makes and send an alert the same day.  The warning is often there days before the vehicle stops."},
  {text:"How are services and MOTs scheduled?", short:"Scheduling services",
   answers:["Automatically from mileage or engine hours","Calendar reminders","A spreadsheet or wall chart","When a driver tells us"],
   tip:"Move service and MOT dates out of the spreadsheet into reminders driven by real mileage or engine hours."},
  {text:"How do driver-reported defects reach whoever fixes them?", short:"Defect reporting",
   answers:["Digitally, the same day","A phone call or message","Paperwork handed in later","They often don't"],
   tip:"Switch walkaround checks to a phone app that sends defects straight to whoever fixes them, the same day."},
  {text:"Do you know what a day off the road costs you per vehicle?", short:"Cost of a day off the road",
   answers:["Yes, and we track it","Roughly","We've never worked it out","No"],
   tip:"Add up lost work, hire vehicle and overtime for one recent off-road day.  That figure decides how much prevention is worth."}
 ],
 results: [
  "Your vehicles are maintained on a plan, not on breakdowns.  This module shows how fault code alerts can tighten that plan further.",
  "Some faults are only found when a driver mentions them or the vehicle stops.  Reactive repairs typically cost three to four times the planned version.  This module shows how to catch them earlier.",
  "Breakdowns are finding you before you find them.  The warning is often in your system days before the vehicle stops.  This module shows how to see it in time."
 ]
};

return {lesson: LESSON, quiz: M};
});
