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

const tabs = document.querySelectorAll('.nav-link');
  const panes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.style.display = 'none');

      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).style.display = 'block';
  });
});