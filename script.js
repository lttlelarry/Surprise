/* ====== EDIT THESE ====== */
const PASSWORD = "iloveyou";                 // the key she must type
const HINT = "Hint: Your favorite word ♥";    // shown after a wrong try
const HER_NAME = "Bebu";                // her name or nickname
const START = new Date("2026-02-26T00:00:00"); // the day your relationship started
const LETTER = "My Bebu,\n\nAnother month with you, and my heart is still fluttering like it’s the first day. Thank you for your patience, your laugh, and for choosing me every single day.\n\nYou make ordinary days feel special. I can’t wait for all the months, and years, we still have ahead.\n\nI love you, always.\n\nYours,\nMe ♥";
const REASONS = ["Your smile makes my whole day.","You listen, really listen.","You make me braver.","Your laugh is my favorite sound.","You feel like home.","You care in the smallest, sweetest ways.","You’re beautiful inside and out.","Because you’re simply you."];
const STORY = [["The day we met","I FEEL HAVE A BUTTERFLY IN MY STOMACH."],["Our first date","WE WENT TO THE PLACE WHERE WE ENJOYED AND LAUGHED"],["The moment I knew","YOU ARE THE ONE I NEED IN MY LIFE"],["Today","Another monthsary, another reason to smile."]];
const OPEN = [["…you miss me","Close your eyes, breathe, and hug a pillow. I’m hugging you back from wherever I am. 🤗"],["…you’re sad","You are loved, you are enough, and I am so proud of you. This will pass, and I’m here. 💗"],["…you can’t sleep","Think of us laughing together. Now rest, my love. Sweet dreams. 🌙"],["…you’re happy","Then I’m happy too! Tell me everything, I want to celebrate with you. 🎉"]];
const COUPONS = [["🍫","One chocolate treat"],["🎬","Movie night, your pick"],["🤗","A 10-minute hug"],["🍕","Dinner on me"],["💆","A relaxing massage"],["📸","A photo date"]];
const SECRET = "Surprise! 🎉 I love you more than words can say.<br>Happy monthsary, my love. Now come and give me a kiss. 💋";
const SCRATCH = ["You win one free kiss 💋","You win a night of cuddles 🧸","You win my whole heart (again) 💗","You win breakfast in bed 🥞"];
const WISHES = ["I wish for many more monthsaries with you 💞","I wish we never stop laughing together 😂","I wish to hold your hand on every adventure 🌍","I wish you always feel how much you’re loved 🌹","I wish for lazy Sundays with you ☕","I wish we grow old and still be silly together 👵👵","I wish your dreams all come true ✨","I wish for you, today and always 💍"];
const QUIZ = [   // [question, [options], index of correct answer starting at 0]
  ["Where was our BEST date?",["Cafe","Park","Mall","Home"],3],
  ["What is my favorite thing about you?",["Your smile","Your laugh","Your hugs","All of it"],0],
  ["Who said “I love you” first?",["Me","You","At the same time","We forgot"],0]
];
const QUIZ_PRIZE = "Perfect! 🎉 You know us so well. Your prize: one big kiss, delivered in person. 💋";
const EGG = "You found my secret! 🤫 Click the logo 5 times, remember? Screenshot this and I owe you a surprise date. 💗";
/* ======================== */

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
$("#herName").textContent=HER_NAME;

// petals
for(let i=0;i<22;i++){const p=document.createElement("div");p.className="petal";p.textContent=["🌸","🌹","💗","🤍"][i%4];
p.style.cssText=`left:${Math.random()*100}%;font-size:${14+Math.random()*16}px;animation-duration:${7+Math.random()*9}s;animation-delay:${-Math.random()*12}s`;$("#petals").appendChild(p)}

// gate
function tryUnlock(){
  if($("#pw").value.trim().toLowerCase()===PASSWORD.toLowerCase()){
    $("#gate").classList.add("open");$("#app").classList.add("on");burst(innerWidth/2,innerHeight/2);
    setTimeout(()=>$("#gate").style.display="none",1000);
  }else{const l=$("#lock");l.classList.remove("shake");void l.offsetWidth;l.classList.add("shake");$("#hint").textContent=HINT;$("#pw").value=""}
}
$("#unlock").onclick=tryUnlock;$("#pw").onkeydown=e=>{if(e.key==="Enter")tryUnlock()};

// navigation with curtain transition
let cur="home";
const bindNav=b=>b.onclick=()=>{
  const t=b.dataset.p;if(t===cur)return;
  const c=$("#curtain");c.classList.remove("go");void c.offsetWidth;c.classList.add("go");
  $("#nav").classList.remove("open");
  setTimeout(()=>{$$(".page").forEach(p=>p.classList.remove("show"));$("#"+t).classList.add("show");
    $$("nav button").forEach(x=>x.classList.toggle("act",x===b));cur=t;$("main").scrollTop=0},430);
};
$$("nav button").forEach(bindNav);
$("#burger").onclick=()=>$("#nav").classList.toggle("open");

// counter
function tick(){let d=Math.max(0,Date.now()-START),s=Math.floor(d/1000);
$("#cd").textContent=Math.floor(s/86400);$("#ch").textContent=Math.floor(s/3600)%24;$("#cm").textContent=Math.floor(s/60)%60;$("#cs").textContent=s%60}
tick();setInterval(tick,1000);

// letter typewriter
let typed=false;
$("#env").onclick=()=>{
  $("#env").style.display="none";const p=$("#paper");p.style.display="block";
  if(typed)return;typed=true;let i=0;(function w(){p.textContent=LETTER.slice(0,++i);if(i<LETTER.length)setTimeout(w,38)})();
};

// reasons
REASONS.forEach(r=>{const d=document.createElement("div");d.className="flip";
d.innerHTML=`<div><div class="a">🌹</div><div class="b">${r}</div></div>`;d.onclick=()=>d.classList.toggle("f");$("#rgrid").appendChild(d)});

// story
STORY.forEach(([t,x],i)=>{const d=document.createElement("div");d.className="ev";
d.innerHTML=`<small>Chapter ${i+1}</small><h3>${t}</h3><p>${x}</p>`;$("#tl").appendChild(d)});

// open when
OPEN.forEach(([t,x])=>{const d=document.createElement("div");d.className="coupon";
d.innerHTML=`<div class="ico">✉️</div><h3>Open when ${t.replace("…","")}</h3>`;d.onclick=()=>{$("#mtext").textContent=x;$("#modal").classList.add("on")};$("#ogrid").appendChild(d)});
$("#mclose").onclick=()=>$("#modal").classList.remove("on");

// coupons
COUPONS.forEach(([i,t])=>{const d=document.createElement("div");d.className="coupon";
d.innerHTML=`<div class="ico">${i}</div><h3>${t}</h3>`;
d.onclick=()=>{if(!d.classList.contains("used")){d.classList.add("used");burst(d.getBoundingClientRect().x+60,d.getBoundingClientRect().y+40)}};$("#cgrid").appendChild(d)});

// confetti
function burst(x,y){for(let i=0;i<26;i++){const c=document.createElement("div");c.className="confetti";c.textContent=["💗","🌸","❤️","✨"][i%4];
c.style.cssText=`left:${x}px;top:${y}px;--x:${(Math.random()-.5)*500}px;--y:${(Math.random()-.5)*500}px;font-size:${14+Math.random()*14}px`;
document.body.appendChild(c);setTimeout(()=>c.remove(),2500)}}

// surprise + game
let score=0,timer=null;
$("#gift").onclick=e=>{
  burst(e.clientX,e.clientY);$("#gift").textContent="💝";
  $("#gmsg").textContent="You are my greatest gift. Now catch the hearts below! 💗";
  if(timer)return;
  timer=setInterval(()=>{if(score>=10)return;const h=document.createElement("button");h.className="hrt";h.textContent="💗";
    h.style.left=Math.random()*85+"%";h.style.top="230px";h.style.animationDuration=(3+Math.random()*2)+"s";
    h.onclick=ev=>{score++;$("#sc").textContent=score;h.remove();burst(ev.clientX,ev.clientY);
      if(score>=10){clearInterval(timer);$("#secret").innerHTML=SECRET;$("#secret").style.display="block"}};
    $("#game").appendChild(h);setTimeout(()=>h.remove(),5200)},650);
};

// ===== new surprises =====

// scratch card
const cv=$("#scr"),cx=cv.getContext("2d");let si=0,down=false,won=false;
function cover(){$("#under").textContent=SCRATCH[si++%SCRATCH.length];won=false;
  cx.globalCompositeOperation="source-over";cx.fillStyle="#9b3d4a";cx.fillRect(0,0,300,160);
  cx.fillStyle="#f8d3dc";cx.font="22px Georgia";cx.textAlign="center";cx.fillText("✨ Scratch me ✨",150,88)}
function scratch(e){if(!down||won)return;const r=cv.getBoundingClientRect();
  cx.globalCompositeOperation="destination-out";cx.beginPath();
  cx.arc((e.clientX-r.left)*300/r.width,(e.clientY-r.top)*160/r.height,18,0,7);cx.fill()}
cv.onpointerdown=e=>{down=true;scratch(e)};cv.onpointermove=scratch;
window.addEventListener("pointerup",()=>{if(!down)return;down=false;if(won)return;
  const d=cx.getImageData(0,0,300,160).data;let c=0;for(let i=3;i<d.length;i+=16)if(d[i]===0)c++;
  if(c/(d.length/16)>.45){won=true;cx.clearRect(0,0,300,160);const b=cv.getBoundingClientRect();burst(b.x+b.width/2,b.y+b.height/2)}});
