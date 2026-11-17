// Fleet Ready module: Know Your True Cost per Mile
// Edit the words inside the quote marks.  Keep the quote marks, commas and brackets.
// The module's name, number and Kajabi links live in course.js, not here.
FR.add("cost-per-mile", function(money, num){

// ---------- LESSON ----------
var LESSON = {
 "summary": "Put one honest number on what each mile really costs you.",
 "problem": [
  "Most operators know their fuel bill.  Far fewer know their true cost per mile: fuel, finance, insurance, maintenance and driver cost added together and divided by the miles each vehicle actually does.",
  "Without that number, jobs get priced on part of the cost and vehicles get chosen on the monthly payment.  It's the figure that changes how you read every other number in the business, which is why Fleet Ready starts here."
 ],
 "cost": "",
 "signs": [
  "Jobs are priced from a day rate, what competitors charge, or gut feel",
  "Vehicles are compared on the monthly payment, not whole-life cost",
  "Finding your most expensive vehicles means digging through invoices",
  "Only the accountant can tell you last month's fleet cost, at year end"
 ],
 "good": [
  "A cost per mile for every vehicle, updated monthly",
  "Every quote starts from the cost per mile for that vehicle type",
  "Replacements are compared on whole-life cost per mile",
  "A monthly report shows which vehicles cost the most to run"
 ],
 "fixes": [
  [
   "Accurate mileage, captured automatically",
   "Tracking records the real miles each vehicle does, so the bottom half of the sum is measured rather than guessed."
  ],
  [
   "Fuel card matching",
   "Fuel spend is linked to each vehicle's mileage, so fuel cost per mile comes straight from the data."
  ],
  [
   "Connected fleet data and reporting",
   "Fuel, maintenance, finance and insurance costs brought into one per-vehicle view instead of rebuilt by hand each month."
  ]
 ],
 "fails": [
  [
   "Data wasn't accurate enough",
   "Odometer errors, mismatched fuel sources and poor installation make the figure wrong.  These are fixable, but only if someone checks how the data is collected."
  ],
  [
   "Systems didn't connect",
   "If mileage never reaches your finance software, cost per mile gets rebuilt in a spreadsheet and goes stale within a month."
  ]
 ],
 "target": "Know the true cost per mile for every vehicle by the end of next month, and price every new job from it.",
 "questions": [
  "Can your system produce a cost per mile for each vehicle, including costs that come from outside it?",
  "Does mileage data feed our accounts or finance software automatically?  Show us live, not in a brochure.",
  "What does it cost and take to bring in our fuel card, maintenance and finance figures?"
 ],
 "actions": [
  "List every cost that belongs to a vehicle: fuel, finance or lease, insurance, maintenance, tyres and driver cost",
  "Pull last month's mileage for each vehicle",
  "Work out cost per mile for your three busiest vehicles",
  "Compare it with what you charged per mile on your last three jobs"
 ]
};

// ---------- QUIZ ----------
// Each question: four answers, best first.  "tip" is emailed when they pick answer 3 or 4.
var M = {
 intro: "The number almost no operator can name, and why it changes every decision you make.",
 numSub: "Slide or type last month's figures for the whole fleet.  We'll work out your cost per mile as you go.  Nothing here is shared with anyone else.",
 typicalCost: "",
 nums: [
  {id:"vehicles", label:"Vehicles", min:1, max:150, step:1, val:12},
  {id:"miles", label:"Miles driven last month", min:0, max:300000, step:500, val:24000},
  {id:"fuel", label:"Fuel", pre:"£", min:0, max:60000, step:100, val:9000, part:"#FF8A3D"},
  {id:"finance", label:"Finance or lease", pre:"£", min:0, max:60000, step:100, val:6000, part:"#B84E1C"},
  {id:"insurance", label:"Insurance (monthly share)", pre:"£", min:0, max:20000, step:50, val:1800, part:"#C2C5C9"},
  {id:"maint", label:"Maintenance and tyres", pre:"£", min:0, max:20000, step:50, val:1500, part:"#74787D"},
  {id:"driver", label:"Driver wages", pre:"£", min:0, max:150000, step:250, val:30000, part:"#F3D2BC"}
 ],
 calc: function(v){
  var total=v.fuel+v.finance+v.insurance+v.maint+v.driver;
  var cpm=v.miles>0?total/v.miles:0;
  var noDriver=v.miles>0?(total-v.driver)/v.miles:0;
  return {
   figs:[
    {label:"True cost per mile", value:v.miles>0?money(cpm,2):"Add miles", hl:true},
    {label:"Running cost per vehicle a month", value:money(total/Math.max(v.vehicles,1))},
    {label:"Cost per mile before wages", value:v.miles>0?money(noDriver,2):"-"}
   ],
   stack:true, total:total, leak:0, cpm:noDriver,
   chart:{title:"Where your money goes each month", rows:M.nums.filter(function(n){return n.part&&v[n.id]>0;}).sort(function(a,b){return v[b.id]-v[a.id];}).slice(0,5).map(function(n){return {l:n.label.replace(/ \(.*\)/,""),v:money(v[n.id])+" ("+Math.round(v[n.id]/(total||1)*100)+"%)",w:v[n.id]/(total||1)*100,c:n.part==="#F3D2BC"?"#E9B48F":n.part};})},
   headline:v.miles>0?"Your true cost per mile is "+money(cpm,2)+", or "+money(total/Math.max(v.vehicles,1))+" per vehicle a month.":""
  };
 },
 questions: [
  {text:"Can you name your true cost per mile (fuel, finance, insurance, maintenance and driver cost together)?", short:"Knowing your cost per mile",
   answers:["Yes, per vehicle, updated monthly","A fleet average, updated yearly","Fuel cost per mile only","No"],
   tip:"Add up last month's fuel, finance, insurance, maintenance and driver cost and divide by the miles.  Then do the same for your three busiest vehicles on their own.  That's your first real cost per mile."},
  {text:"When you price a job, which number do you start from?", short:"Pricing jobs",
   answers:["Cost per mile for that vehicle type","A day rate based on our costs","What competitors charge","Gut feel"],
   tip:"Put your cost per mile next to your last three quotes.  Any job priced below it loses money every time the wheels turn."},
  {text:"When you replace or add a vehicle, how do you compare options?", short:"Choosing vehicles",
   answers:["Whole-life cost per mile","Purchase or lease price plus fuel","The monthly payment","Whatever is available"],
   tip:"Before the next vehicle decision, work out whole-life cost per mile for each option: payment, fuel, servicing, insurance and resale."},
  {text:"How do you know which vehicles cost the most to run?", short:"Spotting expensive vehicles",
   answers:["A monthly report per vehicle","We check once a year","We'd have to dig through invoices","We don't"],
   tip:"Rank every vehicle by cost per mile once a month.  The top three are where to look first."},
  {text:"Who in the business could tell you last month's total fleet cost?", short:"Seeing total fleet cost",
   answers:["Anyone in the office, it's on a report","Me, with an hour or two","Our accountant at year end","No one"],
   tip:"Pick one person and one day a month to put fleet cost on one page.  If it takes more than an hour, that's the job a connected system should be doing."}
 ],
 results: [
  "Most operators can't name their cost per mile.  You can, which means your pricing and replacement decisions start from real numbers.  The rest of Fleet Ready builds on this.",
  "You know some of your costs but not the full picture per vehicle.  Jobs priced on part of the number can lose money without anyone noticing.  This module shows how to pull the full figure together from data you already hold.",
  "Without a cost per mile every price you quote and every vehicle you buy is a guess.  It's the number that changes how you read every other figure in your business.  Start here before anything else."
 ]
};

return {lesson: LESSON, quiz: M};
});
