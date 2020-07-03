// variabili delle  frecce avanti e indietro
$(document).ready(function(){
  var nextBtn = $('.next');
  var prevBtn = $('.prev');

  // parte del click su icona next
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



  // parte del click su icona prev
  prevBtn.click(function(){
    // variabile per le immagini e icone con classe active

    // immagini
    var imgActive = $('.slider-wrapper img.active');
     imgActive.removeClass('active');
     // icone
     var iActive = $('.slider-wrapper i.active');
      iActive.removeClass('active');



     if (imgActive.hasClass('first')) {
       $('.slider-wrapper img.last').addClass('active');
       $('.slider-wrapper i.last').addClass('active');

     }else {
       imgActive.prev().addClass('active');
       iActive.prev().addClass('active');
     }
  });




});
