$document.ready(function(){

  var bounceInLeft = 'animated bounceInLeft';

  $('.aside-1').addClass(bounceInLeft).fadeIn('slow').one(animationend, function() {
    $('.aside-1').removeClass(bounceInLeft)
  });
})
