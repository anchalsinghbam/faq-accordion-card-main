const faqs = Array.from(document.querySelectorAll(".faq"));

console.log(faqs);
for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", () => {
    faqs[i].classList.toggle("open");
  });
}