$("#again").onclick=cover;cover();

// love meter
let mv=0,mt=null;
function mStart(){if(mt)return;mt=setInterval(()=>{mv+=2;$("#mfill").style.width=Math.min(mv,100)+"%";
  $("#mmsg").textContent=mv<100?`Love level: ${mv}%`:mv<200?`Love level: ${mv}% … too big for this meter! 💥`:`ERROR: love overflow ♾️💗 It never ends.`;
  if(mv%50===0&&mv>=100)burst(innerWidth/2,innerHeight/2)},60)}
function mStop(){if(!mt)return;clearInterval(mt);mt=null;
  if(mv<100){mv=0;$("#mfill").style.width="0";$("#mmsg").textContent="Don’t let go yet! My love is bigger than that 😆"}}
const mb=$("#mbtn");mb.onpointerdown=mStart;mb.onpointerup=mStop;mb.onpointerleave=mStop;mb.oncontextmenu=e=>e.preventDefault();

// wish on a star
let found=0;$("#stt").textContent=WISHES.length;
WISHES.forEach((w,i)=>{const s=document.createElement("button");s.className="star";s.textContent="⭐";
  s.style.cssText=`left:${6+Math.random()*84}%;top:${6+Math.random()*78}%;animation-delay:${-Math.random()*2}s`;
  s.onclick=e=>{s.classList.add("got");s.textContent="🌟";found++;$("#stc").textContent=found;
    $("#wish").textContent=found===WISHES.length?"You found every star! All my wishes are for you. 🌠💗":w;burst(e.clientX,e.clientY)};
  $("#sky").appendChild(s)});

// love quiz
let qi=0;
function showQ(){const b=$("#qbox");
  if(qi>=QUIZ.length){b.innerHTML=`<h3>${QUIZ_PRIZE}</h3><button class="btn" id="qr">Play again</button>`;
    burst(innerWidth/2,innerHeight/2);$("#qr").onclick=()=>{qi=0;showQ()};return}
  const [q,o,c]=QUIZ[qi];b.innerHTML=`<small>Question ${qi+1} of ${QUIZ.length}</small><h3>${q}</h3>`;
  o.forEach((t,i)=>{const x=document.createElement("button");x.className="btn";x.textContent=t;
    x.onclick=()=>{if(i===c){qi++;showQ()}else{x.textContent="Hmm, try again 😘";x.style.opacity=.5}};b.appendChild(x)})}
showQ();

// secret: click the logo 5 times
let lc=0;$(".logo").onclick=()=>{if(++lc>=5){lc=0;for(let i=0;i<4;i++)setTimeout(()=>burst(Math.random()*innerWidth,Math.random()*innerHeight/2),i*250);
  $("#mtext").textContent=EGG;$("#modal").classList.add("on")}};

