// Menangani klik pada hamburger menu
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobile-nav');

        hamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.getElementById('close-btn');
        
        // Ambil semua foto polaroid
        const polaroids = document.querySelectorAll('.polaroid');
        
        // Tambahkan event listener untuk setiap foto
        polaroids.forEach(polaroid => {
            polaroid.addEventListener('click', function() {
                const imgSrc = polaroid.getAttribute('data-img');
                lightboxImg.src = imgSrc; // Set gambar besar sesuai foto yang diklik
                lightbox.classList.add('active'); // Tampilkan lightbox
            });
        });

        // Event listener untuk tombol close
        closeBtn.addEventListener('click', function() {
            lightbox.classList.remove('active'); // Sembunyikan lightbox
        });

        // Menutup lightbox jika mengklik area di luar gambar
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });