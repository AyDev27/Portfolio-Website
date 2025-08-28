const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		// remove active class from all buttons
		filterBtns.forEach((b) => b.classList.remove("active"));
		btn.classList.add("active");

		const filter = btn.getAttribute("data-filter");

		portfolioItems.forEach((item) => {
			if (filter === "all" || item.classList.contains(filter)) {
				item.classList.remove("hide");
			} else {
				item.classList.add("hide");
			}
		});
	});
});
