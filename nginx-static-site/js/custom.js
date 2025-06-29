(function ($) {
  'use strict';

  const LittleFashion = {
    // Configuration
    config: {
      preloaderDelay: 500,
      slideshow: {
        autoplay: true,
        infinite: true,
        arrows: false,
        fade: true,
        dots: true,
        autoplaySpeed: 3000
      },
      testimonial: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

    // Initialize preloader
    initPreloader() {
      $(window).on('load', () => {
        $('.preloader').delay(this.config.preloaderDelay).slideUp('slow');
      });
    },

    // Initialize navigation
    initNavigation() {
      $('.navbar').headroom();
      
      $('.navbar-collapse a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
      });
    },

    // Initialize sliders
    initSliders() {
      const $slideshow = $('.slick-slideshow');
      const $testimonial = $('.slick-testimonial');

      if ($slideshow.length) {
        $slideshow.slick(this.config.slideshow);
      }

      if ($testimonial.length) {
        $testimonial.slick(this.config.testimonial);
      }
    },

    // Initialize all components
    init() {
      this.initPreloader();
      this.initNavigation();
      this.initSliders();
    }
  };

  // Initialize when DOM is ready
  $(document).ready(() => {
    LittleFashion.init();
  });

})(window.jQuery);

