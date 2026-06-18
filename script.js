const portfolioItems = [
  {
    category: "branding",
    label: "Logo Design",
    title: "Dr Hanaa Logo",
    description: "Nutrition and food science identity mark.",
    type: "image",
    src: "assets/designs/vr-3d/logos/H - 4.png",
  },
  {
    category: "branding",
    label: "Logo Design",
    title: "Arabic Brand Logo",
    description: "Arabic typography logo direction.",
    type: "image",
    src: "assets/designs/vr-3d/logos/IMG_4702.jpg",
  },
  {
    category: "branding",
    label: "Logo Design",
    title: "Local Brand Mark",
    description: "Logo concept from Andrea's identity collection.",
    type: "image",
    src: "assets/designs/vr-3d/logos/Screenshot 2025-01-01 175420 (1).png",
  },
  {
    category: "branding",
    label: "Logo Design",
    title: "Minimal Logo Concept",
    description: "Clean logo exploration for a modern brand.",
    type: "image",
    src: "assets/designs/vr-3d/logos/Screenshot 2026-06-13 212020.png",
  },
  {
    category: "branding",
    label: "Logo Design",
    title: "Medical Brand Logo",
    description: "Logo concept for a professional service identity.",
    type: "image",
    src: "assets/designs/vr-3d/logos/Screenshot 2026-06-07 182648.png",
  },
  {
    category: "branding",
    label: "Logo Design",
    title: "A Mark Logo",
    description: "Monogram-style brand mark with transparent treatment.",
    type: "image",
    src: "assets/designs/vr-3d/logos/Screenshot_2025-01-12_200853-removebg-preview (1).png",
  },
  {
    category: "branding",
    label: "Logo Design",
    title: "Vina Logo",
    description: "Refined logo concept with clean line work.",
    type: "image",
    src: "assets/designs/vr-3d/logos/vina logo-01 (2).png",
  },
  {
    category: "branding",
    label: "Business Card",
    title: "Easy Talk Card 01",
    description: "Business card layout and contact identity direction.",
    type: "image",
    src: "assets/designs/vr-3d/bussines card/IMG_4705.jpg",
  },
  {
    category: "branding",
    label: "Business Card",
    title: "Easy Talk Card 02",
    description: "Alternate business card presentation.",
    type: "image",
    src: "assets/designs/vr-3d/bussines card/IMG_4706.jpg",
  },
  {
    category: "branding",
    label: "Meraki Brand",
    title: "Meraki Brand Board",
    description: "Candle brand visual identity and product direction.",
    type: "image",
    src: "assets/designs/vr-3d/meraki/meraki brand.jpg",
  },
  {
    category: "branding",
    label: "Meraki Brand",
    title: "Meraki Brand Mockup",
    description: "Packaging and visual identity mockup.",
    type: "image",
    src: "assets/designs/vr-3d/meraki/meraki brand.png",
  },
  {
    category: "branding",
    label: "Social Media",
    title: "Meraki Instagram Post",
    description: "Social post for product mood and atmosphere.",
    type: "image",
    src: "assets/designs/vr-3d/meraki/instgram posts.jpg",
  },
  {
    category: "branding",
    label: "Social Media",
    title: "Meraki Carousel",
    description: "Carousel post design for brand storytelling.",
    type: "image",
    src: "assets/designs/vr-3d/meraki/Instagram Carousel Posts 1 - 1.jpg",
  },
  {
    category: "branding",
    label: "Social Media",
    title: "Breath In",
    description: "Lifestyle social post for Meraki candles.",
    type: "image",
    src: "assets/designs/vr-3d/meraki/Instgram Posts - Breath in.jpg",
  },
  {
    category: "branding",
    label: "Social Media",
    title: "Now You Can",
    description: "Product-focused Meraki campaign post.",
    type: "image",
    src: "assets/designs/vr-3d/meraki/Now You Can - 5.jpg",
  },
  {
    category: "branding",
    label: "Social Media",
    title: "Now You Can Collab",
    description: "Collaborative campaign layout for Meraki.",
    type: "image",
    src: "assets/designs/vr-3d/meraki/Now You Can - Collab.jpg",
  },
  {
    category: "marketing",
    label: "Stella Poster",
    title: "Stella Sunday",
    description: "Summer promotional poster for Stella.",
    type: "image",
    src: "assets/designs/vr-3d/Stella posters/Add a Heading - 1.jpg",
  },
  {
    category: "marketing",
    label: "Stella Poster",
    title: "Stella Campaign 02",
    description: "Marketing poster for property communication.",
    type: "image",
    src: "assets/designs/vr-3d/Stella posters/Add a Heading - 2.jpg",
  },
  {
    category: "marketing",
    label: "Stella Poster",
    title: "Stella Campaign 03",
    description: "Promotional poster with campaign messaging.",
    type: "image",
    src: "assets/designs/vr-3d/Stella posters/Add a Heading - 3.jpg",
  },
  {
    category: "marketing",
    label: "Christmas Campaign",
    title: "Merry Christmas 01",
    description: "Seasonal campaign visual for Stella.",
    type: "image",
    src: "assets/designs/vr-3d/Stella posters/MERRY - 1.jpg",
  },
  {
    category: "marketing",
    label: "Christmas Campaign",
    title: "Merry Christmas 02",
    description: "Festive promotional poster design.",
    type: "image",
    src: "assets/designs/vr-3d/Stella posters/MERRY - 2.jpg",
  },
  {
    category: "marketing",
    label: "Offer Poster",
    title: "Stella Offer",
    description: "Offer-based promotional campaign visual.",
    type: "image",
    src: "assets/designs/vr-3d/Stella posters/OFFER - 1.jpg",
  },
  {
    category: "uiux",
    label: "UX/UI",
    title: "Mobile UI Dashboard",
    description: "Mobile app dashboard screen design.",
    type: "image",
    src: "assets/designs/vr-3d/UI-UX/Screenshot 2023-12-16 211817.png",
  },
  {
    category: "uiux",
    label: "UX/UI",
    title: "Mobile UI Flow",
    description: "Interface flow and screen composition.",
    type: "image",
    src: "assets/designs/vr-3d/UI-UX/Screenshot 2023-12-16 190259.png",
  },
  {
    category: "uiux",
    label: "UX/UI",
    title: "Mobile Login Screen",
    description: "App screen layout and interaction direction.",
    type: "image",
    src: "assets/designs/vr-3d/UI-UX/Screenshot 2023-12-16 061909.png",
  },
  {
    category: "uiux",
    label: "UX/UI",
    title: "Mobile Profile Screen",
    description: "Profile and user information screen concept.",
    type: "image",
    src: "assets/designs/vr-3d/UI-UX/Screenshot 2023-12-16 061849.png",
  },
  {
    category: "animation2d",
    label: "2D Animation",
    title: "2D Animation Video",
    description: "Animated storytelling and 2D scene movement.",
    type: "video",
    src: "assets/designs/vr-3d/2d animation/project 2d video (2).mp4",
  },
  {
    category: "animation2d",
    label: "Character Rig",
    title: "Character Rig GIF",
    description: "Rigged character motion for animation.",
    type: "image",
    src: "assets/designs/vr-3d/2d animation/man2 rig (2).gif",
  },
  {
    category: "animation2d",
    label: "2D Scene",
    title: "Global Warming City",
    description: "Illustrated city environment for a 2D project.",
    type: "image",
    src: "assets/designs/vr-3d/2d animation/Screenshot 2023-05-21 030808.png",
  },
  {
    category: "animation2d",
    label: "2D Scene",
    title: "Character Frame",
    description: "Character and scene frame from the animation project.",
    type: "image",
    src: "assets/designs/vr-3d/2d animation/Screenshot 2023-05-21 035115.png",
  },
  {
    category: "animation2d",
    label: "2D Scene",
    title: "Storyboard Frame",
    description: "Storyboard frame from the 2D animation project.",
    type: "image",
    src: "assets/designs/vr-3d/2d animation/Screenshot 2023-05-21 094747.png",
  },
  {
    category: "animation2d",
    label: "2D Scene",
    title: "Animation Frame 01",
    description: "Additional visual frame from the animation project.",
    type: "image",
    src: "assets/designs/vr-3d/2d animation/Screenshot 2025-02-27 201708.png",
  },
  {
    category: "animation2d",
    label: "2D Scene",
    title: "Animation Frame 02",
    description: "Additional visual frame from the animation project.",
    type: "image",
    src: "assets/designs/vr-3d/2d animation/Screenshot 2025-02-27 201713.png",
  },
  {
    category: "animation2d",
    label: "2D Scene",
    title: "Animation Frame 03",
    description: "Additional visual frame from the animation project.",
    type: "image",
    src: "assets/designs/vr-3d/2d animation/Screenshot 2025-02-27 201744.png",
  },
  {
    category: "animation3d",
    label: "3D Animation",
    title: "3D Animation Video 01",
    description: "Animated 3D environment and digital scene.",
    type: "video",
    src: "assets/designs/vr-3d/3d animation/3d video 1 (1).mp4",
  },
  {
    category: "animation3d",
    label: "3D Animation",
    title: "3D Animation Video 02",
    description: "3D scene movement and environment exploration.",
    type: "video",
    src: "assets/designs/vr-3d/3d animation/3d video 2 (1).mp4",
  },
  {
    category: "animation3d",
    label: "3D Animation",
    title: "3D Animation Video 03",
    description: "Additional 3D animation project clip.",
    type: "video",
    src: "assets/designs/vr-3d/3d animation/3d video 3 (1).mp4",
  },
  {
    category: "vr",
    label: "VR Unity",
    title: "VR Space Preview",
    description: "Screenshot from the VR solar system learning project.",
    type: "image",
    src: "assets/designs/vr-3d/vr project/Screenshot 2024-02-07 231355.png",
  },
  {
    category: "vr",
    label: "VR Unity",
    title: "Moon Texture Unity",
    description: "Unity video showing moon texture development.",
    type: "video",
    src: "assets/designs/vr-3d/vr project/moon texture unity (1).mp4",
  },
  {
    category: "vr",
    label: "VR Unity",
    title: "Mars Texture Unity",
    description: "Unity video showing Mars texture development.",
    type: "video",
    src: "assets/designs/vr-3d/vr project/mars texture unity (1).mp4",
  },
  {
    category: "vr",
    label: "VR Demo",
    title: "Oculus VR Demo",
    description: "Immersive VR project demo recording.",
    type: "video",
    src: "assets/designs/vr-3d/vr project/com.oculus.vrshell-20240521-153644 (1).mp4",
  },
  {
    category: "game",
    label: "Game Development",
    title: "Lost Portal Game Video",
    description: "Gameplay and interaction preview from the Unity game.",
    type: "video",
    src: "assets/designs/vr-3d/game developement-lost portal coin/game.mp4",
  },
  {
    category: "game",
    label: "Game Development",
    title: "Map 1",
    description: "Map selection visual from The Lost Portal Coin.",
    type: "image",
    src: "assets/designs/vr-3d/game developement-lost portal coin/map1 (1).png",
  },
  {
    category: "game",
    label: "Game Development",
    title: "Map 2",
    description: "Second map visual from The Lost Portal Coin.",
    type: "image",
    src: "assets/designs/vr-3d/game developement-lost portal coin/MAP2 (1).png",
  },
  {
    category: "game",
    label: "Game Development",
    title: "Map 3",
    description: "Third map visual from The Lost Portal Coin.",
    type: "image",
    src: "assets/designs/vr-3d/game developement-lost portal coin/map3 (1).png",
  },
  {
    category: "game",
    label: "Game Development",
    title: "Gameplay Screenshot 01",
    description: "Gameplay environment screenshot.",
    type: "image",
    src: "assets/designs/vr-3d/game developement-lost portal coin/Screenshot 2025-01-10 165606.png",
  },
  {
    category: "game",
    label: "Game Development",
    title: "Gameplay Screenshot 02",
    description: "Gameplay environment screenshot.",
    type: "image",
    src: "assets/designs/vr-3d/game developement-lost portal coin/Screenshot 2025-01-10 165534.png",
  },
  {
    category: "game",
    label: "Game Development",
    title: "Gameplay Screenshot 03",
    description: "Gameplay environment screenshot.",
    type: "image",
    src: "assets/designs/vr-3d/game developement-lost portal coin/Screenshot 2025-01-10 165706.png",
  },
];

