// Fleet Ready module: Know Where Every Asset Is
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("assets", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Know where every high-value asset is, not just the vehicles.",
 "problem": [
  "Trailers, plant, generators and tools often go untracked, even when the vans that tow them are.",
  "Untracked equipment is what goes missing, gets hunted for, or sits on hire longer than it should.  Each lost item is a replacement bill plus the job it held up."
 ],
 "cost": "",
 "signs": [
  "High-value equipment isn't tracked, and items have gone missing",
  "Equipment is lost, stolen or hunted for several times a year",
  "Hire returns rely on someone remembering",
  "Hours a week go on finding equipment"
 ],
 "good": [
  "Every high-value asset tracked",
  "Nothing lost or hunted for in the last year",
  "Hire return dates come up as alerts",
  "Every asset and its location visible from one screen"
 ],
 "fixes": [
  [
   "Asset trackers",
   "Trailers, plant, generators and non-powered equipment shown alongside your vehicles."
  ],
  [
   "Geofencing and out-of-hours alerts",
   "A warning when equipment leaves a site or moves when it shouldn't."
  ],
  [
   "Hire and return reminders",
   "Alerts before hired-in equipment is due back, so extra hire days stop."
  ]
 ],
 "fails": [
  [
   "Wrong product for the problem",
   "Equipment without power needs different trackers from vehicles.  Make sure what you buy suits what you're tracking."
  ],
  [
   "Cost higher than expected",
   "Ask about the full cost per asset over three years, not just the hardware price."
  ]
 ],
 "target": "Have every asset worth over a set value tracked and visible on one screen within two months.",
 "questions": [
  "Can assets and vehicles be seen on the same map and reports?",
  "How long do the trackers last on non-powered equipment, and how will we know when they need attention?",
  "Can we set alerts for equipment leaving a site or moving out of hours?"
 ],
 "actions": [
  "List every high-value asset and its rough value",
  "Note anything lost, stolen or hunted for in the last 12 months",
  "Check how hire return dates are tracked today",
  "Pick the five assets you'd most hate to lose"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "Knowing where your trailers, plant and tools are.",
 numSub: "What went missing last year and how much time goes on finding equipment.  We'll put a yearly figure on it.",
 typicalCost: "",
 nums: [
  {id:"assets", label:"High-value assets (trailers, plant, tools)", min:0, max:300, step:1, val:20},
  {id:"lost", label:"Items lost or stolen in the last 12 months", min:0, max:30, step:1, val:2},
  {id:"value", label:"Average value of one item", pre:"£", min:0, max:50000, step:250, val:2500},
  {id:"hours", label:"Hours a week finding equipment", min:0, max:40, step:0.5, val:2},
  {id:"rate", label:"Hourly cost of whoever looks", pre:"£", min:0, max:80, step:1, val:18}
 ],
 calc: function(v){
  var loss=v.lost*v.value, look=v.hours*v.rate*52, y=loss+look, mx=Math.max(loss,look,1);
  return {
   figs:[{label:"Lost equipment and searching a year", value:money(y), hl:true},{label:"Replacing lost items", value:money(loss)},{label:"Time spent looking", value:money(look)}],
   chart:{title:"What untracked equipment cost last year", rows:[{l:"Replacing lost or stolen items",v:money(loss),w:loss/mx*100,c:"#B84E1C"},{l:"Time spent finding equipment",v:money(look),w:look/mx*100,c:"#FF8A3D"}]},
   leak:y/12, headline:"Lost equipment and time spent looking cost about "+money(y)+" last year."
  };
 },
 questions: [
  {text:"Do you track trailers, plant, tools or other high-value equipment?", short:"Tracking equipment",
   answers:["Yes, all of it, or we don't run any","Some of it","No, and we've lost items before","No, and we don't know what's out"],
   tip:"List every high-value asset with its rough value.  Pick the five you'd most hate to lose and start there."},
  {text:"In the last 12 months, how often has equipment been lost, stolen or hunted for?", short:"Lost or hunted-for kit",
   answers:["Never","Once or twice","Several times","Regularly"],
   tip:"Write down everything lost, stolen or hunted for in the last 12 months, with the cost of each.  That's the case for tracking, in your own numbers."},
  {text:"How do you know when hired-in equipment is due back?", short:"Hire returns",
   answers:["System alerts, or we don't hire in","A calendar reminder","Someone remembers","We often pay for extra hire days"],
   tip:"Check last quarter's hire invoices for extra days.  An alert two days before each return date usually stops them."},
  {text:"How much time goes on finding equipment each week?", short:"Time spent finding kit",
   answers:["None","Under an hour","A few hours","More than that"],
   tip:"Ask the team to note every time they go looking for equipment for one week.  The hours usually surprise people."},
  {text:"Could you list every high-value asset and where it is right now?", short:"Knowing where it all is",
   answers:["Yes, from one screen","Most of them","Only after some phone calls","No"],
   tip:"Aim for one screen showing every asset alongside the vehicles.  Equipment without power needs a different tracker, so check before you buy."}
 ],
 results: [
  "You know where your equipment is.  This module covers how tracking can also cut hire bills and idle kit.",
  "Some of your equipment is tracked and some isn't.  The untracked items are the ones that go missing or sit on hire longer than they should.  This module shows what's worth tracking first.",
  "Equipment is going missing or being hunted for without anyone knowing where it is.  Each lost item is a replacement bill plus the job it held up.  This module shows how to get eyes on it."
 ]
};

return {lesson: LESSON, quiz: M};
});
