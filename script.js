const btn=document.getElementById('themeBtn');
btn.addEventListener('click',()=>{document.body.classList.toggle('light');btn.textContent=document.body.classList.contains('light')?'☀':'☾';});
