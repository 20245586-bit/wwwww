// Edit these lines to make the notes yours.
var notes=[
 "You are so loved, Ali.",
 "Being tired doesn’t mean you’re failing. It means you’ve been trying hard.",
 "Your smile makes my whole day lighter.",
 "You don’t have to be strong every single minute.",
 "I’m so proud of everything you do, even the invisible stuff.",
 "You’re allowed to rest without earning it first.",
 "You make ordinary days feel special.",
 "Whatever tomorrow brings, we’ll face it together."
];
var i=0,card=document.getElementById('card');

// Hearts that pop up when she taps the button
function hearts(x,y){
  for(var k=0;k<7;k++){
    var h=document.createElement('span');h.className='heart';h.textContent='♥';
    h.style.left=(x+(Math.random()*120-60))+'px';h.style.top=(y-10)+'px';
    h.style.fontSize=(14+Math.random()*16)+'px';h.style.animationDelay=(Math.random()*.3)+'s';
    document.body.appendChild(h);setTimeout(function(el){el.remove()},2200,h);
  }
}
document.getElementById('next').addEventListener('click',function(e){
  card.textContent=notes[i];
  card.classList.remove('pop');void card.offsetWidth;card.classList.add('pop');
  i=(i+1)%notes.length;
  var r=e.currentTarget.getBoundingClientRect();hearts(r.left+r.width/2,r.top);
});

// Twinkling stars
var sky=document.getElementById('sky');
for(var s=0;s<70;s++){
  var d=document.createElement('div');d.className='star';var z=1+Math.random()*2;
  d.style.cssText='width:'+z+'px;height:'+z+'px;left:'+Math.random()*100+'%;top:'+Math.random()*70+'%;animation-delay:'+Math.random()*4+'s';
  sky.appendChild(d);
}

// PUT YOUR PHOTOS HERE: list file names (or data: links) between the brackets.
// Example: var photos=["photos/us1.jpg","photos/us2.jpg","photos/ali.jpg"];
var photos=["IMG_0704.JPG","IMG_3759.JPG","IMG_4526.JPG","IMG_7310.JPG","IMG_5543.jpg","IMG_5547.jpg","IMG_5549.jpg"];

// Floating balloons
var colors=["#ff8fab","#ffb68a","#d9a8ff","#ffd0a8","#9ec5ff"];
var layer=document.getElementById('balloons'),count=14;
for(var n=0;n<count;n++){
  var f=document.createElement('div');f.className='fly';
  f.style.setProperty('--s',(3.2+Math.random()*2.2)+'rem');
  f.style.setProperty('--c',colors[n%colors.length]);
  f.style.left=(3+Math.random()*90)+'%';
  var dur=16+Math.random()*12;
  f.style.animationDuration=dur+'s';
  f.style.animationDelay=(-Math.random()*dur)+'s';
  var b=document.createElement('div');b.className='b';
  var p=document.createElement('div');p.className='p';
  if(photos.length){p.style.backgroundImage='url("'+photos[n%photos.length]+'")';}else{p.textContent='♥';}
  b.appendChild(p);f.appendChild(b);
  var k=document.createElement('div');k.className='k';f.appendChild(k);
  var st=document.createElement('div');st.className='s';f.appendChild(st);
  layer.appendChild(f);
}

// Breathing text
var orb=document.getElementById('orb');
function cycle(){orb.textContent='breathe in';setTimeout(function(){orb.textContent='breathe out'},4000)}
cycle();setInterval(cycle,10000);