/* Fleet Ready course engine.  Loaded by every lesson and quiz post in Kajabi.
   Each post only holds:  <div id="fr-lesson-SLUG"></div>  or  <div id="fr-quiz-SLUG"></div>
   followed by the script tag that loads this file.
   Content lives in modules/SLUG.js and the module order in course.js. */
(function(){
if(window.FR&&window.FR.ready){window.FR.scan();return;}
var FR=window.FR=window.FR||{};FR.ready=true;FR.mods=FR.mods||{};
var me=document.currentScript&&document.currentScript.src||"https://swalker06.github.io/fleet-ready-course/fr.js";
var BASE=me.replace(/[^\/]*$/,""), V="v="+Math.floor(Date.now()/600000);
var FONT="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap", QCSS=".fq{--night:#141210;--night2:#1D1A17;--paper:#fff;--stone:#F6F4F1;--line:#E7E2DC;--fg:#1C1A18;--muted:#5F5A55;\n  --accent:#B84E1C;--hi:#FF8A3D;--soft:#FBEBDF;--bold:#FF7A2F;--bold2:#FF9A4D;\n  --good:#2E7148;--goodsoft:#E6F1EA;--mid:#D98A1E;--bad:#A3261B;--badsoft:#F9E7E4;\n  --fd:'Outfit',ui-sans-serif,system-ui,sans-serif;--fb:'Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;\n  font-family:var(--fb);color:var(--fg);font-size:16px;line-height:1.55;-webkit-font-smoothing:antialiased;max-width:860px;margin:0 auto;padding:16px 10px 40px;box-sizing:border-box;text-align:left}\n.fq *,.fq *::before,.fq *::after{box-sizing:border-box;margin:0;padding:0}\n.fq em{font-style:normal}\n.fq-top{display:flex;align-items:center;justify-content:space-between;gap:12px;background:var(--night);border-radius:14px;padding:12px 16px;margin-bottom:12px}\n.fq-logo{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--fd);font-weight:700;font-size:20px;letter-spacing:-.02em;color:#fff}\n.fq-logo em{color:var(--hi)}\n.fq-part{font-size:13px;color:#C9C2BB}\n.fq-hero{position:relative;overflow:hidden;background:var(--night);color:#fff;border-radius:20px;padding:28px 26px;display:grid;grid-template-columns:1fr 230px;gap:22px;align-items:center}\n.fq-hero::before{content:'';position:absolute;left:0;right:0;top:0;height:4px;background:linear-gradient(90deg,var(--accent),var(--hi))}\n.fq-kick{font-size:12.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--hi)}\n.fq-title{font-family:var(--fd);font-weight:800;font-size:40px;line-height:1.04;letter-spacing:-.03em;margin:6px 0 10px}\n.fq-intro{color:#DDD6CF;font-size:16.5px;max-width:46ch}\n.fq-steps{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}\n.fq-steps span{font-size:13px;font-weight:600;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:5px 11px;color:#F3F0EC}\n.fq-steps b{color:var(--hi);margin-right:4px}\n.fq-gauge{text-align:center}\n.fq-gauge svg{width:100%;max-width:230px;display:block;margin:0 auto}\n.fq-gauge .lbl{font-size:12.5px;color:#B9B2AB;margin-top:-6px}\n.fq-gauge .val{font-family:var(--fd);font-weight:800;font-size:30px;line-height:1;letter-spacing:-.02em}\n.fq-gauge .band{font-family:var(--fd);font-weight:700;font-size:15px;margin-top:4px}\n@media(max-width:680px){.fq-hero{grid-template-columns:1fr}.fq-title{font-size:32px}.fq-gauge svg{max-width:200px}}\n.fq-sec{background:var(--paper);border:1px solid var(--line);border-radius:20px;padding:26px 24px;margin-top:14px}\n.fq-sh{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:4px}\n.fq-h{font-family:var(--fd);font-weight:700;font-size:25px;letter-spacing:-.025em;line-height:1.15}\n.fq-h i{font-style:normal;display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--bold),var(--bold2));color:var(--night);font-size:16px;margin-right:10px;vertical-align:3px}\n.fq-tag{font-size:12.5px;font-weight:600;color:var(--muted);background:var(--stone);border-radius:999px;padding:4px 10px}\n.fq-sub{color:var(--muted);font-size:15px;margin:6px 0 18px;max-width:62ch}\n.fq-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px 22px}\n@media(max-width:640px){.fq-grid{grid-template-columns:1fr}.fq-sec{padding:22px 16px}}\n.fq-sl{background:var(--stone);border-radius:14px;padding:13px 14px 10px}\n.fq-sl-top{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px}\n.fq-sl label{font-size:14px;font-weight:600}\n.fq-num{display:flex;align-items:center;background:#fff;border:1px solid #D6CFC8;border-radius:9px;padding:0 8px;height:34px}\n.fq-num span{font-size:14px;color:var(--muted)}\n.fq-num input{width:84px;border:0;outline:0;font:inherit;font-family:var(--fd);font-weight:700;font-size:16px;text-align:right;background:transparent;color:var(--fg);-moz-appearance:textfield}\n.fq-num input::-webkit-outer-spin-button,.fq-num input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}\n.fq-num:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px rgba(255,138,61,.25)}\n.fq input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:8px;border-radius:999px;background:linear-gradient(90deg,var(--hi) var(--p,0%),#DDD6CF var(--p,0%));outline:0;cursor:pointer}\n.fq input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;border-radius:50%;background:#fff;border:3px solid var(--accent);box-shadow:0 2px 6px rgba(0,0,0,.25);transition:transform .15s}\n.fq input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid var(--accent)}\n.fq input[type=range]:active::-webkit-slider-thumb{transform:scale(1.15)}\n.fq input[type=range]:focus-visible{box-shadow:0 0 0 3px rgba(255,138,61,.35)}\n.fq-sl small{display:flex;justify-content:space-between;font-size:11.5px;color:#8A847E;margin-top:5px}\n.fq-live{margin-top:18px;background:var(--night);color:#fff;border-radius:16px;padding:18px 18px 16px}\n.fq-figs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}\n@media(max-width:560px){.fq-figs{grid-template-columns:1fr 1fr}}\n.fq-fig b{display:block;font-family:var(--fd);font-weight:800;font-size:28px;letter-spacing:-.03em;line-height:1.05;color:#fff;transition:color .2s}\n.fq-fig b.hl{color:var(--hi)}\n.fq-fig span{font-size:12.5px;color:#B9B2AB}\n.fq-stack{display:flex;height:16px;border-radius:999px;overflow:hidden;margin:16px 0 8px;background:#2A2622}\n.fq-stack i{display:block;height:100%;transition:width .35s ease}\n.fq-key{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:12.5px;color:#C9C2BB}\n.fq-key span::before{content:'';display:inline-block;width:9px;height:9px;border-radius:3px;background:var(--c);margin-right:6px}\n.fq-qs{display:grid;gap:12px}\n.fq-q{border:1.5px solid var(--line);border-radius:16px;padding:16px;transition:border-color .2s,background .2s}\n.fq-q.done{border-color:#E9CDB9;background:#FFFBF8}\n.fq-qh{display:flex;gap:12px;align-items:flex-start;margin-bottom:12px}\n.fq-qn{flex:0 0 30px;height:30px;border-radius:50%;display:grid;place-items:center;font-family:var(--fd);font-weight:800;font-size:15px;background:var(--stone);color:var(--muted);transition:all .2s}\n.fq-q.done .fq-qn{background:var(--night);color:var(--hi)}\n.fq-qt{font-family:var(--fd);font-weight:600;font-size:17.5px;line-height:1.3;letter-spacing:-.01em;padding-top:3px}\n.fq-ops{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}\n@media(max-width:640px){.fq-ops{grid-template-columns:1fr 1fr}}\n.fq-op{position:relative;font:inherit;font-size:13.5px;line-height:1.3;text-align:left;color:var(--fg);background:#fff;border:1.5px solid var(--line);border-radius:12px;padding:11px 11px 11px 32px;cursor:pointer;min-height:58px;transition:border-color .15s,background .15s,transform .1s}\n.fq-op::before{content:'';position:absolute;left:11px;top:13px;width:12px;height:12px;border-radius:50%;background:var(--dot);opacity:.35;transition:opacity .15s,transform .2s}\n.fq-op:hover{border-color:var(--dot)}\n.fq-op:active{transform:scale(.98)}\n.fq-op.sel{border-color:var(--dot);background:var(--tint);font-weight:600}\n.fq-op.sel::before{opacity:1;transform:scale(1.25)}\n.fq-op:focus-visible{outline:3px solid rgba(255,138,61,.5);outline-offset:2px}\n.fq-meter{display:flex;align-items:center;gap:10px;margin-top:10px;font-size:12.5px;color:var(--muted)}\n.fq-meter div{flex:1;height:6px;background:var(--stone);border-radius:999px;overflow:hidden}\n.fq-meter div i{display:block;height:100%;width:0;border-radius:999px;transition:width .35s ease,background .35s}\n.fq-foot{position:sticky;bottom:10px;z-index:3;margin-top:14px;background:var(--night);color:#fff;border-radius:16px;padding:12px 14px 12px 18px;display:flex;align-items:center;justify-content:space-between;gap:14px;box-shadow:0 14px 34px -14px rgba(0,0,0,.6)}\n.fq-prog{display:flex;align-items:center;gap:12px;font-size:14px;color:#DDD6CF}\n.fq-dots{display:flex;gap:5px}\n.fq-dots i{width:10px;height:10px;border-radius:50%;background:#3A3530;transition:background .2s}\n.fq-dots i.on{background:var(--hi)}\n.fq-btn{font-family:var(--fd);font-weight:700;font-size:16px;color:var(--night);background:linear-gradient(135deg,var(--bold),var(--bold2));border:0;border-radius:10px;padding:13px 20px;cursor:pointer;white-space:nowrap;transition:filter .15s,opacity .2s}\n.fq-btn:hover{filter:brightness(1.06)}\n.fq-btn[disabled]{opacity:.4;cursor:not-allowed;filter:none}\n.fq-btn:focus-visible{outline:3px solid #fff;outline-offset:2px}\n.fq-res{display:none}\n.fq-res.show{display:block;animation:fqIn .5s ease}\n@keyframes fqIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}\n.fq-band{border-radius:18px;padding:22px 22px 20px;position:relative;overflow:hidden}\n.fq-band::before{content:'';position:absolute;left:0;right:0;top:0;height:5px;background:var(--bc)}\n.fq-band .s{font-family:var(--fd);font-weight:800;font-size:58px;line-height:1;letter-spacing:-.04em}\n.fq-band .s small{font-size:22px;font-weight:600;color:var(--muted);letter-spacing:-.01em}\n.fq-band .n{font-family:var(--fd);font-weight:700;font-size:26px;letter-spacing:-.02em;color:var(--bc);margin:6px 0 8px}\n.fq-bars{display:grid;gap:12px;margin-top:6px}\n.fq-bar .t{display:flex;justify-content:space-between;gap:10px;font-size:14px;margin-bottom:5px}\n.fq-bar .t b{font-weight:600}\n.fq-bar .t span{color:var(--muted);white-space:nowrap}\n.fq-bar .tr{height:12px;background:var(--stone);border-radius:999px;overflow:hidden}\n.fq-bar .tr i{display:block;height:100%;width:0;border-radius:999px;transition:width .8s cubic-bezier(.2,.8,.2,1)}\n.fq-tips{display:grid;gap:10px;margin-top:4px}\n.fq-tip{border-left:4px solid var(--hi);background:var(--stone);border-radius:0 12px 12px 0;padding:12px 14px}\n.fq-tip b{display:block;font-family:var(--fd);font-weight:600;font-size:15.5px;margin-bottom:3px}\n.fq-tip p{font-size:14.5px;color:var(--muted)}\n.fq-tip p.a{font-size:13px;color:#8A847E;margin-bottom:4px}\n.fq-note{font-size:14px;color:var(--muted);margin-top:14px}\n.fq-note b{color:var(--fg)}\n.fq-notme{background:none;border:0;font:inherit;font-size:14px;font-weight:600;color:var(--accent);text-decoration:underline;cursor:pointer}\n.fq-email{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}\n.fq-email input{flex:1;min-width:220px;font:inherit;font-size:16px;padding:12px 14px;border:1px solid #CFC8C1;border-radius:10px}\n.fq-err{color:var(--bad);font-size:13.5px;margin-top:6px;min-height:1px}\n.fq-next{display:inline-block;margin-top:16px;text-decoration:none!important}\n.fq-sitefoot{margin-top:14px;background:var(--night);border-radius:14px;padding:14px;color:#9C958E;font-size:13px;text-align:center}\n.fq-sitefoot em{color:var(--hi)}\n@media(prefers-reduced-motion:reduce){.fq *{transition:none!important;animation:none!important}}\n", QMARK="<div class=\"fq\" id=\"fq-root\">\n  <div class=\"fq-top\">\n    <span class=\"fq-logo\"><svg width=\"28\" height=\"28\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><rect fill=\"#74787D\" x=\"4\" y=\"34\" width=\"14\" height=\"7\" rx=\"3.5\"/><rect fill=\"#C2C5C9\" x=\"17\" y=\"21\" width=\"14\" height=\"7\" rx=\"3.5\"/><rect fill=\"#FF8A3D\" x=\"30\" y=\"8\" width=\"14\" height=\"7\" rx=\"3.5\"/></svg>Fleet <em>Ready</em></span>\n    <span class=\"fq-part\" id=\"fq-part\"></span>\n  </div>\n  <div class=\"fq-hero\">\n    <div>\n      <div class=\"fq-kick\" id=\"fq-kick\"></div>\n      <h2 class=\"fq-title\" id=\"fq-title\"></h2>\n      <p class=\"fq-intro\" id=\"fq-intro\"></p>\n      <div class=\"fq-steps\"><span><b>1</b>Your numbers</span><span><b>2</b>Where you are today</span><span><b>3</b>Your breakdown</span></div>\n    </div>\n    <div class=\"fq-gauge\" aria-live=\"polite\">\n      <svg viewBox=\"0 0 200 120\" aria-hidden=\"true\">\n        <defs><linearGradient id=\"fqg\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#2E7148\"/><stop offset=\".5\" stop-color=\"#FF8A3D\"/><stop offset=\"1\" stop-color=\"#A3261B\"/></linearGradient></defs>\n        <path d=\"M20 105 A80 80 0 0 1 180 105\" fill=\"none\" stroke=\"#2A2622\" stroke-width=\"16\" stroke-linecap=\"round\"/>\n        <path id=\"fq-arc\" d=\"M20 105 A80 80 0 0 1 180 105\" fill=\"none\" stroke=\"url(#fqg)\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-dasharray=\"251.3\" stroke-dashoffset=\"251.3\" style=\"transition:stroke-dashoffset .5s ease\"/>\n        <g id=\"fq-needle\" style=\"transform-origin:100px 105px;transform:rotate(-90deg);transition:transform .5s cubic-bezier(.3,1.4,.5,1)\"><line x1=\"100\" y1=\"105\" x2=\"100\" y2=\"38\" stroke=\"#fff\" stroke-width=\"4\" stroke-linecap=\"round\"/></g>\n        <circle cx=\"100\" cy=\"105\" r=\"8\" fill=\"#fff\"/>\n      </svg>\n      <div class=\"lbl\">Leak score</div>\n      <div class=\"val\" id=\"fq-gval\">0</div>\n      <div class=\"band\" id=\"fq-gband\">Answer to see</div>\n    </div>\n  </div>\n\n  <div class=\"fq-sec\" id=\"fq-numsec\">\n    <div class=\"fq-sh\"><h3 class=\"fq-h\"><i>1</i>Your numbers</h3><span class=\"fq-tag\">Optional \u00b7 rough figures are fine</span></div>\n    <p class=\"fq-sub\" id=\"fq-numsub\"></p>\n    <div class=\"fq-grid\" id=\"fq-sliders\"></div>\n    <div class=\"fq-live\" id=\"fq-live\"></div>\n  </div>\n\n  <div class=\"fq-sec\">\n    <div class=\"fq-sh\"><h3 class=\"fq-h\"><i>2</i>Where you are today</h3><span class=\"fq-tag\" id=\"fq-qtag\"></span></div>\n    <p class=\"fq-sub\">Pick the answer closest to how things really are, not how they should be.  Green is under control, red is money leaking.</p>\n    <div class=\"fq-qs\" id=\"fq-qs\"></div>\n  </div>\n\n  <div class=\"fq-foot\">\n    <div class=\"fq-prog\"><div class=\"fq-dots\" id=\"fq-dots\"></div><span id=\"fq-progt\"></span></div>\n    <button class=\"fq-btn\" id=\"fq-go\" disabled>See my breakdown</button>\n  </div>\n\n  <div class=\"fq-res\" id=\"fq-res\"></div>\n\n  <div class=\"fq-sitefoot\">Fleet <em>Ready</em>, a programme from Asset Data <em>Solutions</em>.  Independent of any supplier.</div>\n</div>", LCSS=".frl{\n  /* FLEET READY THEME, taken from fleet-ready.com.  Change colours and fonts here only. */\n  --night:#141210;--night2:#1D1A17;--paper:#FFFFFF;--stone:#F6F4F1;--line:#E7E2DC;--fg:#1C1A18;--muted:#5F5A55;--lt:#8A847E;\n  --accent:#B84E1C;--accent-hi:#FF8A3D;--accent-soft:#FBEBDF;--bold:#FF7A2F;--bold-2:#FF9A4D;--on-bold:#141210;\n  --good:#2E7148;--good-soft:#E6F1EA;--bad:#A3261B;--bad-soft:#F9E7E4;\n  --f-display:'Outfit',ui-sans-serif,system-ui,sans-serif;\n  --f-body:'Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;\n  font-family:var(--f-body)!important;color:var(--fg);line-height:1.6;-webkit-font-smoothing:antialiased;font-size:16px;\n  background:transparent;padding:20px 12px 32px;box-sizing:border-box;text-align:left}\n\n.frl *,.frl *::before,.frl *::after{box-sizing:border-box;margin:0;padding:0}\n.frl em{font-style:normal}\n.frl-top{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;background:var(--night);border-radius:14px;padding:12px 16px;margin-bottom:14px}\n.frl-logo{display:inline-flex;align-items:center;gap:.55rem}\n.frl-logo svg{flex-shrink:0}\n.frl-word{font-family:var(--f-display);font-weight:700;font-size:20px;letter-spacing:-.02em;line-height:1;color:#fff}\n.frl-word em,.frl-ads em{color:var(--accent-hi)}\n.frl-logo.sm .frl-word{font-size:15px}\n.frl-ads{font-family:var(--f-display);font-weight:600;color:#fff;font-size:14px}\n.frl-part{font-size:13px;color:#C9C2BB}\n.frl-sitefoot{margin-top:14px;background:var(--night);border-radius:14px;padding:16px;color:#9C958E;font-size:13px;display:grid;gap:8px;justify-items:center;text-align:center}\n.frl-fb{display:flex;align-items:center;justify-content:center;gap:.6rem;flex-wrap:wrap;color:#C9C2BB}\n\n.frl-shell{max-width:740px;margin:0 auto}\n.frl-hero{position:relative;overflow:hidden;background:var(--night);border-radius:20px;padding:30px 28px 28px;margin:0 0 14px;color:#fff}\n.frl-hero::before{content:'';position:absolute;left:0;right:0;top:0;height:4px;background:linear-gradient(90deg,var(--accent),var(--accent-hi))}\n.frl-hero .frl-t{font-family:var(--f-display);font-weight:800;font-size:44px;line-height:1.04;letter-spacing:-.03em;color:#fff;text-wrap:balance}\n.frl-hero .frl-s{font-size:18px;color:#DDD6CF;margin-top:12px;max-width:52ch}\n.frl-build{margin-top:16px;font-size:14.5px;font-weight:600;color:#fff}\n.frl-build em{color:var(--accent-hi)}\n.frl-card{background:var(--paper);border:1px solid var(--line);border-radius:20px;padding:30px 28px}\n.frl-sec{padding:28px 0;border-top:1px solid var(--line)}\n.frl-sec:first-child{padding-top:0;border-top:0}\n.frl-sec:last-child{padding-bottom:0}\n.frl .frl-h{font-family:var(--f-display);font-weight:700;font-size:28px;line-height:1.1;letter-spacing:-.025em;color:var(--fg);margin-bottom:12px}\n.frl .frl-p{font-size:16.5px;color:var(--muted);margin-bottom:12px;max-width:62ch}\n.frl .frl-p:last-child{margin-bottom:0}\n.frl-cost{display:flex;gap:14px;align-items:baseline;flex-wrap:wrap;background:var(--accent-soft);border-radius:12px;padding:14px 16px;margin-top:16px}\n.frl-cost b{font-size:12.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);white-space:nowrap}\n.frl-cost span{font-family:var(--f-display);font-size:21px;font-weight:700;letter-spacing:-.02em;color:var(--fg)}\n.frl-two{display:grid;grid-template-columns:1fr 1fr;gap:14px}\n.frl-col{border-radius:16px;padding:18px 18px 8px;border:1px solid var(--line)}\n.frl-col.bad{background:var(--accent-soft);border-color:#F1D3BF}\n.frl-col.ok{background:var(--stone)}\n.frl-col .frl-ch{font-family:var(--f-display);font-size:18px;font-weight:700;letter-spacing:-.01em;margin-bottom:10px}\n.frl-col.bad .frl-ch{color:var(--accent)}\n.frl-col.ok .frl-ch{color:var(--good)}\n.frl ul.frl-ul{list-style:none;margin:0;padding:0}\n.frl ul.frl-ul li{font-size:15px;color:var(--fg);padding:0 0 10px 18px;position:relative;line-height:1.5}\n.frl ul.frl-ul li::before{content:'';position:absolute;left:1px;top:8px;width:8px;height:8px;border-radius:50%}\n.frl-col.bad li::before{background:var(--accent)}\n.frl-col.ok li::before{background:var(--good)}\n.frl-fix{display:grid;gap:0}\n.frl-fix div{border-bottom:1px solid var(--line);padding:13px 0}\n.frl-fix div:last-child{border-bottom:0}\n.frl-fix b,.frl-fail b{display:block;font-family:var(--f-display);font-size:17px;font-weight:600;letter-spacing:-.01em;color:var(--fg);margin-bottom:3px}\n.frl-fix p,.frl-fail p{font-size:15.5px;color:var(--muted)}\n.frl-fail{display:grid;gap:14px}\n.frl-fail div{padding-left:14px;border-left:3px solid var(--accent-hi)}\n.frl-ex{font-size:15px;color:var(--fg);background:var(--stone);border-radius:12px;padding:12px 14px;margin:4px 0 12px}\n.frl-ex i{font-style:normal;font-weight:600;color:var(--accent)}\n.frl textarea{width:100%;min-height:84px;font:inherit;font-size:16px;color:var(--fg);border:1px solid #CFC8C1;border-radius:10px;padding:12px 14px;resize:vertical;background:#fff}\n.frl textarea:focus{border-color:var(--accent)}\n.frl textarea:focus-visible,.frl input:focus-visible+span,.frl button:focus-visible,.frl a:focus-visible{outline:3px solid var(--accent-hi);outline-offset:3px}\n.frl-saved{font-size:13px;color:var(--muted);margin-top:6px;min-height:18px}\n.frl ol.frl-q{margin:0;padding:0;list-style:none;counter-reset:q}\n.frl ol.frl-q li{counter-increment:q;font-size:15.5px;color:var(--fg);padding:0 0 14px 36px;position:relative}\n.frl ol.frl-q li::before{content:counter(q);position:absolute;left:0;top:-4px;font-family:var(--f-display);font-weight:800;font-size:24px;color:var(--accent-hi);line-height:1.2}\n.frl-acts{display:grid;gap:8px}\n.frl-act{display:flex;gap:12px;align-items:flex-start;border:1.5px solid var(--line);border-radius:12px;padding:13px 14px;cursor:pointer;transition:border-color .15s,background .15s}\n.frl-act:hover{border-color:var(--accent-hi)}\n.frl-act input{position:absolute;opacity:0;width:1px;height:1px}\n.frl-box{flex:0 0 22px;height:22px;border:2px solid #CFC8C1;border-radius:6px;display:flex;align-items:center;justify-content:center;margin-top:1px;background:#fff}\n.frl-box svg{opacity:0;width:13px;height:13px}\n.frl-act.on{border-color:var(--accent);background:var(--accent-soft)}\n.frl-act.on .frl-box{background:var(--accent);border-color:var(--accent)}\n.frl-act.on .frl-box svg{opacity:1}\n.frl-act span.frl-at{font-size:15.5px;color:var(--fg)}\n.frl-prog{font-size:14px;color:var(--muted);margin-top:12px}\n.frl-prog b{color:var(--accent)}\n.frl-next{display:flex;justify-content:flex-end;margin-top:22px}\n.frl a.frl-btn{display:inline-flex;align-items:center;background:linear-gradient(135deg,var(--bold),var(--bold-2));color:var(--on-bold)!important;text-decoration:none!important;font-family:var(--f-display);font-weight:700;font-size:16px;padding:14px 22px;border-radius:10px;box-shadow:0 10px 24px -12px rgba(0,0,0,.5)}\n.frl a.frl-btn:hover{filter:brightness(1.06)}\n@media(max-width:600px){.frl{padding:14px 8px 26px}.frl-card,.frl-hero{padding:24px 18px}.frl-two{grid-template-columns:1fr}.frl-hero .frl-t{font-size:34px}}\n@media(prefers-reduced-motion:reduce){.frl *{transition:none!important}}\n", LMARK="<div class=\"frl\" id=\"frl-root\">\n  <div class=\"frl-shell\">\n    <div class=\"frl-top\">\n      <span class=\"frl-logo\" role=\"img\" aria-label=\"Fleet Ready\"><svg width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><rect fill=\"#74787D\" x=\"4\" y=\"34\" width=\"14\" height=\"7\" rx=\"3.5\"/><rect fill=\"#C2C5C9\" x=\"17\" y=\"21\" width=\"14\" height=\"7\" rx=\"3.5\"/><rect fill=\"#FF8A3D\" x=\"30\" y=\"8\" width=\"14\" height=\"7\" rx=\"3.5\"/></svg><span class=\"frl-word\" aria-hidden=\"true\">Fleet <em>Ready</em></span></span>\n      <div class=\"frl-part\" id=\"frl-part\"></div>\n    </div>\n    <div class=\"frl-hero\"><div class=\"frl-t\" id=\"frl-title\"></div><div class=\"frl-s\" id=\"frl-sum\"></div><div class=\"frl-build\">You build: <em id=\"frl-build\"></em></div></div>\n    <div class=\"frl-card\" id=\"frl-card\"></div>\n    <div class=\"frl-sitefoot\"><div style=\"color:#C9C2BB\">Your notes and ticks are saved in this browser.</div><div class=\"frl-fb\"><span class=\"frl-logo sm\" role=\"img\" aria-label=\"Fleet Ready\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><rect fill=\"#74787D\" x=\"4\" y=\"34\" width=\"14\" height=\"7\" rx=\"3.5\"/><rect fill=\"#C2C5C9\" x=\"17\" y=\"21\" width=\"14\" height=\"7\" rx=\"3.5\"/><rect fill=\"#FF8A3D\" x=\"30\" y=\"8\" width=\"14\" height=\"7\" rx=\"3.5\"/></svg><span class=\"frl-word\" aria-hidden=\"true\">Fleet <em>Ready</em></span></span><span>a programme from</span><span class=\"frl-logo\" role=\"img\" aria-label=\"Asset Data Solutions\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><rect fill=\"#74787D\" x=\"6\" y=\"28\" width=\"9\" height=\"14\" rx=\"3\"/><rect fill=\"#C2C5C9\" x=\"19.5\" y=\"19\" width=\"9\" height=\"23\" rx=\"3\"/><rect fill=\"#FF8A3D\" x=\"33\" y=\"8\" width=\"9\" height=\"34\" rx=\"3\"/></svg><span class=\"frl-ads\" aria-hidden=\"true\">Asset Data <em>Solutions</em></span></span></div><div>Independent of any supplier.</div></div>\n  </div>\n</div>";
function money(n,dp){dp=dp||0;return "\u00a3"+Number(n).toLocaleString("en-GB",{minimumFractionDigits:dp,maximumFractionDigits:dp});}
function num(n){return Number(n).toLocaleString("en-GB");}
FR.money=money;FR.num=num;
var waiting={},courseCbs=[];
function load(src){var s=document.createElement("script");s.src=src+(src.indexOf("?")>-1?"&":"?")+V;s.async=true;s.onerror=function(){console.log("Fleet Ready: could not load "+src);};document.head.appendChild(s);}
function css(id,text){if(document.getElementById(id))return;var s=document.createElement("style");s.id=id;s.textContent=text;document.head.appendChild(s);}
function fonts(){if(document.getElementById("fr-fonts2"))return;var l=document.createElement("link");l.id="fr-fonts2";l.rel="stylesheet";l.href=FONT;document.head.appendChild(l);}
FR.course=function(c){FR.C=c;var cb=courseCbs;courseCbs=[];cb.forEach(function(f){f(c);});};
function withCourse(f){if(FR.C)f(FR.C);else{courseCbs.push(f);if(courseCbs.length===1)load(BASE+"course.js");}}
FR.add=function(slug,factory){FR.mods[slug]=factory;var w=waiting[slug]||[];waiting[slug]=[];w.forEach(function(f){f(factory);});};
function withModule(slug,f){if(FR.mods[slug])return f(FR.mods[slug]);(waiting[slug]=waiting[slug]||[]).push(f);if(waiting[slug].length===1)load(BASE+"modules/"+slug+".js");}
function url(c,cat,post){return c.site+"/categories/"+cat+"/posts/"+post;}
FR.shell=function(el){fonts();css("frl-css",LCSS);el.outerHTML=LMARK;};
var starterCbs=[];
function withStarter(f){if(FR.starterPages)return f();starterCbs.push(f);if(starterCbs.length===1){FR.starterReady=function(){var cb=starterCbs;starterCbs=[];cb.forEach(function(g){g();});};load(BASE+"starter.js");}}
function starter(el){
 var slug=el.id.replace(/^fr-starter-/,"");
 withCourse(function(c){
  var S=c.starter||{pages:[]},i=-1;S.pages.forEach(function(p,k){if(p.slug===slug)i=k;});
  if(i<0){el.textContent="Fleet Ready: starter page '"+slug+"' isn't in course.js yet.";return;}
  var nx=S.pages[i+1],m1=c.modules[0];
  var ctx={n:i+1,total:S.pages.length,mods:c.modules.length,webhook:c.starterWebhook||"",
   nextUrl:nx?(S.site||c.site)+"/categories/"+S.category+"/posts/"+nx.post:(c.join||url(c,m1.category,m1.lesson)),
   nextLabel:nx?"Next: "+nx.title:(c.join?"Join Fleet Ready and start Module 1":"Start Module 1: "+m1.title)};
  withStarter(function(){if(FR.starterPages[slug])FR.starterPages[slug](el,ctx);});
 });
}
var planCbs=[];
function withPlan(f){if(FR.planPage)return f();planCbs.push(f);if(planCbs.length===1){FR.planReady=function(){var cb=planCbs;planCbs=[];cb.forEach(function(g){g();});};load(BASE+"plan.js");}}
FR._h={money:money,num:num,fonts:fonts,css:css,url:url,withModule:withModule,base:BASE};
FR.scan=function(){
 Array.prototype.forEach.call(document.querySelectorAll('[id^="fr-plan"]'),function(el){if(el.getAttribute("data-fr-done"))return;el.setAttribute("data-fr-done","1");withCourse(function(c){withPlan(function(){FR.planPage(el,c);});});});
 Array.prototype.forEach.call(document.querySelectorAll('[id^="fr-starter-"]'),function(el){if(el.getAttribute("data-fr-done"))return;el.setAttribute("data-fr-done","1");starter(el);});
 var els=document.querySelectorAll('[id^="fr-lesson-"],[id^="fr-quiz-"]');
 Array.prototype.forEach.call(els,function(el){
  if(el.getAttribute("data-fr-done"))return;el.setAttribute("data-fr-done","1");
  var type=el.id.indexOf("fr-quiz-")===0?"quiz":"lesson", slug=el.id.replace(/^fr-(quiz|lesson)-/,"");
  withCourse(function(c){
   var i=-1;c.modules.forEach(function(m,k){if(m.slug===slug)i=k;});
   if(i<0){el.textContent="Fleet Ready: module '"+slug+"' isn't in course.js yet.";return;}
   var m=c.modules[i], n=i+1, TOTAL=c.modules.length, nx=c.modules[i+1];
   withModule(slug,function(factory){
    var data=factory(money,num); fonts();
    if(type==="lesson"){
     var LESSON=data.lesson;LESSON.num=n;LESSON.title=m.title;LESSON.slug=slug;
     css("frl-css",LCSS);el.outerHTML=LMARK;
     lesson(LESSON,url(c,m.category,m.quiz),"Take the Module "+n+" quiz",TOTAL);
    }else{
     var M=data.quiz;M.num=n;M.title=m.title;M.id="fr-m"+("0"+n).slice(-2)+"-"+slug;
     css("fq-css",QCSS);el.outerHTML=QMARK;
     quiz(M,c.webhook,nx?url(c,nx.category,nx.lesson):(c.plan?url(c,c.plan.category,c.plan.post):c.site),nx?"Go to Module "+(n+1):(c.plan?"See your Fleet Ready plan":"Back to the course"),TOTAL);
    }
   });
  });
 });
};
function quiz(M,WEBHOOK_URL,NEXT_URL,NEXT_LABEL,TOTAL){

var d=document, $=function(id){return d.getElementById(id);};
var DOT=["#2E7148","#D98A1E","#E2601F","#A3261B"], TINT=["#E6F1EA","#FDF3E2","#FCE9DE","#F9E7E4"];
var nQ=M.questions.length, max=nQ*3, ans=new Array(nQ).fill(null), vals={}, out={};
var BANDS=[{n:"Under Control",c:"#2E7148",s:"#E6F1EA",hi:Math.floor(max*.3)},{n:"Money Leaking",c:"#E2601F",s:"#FBEBDF",hi:Math.floor(max*.6)},{n:"Priority Fixes",c:"#A3261B",s:"#F9E7E4",hi:max}];
function band(s){for(var i=0;i<3;i++)if(s<=BANDS[i].hi)return i;return 2;}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function emailOK(e){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e||"");}

// who is this?  Kajabi member first, then remembered email
var ku=(window.Kajabi&&window.Kajabi.currentSiteUser)||{}, store={};
try{store=JSON.parse(localStorage.getItem("fr_contact")||"{}")||{};}catch(e){}
var email=ku.email||new URLSearchParams(location.search).get("email")||store.email||"";

$("fq-part").textContent="Module "+M.num+" of "+TOTAL;
$("fq-kick").textContent="Module "+M.num+" quiz · about 4 minutes";
$("fq-title").textContent=M.title;
$("fq-intro").textContent=M.intro;
$("fq-numsub").textContent=M.numSub;
$("fq-qtag").textContent=nQ+" questions";

// ---- sliders ----
var sh="";
M.nums.forEach(function(n){
 if(n.fromCpm){try{var c=parseFloat(localStorage.getItem("fr_cpm"));if(c>0)n.val=Math.round(c*100)/100;}catch(e){}}
 vals[n.id]=n.val;
 sh+='<div class="fq-sl"><div class="fq-sl-top"><label for="fqr-'+n.id+'">'+esc(n.label)+'</label>'+
  '<div class="fq-num">'+(n.pre?'<span>'+n.pre+'</span>':'')+'<input type="number" inputmode="decimal" id="fqn-'+n.id+'" min="0" step="'+n.step+'" aria-label="'+esc(n.label)+'"></div></div>'+
  '<input type="range" id="fqr-'+n.id+'" min="'+n.min+'" max="'+n.max+'" step="'+n.step+'">'+
  '<small><span>'+(n.pre||"")+num(n.min)+'</span><span>'+(n.pre||"")+num(n.max)+'+</span></small></div>';
});
$("fq-sliders").innerHTML=sh;
function paint(n){var r=$("fqr-"+n.id),v=vals[n.id];r.value=Math.min(v,n.max);r.style.setProperty("--p",(Math.min(v,n.max)-n.min)/(n.max-n.min)*100+"%");}
M.nums.forEach(function(n){
 var r=$("fqr-"+n.id),t=$("fqn-"+n.id);t.value=n.val;paint(n);
 r.addEventListener("input",function(){vals[n.id]=+r.value;t.value=r.value;paint(n);live();});
 t.addEventListener("input",function(){var v=parseFloat(t.value);vals[n.id]=isNaN(v)||v<0?0:v;paint(n);live();});
});
function live(){
 out=M.calc(vals);
 var h='<div class="fq-figs">';
 out.figs.forEach(function(f){h+='<div class="fq-fig"><b'+(f.hl?' class="hl"':'')+'>'+esc(f.value)+'</b><span>'+esc(f.label)+'</span></div>';});
 h+='</div>';
 if(out.stack){
  var parts=M.nums.filter(function(n){return n.part;}), tot=out.total||1;
  h+='<div class="fq-stack" aria-hidden="true">';
  parts.forEach(function(n){h+='<i style="width:'+(vals[n.id]/tot*100)+'%;background:'+n.part+'"></i>';});
  h+='</div><div class="fq-key">';
  parts.forEach(function(n){h+='<span style="--c:'+n.part+'">'+esc(n.label.replace(/ \(.*\)/,""))+' '+Math.round(vals[n.id]/tot*100)+'%</span>';});
  h+='</div>';
 }
 else if(out.chart&&out.chart.rows.length){
  h+='<div style="margin-top:16px;font-family:var(--fd);font-weight:700;font-size:15px">'+esc(out.chart.title)+'</div>';
  out.chart.rows.forEach(function(r){h+='<div style="margin-top:10px"><div style="display:flex;justify-content:space-between;gap:10px;font-size:13px;color:#C9C2BB;margin-bottom:4px"><span>'+esc(r.l)+'</span><b style="color:#fff">'+esc(r.v)+'</b></div><div style="height:10px;background:#2A2622;border-radius:999px;overflow:hidden"><i style="display:block;height:100%;width:'+Math.max(1,Math.min(100,r.w))+'%;background:'+r.c+';border-radius:999px;transition:width .35s ease"></i></div></div>';});
 }
 $("fq-live").innerHTML=h;
}
live();

// ---- questions ----
var qh="";
M.questions.forEach(function(q,qi){
 qh+='<div class="fq-q" id="fqq-'+qi+'"><div class="fq-qh"><span class="fq-qn">'+(qi+1)+'</span><div class="fq-qt">'+esc(q.text)+'</div></div><div class="fq-ops" role="radiogroup" aria-label="'+esc(q.text)+'">';
 q.answers.forEach(function(a,ai){qh+='<button type="button" class="fq-op" role="radio" aria-checked="false" data-q="'+qi+'" data-a="'+ai+'" style="--dot:'+DOT[ai]+';--tint:'+TINT[ai]+'">'+esc(a)+'</button>';});
 qh+='</div></div>';
});
$("fq-qs").innerHTML=qh;
$("fq-dots").innerHTML=new Array(nQ+1).join("<i></i>");
Array.prototype.forEach.call(d.querySelectorAll(".fq-op"),function(b){
 b.addEventListener("click",function(){
  var qi=+b.getAttribute("data-q"),ai=+b.getAttribute("data-a");ans[qi]=ai;
  Array.prototype.forEach.call(d.querySelectorAll('.fq-op[data-q="'+qi+'"]'),function(x){var on=x===b;x.classList.toggle("sel",on);x.setAttribute("aria-checked",on);});
  $("fqq-"+qi).classList.add("done");update();
 });
});
function update(){
 var done=ans.filter(function(a){return a!==null;}).length, s=ans.reduce(function(t,a){return t+(a||0);},0);
 Array.prototype.forEach.call($("fq-dots").children,function(i,k){i.classList.toggle("on",ans[k]!==null);});
 $("fq-progt").textContent=done<nQ?done+" of "+nQ+" answered":"All answered";
 $("fq-go").disabled=done<nQ;
 var f=done?s/max:0;
 $("fq-arc").style.strokeDashoffset=251.3*(1-f);
 $("fq-needle").style.transform="rotate("+(-90+180*f)+"deg)";
 $("fq-gval").innerHTML=done?s+'<span style="font-size:15px;color:#B9B2AB;font-weight:600"> / '+max+'</span>':"0";
 var b=BANDS[band(s)];$("fq-gband").textContent=done?b.n:"Answer to see";$("fq-gband").style.color=done?(b.c==="#2E7148"?"#7FCB98":b.c==="#A3261B"?"#FF7A6B":"#FF8A3D"):"#B9B2AB";
}
update();

// ---- results ----
$("fq-go").addEventListener("click",function(){
 if(!emailOK(email)){askEmail();return;}
 showResults();
});
function askEmail(){
 var r=$("fq-res");r.classList.add("show");
 r.innerHTML='<div class="fq-sec"><h3 class="fq-h">Where should we send your breakdown?</h3><p class="fq-sub">The email you registered with on fleet-ready.com.  You only need to do this once.</p>'+
  '<div class="fq-email"><input type="email" id="fq-em" autocomplete="email" placeholder="name@company.co.uk"><button class="fq-btn" id="fq-emgo">Send my breakdown</button></div><div class="fq-err" id="fq-err" role="alert"></div></div>';
 $("fq-em").focus();
 $("fq-emgo").onclick=function(){var v=$("fq-em").value.trim();if(!emailOK(v)){$("fq-err").textContent="Enter a valid email, for example name@company.co.uk.";return;}email=v;showResults();};
 r.scrollIntoView({behavior:"smooth",block:"start"});
}
function showResults(){
 try{localStorage.setItem("fr_contact",JSON.stringify({email:email}));}catch(e){}
 try{var L=JSON.parse(localStorage.getItem("fr_leaks")||"{}")||{};L[M.num]=Math.round(out.leak||0);localStorage.setItem("fr_leaks",JSON.stringify(L));if(out.cpm)localStorage.setItem("fr_cpm",String(out.cpm));}catch(e){}
 var s=ans.reduce(function(t,a){return t+a;},0), bi=band(s), B=BANDS[bi], weak=[];
 ans.forEach(function(a,i){if(a>=2)weak.push(i);});
 try{var RS=JSON.parse(localStorage.getItem("fr_results")||"{}")||{};RS[M.id.replace(/^fr-m\d+-/,"")]=[bi,s,max,Math.round(out.leak||0),weak,ans];localStorage.setItem("fr_results",JSON.stringify(RS));}catch(e){}
 var h='<div class="fq-sec" style="text-align:center;padding:34px 24px">'+
  '<div style="width:64px;height:64px;margin:0 auto 14px;border-radius:50%;background:linear-gradient(135deg,#FF7A2F,#FF9A4D);display:grid;place-items:center"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#141210" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5 11-11"/></svg></div>'+
  '<h3 class="fq-h">Your breakdown is on its way</h3>'+
  '<p class="fq-sub" style="margin:8px auto 0">We\'ve sent your full Module '+M.num+' breakdown to <b style="color:#1C1A18">'+esc(email)+'</b>: your score, your figures, a chart of every answer and what to do first.  It usually arrives within a couple of minutes.  If it isn\'t in your inbox, check your spam folder.</p>'+
  (ku.email?'':'<p class="fq-note"><button class="fq-notme" id="fq-notme">Not you?</button></p>')+
  (NEXT_URL?'<a class="fq-btn fq-next" href="'+esc(NEXT_URL)+'" target="_top">'+esc(NEXT_LABEL)+'</a>':'')+'</div>';
 var r=$("fq-res");r.innerHTML=h;r.classList.add("show");
 $("fq-go").disabled=true;$("fq-go").textContent="Breakdown sent";
 var nm=$("fq-notme");if(nm)nm.onclick=function(){email="";try{localStorage.removeItem("fr_contact");}catch(e){}$("fq-go").textContent="See my breakdown";askEmail();};
 r.scrollIntoView({behavior:"smooth",block:"start"});
 send(s,B,weak,bi);
}

// ---- values for the GHL email template (short names keep the link small) ----
function emailData(s,B,weak,bi){
 var e={}, nm=(ku.first_name||(ku.name||"").split(" ")[0]||"").trim();
 var show=function(k,on){e[k+"d"]=on?"block":"none";e[k+"h"]=on?"none":"all";};
 e.mof=TOTAL; e.fn=nm?"Hi "+nm+",":"Hi,"; e.mn=M.num; e.mt=M.title; e.sc=s; e.mx=max; e.bn=B.n; e.bc=B.c; e.bs=B.s; e.rt=M.results[bi];
 e.typ=M.typicalCost?"Typical cost of this leak: "+M.typicalCost:""; show("typ",!!M.typicalCost);
 var figs=(out.headline&&out.figs)||[]; show("fg",figs.length>0);
 for(var i=0;i<3;i++){e["f"+(i+1)+"v"]=figs[i]?figs[i].value:"";e["f"+(i+1)+"l"]=figs[i]?figs[i].label:"";}
 var ch=(out.headline&&out.chart)||null; show("ch",!!ch); e.ct=ch?ch.title:"";
 for(i=0;i<5;i++){var c=ch&&ch.rows[i];e["c"+(i+1)+"l"]=c?c.l:"";e["c"+(i+1)+"v"]=c?c.v:"";e["c"+(i+1)+"w"]=c?Math.max(1,Math.round(c.w)):0;e["c"+(i+1)+"c"]=c?c.c:"#FFFFFF";show("c"+(i+1),!!c);}
 M.questions.forEach(function(q,i){var a=ans[i];e["q"+(i+1)+"l"]=q.short;e["q"+(i+1)+"a"]=q.answers[a];e["q"+(i+1)+"w"]=(a+1)*25;e["q"+(i+1)+"c"]=DOT[a];});
 for(i=0;i<5;i++){var w=weak[i],q=w!==undefined?M.questions[w]:null;e["t"+(i+1)+"t"]=q?q.short:"";e["t"+(i+1)+"a"]=q?"You said: "+q.answers[ans[w]]:"";e["t"+(i+1)+"p"]=q?q.tip:"";show("t"+(i+1),!!q);}
 show("tn",weak.length===0); show("tw",weak.length>0);
 e.nx=NEXT_URL||""; e.nl=NEXT_LABEL; show("nx",!!NEXT_URL);
 return e;
}
function send(s,B,weak,bi){
 var data={email:email,quiz:M.id,module:M.num,moduleName:M.title,quizScore:s,maxScore:max,band:B.n,
  resultText:M.results[bi],typicalCost:M.typicalCost?"Typical cost of this leak: "+M.typicalCost:"",
  headline:out.headline||"",leakMonth:Math.round(out.leak||0),
  lookFirst:weak.map(function(i){return "Q"+(i+1);}).join(", "),
  lookFirstText:weak.length?weak.map(function(i){var q=M.questions[i];return q.short+": you said "+q.answers[ans[i]]+".  "+q.tip;}).join("\n\n"):"Nothing stood out.  Every answer was at or near the best option.",
  bars:ans.join(""),source:"fleet-ready"};
 Object.assign(data,emailData(s,B,weak,bi));
 M.nums.forEach(function(n){data["n_"+n.id]=vals[n.id];});
 ans.forEach(function(a,i){data["a"+(i+1)]=a;});
 if(!WEBHOOK_URL)return console.log("Quiz result:",data);
 var p=Object.keys(data).map(function(k){return encodeURIComponent(k)+"="+encodeURIComponent(data[k]);}).join("&");
 fetch(WEBHOOK_URL+(WEBHOOK_URL.indexOf("?")>-1?"&":"?")+p,{method:"GET",mode:"no-cors"}).catch(function(e){console.log("Webhook note:",e);});
}

}
function lesson(LESSON,NEXT_URL,NEXT_LABEL,TOTAL){

var KEY = "fr_lesson_" + LESSON.slug;
function load(){try{return JSON.parse(localStorage.getItem(KEY)||"{}")||{};}catch(e){return {};}}
function save(s){try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){}}
var st = load(); if(!st.done) st.done = {};
function esc(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function li(a){return a.map(function(x){return "<li>"+esc(x)+"</li>";}).join("");}
var tick = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2.5 7.5l3 3 6-7" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

document.getElementById("frl-part").textContent = "Module " + LESSON.num + " of " + TOTAL;
document.getElementById("frl-title").textContent = LESSON.title;
document.getElementById("frl-sum").textContent = LESSON.summary;
document.getElementById("frl-build").textContent = "your Module " + LESSON.num + " target and action list";

var h = "";
h += '<div class="frl-sec"><div class="frl-h">The leak</div>';
LESSON.problem.forEach(function(p){ h += '<p class="frl-p">'+esc(p)+'</p>'; });
if (LESSON.cost) h += '<div class="frl-cost"><b>Typical cost</b><span>'+esc(LESSON.cost)+'</span></div>';
h += '</div>';

h += '<div class="frl-sec"><div class="frl-h">How it shows up</div>';
h += '<p class="frl-p">Be honest about which list sounds more like your fleet.  The quiz at the end of this module will score it for you.</p>';
h += '<div class="frl-two"><div class="frl-col bad"><div class="frl-ch">Where the money leaks</div><ul class="frl-ul">'+li(LESSON.signs)+'</ul></div>';
h += '<div class="frl-col ok"><div class="frl-ch">What good looks like</div><ul class="frl-ul">'+li(LESSON.good)+'</ul></div></div></div>';

h += '<div class="frl-sec"><div class="frl-h">What fixes it</div><p class="frl-p">Start from the problem, not the product.  These are the capabilities that address this leak, whichever supplier provides them.</p><div class="frl-fix">';
LESSON.fixes.forEach(function(f){ h += '<div><b>'+esc(f[0])+'</b><p>'+esc(f[1])+'</p></div>'; });
h += '</div></div>';

h += '<div class="frl-sec"><div class="frl-h">Why fixes fall over</div><div class="frl-fail">';
LESSON.fails.forEach(function(f){ h += '<div><b>'+esc(f[0])+'</b><p>'+esc(f[1])+'</p></div>'; });
h += '</div></div>';

h += '<div class="frl-sec"><div class="frl-h">Set your target</div><p class="frl-p">Write it in one sentence with a number in it.  If you can\'t get to a number, the target isn\'t defined yet.</p>';
h += '<div class="frl-ex"><i>For example:</i> '+esc(LESSON.target)+'</div>';
h += '<label for="frl-tgt" style="position:absolute;left:-9999px">Your target</label><textarea id="frl-tgt" placeholder="Your target for this module"></textarea><div class="frl-saved" id="frl-saved"></div></div>';

h += '<div class="frl-sec"><div class="frl-h">Questions to ask any supplier</div><p class="frl-p">Including your current one.  A good supplier answers these specifically, with evidence from businesses like yours.</p><ol class="frl-q">'+li(LESSON.questions)+'</ol></div>';

h += '<div class="frl-sec"><div class="frl-h">Your actions this week</div><div class="frl-acts">';
LESSON.actions.forEach(function(a,i){
  h += '<label class="frl-act" data-i="'+i+'"><input type="checkbox" data-i="'+i+'"><span class="frl-box">'+tick+'</span><span class="frl-at">'+esc(a)+'</span></label>';
});
h += '</div><div class="frl-prog" id="frl-prog"></div>';
if (NEXT_URL) h += '<div class="frl-next"><a class="frl-btn" href="'+esc(NEXT_URL)+'">'+esc(NEXT_LABEL)+'</a></div>';
h += '</div>';

var card = document.getElementById("frl-card");
card.innerHTML = h;

var ta = document.getElementById("frl-tgt"), sv = document.getElementById("frl-saved"), t;
ta.value = st.target || "";
ta.addEventListener("input", function(){ st.target = ta.value; save(st); clearTimeout(t); sv.textContent = "Saved"; t = setTimeout(function(){ sv.textContent = ""; }, 1500); });

function prog(){
  var n = 0; LESSON.actions.forEach(function(a,i){ if(st.done[i]) n++; });
  document.getElementById("frl-prog").innerHTML = "<b>" + n + " of " + LESSON.actions.length + "</b> done" + (n === LESSON.actions.length ? ".  Nice work, this module's groundwork is in place." : "");
}
var boxes = card.querySelectorAll(".frl-act input");
for (var i = 0; i < boxes.length; i++) {
  (function(b){
    var lab = b.parentNode, k = b.getAttribute("data-i");
    b.checked = !!st.done[k]; lab.className = "frl-act" + (b.checked ? " on" : "");
    b.addEventListener("change", function(){ st.done[k] = b.checked; lab.className = "frl-act" + (b.checked ? " on" : ""); save(st); prog(); });
  })(boxes[i]);
}
prog();

}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",FR.scan);else FR.scan();
})();
