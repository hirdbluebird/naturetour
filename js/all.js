$(document).ready(function() {

	var sliderWidth = $('.mask').width();
	$('.mask').css({'height' : sliderWidth/2.7 + 'px'});
	$(window).resize(function() {
		var sliderWidth = $('.mask').width();
		$('.mask').css({'height' : sliderWidth/2.7 + 'px'});
	});

	$('ul.post-tabs li').on('click', function(event) {
		if(!$(event.target).is('active-tab')) {
			$(this).addClass('active-tab').siblings().removeClass('active-tab');
		};
	});

	var mainContentHeight = $('.main-content').height();
	var sideBarHeight = $('.sidebar').height();
	if (mainContentHeight > sideBarHeight) {
		$('.sidebar').css({'height': (mainContentHeight+17) + 'px'});
	} else {
		$('.main-content').css({'height': (sideBarHeight+17) + 'px'});
	}

	var slideCount = $('.slide-container .slide').size();
	var count = 0;
	while (count < slideCount) {
		$('ul.triggers').append('<li>' + (count + 1) + '</li>');
		count = count + 1;
	}

	$('.slide-container .slide').first().addClass('active-slide');
	var activeSlideIndex = $('.slide-container .active-slide').index();
	$('ul.triggers li').eq(activeSlideIndex).addClass('active-trigger');

	$('ul.triggers li').on('click', function() {
		var triggerIndex = $(this).index();
		$(this).addClass('active-trigger').siblings().removeClass('active-trigger');
		$('.slide-container .slide').siblings().removeClass('active-slide');
		$('.slide-container .slide').eq(triggerIndex).addClass('active-slide');
	});

});