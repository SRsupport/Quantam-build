/*menu toggle*/
 // Select the menu icon
         var menuIcon = document.querySelector('.menu-icon');
         // Select the header navigation
         var headerNav = document.getElementById('header-nav');
         
         // Function to toggle 'active' class
         function toggleMenu() {
             // Toggle 'active' class on headerNav
             headerNav.classList.toggle('active');
             // Toggle 'active' class on menuIcon
             menuIcon.classList.toggle('active');
         }
         
         // Add click event listener to the menu icon
         menuIcon.addEventListener('click', toggleMenu);
/*faq*/
const items = document.querySelectorAll('.accordion button');
         
         function toggleAccordion() {
         const itemToggle = this.getAttribute('aria-expanded');
         
         for (i = 0; i < items.length; i++) {
         items[i].setAttribute('aria-expanded', 'false');
         }
         
         if (itemToggle == 'false') {
         this.setAttribute('aria-expanded', 'true');
         }
         }
         
         items.forEach((item) => item.addEventListener('click', toggleAccordion));
/*slider*/
        var multipleCardCarousel = document.querySelector("#carouselExampleControls");

         if (window.matchMedia("(min-width: 576px)").matches) {
           var carousel = new bootstrap.Carousel(multipleCardCarousel, {
             interval: false
           });
           var carouselWidth = $(".carousel-inner")[0].scrollWidth;
           var cardWidth = $(".carousel-item").width();
           var scrollPosition = 0;
           $("#carouselExampleControls .carousel-control-next").on("click", function () {
             if (scrollPosition < carouselWidth - cardWidth * 3) {
               scrollPosition += cardWidth;
               $("#carouselExampleControls .carousel-inner").animate(
                 { scrollLeft: scrollPosition },
                 600
               );
             }
           });
           $("#carouselExampleControls .carousel-control-prev").on("click", function () {
             if (scrollPosition > 0) {
               scrollPosition -= cardWidth;
               $("#carouselExampleControls .carousel-inner").animate(
                 { scrollLeft: scrollPosition },
                 600
               );
             }
           });
         } else {
           $(multipleCardCarousel).addClass("slide");
         }