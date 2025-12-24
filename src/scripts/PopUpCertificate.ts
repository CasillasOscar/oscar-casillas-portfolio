const dialog = document.getElementById("certificate-modal") as HTMLDialogElement;
const img = document.getElementById("modal-image") as HTMLImageElement;
const text = document.getElementById("modal-text") as HTMLElement;
const closeBtn = document.getElementById("close-modal");

// Cerrar modal
closeBtn?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

// Delegación de eventos para abrir el modal desde cualquier botón con la clase .view-certificate-btn
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const button = target.closest(".view-certificate-btn") as HTMLElement;

  if (button) {
    const imageSrc = button.dataset.image;
    if (imageSrc) {
      img.src = imageSrc;
      img.style.display = "block";
      if (text) text.style.display = "none";
    } else {
      img.style.display = "none";
      if (text) text.style.display = "block";
    }
    dialog.showModal();
  }
});