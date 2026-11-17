// Fleet Ready module: Get Full Value from Your System
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("system-use", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Find the features you already pay for and switch on the ones that save money.",
 "problem": [
  "Most operators use around 20% of the tracking system they pay for every month.  Alerts, driver scoring, maintenance reminders and scheduled reports often sit switched off, while the system is used as a dot on a map.",
  "The features that save the most money are usually the ones nobody switched on.  You're already paying for them."
 ],
 "cost": "Most operators use around 20% of the system they pay for.",
 "signs": [
  "The system is mainly used to see where vehicles are",
  "Reports only get opened when something goes wrong",
  "Nobody has reviewed what the system can do for over two years",
  "The one person trained on it has since left"
 ],
 "good": [
  "Alerts, driver scoring, maintenance reminders and scheduled reports are all on and used",
  "Someone acts on the reports every week, with actions agreed",
  "The system's features are reviewed at least once a year",
  "Several people are trained, and new starters get trained too"
 ],
 "fixes": [
  [
   "Scheduled reports",
   "The right report arrives in the right inbox every week without anyone building it."
  ],
  [
   "Alerts",
   "Exceptions come to you, instead of waiting to be found when someone has time to look."
  ],
  [
   "Training that repeats",
   "Onboarding for new staff and refreshers when roles change, rather than one session at go-live."
  ]
 ],
 "fails": [
  [
   "The team never adopted it",
   "Right product, right setup, but people didn't use it.  That's a people and change problem, not a product fault."
  ],
  [
   "No proper training",
   "Training that happens once at go-live and is never refreshed rarely keeps people using a system beyond three months."
  ]
 ],
 "target": "Have alerts, driver scoring and two scheduled reports switched on and reviewed every week within 30 days.",
 "questions": [
  "What does our current contract already include that we aren't using?",
  "What training is available when new staff join or someone's role changes?",
  "Can you show us the everyday view for a fleet controller, not the full admin dashboard?"
 ],
 "actions": [
  "Log in and note every menu or report you've never opened",
  "Ask your supplier for a feature review of your account",
  "Switch on one alert and one scheduled report this week",
  "Name one person who acts on the weekly report"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "What your telematics can actually do, and what it's worth switched on.",
 numSub: "Roughly what you pay for tracking and how much of it you use.  We'll show what you're paying for that sits switched off.",
 typicalCost: "Most operators use around 20% of the system they pay for",
 nums: [
  {id:"vehicles", label:"Vehicles with tracking", min:1, max:150, step:1, val:12},
  {id:"perveh", label:"Tracking cost per vehicle a month", pre:"£", min:0, max:80, step:1, val:20},
  {id:"used", label:"How much of the system you use (%)", min:0, max:100, step:5, val:20}
 ],
 calc: function(v){
  var bill=v.vehicles*v.perveh, unused=bill*(100-v.used)/100;
  return {
   figs:[{label:"Paid each month for features you don't use", value:money(unused), hl:true},{label:"Your tracking bill a month", value:money(bill)},{label:"Of the system switched off or unused", value:(100-v.used)+"%"}],
   chart:{title:"Your tracking bill a year", rows:[{l:"Used",v:money(bill*12*v.used/100),w:v.used,c:"#2E7148"},{l:"Paid for, not used",v:money(unused*12),w:100-v.used,c:"#FF8A3D"}]},
   leak:unused, headline:bill>0?"You pay "+money(bill)+" a month for tracking, and about "+money(unused)+" of that buys features you don't use.":""
  };
 },
 questions: [
  {text:"How much of your tracking system do you actually use?", short:"How much you use",
   answers:["Most of it, and we act on it weekly","Some reports now and then","Just to see where vehicles are","We don't have one or I'm not sure"],
   tip:"Log in and write down every menu and report you've never opened.  That list is what you're paying for and not using."},
  {text:"Which of these are switched on and used: alerts, driver scoring, maintenance reminders, scheduled reports?", short:"Money-saving features",
   answers:["All four","Two or three","One","None or not sure"],
   tip:"Switch on one alert and one scheduled report this week.  Pick the ones tied to your biggest cost, usually speeding, idling or fuel."},
  {text:"How often does someone act on your telematics reports?", short:"Acting on reports",
   answers:["Weekly, with actions agreed","Monthly","Only when something goes wrong","Never, or no reports set up"],
   tip:"Name one person who reads the weekly report and agrees one action from it.  A report nobody acts on is just an email."},
  {text:"When did you last review what your system can do?", short:"Reviewing the system",
   answers:["In the last 12 months, and we switched more on","In the last 12 months, but nothing changed","Over two years ago","Never"],
   tip:"Ask your supplier for a feature review of your own account: what your contract includes and what's switched off."},
  {text:"Who in the team has been trained to use it properly?", short:"Training",
   answers:["Several people, trained in the last year","One person","Someone who has since left","No one"],
   tip:"Get two people trained, not one, and book a refresher for every new starter.  Training once at go-live rarely lasts past three months."}
 ],
 results: [
  "You're getting real use from your system.  This module shows the features operators most often leave switched off, so you can check for any you've missed.",
  "You're paying for a full system every month and using part of it.  The features that save the most money are often the ones nobody switched on.  This module shows what to turn on first.",
  "Your system is running as a dot on a map while the features that save money sit unused.  You're already paying for them.  This module shows what to switch on and what it's worth."
 ]
};

return {lesson: LESSON, quiz: M};
});