const filterButtons = document.querySelectorAll(".filter-button");
const projectGrid = document.querySelector(".project-grid");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxVideo = document.querySelector(".lightbox video");
const lightboxClose = document.querySelector(".lightbox-close");
let projectCards = [];
let revealObserver;

renderProjects();
setupRevealAnimations();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    projectCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.style.opacity = visible ? "1" : "0";
      card.style.transform = visible ? "" : "scale(0.96)";
      window.setTimeout(() => {
        card.hidden = !visible;
      }, visible ? 0 : 160);
    });
  });
});

function renderProjects() {
  projectGrid.innerHTML = portfolioItems.map(createProjectCard).join("");
  projectCards = Array.from(document.querySelectorAll(".project-card"));

  projectCards.forEach((card) => {
    card.tabIndex = 0;
    card.addEventListener("click", () => openLightbox(card));
    card.addEventListener("pointermove", (event) => tiltCard(event, card));
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(card);
      }
    });
  });
}

function createProjectCard(item) {
  const media =
    item.type === "video"
      ? `<video src="${item.src}" autoplay muted loop playsinline preload="metadata"></video>`
      : `<img src="${item.src}" alt="${item.title}">`;

  return `
    <article class="project-card" data-category="${item.category}">
      ${media}
      <div>
        <span>${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `;
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(
    ".hero-copy, .hero-visual, .stats-band div, .section-heading, .intro-grid > *, .service-card, .project-card, .timeline article, .skill-cloud span, .goals-section > *, .contact-section > *"
  );

  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
  });

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

function tiltCard(event, card) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const rotateY = ((x / rect.width) - 0.5) * 7;
  const rotateX = ((y / rect.height) - 0.5) * -7;

  card.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function openLightbox(card) {
  const media = card.querySelector("img, video");
  const isVideo = media.tagName.toLowerCase() === "video";

  lightboxImage.classList.toggle("active", !isVideo);
  lightboxVideo.classList.toggle("active", isVideo);

  if (isVideo) {
    lightboxVideo.src = media.currentSrc || media.src;
    lightboxVideo.play();
  } else {
    lightboxImage.src = media.src;
    lightboxImage.alt = media.alt;
  }

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.classList.remove("active");
  lightboxVideo.pause();
  lightboxVideo.src = "";
  lightboxVideo.classList.remove("active");
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});
