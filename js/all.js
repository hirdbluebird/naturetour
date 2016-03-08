$(document).ready(function() {

	// adaptive slider width
	var sliderWidth = $('.mask').width();
	$('.mask').css({'height' : sliderWidth/2.7 + 'px'});
	$(window).resize(function() {
		var sliderWidth = $('.mask').width();
		$('.mask').css({'height' : sliderWidth/2.7 + 'px'});
	});

	//tab buttons trigger in posts area
	$('ul.post-tabs li').on('click', function(event) {
		if(!$(event.target).is('active-tab')) {
			$(this).addClass('active-tab').siblings().removeClass('active-tab');
		};
	});

	//sidebar and main content same column width
	var mainContentHeight = $('.main-content').height();
	var sideBarHeight = $('.sidebar').height();
	if (mainContentHeight > sideBarHeight) {
		$('.sidebar').css({'height': (mainContentHeight+17) + 'px'});
	} else {
		$('.main-content').css({'height': (sideBarHeight+17) + 'px'});
	}

	//
	//slider
	//
	var slideCount = $('.slide-container .slide').size(); 
	var count = 0;
	while (count < slideCount) {
		$('ul.triggers').append('<li>' + (count + 1) + '</li>'); //adds trigger buttons to html depending on slides number
		count = count + 1;
	}

	//adding class to trigger, which index match with slide index
	function lightTrigger(index) {
		$('ul.triggers li').removeClass('active-trigger').eq(index).addClass('active-trigger');
	};

	//when page loaded, add showing first slide and lights first trigger
	$('.slide-container .slide').first().addClass('active-slide');
	lightTrigger(0);

	//switch slides, equal to clicked trigger
	$('ul.triggers li').on('click', function() {
		var triggerIndex = $(this).index();
		lightTrigger(triggerIndex);
		$('.slide-container .slide').removeClass('active-slide').eq(triggerIndex).addClass('active-slide');
	});


	slideCount = slideCount - 1;

	function startSlide() {
		var slideAutoChange = setInterval(function() {
			var activeSlideIndex = $('.slide-container .active-slide').index();
			if ( slideCount === activeSlideIndex) {
				$('.slide-container .slide').removeClass('active-slide').first().addClass('active-slide');
				lightTrigger(0);
			} else {
				$('.slide-container .active-slide').removeClass('active-slide').next().addClass('active-slide');
				lightTrigger(activeSlideIndex + 1);
			};
		}, 1000);
	}

	function stopSlide() {
		var stopSlideChange = clearInterval(slideAutoChange);
	}

	startSlide();
	stopSlide();
	
	$('.slide-container .slide')
		.mouseover(function() {
			clearInterval(slideAutoChange);
		})
		.mouseout(function() {
			startSlide();
		});


});