// sparkle trail (mouse only)
let lt=0;document.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse"||Date.now()-lt<60)return;lt=Date.now();
  const s=document.createElement("div");s.className="confetti";s.textContent="✨";
  s.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;--x:0px;--y:30px;font-size:14px;animation-duration:1s`;
  document.body.appendChild(s);setTimeout(()=>s.remove(),1100)});

// ===== 10 more surprises =====
/* ====== EDIT THESE (more surprises) ====== */
const GALLERY=[["📷","Our first photo","NEVER TRY BUT SOMEDAY WE WILL SEE EACH OTHER."],["🌸","Favorite date","WHEN WE DATE AT HOME, IT IS SO SPECIAL TO ME"],["🌙","A night I’ll never forget","WHEN THE FIRST CALL HIT US THEN WE BOTH SMILED AND LAUGHED"],["💞","Today","ANOTHER MONTH, ANOTHER REASON TO SMILE."]]; // use "photo1.jpg" instead of an emoji to show a real photo
const SONG=["Our Song","Put the title of your song here 🎶"];
const WHEEL=["Movie night 🎬","Picnic 🧺","Cook together 🍝","Stargazing 🌌","Ice cream 🍦","Photo walk 📸"];
const PREDICT=["I see more kisses in your future 💋","The ball says: we’ll travel the world together 🌍","Many lazy cuddly Sundays ahead ☕","A surprise date is coming soon 🌹","You will be loved every single day 💗","The ball says: she is my forever 💍"];
const CAPSULE=[new Date("2026-11-26T00:00:00"),"Happy next monthsary! 🎉 Every month with you is my favorite chapter. I love you. 💗"];
const WYR=["Would you rather have a beach date or a mountain date? 🏖️⛰️","Would you rather cook together or order food and watch movies? 🍝🎬","Would you rather travel the world or build a cozy home? 🌍🏡","Would you rather get a love letter or a surprise visit? 💌🚪","Would you rather dance in the rain or stargaze all night? 🌧️🌌"];
const BALLOON=["You’re my favorite person 💗","I smile every time I think of you 😊","You are so loved 🌹","Thank you for being you ✨","Forever isn’t long enough 💞","Kiss me when I see you 💋"];
/* ======================================== */

function addPage(id,label,title,sub,html,init){
  const b=document.createElement("button");b.dataset.p=id;b.textContent=label;bindNav(b);$("nav").insertBefore(b,window.NAV_BEFORE||$(".foot"));
  const p=document.createElement("div");p.className="page";p.id=id;
  p.innerHTML=`<h2 class="script">${title}</h2><p class="sub">${sub}</p>${html}`;$("main").appendChild(p);init()}
const card=(id,x="")=>`<div class="paper" id="${id}" style="display:block;text-align:center">${x}</div>`;
const center=h=>`<div style="text-align:center">${h}</div>`;

// 1 gallery
addPage("gallery","📸 Memory Gallery","Our Memories","Tap a photo to see the story",`<div class="grid" id="gal"></div>`,()=>{
  GALLERY.forEach(([s,c,t])=>{const d=document.createElement("div");d.className="pol";
    d.innerHTML=`<div class="ph">${/\.(jpe?g|png|gif|webp)$/i.test(s)?`<img src="${s}" alt="">`:s}</div><p>${c}</p>`;
    d.onclick=()=>{$("#mtext").textContent=t;$("#modal").classList.add("on")};$("#gal").appendChild(d)})});

// 3 date wheel
addPage("wheel","🎡 Date Wheel","Spin the Date Wheel","Spin to pick our next date",
  `<div class="wwrap"><div class="ptr">▼</div><div class="wheel" id="wh"></div></div><div class="msg" id="wres"></div>${center('<button class="btn" id="spin">Spin 🎡</button>')}`,()=>{
  const n=WHEEL.length,a=360/n,cols=["#722f37","#9b3d4a","#c4566b","#5a2430"],w=$("#wh");
  w.style.background=`conic-gradient(${WHEEL.map((_,i)=>`${cols[i%4]} ${i*a}deg ${(i+1)*a}deg`).join(",")})`;
  WHEEL.forEach((t,i)=>{const l=document.createElement("span");l.textContent=t;l.style.transform=`translate(-50%,-50%) rotate(${(i+.5)*a}deg) translateY(-92px)`;w.appendChild(l)});
  let R=0;$("#spin").onclick=()=>{R+=1440+Math.random()*360;w.style.transform=`rotate(${R}deg)`;$("#wres").textContent="";
    setTimeout(()=>{$("#wres").textContent="We’re doing: "+WHEEL[Math.floor(((360-R%360)%360)/a)]+" 💞";burst(innerWidth/2,innerHeight/2)},4100)}});

// 4 crystal ball
addPage("ball","🔮 Crystal Ball","Crystal Ball","Ask the ball about our future",`<button class="gift" id="cb">🔮</button><div class="msg" id="cbm"></div>`,()=>{
  $("#cb").onclick=e=>{$("#cbm").textContent=PREDICT[Math.floor(Math.random()*PREDICT.length)];burst(e.clientX,e.clientY)}});

// 5 memory match
addPage("match","🃏 Memory Match","Memory Match","Find all the matching pairs",`<div class="mg" id="mg"></div><div class="msg" id="mm" style="margin-top:16px"></div>`,()=>{
  const E=["💗","🌹","💌","🍫","🧸","🌙"],c=[...E,...E].sort(()=>Math.random()-.5);let a=null,lock=false,m=0;
  c.forEach(e=>{const b=document.createElement("button");b.className="mc";b.innerHTML=`<span>${e}</span>`;
    b.onclick=()=>{if(lock||b.classList.contains("up"))return;b.classList.add("up");
      if(!a){a=b;return}
      if(a.textContent===b.textContent){a=null;if(++m===E.length){$("#mm").textContent="You matched them all, just like us 💞";burst(innerWidth/2,innerHeight/2)}}
      else{lock=true;const x=a;a=null;setTimeout(()=>{x.classList.remove("up");b.classList.remove("up");lock=false},800)}};
    $("#mg").appendChild(b)})});

// 6 time capsule
addPage("capsule","⏳ Time Capsule","Time Capsule","A message that opens on our next monthsary",card("cap"),()=>{
  const f=()=>{const d=CAPSULE[0]-Date.now();$("#cap").innerHTML=d<=0?CAPSULE[1]:`🔒 Locked<br>Opens in <b>${Math.floor(d/864e5)}d ${Math.floor(d/36e5)%24}h ${Math.floor(d/6e4)%60}m ${Math.floor(d/1e3)%60}s</b>`};f();setInterval(f,1000)});

// 7 kiss counter
addPage("kiss","💋 Kiss Counter","Kiss Counter","Send me a kiss. I’m counting",`<button class="gift" id="kb">💋</button><div class="msg" id="kc"></div>`,()=>{
  let n=0;try{n=+localStorage.kisses||0}catch(e){}
  const u=()=>$("#kc").textContent=`Kisses sent: ${n}`;u();
  $("#kb").onclick=e=>{n++;try{localStorage.kisses=n}catch(x){}u();burst(e.clientX,e.clientY);if(n%10===0)$("#kc").textContent=`${n} kisses! I felt every one 😘`}});

// 8 grow a flower
addPage("grow","🌱 Grow Our Flower","Grow Our Flower","Water it with love and watch it bloom",
  `<div class="gift" style="animation:none;cursor:default" id="fl">🌱</div><div class="msg" id="fm">Tap the button to water it</div>${center('<button class="btn" id="wt">Water 💧</button>')}`,()=>{
  const S=["🌱","🌿","🌷","🌹","💐"];let w=0;
  $("#wt").onclick=()=>{w++;const s=Math.min(Math.floor(w/3),4);$("#fl").textContent=S[s];
    $("#fm").textContent=s<4?`Water: ${w}/12 💧`:"Fully bloomed, like our love 💐";if(w===12)burst(innerWidth/2,innerHeight/2)}});

// 9 would you rather
addPage("wyr","🎲 Would You Rather","Would You Rather","Tap for a new question and answer it out loud",card("wq")+center('<button class="btn" id="wn">Next question 🎲</button>'),()=>{
  const n=()=>$("#wq").textContent=WYR[Math.floor(Math.random()*WYR.length)];n();$("#wn").onclick=n});

// 10 balloon pop
addPage("balloon","🎈 Balloon Pop","Balloon Pop","Pop the balloons to find hidden notes",`<div class="bs" id="bs"></div><div class="msg" id="bm"></div>`,()=>{
  BALLOON.forEach(t=>{const b=document.createElement("button");b.className="bl";b.textContent="🎈";b.style.animationDelay=-Math.random()*3+"s";
    b.onclick=e=>{b.style.visibility="hidden";$("#bm").textContent=t;burst(e.clientX,e.clientY)};$("#bs").appendChild(b)})});

// ===== 10 even more features =====
/* ====== EDIT THESE (even more features) ====== */
const COMPLIMENTS=["You’re the best thing that ever happened to me 💗","Your smile can fix any bad day 😊","You’re smarter than you think 🧠","You’re beautiful in every single way 🌹","You make me want to be a better person ✨","Your hugs are my safe place 🤗"];
const WORDS=["KISS","HEART","FOREVER","CUDDLE","ROMANCE","SWEET","DARLING","LOVE"];
const MOODS=[["😊","Happy","I’m so happy you’re happy! Your smile is my favorite thing 💗"],["😢","Sad","Come here, I’m sending you the biggest virtual hug. You’re not alone 🤗"],["😴","Tired","Rest, my love. You’ve done enough today. Sweet dreams 🌙"],["😤","Annoyed","Take a deep breath. I’m on your side, always 💞"],["🥰","In love","Me too, with you. Always 💋"]];
const BUCKET=["Watch a sunrise together 🌅","Take a trip together ✈️","Cook a full dinner together 🍝","Have a picnic under the stars 🌌","Get matching something 💍","Dance in the rain 🌧️","Write each other a song 🎶"];
const DAILY=["Today, remember: you are loved more than you know 💗","I’m thinking of you right now 💭","Drink water, smile, and know I’m proud of you 💧","You’re my favorite notification 📱","I can’t wait to see you again 🥺","You make ordinary days feel like holidays 🎄","Whatever happens today, I’m on your team 💞"];
/* ============================================= */

const pick=a=>a[Math.floor(Math.random()*a.length)];

// 1 compliment machine
addPage("compli","💝 Compliment Machine","Compliment Machine","Press the button when you need a boost",card("cpm","Press the button 💝")+center('<button class="btn" id="cmb">Give me a compliment 💝</button>'),()=>{
  $("#cmb").onclick=e=>{$("#cpm").textContent=pick(COMPLIMENTS);burst(e.clientX,e.clientY)}});

// 2 tap challenge
addPage("tap","⚡ Tap Challenge","Tap Challenge","How many taps of love in 10 seconds?",`<div class="msg" id="tt">Press start</div>${center('<button class="btn" id="ts">Start ⚡</button> <button class="btn" id="tb" disabled>💗 TAP 💗</button>')}`,()=>{
  let n=0,t=0,run=false;const s=()=>$("#tt").textContent=`Time: ${t}s | Taps: ${n}`;
  $("#ts").onclick=()=>{if(run)return;run=true;n=0;t=10;$("#tb").disabled=false;$("#ts").disabled=true;s();
    const iv=setInterval(()=>{t--;s();if(t<=0){clearInterval(iv);run=false;$("#tb").disabled=true;$("#ts").disabled=false;
      $("#tt").textContent=`${n} taps! ${n>=40?"That’s how fast my heart beats for you 💓":"Cute! Try for 40 to win 💗"}`;if(n>=40)burst(innerWidth/2,innerHeight/2)}},1000)};
  $("#tb").onclick=()=>{if(run){n++;s()}}});

// 3 word scramble
addPage("scramble","🔤 Word Scramble","Word Scramble","Unscramble the love word",card("swd")+center('<input id="sgs" class="inp" style="width:220px" placeholder="Your guess"> <button class="btn" id="sbt">Check</button>')+`<div class="msg" id="smsg"></div>`,()=>{
  let w="";const nx=()=>{w=pick(WORDS);let s=w;while(s===w)s=[...w].sort(()=>Math.random()-.5).join("");$("#swd").textContent=s;$("#sgs").value=""};nx();
  $("#sbt").onclick=()=>{if($("#sgs").value.trim().toUpperCase()===w){$("#smsg").textContent="Correct! 💗 Here’s another one";burst(innerWidth/2,innerHeight/2);nx()}else $("#smsg").textContent="Not yet, try again 😘"}});

// 4 mood check-in
addPage("mood","💭 Mood Check-in","How Are You Feeling?","Tap your mood and I’ll answer",`<div class="bs" id="md"></div><div class="msg" id="mr"></div>`,()=>{
  MOODS.forEach(([e,n,t])=>{const b=document.createElement("button");b.className="bl";b.style.fontSize="50px";b.title=n;b.textContent=e;b.onclick=()=>{$("#mr").textContent=t};$("#md").appendChild(b)})});

// 5 love slots
addPage("slots","🎰 Love Slots","Love Slots","Match 3 to win a prize",`<div class="slots" id="sl"><span>💗</span><span>💗</span><span>💗</span></div><div class="msg" id="sr"></div>${center('<button class="btn" id="pull">Pull 🎰</button>')}`,()=>{
  const S=["💗","🌹","💋","🍫","🧸"];let spin=false;
  $("#pull").onclick=()=>{if(spin)return;spin=true;const r=[...$("#sl").children];let k=0;
    const iv=setInterval(()=>{r.forEach(x=>x.textContent=pick(S));if(++k>10){clearInterval(iv);spin=false;const v=r.map(x=>x.textContent),j=v[0]===v[1]&&v[1]===v[2];
      $("#sr").textContent=j?"JACKPOT! 🎉 You win a kiss and a date!":(v[0]===v[1]||v[1]===v[2]||v[0]===v[2])?"So close! One more try 💞":"Try again, my love 😘";if(j)burst(innerWidth/2,innerHeight/2)}},80)}});

// 6 love notes wall (saved on this device)
addPage("wall","📝 Love Wall","Love Notes Wall","Leave a little note. Tap a note to remove it",`<div style="max-width:420px;margin:auto"><textarea id="ni" class="inp" rows="3" maxlength="200" placeholder="Write a note..."></textarea>${center('<button class="btn" id="nb">Stick it ♥</button>')}</div><div class="grid" id="nw" style="margin-top:20px"></div>`,()=>{
  let N=[];try{N=JSON.parse(localStorage.notes||"[]")}catch(e){}
  const sv=()=>{try{localStorage.notes=JSON.stringify(N)}catch(e){}};
  const r=()=>{$("#nw").innerHTML="";N.forEach((t,i)=>{const d=document.createElement("div");d.className="note";d.textContent=t;d.style.transform=`rotate(${(i%5-2)*2}deg)`;
    d.onclick=()=>{N.splice(i,1);sv();r()};$("#nw").appendChild(d)})};
  $("#nb").onclick=()=>{const v=$("#ni").value.trim();if(!v)return;N.unshift(v.slice(0,200));$("#ni").value="";sv();r()};r()});

// 7 bucket list (saved on this device)
addPage("bucket","✅ Bucket List","Our Bucket List","Things we’ll do together. Tap to check off",`<div id="bk" style="max-width:640px;margin:auto"></div>`,()=>{
  let D=[];try{D=JSON.parse(localStorage.bucket||"[]")}catch(e){}
  BUCKET.forEach((t,i)=>{const d=document.createElement("div");d.className="bi";const u=()=>d.textContent=(D.includes(i)?"✅ ":"⬜ ")+t;u();
    d.onclick=e=>{if(D.includes(i))D.splice(D.indexOf(i),1);else{D.push(i);burst(e.clientX,e.clientY)}try{localStorage.bucket=JSON.stringify(D)}catch(x){}u()};$("#bk").appendChild(d)})});

// 8 drawing pad
addPage("draw","🎨 Draw for Me","Draw a Heart for Me","Draw anything with your finger",`<canvas id="dc" class="dc" width="340" height="260"></canvas>${center('<button class="btn" id="dcl">Clear</button>')}`,()=>{
  const c=$("#dc"),x=c.getContext("2d");let d=false;x.lineWidth=4;x.lineCap="round";
  const p=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*340/r.width,(e.clientY-r.top)*260/r.height]};
  c.onpointerdown=e=>{d=true;x.strokeStyle=pick(["#f8d3dc","#c4566b","#ffd166","#ffffff"]);x.beginPath();x.moveTo(...p(e))};
  c.onpointermove=e=>{if(d){x.lineTo(...p(e));x.stroke()}};window.addEventListener("pointerup",()=>d=false);$("#dcl").onclick=()=>x.clearRect(0,0,340,260)});

// 9 daily message (changes every day)
addPage("daily","🌅 Daily Message","Today’s Message","Come back tomorrow for a new one",card("dm"),()=>{
  $("#dm").textContent=DAILY[Math.floor(Date.now()/864e5)%DAILY.length]});

// 10 breathe with me
addPage("breathe","🫧 Breathe With Me","Breathe With Me","Whenever you feel stressed, breathe with me",`<div class="br"></div><div class="msg" id="bt">Breathe in…</div>`,()=>{
  let i=true;setInterval(()=>{i=!i;$("#bt").textContent=i?"Breathe in…":"Breathe out…"},4000)});

// ===== 17 new features =====
/* ====== EDIT THESE (new features) ====== */
const VOICE_FILE="voice.mp3";   // your recording, same folder
const YOUTUBE_ID=""; // your song from YouTube (the part after youtu.be/). Use "" to turn off
const MUSIC_FILE="song.mp3";            // e.g. "song.mp3" (leave empty to use the built-in soft melody)
const SLIDES=[["📷","Our first photo"],["🌸","A day I loved"],["🌙","A night to remember"],["💞","Us, today"]]; // use "photo1.jpg" instead of emoji
const JAR=["Your smile 😊","The way you laugh 😂","How you care for me 💗","Your kindness 🌷","You believe in me 🌟","You’re my best friend 🤝","Your hugs 🤗","You make me braver 💪","Your voice 🎶","You’re beautiful inside and out 🌹","You understand me 🧠","You’re my comfort 🏡","The way you look at me 👀","You make ordinary days special ✨","You’re patient with me 🕊️","You’re funny 😆","You dream big 🚀","You’re loyal 💍","You’re you 💞","Because I can’t imagine life without you 💗"];
const TRIVIA=[["Where was our first date?",["Cafe","Park","Mall","Home"],0],["What’s my favorite food?",["Pizza","Pasta","Rice","Burger"],1],["Who said “I love you” first?",["Me","You","Both","Forgot"],0],["What’s our monthsary date?",["24th","25th","26th","27th"],2],["What do I call you most?",["Love","Baby","Babe","Dear"],0],["Where do I want to travel with you?",["Beach","Mountains","City","Abroad"],0]]; // [question, options, correct index]
const FUTURE=[["3 months",new Date("2026-12-26T00:00:00"),"Three months already! I love you more every day 💗"],["6 months",new Date("2027-03-26T00:00:00"),"Half a year with you and I’d do it all again 💞"],["1 year",new Date("2027-09-26T00:00:00"),"One whole year. You’re still my favorite person 💍"]];
const PROPOSAL="Will you stay with me, always? 💍";
const CLUES=[["I keep you warm at night and you rest your head on me. What am I?","pillow"],["I’m cold and sweet and we both love me. Look in the freezer. What am I?","ice cream"],["Type the place where we first said “I love you”:","home"]]; // [clue, answer]
const TREASURE_END="You found the treasure! 🎁 Your real surprise is hidden at ___ . Go find it!";
const PUZZLE_IMG="";            // e.g. "us.jpg" (a square photo)
const FORTUNES=["A big kiss is coming your way 💋","You will be hugged tonight 🤗","Someone is thinking of you right now 💭","Your future holds many dates with me 🌹","You are more loved than you know 💗","Good things come to those who love me 😘"];
const LL=["Words of Affirmation 💬","Quality Time ⏳","Physical Touch 🤗","Acts of Service 🛠️","Gifts 🎁"];
const LL_Q=[["After a hard day I want…",[["A kind message",0],["Time together",1],["A big hug",2],["Help with my chores",3],["A little surprise",4]]],["The best date is…",[["Deep talks",0],["Doing things together",1],["Cuddling at home",2],["You plan everything for me",3],["You give me a gift",4]]],["I feel loved when you…",[["Say it out loud",0],["Give me your full attention",1],["Hold my hand",2],["Take care of things for me",3],["Remember small things and buy them",4]]]];
const COUNT_DATE=new Date("2026-11-26T00:00:00"),COUNT_LABEL="Counting down to our next monthsary";
/* ======================================= */

const fw=()=>{bankAdd();for(let i=0;i<6;i++)setTimeout(()=>burst(Math.random()*innerWidth,Math.random()*innerHeight*.7),i*350)};
const navH=t=>{const d=document.createElement("div");d.className="navh";d.textContent=t;$("nav").insertBefore(d,window.NAV_BEFORE||$(".foot"))};
const imgRe=/\.(jpe?g|png|gif|webp)$/i;

// 15 animated intro
(()=>{const d=document.createElement("div");d.id="intro";d.innerHTML=`<p>Hi, my love 💗</p><p>I made something just for you…</p><p>Tap to open</p>`;document.body.appendChild(d);
  const go=()=>{d.style.opacity=0;setTimeout(()=>d.remove(),900)};d.onclick=go;setTimeout(go,8000)})();

// 16 background music: starts by itself when she unlocks and keeps looping until she leaves
(()=>{let started=false,ac,au=null,yt=null,ytReady=false,ytFail=false;const P=[262,294,330,392,440,392,330,294];
  const melody=()=>{ac=ac||new(window.AudioContext||window.webkitAudioContext)();let i=0;
    setInterval(()=>{if(ac.state==="suspended")ac.resume();const o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
      o.type="sine";o.frequency.value=P[i++%P.length];o.connect(g);g.connect(ac.destination);
      g.gain.setValueAtTime(.001,t);g.gain.linearRampToValueAtTime(.08,t+.1);g.gain.exponentialRampToValueAtTime(.001,t+1.4);o.start(t);o.stop(t+1.5)},700)};
  if(YOUTUBE_ID){ // hidden YouTube player that plays your song on a loop
    const h=document.createElement("div");h.style.cssText="position:fixed;left:-9999px;top:0;width:220px;height:220px";h.innerHTML='<div id="ytp"></div>';document.body.appendChild(h);
    window.onYouTubeIframeAPIReady=()=>{yt=new YT.Player("ytp",{width:220,height:220,videoId:YOUTUBE_ID,playerVars:{playsinline:1,controls:0,loop:1,playlist:YOUTUBE_ID,rel:0},
      events:{onReady:()=>{ytReady=true;if(started)yt.playVideo()},onError:()=>{ytFail=true;if(started)melody()}}})};
    const sc=document.createElement("script");sc.src="https://www.youtube.com/iframe_api";document.head.appendChild(sc);
    document.addEventListener("pointerdown",()=>{if(started&&ytReady&&yt.getPlayerState&&[1,3].indexOf(yt.getPlayerState())<0)yt.playVideo()})}
  const start=()=>{if(started)return;started=true;
    if(YOUTUBE_ID){if(ytReady)yt.playVideo();else if(ytFail)melody();return}
    if(MUSIC_FILE){au=Object.assign(new Audio(MUSIC_FILE),{loop:true,volume:.6});
      au.play().catch(()=>{started=false;document.addEventListener("pointerdown",start,{once:true})});return}
    melody()};
  new MutationObserver(()=>{if($("#app").classList.contains("on"))start()}).observe($("#app"),{attributes:true});
  document.addEventListener("visibilitychange",()=>{if(document.hidden||!started)return;
    if(yt&&ytReady){if([1,3].indexOf(yt.getPlayerState())<0)yt.playVideo()}else if(au){if(au.paused)au.play().catch(()=>{})}else if(ac)ac.resume()})})();

navH("💞 More Romantic");

// 3 reasons jar
addPage("jar","🫙 Reasons Jar","Reasons Jar","Pull a reason out of the jar",`<button class="gift" id="jb">🫙</button><div class="msg" id="jm"></div>`,()=>{
  $("#jb").onclick=e=>{const i=Math.floor(Math.random()*JAR.length);$("#jm").textContent=`#${i+1} of ${JAR.length}: ${JAR[i]}`;burst(e.clientX,e.clientY)}});

