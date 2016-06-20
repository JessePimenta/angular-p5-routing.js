console.log("if you have opened this up, i will assume you're also a programmer. If so hit me up! I'd love to talk some code, and see if theres a way we can collaborate.");

$(document).ready(function() {


  var animationName = 'animated bounce';
  var animationFlash = 'animated flash';
  var secondAnimation = 'animated jello';
  var bounceInLeft = 'animated bounceInLeft';
  var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


  // $('body').hover(function() {
  //     $(this).animate({opacity: 1}, 8000);
  // }, function() {
  //     $(this).animate({opacity: 0}, 1000);
  // })
  //  $( ".infoP:hidden" ).delay(1000)
  //  $( ".designDiv:hidden" ).delay(4500).fadeIn(3073)
  //  $( ".musicDiv:hidden" ).delay(5000).fadeIn(3073)
  //  $( ".webDiv:hidden" ).delay(3500).fadeIn(3073)
  //  $( ".personalDiv:hidden" ).delay(4000).fadeIn(3073)
  //  $( ".group:hidden" ).delay(2000).fadeIn(1073)
  //
  //create random text array object
  var r_text = [
  'this button toggles the info above',
  'all furniture can be dragged around!',
  'hit the G key to destroy this room!',
  'throw stuff around once you press G!',
  'click on the turntables'

  ]
  var index = 0;
   $('#info').click(function(){
     $(".toolTips").text(r_text[index])
     index = (index + 1) % r_text.length ;

  });
  //

  //gravity keybind to G
  var xTriggered = 0;
  var gKey = 103;
  $("body").keypress(function(event) {
    if (event.which == gKey) {
      event.preventDefault();
      $('body').jGravity({
        target: '.group',
        weight: 50,
        depth: 50,
        drag: true

      });
    } else if (event.which != 0 && event.charCode != 0) {
      return false;
    }

    xTriggered++;
    var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
    // console.log( msg, "html" );
    // console.log( event );


  });
  //end keybinding


  // fixed bug where elements were ignoring draggable() because of the !important rule on top and left values
  // instead we add a class without the important rule and remove the id which previously contained the styling
  // March 8th, 2016
  // console.log(valueArray);
  var windowWidth = $(window).width();

  if (windowWidth > 1580 && windowWidth < 1918) {
    // console.log('true');
    $('body').click(function() {
      $('#fridge_transp').addClass('importantFridge').removeAttr('id');
      $('#plant1_transp').addClass('importantPlant1').removeAttr('id');
      $('#food').addClass('importantFood').removeAttr('id');
      $('#plant2_transp').addClass('importantPlant2').removeAttr('id');
      $('#bed').addClass('importantBed').removeAttr('id');
      $('#ashtray').addClass('importantAshtray').removeAttr('id');
      $('#design').addClass('importantDesign');
      // console.log('removed all ids and added new classes');
    })
  }
  $(window).on('resize', function() {
    var win = $(this)
    if (win.width() < 1580) {
      $('.importantFridge').attr('id', 'fridge_transp').removeClass('importantFridge');
      $('.importantPlant1').attr('id', 'plant1_transp').removeClass('importantPlant1');
      $('.importantPlant2').attr('id', 'plant2_transp').removeClass('importantPlant2');
      $('.importantFood').attr('id', 'food').removeClass('importantFood');
      $('.importantBed').attr('id', 'bed').removeClass('importantBed');
      $('.importantAshtray').attr('id', 'ashtray').removeClass('importantAshtray');
      $('.importantDesign').attr('id', 'design').removeClass('importantDesign');
      // $('#design').removeClass('importantDesign');
      // console.log('back to original ids');
    }
    if (win.width() >= 1918) {
      $('#fridge_transp').addClass('important_fridge_transp').removeAttr('id');
      $('#plant1_transp').addClass('important_plant1_transp').removeAttr('id');
      $('#food').addClass('important_food').removeAttr('id');
      $('#plant2_transp').addClass('important_plant2_transp').removeAttr('id');
      $('#bed').addClass('important_bed').removeAttr('id');
      $('#ashtray').addClass('important_ashtray').removeAttr('id');
      $('#design').addClass('important_design').removeAttr('id');
      $('#personal').addClass('important_personal').removeAttr('id');
      $('#music').addClass('important_music').removeAttr('id');
      $('#web').addClass('important_web').removeAttr('id');
      $('#carpet').addClass('important_carpet').removeAttr('id');
      $('#couch').addClass('important_couch').removeAttr('id');
      $('#draftingtable_transp').addClass('important_draftingtable_transp').removeAttr('id');
      $('#lamp').addClass('important_lamp').removeAttr('id');
      $('#record1').addClass('important_record1').removeAttr('id');
      $('#record2').addClass('important_record2').removeAttr('id');
      $('#turntables_transp').addClass('important_turntables_transp').removeAttr('id');
      $('#djtable_transparent').addClass('important_djtable_transparent').removeAttr('id');
      // console.log('resizing with big screen classes');
    }

  });

  $(window).on('load', function() {
    var win = $(this)
    if (win.width() >= 1918) {
      $('#fridge_transp').addClass('important_fridge_transp').removeAttr('id');
      $('#plant1_transp').addClass('important_plant1_transp').removeAttr('id');
      $('#food').addClass('important_food').removeAttr('id');
      $('#plant2_transp').addClass('important_plant2_transp').removeAttr('id');
      $('#bed').addClass('important_bed').removeAttr('id');
      $('#ashtray').addClass('important_ashtray').removeAttr('id');
      $('#design').addClass('important_design').removeAttr('id');
      $('#personal').addClass('important_personal').removeAttr('id');
      $('#music').addClass('important_music').removeAttr('id');
      $('#web').addClass('important_web').removeAttr('id');
      $('#carpet').addClass('important_carpet').removeAttr('id');
      $('#couch').addClass('important_couch').removeAttr('id');
      $('#draftingtable_transp').addClass('important_draftingtable_transp').removeAttr('id');
      $('#lamp').addClass('important_lamp').removeAttr('id');
      $('#record1').addClass('important_record1').removeAttr('id');
      $('#record2').addClass('important_record2').removeAttr('id');
      $('#turntables_transp').addClass('important_turntables_transp').removeAttr('id');
      $('#djtable_transparent').addClass('important_djtable_transparent').removeAttr('id');
      // console.log('give me my screen width bitch! ' + win.width());
    }

    $(window).on('resize', function() {
      if (win.width() < 1918) {
        $(".important_fridge_transp").attr('id', 'fridge_transp').removeClass('important_fridge_transp');
        $('.important_plant1_transp').attr('id', 'plant1_transp').removeClass('important_plant1_transp');
        $('.important_food').attr('id', 'food').removeClass('important_food');
        $('.important_plant2_transp').attr('id', 'plant2_transp').removeClass('important_plant2_transp');
        $('.important_bed').attr('id', 'bed').removeClass('.important_bed');
        $('.important_ashtray').attr('id', 'ashtray').removeClass('important_ashtray');
        $('.important_design').attr('id', 'design').removeClass('important_design');
        $('.important_personal').attr('id', 'personal').removeClass('important_personal');
        $('.important_music').attr('id', 'music').removeClass('important_music');
        $('.important_web').attr('id', 'web').removeClass('important_web');
        $('.important_carpet').attr('id', 'carpet').removeClass('important_carpet');
        $('.important_couch').attr('id', 'couch').removeClass('important_couch');
        $('.important_draftingtable_transp').attr('id', 'draftingtable_transp').removeClass('important_draftingtable_transp');
        $('.important_lamp').attr('id', 'lamp').removeClass('important_lamp');
        $('.important_record1').attr('id', 'record1').removeClass('important_record1');
        $('.important_record2').attr('id', 'record2').removeClass('important_record2');
        $('.important_turntables_transp').attr('id', 'turntables_transp').removeClass('important_turntables_transp');
        $('.important_djtable_transparent').attr('id', 'djtable_transparent').removeClass('important_djtable_transparent');

      }


    })


  })


  // invert
  $('#turntables_transp').click(function(value) {
    document.querySelector("body").setAttribute("style", "-webkit-filter:invert(" + 100 + "%)", "-moz-filter:invert(" + 100 + "%)", "filter:invert(" + 100 + "%)")
    $('body').css('background', 'black no-repeat center center fixed',
        '-webkit-filter', 'invert("100%")', '-moz-filter:invert("100%")')
      // console.log('felt');
  });
  // end invert



  //cursor switch on click
  $('#cursor_normal').click(function() {

    var clicks = $(this).data('clicks')
    if (clicks) {
      $(this).attr('src', "/website_pieces/cursor_lifted.png")
    } else {
      $(this).attr('src', "/website_pieces/cursor_normal.png")
    }
    $(this).data("clicks", !clicks);
  });


  //invert on off on turntables_transp
  $('#turntables_transp').click(function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
      document.querySelector("body").setAttribute("style", "-webkit-filter:invert(" + 100 + "%)")
      $('body').css('background', 'black no-repeat center center fixed',
        '-webkit-filter', 'invert("100%")')
    } else {
      document.querySelector("body").setAttribute("style", "-webkit-filter:invert(" + 10 + "%)")
      $('body').css('background', 'white no-repeat center center fixed',
        '-webkit-filter', 'invert("100%")')
    }
    $(this).data("clicks", !clicks);
  });

  //



  //hide info on click
  $('#info').click(function() {
    $('.infoP').fadeToggle(873)
      // $('.infoP').fadeToggle('slow','linear')
  })

  //hue rotate
  hue = 0;
  $('#plant2_transp').click(function() {
    var hueRotate = function() {
      hue++;
      if (hue >= 360)
        hue = 0;
      $('#record1, #record2').css("-webkit-filter", "hue-rotate(" + hue + "deg)");
      setTimeout(hueRotate, 0.5);
    }
    hueRotate();
    // console.log('called hue rotate');
  })


  //navigate to links on drop

  var $draggable =
    $('.draggable').draggabilly({

    });
  $(function() {
    //  $("#cursor_normal").draggable({
    //
    //  });

    $("#record1").draggable({
      revert: 'invalid'
    });

    $("#web").droppable({
      drop: function() {
        location.href = "http://jp-la.co/web.html"
          // console.log('felt the drop on web');
      }
    });

    $("#design").droppable({
      drop: function() {
        location.href = 'http://jp-la.co/art-design.html'
          //  console.log('felt the drop on design');
      }
    });

    $("#music").droppable({
      drop: function() {
        location.href = 'http://soundcloud.com/dreamstrax'
          //  console.log('felt the drop on music');
      }
    });

    $("#personal").droppable({
      drop: function() {
        location.href = 'http://jp-la.co/portfolio.html'
          //  console.log('felt the drop on personal');
      }
    });
    $("#turntables_transp").droppable({
      accept: '#record1',
      drop: function() {
        location.href = 'https://soundcloud.com/nous-disques/sets/dreams-of-the-grid-ep-us011'
          //  console.log('felt the drop on personal');
      }
    });

  });

  $('#experimentsTab').hover(function() {
    $(this).addClass(secondAnimation).one(animationend, function() {
      $(this).removeClass(secondAnimation)
    });
  })


  //animate links effects

  $('#web').hover(function() {
    $(this).addClass(secondAnimation).one(animationend, function() {
      $(this).removeClass(secondAnimation)
    });
  })
  $('#design').hover(function() {
    $(this).addClass(animationName).one(animationend, function() {
      $(this).removeClass(animationName)
    });
  })
  $('#personal').hover(function() {
    $(this).addClass(animationName).one(animationend, function() {
      $(this).removeClass(animationName)
    });
  })
  $('#music').hover(function() {
    $(this).addClass(secondAnimation).one(animationend, function() {
      $(this).removeClass(secondAnimation)
    });
  })
  $('button').hover(function() {
    $(this).addClass(secondAnimation).one(animationend, function() {
      $(this).removeClass(secondAnimation)
    });
  })

  $('.infoP').addClass(bounceInLeft).fadeIn('slow').one(animationend, function() {
    $('.infoP').removeClass(bounceInLeft)
  });


});


// end jquery
