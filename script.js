window.onload = function(){
   
   const text = document.querySelector('.text');
   const dark_bg = document.querySelector('.dark');
   const login_form = document.getElementById('login');
   const login_btn = document.getElementById('login_btn');
   const login_tab = document.getElementById('login_tab');
   const login_box = document.querySelector('.login_box');
   const body_tag = document.getElementsByTagName('body');
   const register_form = document.getElementById('register');
   const change_title = document.getElementsByTagName('title');
   const register_tab = document.getElementById('register_tab');
   const login_container = document.querySelector('.login_container');

   const str = text.innerText;
   let start = 0;

   register_tab.style.paddingTop = '5px';
   register_tab.style.fontSize = '17px';
   login_tab.style.paddingTop = '7px';

   login_btn.addEventListener('click', function(){
      dark_bg.style.display = 'block';
      login_container.style.transform = 'translateX(0)';
      body_tag[0].classList.add('body');
      change_title[0].innerText = 'Login';
   });

   dark_bg.addEventListener('click', function(){
      dark_bg.style.display = 'none';
      login_container.style.transform = 'translateX(-2000px)';
      body_tag[0].classList.remove('body');
      change_title[0].innerText = 'My Project';

   });

   login_tab.addEventListener('click', function(){
      change_title[0].innerText = 'Login';
      login_form.style.display = 'block'; 
      register_form.style.display = 'none';
      login_box.style.borderTopColor = '#0174ba';
      login_tab.setAttribute('style','font-size:20px; padding-top:7px;');
      register_tab.setAttribute('style', 'font-size:17px; padding-top:5px;')
   });

   register_tab.addEventListener('click', function(){
      change_title[0].innerText = 'Register';
      login_form.style.display = 'none';
      register_form.style.display = 'block';
      login_box.style.borderTopColor = '#d75212';
      login_tab.setAttribute('style','font-size:17px; padding-top:5px;');
      register_tab.setAttribute('style', 'font-size:20px; padding-top:7px;')
   });
   
   if(str.length > 0){
      text.innerText = ''; // first clean all character then typing :)
      window.setInterval(typing_text, 200);
   }
   
   function typing_text(){

      let curser = '';
      if(start % 2 == 0){
         curser = '|';
      }

      if(start <= str.length){
         text.innerText = str.slice(0, start) + curser;
         start ++;
      }else{
         start = 0;
      }
   }
}