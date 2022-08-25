
window.addEventListener("DOMContentLoaded", function(e){
    this.document.getElementById("body-wrap").style.display = 'block';
})

const graphBtn1 = document.getElementById('graph-btn-1');
const graphBtn2 = document.getElementById('graph-btn-2');
const monthly = document.getElementById('monthly');
const weekly = document.getElementById('weekly');
const chart = document.getElementById('line-chart');
const profileBtn = document.getElementById('profile-btn');
const proFile = document.getElementById('profile');
const countryBtn = document.getElementById('contry-btn-tog');
const countryMage = document.getElementById('country-mage');
const countryWrap = document.getElementById('country');
const navBtn = document.getElementById('navbar-togler'); 
const navCent = document.getElementById('left-sidebar');
const mainBaar = document.querySelector('.main-wrap'); 
const checkBaar = document.querySelector('.chng'); 
const arrBaar = document.querySelector('.chng-1');
const mainbar = document.querySelector('.mainbar'); 
const Dash = document.getElementsByClassName('standout');
const rightSidebar = document.querySelector('.right-sidebar');
const rightTog = document.querySelector('.right-chng');
const cross = document.querySelector('.right-btn-shrink');
const switchTog = document.querySelectorAll('.toggle');
const Footer = document.querySelector('.footer-wrapper')
const docs =document.getElementsByTagName('document');
const body = document.getElementById('body-wrap');

// const switchCon = document.getElementsByClassName('switch');
// const switchCir = document.getElementsByClassName('.tog-cir');
// const switchCirMove = document.getElementsByClassName('tog-cir-move');



// const spinner = document.querySelectorAll('.sidebar .dashboard .standout .rotate');

console.log(switchTog)










/*
let lastElement = null;
for (let i = 0;  i< Dash.length;  i++) {
    
    let elem = Dash.item(i);
    elem.addEventListener('click', function(e) {
      

        if (lastElement != null) {
            let prev = lastElement.getElementsByClassName('rotate').item(0);
            if (prev.classList.contains('open-dropdown')) {
                prev.classList.remove('open-dropdown'); 
                if (lastElement != this) {
                    this.getElementsByClassName('rotate').item(0).classList.add('open-dropdown');         
                }else{
                    this.getElementsByClassName('rotate').item(0).classList.add('close-dropdown');
                }
            }else if(prev.classList.contains('close-dropdown')){
                prev.classList.remove('close-dropdown');  
                this.getElementsByClassName('rotate').item(0).classList.add('open-dropdown');
            }
            lastElement = this;
        }else{
            this.getElementsByClassName('rotate').item(0).classList.add('open-dropdown');
            lastElement = this;
        }
   
    })
    
}
*/

graphBtn2.addEventListener('click', function (e) {
    weekly.classList.remove('hide-graph');
    monthly.classList.add('hide-graph');
})

graphBtn1.addEventListener('click', function (e) {
    weekly.classList.add('hide-graph');
    monthly.classList.remove('hide-graph');
})





   countryMage.addEventListener('click', function (e) {
    countryWrap.classList.toggle('show-countries')

})



profileBtn.addEventListener('click', function (e) {
    if (e.target.id == 'profile-btn') {
      proFile.classList.toggle('show-profile-select');
        
    }




})





   navBtn.addEventListener('click', function(e){
   if (e.target.id == 'nav-hamburger' || e.target.id == 'navbar-togler') {
     navCent.classList.remove('nav-btn');
     mainbar.classList.remove('hide-trans');

     // navCent.classList.remove('nav-btn1');
    }
 });
document.addEventListener('click', function (e) {
    if (e.target.id == 'mainbaar' && e.target.id !=='nav-hamburger' && e.target.id !== 'navbar-togler' ) {
        navCent.classList.add('nav-btn');      
        mainbar.classList.add('hide-trans');
    }
})

 document.addEventListener('click', function(e){
    if (e.target.id !== 'nav-hamburger'   && e.target.id !== 'profile-btn' && e.target.id !== 'sidebar' && e.target.id !== 'navbar-togler') {
    //   navCent.classList.add('nav-btn');      
    //   mainbar.classList.add('hide-trans');
      proFile.classList.remove('show-profile-select');
      
      

      // navCent.classList.remove('nav-btn1');
     }
  });

  document.addEventListener('click', function(e){
    if (e.target.id !== 'country-mage') {
     
      countryWrap.classList.remove('show-countries')
      

      // navCent.classList.remove('nav-btn1');
     }
  });





//  document.addEventListener('click', function (e) {
//      if (e.target.id !== 'navbar-togler') {
//          console.log('navbar')
//      navCent.classList.remove('nav-btn');

//     }
//     else{
//          console.log('amen')

//     }
//  })

 document.addEventListener('click', function (e) {

     console.log(e.target)
 })









mainBaar.addEventListener('click', function(e){

    


})
checkBaar.addEventListener('click', function(e){


    

   checkBaar.classList.add('chng-1');
    arrBaar.classList.remove('chng-1');
    // mainBaar.classList.remove('chng-4')
    // navCent.classList.remove('chng-5');


     mainbar.classList.add('chng-2');
     
    navCent.classList.add('chng-3');
    if (navCent.classList.contains('chng-3')) {
    navCent.classList.add('chng-4');
        
    }





     

});



arrBaar.addEventListener('click', function(e){

    

     checkBaar.classList.remove('chng-1');
     arrBaar.classList.add('chng-1' );
     mainbar.classList.remove('chng-2')
    navCent.classList.remove('chng-3');

    // mainBaar.classList.add('chng-4')
    // navCent.classList.add('chng-5');

 
 
      
 
 });

 

 
 rightTog.addEventListener('click', function(e){

    rightSidebar.classList.add('open-right-sidebar');
    rightSidebar.classList.remove('close-right-sidebar');

   
 });
 

 cross.addEventListener('click', function(e){
    rightSidebar.classList.remove('open-right-sidebar');


    rightSidebar.classList.add('close-right-sidebar');
    
 
 });





Array.from(switchTog).forEach(function (swtch) {
    swtch.addEventListener('click', function (e) {
                   swtch.classList.toggle('tog-switch');
           if (e.target.id == 'tog-1' || e.target.id == 'toggOf-1' || e.target.id == 'togCir-1' || e.target.id == 'toggOn-1') {
            mainbar.classList.toggle('mainbar-ontog');
            navCent.classList.toggle('sidebar-ontog');
            navCent.classList.toggle('sidebar-tog');
           }
           if (e.target.id == 'tog-2' || e.target.id == 'toggOf-2' || e.target.id == 'togCir-2' || e.target.id == 'toggOn-2') {
            mainbar.classList.toggle('hide-nav');
           }
           if (e.target.id == 'tog-3' || e.target.id == 'toggOf-3' || e.target.id == 'togCir-3' || e.target.id == 'toggOn-3') {
            Footer.classList.toggle('hide-footer');
           }
           if (e.target.id == 'tog-4' || e.target.id == 'toggOf-4' || e.target.id == 'togCir-4' || e.target.id == 'toggOn-4') {
            body.classList.toggle('secondary-color');
            navCent.classList.toggle('light-mode');
           }


                })

})

 

    


