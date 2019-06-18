$(function () {
  /** Fonction pour remplir toute les formes de la page */
  $('#btn-fill').click(function() {
    $('.form').addClass('filled')
  })

    /** Fonction pour vider toute les formes de la page */
    $('#btn-empty').click(function() {
      $('.form').removeClass('filled')
    })

    /** Fonction pour remplir un seul cercle */
    $('.circle').click(function() {
      $(this).toggleClass('filled')
    })

    /** Fonction pour remplir un carre et sa rangé */
    $('.squarre').click(function() {
      let currentSuarre = $(this)
      currentSuarre.toggleClass('filled')
      let idParent = currentSuarre.parent().attr('id')

      switch (idParent) {
        case 'row1':
              if(currentSuarre.hasClass('filled'))
                $('#row1').children().addClass('filled')
              else 
                $('#row1').children().removeClass('filled')
          break;
        case 'row2':
            if(currentSuarre.hasClass('filled'))
            $('#row2').children().addClass('filled')
          else 
            $('#row2').children().removeClass('filled')
          break;
        case 'row4':
            if(currentSuarre.hasClass('filled'))
            $('#row4').children().addClass('filled')
          else 
            $('#row4').children().removeClass('filled')
          break;
        case 'row5':
            if(currentSuarre.hasClass('filled'))
            $('#row5').children().addClass('filled')
          else 
            $('#row5').children().removeClass('filled')
          break;
        default:
          break;
      }
    })

     /** Fonction pour remplir le losange, sa rangé et sa colonne */
    $('.losange').click(function() {

      $('.losange').toggleClass('filled')

      upToDateColKeeper('.col3')

      upToDateRowKeeper('#row3')

    })
})

function upToDateColKeeper(colName) {
  for(let elem of $(colName)) {
    if($('.losange').hasClass('filled'))
    $(elem).addClass('filled')
    else
    $(elem).removeClass('filled')
  }
}

function upToDateRowKeeper(rowName) {
  for(let elem of $(rowName).children()) {
    if($('.losange').hasClass('filled'))
    $(elem).addClass('filled')
    else
    $(elem).removeClass('filled')
  }
}