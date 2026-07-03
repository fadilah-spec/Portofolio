document.addEventListener("DOMContentLoaded", () => {
  // === 1. RESPONSIVE NAVIGATION MENU (Hamburger Menu) ===
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Menutup menu ketika salah satu link diklik (opsional, mempermudah user)
  document.querySelectorAll(".nav-item").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // === 2. FORM VALIDATION ===
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah form reload otomatis jika gagal validasi

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validasi Nama
    if (name === "") {
      document.getElementById("nameError").innerText =
        "Nama tidak boleh kosong.";
      isValid = false;
    } else {
      document.getElementById("nameError").innerText = "";
    }

    // Validasi Email (Regex standar)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Email harus valid.";
      isValid = false;
    } else {
      document.getElementById("emailError").innerText = "";
    }

    // Validasi Pesan (Minimal 10 Karakter)
    if (message.length < 10) {
      document.getElementById("messageError").innerText =
        "Pesan minimal 10 karakter.";
      isValid = false;
    } else {
      document.getElementById("messageError").innerText = "";
    }

    // Jika semua validasi lolos
    if (isValid) {
      alert("Terima kasih! Pesan Anda berhasil divalidasi dan siap dikirim.");
      contactForm.reset();
    }
  });

  // === 3. SMOOTH SCROLLING (Fallback & Highlighting Active Class) ===
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href").includes(current)) {
        item.classList.add("active");
      }
    });
  });

  // === 4. BACK TO TOP BUTTON ===
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    // Tombol muncul jika di-scroll lebih dari 300px kebawah
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Membuat scroll ke atas berjalan dengan halus
    });
  });
});
