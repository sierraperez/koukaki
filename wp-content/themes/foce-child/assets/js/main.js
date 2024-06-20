jQuery(document).ready(function($){
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true, // Adiciona o loop
    // autoplay: {
    //   delay : 2500 ,
    // },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// SCROLL NUAGES

  // Animation au scroll
  // Fonction pour animer les nuages lors du défilement de la page
  function animateCloudsOnScroll() {
    const cloud = document.querySelector(".cloud");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    // clouds.forEach((cloud) => {
    const cloudPosition = cloud.getBoundingClientRect().top + window.scrollY;

    // Vérifie si le nuage est visible à l'écran
    if (
      cloudPosition < scrollPosition + windowHeight &&
      cloudPosition + cloud.clientHeight > scrollPosition
    ) {
      // Nuage visible à l'écran
      if (scrollPosition > cloudPosition) {
        // Défilement vers la gauche : appliquer animation reverse
        cloud.classList.add("cloud-animation-reverse");
        cloud.classList.remove("cloud-animation");
      } else {
        // Défilement vers la droite : appliquer animation normale
        cloud.classList.add("cloud-animation");
        cloud.classList.remove("cloud-animation-reverse");
      }
    } else {
      // Nuage non visible à l'écran : retirer les animations
      cloud.classList.remove("cloud-animation");
      cloud.classList.remove("cloud-animation-reverse");
    }
    // });
  }

  // Écouter l'événement de défilement de la fenêtre pour animer les nuages
  window.addEventListener("scroll", animateCloudsOnScroll);

  // Animer les nuages lors du chargement initial de la page
  animateCloudsOnScroll();


});

// //  Animations Video and Titre Top and Down 
// const target = document.querySelectorAll('[data-anime]');
// const animationClass ='animate';

// function animeImage(){
//   const windowTop = window.pageYOffset;
//   console.log(windowTop);

// }
// window.addEventListener('scroll',function(){
//   animeImage();
// })


//  Animations Video and Titre Top and Down 
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeImage() {
    // Para cada elemento que tem o atributo 'data-anime'
    target.forEach(function(element) {
        // Adiciona a classe de animação
        element.classList.add(animationClass);
    });
}

window.addEventListener('load', function() {
    animeImage();
});

 // Seleciona a imagem
 const img = document.getElementById('bouncingImage');

 // Função para adicionar a classe de animação com um atraso
 function startBounceAnimation() {
     // Adiciona a classe 'bounce' à imagem
     img.classList.add('circular');
 }

 // Adiciona o evento 'load' ao window
 window.addEventListener('load', function() {
     // Define um atraso de 2 segundos (500 milissegundos)
     setTimeout(startBounceAnimation, 500); // 2000 ms = 2 segundos
 });
