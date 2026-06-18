function openRegisterModal(eventData) {
  const modal = document.getElementById("registerModal");

  document.getElementById("modalEventName").textContent = eventData.name;
  document.getElementById("modalEventDate").textContent = eventData.date;
  document.getElementById("modalEventTime").textContent = eventData.time;

  const paymentSection = document.getElementById("paymentSection");

  if (eventData.isPaid) {
    paymentSection.classList.remove("hidden");
  } else {
    paymentSection.classList.add("hidden");
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeRegisterModal() {
  document.getElementById("registerModal").classList.add("hidden");
}

document.addEventListener("submit", function (e) {
  if (e.target.id === "registerForm") {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Pendaftaran Berhasil!",
      text: "Pendaftaran berhasil dan akan diinformasikan lebih lanjut melalui email yang telah didaftarkan.",
      confirmButtonColor: "#78555e",
    });

    e.target.reset();
    closeRegisterModal();
  }
});
