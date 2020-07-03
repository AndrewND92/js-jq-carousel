$(document).ready(function(){
  var nextBtn = $('.next');
  var prevBtn = $('.prev');
  // variabili delle  frecce avanti e indietro

  nextBtn.click(function(){
    // variabile per le immagini e icone con classe active

    // immagini
    var imgActive = $('.slider-wrapper img.active');
     imgActive.removeClass('active');
     // icone
     var iActive = $('.slider-wrapper i.active');
      iActive.removeClass('active');



     if (imgActive.hasClass('last')) {
       $('.slider-wrapper img.first').addClass('active');
       $('.slider-wrapper i.first').addClass('active');

     }else {
       imgActive.next().addClass('active');
       iActive.next().addClass('active');
     }
  });




});
