(() => {
 const topButton=document.querySelector('#back-top');
 let framePending=false;
 const onScroll=()=>{if(framePending)return;framePending=true;requestAnimationFrame(()=>{topButton.hidden=scrollY<700;framePending=false;});};
 addEventListener('scroll',onScroll,{passive:true});onScroll();
 topButton.addEventListener('click',()=>{scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});document.querySelector('.brand').focus({preventScroll:true});});
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}}),{threshold:.08});
  document.querySelectorAll('.place-grid,.ritual-grid,.journal-links,.visit-new,.tasting .section-head').forEach(el=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add('reveal-ready');observer.observe(el);}});
 }
 const toggle=document.querySelector('#nav-toggle');
 document.addEventListener('click',e=>{if(!e.target.closest('.header')&&document.querySelector('#main-nav').classList.contains('open')){document.querySelector('#main-nav').classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
})();
