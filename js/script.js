// script.js

document.addEventListener("DOMContentLoaded", () => {
    // REGISTER PAGE LOGIC
    const registerForm = document.getElementById("registerForm");
    const ticketInput = document.getElementById("jumlahTiket");
    const totalHarga = document.getElementById("totalHarga");
    const hargaPerTiket = 200000;
  
    if (registerForm) {
      ticketInput.addEventListener("input", () => {
        const jumlah = parseInt(ticketInput.value) || 0;
        totalHarga.textContent = `Rp ${(jumlah * hargaPerTiket).toLocaleString("id-ID")}`;
      });
  
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nama = document.getElementById("namaLengkap").value;
        const email = document.getElementById("email").value;
        const event = document.getElementById("pilihanEvent").value;
        const jumlahTiket = parseInt(ticketInput.value);
        const total = jumlahTiket * hargaPerTiket;
  
        const data = {
          nama,
          email,
          event,
          jumlahTiket,
          total
        };
  
        localStorage.setItem("pendaftaran", JSON.stringify(data));
        window.location.href = "summary.html";
      });
    }
  
    // SUMMARY PAGE LOGIC
    const summaryContent = document.getElementById("summaryContent");
    const clearDataBtn = document.getElementById("clearData");
  
    if (summaryContent) {
      const data = JSON.parse(localStorage.getItem("pendaftaran"));
      if (data) {
        summaryContent.innerHTML = `
          <div class="card">
            <div class="card-body">
              <p><strong>Nama:</strong> ${data.nama}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Event:</strong> ${data.event}</p>
              <p><strong>Jumlah Tiket:</strong> ${data.jumlahTiket}</p>
              <p><strong>Total Harga:</strong> Rp ${data.total.toLocaleString("id-ID")}</p>
            </div>
          </div>`;
      } else {
        summaryContent.innerHTML = `<p class="text-center">Tidak ada data pendaftaran.</p>`;
      }
    }
  
    if (clearDataBtn) {
      clearDataBtn.addEventListener("click", () => {
        localStorage.removeItem("pendaftaran");
        location.reload();
      });
    }
  });
  