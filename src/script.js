/*------------------------------------------------------------------
	    Navbar Toggle
	------------------------------------------------------------------*/

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const navItem = document.getElementById('menu')

btn.addEventListener('click', () => {
	btn.classList.toggle('open')
	nav.classList.toggle('flex')
	nav.classList.toggle('hidden')
});
navItem.addEventListener('click', () => {
	navItem.classList.toggle('hidden')
	btn.classList.toggle('open')
});

/*------------------------------------------------------------------
    Contact
------------------------------------------------------------------*/

var toggleInputContainer = function (input) {
	if (input.value != "") {
		input.classList.add('filled');
	} else {
		input.classList.remove('filled');
	}
}

var labels = document.querySelectorAll('.label');
for (var i = 0; i < labels.length; i++) {
	labels[i].addEventListener('click', function () {
		this.previousElementSibling.focus();
	});
}

window.addEventListener("load", function () {
	var inputs = document.getElementsByClassName("input");
	for (var i = 0; i < inputs.length; i++) {
		console.log('looped');
		inputs[i].addEventListener('keyup', function () {
			toggleInputContainer(this);
		});
		toggleInputContainer(inputs[i]);
	}
})

$(function () {
	'use strict';

	/*------------------------------------------------------------------
		    window onload
	------------------------------------------------------------------*/
	window.onload = function () {
		window.setTimeout(
			function () {
				window.scrollTo(0, 0);
			},
			10
		);
	};


	/*------------------------------------------------------------------
	    Scroll to Top
	------------------------------------------------------------------*/
	var btn = $('.scroll-to-top');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '300');
	});

	/*------------------------------------------------------------------
	    Sticky Navbar
	------------------------------------------------------------------*/
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 300) {
			$('#navbar').addClass('sticky-menu');
		} else {
			$('#navbar').removeClass('sticky-menu');
		}
	});

})