document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const selectedEvent = document.getElementById("event").value;
      const ticketCount = parseInt(document.getElementById("ticketCount").value);
      const totalPrice = ticketCount * 200000;
  
      const data = {
        name,
        email,
        event: selectedEvent,
        ticketCount,
        totalPrice
      };
  
      localStorage.setItem("registrationData", JSON.stringify(data));
      window.location.href = "summary.html";
    });
  
    document.getElementById("ticketCount").addEventListener("input", function () {
      const count = parseInt(this.value) || 0;
      const total = count * 200000;
      document.getElementById("totalPrice").value = "Rp " + total.toLocaleString("id-ID");
    });
  });
  