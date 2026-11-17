// Fleet Ready module: Keep Your Best Drivers
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("drivers", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Use driver data to keep your best people, not push them out.",
 "problem": [
  "Good drivers are hard to find and expensive to replace.  Scoring done badly can be part of why they leave.",
  "Settings nobody calibrated can mark your best driver down for the work they're asked to do.  Scores drivers never see feel like surveillance rather than support."
 ],
 "cost": "£2,800 to £6,500 per driver replaced.",
 "signs": [
  "Good drivers leave several times a year",
  "Behaviour is scored on default settings, or only from complaints",
  "Drivers can't see their own scores, or nobody talks them through it",
  "Good driving is only recognised when a customer mentions it"
 ],
 "good": [
  "Good drivers rarely leave",
  "Scoring is calibrated to your vehicles and type of work",
  "Drivers see their own scores and talk them through with you",
  "Good driving is recognised monthly, using the scores"
 ],
 "fixes": [
  [
   "Calibrated behaviour scoring",
   "Settings matched to your vehicles and routes, so scores are fair to the job."
  ],
  [
   "Driver-facing scores",
   "Drivers see their own figures, which turns scoring into something they can act on."
  ],
  [
   "Recognition from the data",
   "Monthly recognition based on scores, so the best drivers know it's noticed."
  ]
 ],
 "fails": [
  [
   "The team never adopted it",
   "If drivers think scoring is unfair, they'll resist it, and the data stops meaning anything."
  ],
  [
   "System too complex for the team",
   "If drivers can't understand their score in a minute, it won't change how they drive."
  ]
 ],
 "target": "Recognise the top three drivers every month and lose no good drivers over scoring in the next 12 months.",
 "questions": [
  "Can scoring settings be adjusted for our vehicle types and routes?",
  "What do drivers see, and can you show us the driver's view?",
  "How do your other customers use scores for recognition?"
 ],
 "actions": [
  "Check whether your scoring settings are still on the defaults",
  "Share each driver's score with them in their next one-to-one",
  "Pick a simple monthly recognition for the top scorers",
  "Ask the last driver who left whether scoring played a part"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "Why good drivers leave and what it costs to replace them.",
 numSub: "How many drivers you have, how many left last year and what replacing one costs: recruitment, training and lost work.",
 typicalCost: "£2,800 to £6,500 per driver replaced",
 nums: [
  {id:"drivers", label:"Drivers", min:1, max:150, step:1, val:15},
  {id:"left", label:"Drivers who left in the last 12 months", min:0, max:60, step:1, val:3},
  {id:"cost", label:"Cost to replace one driver", pre:"£", min:0, max:15000, step:100, val:4500}
 ],
 calc: function(v){
  var y=v.left*v.cost, t=v.left/Math.max(v.drivers,1)*100;
  return {
   figs:[{label:"Cost of leavers last year", value:money(y), hl:true},{label:"Driver turnover", value:Math.round(t)+"%"},{label:"Saved by keeping one more", value:money(v.cost)}],
   chart:{title:"Driver turnover cost a year", rows:[{l:"Last 12 months",v:money(y),w:100,c:"#B84E1C"},{l:"With one fewer leaver",v:money(Math.max(0,y-v.cost)),w:y>0?Math.max(0,y-v.cost)/y*100:0,c:"#FF8A3D"}]},
   leak:y/12, headline:"Replacing "+v.left+" driver"+(v.left===1?"":"s")+" cost about "+money(y)+" last year, with turnover at "+Math.round(t)+"%."
  };
 },
 questions: [
  {text:"How often do good drivers leave?", short:"Good drivers leaving",
   answers:["Rarely","One a year","Several a year","We struggle to keep them"],
   tip:"Ask the last driver who left why they went, and whether scoring or how they were managed played a part."},
  {text:"How is driver behaviour scored?", short:"How scoring is set",
   answers:["On settings calibrated to our work","On the system's default settings","Only from complaints or incidents","Not scored"],
   tip:"Check whether your scoring is still on the default settings.  Defaults can mark a good driver down for the work you ask them to do."},
  {text:"Can drivers see their own scores?", short:"Drivers seeing scores",
   answers:["Yes, and we talk them through it","Yes, but we don't discuss them","Only if they ask","No"],
   tip:"Share each driver's score with them at their next one-to-one.  A score drivers never see feels like surveillance, not support."},
  {text:"How often is good driving recognised or rewarded?", short:"Recognising good driving",
   answers:["Monthly, using the scores","Occasionally","Only when a customer praises someone","Never"],
   tip:"Pick a simple monthly recognition for the top three scorers.  It costs little and tells your best drivers it's noticed."},
  {text:"Has a good driver left over how they were scored or managed?", short:"Leaving over scoring",
   answers:["No","Not that I know of","Once","More than once"],
   tip:"Before changing anything else, review scoring settings with two of your best drivers.  If they think it's fair, the rest will follow."}
 ],
 results: [
  "Your drivers are scored fairly and know where they stand.  This module covers how to turn those scores into recognition that keeps them.",
  "Drivers are being scored, but not always on settings that fit their work or in a way they can see.  Replacing one good driver typically costs £2,800 to £6,500.  This module shows how to make scoring work for retention.",
  "Good drivers are leaving and scoring may be part of the reason.  Settings nobody calibrated can mark your best driver down.  This module shows how to set scoring up so it keeps people rather than pushing them out."
 ]
};

return {lesson: LESSON, quiz: M};
});
