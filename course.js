// Fleet Ready course list.  The order here sets the module numbers, the next-step buttons,
// the "Module X of Y" count, the breakdown email and the module cards on fleet-ready.com.
// To add a module: add a line below, add modules/<slug>.js, then paste the two snippets into the new Kajabi posts.
FR.course({
 site: "https://colin-walker.mykajabi.com/products/fleet-ready",
 webhook: "https://services.leadconnectorhq.com/hooks/I4agC2G5KURNKuZ9YZJ6/webhook-trigger/b3b6bb0c-0213-4655-8c4b-0f721eca8815",
 // Starter Pack: the free course everyone gets on registration.  starterWebhook is the GHL webhook for the fleet profile (blank = not sent).
 starter: {"site": "https://colin-walker.mykajabi.com/products/fleet-ready-starter-pack", "category": "2161129464", "pages": [{"slug": "welcome", "title": "Welcome: The Helicopter View", "post": "2201993784"}, {"slug": "systems", "title": "Your Fleet Systems List", "post": "2201993785"}, {"slug": "numbers", "title": "Your Starting Numbers", "post": "2201993786"}, {"slug": "emails", "title": "Data Request Emails", "post": "2201993787"}]},
 starterWebhook: "",
 modules: [
  {"slug": "cost-per-mile", "title": "Know Your True Cost per Mile", "summary": "Put one honest number on what each mile really costs you.", "category": "2161016196", "lesson": "2201534878", "quiz": "2201508377"},
  {"slug": "system-use", "title": "Get Full Value from Your System", "summary": "Find the features you already pay for and switch on the ones that save money.", "category": "2161016316", "lesson": "2201534786", "quiz": "2201508855"},
  {"slug": "fuel", "title": "Cut Your Fuel Bill Through Driver Coaching", "summary": "Find the gap between your best and worst drivers, and coach it out.", "category": "2161016323", "lesson": "2201891207", "quiz": "2201508887"},
  {"slug": "maintenance", "title": "Catch Breakdowns Before They Happen", "summary": "Catch faults before they become breakdowns and unplanned downtime.", "category": "2161016325", "lesson": "2201891249", "quiz": "2201508892"},
  {"slug": "insurance", "title": "Have the Evidence to Defend a Claim", "summary": "Make sure an incident is never your word against theirs.", "category": "2161016329", "lesson": "2201891253", "quiz": "2201508907"},
  {"slug": "compliance", "title": "Make Your Records Audit-Ready", "summary": "Make compliance something you can prove, not just something you do.", "category": "2161016336", "lesson": "2201891269", "quiz": "2201508922"},
  {"slug": "drivers", "title": "Keep Your Best Drivers", "summary": "Use driver data to keep your best people, not push them out.", "category": "2161016338", "lesson": "2201891281", "quiz": "2201508929"},
  {"slug": "admin", "title": "Win Back Hours from Fleet Admin", "summary": "Take the weekly fleet admin down from hours to minutes.", "category": "2161016344", "lesson": "2201891289", "quiz": "2201508939"},
  {"slug": "automation", "title": "Automate the Jobs That Repeat", "summary": "Let your systems do the repeat work, and only connect what earns its keep.", "category": "2161128525", "lesson": "2201989973", "quiz": "2201989974"},
  {"slug": "assets", "title": "Know Where Every Asset Is", "summary": "Know where every high-value asset is, not just the vehicles.", "category": "2161016345", "lesson": "2201891296", "quiz": "2201508952"},
  {"slug": "idling", "title": "Stop Paying for Engines Standing Still", "summary": "Put a number on engines running with nowhere to go, and cut it.", "category": "2161016350", "lesson": "2201891302", "quiz": "2201508971"},
  {"slug": "timesheets", "title": "Pay Only for Hours Worked", "summary": "Check the hours you pay against the hours worked, by exception.", "category": "2161016364", "lesson": "2201891304", "quiz": "2201509008"},
  {"slug": "private-use", "title": "Control Private Use of Your Vehicles", "summary": "See how your vehicles are used outside work, and set clear rules.", "category": "2161016366", "lesson": "2201891324", "quiz": "2201509018"}
 ]
});
