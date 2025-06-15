document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById("toggleSidebar");
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      const sidebar = document.getElementById("sidebar");
      if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        this.innerHTML = "<";
      } else {
        sidebar.style.display = "none";
        this.innerHTML = ">";
      }
    });
  }

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
});

const blogs = [
  {
    title: "Tips Merawat Motor Harian",
    date: "10 Juni 2025",
    content: "Merawat motor tidak harus mahal. Mulai dari rutin memanaskan mesin, periksa oli, dan tekanan ban setiap minggu. Lihat panduan lengkapnya di sini!"
  },
  {
    title: "Kenali Tanda Rem Bermasalah",
    date: "5 Juni 2025",
    content: "Rem yang berbunyi atau terasa blong bisa jadi tanda serius. Jangan tunggu sampai kecelakaan! Ketahui apa saja tanda rem bermasalah."
  },
  {
    title: "Ganti Oli Sendiri, Gampang Kok!",
    date: "1 Juni 2025",
    content: "Ganti oli motor bisa kamu lakukan sendiri di rumah hanya dengan alat sederhana. Yuk, pelajari langkah-langkah mudahnya!"
  }
];

const blogList = document.getElementById('blog-list');
const blogDetail = document.getElementById('blog-detail');

blogs.forEach((blog) => {
  const li = document.createElement('li');
  li.className = 'list-group-item list-group-item-action';
  li.innerHTML = `<strong>${blog.title}</strong><br><small class="text-muted">${blog.date}</small>`;
  li.addEventListener('click', () => {
    blogDetail.innerHTML = `
      <h3>${blog.title}</h3>
      <p class="text-muted">${blog.date}</p>
      <p>${blog.content}</p>
    `;
  });
  blogList.appendChild(li);
});
