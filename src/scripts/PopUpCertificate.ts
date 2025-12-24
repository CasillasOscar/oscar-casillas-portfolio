const dialog = document.getElementById("certificate-modal") as HTMLDialogElement;
const img = document.getElementById("modal-image") as HTMLImageElement;
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

  if (button && button.dataset.image) {
    img.src = button.dataset.image;
    dialog.showModal();
  }
});