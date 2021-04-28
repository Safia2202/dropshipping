

const navigationBar = document.querySelector('.topnav')


window.addEventListener('scroll', pageEffect)

function pageEffect(){
    if(window.scrollY > (window.innerHeight - 130)){
        navigationBar.classList.add('change')
    } else {
        navigationBar.classList.remove('change')
    }

    if(window.scrollY > (window.innerHeight/2)){
        aboutSection.classList.add('show')
    }
}


mybutton = document.getElementById("");
window.onscroll=function() {
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop> 20 || document.documentElement.scrollTop >20) {
        mybutton.style.display="block";
    
    }else{
        mybutton.style.display="none";
    }
}
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

