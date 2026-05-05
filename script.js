const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',isOpen);});}

document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.target)?.classList.add('active');}));

document.querySelectorAll('.accordion').forEach(acc=>acc.addEventListener('click',()=>{const panel=acc.nextElementSibling;panel.style.maxHeight=panel.style.maxHeight?null:panel.scrollHeight+'px';}));
