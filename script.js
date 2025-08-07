document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi Partikel.js untuk animasi background
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#66fcf1",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#45a29e",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }

  // Animasi Parallax pada foto
  const parallaxItems = document.querySelectorAll(".parallax-item");

  window.addEventListener("scroll", () => {
    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const scrollPos = window.pageYOffset;
      const itemOffset = rect.top + scrollPos;
      const windowHeight = window.innerHeight;
      const itemHeight = rect.height;

      // Hitung persentase posisi item di viewport
      const itemCenter = itemOffset + itemHeight / 2;
      const viewportCenter = scrollPos + windowHeight / 2;
      const diff = viewportCenter - itemCenter;

      // Sesuaikan faktor parallax
      const parallaxFactor = 0.1;
      const translateY = diff * parallaxFactor;

      const img = item.querySelector("img");
      if (img) {
        img.style.transform = `translateY(${translateY}px)`;
      }
    });
  });
});
