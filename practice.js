const navtoggle = document.querySelector('.navtoggle');
const sidebar = document.querySelector('.sidebar');

navtoggle.addEventListener('click',function(){
    sidebar.classList.toggle('showmenu');
});