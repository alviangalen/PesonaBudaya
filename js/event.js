// js/events.js

document.addEventListener("DOMContentLoaded", function () {
    const detailButtons = document.querySelectorAll(".btn-detail");
    detailButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const eventTitle = this.getAttribute("data-title");
        const eventDesc = this.getAttribute("data-desc");
  
        document.getElementById("modalTitle").textContent = eventTitle;
        document.getElementById("modalDesc").textContent = eventDesc;
      });
    });
  });
  