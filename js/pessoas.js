var el = $("h2");
var split = new SplitText(el);

$(split.chars).each(function(i){
	TweenMax.staggerFrom($(this), 0.75, {
		opacity: 0,
		delay: i * .1,
    x:30,
    y: 50,
    rotationZ: 90,
    transformOrigin:"100% 100%",
    ease: Expo.easeOut,
		yoyo: true,
		repeat: 0
	});
});
