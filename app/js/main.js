$(function () {
	$(".accordeon dd").hide().prev().click(function () {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
		$("dl").removeClass("open");
		$(this).parent().toggleClass("open");
	});

	$("#example_id").ionRangeSlider({
		min: 500,
		max: 10000,
		from: 4100,
		postfix: "$"
	});
});


document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.querySelector(".header__menu-btn");
	const box = document.querySelector(".header__box");
	const boxClose = document.querySelector(".header__box-close");
	const body = document.body;
	const links = box.querySelectorAll("a");
	menuBtn.addEventListener("click", () => {
		box.classList.add("open");
		body.classList.add("dark-bg");
	});

	boxClose.addEventListener("click", () => {
		box.classList.remove("open");
		body.classList.remove("dark-bg");
	});

	links.forEach(link => {
		link.addEventListener("click", () => {
			box.classList.remove("open");
			body.classList.remove("dark-bg");
		});
	});
});

