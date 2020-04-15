// scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // fix header
let header = document.querySelector('.header');

if(header) {
  window.onscroll = function(){
    if(document.documentElement.scrollTop > 650){
      header.classList.add("header-fixed");
    }
    else{
      header.classList.remove("header-fixed");
    }
  }
}