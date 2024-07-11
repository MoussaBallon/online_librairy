window.addEventListener('scroll', reveal2);

function reveal2(){
  var reveals2 = document.querySelectorAll('.reveal2');

  for(var i = 0; i < reveals2.length; i++){
    
    var windowheight = window.innerHeight;
    var reveal2top = reveals2[i].getBoundingClientRect().top;
    var reveal2point = 50;

    if(reveal2top < windowheight - reveal2point){
      reveals2[i].classList.add('active');
    }
    else{
      reveals2[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){
    
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 10;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}


