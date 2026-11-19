/* ═══════════════════════════════════════════════════════════
   Rijan Shrestha — portfolio.  EDIT HERE
   Contact details, projects, case studies, jobs, skills and services are plain data below.
   Images live in img/, videos in media/. If an image can't load, a designed placeholder shows instead.
   ═══════════════════════════════════════════════════════════ */
const EMAIL = "bmaxsth@gmail.com";
const PHONE = "+971 54 721 8557";
const SOCIAL = [
  {label:"Behance",  href:"https://www.behance.net/b_maxsth"},
  {label:"LinkedIn", href:"https://www.linkedin.com/in/rijan-shrestha-939626224/"},
  {label:"WhatsApp", href:"https://wa.me/971547218557"}
];
const BH  = "https://www.behance.net/gallery/";
const PROJECTS = [
  {t:"RA Logo & Brand Design", c:"branding", url:BH+"228484361/RA-Logo-Brand-Design", word:"RA"},
  {t:"Falcon Cup — Premium Golf Brand Identity", c:"branding", url:BH+"240951081/Falcon-Cup-LLC-FZ-Premium-Golf-Brand-Identity", word:"Falcon"},
  {t:"ETERNO by Maurizio Canale", c:"ai", url:BH+"245593275/ETERNO-BY-MAURIZIO-CANALE", word:"Eterno"},
  {t:"Realto Invest — Branding", c:"branding", url:BH+"220292191/Branding-Realto-Invest-LLC", word:"Realto"},
  {t:"La Vie Skin 2026", c:"ai", url:BH+"245664315/La-Vie-Skin-2026", word:"La Vie"},
  {t:"Package Design", c:"packaging", url:BH+"214617323/Package-Design", word:"Pack"},
  {t:"Nautical Cosmetics", c:"packaging", url:BH+"223088199/Nautical-Cosmetics", word:"Nautical"},
  {t:"Avarten Cosmetics", c:"branding", url:BH+"209453359/Avarten-Cosmetics", word:"Avarten"},
  {t:"ETERNO 2026 — Manipulation", c:"ai", url:BH+"245664865/ETERNO-BY-MAURIZIO-CANALE-2026-%28Manipulation%29", word:"Eterno 26"},
  {t:"Nauticle Branding", c:"branding", url:BH+"223073429/Nauticle-Branding", word:"Nauticle"},
  {t:"Glame Cosmetic", c:"packaging", url:BH+"245595131/Glame-Cosmetic", word:"Glame"},
  {t:"La Vie Skin", c:"ai", url:BH+"252496049/La-Vie-Skin", word:"La Vie"}
];
/* cover image for each project above, in the same order */
const COVERS = ["img/ra-cover.jpg", "img/falcon-cup-cover.jpg", "img/eterno-cover.jpg", "img/realto-cover.jpg", "img/la-vie-skin-2026-cover.jpg", "img/fungi-glow-cover.jpg", "img/nautical-cosmetics-cover.jpg", "img/avarten-cosmetics-cover.jpg", "img/eterno-2026-cover.jpg", "img/nautical-cover.jpg", "img/glame-cover.jpg", "img/la-vie-skin-cover.jpg"];
PROJECTS.forEach((p,i)=>{ if(COVERS[i]) p.img=COVERS[i]; });
/* extra pieces cut from inside the Behance projects: brand applications and more packaging */
/* extra images from inside the Behance projects: shown in each project's gallery, not as separate tiles */
const GALLERY={"0": ["img/ra-1.jpg", "img/ra-2.jpg", "img/ra-3.jpg", "img/ra-4.jpg"], "1": ["img/falcon-cup-1.jpg", "img/falcon-cup-2.jpg", "img/falcon-cup-3.jpg", "img/falcon-cup-4.jpg", "img/falcon-cup-5.jpg"], "3": ["img/realto-1.jpg", "img/realto-2.jpg", "img/realto-3.jpg"], "9": ["img/nautical-1.jpg", "img/nautical-2.jpg", "img/nautical-3.jpg"]};
PROJECTS.forEach((p,i)=>{ p.gallery=[p.img].concat(GALLERY[i]||[]); });
PROJECTS.push(...[{"t": "AdaprodenX \u2014 Supplement Label", "c": "packaging", "img": "img/adaprodenx.jpg", "url": "https://www.behance.net/gallery/214617323/Package-Design", "word": "AdaprodenX"}, {"t": "Desert Bloom Oud \u2014 Serum Label", "c": "packaging", "img": "img/desert-bloom-oud.jpg", "url": "https://www.behance.net/gallery/214617323/Package-Design", "word": "Oud"}, {"t": "MedSilk \u2014 Face Mask Pouch", "c": "packaging", "img": "img/medsilk.jpg", "url": "https://www.behance.net/gallery/214617323/Package-Design", "word": "MedSilk"}].map(p=>({...p,gallery:[p.img]})));
PROJECTS[5].t="Fungi Glow — Sheet Mask"; PROJECTS[5].word="Fungi";
/* client work from the CV, shown as brand-colour type tiles until images are added (add img + gallery to replace) */
PROJECTS.push(...[{"t": "Cyberhulk \u2014 AI Marketing SaaS", "c": "social", "word": "CYBER HULK", "url": "", "bt": {"bg": "radial-gradient(120% 90% at 18% 12%,#7B2FE0 0%,#3a0a63 45%,#0d0612 100%)", "fg": "#ffffff", "ac": "#ABE57B", "kicker": "Avarten Group \u00b7 Dubai", "line": "Brand film, ad campaign, UI visuals & social content", "chips": ["Motion", "Ads", "UI"]}, "info": {"role": "Graphic & Multimedia Designer", "when": "2024 \u2013 Present", "pts": ["Brand film and motion pieces for an AI marketing platform", "An ad campaign library of around 15 designs", "Dashboard and UI visuals, mascot scenes and social content"]}}, {"t": "44 Media Group \u2014 Ad Creatives", "c": "social", "word": "44 MEDIA", "url": "", "bt": {"bg": "linear-gradient(150deg,#F7C531 0%,#E9A417 55%,#B8790C 100%)", "fg": "#ffffff", "ac": "#2B241D", "kicker": "Avarten Group \u00b7 Dubai", "line": "Ad creatives and campaign copy for a digital marketing agency", "chips": ["Ads", "Social", "Copy"]}, "info": {"role": "Graphic & Multimedia Designer", "when": "2024 \u2013 Present", "pts": ["Ad creatives and campaign copy", "Social media visuals in the agency's bold yellow style", "Part of 50+ campaigns across Avarten Group's brands"]}}, {"t": "Voeux Group \u2014 Social Media", "c": "social", "word": "VOEUX", "url": "", "bt": {"bg": "linear-gradient(160deg,#1A1A1A 0%,#0E0E0E 100%)", "fg": "#F4F4F0", "ac": "#D7FF3F", "kicker": "Dubai \u00b7 2023 \u2013 2024", "line": "200+ graphics & videos \u00b7 +40% engagement", "chips": ["Social", "Video", "Calendars"]}, "info": {"role": "Social Media Manager & Graphic Designer", "when": "2023 \u2013 2024", "pts": ["Produced 200+ graphics and videos", "Increased audience engagement by 40%", "Campaign visuals and content calendars across 5+ platforms"]}}, {"t": "Mountain Yeti Brewing Co. \u2014 Social & Branding", "c": "social", "word": "MOUNTAIN YETI", "url": "", "bt": {"bg": "linear-gradient(180deg,#12324A 0%,#0B1E2E 60%,#071219 100%)", "fg": "#F2F6F8", "ac": "#9FD3F0", "kicker": "Sydney, Australia \u00b7 Remote", "line": "100+ social pieces & reels across 20+ launches", "chips": ["Reels", "Branding", "Launches"]}, "info": {"role": "Graphic Designer & Social Media Manager (remote)", "when": "2021 \u2013 2024", "pts": ["Branding visuals for a craft brewery", "100+ social pieces including reels", "Creative for 20+ product launches and campaigns"]}}].map(p=>({...p,gallery:[]})));
/* real client images: these tiles now show the photo instead of the type tile */
const CLIENT_IMG={"44 Media Group":"img/44-media-group.jpg","Cyberhulk": "img/cyberhulk-ad.jpg", "Mountain Yeti": "img/mountain-yeti.jpg", "Voeux": "img/voeux.jpg"};
PROJECTS.forEach(p=>{ const k=Object.keys(CLIENT_IMG).find(k=>p.bt&&p.t.startsWith(k)); if(k){ p.img=CLIENT_IMG[k]; p.gallery=[p.img]; delete p.bt; } });
/* ETERNO: both campaigns share one gallery, each tile opens on its own cover first */
{ const e1=PROJECTS[2], e2=PROJECTS[8]; const more=["img/eterno-1.jpg", "img/eterno-2.jpg", "img/eterno-3.jpg", "img/eterno-4.jpg"]; const g1=e1.gallery.slice(), g2=e2.gallery.slice(); e1.gallery=g1.concat(more,g2); e2.gallery=g2.concat(more,g1); }
/* Cyberhulk: snail ad as cover, the AI-guidance ad second in its gallery */
{ const ch=PROJECTS.find(p=>p.t.startsWith("Cyberhulk")); const snail="img/cyberhulk-snail.jpg"; ch.gallery=[snail].concat(ch.gallery); ch.img=snail; }
PROJECTS.push({t:"Avarten Real Estate — Brand Identity",c:"branding",word:"Avarten",url:"",img:"img/avarten-real-estate.jpg",gallery:[]}); PROJECTS[PROJECTS.length-1].gallery=[PROJECTS[PROJECTS.length-1].img];
const CATS = {branding:"Brand Identity", social:"Social & Campaigns", packaging:"Packaging", ai:"AI & Manipulation"};
const JOBS = [
  {y:"2024 – Present", k:"Full-time", r:"Graphic & Multimedia Designer", c:"Avarten Group · Dubai, UAE", b:[
    "Design across the group's brands: real estate, Avarten Capital, e-commerce, Dunevia Global, 44 Media Group, LVS and Pearlani cosmetics, Cyberhulk and The Sapphire Circle.",
    "Website layouts, banners and landing page visuals for 7+ brand verticals and 50+ campaigns.",
    "Packaging and identity systems for cosmetics lines, 15+ product pack shots, and 50+ motion graphics a year."]},
  {y:"2023 – 2025", k:"Part-time", r:"GFX & VFX Faculty", c:"Focus Training Institute · Sharjah, UAE", b:[
    "Taught graphic design, video editing, motion graphics and VFX to 50+ student cohorts.",
    "Mentored 30+ students into job-ready portfolios used in successful placements."]},
  {y:"2023 – 2024", k:"Full-time", r:"Social Media Manager & Graphic Designer", c:"Voeux Group LLC · Dubai, UAE", b:[
    "Produced 200+ graphics and videos that increased audience engagement by 40%.",
    "Campaign visuals and content calendars across 5+ social platforms."]},
  {y:"2021 – 2024", k:"Freelance / Remote", r:"Graphic Designer & Social Media Manager", c:"Mountain Yeti Brewing Co. · Sydney, Australia", b:[
    "Branding visuals and 100+ social pieces, including reels, across 20+ product launches and campaigns."]},
  {y:"2018 – 2023", k:"Full-time", r:"GFX & VFX Faculty & Social Media Manager", c:"Maya Animation Academy · Kathmandu, Nepal", b:[
    "Taught graphic design, editing and VFX to 100+ students and supervised 50+ portfolio projects.",
    "Grew the academy's social engagement by 60%."]},
  {y:"2018 – 2020", k:"Part-time", r:"Graphic Designer & Basic Video Editor", c:"Content Factory · Kathmandu, Nepal", b:[
    "Flyers, posts and reels for Facebook and Instagram, 50+ assets a month."]}
];
const HIGHLIGHTS=["7+ brands · 50+ campaigns","30+ students placed","+40% engagement","20+ product launches","100+ students · +60% social","50+ assets a month"];
JOBS.forEach((j,i)=>j.h=HIGHLIGHTS[i]);
const SKILLS = [
  {h:"Design", li:["Photoshop","Illustrator","InDesign","Lightroom"]},
  {h:"Motion & video", li:["After Effects","Premiere Pro","Media Encoder","DaVinci Resolve","CapCut"]},
  {h:"AI tools", li:["Higgsfield","Google Flow","Magnific","AI image generation","AI video generation","Advanced prompting"]},
  {h:"Other", li:["Canva","Microsoft Office","Google Workspace","Meta Business Suite"]}
];
const SERVICES = [
  {t:"Brand Identity & Strategy", d:"Logos, monograms and brand boards for real estate, golf, fragrance and tech, with rules your team can actually follow.", li:["Logo","Guidelines","Stationery"]},
  {t:"Graphic & Packaging Design", d:"Labels, pouches and boxes for skincare and supplements, plus posters and social kits that sell on the shelf and the feed.", li:["Packaging","Print","Social"]},
  {t:"Motion Graphics & VFX", d:"Logo reveals, kinetic type and 9:16 ad cuts for Instagram, TikTok and digital screens.", li:["Logo reveal","9:16 ads","VFX"]},
  {t:"Product Animation", d:"Pack shots and product loops for cosmetics launches, from a 5-second loop to the launch film.", li:["Pack shots","Loops","Launch films"]},
  {t:"AI Image & Video", d:"Art-directed AI product photography and campaign films, retouched and graded by hand.", li:["Product stills","Campaigns","AI film"]}
];

