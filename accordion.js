const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion, index) => {
  accordion.addEventListener("click", toggleAccordion);
  accordion.addEventListener("keydown", (e) => handleKeyboard(e, index));
});

function toggleAccordion(e) {
  const button = e.currentTarget;
  const content = button.nextElementSibling;
  const isOpen = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", String(!isOpen));
  button.classList.toggle("is-open");

  content.style.maxHeight = isOpen ? null : content.scrollHeight + "px";
}

function handleKeyboard(e, index) {
  const key = e.key;
  const total = accordionBtns.length;

  if (key === "ArrowDown") {
    e.preventDefault();
    accordionBtns[(index + 1) % total].focus();
  } else if (key === "ArrowUp") {
    e.preventDefault();
    accordionBtns[(index - 1 + total) % total].focus();
  } else if (key === "Enter" || key === " ") {
    e.preventDefault();
    accordionBtns[index].click();
  }
}
