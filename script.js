document.getElementById("toggleSidebar").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    this.innerHTML = "&lt;";
  } else {
    sidebar.style.display = "none";
    this.innerHTML = "&gt;";
  }
});