// 4 proposal-style question
addPage("ask","💍 One Last Question","One Last Question","Pick carefully 😏",`<div class="msg" style="font-size:26px">${PROPOSAL}</div><div class="ask" id="ak"><button class="btn" id="yes">Yes 💗</button><button class="btn" id="no">No</button></div><div class="msg" id="ay"></div>`,()=>{
  const no=$("#no"),ak=$("#ak");const run=e=>{if(e)e.preventDefault();no.style.right="auto";no.style.left=Math.random()*(ak.clientWidth-70)+"px";no.style.top=Math.random()*(ak.clientHeight-44)+"px"};
  no.onpointerenter=run;no.onpointerdown=run;
  $("#yes").onclick=()=>{ak.style.display="none";$("#ay").textContent="Best answer ever! 🎉 I love you so much! 💗";fw()}});

// 5 future letters
addPage("future","💌 Future Letters","Letters From Me","Each letter unlocks on a milestone",`<div id="fl2"></div>`,()=>{
  const r=()=>{$("#fl2").innerHTML="";FUTURE.forEach(([l,d,m])=>{const x=document.createElement("div");x.className="paper";x.style.display="block";const left=d-Date.now();
    x.innerHTML=left<=0?`<b>${l}</b><br>${m}`:`🔒 <b>${l}</b><br>Unlocks in ${Math.ceil(left/864e5)} days`;$("#fl2").appendChild(x)})};r();setInterval(r,60000)});

