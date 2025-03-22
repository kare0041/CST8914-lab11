const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.addEventListener("click", toggleAccordion);
  accordion.addEventListener("keydown", handleKeyPress);
});

function toggleAccordion() {
  this.classList.toggle("is-open");
  let content = this.nextElementSibling;
  let isExpanded = this.classList.contains("is-open");

  this.setAttribute("aria-expanded", isExpanded);
  content.setAttribute("aria-hidden", !isExpanded);

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleAccordion.call(this);
  }
}
