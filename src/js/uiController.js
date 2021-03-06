(function( $, window, undefined ) {
  // Menu
  $("a#slide").click(function(){
    $("#sidebar,a#slide,#fade").addClass("slide");
    $("#open").hide();
    $("#search").hide();
    $("#close").show();
  });

  $("#fade").click(function(){
    $("#sidebar,a#slide,#fade").removeClass("slide");
    $("#open").show();
    $("#search").show();
    $("#close").hide();
  });

  // Search
  var bs = {
    close: $(".icon-remove-sign"),
    searchform: $(".search-form"),
    canvas: $("#search-container"),
    dothis: $('.dosearch')
  };

  bs.dothis.on('click', function() {
    $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    bs.searchform.find('input').focus();
    bs.canvas.toggleClass('search-overlay');
    $('.search-field').simpleJekyllSearch();
  });

  bs.close.on('click', function() {
    $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    bs.canvas.removeClass('search-overlay');
  });

  // Scroll
  smoothScroll.init({
    updateURL: false,
    offset: 65
  });

  // skill bar init
  $('.my-skill-bar').simpleSkillbar();

  //blur element
  var vague = $('.bg-blur').Vague({intensity: 1.5});
	vague.blur();

  $(window).scroll(function(event) {
    if ($(window).scrollTop() > 85) {
      $('#navbar').addClass('navbar-color');
    } else {
      $('#navbar').removeClass('navbar-color');
    }
  });

  $(window).on('load', function() {
    setTimeout(function() {
      $('.preloader-container').fadeOut('slow');
      $('body').removeClass('in-loading');
    }, 250);
  });

})( $, window );
