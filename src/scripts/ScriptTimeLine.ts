  const checkboxes = document.querySelectorAll('input[name="filter"]');
  const items = document.querySelectorAll("li[data-category]");

  function filterItems() {
    const checkedCategories = Array.from(checkboxes)
      .filter((cb) => (cb as HTMLInputElement).checked)
      .map((cb) => (cb as HTMLInputElement).value);

    items.forEach((item) => {
      const category = (item as HTMLElement).dataset.category;
      if (category && checkedCategories.includes(category)) {
        (item as HTMLElement).style.display = "";
      } else {
        (item as HTMLElement).style.display = "none";
      }
    });
  }

  checkboxes.forEach((cb) => {
    cb.addEventListener("change", filterItems);
  });