/* ═════════════ helpers ═════════════ */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const TONES=[["#3b4a0c","#0E0E0E"],["#262626","#0E0E0E"],["#56690f","#141414"],["#1A1A1A","#0E0E0E"],["#2f3a0a","#101010"],["#2b2b2b","#384510"]];
function artPH(p,i){
  const size=Math.min(19,100/Math.max(4,p.word.length))+"cqw";
  const [a,b]=TONES[i%TONES.length], ang=(i*47)%360;
  const r1=60+((i*37)%50), r2=30+((i*23)%40);
  return `<div class="art-ph" style="background:radial-gradient(90% 80% at ${20+(i*29)%60}% ${10+(i*17)%40}%,${a},${b} 70%),linear-gradient(${ang}deg,${b},${a})">
    <span class="ring" style="width:${r1}%;aspect-ratio:1;right:-${r1/4}%;top:-${r1/5}%"></span>
    <span class="ring" style="width:${r2}%;aspect-ratio:1;right:${r2/3}%;top:${r2/2}%"></span>
    <span class="big" style="font-size:${size}">${esc(p.word)}</span></div>`;
}
function brandTile(p){const b=p.bt;
  return `<div class="bt" style="background:${b.bg};color:${b.fg}">
    <span class="bt-k">${esc(b.kicker)}</span>
    <span class="bt-n">${esc(p.word)}</span>
    <span class="bt-l" style="color:${b.ac}">${esc(b.line)}</span>
    <span class="bt-c">${b.chips.map(c=>`<i style="border-color:${b.ac}66">${esc(c)}</i>`).join("")}</span></div>`;}