navH("🎮 More Games");

// 7 heart catcher
addPage("catch","🧺 Heart Catcher","Heart Catcher","Move the basket. Catch 💗, avoid 💔",`<canvas id="hc" class="dc" width="320" height="420"></canvas><div class="msg" id="hs">Score: 0</div>${center('<button class="btn" id="hg">Start</button>')}`,()=>{
  const c=$("#hc"),x=c.getContext("2d");let H=[],bx=160,sc=0,run=false,t0=0;x.font="30px serif";x.textAlign="center";
  const mvb=e=>{const r=c.getBoundingClientRect();bx=(e.clientX-r.left)*320/r.width};c.onpointermove=mvb;c.onpointerdown=mvb;
  const loop=ts=>{if(!run)return;x.clearRect(0,0,320,420);if(Math.random()<.05)H.push({x:20+Math.random()*280,y:-20,b:Math.random()<.25});
    H.forEach(h=>{h.y+=3.2;x.fillText(h.b?"💔":"💗",h.x,h.y)});
    H=H.filter(h=>{if(h.y>370&&h.y<410&&Math.abs(h.x-bx)<36){sc+=h.b?-3:1;$("#hs").textContent="Score: "+sc;return false}return h.y<430});
    x.fillText("🧺",bx,405);
    if(ts-t0>30000){run=false;$("#hs").textContent=`Final score: ${sc} ${sc>=20?"🎉 You win a kiss!":"Try again for 20 💗"}`;if(sc>=20)fw();$("#hg").disabled=false;return}
    requestAnimationFrame(loop)};
  $("#hg").onclick=()=>{H=[];sc=0;run=true;$("#hg").disabled=true;t0=performance.now();$("#hs").textContent="Score: 0";requestAnimationFrame(loop)}});

// 8 sliding puzzle
addPage("puzzle","🧩 Sliding Puzzle","Sliding Puzzle","Slide the tiles into order",`<div class="pz" id="pz"></div><div class="msg" id="pm"></div>${center('<button class="btn" id="ps">Shuffle</button>')}`,()=>{
  const S=[1,2,3,4,5,6,7,8,0],g=$("#pz");let T;
  const draw=()=>{g.innerHTML="";T.forEach((v,i)=>{const b=document.createElement("button");b.className="pt";
    if(v){b.textContent=v;if(PUZZLE_IMG){b.style.backgroundImage=`url(${PUZZLE_IMG})`;b.style.backgroundSize="300% 300%";b.style.backgroundPosition=`${((v-1)%3)*50}% ${Math.floor((v-1)/3)*50}%`;b.style.color="transparent"}}else b.style.visibility="hidden";
    b.onclick=()=>{const z=T.indexOf(0);if(Math.abs(Math.floor(i/3)-Math.floor(z/3))+Math.abs(i%3-z%3)===1){[T[i],T[z]]=[T[z],T[i]];draw();if(T.join()===S.join()){$("#pm").textContent="Solved! 💗 Just like how we fit together";fw()}}};g.appendChild(b)})};
  const sh=()=>{T=[...S];let z=8;for(let k=0;k<120;k++){const n=[],r=Math.floor(z/3),c=z%3;if(r>0)n.push(z-3);if(r<2)n.push(z+3);if(c>0)n.push(z-1);if(c<2)n.push(z+1);const m=pick(n);[T[z],T[m]]=[T[m],T[z]];z=m}$("#pm").textContent="";draw()};
  $("#ps").onclick=sh;sh()});

// 9 rock paper scissors
addPage("rps","✊ Rock Paper Scissors","Rock Paper Scissors","Beat me and I owe you a coupon. Lose and you owe me a kiss 😏",`<div class="bs" id="rb"></div><div class="msg" id="rr"></div>`,()=>{
  const E=["✊","✋","✌️"];E.forEach((e,i)=>{const b=document.createElement("button");b.className="bl";b.style.animation="none";b.textContent=e;
    b.onclick=()=>{const c=Math.floor(Math.random()*3),r=(i-c+3)%3;$("#rr").textContent=`You ${e} vs me ${E[c]}: `+(r===0?"Tie! Again 💞":r===1?"You win! I owe you a coupon 🎟️":"I win! You owe me a kiss 😘");if(r===1)fw()};$("#rb").appendChild(b)})});

// 10 treasure hunt
addPage("hunt","🗺️ Treasure Hunt","Treasure Hunt","Solve every clue to find the real treasure",card("th")+`<div style="max-width:380px;margin:12px auto">${center('<input id="ta" class="inp" placeholder="Your answer"><button class="btn" id="tbn">Check</button>')}</div><div class="msg" id="tm"></div>`,()=>{
  let i=0;const sh=()=>{$("#th").textContent=i<CLUES.length?`Clue ${i+1}/${CLUES.length}: ${CLUES[i][0]}`:TREASURE_END;if(i>=CLUES.length)fw()};sh();
  $("#tbn").onclick=()=>{if(i>=CLUES.length)return;if($("#ta").value.trim().toLowerCase()===CLUES[i][1].toLowerCase()){i++;$("#ta").value="";$("#tm").textContent="Correct! 💗";sh()}else $("#tm").textContent="Not quite, try again 😘"}});

navH("✨ More Interactive");

// 11 fortune cookie
addPage("cookie","🥠 Fortune Cookie","Fortune Cookie","Tap the cookie to crack it",`<button class="gift" id="ck">🥠</button><div class="msg" id="cf"></div>`,()=>{
  $("#ck").onclick=e=>{$("#cf").textContent=pick(FORTUNES);burst(e.clientX,e.clientY)}});

// 12 love language quiz
addPage("ll","💞 Love Language","Love Language Quiz","Find out how you feel loved most",card("lq"),()=>{
  let i=0,s=[0,0,0,0,0];const r=()=>{const b=$("#lq");
    if(i>=LL_Q.length){const m=s.indexOf(Math.max(...s));b.innerHTML=`<h3>${LL[m]}</h3><p>That’s how you feel loved most. I’ll keep showing you, every day 💗</p><button class="btn" id="lr">Again</button>`;$("#lr").onclick=()=>{i=0;s=[0,0,0,0,0];r()};fw();return}
    b.innerHTML=`<h3>${LL_Q[i][0]}</h3>`;LL_Q[i][1].forEach(([t,k])=>{const x=document.createElement("button");x.className="btn";x.style.cssText="display:block;width:100%;margin:8px 0";x.textContent=t;x.onclick=()=>{s[k]++;i++;r()};b.appendChild(x)})};r()});

// 13 mini photo booth
addPage("booth","📷 Photo Booth","Mini Photo Booth","Pick a photo, tap it to add stickers, then save",`<div style="max-width:360px;margin:auto"><input type="file" id="bf" accept="image/*" class="inp"></div><canvas id="bc" class="dc" width="340" height="340"></canvas>${center('<button class="btn" id="bst">Frame on/off 💗</button> <button class="btn" id="bd">Save</button>')}`,()=>{
  const c=$("#bc"),x=c.getContext("2d");let im=null,S=[],fr=true;x.textAlign="center";
  const dr=()=>{x.fillStyle="#170a0e";x.fillRect(0,0,340,340);
    if(im){const k=Math.max(340/im.width,340/im.height);x.drawImage(im,(340-im.width*k)/2,(340-im.height*k)/2,im.width*k,im.height*k)}else{x.fillStyle="#f8d3dc";x.font="18px Georgia";x.fillText("Choose a photo above",170,170)}
    if(fr){x.strokeStyle="#c4566b";x.lineWidth=14;x.strokeRect(7,7,326,326)}x.font="34px serif";S.forEach(s=>x.fillText(s[2],s[0],s[1]))};
  $("#bf").onchange=e=>{const f=e.target.files[0];if(!f)return;const i=new Image();i.onload=()=>{im=i;S=[];dr()};i.src=URL.createObjectURL(f)};
  c.onclick=e=>{const r=c.getBoundingClientRect();S.push([(e.clientX-r.left)*340/r.width,(e.clientY-r.top)*340/r.height,pick(["💗","🌹","✨","💋","🌸"])]);dr()};
  $("#bst").onclick=()=>{fr=!fr;dr()};
  $("#bd").onclick=()=>{c.toBlob(b=>{const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="us.png";a.click()})};dr()});

// 14 love forecast
addPage("wx","🌦️ Love Forecast","Forecast of My Heart","Your 5-day forecast",`<div class="grid" id="wxg"></div>`,()=>{
  const F=[["☀️","100% chance of kisses"],["🌈","Cuddles with a chance of laughter"],["⛅","Mostly sweet, partly missing you"],["🌹","Heavy love showers"],["🌙","Clear skies, dreamy nights"],["💞","Hugs expected all day"]];
  for(let d=0;d<5;d++){const t=new Date(Date.now()+d*864e5),[e,m]=F[Math.floor(t/864e5)%F.length],x=document.createElement("div");x.className="coupon";x.style.cursor="default";
    x.innerHTML=`<div class="ico">${e}</div><h3>${d?t.toLocaleDateString(undefined,{weekday:"long"}):"Today"}</h3><p>${m}</p>`;$("#wxg").appendChild(x)}});

