const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const menuIcon = menuToggle.querySelector('i');
const header = document.getElementById('siteHeader');
function closeMenu() { 
    navMenu.classList.remove('show'); 
    menuToggle.setAttribute('aria-expanded','false'); 
    menuToggle.setAttribute('aria-label','Open navigation'); 
    menuIcon.classList.replace('fa-times','fa-bars'); 
}
menuToggle.addEventListener('click', () => { 
    const opened=navMenu.classList.toggle('show'); 
    menuToggle.setAttribute('aria-expanded',String(opened)); 
    menuToggle.setAttribute('aria-label',opened?'Close navigation':'Open navigation'); 
    menuIcon.classList.toggle('fa-bars',!opened); menuIcon.classList.toggle('fa-times',opened); 
});
document.querySelectorAll('.matt-nav-link').forEach(link => link.addEventListener('click', () => { 
    document.querySelectorAll('.matt-nav-link').forEach(item => item.classList.remove('active')); 
    link.classList.add('active'); closeMenu(); 
}));
window.addEventListener('resize', () => { if(window.innerWidth>1100) closeMenu(); });
document.addEventListener('keydown', event => { if(event.key==='Escape') closeMenu(); });
document.addEventListener('click', event => { if(!header.contains(event.target)) closeMenu(); });
function updateHeader() { header.classList.toggle('scrolled',window.scrollY>40); }
window.addEventListener('scroll',updateHeader,{passive:true}); updateHeader();