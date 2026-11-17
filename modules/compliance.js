// Fleet Ready module: Make Your Records Audit-Ready
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("compliance", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Make compliance something you can prove, not just something you do.",
 "problem": [
  "In most fleets the checks happen.  The trouble is the records behind them, which often wouldn't stand up to an audit.",
  "A gap in the paperwork can cost as much as a gap in the check, and it puts more than money at risk.  Fixing it is mostly about how checks are recorded."
 ],
 "cost": "",
 "signs": [
  "Walkaround checks are on paper and rarely reviewed, or not done consistently",
  "Records would struggle in an audit, or a roadside check has found a problem",
  "Licences are only checked when someone starts",
  "Pulling maintenance records for DVSA would take days"
 ],
 "good": [
  "Walkaround checks recorded digitally, with defects flagged to the office",
  "Records that would stand up to an audit",
  "Licences checked automatically at least every six months",
  "Maintenance records available in minutes, from one system"
 ],
 "fixes": [
  [
   "Digital walkaround checks",
   "Every check timestamped and stored, with defects passed on straight away."
  ],
  [
   "Tachograph remote download",
   "Downloads, infringement alerts and driver card management without manual intervention."
  ],
  [
   "Drivers' hours alerts",
   "Working time monitored automatically, with alerts before a breach rather than after."
  ]
 ],
 "fails": [
  [
   "Rushed implementation",
   "Paper checks moved to an app without changing who reviews them just moves the gap."
  ],
  [
   "Wrong product for the problem",
   "Not every supplier is certified for tachograph remote download.  Check before you shortlist."
  ]
 ],
 "target": "Be able to produce any vehicle's full maintenance and check history within ten minutes by the end of the quarter.",
 "questions": [
  "Are you certified for tachograph remote download, and can you show your DVSA compliance credentials?",
  "How quickly could we produce a vehicle's maintenance and check records?",
  "Can licence checks and drivers' hours monitoring run automatically?"
 ],
 "actions": [
  "Time how long it takes to pull one vehicle's maintenance records",
  "Check when each driver's licence was last checked",
  "Look through last month's walkaround checks for gaps",
  "Write down how drivers' hours are monitored today, and by whom"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "Keeping your licence safe and your records ready for an audit.",
 numSub: "How long your records take to pull and how much checking is done by hand.  We'll show what an audit would take today.",
 typicalCost: "",
 nums: [
  {id:"vehicles", label:"Vehicles", min:1, max:150, step:1, val:12},
  {id:"mins", label:"Minutes to pull one vehicle's records", min:1, max:240, step:1, val:45},
  {id:"hours", label:"Hours a week checking by hand", min:0, max:40, step:0.5, val:3},
  {id:"rate", label:"Hourly cost of whoever does it", pre:"£", min:0, max:80, step:1, val:18}
 ],
 calc: function(v){
  var audit=v.vehicles*v.mins/60, target=v.vehicles*10/60, y=v.hours*v.rate*52;
  return {
   figs:[{label:"Hours to pull every vehicle's records", value:(Math.round(audit*10)/10)+" hrs", hl:true},{label:"Manual checking a year", value:money(y)},{label:"At ten minutes a vehicle", value:(Math.round(target*10)/10)+" hrs"}],
   chart:{title:"Time to produce records for an audit", rows:[{l:"Now",v:(Math.round(audit*10)/10)+" hours",w:100,c:"#B84E1C"},{l:"At ten minutes a vehicle",v:(Math.round(target*10)/10)+" hours",w:audit>0?Math.min(100,target/audit*100):0,c:"#2E7148"}]},
   leak:y/12, headline:"Producing every vehicle's records would take about "+(Math.round(audit*10)/10)+" hours today, and manual checking costs "+money(y)+" a year."
  };
 },
 questions: [
  {text:"How are daily walkaround checks recorded?", short:"Walkaround checks",
   answers:["Digitally, with defects flagged to the office","On paper, reviewed weekly","On paper, rarely reviewed","Not done consistently"],
   tip:"Look through last month's walkaround checks for gaps: missing days, missing signatures and defects with no follow-up."},
  {text:"In the last three years, have you had a prohibition notice (PG9) or roadside check that found a problem?", short:"Roadside checks",
   answers:["None, and our records would stand up to an audit","None, but our records would struggle","One","More than one"],
   tip:"For any roadside issue, trace it back to the check that should have caught it.  The fix is usually in how the check is recorded."},
  {text:"How do you check driving licences?", short:"Licence checks",
   answers:["Automatically, at least every six months","Manually, once a year","Only when someone starts","We don't"],
   tip:"Write down when each driver's licence was last checked.  Anyone over six months goes on this week's list."},
  {text:"If the Driver and Vehicle Standards Agency (DVSA) asked for your maintenance records tomorrow, how long would it take?", short:"Producing records",
   answers:["Minutes, it's all in one system","A few hours","A few days","We'd struggle to find them"],
   tip:"Time how long it takes to pull one vehicle's full maintenance and check history.  Over ten minutes means the records live in too many places."},
  {text:"How are drivers' hours and working time monitored?", short:"Drivers' hours",
   answers:["Automatically, with alerts","Checked by hand each week","Checked when there's a problem","They aren't"],
   tip:"Write down how drivers' hours are checked today and by whom.  Then ask whether an alert could warn you before a breach rather than after."}
 ],
 results: [
  "Your compliance records would stand up to scrutiny.  This module covers how to keep them that way with less manual checking.",
  "Most of the checks happen, but the records behind them wouldn't all stand up to an audit.  A gap in the paperwork can cost as much as a gap in the check.  This module shows how to tighten both.",
  "Checks and records are patchy.  That puts more than money at risk.  Fixing it is mostly about how the checks are recorded.  This module shows how to make compliance something you can prove."
 ]
};

return {lesson: LESSON, quiz: M};
});
