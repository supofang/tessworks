$(document).ready(function(){
    var $grid = $('.grid');
 
	//當圖片讀取完畢才執行
	$grid.imagesLoaded(function (){
 
		// initialize
		$grid.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
//          percentPosition: true,
            gutter: '.gutter-sizer',
            animate:true
		});
 
	});
    
    //tab http://codepen.io/MightyShaban/pen/zLykK
    $('ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('ul.tabs li a').click(function (g) { 
		var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').show().slideDown();
             
		g.preventDefault();
            
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            gutter: '.gutter-sizer',
            animate:true
        })
            
	} );(jQuery);
    
    $('.pic').retina();
    
    $(".imgF").fancybox({
        maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
    $(".img").fancybox({
        padding : 10,
        margin: 10,
        scrolling: 'no',
        centerOnScroll:	true,
        helpers : {
            title: {
                type: 'inside',
            },
            overlay : {
                css : {
                'background' : '#541b89'
                }
            }
        }
    });
    //rwdNav 
    var navIcon = $('.navicon'),
        navBtn = $ ('ul.topnav li a'),
        navList = $('ul.topnav');
    navIcon.on('click', function(){
        navList.toggleClass('show');
    });
    navBtn.on('click', function(){
        navList.removeClass('show');
    });
    
    $('.btn-go').click(function(){
		$('html,body').animate({scrollTop:$('#tool').offset().top}, 500);
	});		
});

//menuOnScroll http://codepen.io/bohndez/pen/xGMMOd?editors=0010
$(function(){
  $QBB = [
    0,
    $('#home').offset().top,
    $('#tool').offset().top,
    $('#works').offset().top,
    $('#contact').offset().top
  ]
})
$(window).on({
  scroll:function(){
    var scrooQQ = $('body').scrollTop();
    if (scrooQQ >= $QBB[0] && scrooQQ < $QBB[1])
    {
      $('#NAV1,#NAV2,#NAV3,#NAV4').removeClass('on');
    }
    if (scrooQQ >= $QBB[1] && scrooQQ < $QBB[2])
    {
      $('#NAV1').addClass('on').siblings().removeClass('on');
    }
	if (scrooQQ >= $QBB[2] && scrooQQ < $QBB[3])
    {
      $('#NAV2').addClass('on').siblings().removeClass('on');
    }
	if (scrooQQ >= $QBB[3] && scrooQQ < $QBB[4])
    {
      $('#NAV3').addClass('on').siblings().removeClass('on');
    }
	if (scrooQQ >= $QBB[4] && scrooQQ < $QBB[5])
    {
      $('#NAV4').addClass('on').siblings().removeClass('on');
    }
  }
});
$(function(){
	$('#NAV1').click(function(){
		$('html,body').addClass("on").animate({scrollTop:$('#home').offset().top}, 800);
	}); 
	
	$('#NAV2').click(function(){
		$('html,body').animate({scrollTop:$('#tool').offset().top}, 500);
	});
	
	$('#NAV3').click(function(){
		$('html,body').animate({scrollTop:$('#works').offset().top}, 800);
	});
	$('#NAV4').click(function(){
		$('html,body').animate({scrollTop:$('#contact').offset().top}, 800);
	});
})