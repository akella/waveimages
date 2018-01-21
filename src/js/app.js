import ImageLoader from './ImageLoad';

// $('.js-loadme').each(function(index,el) {
//   let img = new ImageLoader($(el));
// });



var targets = document.querySelectorAll('.js-loadme');

var options = {
  rootMargin: '0px',
  threshold: [0,1]
};

var observer = new IntersectionObserver(items => {
  // console.log(items);
  items.forEach(el => {

  	if(el.isIntersecting && el.intersectionRatio>0) {
	  		if(!$(el.target).hasClass('is-init')) {
	  			$(el.target).addClass('is-init');
	  			new ImageLoader($(el.target));
	  			console.log('intersected',el.target);
	  		}
  	}
  });
}, options);

for (var i = 0; i < targets.length; i++) {
  observer.observe(targets[i]);
}
