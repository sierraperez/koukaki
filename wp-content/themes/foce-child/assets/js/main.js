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


