jQuery(document).ready(function($){
 /*MENU BURGER*/
  // Icone menu burger

  const icone_menuBurger = document.querySelector(".icone_menu-burger");
  const trait1 = document.querySelector(".trait1");
  const trait2 = document.querySelector(".trait2");
  const trait3 = document.querySelector(".trait3");

  icone_menuBurger.addEventListener("click", function () {
    icone_menuBurger.classList.toggle("crossed");
    if (icone_menuBurger.classList.contains("crossed")) {
      trait1.style.transform = "rotate(45deg) translate(5px, 5px)";
      trait2.style.opacity = "0";
      trait3.style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      trait1.style.transform = "none";
      trait2.style.opacity = "1";
      trait3.style.transform = "none";
    }
  });

  // ouverture-fermeture menu-burger

  
  document.querySelector(".menu-burger").addEventListener("click", openCloseMenu);
  document.querySelectorAll(".menu_ouvert_link").forEach((link)=> {
    link.addEventListener("click", openCloseMenu);
  });
  function openCloseMenu(){ console.log("click");
    const menuOuvert = document.querySelector(".menu_ouvert");
    if (menuOuvert.style.display === "flex") {
      menuOuvert.style.opacity = "0"; // Réinitialiser l'opacité à 0
      setTimeout(() => {
        menuOuvert.style.display = "none"; // Masquer le menu_ouvert après le fade-out
      }, 300); // Délai pour la transition de fade-out
    } else {
      menuOuvert.style.display = "flex"; // Afficher le menu_ouvert
      setTimeout(() => {
        menuOuvert.style.opacity = "1"; // Ajouter l'opacité à 1 pour le fade-in
      }, 10); // Délai pour déclencher la transition
    }
  }


  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true, // Adiciona o loop
    autoplay: {
      delay : 2500 ,
    },
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
  const cloudPosition = cloud.getBoundingClientRect().top + window.scrollY;

  // Vérifie si le nuage est visible à l'écran
  if (
    cloudPosition < scrollPosition + windowHeight &&
    cloudPosition + cloud.clientHeight > scrollPosition
  ) {
    // Nuage visible à l'écran
    if (scrollPosition > lastScrollY) {
      // Défilement vers le bas : appliquer animation normale
      cloud.classList.add("cloud-animation");
      cloud.classList.remove("cloud-animation-reverse");
    } else {
      // Défilement vers le haut : appliquer animation reverse
      cloud.classList.add("cloud-animation-reverse");
      cloud.classList.remove("cloud-animation");
    }
  } else {
    // Nuage non visible à l'écran : retirer les animations
    cloud.classList.remove("cloud-animation");
    cloud.classList.remove("cloud-animation-reverse");
  }

  lastScrollY = scrollPosition;
}

// Écouter l'événement de défilement de la fenêtre pour animer les nuages
window.addEventListener("scroll", animateCloudsOnScroll);

// Animer les nuages lors du chargement initial de la page
let lastScrollY = window.scrollY;
animateCloudsOnScroll();


  $(".menu-toggle").style.display = "block";
  console.log ($(".menu-toggle"))

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
     // Define um atraso de 2 segundos (700 milissegundos)
     setTimeout(startBounceAnimation, 700); // 700 ms = 0.7 segundos
 });


const intersectObserver =  new IntersectionObserver((entries)=> {
  entries.forEach((entry) =>{
    console.log(entry)
    entry.target.classList.toggle("show" , entry.isIntersecting)
  })

})

const elements = document.querySelectorAll(".animation-titres , .animation-part1 , .animation-part2")

elements.forEach ( el => intersectObserver.observe(el))