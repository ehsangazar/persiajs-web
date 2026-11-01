const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const icon = question.querySelector("i");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // بستن همه
    items.forEach((i) => {
      i.classList.remove("active");
      const ic = i.querySelector("i");
      ic.classList.remove("fa-chevron-up");
      ic.classList.add("fa-chevron-down");
    });

    // اگر قبلاً باز نبوده، بازش کن
    if (!isActive) {
      item.classList.add("active");
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    }
  });
});
