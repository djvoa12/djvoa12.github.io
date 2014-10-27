$(document).ready(function(){



})  // end of the document.ready function: do not remove or write DOM manipulation below this.

/* Examples Below:
 bodyElement = $('body')
 mascot = $(".mascot")
 doc = $(document)
 mascotHeading = $(".mascot h1")
 heading = $('body > h1')
 mascotImg = $('.mascot img')

$(heading).css( {
    'color': 'maroon',
    'border': '1px solid maroon',
    'visibility': 'visible',
  });

$(mascotHeading).html('Copperheads').css({'color': 'maroon'});

$(mascotImg).on('mouseover', function(e){
     e.preventDefault()
    $(this).attr('src', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt3QwtqxakpwSH315-cjJFLQB33qD015gU9rw3JMm72LwynL8Q')
  }).on('mouseleave', function(e){
     e.preventDefault()
    $(this).attr('src', '../../imgs/dbc_logo.jpg')
  })

$(heading).click(function() {
  $(heading).fadeTo( "slow", 0.33 );
});
*/