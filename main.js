$(document).ready(function(){
  var nextBtn = $('.next');
  var prevBtn = $('.prev');
  // variabili delle  frecce avanti e indietro

  nextBtn.click(function(){
    var imgActive = $('.slider-wrapper img.active');
     imgActive.removeClass('active');
     imgActive.next().addClass('active');
  });




  });