// 18 countdown
addPage("count","🎆 Countdown","Countdown",COUNT_LABEL,`<div class="counter" style="max-width:560px;margin:30px auto"><div><b id="kd">0</b><span>DAYS</span></div><div><b id="kh">0</b><span>HOURS</span></div><div><b id="km">0</b><span>MINUTES</span></div><div><b id="ks">0</b><span>SECONDS</span></div></div><div class="msg" id="kmsg"></div>`,()=>{
  let fired=false;const f=()=>{const d=Math.max(0,COUNT_DATE-Date.now()),s=Math.floor(d/1e3);
    $("#kd").textContent=Math.floor(s/86400);$("#kh").textContent=Math.floor(s/3600)%24;$("#km").textContent=Math.floor(s/60)%60;$("#ks").textContent=s%60;
    if(d===0){$("#kmsg").textContent="It’s here! 🎉";if(!fired&&$("#count").classList.contains("show")){fired=true;fw()}}};f();setInterval(f,1000)});

// ===== Final Message (with surprises) =====
/* ====== EDIT THESE (final message) ====== */
const FINAL_MSG="My love,\n\nThank you for every laugh, every hug, and every day with you. You are my home, my best friend, and my favorite person. I promise to keep choosing you, today and always.\n\nI love you, always. 💗";
const FINAL_GIFTS=[["🎁","A promise","I promise to always listen, to always try, and to never stop making you smile."],["💍","A dream","One day, I want to wake up next to you every single morning, in our own little home."],["🌹","A wish","Whatever comes next, I hope it’s us, together. Always."]]; // [emoji, title, text]
const FINAL_END="I love you, always 💗";
/* ========================================= */

navH("💗 The End");
addPage("final","💗 Final Message","My Final Message","Open it slowly. There are surprises inside",`<div class="env" id="fenv">💌</div><div class="paper" id="fp"></div><div class="grid" id="fg" style="display:none;margin-top:20px"></div><div id="fl3" style="text-align:center;margin-top:24px"></div>`,()=>{
  let opened=0;
  const rain=()=>{const o=document.createElement("div");
    o.style.cssText="position:fixed;inset:0;z-index:60;pointer-events:none;overflow:hidden;background:#170a0ecc;display:flex;align-items:center;justify-content:center;transition:opacity 1s";
    for(let i=0;i<70;i++){const p=document.createElement("div");p.className="petal";p.textContent=pick(["💗","🌹","💖","🌸","✨"]);
      p.style.cssText=`left:${Math.random()*100}%;font-size:${18+Math.random()*26}px;animation-duration:${4+Math.random()*5}s;animation-delay:${-Math.random()*6}s;opacity:.95`;o.appendChild(p)}
    const t=document.createElement("div");t.className="script";t.style.cssText="position:relative;font-size:clamp(40px,10vw,90px);color:#f8d3dc;text-align:center;padding:20px;animation:in .8s both";t.textContent=FINAL_END;o.appendChild(t);
    document.body.appendChild(o);fw();const fi=setInterval(fw,2500);
    setTimeout(()=>{clearInterval(fi);o.style.opacity=0;setTimeout(()=>o.remove(),1000)},10000)};
  const last=()=>{const b=document.createElement("button");b.className="btn";b.textContent="One last surprise 💗";b.onclick=()=>{b.remove();rain()};$("#fl3").appendChild(b)};
  const gifts=()=>{const g=$("#fg");g.style.display="grid";
    FINAL_GIFTS.forEach(([e,t,x])=>{const d=document.createElement("div");d.className="coupon";d.innerHTML=`<div class="ico">${e}</div><h3>Open me</h3>`;
      d.onclick=ev=>{if(d.dataset.o)return;d.dataset.o=1;d.innerHTML=`<div class="ico">${e}</div><h3>${t}</h3><p>${x}</p>`;burst(ev.clientX,ev.clientY);if(++opened===FINAL_GIFTS.length)last()};g.appendChild(d)})};
  $("#fenv").onclick=()=>{$("#fenv").style.display="none";const p=$("#fp");p.style.display="block";burst(innerWidth/2,innerHeight/3);
    let i=0;(function w(){p.textContent=FINAL_MSG.slice(0,++i);if(i<FINAL_MSG.length)setTimeout(w,40);else gifts()})()}});

// ===== 15 big surprises =====
/* ====== EDIT THESE (big surprises) ====== */
const UNLOCK_AT=null;           // e.g. new Date("2026-11-26T00:00:00") keeps the site locked until then. null = no lock
const CANDLE_MSG="Your wish will come true, because I’ll make it happen 💗";
const SHAKE_MSG="That’s how you shake my world 💗";
const BEAT_MSG="This is how my heart beats when I’m with you 💓";
const QR_CLUES=["Clue 1: Look under our favorite chair 🪑","Clue 2: Check where we keep the snacks 🍫","Final clue: Open the gift waiting on your bed 🎁"]; // QR links: yoursite/#clue1, #clue2, #clue3
const ADVENT_START=new Date("2026-11-01T00:00:00");
const ADVENT=["You’re my favorite person 💗","Send me a selfie right now 📸","Today’s coupon: one forehead kiss 😘","I’m proud of you 🌟","Think of our best memory and smile 😊","You make me laugh like nobody else 😂","Coupon: you choose dinner 🍕","Thank you for being patient with me 🥹","I can’t wait for our next date 🌹","You’re stronger than you know 💪"]; // repeats if fewer than 30
const STREAK_GIFTS=[[2,"A virtual hug 🤗"],[3,"A sweet compliment: you’re stunning 🌹"],[5,"Coupon: one free kiss 💋"],[7,"A surprise message waiting for you 💌"]];
const PLACES=[["Where we met",30,35,"Write your story here."],["Our first date",62,28,"Write what happened here."],["Our favorite place",45,68,"Why it’s special."],["Next adventure",78,72,"Where we’ll go together."]]; // [name, x% , y% , story]
const CERT_TEXT=["is officially loved beyond measure,","kissed daily and hugged endlessly","by the luckiest person alive."];
const MAD=[["a favorite food","a place we love","a silly nickname","a color"],"Roses are {3},\nI love {0} too,\nbut in {1}, my {2},\nthe best thing is you. 💗"];
const PLAYLIST=[["Our first song","Artist name",""],["Song that reminds me of you","Artist name",""],["Song for road trips","Artist name",""]]; // [title, artist, link (optional)]
const STARDATES=[["Our first chat","Add the date"],["Our first date","Add the date"],["Our first “I love you”","Add the date"],["Our first monthsary","Oct 26, 2026"],["A day I’ll never forget","Add the date"],["Our first trip","Add the date"],["Today","Always us"],["Our future","To be continued"]];
const BANK=[[30,"A long hug 🤗"],[60,"Movie night, your pick 🎬"],[100,"Dinner on me 🍕"],[200,"A surprise date 🌹"]];
const BOSS_Q=[["What’s my nickname for you?",["Love","Babe","Baby","Dear"],0],["Which month did we start?",["August","September","October","November"],1],["Who is more romantic?",["Me","You","Both","Neither"],2]];
const BOSS_RIDDLE="I’m the thing you give me every day without noticing. What am I? (hint: 4 letters)";
const BOSS_ANSWER="love";
const BOSS_PRIZE="Grand prize: a full day of dates, planned by me. 💗";
/* ======================================== */

window.NAV_BEFORE=[...$$(".navh")].find(d=>d.textContent.includes("The End"));

// love bank helpers (points are earned automatically when she wins a game)
let lastAward=0;
function toast(t){const d=document.createElement("div");d.className="toast";d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),1800)}
function bankAdd(){if(Date.now()-lastAward<4000)return;lastAward=Date.now();let p=0;try{p=+localStorage.pts||0}catch(e){}p+=10;try{localStorage.pts=p}catch(e){}toast("+10 love points 💗");if(window.bankRender)window.bankRender()}

// 3 landing page: she says "I love you" out loud 3 times and the site answers "I love you more"
(()=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition,mic=$("#mic"),rep=$("#reply"),hint=$("#hint"),hearts=[...$$("#ring span")];
  const PROMPTS=["Aww 🥹 Now say it LOUDER 📣","LOUDER! Like you really mean it 😤💗"];
  const REPLIES=["I love you more 💗","I LOVE YOU MORE!! 💖","I LOVE YOU MOOOORE!!! 💞"];
  let n=0,on=false,speaking=false,tap=!SR;
  const speak=t=>{speaking=true;let ended=false;
    const fin=()=>{if(ended)return;ended=true;speaking=false;if(n<3&&!tap&&on)listen()};
    try{const u=new SpeechSynthesisUtterance(t);u.pitch=1.5;u.rate=.95;u.onend=fin;u.onerror=fin;speechSynthesis.cancel();speechSynthesis.speak(u);setTimeout(fin,3500)}catch(e){fin()}};
  const got=()=>{if(n>=3)return;n++;hearts[n-1].textContent="💗";
    rep.textContent=REPLIES[n-1];rep.style.fontSize=(22+n*10)+"px";rep.classList.remove("pop");void rep.offsetWidth;rep.classList.add("pop");
    burst(innerWidth/2,innerHeight/2);const l=$("#lock");l.classList.remove("shake");void l.offsetWidth;l.classList.add("shake");
    if(n>=3){hint.textContent="Okay okay, you win 😘 Opening…";speak("I love you more, my love");setTimeout(()=>{$("#pw").value=PASSWORD;tryUnlock()},2400)}
    else{hint.textContent=PROMPTS[n-1];speak("I love you more")}};
  const listen=()=>{if(!SR||speaking||n>=3)return;const r=new SR();r.lang="en-US";r.interimResults=false;r.maxAlternatives=3;mic.classList.add("listening");
    r.onresult=e=>{const t=[...e.results[0]].map(a=>a.transcript.toLowerCase()).join(" ");
      if(/love (you|u)/.test(t)){r.onend=null;mic.classList.remove("listening");got()}else hint.textContent=`I heard “${t.trim()}” 🙈 Say “I love you”!`};
    r.onerror=e=>{if(e.error==="not-allowed"||e.error==="service-not-allowed"){on=false;tap=true;mic.classList.remove("listening");mic.textContent="💗 I said it out loud";hint.textContent="The mic is blocked, so say it out loud, then tap the button 💗"}};
    r.onend=()=>{mic.classList.remove("listening");if(on&&!speaking&&n<3&&!tap)setTimeout(listen,300)};
    try{r.start()}catch(e){}};
  mic.onclick=()=>{if(tap){got();return}on=true;hint.textContent="Listening… say “I love you” 🎤";listen()};
  if(tap){mic.textContent="💗 I said it out loud";hint.textContent="Say it out loud, then tap the button 💗"}})();

