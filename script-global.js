// home page
$(document).ready(function() {
 
  fillSliderHomePage();
  fillSliderProductsPage();
    
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  
});

// make nav visible when someone clicks in button menu
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navBar = document.getElementsByTagName('nav')[0];

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
    navBar.classList.toggle('list');
});

$('#js-menu').on('click', 'li', function() {
  $('#js-menu li.current_page_item').removeClass('current_page_item');
  $(this).addClass('current_page_item');
});

// add click to product container

function detailProduct(currentProduct){
  var parent = currentProduct.parentNode;
  var detailProduct = document.getElementById('detail-product');
  var dataProduct = document.getElementsByClassName('data-product');

  var childreenParentElement = parent.children;
  var childreenParentElementCount = parent.childElementCount - 1;
  var imgProduct = currentProduct.children[1].getAttribute("src");
  var title = currentProduct.children[2].children[1].innerText;
  var price = currentProduct.children[2].children[0].innerText;
 
  $('.detail-product-container').addClass('active-detail-product-container');
  detailProduct.children[0].setAttribute('src', imgProduct);
  detailProduct.children[1].children[0].children[0].children[0].innerText = title;
  detailProduct.children[1].children[2].children[0].children[1].innerText = price;
  let i;
  for(i = 0; i<dataProduct.length; i++){
    dataProduct[i].setAttribute('data-img', imgProduct);
    dataProduct[i].setAttribute('data-name', title);
    dataProduct[i].setAttribute('data-price', parseFloat((""+price).slice(1)));
  }


  // Hide or show popup detail product when user click outside of her
  $('.product-content').bind("click", ToggleDisplay); 
  $(document).bind("click", ToggleDisplay);   
}



function fillSliderHomePage(){
  var owl = $(".owl-home-page");
   
  owl.owlCarousel({
      /*
      items : 10, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      */
      loop: true,
      //autoplay: false,
      //autoplayTimeout: 2000,
      //autoplayHoverPause: true,
      margin: 50,
      responsive: {
        0:{
          items:2,
          nav: false,
          margin: 190
        },
        411:{
          center: false,
          items:2,
          margin:200
        },
        600:{
          items:2,
          nav: false
        },
        900:{
          items:3,
          nav: false
        },
        1300:{
          items:4,
          nav: false
        }
      },
  });
 
  // Custom Navigation Events

  owl.owlCarousel();
  // Go to the next item
  $('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
  })

}

function fillSliderProductsPage() {
  var owlProd = $(".carousel");
      
    owlProd.owlCarousel({
      // itemsDesktop:[1000, 2],
      // itemsDesktopSmall:[979, 2],
      // itemsTablet:[768, 2],
      autoplay: false,
      center: true,
      loop:true,
      margin:100,
      nav: false,
      responsive:{
        0:{
          center: false,
          items:2,
          margin: 350
        },
        411:{
          center: false,
          items:2,
          margin:360
        },
        480:{
          items:2,
          margin:480,
          center: false
        },
        768:{
          items:2,
          margin:400,
          center: false
        },
        840:{
          items:2,
          margin:350
        },
        900:{
          items:2,
          margin:100
        },
        910:{
          items:2,
          margin:300
        },
        1000:{
          items:2,
          margin:140
        },
        1200:{
          items:3,
          margin: 490
        },
        1400:{
          items:3,
          margin: 300
        },
        1600:{
          items:3,
          margin: 250
        },
        1800:{
          items:4,
          margin: 500
        },
        2000:{
          items:4,
          margin: 520
        },
        2200:{
          items:4
        },
        2400:{
          items:5
        },
        2600:{
          items:6,
          margin: 500
        },
        2800:{
          items:6,
          margin: 500
        },
        3000:{
          items:6,
          margin: 500
        },
        3200:{
          items:8,
          margin: 500
        },
        3400:{
          items:8,
          margin: 500
        }
      }
  });

    // Custom Navigation Events

    owlProd.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
      owlProd.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlProd.trigger('prev.owl.carousel', [300]);
    })
}

// Hide or show popup detail product when user click outside of her

function ToggleDisplay() {
    if ($("#detail-product").data('shown'))
        hide();
    else 
        display();
}
    
function display() {    
    if ($("#detail-product").children().length > 0) {
        $("#detail-product").fadeIn(500, function() {
            $(document).bind("click", function() {hide(); });
            $("#detail-product").data('shown', true)});         
    }  
}

function hide() {    
    $("#detail-product").fadeOut(0, function() {
        $(document).unbind("click");
        $("#detail-product").data('shown', false);              
    });
}


// change style button categorie when user click at him
$('.categorie').click(function(){
  $('.categorie').addClass('categorie-inactive');
  $(this).removeClass('categorie-inactive');
  $(this).addClass('categorie-active');
})