function media(p,i){
  if(p.video) return `<img src="${esc(p.img)}" alt="${esc(p.t)}" loading="lazy"><video class="tile-vid" src="${esc(p.video)}" muted loop playsinline preload="none"></video><span class="vid-badge">▶ Motion</span>`;
  if(p.bt) return brandTile(p);
  const ph=artPH(p,i);
  if(!p.img) return ph;
  return ph+`<img src="${esc(p.img)}" alt="${esc(p.t)}" loading="lazy" decoding="async">`;
}
const arrNE='<svg class="i"><use href="#arr-ne"/></svg>';

/* ═════════════ portrait ═════════════ */
/* the hero character and the CTA avatar are plain <img> tags in index.html so they start loading at once */
/* a tile image that fails to load is removed, which leaves its designed placeholder showing */
document.addEventListener("error",e=>{ const t=e.target; if(t&&t.tagName==="IMG"&&t.closest(".card .media")&&t.previousElementSibling) t.remove(); },true);

/* ═════════════ marquee ═════════════ */
(function(){
  const names=["Avarten Group","Cyberhulk","Dunevia Global","44 Media Group","The Sapphire Circle","La Vie Skin","Pearlani","Voeux Group","Mountain Yeti Brewing Co.","Falcon Cup","Realto Invest"];
  const html=names.map(n=>`<span>${esc(n)}</span>`).join("");
  $("#mq").innerHTML=html+html;
})();