// 1 midnight unlock (optional)
(()=>{if(!UNLOCK_AT||UNLOCK_AT<=Date.now())return;
  const els=[$("#say"),$("#ring"),$("#reply"),$("#mic"),$("#lock details")],h=$("#lock h1"),p=$("#lock p"),h0=h.textContent,p0=p.innerHTML;
  els.forEach(e=>{e.style.display="none"});h.textContent="Not yet, my love…";
  const f=()=>{const d=UNLOCK_AT-Date.now();
    if(d<=0){clearInterval(iv);els.forEach(e=>{e.style.display=""});h.textContent=h0;p.innerHTML=p0;fw();return}
    p.innerHTML=`Your surprise opens in<br><b style="font-size:22px">${Math.floor(d/864e5)}d ${Math.floor(d/36e5)%24}h ${Math.floor(d/6e4)%60}m ${Math.floor(d/1e3)%60}s</b>`};
  const iv=setInterval(f,1000);f()})();

// 6 QR clue page (hidden from the menu). QR codes open yoursite/#clue1, #clue2, ...
(()=>{const pg=document.createElement("div");pg.className="page";pg.id="clue";
  pg.innerHTML=`<h2 class="script">A Clue For You</h2><p class="sub">You found a hidden QR code 💗</p><div class="paper" id="cl" style="display:block;text-align:center"></div>`;$("main").appendChild(pg);
  const go=()=>{const m=location.hash.match(/^#clue(\d+)$/);if(!m||!$("#app").classList.contains("on"))return;const c=QR_CLUES[+m[1]-1];if(!c)return;
    $("#cl").textContent=c;$$(".page").forEach(p=>p.classList.remove("show"));pg.classList.add("show");cur="clue";$$("nav button").forEach(x=>x.classList.remove("act"));fw()};
  new MutationObserver(go).observe($("#app"),{attributes:true});addEventListener("hashchange",go)})();

navH("🌟 Big Moments");

// 2 blow out the candle
addPage("candle","🕯️ Blow the Candle","Make a Wish","Tap Start, allow the microphone, then blow on your phone",`<div class="cake"><div id="fm2">🔥</div><div style="font-size:90px">🎂</div></div><div class="msg" id="cdm"></div>${center('<button class="btn" id="cds">Start 🎤</button> <button class="btn" id="cdt">Or tap to blow</button>')}`,()=>{
  let out=false;const done=()=>{if(out)return;out=true;$("#fm2").textContent="💨";$("#cdm").textContent=CANDLE_MSG;fw()};
  $("#cdt").onclick=done;
  $("#cds").onclick=async()=>{try{const st=await navigator.mediaDevices.getUserMedia({audio:true}),ac=new(window.AudioContext||window.webkitAudioContext)(),an=ac.createAnalyser();
    ac.createMediaStreamSource(st).connect(an);an.fftSize=256;const d=new Uint8Array(an.frequencyBinCount);$("#cdm").textContent="Make a wish and blow… 🌬️";
    const t=()=>{if(out){st.getTracks().forEach(x=>x.stop());return}an.getByteFrequencyData(d);if(d.reduce((a,b)=>a+b,0)/d.length>55)done();requestAnimationFrame(t)};t()}
    catch(e){$("#cdm").textContent="The microphone is blocked, so tap “Or tap to blow” 💨"}}});

// 4 shake for hearts
addPage("shake","📳 Shake for Hearts","Shake Your Phone","Tap Start, then shake it!",`<div class="msg" id="shm">Shakes: 0/5</div>${center('<button class="btn" id="shs">Start 📳</button> <button class="btn" id="sht">Or tap here</button>')}`,()=>{
  let n=0,lt=0;const hit=()=>{if(n>=5)return;n++;$("#shm").textContent=n<5?`Shakes: ${n}/5`:SHAKE_MSG;for(let i=0;i<3;i++)burst(Math.random()*innerWidth,Math.random()*innerHeight*.6);if(n>=5)fw()};
  $("#sht").onclick=hit;
  $("#shs").onclick=async()=>{try{if(window.DeviceMotionEvent&&DeviceMotionEvent.requestPermission){if(await DeviceMotionEvent.requestPermission()!=="granted")throw 0}
    addEventListener("devicemotion",e=>{const a=e.accelerationIncludingGravity;if(!a)return;if(Math.hypot(a.x||0,a.y||0,a.z||0)>22&&Date.now()-lt>600){lt=Date.now();hit()}});$("#shm").textContent="Now shake! 📳 (0/5)"}
    catch(x){$("#shm").textContent="Shake isn’t available here, tap the other button 💗"}}});

// 5 heartbeat
addPage("beat","❤️ Heartbeat","Feel My Heartbeat","Press and hold the heart",`<button class="gift" id="hb" style="animation:none;user-select:none;touch-action:none">❤️</button><div class="msg" id="hm"></div>`,()=>{
  let iv=null;const hb=$("#hb");
  const p=()=>{if(navigator.vibrate)navigator.vibrate([90,70,90]);hb.style.transform="scale(1.25)";setTimeout(()=>{hb.style.transform=""},180)};
  const st=()=>{if(iv)return;p();iv=setInterval(p,850);$("#hm").textContent=BEAT_MSG};
  const sp=()=>{clearInterval(iv);iv=null;if(navigator.vibrate)navigator.vibrate(0)};
  hb.onpointerdown=st;hb.onpointerup=sp;hb.onpointerleave=sp;hb.oncontextmenu=e=>e.preventDefault()});

navH("🎯 Real-Life");

// 7 love calendar (one door per day)
addPage("advent","📅 Love Calendar","30 Days of Love","A new door opens every day",`<div class="adv" id="adv"></div>`,()=>{
  for(let i=0;i<30;i++){const d=new Date(ADVENT_START.getTime()+i*864e5),open=d<=Date.now(),b=document.createElement("button");b.className="mc"+(open?"":" lk");b.textContent=open?i+1:"🔒";
    b.onclick=e=>{$("#mtext").textContent=open?ADVENT[i%ADVENT.length]:`Door ${i+1} opens on ${d.toLocaleDateString()} 💗`;$("#modal").classList.add("on");if(open)burst(e.clientX,e.clientY)};$("#adv").appendChild(b)}});

// 8 visit streak
addPage("streak","🔥 Love Streak","Visit Streak","Come back every day to unlock gifts",`<div class="msg" id="stm"></div><div id="stg" style="max-width:520px;margin:auto"></div>`,()=>{
  let n=0,last=0;try{n=+localStorage.stk||0;last=+localStorage.stl||0}catch(e){}
  const day=Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5);
  const render=()=>{$("#stm").textContent=`🔥 ${n}-day streak`;$("#stg").innerHTML="";STREAK_GIFTS.forEach(([k,t])=>{const d=document.createElement("div");d.className="bi";d.style.cursor="default";d.textContent=n>=k?`✅ Day ${k}: ${t}`:`🔒 Day ${k}: keep your streak going!`;$("#stg").appendChild(d)})};
  let done=false;new MutationObserver(()=>{if(done||!$("#app").classList.contains("on"))return;done=true;
    if(last!==day){n=last===day-1?n+1:1;last=day;try{localStorage.stk=n;localStorage.stl=day}catch(e){}}render()}).observe($("#app"),{attributes:true});render()});

navH("🎨 Creative");

// 10 love certificate
addPage("cert","📜 Love Certificate","Certificate of Love","Type her name, then save it",`<div style="max-width:360px;margin:auto"><input id="cn" class="inp" placeholder="Her name"></div><canvas id="cc" class="dc" width="600" height="420"></canvas>${center('<button class="btn" id="cdl">Save image</button>')}`,()=>{
  const c=$("#cc"),x=c.getContext("2d"),F="'Brush Script MT','Segoe Script',cursive";
  const dr=()=>{x.fillStyle="#fdeef2";x.fillRect(0,0,600,420);x.strokeStyle="#722f37";x.lineWidth=8;x.strokeRect(14,14,572,392);x.lineWidth=2;x.strokeRect(28,28,544,364);
    x.textAlign="center";x.fillStyle="#722f37";x.font="30px serif";x.fillText("💗",300,72);x.font="46px "+F;x.fillText("Certificate of Love",300,122);
    x.font="18px Georgia";x.fillText("This certifies that",300,162);x.font="48px "+F;x.fillText($("#cn").value||HER_NAME,300,226);
    x.font="18px Georgia";CERT_TEXT.forEach((l,i)=>x.fillText(l,300,268+i*26));x.fillText("Signed with love, "+new Date().toLocaleDateString(),300,372)};
  $("#cn").oninput=dr;dr();
  $("#cdl").onclick=()=>c.toBlob(b=>{const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="certificate-of-love.png";a.click()})});

