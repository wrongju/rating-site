let ratings = document.querySelectorAll('label');
let btn = document.getElementById('btn');
let wrapper = document.querySelector('.wrapper-register');
let thankyou = document.querySelector('.thankyou');
let span = document.getElementById('rating');

ratings.forEach(el => {
	el.addEventListener('click', () => {
		let ratingsres = el.textContent;
		el.classList.remove('selected');
		el.classList.add('selected');
	
		btn.addEventListener('click', () => {
			wrapper.style.display = 'none'
			thankyou.style.display = 'block'
			span.textContent = ratingsres;
		})
	})
})

// OR

// for (let i = 0; i < ratings.length; i++) {

// 	ratings[i].addEventListener('click', () => {
// 		let ratingsres = ratings[i].textContent;

// 		ratings[i].classList.remove('selected');
// 		ratings[i].classList.add('selected');

// 		btn.addEventListener('click', () => {
// 			wrapper.style.display = 'none'
// 			thankyou.style.display = 'block'
// 			span.textContent = ratingsres;
// 		})
// 	})

// }