/* ═════════════ work grid ═════════════ */
let filter="all";
const ORDER=[0,18,11,9,12,16,19,5];
const SIZE={};
function renderFilters(){
  const opts=[["all","All"]].concat(Object.entries(CATS));
  $("#filters").innerHTML=opts.map(([k,n])=>{
    const c=k==="all"?PROJECTS.length:PROJECTS.filter(p=>p.c===k).length;
    return `<button class="chip" type="button" id="f-${k}" data-k="${k}" aria-pressed="${filter===k}">${esc(n)}<span>${c}</span></button>`;}).join("");
  $("#filters").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{filter=b.dataset.k;renderFilters();renderGrid()});
}
function renderGrid(){
  $("#grid").innerHTML=ORDER.map(i=>({p:PROJECTS[i],i})).filter(({p})=>filter==="all"||p.c===filter).map(({p,i})=>`
    <button type="button" class="card s-${SIZE[i]||"n"}" data-i="${i}" aria-label="Open ${esc(p.t)} gallery">
      <div class="media">${media(p,i)}</div>
      ${p.gallery.length>1?`<span class="count"><svg viewBox="0 0 24 24"><rect x="7" y="3" width="14" height="14" rx="2"/><path d="M3 7v12a2 2 0 0 0 2 2h12"/></svg>${p.gallery.length}</span>`:""}
      <div class="card-meta"><div><h3>${esc(p.t)}</h3><small>${esc(CATS[p.c])}</small></div><span class="go"><svg class="i"><use href="#arr"/></svg></span></div>
    </button>`).join("");
  $("#grid").querySelectorAll(".card").forEach(b=>{ b.onclick=()=>openLB(+b.dataset.i);
    const v=b.querySelector(".tile-vid"); if(!v) return;
    b.addEventListener("mouseenter",()=>{ v.play().catch(()=>{}); b.classList.add("playing"); });
    b.addEventListener("mouseleave",()=>{ v.pause(); b.classList.remove("playing"); });
    if(!matchMedia("(hover:hover)").matches) new IntersectionObserver(([en])=>{ if(en.isIntersecting){ v.play().catch(()=>{}); b.classList.add("playing"); } else { v.pause(); b.classList.remove("playing"); } },{threshold:.6}).observe(b); });
}

/* ═════════════ experience + skills ═════════════ */
$("#xp").innerHTML=JOBS.map(j=>`<article class="job"><div class="yr">${esc(j.y)}<small>${esc(j.k)}</small></div>
  <div><h3>${esc(j.r)}</h3><p class="co">${esc(j.c)}</p></div><span class="hl">${esc(j.h)}</span></article>`).join("");
