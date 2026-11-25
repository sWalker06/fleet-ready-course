/* Fleet Ready: end-of-course plan.  Loaded by fr.js when a page holds <div id="fr-plan"></div>.
   Pulls together the Starter Pack profile, starting numbers and every module quiz result
   (saved in this browser, or carried in the plan link as #d=...) into one 90-day plan. */
(function(){
var FR=window.FR, H=FR._h, money=H.money;

var CSS=".fp{--night:#141210;--night2:#1D1A17;--paper:#fff;--stone:#F6F4F1;--line:#E7E2DC;--fg:#1C1A18;--muted:#5F5A55;--lt:#8A847E;"+
"--accent:#B84E1C;--hi:#FF8A3D;--soft:#FBEBDF;--bold:#FF7A2F;--bold2:#FF9A4D;--good:#2E7148;--goodsoft:#E6F1EA;--mid:#E2601F;--midsoft:#FBEBDF;--bad:#A3261B;--badsoft:#F9E7E4;"+
"--fd:'Outfit',ui-sans-serif,system-ui,sans-serif;--fb:'Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;"+
"font-family:var(--fb);color:var(--fg);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;max-width:900px;margin:0 auto;padding:12px 10px 48px;box-sizing:border-box;text-align:left}"+
".fp *,.fp *::before,.fp *::after{box-sizing:border-box;margin:0;padding:0}"+
".fp-hero{background:linear-gradient(160deg,var(--night),var(--night2));color:#fff;border-radius:22px;padding:30px 28px 28px;border-top:4px solid var(--hi)}"+
".fp-logo{display:flex;align-items:center;gap:10px;font-family:var(--fd);font-weight:700;font-size:20px}.fp-logo em{font-style:normal;color:var(--hi)}"+
".fp-k{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--hi);margin-top:22px}"+
".fp-h1{font-family:var(--fd);font-weight:800;font-size:clamp(30px,5vw,44px);line-height:1.05;margin-top:8px;letter-spacing:-.01em}"+
".fp-sub{color:#DDD6CF;margin-top:12px;max-width:640px}"+
".fp-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin-top:22px}"+
".fp-stat{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:14px 16px}"+
".fp-stat b{display:block;font-family:var(--fd);font-size:26px;font-weight:800;color:#fff}.fp-stat b.hl{color:var(--hi)}.fp-stat span{font-size:13px;color:#C9C2BB}"+
".fp-sec{background:var(--paper);border:1px solid var(--line);border-radius:20px;padding:24px;margin-top:16px}"+
".fp-h2{font-family:var(--fd);font-weight:700;font-size:24px;line-height:1.2}.fp-p{color:var(--muted);margin-top:6px}"+
".fp-prof{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.fp-chip{background:var(--stone);border:1px solid var(--line);border-radius:999px;padding:5px 12px;font-size:14px}"+
".fp-phase{margin-top:20px}.fp-ph{display:flex;align-items:baseline;gap:10px;border-bottom:2px solid var(--bold);padding-bottom:8px}"+
".fp-ph b{font-family:var(--fd);font-size:19px}.fp-ph span{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}"+
".fp-item{border:1px solid var(--line);border-radius:16px;padding:16px 18px;margin-top:12px;background:#fff}"+
".fp-it{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap}"+
".fp-it b{font-family:var(--fd);font-size:18px;line-height:1.3}.fp-no{display:block;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--lt)}"+
".fp-pill{font-size:12px;font-weight:700;border-radius:999px;padding:4px 10px;white-space:nowrap}"+
".fp-leak{font-size:14px;color:var(--muted);margin-top:4px}.fp-leak b{font-family:var(--fb);font-size:14px;color:var(--fg)}"+
".fp-do{margin-top:10px;padding-left:0;list-style:none}.fp-do li{position:relative;padding:8px 0 8px 26px;border-top:1px dashed var(--line);font-size:15px}"+
".fp-do li:first-child{border-top:0}.fp-do li::before{content:'';position:absolute;left:4px;top:15px;width:10px;height:10px;border-radius:3px;background:var(--bold)}"+
".fp-do i{font-style:normal;color:var(--muted)}"+
".fp-good{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-top:14px}"+
".fp-g{background:var(--goodsoft);border-radius:14px;padding:12px 14px;font-size:15px}.fp-g b{display:block;font-family:var(--fd);font-size:16px}"+
".fp-miss a{color:var(--accent);font-weight:600;text-decoration:none}.fp-miss li{margin:6px 0 0 18px}"+
".fp-steps{counter-reset:s;list-style:none;margin-top:12px}.fp-steps li{counter-increment:s;position:relative;padding:10px 0 10px 44px;border-top:1px solid var(--line)}"+
".fp-steps li:first-child{border-top:0}.fp-steps li::before{content:counter(s);position:absolute;left:0;top:9px;width:30px;height:30px;border-radius:50%;background:var(--night);color:#fff;font-family:var(--fd);font-weight:700;display:grid;place-items:center;font-size:15px}"+
".fp-act{background:var(--soft);border:0}.fp-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}"+
".fp-in{flex:1 1 240px;font:inherit;padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:#fff;min-width:0}"+
".fp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:var(--fd);font-weight:700;font-size:16px;border:0;border-radius:10px;padding:13px 22px;cursor:pointer;background:linear-gradient(135deg,var(--bold),var(--bold2));color:#141210;text-decoration:none}"+
".fp-btn.ghost{background:#fff;border:1px solid var(--line);color:var(--fg)}.fp-btn[disabled]{opacity:.6;cursor:default}"+
".fp-note{font-size:14px;color:var(--muted);margin-top:8px;min-height:1em}"+
".fp-empty{text-align:center;padding:36px 20px}"+
"@media(max-width:560px){.fp-hero{padding:24px 18px}.fp-sec{padding:18px}}"+
"@media print{.fp-noprint{display:none!important}.fp{max-width:none;padding:0}.fp-sec,.fp-item{break-inside:avoid}.fp-hero{-webkit-print-color-adjust:exact;print-color-adjust:exact}}";

var BAND=[{n:"Under Control",c:"#2E7148",s:"#E6F1EA"},{n:"Money Leaking",c:"#E2601F",s:"#FBEBDF"},{n:"Priority Fixes",c:"#A3261B",s:"#F9E7E4"}];
var LOGO='<svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true"><rect fill="#74787D" x="4" y="34" width="14" height="7" rx="3.5"/><rect fill="#C2C5C9" x="17" y="21" width="14" height="7" rx="3.5"/><rect fill="#FF8A3D" x="30" y="8" width="14" height="7" rx="3.5"/></svg>';
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function get(k,d){try{var v=JSON.parse(localStorage.getItem(k)||"null");return v==null?d:v;}catch(e){return d;}}
function enc(o){return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");}
function dec(s){s=s.replace(/-/g,"+").replace(/_/g,"/");while(s.length%4)s+="=";return JSON.parse(decodeURIComponent(escape(atob(s))));}

// Everything the plan needs, in a small object so it fits in a link.
function gather(){
 var m=/[#&]d=([^&]+)/.exec(location.hash||"");
 if(m){try{var o=dec(m[1]);o.shared=true;return o;}catch(e){}}
 var p=get("fr_profile",{})||{}, st=get("fr_start",{})||{}, c=get("fr_contact",{})||{};
 var s={};["vehicles","miles","fuel","finance","insurance","maint","tax","tech","wages"].forEach(function(k){var x=parseFloat(st[k]);if(!isNaN(x)&&x>0)s[k]=x;});
 return {v:1,p:{i:p.industry||"",n:p.niche||"",g:p.goal||"",vt:p.vehicles||[]},s:s,c:parseFloat(localStorage.getItem("fr_cpm"))||0,r:get("fr_results",{})||{},e:c.email||"",t:new Date().toISOString().slice(0,10)};
}

FR.planPage=function(el,C){
 H.fonts();H.css("fp-css",CSS);
 var D=gather(), ku=(window.Kajabi&&window.Kajabi.currentSiteUser)||{};
 var mods=C.modules, done=mods.filter(function(m){return D.r[m.slug];});
 el.outerHTML='<div class="fp" id="fp-root"><div class="fp-sec fp-empty">Building your plan…</div></div>';
 var root=document.getElementById("fp-root");
 if(!done.length){
  root.innerHTML=hero(D,0,mods.length,0,0)+'<div class="fp-sec fp-empty"><div class="fp-h2">Your plan builds as you go</div><p class="fp-p" style="max-width:520px;margin:8px auto 0">Each module quiz adds to it.  Complete a quiz and your results appear here, ranked by what\'s costing you most.</p><p style="margin-top:16px"><a class="fp-btn" href="'+esc(H.url(C,mods[0].category,mods[0].lesson))+'" target="_top">Start Module 1</a></p></div>';
  return;
 }
 var Q={}, left=done.length;
 done.forEach(function(m){H.withModule(m.slug,function(f){try{Q[m.slug]=f(H.money,H.num).quiz;}catch(e){Q[m.slug]=null;}if(--left===0)draw();});});

 function draw(){
  var items=done.map(function(m){
   var r=D.r[m.slug], n=mods.indexOf(m)+1, q=Q[m.slug]||{questions:[]}, w=r[4]||[], a=r[5]||[];
   var tips=w.map(function(i){var x=q.questions[i];return x?{s:x.short,a:x.answers[a[i]],t:x.tip}:null;}).filter(Boolean);
   var g=(D.p.g||"").toLowerCase(), boost=0;
   var STOP=" cost costs your know true from every only what with that this they them full value jobs hours ";
   (m.title+" "+m.slug).toLowerCase().split(/[^a-z]+/).forEach(function(k){if(k.length>3&&STOP.indexOf(" "+k+" ")<0&&g.indexOf(k)>-1)boost=1;});
   return {m:m,n:n,b:r[0],sc:r[1],mx:r[2],l:r[3]||0,tips:tips,boost:boost,rank:r[0]*1e7+boost*5e6+(r[3]||0)};
  });
  var fix=items.filter(function(x){return x.b>0;}).sort(function(a,b){return b.rank-a.rank;});
  var good=items.filter(function(x){return x.b===0;});
  var miss=mods.filter(function(m){return !D.r[m.slug];});
  var tot=items.reduce(function(t,x){return t+x.l;},0);
  var h=hero(D,done.length,mods.length,tot,fix.length);
  h+=profile(D);
  h+='<div class="fp-sec"><div class="fp-h2">Your 90-day plan</div><p class="fp-p">Ranked by how much each area is likely to be costing you, starting with the biggest.  Fix the first three before you move on.  One finished fix is worth more than five started.</p>';
  if(!fix.length)h+='<p class="fp-p" style="margin-top:14px;color:var(--good);font-weight:600">Every module you\'ve done came out Under Control.  Your job now is to keep it that way: check your numbers every month and take on the quarterly challenges.</p>';
  [[0,3,"Days 1 to 30","Fix first"],[3,6,"Days 31 to 60","Next"],[6,99,"Days 61 to 90","Then"]].forEach(function(ph){
   var part=fix.slice(ph[0],ph[1]);if(!part.length)return;
   h+='<div class="fp-phase"><div class="fp-ph"><b>'+ph[3]+'</b><span>'+ph[2]+'</span></div>'+part.map(item).join("")+'</div>';
  });
  h+='</div>';
  if(good.length)h+='<div class="fp-sec"><div class="fp-h2">Already under control</div><p class="fp-p">These came out well.  Keep doing what you\'re doing and recheck them each quarter so they stay that way.</p><div class="fp-good">'+good.map(function(x){return '<div class="fp-g"><b>'+esc(x.m.title)+'</b>Module '+x.n+'.  Under Control on your quiz answers.</div>';}).join("")+'</div></div>';
  if(miss.length&&!D.shared)h+='<div class="fp-sec fp-miss fp-noprint"><div class="fp-h2">Not done yet</div><p class="fp-p">Your plan gets sharper with every module.  These are still to do:</p><ul>'+miss.map(function(m){var n=mods.indexOf(m)+1;return '<li><a href="'+esc(H.url(C,m.category,m.lesson))+'" target="_top">Module '+n+': '+esc(m.title)+'</a></li>';}).join("")+'</ul></div>';
  h+='<div class="fp-sec"><div class="fp-h2">How to make it stick</div><ol class="fp-steps">'+
   '<li><b>Give every fix an owner and a date.</b>  Put the Days 1 to 30 actions in the diary this week, with one name against each.</li>'+
   '<li><b>Measure against your starting numbers.</b>  Update them in the Starter Pack once a month.  A saving you can\'t show on paper didn\'t happen.</li>'+
   '<li><b>Take on the quarterly challenge.</b>  The first starts on 1 January: miles per gallon, measured against your own baseline.</li>'+
   '<li><b>Talk it through with Colin.</b>  Your strategy call is included.  Bring this plan and we\'ll go through your top three together.</li></ol></div>';
  if(!D.shared)h+=share(D);
  h+='<p class="fp-p" style="text-align:center;font-size:13px;margin-top:22px">Fleet Ready, a programme from Asset Data Solutions.  Independent of any supplier.</p>';
  root.innerHTML=h;
  if(!D.shared)bind(D,items,fix,good,tot);
 }
 function item(x){
  var B=BAND[x.b];
  var h='<div class="fp-item"><div class="fp-it"><div><span class="fp-no">Module '+x.n+'</span><b>'+esc(x.m.title)+'</b></div><span class="fp-pill" style="background:'+B.s+';color:'+B.c+'">'+B.n+'</span></div>';
  h+='<div class="fp-leak">'+(x.l>0?'Likely leak: <b>'+money(x.l)+' a month</b>, about '+money(x.l*12)+' a year.':'Your quiz answers put this in the '+B.n+' band.')+'</div>';
  var t=x.tips.slice(0,3);
  if(t.length)h+='<ul class="fp-do">'+t.map(function(k){return '<li><b>'+esc(k.s)+'.</b>  '+esc(k.t)+' <i>(You said: '+esc(k.a)+'.)</i></li>';}).join("")+'</ul>';
  else h+='<ul class="fp-do"><li>Work through the action list at the end of Module '+x.n+' and pick the one with the biggest figure next to it.</li></ul>';
  if(x.boost)h+='<div class="fp-leak" style="color:var(--accent);font-weight:600">Moved up because you said this matters most right now.</div>';
  return h+'</div>';
 }
 function hero(D,n,of,tot,fixes){
  var name=(ku.first_name||(ku.name||"").split(" ")[0]||"").trim();
  var h='<div class="fp-hero"><div class="fp-logo">'+LOGO+'<span>Fleet <em>Ready</em></span></div>'+
   '<div class="fp-k">'+(name?esc(name)+"'s ":"Your ")+'Fleet Ready plan</div><div class="fp-h1">Where your money is going, and what to fix first.</div>'+
   '<p class="fp-sub">Built from your answers in '+n+' of '+of+' modules'+(D.t?', '+new Date(D.t).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}):'')+'.</p>';
  if(n)h+='<div class="fp-stats"><div class="fp-stat"><b class="hl">'+money(tot)+'</b><span>likely leaking each month</span></div><div class="fp-stat"><b>'+money(tot*12)+'</b><span>a year, if nothing changes</span></div>'+
   (D.c?'<div class="fp-stat"><b>'+money(D.c,2)+'</b><span>your cost per mile before wages</span></div>':'')+
   '<div class="fp-stat"><b>'+fixes+'</b><span>area'+(fixes===1?'':'s')+' to work on</span></div></div>';
  return h+'</div>';
 }
 function profile(D){
  var p=D.p||{}, s=D.s||{}, run=["fuel","finance","insurance","maint","tax","tech"].reduce(function(t,k){return t+(s[k]||0);},0), c=[];
  if(p.i)c.push(esc(p.i)+(p.n?": "+esc(p.n):""));
  if(s.vehicles)c.push(s.vehicles+" vehicles");else if(p.vt&&p.vt.length)c.push(esc(p.vt.join(", ")));
  if(s.miles)c.push(Number(s.miles).toLocaleString("en-GB")+" miles a month");
  if(run)c.push(money(run)+" a month running cost");
  if(!c.length&&!p.g)return "";
  return '<div class="fp-sec"><div class="fp-h2">Your fleet</div>'+(c.length?'<div class="fp-prof">'+c.map(function(x){return '<span class="fp-chip">'+x+'</span>';}).join("")+'</div>':'')+
   (p.g?'<p class="fp-p" style="margin-top:12px">You told us what matters most right now: <b style="color:var(--fg)">'+esc(p.g)+'</b>.  Anything linked to it has been moved up your plan.</p>':'')+'</div>';
 }
 function share(D){
  var em=ku.email||D.e||"";
  return '<div class="fp-sec fp-act fp-noprint"><div class="fp-h2">Keep a copy</div><p class="fp-p">Email it to yourself, save it as a PDF, or copy a link to share it with whoever runs the fleet day to day.</p>'+
   (C.planWebhook?'<div class="fp-row"><input class="fp-in" id="fp-email" type="email" placeholder="you@company.co.uk" value="'+esc(em)+'" aria-label="Email address"><button class="fp-btn" id="fp-send" type="button">Email me my plan</button></div>':'')+
   '<div class="fp-row"><button class="fp-btn ghost" id="fp-print" type="button">Save as PDF</button><button class="fp-btn ghost" id="fp-copy" type="button">Copy link to my plan</button></div><div class="fp-note" id="fp-note" role="status"></div></div>';
 }
 function link(D){var o={v:1,p:D.p,s:D.s,c:D.c,r:D.r,t:D.t};return H.base+"plan.html#d="+enc(o);}
 function bind(D,items,fix,good,tot){
  var note=document.getElementById("fp-note"), L=link(D);
  document.getElementById("fp-print").onclick=function(){window.print();};
  document.getElementById("fp-copy").onclick=function(){var ok=function(){note.textContent="Link copied.  Anyone with it can see this plan.";};
   if(navigator.clipboard)navigator.clipboard.writeText(L).then(ok,function(){prompt("Copy this link",L);});else prompt("Copy this link",L);};
  var go=document.getElementById("fp-send");if(!go)return;
  go.onclick=function(){
   var e=document.getElementById("fp-email").value.trim();
   if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){note.textContent="Enter a valid email, for example name@company.co.uk.";return;}
   try{localStorage.setItem("fr_contact",JSON.stringify({email:e}));}catch(x){}
   var name=(ku.first_name||(ku.name||"").split(" ")[0]||"").trim();
   var d={email:e,source:"fleet-ready-plan",fn:name?"Hi "+name+",":"Hi,",md:items.length,mof:mods.length,lm:money(tot),ly:money(tot*12),cpm:D.c?money(D.c,2):"Not set",nf:fix.length,
    good:good.map(function(x){return x.m.title;}).join(", ")||"None yet",gd:good.length?"block":"none",link:L};
   for(var i=0;i<3;i++){var x=fix[i];d["p"+(i+1)+"t"]=x?x.m.title:"";d["p"+(i+1)+"b"]=x?BAND[x.b].n:"";d["p"+(i+1)+"l"]=x&&x.l>0?money(x.l)+" a month":"";
    d["p"+(i+1)+"x"]=x&&x.tips[0]?x.tips[0].s+".  "+x.tips[0].t:(x?"Work through the Module "+x.n+" action list.":"");d["p"+(i+1)+"d"]=x?"block":"none";}
   var q=Object.keys(d).map(function(k){return encodeURIComponent(k)+"="+encodeURIComponent(d[k]);}).join("&");
   fetch(C.planWebhook+(C.planWebhook.indexOf("?")>-1?"&":"?")+q,{method:"GET",mode:"no-cors"}).catch(function(){});
   go.disabled=true;go.textContent="Plan sent";note.textContent="On its way to "+e+".  It usually arrives within a couple of minutes.  If it isn't there, check your spam folder.";
   try{if(window.gtag)window.gtag("event","plan_emailed");}catch(x){}
  };
 }
};
if(FR.planReady)FR.planReady();
})();
