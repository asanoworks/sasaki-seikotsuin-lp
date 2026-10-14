document.addEventListener('DOMContentLoaded', function(){
	// FAQ: permit zero or one expanded answer, with matching visual and ARIA state.
	var faqButtons = document.querySelectorAll('.lp-faq-toggle');
	faqButtons.forEach(function(button){
		button.addEventListener('click', function(){
			var shouldOpen = button.getAttribute('aria-expanded') !== 'true';
			faqButtons.forEach(function(other){
				var open = other === button && shouldOpen;
				other.setAttribute('aria-expanded', String(open));
				document.getElementById(other.getAttribute('aria-controls')).hidden = !open;
				other.querySelector('span').textContent = open ? '−' : '＋';
				other.closest('.lp-faq-item').classList.toggle('lp-faq-open', open);
			});
		});
	});
});