// 11 mad libs love poem
addPage("mad","📝 Love Poem","Mad Libs Love Poem","Fill in the blanks to make our poem",`<div style="max-width:380px;margin:auto" id="mdf"></div>${center('<button class="btn" id="mdb">Make my poem 💗</button>')}<div class="paper" id="mdp" style="margin-top:16px;text-align:center"></div>`,()=>{
  MAD[0].forEach(l=>{const e=document.createElement("input");e.className="inp";e.placeholder=l;e.maxLength=30;$("#mdf").appendChild(e)});
  $("#mdb").onclick=()=>{const v=[...$("#mdf").children].map(e=>e.value.trim()||"something");$("#mdp").style.display="block";$("#mdp").textContent=MAD[1].replace(/\{(\d)\}/g,(m,i)=>v[+i]);fw()}});

navH("🏆 Rewards");

// 14 love bank
addPage("bank","🏦 Love Bank","Love Bank","Win games to earn points, then spend them here",`<div class="msg" id="bkp"></div><div id="bkl" style="max-width:520px;margin:auto"></div>`,()=>{
  const get=()=>{let p=0;try{p=+localStorage.pts||0}catch(e){}return p};
  window.bankRender=()=>{const p=get();$("#bkp").textContent=`💗 ${p} points`;$("#bkl").innerHTML="";
    BANK.forEach(([c,t])=>{const d=document.createElement("div");d.className="bi";d.textContent=`${t}, ${c} pts`;if(p<c)d.style.opacity=.5;
      d.onclick=ev=>{const q=get();if(q<c){$("#mtext").textContent=`You need ${c-q} more points 💞 Play a few games!`;$("#modal").classList.add("on");return}
        try{localStorage.pts=q-c}catch(e){}$("#mtext").textContent=`Redeemed: ${t} 🎉 Show this to me!`;$("#modal").classList.add("on");burst(ev.clientX,ev.clientY);window.bankRender()};$("#bkl").appendChild(d)})};
  window.bankRender()});


// ===== cute surprises: kitty, walking cat, lanterns, bottle, sweet pop-ups =====
/* ====== EDIT THESE (cute surprises) ====== */
const POPUPS=["Psst… I love you 💗","Drink some water, my love 💧","You’re doing great today 🌟","Thinking of you right now 💭","Sending you a virtual hug 🤗","You make me so happy 😊"];
const BOTTLE_NOTES=["I wrote this just for you 💌 You’re my everything.","If you found this, you owe me a kiss 😘","Every wave brings me back to you 🌊","You’re the best thing that ever washed into my life 💗","Tiny reminder: I’m proud of you ✨","Meet me in my dreams tonight 🌙"];
/* ========================================= */

let mac;
const meow=()=>{try{mac=mac||new(window.AudioContext||window.webkitAudioContext)();const o=mac.createOscillator(),g=mac.createGain(),t=mac.currentTime;
  o.type="triangle";o.frequency.setValueAtTime(500,t);o.frequency.linearRampToValueAtTime(900,t+.15);o.frequency.linearRampToValueAtTime(550,t+.45);
  o.connect(g);g.connect(mac.destination);g.gain.setValueAtTime(.001,t);g.gain.linearRampToValueAtTime(.15,t+.05);g.gain.exponentialRampToValueAtTime(.001,t+.5);o.start(t);o.stop(t+.55)}catch(e){}};

const CATSVG=`<svg id="kit" viewBox="0 0 200 210" style="display:block;width:260px;max-width:90%;margin:10px auto;cursor:pointer">
<g class="tail"><path d="M150 170 C192 172 196 122 170 108" stroke="#f4c89a" stroke-width="16" fill="none" stroke-linecap="round"/></g>
<ellipse cx="100" cy="165" rx="52" ry="38" fill="#f4c89a"/><ellipse cx="78" cy="198" rx="16" ry="9" fill="#f9dcb8"/><ellipse cx="122" cy="198" rx="16" ry="9" fill="#f9dcb8"/>
<polygon points="48,72 56,20 92,52" fill="#f4c89a"/><polygon points="152,72 144,20 108,52" fill="#f4c89a"/>
<polygon points="60,62 62,36 80,52" fill="#f7a8b8"/><polygon points="140,62 138,36 120,52" fill="#f7a8b8"/>
<ellipse cx="100" cy="95" rx="58" ry="50" fill="#f4c89a"/>
<path d="M100 48 V60 M90 50 L92 60 M110 50 L108 60" stroke="#e0a56e" stroke-width="4" stroke-linecap="round"/>
<g class="eyes"><circle cx="78" cy="92" r="11" fill="#fff"/><circle id="pL" cx="78" cy="92" r="6" fill="#2a1218"/><circle cx="75" cy="89" r="2" fill="#fff"/>
<circle cx="122" cy="92" r="11" fill="#fff"/><circle id="pR" cx="122" cy="92" r="6" fill="#2a1218"/><circle cx="119" cy="89" r="2" fill="#fff"/></g>
<g class="hap"><path d="M68 94 Q78 80 88 94 M112 94 Q122 80 132 94" stroke="#2a1218" stroke-width="4" fill="none" stroke-linecap="round"/></g>
<ellipse cx="62" cy="108" rx="9" ry="5" fill="#f7a8b8" opacity=".7"/><ellipse cx="138" cy="108" rx="9" ry="5" fill="#f7a8b8" opacity=".7"/>
<polygon points="95,104 105,104 100,111" fill="#e0788f"/>
<path d="M100 111 Q94 120 88 114 M100 111 Q106 120 112 114" stroke="#2a1218" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<path d="M70 112 L40 106 M70 117 L40 120 M130 112 L160 106 M130 117 L160 120" stroke="#2a1218" stroke-width="2" stroke-linecap="round" opacity=".6"/></svg>`;

navH("🐱 Cute Surprises");

// love kitty (cute cat that follows your finger/mouse with its eyes)
addPage("kitty","🐱 Love Kitty","Meet Your Kitty","Pet her, feed her, and give her a name",`${CATSVG}<div class="msg" id="ctm">Say hi 💗</div>${center('<input id="ctn" class="inp" style="width:180px" placeholder="Name your kitty" maxlength="14"> <button class="btn" id="ctf">Feed 🐟</button>')}`,()=>{
  let n=0,name="Kitty";try{name=localStorage.catn||"Kitty"}catch(e){}
  $("#ctn").value=name==="Kitty"?"":name;
  const kit=$("#kit"),say=t=>{$("#ctm").textContent=t};
  const happy=()=>{kit.classList.add("happy");clearTimeout(kit._t);kit._t=setTimeout(()=>kit.classList.remove("happy"),1300)};
  $("#ctn").onchange=()=>{name=$("#ctn").value.trim()||"Kitty";try{localStorage.catn=name}catch(e){}say(`Hi, I’m ${name}! 💗`)};
  kit.onclick=e=>{n++;happy();meow();burst(e.clientX,e.clientY);say(n%5===0?`${name} loves you SO much! Purr level ${n} 💗`:`${name} purrs… 💗 (purr level ${n})`);if(n===10)fw()};
  $("#ctf").onclick=e=>{happy();meow();say(`${name}: nom nom nom 🐟 thank you!`);burst(e.clientX,e.clientY)};
  const pl=$("#pL"),pr=$("#pR");
  addEventListener("pointermove",e=>{const r=kit.getBoundingClientRect(),f=v=>Math.max(-1,Math.min(1,v/150))*4,
    t=`translate(${f(e.clientX-r.x-r.width/2)}px,${f(e.clientY-r.y-r.height/2)}px)`;pl.style.transform=t;pr.style.transform=t})});

// lantern release
addPage("lantern","🏮 Lantern Release","Release a Lantern","Type a wish and send it to the sky",`<div class="sky2" id="sk2"></div>${center('<input id="lw" class="inp" style="width:240px;max-width:100%" maxlength="40" placeholder="Your wish..."> <button class="btn" id="lb">Release 🏮</button>')}<div class="msg" id="lm"></div>`,()=>{
  let n=0;$("#lb").onclick=()=>{const w=$("#lw").value.trim()||"A wish for us",l=document.createElement("div");l.className="lt";l.style.left=(8+Math.random()*70)+"%";l.style.setProperty("--sx",(Math.random()*60-30)+"px");
    const e=document.createElement("div");e.textContent="🏮";e.style.fontSize="40px";const s=document.createElement("small");s.textContent=w;l.append(e,s);$("#sk2").appendChild(l);
    setTimeout(()=>l.remove(),9200);$("#lw").value="";n++;$("#lm").textContent=`Wishes sent: ${n} ✨ May they all come true 💗`}});

// message in a bottle
addPage("bottle","🍾 Message in a Bottle","Message in a Bottle","Catch the bottle when it floats by",`<div class="sea"><button class="bt" id="bt2"><span>🍾</span></button><div class="wv">🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊</div></div><div class="msg">Tap the bottle!</div>`,()=>{
  $("#bt2").onclick=e=>{$("#mtext").textContent=pick(BOTTLE_NOTES);$("#modal").classList.add("on");burst(e.clientX,e.clientY)}});

// sweet pop-ups while she browses
(()=>{let on=false;new MutationObserver(()=>{if(on||!$("#app").classList.contains("on"))return;on=true;
  setTimeout(()=>toast(pick(POPUPS)),20000);setInterval(()=>{if(!document.hidden)toast(pick(POPUPS))},70000)}).observe($("#app"),{attributes:true})})();