window.addEventListener('scroll',
	function(){
		const header = document.querySelector(".header");
		header.classList.toggle("script", window.scrollY > 100);
	})