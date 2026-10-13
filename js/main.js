// Header/Hero: placeholder behavior
document.addEventListener('DOMContentLoaded', function(){
	// If LINE link not provided, keep button inert and mark for confirmation
	var lineBtn = document.querySelector('.btn-line');
	if(lineBtn && !lineBtn.dataset.line){
		lineBtn.addEventListener('click', function(e){ e.preventDefault(); alert('LINEリンクが未設定です。文言/リンクを確認してください。'); });
	}
	var telBtn = document.querySelector('.btn-tel');
	if(telBtn && telBtn.getAttribute('href')==='tel:'){
		telBtn.addEventListener('click', function(e){ e.preventDefault(); alert('電話番号が未設定です。確認してください。'); });
	}

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

