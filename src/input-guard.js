// Website/showcase input guard. Keep menu clicks idempotent without throttling gameplay.
let showcaseMenuClickAt=0;
C.addEventListener('mousedown',e=>{
  if(state!=='title')return;
  const now=performance.now();
  if(e.button||e.detail>1||now-showcaseMenuClickAt<120){
    e.preventDefault();
    e.stopImmediatePropagation();
    return;
  }
  showcaseMenuClickAt=now;
},true);
C.addEventListener('dblclick',e=>e.preventDefault());
C.style.touchAction='none';