const ABBR={"Photoshop":"Ps","Illustrator":"Ai","InDesign":"Id","Lightroom":"Lr","After Effects":"Ae","Premiere Pro":"Pr","Media Encoder":"Me","DaVinci Resolve":"Dr","CapCut":"Cc","Canva":"Ca","Microsoft Office":"Of","Google Workspace":"Gw","Meta Business Suite":"Mb","Higgsfield":"Hf","Google Flow":"Fl","Magnific":"Mg"};
const GLYPH={"AI image generation":'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 16 5-5 4 4 3-3 6 6"/><path d="M17 2v4M15 4h4"/></svg>',"AI video generation":'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 10 4-2v8l-4-2"/><path d="M8 9v6l4-3z"/></svg>',"Advanced prompting":'<svg viewBox="0 0 24 24"><path d="m5 8 4 4-4 4M12 16h7"/></svg>'};
/* official app icons, taken from each tool's own site */
const LOGO={"Higgsfield": "img/logo-higgsfield.webp", "Google Flow": "img/logo-google-flow.webp", "Magnific": "img/logo-magnific.webp"};
const ico=l=>LOGO[l]?`<i class="ico logo" aria-hidden="true"><img src="${LOGO[l]}" alt=""></i>`:GLYPH[l]?`<i class="ico g" aria-hidden="true">${GLYPH[l]}</i>`:`<i class="ico" aria-hidden="true">${esc(ABBR[l]||l.slice(0,2))}</i>`;
$("#skillsGrid").innerHTML=SKILLS.map(s=>`<div class="sk"><div class="sk-head"><h3>${esc(s.h)}</h3><span>${s.li.length} tools</span></div><ul class="tools">${s.li.map(l=>`<li>${ico(l)}<span>${esc(l)}</span></li>`).join("")}</ul></div>`).join("");
/* education, languages and competencies join the same grid so no column is left half empty */
document.querySelectorAll(".edu > .sk").forEach(c=>$("#skillsGrid").append(c));

/* ═════════════ services ═════════════ */
$("#svc").innerHTML=SERVICES.map((s,i)=>`
  <article class="sv"><span class="n">${String(i+1).padStart(2,"0")}</span><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p>
  <ul>${s.li.map(l=>`<li>${esc(l)}</li>`).join("")}</ul></article>`).join("");

