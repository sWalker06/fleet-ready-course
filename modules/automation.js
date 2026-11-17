// Fleet Ready module: Automate the Jobs That Repeat
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("automation", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Let your systems do the jobs that repeat, and only connect what earns its keep.",
 "problem": [
  "The same figures get typed into the tracking system, the job sheet, the invoice and the payroll spreadsheet.  Customers ring to ask where their delivery is, and someone checks the map and rings them back.  None of it is hard, but it happens every day.",
  "The answer isn't to connect everything.  Every integration costs money to set up and keep running, so each one has to earn its keep: a job it removes, hours it saves, or mistakes it stops."
 ],
 "cost": "",
 "signs": [
  "The same figures are typed into more than one system",
  "Customers ring to ask where their delivery or engineer is",
  "Jobs wait days to be invoiced because paperwork comes back late",
  "You've paid for integrations nobody could say what they save"
 ],
 "good": [
  "Each figure is entered once and flows where it's needed",
  "Customers get arrival times without ringing in",
  "Jobs are invoiced the day they're done",
  "Every connection has a job it removes and a saving you can name"
 ],
 "fixes": [
  [
   "Connect tracking to job and invoicing",
   "Completed jobs, times and mileage feed the invoice and job sheet without retyping."
  ],
  [
   "Automatic customer updates",
   "Arrival times and delivery confirmations go to customers without a phone call."
  ],
  [
   "Integration that earns its keep",
   "Before connecting two systems, write down the job it removes and the hours it saves.  If you can't, don't connect them."
  ],
  [
   "AI and automation for the routine",
   "Use AI tools to summarise weekly reports, flag exceptions and draft routine replies, then check the time saved."
  ]
 ],
 "fails": [
  [
   "Connecting for the sake of it",
   "Integrations that nobody uses still cost money each month and break when a system updates."
  ],
  [
   "Automating a broken process",
   "If the job is wrong by hand, automating it just gets it wrong faster.  Fix the process first."
  ]
 ],
 "target": "Pick the two biggest repeat jobs and automate them within three months, with the hours saved written down for each.",
 "questions": [
  "Which of our systems can you connect to, and can you show us a customer already running that connection?",
  "Can customers get arrival times automatically, and what does that cost?",
  "What does each integration cost a month, and what happens to it when either system updates?"
 ],
 "actions": [
  "List every place the same figure is typed twice",
  "Count the 'where is it?' calls for one week",
  "Measure the days between a job finishing and the invoice going out",
  "For each integration you have or want, write the job it removes and the hours it saves"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "Hand the repeat jobs to your systems, and only connect what earns its keep.",
 numSub: "Roughly how much time goes on copying figures between systems and answering 'where is it?' calls, and what automating some of it would cost.",
 typicalCost: "",
 nums: [
  {id:"hours", label:"Hours a week copying figures between systems", min:0, max:60, step:0.5, val:6},
  {id:"calls", label:"'Where is it?' calls a week", min:0, max:300, step:5, val:20},
  {id:"mins", label:"Minutes per call", min:1, max:20, step:1, val:4},
  {id:"rate", label:"Hourly cost of whoever does it", pre:"£", min:0, max:80, step:1, val:18},
  {id:"cost", label:"Cost of automating half of it, a month", pre:"£", min:0, max:2000, step:10, val:100}
 ],
 calc: function(v){
  var copy=v.hours*v.rate*52, call=v.calls*v.mins/60*v.rate*52, rep=copy+call, half=rep/2, ac=v.cost*12, net=half-ac, mx=Math.max(copy,call,ac,1);
  return {
   figs:[{label:"Repeat work a year", value:money(rep), hl:true},{label:"Automating half saves a year", value:money(half)},{label:(net>=0?"Left after paying for it":"Short of paying for itself"), value:money(Math.abs(net))}],
   chart:{title:"Does automating earn its keep?", rows:[{l:"Copying figures between systems",v:money(copy),w:copy/mx*100,c:"#B84E1C"},{l:"Answering 'where is it?' calls",v:money(call),w:call/mx*100,c:"#FF8A3D"},{l:"Cost of automating half, a year",v:money(ac),w:ac/mx*100,c:"#74787D"}]},
   leak:Math.max(0,net)/12, headline:"Repeat work costs about "+money(rep)+" a year.  Automating half of it at "+money(v.cost)+" a month "+(net>=0?"leaves "+money(net)+" a year.":"costs "+money(-net)+" a year more than it saves, so start with a bigger job.")
  };
 },
 questions: [
  {text:"How often are the same figures typed into more than one system?", short:"Typing figures twice",
   answers:["Never, each figure goes in once","Occasionally","Every week","Every day"],
   tip:"List every place the same figure is typed twice.  The longest entry on that list is where an integration earns its keep."},
  {text:"How do customers find out where their delivery or engineer is?", short:"Customer updates",
   answers:["Automatic updates with arrival times","We send updates by hand","They ring us and we check the map","They ring us and we ring the driver"],
   tip:"Count the 'where is it?' calls for one week.  Then ask whether your system can send arrival times to customers automatically."},
  {text:"How are jobs invoiced once they're done?", short:"Invoicing jobs",
   answers:["Automatically from job and vehicle data","The same day, by hand","When paperwork comes back from drivers","Whenever someone gets round to it"],
   tip:"Measure the days between a job finishing and the invoice going out.  Every day of delay is cash you've earned and don't have yet."},
  {text:"Do your systems connect to each other?", short:"Connected systems",
   answers:["Yes, the ones that matter, and we know what each saves","Some do","We've tried, but they don't really talk","No"],
   tip:"For each connection you have or want, write down the job it removes and the hours it saves.  If you can't, it hasn't earned its keep yet."},
  {text:"Have you used AI or automation tools to cut repeat work?", short:"Using AI and automation",
   answers:["Yes, and we measured the time saved","Yes, but we didn't measure it","We've looked into it","No"],
   tip:"Pick one weekly report and try an AI tool to summarise it and flag what needs attention.  Time it against doing it by hand."}
 ],
 results: [
  "Your systems already share the work.  This module shows how to check each connection still earns its keep, and where else to look.",
  "Some jobs run themselves and some still rely on people copying figures across.  Those copies cost hours and cause mistakes.  This module shows which repeat jobs to automate first.",
  "Your team is doing work your systems could do.  Every figure typed twice is time and a chance for a mistake.  This module shows how to automate the jobs that repeat, without connecting things for the sake of it."
 ]
};

return {lesson: LESSON, quiz: M};
});
