/* Fleet Ready Starter Pack.  Four pages: welcome, systems, numbers, emails.
   Wording lives in the TEXT section below.  Change only the words inside the quote marks. */
(function(){
var FR=window.FR;

// ======================= TEXT (edit here) =======================
var INDUSTRIES=["Haulage and logistics","Construction and plant","Trades and field service","Utilities and infrastructure","Waste and recycling","Passenger transport","Public sector and housing","Retail and wholesale delivery","Other"];
var VEHICLES=["Cars","Small vans","Large vans","Rigid HGVs","Artic HGVs","Plant and machinery","Trailers"];
var GOALS=["Know what the fleet really costs","Cut the fuel bill","Fewer breakdowns and repairs","Stay compliant and audit-ready","Keep good drivers","Spend less time on admin"];
var SYSTEMS=[
 ["Vehicle tracking","Miles, idling, driving style and where every vehicle has been"],
 ["Fuel cards","Litres, cost and where each vehicle filled up"],
 ["Vehicle cameras","Footage for incidents and claims"],
 ["Maintenance and workshop","Services, repairs, tyres, MOT and inspection dates"],
 ["Finance and leasing","Monthly payments, end dates and mileage allowances"],
 ["Insurance and claims","Premium, excess and claims history"],
 ["Tachograph and drivers' hours","Downloads, infringements and working time"],
 ["Walkaround checks and defects","Daily checks and how defects get fixed"],
 ["Licence checks","Who is checked, how often and any points"],
 ["Timesheets and payroll","Hours paid against hours worked"],
 ["Job management","Jobs, routes and what was done on site"],
 ["Accounts","Monthly totals for every fleet cost"]
];
var NUMS=[
 {id:"vehicles",label:"Number of vehicles",pre:"",val:""},
 {id:"miles",label:"Miles driven a month, whole fleet",pre:"",val:""},
 {id:"fuel",label:"Fuel a month",pre:"£",val:""},
 {id:"finance",label:"Finance or lease payments a month",pre:"£",val:""},
 {id:"insurance",label:"Insurance a month",pre:"£",val:""},
 {id:"maint",label:"Maintenance, repairs and tyres a month",pre:"£",val:""},
 {id:"tax",label:"Road tax, fees and fines a month",pre:"£",val:""},
 {id:"tech",label:"Tracking, cameras and software a month",pre:"£",val:""},
 {id:"wages",label:"Drivers' wages a month (optional)",pre:"£",val:""}
];
function EMAILS(co,me){
 var sign="\n\nThanks,\n"+(me||"[Your name]")+"\n"+(co||"[Company name]");
 return [
 {who:"Fuel card provider",subject:"Fuel card data request for "+(co||"our account"),
  body:"Hello,\n\nWe're reviewing our fleet costs and need our fuel card data for the last 12 months.  Please could you send a spreadsheet (Excel or CSV) showing every transaction with the card number, vehicle registration, date, litres, cost, fuel type and site.  If odometer readings were entered at the pump please include those too.\n\nA monthly total per card would also help if it's easy to run."+sign},
 {who:"Tracking supplier",subject:"Vehicle tracking data and contract details for "+(co||"our account"),
  body:"Hello,\n\nWe're reviewing how we use our tracking system.  Please could you send the following for the last 12 months as a spreadsheet:\n\n1. Miles driven per vehicle per month\n2. Engine idle time per vehicle per month\n3. Driving style or safety scores per driver, if we have them\n\nPlease could you also send a list of the features included in our contract, and which of them are switched on for our account."+sign},
 {who:"Finance or leasing company",subject:"Agreement summary for "+(co||"our account"),
  body:"Hello,\n\nPlease could you send a summary of every vehicle agreement we have with you.  For each vehicle we need the registration, monthly payment, start and end date, annual mileage allowance, excess mileage charge and whether maintenance is included.\n\nA spreadsheet would be ideal."+sign},
 {who:"Insurer or broker",subject:"Claims experience and premium breakdown for "+(co||"our policy"),
  body:"Hello,\n\nWe're reviewing our fleet risk ahead of renewal.  Please could you send our claims experience report for the last three years, the premium per vehicle on the current policy and our excess.\n\nPlease could you also tell us whether a discount is available for tracking, vehicle cameras or a driver training programme, and what evidence you would need to see."+sign},
 {who:"Workshop or maintenance provider",subject:"Maintenance history for "+(co||"our vehicles"),
  body:"Hello,\n\nPlease could you send the service, repair and tyre invoices for each of our vehicles for the last 12 months, with the registration, date, work done and cost.  A spreadsheet would be ideal.\n\nPlease could you also include the next MOT, service and inspection due dates you have on record."+sign},
 {who:"Your accounts team",subject:"Fleet cost totals for the last 12 months",
  body:"Hi,\n\nI'm putting together our fleet running costs.  Please could you pull the monthly totals for the last 12 months for:\n\n1. Fuel\n2. Vehicle finance and leases\n3. Vehicle insurance\n4. Maintenance, repairs and tyres\n5. Road tax, fees and fines\n6. Tracking, cameras and fleet software\n7. Drivers' wages\n\nA simple spreadsheet is fine."+sign}
 ];
}
// ===================== END OF TEXT SECTION ======================

function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function load(k){try{return JSON.parse(localStorage.getItem(k)||"{}")||{};}catch(e){return {};}}
function save(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
var ku=(window.Kajabi&&window.Kajabi.currentSiteUser)||{};
var tick='<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2.5 7.5l3 3 6-7" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var EXTRA_CSS=
".frl .fs-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}"+
".frl .fs-f label{display:block;font-size:13.5px;font-weight:600;color:var(--fg);margin-bottom:5px}"+
".frl .fs-f input,.frl .fs-f select{width:100%;font:inherit;font-size:16px;color:var(--fg);border:1px solid #CFC8C1;border-radius:10px;padding:11px 12px;background:#fff}"+
".frl .fs-f input:focus,.frl .fs-f select:focus{outline:none;border-color:var(--accent)}"+
".frl .fs-chips{display:flex;flex-wrap:wrap;gap:8px}"+
".frl .fs-chip{font:inherit;font-size:14.5px;border:1.5px solid var(--line);background:#fff;color:var(--fg);border-radius:999px;padding:8px 14px;cursor:pointer}"+
".frl .fs-chip.on{border-color:var(--accent);background:var(--accent-soft);font-weight:600}"+
".frl .fs-btn{font-family:var(--f-display);font-weight:700;font-size:15.5px;border:0;border-radius:10px;padding:12px 20px;cursor:pointer;background:linear-gradient(135deg,var(--bold),var(--bold-2));color:var(--on-bold)}"+
".frl .fs-btn.ghost{background:var(--stone);color:var(--fg);border:1px solid var(--line)}"+
".frl .fs-note{font-size:13.5px;color:var(--muted);margin-top:8px;min-height:18px}"+
".frl .fs-steps{display:grid;gap:10px;counter-reset:s}"+
".frl .fs-steps div{position:relative;padding:14px 14px 14px 56px;background:var(--stone);border-radius:14px}"+
".frl .fs-steps div::before{counter-increment:s;content:counter(s,decimal-leading-zero);position:absolute;left:14px;top:12px;font-family:var(--f-display);font-weight:800;font-size:22px;color:var(--accent-hi)}"+
".frl .fs-steps b{display:block;font-family:var(--f-display);font-size:17px;font-weight:700;color:var(--fg)}"+
".frl .fs-steps span{font-size:15px;color:var(--muted)}"+
".frl .fs-sys{display:grid;gap:10px}"+
".frl .fs-row{border:1.5px solid var(--line);border-radius:14px;padding:14px}"+
".frl .fs-row.on{border-color:var(--accent);background:#FFFBF8}"+
".frl .fs-rh{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;margin-bottom:10px}"+
".frl .fs-rh b{font-family:var(--f-display);font-size:17px;font-weight:700;color:var(--fg)}"+
".frl .fs-rh small{display:block;font-size:13.5px;color:var(--muted)}"+
".frl .fs-res{background:var(--night);border-radius:16px;padding:20px;color:#fff;display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:16px}"+
".frl .fs-res div b{display:block;font-family:var(--f-display);font-weight:800;font-size:30px;letter-spacing:-.02em;color:#fff;line-height:1.1}"+
".frl .fs-res div b.hl{color:var(--accent-hi)}"+
".frl .fs-res div span{font-size:13px;color:#B9B2AB}"+
".frl .fs-mail{border:1.5px solid var(--line);border-radius:14px;padding:16px;margin-top:12px}"+
".frl .fs-mail h4{font-family:var(--f-display);font-size:18px;font-weight:700;color:var(--fg);margin-bottom:4px}"+
".frl .fs-mail .sub{font-size:14px;color:var(--muted);margin-bottom:10px}"+
".frl .fs-mail pre{white-space:pre-wrap;font:inherit;font-size:14.5px;color:var(--fg);background:var(--stone);border-radius:10px;padding:12px 14px;max-height:220px;overflow:auto}"+
".frl .fs-mail .acts{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}"+
".frl .fs-mail.sent{border-color:var(--accent);background:#FFFBF8}"+
".frl .fs-mail a.fs-btn{text-decoration:none!important;display:inline-block}"+
"@media(max-width:600px){.frl .fs-grid,.frl .fs-res{grid-template-columns:1fr}}";

function shell(el,ctx,title,sum,build){
 FR.shell(el);
 if(!document.getElementById("fs-css")){var s=document.createElement("style");s.id="fs-css";s.textContent=EXTRA_CSS;document.head.appendChild(s);}
 document.getElementById("frl-part").textContent="Starter Pack · "+ctx.n+" of "+ctx.total;
 document.getElementById("frl-title").textContent=title;
 document.getElementById("frl-sum").textContent=sum;
 document.getElementById("frl-build").textContent=build;
 var f=document.querySelector("#frl-root .frl-sitefoot div");if(f)f.textContent="Everything you enter here is saved in this browser.";
 return document.getElementById("frl-card");
}
function next(ctx){return ctx.nextUrl?'<div class="frl-next"><a class="frl-btn" href="'+esc(ctx.nextUrl)+'">'+esc(ctx.nextLabel)+'</a></div>':'';}
function copy(text,btn){
 var done=function(){var o=btn.textContent;btn.textContent="Copied";setTimeout(function(){btn.textContent=o;},1500);};
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done,function(){fallback();});}else fallback();
 function fallback(){var t=document.createElement("textarea");t.value=text;t.style.position="fixed";t.style.opacity="0";document.body.appendChild(t);t.select();try{document.execCommand("copy");done();}catch(e){}document.body.removeChild(t);}
}
function acts(card,key,list){
 var st=load(key);st.done=st.done||{};
 var h='<div class="frl-acts">';
 list.forEach(function(a,i){h+='<label class="frl-act'+(st.done[i]?' on':'')+'"><input type="checkbox" data-i="'+i+'"'+(st.done[i]?' checked':'')+'><span class="frl-box">'+tick+'</span><span class="frl-at">'+esc(a)+'</span></label>';});
 h+='</div><div class="frl-prog" id="fs-prog"></div>';
 return {html:h,bind:function(){
  function prog(){var n=0;list.forEach(function(a,i){if(st.done[i])n++;});card.querySelector("#fs-prog").innerHTML="<b>"+n+" of "+list.length+"</b> done"+(n===list.length?".  You're ready for lesson one.":"");}
  Array.prototype.forEach.call(card.querySelectorAll(".frl-acts input"),function(b){b.addEventListener("change",function(){st.done[b.getAttribute("data-i")]=b.checked;b.parentNode.classList.toggle("on",b.checked);save(key,st);prog();});});
  prog();
 }};
}

// ---------- 1. Welcome ----------
function welcome(el,ctx){
 var card=shell(el,ctx,"The Helicopter View","See the whole fleet from above before you fix any one part of it.","your fleet profile and your before-launch checklist");
 var p=load("fr_profile");p.vehicles=p.vehicles||[];
 var h='';
 h+='<div class="frl-sec"><div class="frl-h">Why start from above</div>';
 h+='<p class="frl-p">Most fleets try to fix costs one complaint at a time.  Fuel goes up, so someone looks at fuel.  A van breaks down, so someone looks at maintenance.  Each fix helps a little, but nobody sees how the pieces add up, so the biggest leak often goes unnoticed for years.</p>';
 h+='<p class="frl-p">Fleet Ready starts from the helicopter view instead.  First you see every system, every cost and every vehicle in one place.  Then you rank the leaks by pounds a month and fix them in order, biggest first.  This Starter Pack gets the groundwork done before lesson one, so you spend the course acting on your numbers rather than hunting for them.</p></div>';
 h+='<div class="frl-sec"><div class="frl-h">How Fleet Ready works</div><div class="fs-steps">';
 h+='<div><b>Starter Pack, now</b><span>Tell us about your fleet, list your systems, set your starting numbers and send the data request emails.</span></div>';
 h+='<div><b>Module 1: the foundation</b><span>Work out your true cost per mile, so every saving after it has a number on it.</span></div>';
 h+='<div><b>'+(ctx.mods-1)+' more modules, one leak at a time</b><span>Each is a five-minute lesson and a quiz.  Every quiz emails you a breakdown of your own figures.</span></div>';
 h+='<div><b>Check, then do it again</b><span>A one-page monthly check, and a quarterly challenge against your own baseline.  The first is miles per gallon, from 1 January.</span></div>';
 h+='</div></div>';
 h+='<div class="frl-sec"><div class="frl-h">Tell us about your fleet</div><p class="frl-p">Thirty seconds.  We use this to send you examples and tips from fleets like yours.</p>';
 h+='<div class="fs-grid"><div class="fs-f"><label for="fs-ind">Your industry</label><select id="fs-ind"><option value="">Choose one</option>'+INDUSTRIES.map(function(x){return '<option'+(p.industry===x?' selected':'')+'>'+esc(x)+'</option>';}).join("")+'</select></div>';
 h+='<div class="fs-f"><label for="fs-niche">What you do, in a few words</label><input id="fs-niche" placeholder="For example: scaffolding, refrigerated deliveries" value="'+esc(p.niche||"")+'"></div></div>';
 h+='<div class="fs-f" style="margin-top:14px"><label>Which vehicles do you run?</label><div class="fs-chips" id="fs-veh">'+VEHICLES.map(function(x){return '<button type="button" class="fs-chip'+(p.vehicles.indexOf(x)>-1?' on':'')+'" aria-pressed="'+(p.vehicles.indexOf(x)>-1)+'">'+esc(x)+'</button>';}).join("")+'</div></div>';
 h+='<div class="fs-f" style="margin-top:14px"><label for="fs-goal">What matters most right now?</label><select id="fs-goal"><option value="">Choose one</option>'+GOALS.map(function(x){return '<option'+(p.goal===x?' selected':'')+'>'+esc(x)+'</option>';}).join("")+'</select></div>';
 h+='<div style="margin-top:16px"><button type="button" class="fs-btn" id="fs-save">Save my profile</button><div class="fs-note" id="fs-note" role="status">'+(p.saved?"Saved.  You can change it any time.":"")+'</div></div></div>';
 var a=acts(card,"fr_starter_checklist",["Save your fleet profile above","List your fleet systems (page 2)","Fill in your starting numbers (page 3)","Send the data request emails (page 4)","Book your strategy call with Colin"]);
 h+='<div class="frl-sec"><div class="frl-h">Your before-launch checklist</div>'+a.html+next(ctx)+'</div>';
 card.innerHTML=h;a.bind();
 Array.prototype.forEach.call(card.querySelectorAll("#fs-veh .fs-chip"),function(b){b.addEventListener("click",function(){var on=!b.classList.contains("on");b.classList.toggle("on",on);b.setAttribute("aria-pressed",on);});});
 card.querySelector("#fs-save").addEventListener("click",function(){
  p.industry=card.querySelector("#fs-ind").value;p.niche=card.querySelector("#fs-niche").value.trim();p.goal=card.querySelector("#fs-goal").value;
  p.vehicles=Array.prototype.map.call(card.querySelectorAll("#fs-veh .fs-chip.on"),function(b){return b.textContent;});
  var note=card.querySelector("#fs-note");
  if(!p.industry){note.textContent="Choose your industry first.";return;}
  p.saved=true;save("fr_profile",p);note.textContent="Saved.  You can change it any time.";
  var email=ku.email||(load("fr_contact").email)||"";
  if(ctx.webhook&&email){
   var q={email:email,source:"starter-pack",industry:p.industry,niche:p.niche,vehicles:p.vehicles.join(", "),goal:p.goal};
   fetch(ctx.webhook+(ctx.webhook.indexOf("?")>-1?"&":"?")+Object.keys(q).map(function(k){return encodeURIComponent(k)+"="+encodeURIComponent(q[k]);}).join("&"),{method:"GET",mode:"no-cors"}).catch(function(){});
  }
 });
}

// ---------- 2. Systems ----------
function systems(el,ctx){
 var card=shell(el,ctx,"Your Fleet Systems List","Every system that holds fleet data, who supplies it and who has the login.","your fleet systems list");
 var st=load("fr_systems");
 var h='<div class="frl-sec"><div class="frl-h">Why this matters</div>';
 h+='<p class="frl-p">Most fleets have their data spread across five or more systems, run by different people, with logins nobody can find.  When you need a figure it takes days, so decisions get made on guesses.</p>';
 h+='<p class="frl-p">Listing every system once fixes that.  You know where each number lives and who can get it, and the data request emails on page 4 go to the right people first time.  Tick each one you use and add the supplier and who holds the login.</p></div>';
 h+='<div class="frl-sec"><div class="frl-h">Your systems</div><div class="fs-sys">';
 SYSTEMS.forEach(function(s,i){var r=st[i]||{};
  h+='<div class="fs-row'+(r.use?' on':'')+'" data-i="'+i+'"><div class="fs-rh"><div><b>'+esc(s[0])+'</b><small>'+esc(s[1])+'</small></div>'+
   '<label class="frl-act'+(r.use?' on':'')+'" style="padding:8px 12px;flex-shrink:0"><input type="checkbox" class="fs-use"'+(r.use?' checked':'')+'><span class="frl-box">'+tick+'</span><span class="frl-at" style="font-size:14px">We use this</span></label></div>'+
   '<div class="fs-grid"><div class="fs-f"><label>Supplier or system name</label><input class="fs-sup" value="'+esc(r.sup||"")+'" placeholder="For example: Webfleet"></div>'+
   '<div class="fs-f"><label>Who has the login?</label><input class="fs-own" value="'+esc(r.own||"")+'" placeholder="Name or role"></div></div></div>';
 });
 h+='</div><div class="frl-prog" id="fs-count"></div><div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="fs-btn" id="fs-copy">Copy my list</button></div>'+next(ctx)+'</div>';
 card.innerHTML=h;
 function count(){var n=0;SYSTEMS.forEach(function(s,i){if(st[i]&&st[i].use)n++;});card.querySelector("#fs-count").innerHTML="<b>"+n+" systems</b> listed so far";}
 Array.prototype.forEach.call(card.querySelectorAll(".fs-row"),function(row){
  var i=row.getAttribute("data-i");st[i]=st[i]||{};
  var u=row.querySelector(".fs-use");
  u.addEventListener("change",function(){st[i].use=u.checked;row.classList.toggle("on",u.checked);u.parentNode.classList.toggle("on",u.checked);save("fr_systems",st);count();});
  row.querySelector(".fs-sup").addEventListener("input",function(e){st[i].sup=e.target.value;if(e.target.value&&!st[i].use){st[i].use=true;u.checked=true;row.classList.add("on");u.parentNode.classList.add("on");count();}save("fr_systems",st);});
  row.querySelector(".fs-own").addEventListener("input",function(e){st[i].own=e.target.value;save("fr_systems",st);});
 });
 card.querySelector("#fs-copy").addEventListener("click",function(e){
  var t="Our fleet systems\n\n";SYSTEMS.forEach(function(s,i){var r=st[i]||{};if(r.use)t+=s[0]+": "+(r.sup||"supplier not noted")+".  Login: "+(r.own||"not noted")+"\n";});
  copy(t,e.target);
 });
 count();
}

// ---------- 3. Numbers ----------
function numbers(el,ctx){
 var card=shell(el,ctx,"Your Starting Numbers","One page of monthly figures that every module builds on.","your starting numbers, before anything changes");
 var st=load("fr_start");
 var h='<div class="frl-sec"><div class="frl-h">Why this matters</div>';
 h+='<p class="frl-p">Without a starting point you can\'t prove a saving.  Fleets change suppliers, coach drivers and sell vehicles, then can\'t say what any of it was worth because nobody wrote down the numbers before.</p>';
 h+='<p class="frl-p">Fill in what you know now.  Rough figures are fine, and anything you don\'t know can stay blank until the data request replies come back.  These numbers are your baseline for the 1 January challenge.</p></div>';
 h+='<div class="frl-sec"><div class="frl-h">Your monthly figures</div><div class="fs-grid">';
 NUMS.forEach(function(n){h+='<div class="fs-f"><label for="fsn-'+n.id+'">'+esc(n.label)+'</label><input id="fsn-'+n.id+'" type="number" inputmode="decimal" min="0" placeholder="'+(n.pre?n.pre+"0":"0")+'" value="'+esc(st[n.id]!=null?st[n.id]:"")+'"></div>';});
 h+='</div><div class="fs-res" id="fs-res"></div><div class="fs-note" id="fs-saved" role="status"></div>'+next(ctx)+'</div>';
 card.innerHTML=h;
 function v(k){var x=parseFloat(st[k]);return isNaN(x)?0:x;}
 function calc(){
  var run=v("fuel")+v("finance")+v("insurance")+v("maint")+v("tax")+v("tech"), all=run+v("wages"), veh=v("vehicles"), mi=v("miles");
  var cpm=mi>0?run/mi:0, tcpm=mi>0?all/mi:0;
  var r=card.querySelector("#fs-res");
  r.innerHTML='<div><b class="hl">'+FR.money(run)+'</b><span>Running cost a month, before wages</span></div>'+
   '<div><b>'+(veh>0?FR.money(run/veh):"-")+'</b><span>Per vehicle a month</span></div>'+
   '<div><b>'+(mi>0?FR.money(cpm,2):"-")+'</b><span>Cost per mile before wages</span></div>'+
   '<div><b>'+(mi>0&&v("wages")>0?FR.money(tcpm,2):"-")+'</b><span>Cost per mile with wages</span></div>';
  if(cpm>0)try{localStorage.setItem("fr_cpm",String(Math.round(cpm*100)/100));}catch(e){}
 }
 var t;
 NUMS.forEach(function(n){card.querySelector("#fsn-"+n.id).addEventListener("input",function(e){st[n.id]=e.target.value;st.updated=new Date().toISOString().slice(0,10);save("fr_start",st);calc();clearTimeout(t);card.querySelector("#fs-saved").textContent="Saved";t=setTimeout(function(){card.querySelector("#fs-saved").textContent="";},1500);});});
 calc();
}

// ---------- 4. Emails ----------
function emails(el,ctx){
 var card=shell(el,ctx,"Data Request Emails","Ready-to-send emails, so your figures are waiting for you at launch.","six emails sent, and your data on its way");
 var st=load("fr_emails");st.sent=st.sent||{};
 var h='<div class="frl-sec"><div class="frl-h">Why this matters</div>';
 h+='<p class="frl-p">The data you need already exists, but it sits with your suppliers and your accounts team.  Asking for it takes a week or two, which is why most fleet reviews stall before they start.</p>';
 h+='<p class="frl-p">Send these now and the replies arrive while you work through the first lessons.  Add your name and company, then copy each email or open it straight in your email app.</p></div>';
 h+='<div class="frl-sec"><div class="frl-h">Your emails</div><div class="fs-grid"><div class="fs-f"><label for="fs-me">Your name</label><input id="fs-me" value="'+esc(st.me||[ku.first_name,ku.last_name].filter(Boolean).join(" ")||ku.name||"")+'"></div>';
 h+='<div class="fs-f"><label for="fs-co">Company name</label><input id="fs-co" value="'+esc(st.co||"")+'"></div></div><div id="fs-mails"></div>'+next(ctx)+'</div>';
 card.innerHTML=h;
 function render(){
  var list=EMAILS(st.co,st.me),o="";
  list.forEach(function(m,i){o+='<div class="fs-mail'+(st.sent[i]?' sent':'')+'" data-i="'+i+'"><h4>'+esc(m.who)+'</h4><div class="sub">Subject: '+esc(m.subject)+'</div><pre>'+esc(m.body)+'</pre><div class="acts">'+
   '<button type="button" class="fs-btn ghost fs-cp">Copy email</button>'+
   '<a class="fs-btn ghost" href="mailto:?subject='+encodeURIComponent(m.subject)+'&body='+encodeURIComponent(m.body)+'">Open in my email</a>'+
   '<label class="frl-act'+(st.sent[i]?' on':'')+'" style="padding:8px 12px"><input type="checkbox" class="fs-sent"'+(st.sent[i]?' checked':'')+'><span class="frl-box">'+tick+'</span><span class="frl-at" style="font-size:14px">Sent</span></label></div></div>';});
  var box=card.querySelector("#fs-mails");box.innerHTML=o;
  Array.prototype.forEach.call(box.querySelectorAll(".fs-mail"),function(m){
   var i=m.getAttribute("data-i"),em=list[i];
   m.querySelector(".fs-cp").addEventListener("click",function(e){copy("Subject: "+em.subject+"\n\n"+em.body,e.target);});
   var c=m.querySelector(".fs-sent");c.addEventListener("change",function(){st.sent[i]=c.checked;m.classList.toggle("sent",c.checked);c.parentNode.classList.toggle("on",c.checked);save("fr_emails",st);});
  });
 }
 ["me","co"].forEach(function(k){card.querySelector("#fs-"+k).addEventListener("input",function(e){st[k]=e.target.value.trim();save("fr_emails",st);render();});});
 render();
}

FR.starterPages={welcome:welcome,systems:systems,numbers:numbers,emails:emails};
FR.starterReady&&FR.starterReady();
})();