/* ═════════════ contact + social ═════════════ */
(function(){
  const btns=[];
  btns.push(`<a class="btn" href="https://wa.me/971547218557" target="_blank" rel="noopener"><span class="ar">${arrNE}</span>WhatsApp me</a>`);
  if(EMAIL) btns.push(`<a class="btn ghost" href="mailto:${esc(EMAIL)}"><span class="ar"><svg class="i"><use href="#arr"/></svg></span>Email me</a>`);
  const rows=[["Email",EMAIL,"mailto:"+EMAIL],["Phone / WhatsApp",PHONE,"https://wa.me/971547218557"],["LinkedIn","rijan-shrestha","https://www.linkedin.com/in/rijan-shrestha-939626224/"],["Behance","b_maxsth","https://www.behance.net/b_maxsth"]];
  $("#rows").innerHTML=rows.filter(r=>r[1]).map((r,i)=>`<div class="ct"><span class="eyebrow">${esc(r[0])}</span><a class="v" href="${esc(r[2])}"${r[2].startsWith("http")?' target="_blank" rel="noopener"':""}>${esc(r[1])}</a>${i<2?`<button type="button" id="cp${i}" data-v="${esc(r[1])}">Copy</button>`:""}</div>`).join("");
  $("#rows").querySelectorAll("button").forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.v);b.textContent="Copied"}catch(_){const v=b.previousElementSibling,s=getSelection(),g=document.createRange();g.selectNodeContents(v);s.removeAllRanges();s.addRange(g);b.textContent="Selected"}setTimeout(()=>b.textContent="Copy",1600)});
  $("#ctaBtns").innerHTML=btns.join("");
  $("#social").innerHTML=SOCIAL.map(s=>`<li><a href="${esc(s.href)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")+(EMAIL?`<li>${esc(EMAIL)}</li>`:"")+(PHONE?`<li>${esc(PHONE)}</li>`:"");
})();

/* ═════════════ nav: soft fade behind the pills once the page is scrolled ═════════════ */
(function(){ const nav=document.querySelector(".nav"); if(!nav) return;
  const f=()=>nav.classList.toggle("stuck",scrollY>24); f(); addEventListener("scroll",f,{passive:true}); })();

/* ═════════════ menu ═════════════ */
(function(){
  const b=$("#menuBtn"), m=$("#menu");
  const set=o=>{m.hidden=!o;b.setAttribute("aria-expanded",String(o))};
  b.onclick=e=>{e.stopPropagation();set(m.hidden)};
  m.querySelectorAll("a").forEach(a=>a.onclick=()=>set(false));
  document.addEventListener("click",e=>{if(!m.hidden&&!m.contains(e.target))set(false)});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")set(false)});
})();

/* ═════════════ project gallery (lightbox) ═════════════ */
const LB=$("#lb"); let lbP=null, lbK=0;
function lbShow(k){ const g=lbP.gallery; lbK=(k+g.length)%g.length;
  $("#lbI").src=g[lbK]; $("#lbI").alt=lbP.t+" — image "+(lbK+1)+" of "+g.length;
  $("#lbN0").textContent=(lbK+1)+" / "+g.length;
  $("#lbTh").querySelectorAll("button").forEach((b,j)=>b.setAttribute("aria-current",String(j===lbK)));
  const multi=g.length>1; $("#lbP").hidden=!multi; $("#lbN").hidden=!multi; $("#lbTh").hidden=!multi; $("#lbN0").hidden=!multi; }
function openLB(i){ lbP=PROJECTS[i];
  $("#lbT").textContent=lbP.t; $("#lbC").textContent=CATS[lbP.c]; $("#lbB").href=lbP.url||"#"; $("#lbB").hidden=!lbP.url;
  const info=!lbP.gallery.length; $("#lbI").hidden=info; $("#lbInfo").hidden=!info;
  if(info){ const f=lbP.info, b=lbP.bt;
    $("#lbInfo").innerHTML=`<div class="bt big" style="background:${b.bg};color:${b.fg}"><span class="bt-k">${esc(b.kicker)}</span><span class="bt-n">${esc(lbP.word)}</span></div>
      <div class="lb-txt"><span class="eyebrow">${esc(f.when)}</span><h4>${esc(f.role)}</h4><ul>${f.pts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      <a class="btn" href="#contact" data-close><span class="ar"><svg class="i"><use href="#arr"/></svg></span>Ask about this project</a></div>`;
    $("#lbInfo").querySelector("[data-close]").onclick=()=>LB.close();
    $("#lbTh").innerHTML=""; ["#lbP","#lbN","#lbTh","#lbN0"].forEach(s=>$(s).hidden=true); LB.showModal(); return; }
  $("#lbTh").innerHTML=lbP.gallery.map((src,j)=>`<button type="button" aria-label="Image ${j+1}"><img src="${src}" alt=""></button>`).join("");
  $("#lbTh").querySelectorAll("button").forEach((b,j)=>b.onclick=()=>lbShow(j));
  lbShow(0);
  const v=$("#lbV"); if(lbP.video){ $("#lbI").hidden=true; v.hidden=false; v.src=lbP.video; v.play().catch(()=>{}); } else { v.hidden=true; v.removeAttribute("src"); $("#lbI").hidden=false; }
  LB.showModal(); }
LB.addEventListener("close",()=>{ const v=$("#lbV"); v.pause(); });
$("#lbP").onclick=()=>lbShow(lbK-1); $("#lbN").onclick=()=>lbShow(lbK+1); $("#lbX").onclick=()=>LB.close();
LB.addEventListener("click",e=>{if(e.target===LB)LB.close()});
LB.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")lbShow(lbK-1); if(e.key==="ArrowRight")lbShow(lbK+1);});
(function(){let x0=null; const st=$(".lb-stage");
  st.addEventListener("pointerdown",e=>x0=e.clientX);
  st.addEventListener("pointerup",e=>{if(x0!==null&&Math.abs(e.clientX-x0)>50) lbShow(lbK+(e.clientX<x0?1:-1)); x0=null;});})();

/* hero: layers drift apart with the pointer (desktop only) */
(function(){ const hx=document.getElementById("hero");
  if(!hx||matchMedia("(prefers-reduced-motion: reduce)").matches||!matchMedia("(pointer:fine)").matches) return;
  let raf=0,tx=0,ty=0;
  hx.addEventListener("pointermove",e=>{const r=hx.getBoundingClientRect(); tx=(e.clientX-r.left)/r.width-.5; ty=(e.clientY-r.top)/r.height-.5;
    if(!raf) raf=requestAnimationFrame(()=>{hx.style.setProperty("--mx",tx.toFixed(3)); hx.style.setProperty("--my",ty.toFixed(3)); raf=0;});});
  hx.addEventListener("pointerleave",()=>{hx.style.setProperty("--mx",0); hx.style.setProperty("--my",0);});
})();

/* keep every image for the case studies, then one photo per tile */
PROJECTS.forEach(p=>{ p.full=(p.gallery&&p.gallery.length?p.gallery:[p.img]).slice(); });
PROJECTS[9].img=PROJECTS[9].full[1]; PROJECTS[9].t="Nautical — Brand Identity";      /* gold-foil logo as the cover */
PROJECTS[11].t="La Vie Skin — AI Product Visuals";
PROJECTS[0].t="RA — Logo & Brand Design";
PROJECTS.forEach(p=>{ if(p.img) p.gallery=[p.img]; });

/* ═════════════ motion: showreel + video tiles (fill these in to switch them on) ═════════════
   SHOWREEL: url of a 30-60 s MP4.  VIDEOS: project index -> MP4 that plays when the tile is hovered. */
const SHOWREEL = "";   /* showreel section off; the Cyber Hulk film lives in its case study */
const SHOWREEL_POSTER = "media/cyberhulk-poster.jpg";
const VIDEOS = {11:"media/laviskin-exosome.mp4"};   /* 11 = La Vie Skin */
Object.entries(VIDEOS).forEach(([i,v])=>{ if(PROJECTS[i]) PROJECTS[i].video=v; });

/* ═════════════ case studies (copy is a draft: edit brief / idea freely) ═════════════ */
/* Cyber Hulk brand board, cut into panels: logo, collage, phone, palette, variations, type, icon, poster, monitor, 3d, laptop */
const CH_IMGS=["img/cyberhulk-board-01.jpg", "img/cyberhulk-board-02.jpg", "img/cyberhulk-board-03.jpg", "img/cyberhulk-board-04.jpg", "img/cyberhulk-board-05.jpg", "img/cyberhulk-board-06.jpg", "img/cyberhulk-board-07.jpg", "img/cyberhulk-board-08.jpg", "img/cyberhulk-board-09.jpg", "img/cyberhulk-board-10.jpg", "img/cyberhulk-board-11.jpg"];
const CASES=[
 {i:1, tag:"Brand identity", title:"Falcon Cup", sub:"Premium golf brand identity",
  meta:[["Client","Falcon Cup LLC-FZ"],["Industry","Golf & lifestyle"],["Role","Brand identity designer"]],
  brief:"A premium identity for a golf brand that had to feel exclusive and work everywhere, from a small embroidered logo on a cap to the office wall.",
  idea:"A falcon crest inside a classic round seal, in deep navy and cream. The crest simplifies to a single falcon mark for small sizes, so it embroiders cleanly on caps and polos and still reads on signage.",
  deliver:["Logo system","Crest & monogram","Merchandise","Apparel","Office branding","Campaign visual"],
  pick:[0,1,2,3,4,5], cover:0},
 {i:3, tag:"Brand identity", title:"Realto Invest", sub:"Real-estate investment branding",
  meta:[["Client","Realto Invest LLC"],["Industry","Real-estate investment"],["Role","Brand identity designer"]],
  brief:"A corporate identity for a real-estate investment firm that needed to look established and trustworthy from day one.",
  idea:"A bold R monogram with a stepped gold corner, a quiet nod to building floors, set in navy. It is built to read at street scale on towers and signage, and up close in meeting rooms and on stationery.",
  deliver:["Logo & monogram","Colour system","Building signage","Interior branding","Brand board"],
  pick:[1,2,3,0], cover:1},
 {i:15, tag:"Brand identity & launch", title:"Cyber Hulk", sub:"AI marketing platform: identity, app and launch campaign",
  meta:[["Client","Cyber Hulk · Avarten Group"],["Industry","AI marketing software"],["Role","Brand & multimedia designer"]],
  brief:"Create the brand for Cyber Hulk, an AI marketing platform positioned as \u201cthe AI Marketing Manager\u201d, then launch it across the app, posters, screens and social media.",
  idea:"A line-art head drawn from curved circuit lines and nodes, the human mind wired into AI, fading from acid green to electric purple. A squared, tech-style wordmark and a purple-to-black gradient carry the system from the app screen and posters to the launch ads, like the snail on a skateboard that says \u201cSpeed starts here\u201d.",
  deliver:["Logo & wordmark","Colour palette","Logo variations","App screen","Posters","Stationery","3D logo","Ad campaign","Social content"],
  imgs:CH_IMGS, cover:0, video:"media/cyberhulk-film.mp4", poster:"media/cyberhulk-poster.jpg"},
 {i:2, tag:"AI imagery & manipulation", title:"ETERNO", sub:"Fragrance campaign for Maurizio Canale",
  meta:[["Client","Maurizio Canale"],["Industry","Luxury fragrance"],["Role","AI art direction & retouching"]],
  brief:"Campaign imagery for the ETERNO extrait de parfum with a premium, editorial feel, without a traditional photoshoot.",
  idea:"Warm amber light, deep shadow and tailored menswear: a world of whisky, suits and tattooed hands, built with AI generation and Photoshop compositing, then retouched by hand.",
  deliver:["AI product imagery","Photo manipulation","Campaign visuals","Retouching"],
  pick:[0,1,2,4,5], cover:0}
];
function renderCases(){
  $("#csGrid").innerHTML=CASES.map((c,k)=>{ const p=PROJECTS[c.i];
    return `<button type="button" class="cs-card" data-k="${k}" aria-label="Open the ${esc(c.title)} case study">
      <div class="cs-img"><img src="${c.imgs?c.imgs[c.cover]:p.full[c.cover]}" alt="" loading="lazy" style="object-position:${c.pos||'center'}"></div>
      <div class="cs-meta"><span class="cs-tag">${esc(c.tag)}</span><h3>${esc(c.title)}</h3><p>${esc(c.sub)}</p>
      <span class="cs-go">View case study <svg class="i"><use href="#arr"/></svg></span></div></button>`; }).join("");
  $("#csGrid").querySelectorAll(".cs-card").forEach(b=>b.onclick=()=>openCase(+b.dataset.k));
}
const CS=$("#cs");
function openCase(k){
  const c=CASES[k], p=PROJECTS[c.i], imgs=(c.imgs?c.imgs.concat(p.full):c.pick.map(n=>p.full[n])).filter(Boolean), nx=CASES[(k+1)%CASES.length];
  $("#csBody").innerHTML=`
    <header class="cs-head"><span class="eyebrow">${esc(c.tag)}</span><h2>${esc(c.title)}</h2><p class="cs-sub">${esc(c.sub)}</p></header>
    <img class="cs-hero" src="${imgs[0]}" alt="${esc(c.title)}">
    ${c.video?`<figure class="cs-film"><video src="${c.video}" poster="${c.poster||""}" controls playsinline preload="metadata"></video><figcaption>Product explainer film · motion graphics &amp; UI animation</figcaption></figure>`:""}
    <div class="cs-info">
      <dl>${c.meta.map(([a,b])=>`<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join("")}<div><dt>Deliverables</dt><dd class="chips">${c.deliver.map(d=>`<i>${esc(d)}</i>`).join("")}</dd></div></dl>
      <div class="cs-text"><h4>The brief</h4><p>${esc(c.brief)}</p><h4>The idea</h4><p>${esc(c.idea)}</p></div>
    </div>
    <div class="cs-gallery">${imgs.slice(1).map(src=>`<img src="${src}" alt="${esc(c.title)} application" loading="lazy">`).join("")}</div>
    <footer class="cs-foot">
      ${p.url?`<a class="btn ghost" href="${esc(p.url)}" target="_blank" rel="noopener"><span class="ar"><svg class="i"><use href="#arr-ne"/></svg></span>Full project on Behance</a>`:"<span></span>"}
      <button type="button" class="cs-next" data-k="${(k+1)%CASES.length}">Next case study<b>${esc(nx.title)}</b><span class="ar"><svg class="i"><use href="#arr"/></svg></span></button>
    </footer>`;
  $("#csBody").querySelector(".cs-next").onclick=e=>{ openCase(+e.currentTarget.dataset.k); };
  $("#csBody").scrollTop=0;
  if(!CS.open) CS.showModal();
}
$("#csX").onclick=()=>CS.close();
CS.addEventListener("close",()=>CS.querySelectorAll("video").forEach(v=>v.pause()));
CS.addEventListener("click",e=>{ if(e.target===CS) CS.close(); });

if(SHOWREEL){ const v=$("#reelVid"); v.poster=SHOWREEL_POSTER; v.src=SHOWREEL; $("#reel").hidden=false;
  $("#reelSound").onclick=()=>{ v.muted=!v.muted; if(!v.muted){ v.currentTime=0; v.play(); } $("#reelSound").textContent=v.muted?"Play with sound":"Mute"; }; }

renderFilters(); renderGrid(); renderCases();

/* ═════════════ scroll extras: count-up stats, marquee speeds up with scroll ═════════════ */
(function(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const io=new IntersectionObserver(es=>es.forEach(en=>{
    if(!en.isIntersecting) return; io.unobserve(en.target);
    const el=en.target, m=el.textContent.match(/^([\d.]+)(.*)$/); if(!m) return;
    const end=parseFloat(m[1]), suf=m[2], dec=(m[1].split(".")[1]||"").length, t0=performance.now();
    (function f(now){const p=Math.min(1,(now-t0)/1300), e=1-Math.pow(1-p,4);
      el.textContent=(end*e).toFixed(dec)+suf; if(p<1) requestAnimationFrame(f);})(t0);
  }),{threshold:.6});
  document.querySelectorAll(".stat b").forEach(b=>io.observe(b));
})();
/* ═════════════ scroll motion: calm fade-up, once per element ═════════════ */
(function(){
  if(!("IntersectionObserver" in window)) return;
  const sel="section .eyebrow,.h2,.h3,.lead,.stat,.cs-card,.card,.sv,.sk,.job,.ct,.band h2,.band .who,.more";
  const io=new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } }),{threshold:0.1,rootMargin:"0px 0px -8% 0px"});
  function prep(root){
    root.querySelectorAll(sel).forEach(el=>{
      if(el.classList.contains("fu")||el.closest(".hx")) return;
      const r=el.getBoundingClientRect(); if(r.top<innerHeight) return;      /* already on screen: leave it alone */
      const sib=[...el.parentElement.children].filter(c=>c.matches(sel));
      el.style.setProperty("--d",(Math.min(Math.max(0,sib.indexOf(el))%4,3)*0.08)+"s");
      el.classList.add("fu"); io.observe(el);
    });
  }
  prep(document);
  new MutationObserver(()=>prep(document.getElementById("grid"))).observe(document.getElementById("grid"),{childList:true});
  /* brand marquee: faster while scrolling down, runs backwards while scrolling up.
     giant word band: the two rows slide in opposite directions with the scroll position */
  const mq=document.getElementById("mq"), rows=[...document.querySelectorAll(".slide-row")];
  const still=matchMedia("(prefers-reduced-motion: reduce)").matches;
  let last=scrollY, boost=0, dir=1;
  addEventListener("scroll",()=>{ const d=scrollY-last; if(Math.abs(d)>1) dir=d>0?1:-1; boost=Math.min(4,boost+Math.abs(d)*0.012); last=scrollY; },{passive:true});
  (function t(){
    const a=mq&&mq.getAnimations()[0]; if(a) a.playbackRate=dir*(1+boost); boost*=0.94;
    if(!still) rows.forEach(r=>{ const top=r.parentElement.getBoundingClientRect().top; if(top>innerHeight*1.5||top<-innerHeight) return;
      const sp=parseFloat(r.dataset.speed); r.style.transform="translateX("+((innerHeight-top)*sp-(sp>0?r.scrollWidth*0.3:0)).toFixed(1)+"px)"; });
    requestAnimationFrame(t);
  })();
})();
