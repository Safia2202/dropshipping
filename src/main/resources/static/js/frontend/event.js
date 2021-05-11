

//const navigationBar = document.querySelector('.topnav')

//
//window.addEventListener('scroll', pageEffect)

//function pageEffect(){
//    if(window.scrollY > (window.innerHeight - 130)){
//        navigationBar.classList.add('.topnav')
//    } else {
//        navigationBar.classList.remove('.topnav')
//    }
//
//    if(window.scrollY > (window.innerHeight/2)){
//        aboutSection.classList.add('show')
//    }
//}


mybutton = document.getElementById(".back-to-top");
if(mybutton){
    window.onscroll=function() {
        scrollFunction()
        }
};



//function scrollFunction(){
//    if (document.body.scrollTop> 800 || document.documentElement.scrollTop >800) {
//        mybutton.style.display="block";
//
//    }else{
//        mybutton.style.display="none";
//    }
//}
function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

const chatbox = jQuery.noConflict();

chatbox(() => {
  chatbox(".chatbox-open").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeIn()
  );

  chatbox(".chatbox-close").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeOut()
  );



  chatbox(".chatbox-panel-close").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-open").fadeIn();
  });
});



// Favorite Button - Heart
$('.favme').click(function() {
	$(this).toggleClass('active');
});

/* when a user clicks, toggle the 'is-animating' class */
$(".favme").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".favme").on('animationend', function(){
  $(this).toggleClass('is_animating');
});

