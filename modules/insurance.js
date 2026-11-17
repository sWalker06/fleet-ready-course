// Fleet Ready module: Have the Evidence to Defend a Claim
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("insurance", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Make sure an incident is never your word against theirs.",
 "problem": [
  "Without reliable footage, an incident becomes your word against the other driver's, and your premium ends up paying for it.",
  "Forward-facing cameras help, but reversing and side-on incidents are where they leave you exposed.  Footage pulled days later from a memory card is often already lost or overwritten."
 ],
 "cost": "£3,000 to £8,000 per claim.",
 "signs": [
  "Only some vehicles have cameras, or none do",
  "Getting footage means pulling a memory card days later",
  "After an incident you have the driver's account and a few photos",
  "At least one claim in three years you couldn't prove your side of"
 ],
 "good": [
  "Forward, rear and side cameras on every vehicle that needs them",
  "Footage retrieved remotely within the hour",
  "Evidence from several angles, the same day",
  "Camera and driver data shared with your insurer at renewal"
 ],
 "fixes": [
  [
   "Fleet-grade camera systems",
   "Cameras linked to trip events, built for evidence rather than consumer dashcams."
  ],
  [
   "Multi-channel cameras",
   "Side, rear and interior views for the vehicles and work where most incidents happen."
  ],
  [
   "Remote footage retrieval",
   "Clips pulled from the office straight after an incident, before anything is overwritten."
  ]
 ],
 "fails": [
  [
   "Wrong product for the problem",
   "Consumer dashcams are not fleet camera systems.  Storage, retention and evidence quality are very different."
  ],
  [
   "Cost higher than expected",
   "Ask for the total cost over three years, including storage and footage retrieval, not just the monthly rate."
  ]
 ],
 "target": "Have same-day footage available for every incident within three months, and take it to the next renewal.",
 "questions": [
  "How is footage stored, how long is it kept, and would it stand up as evidence?",
  "What happens when a camera's storage fails, and how would we know?",
  "Can footage be retrieved remotely, and how quickly?"
 ],
 "actions": [
  "List every claim from the last three years and the evidence you had",
  "Check which vehicles have which cameras",
  "Time how long it takes to get footage after an incident",
  "Ask your broker what camera or driver data they'd take at renewal"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "What footage protects you and what leaves you exposed.",
 numSub: "Your premium and the claims you couldn't prove your side of.  We'll show what weak evidence is costing a year.",
 typicalCost: "£3,000 to £8,000 per claim",
 nums: [
  {id:"vehicles", label:"Vehicles", min:1, max:150, step:1, val:12},
  {id:"premium", label:"Fleet insurance premium a year", pre:"£", min:0, max:200000, step:500, val:18000},
  {id:"claims", label:"Claims in 3 years you couldn't prove", min:0, max:20, step:1, val:1},
  {id:"claimcost", label:"Cost to you of each one", pre:"£", min:0, max:20000, step:250, val:5000}
 ],
 calc: function(v){
  var c=v.claims*v.claimcost/3;
  return {
   figs:[{label:"Unproven claims, a year on average", value:money(c), hl:true},{label:"Premium per vehicle a year", value:money(v.premium/Math.max(v.vehicles,1))},{label:"Unproven claims over 3 years", value:money(v.claims*v.claimcost)}],
   chart:{title:"Insurance cost a year", rows:[{l:"Premium",v:money(v.premium),w:100,c:"#B84E1C"},{l:"Claims you couldn't prove",v:money(c),w:v.premium>0?c/v.premium*100:(c>0?100:0),c:"#FF8A3D"}]},
   leak:c/12, headline:(v.premium>0||c>0)?"Claims you couldn't prove cost about "+money(c)+" a year, on top of a "+money(v.premium)+" premium.":""
  };
 },
 questions: [
  {text:"Which cameras do your vehicles have?", short:"Camera coverage",
   answers:["Forward, rear and side on every vehicle","Forward on every vehicle","Some vehicles only","None"],
   tip:"List which vehicles have which cameras.  Reversing and side-on incidents are where forward-only cameras leave you exposed."},
  {text:"How quickly can you get footage after an incident?", short:"Getting footage",
   answers:["Within the hour, remotely","The same day","Days later, by pulling a memory card","It's often lost or overwritten"],
   tip:"Time how long footage took to reach you after the last incident.  Footage pulled days later from a memory card is often already gone."},
  {text:"After an incident, what evidence do you usually have?", short:"Evidence after an incident",
   answers:["Footage from several cameras, the same day","Forward camera footage only","The driver's account and photos","Nothing reliable"],
   tip:"Write a one-page incident routine: who pulls footage, who takes photos and who calls the insurer, all the same day."},
  {text:"In the last three years, how many claims could you not prove your side of?", short:"Unproven claims",
   answers:["None","One","Two or three","More than three or not sure"],
   tip:"List every claim from the last three years and the evidence you had for each.  The gaps show exactly which cameras or routines you're missing."},
  {text:"Have you shared camera or driver data with your insurer at renewal?", short:"Using data at renewal",
   answers:["Yes, and it helped our premium","Yes, but it made no difference","No","We didn't know we could"],
   tip:"Ask your broker before renewal which camera or driver data they'll take into account, then send it with your renewal."}
 ],
 results: [
  "You have the footage to defend a claim and the speed to use it.  This module covers how to put that evidence to work at renewal.",
  "You have some evidence, but there are gaps in what your cameras see or how fast you can get it.  Reversing and side-on incidents are where forward-only cameras leave you exposed.  This module shows where to close the gaps.",
  "Without reliable footage, an incident becomes your word against theirs.  Your premium ends up paying for it.  This module shows what evidence protects you and how to get it."
 ]
};

return {lesson: LESSON, quiz: M};
});
