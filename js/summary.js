document.addEventListener("DOMContentLoaded", function () {
    const data = JSON.parse(localStorage.getItem("registrationData"));
  
    if (data) {
      document.getElementById("nama").textContent = data.name;
      document.getElementById("email").textContent = data.email;
      document.getElementById("event").textContent = data.event;
      document.getElementById("jumlah").textContent = data.ticketCount;
      document.getElementById("total").textContent = `Rp ${data.totalPrice.toLocaleString("id-ID")}`;
    } else {
      document.getElementById("summary").innerHTML = "<p class='text-danger'>Tidak ada data pendaftaran ditemukan.</p>";
    }
  
    document.getElementById("clearData").addEventListener("click", function () {
      localStorage.removeItem("registrationData");
      location.reload();
    });
  });
  