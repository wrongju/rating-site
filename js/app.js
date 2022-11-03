let ratings = document.querySelectorAll('label');
let btn = document.getElementById('btn');
let wrapper = document.querySelector('.wrapper-register');
let thankyou = document.querySelector('.thankyou');
let span = document.getElementById('rating');


for (let i = 0; i < ratings.length; i++) {

	ratings[i].addEventListener('click', () => {
		let ratingsres = ratings[i].textContent;
		
			for (let i = 0; i < ratings.length; i++) {
			ratings[i].classList.remove('selected');
			}
		ratings[i].classList.add('selected');
		
		btn.addEventListener('click', () => {
			wrapper.style.display = 'none'
			thankyou.style.display = 'block'
			span.textContent = ratingsres;
		})
	})

}