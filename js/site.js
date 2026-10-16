(() => {
  const PAGE = document.body.dataset.page || "home";

  const nav = (page) => `
    <ul class="main-menu">
      <li class="${page === "home" ? "current" : ""}"><a href="index.html">Home</a></li>
      <li class="${page === "about" ? "current" : ""}"><a href="about.html">About</a></li>
      <li class="${["education", "health", "school", "projects"].includes(page) ? "current" : ""}">
        <a href="education.html">Programs <i class="fa-solid fa-chevron-down"></i></a>
        <ul>
          <li><a href="education.html">Education Program</a></li>
          <li><a href="health.html">Health Program</a></li>
          <li><a href="school.html">School Project</a></li>
          <li><a href="projects.html">Income Projects</a></li>
        </ul>
      </li>
      <li class="${page === "tours" ? "current" : ""}"><a href="tours.html">Charity Tours</a></li>
      <li class="${page === "gallery" ? "current" : ""}"><a href="gallery.html">Gallery</a></li>
      <li class="${["events", "event-details"].includes(page) ? "current" : ""}"><a href="events.html">Events</a></li>
      <li class="${page === "volunteers" ? "current" : ""}"><a href="volunteers.html">Volunteers</a></li>
      <li class="${page === "faqs" ? "current" : ""}"><a href="faqs.html">FAQs</a></li>
      <li>
        <a href="#">More <i class="fa-solid fa-chevron-down"></i></a>
        <ul>
          <li><a href="#">News</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Our team</a></li>
          <li><a href="#">Coming soon</a></li>
        </ul>
      </li>
      <li class="${page === "contact" ? "current" : ""}"><a href="contact.html">Contact</a></li>
    </ul>`;

  const header = `
  <header class="main-header">
    <div class="header-inner">
      <div class="header-logo">
        <a href="index.html"><img src="images/LOGO-01-1.png" alt="Habari Foundation"></a>
      </div>
      <div class="header-right">
        <div class="header-top">
          <div class="volunteer">
            <div class="volunteer__icon"><i class="fa-solid fa-heart"></i></div>
            <a class="volunteer__text" href="volunteers.html">Become a <span>volunteer</span></a>
          </div>
          <ul class="header-contact">
            <li>
              <div class="icon"><i class="fa-solid fa-phone"></i></div>
              <div>
                <p>Helpline</p>
                <h5><a href="tel:+255754044692">+255 754 044 692</a></h5>
              </div>
            </li>
            <li>
              <div class="icon"><i class="fa-solid fa-envelope"></i></div>
              <div>
                <p>Send email</p>
                <h5><a href="mailto:habarifoundation@gmail.com">habarifoundation@gmail.com</a></h5>
              </div>
            </li>
            <li>
              <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
              <div>
                <p>P.O. Box 7644</p>
                <h5>Moshi, Kilimanjaro</h5>
              </div>
            </li>
          </ul>
        </div>
        <div class="header-bottom">
          <button class="mobile-toggler" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button>
          ${nav(PAGE)}
          <a href="https://gogetfunding.com/school-project-5/" class="header-donate" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-heart"></i> Donate now</a>
        </div>
      </div>
    </div>
  </header>
  <div class="sticky-bar" id="stickyBar">
    <div class="inner">
      <a href="index.html"><img src="images/LOGO-01-1.png" alt="Habari Foundation"></a>
      <div class="header-bottom">
        ${nav(PAGE)}
        <a href="https://gogetfunding.com/school-project-5/" class="header-donate" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-heart"></i> Donate now</a>
      </div>
    </div>
  </div>
  <div class="mobile-nav" id="mobileNav">
    <div class="mobile-nav__overlay"></div>
    <div class="mobile-nav__panel">
      <button class="mobile-nav__close" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
      <a class="logo" href="index.html"><img src="images/LOGO-01-1.png" alt="Habari Foundation"></a>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="education.html">Education Program</a></li>
        <li><a href="health.html">Health Program</a></li>
        <li><a href="school.html">School Project</a></li>
        <li><a href="projects.html">Our Projects</a></li>
        <li><a href="tours.html">Charity Tours</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="volunteers.html">Volunteers</a></li>
        <li><a href="faqs.html">FAQs</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Coming soon</a></li>
        <li><a href="https://gogetfunding.com/school-project-5/" target="_blank" rel="noopener noreferrer">Donate / Sponsor</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
  </div>`;

  const footer = `
  <footer class="site-footer">
    <div class="footer-bg" style="background-image:url('images/client/education/class-group-04.jpg')"></div>
    <div class="container footer-top">
      <div class="footer-grid">
        <div>
          <a class="footer-logo" href="index.html"><img src="images/LOGO-01-1.png" alt="Habari Foundation"></a>
          <p>A nonprofit, faith-based charity founded in 2018 in Moshi, Kilimanjaro, supporting education, health, and community development for children from poor families in Tanzania.</p>
          <a class="footer-btn" href="https://gogetfunding.com/school-project-5/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-heart"></i> Donate now</a>
        </div>
        <div>
          <h4 class="footer-title">Our Program</h4>
          <div class="footer-links">
            <a href="education.html">Education Program</a><br>
            <a href="health.html">Health Program</a><br>
            <a href="school.html">School Project</a><br>
            <a href="projects.html">Coffee &amp; Trees</a><br>
            <a href="tours.html">Charity Tours</a>
          </div>
        </div>
        <div>
          <h4 class="footer-title">Quick Links</h4>
          <div class="footer-links">
            <a href="about.html">About Us</a><br>
            <a href="volunteers.html">Volunteers</a><br>
            <a href="events.html">Events</a><br>
            <a href="gallery.html">Gallery</a><br>
            <a href="faqs.html">FAQs</a><br>
            <a href="donate.html">Sponsor a Child</a><br>
            <a href="contact.html">Contact Us</a>
          </div>
        </div>
        <div>
          <h4 class="footer-title">Get in Touch</h4>
          <div class="footer-contact">
            <p>Habari Foundation</p>
            <p>P.O. Box 7644, Moshi, Kilimanjaro, Tanzania</p>
            <a href="tel:+255754044692">+255 754 044 692</a>
            <a href="mailto:habarifoundation@gmail.com">habarifoundation@gmail.com</a>
            <p>Director: Stan Wilfred</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© ${new Date().getFullYear()} Habari Foundation. All rights reserved.</p>
        <p>Helping today. Helping tomorrow.</p>
      </div>
    </div>
  </footer>`;

  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.outerHTML = header;
  if (footerMount) footerMount.outerHTML = footer;

  const mobileNav = document.getElementById("mobileNav");
  document.querySelectorAll(".mobile-toggler").forEach((btn) =>
    btn.addEventListener("click", () => mobileNav.classList.add("open"))
  );
  mobileNav?.querySelector(".mobile-nav__close")?.addEventListener("click", () => mobileNav.classList.remove("open"));
  mobileNav?.querySelector(".mobile-nav__overlay")?.addEventListener("click", () => mobileNav.classList.remove("open"));

  const sticky = document.getElementById("stickyBar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 180) sticky?.classList.add("show");
    else sticky?.classList.remove("show");
  });

  /* Slider */
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".slider-prev");
  const next = document.querySelector(".slider-next");
  let idx = 0;
  let timer;
  const show = (n) => {
    slides.forEach((s, i) => s.classList.toggle("active", i === n));
    idx = n;
  };
  const start = () => {
    timer = setInterval(() => show((idx + 1) % slides.length), 7000);
  };
  if (slides.length) {
    show(0);
    start();
    next?.addEventListener("click", () => { clearInterval(timer); show((idx + 1) % slides.length); start(); });
    prev?.addEventListener("click", () => { clearInterval(timer); show((idx - 1 + slides.length) % slides.length); start(); });
  }

  /* Hero video: respect reduced motion, otherwise nudge autoplay */
  const heroVideo = document.querySelector(".main-slider__video");
  if (heroVideo) {
    heroVideo.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) heroVideo.pause();
    else heroVideo.play()?.catch(() => {});
  }

  /* Causes carousel + filters */
  const track = document.querySelector(".causes-track");
  const viewport = document.querySelector(".causes-carousel");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const allCards = [...document.querySelectorAll(".cause-card")];
  let causeIndex = 0;
  const step = () => {
    const card = allCards.find((c) => !c.classList.contains("is-hidden"));
    if (!card) return 400;
    const gap = 30;
    return card.getBoundingClientRect().width + gap;
  };
  const visibleCards = () => allCards.filter((c) => !c.classList.contains("is-hidden"));
  const maxCause = () => {
    if (!viewport) return 0;
    const vis = visibleCards();
    const total = vis.length * step() - 30;
    const extra = Math.max(0, total - viewport.clientWidth);
    return Math.max(0, Math.round(extra / step()));
  };
  const renderCause = () => {
    if (!track) return;
    causeIndex = Math.max(0, Math.min(causeIndex, maxCause()));
    track.style.transform = `translateX(${-causeIndex * step()}px)`;
  };
  const nextCause = () => {
    causeIndex += 1;
    if (causeIndex > maxCause()) causeIndex = 0;
    renderCause();
  };
  const prevCause = () => {
    causeIndex -= 1;
    if (causeIndex < 0) causeIndex = maxCause();
    renderCause();
  };
  document.querySelectorAll(".causes-next, .causes-arrow--next").forEach((btn) => btn.addEventListener("click", nextCause));
  document.querySelectorAll(".causes-prev, .causes-arrow--prev").forEach((btn) => btn.addEventListener("click", prevCause));
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active-btn"));
      btn.classList.add("active-btn");
      const cat = btn.dataset.filter;
      allCards.forEach((c) => {
        const match = cat === "all" || c.dataset.cat === cat;
        c.classList.toggle("is-hidden", !match);
      });
      causeIndex = 0;
      renderCause();
    });
  });
  window.addEventListener("resize", renderCause);

  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.className = "scroll-top";
  scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  scrollTopBtn.setAttribute("aria-label", "Back to top");
  document.body.appendChild(scrollTopBtn);
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("show", window.scrollY > 400);
  });

  /* FAQ */
  document.querySelectorAll(".faq-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
  });

  /* Lightbox */
  const lb = document.getElementById("lightbox");
  if (lb) {
    document.querySelectorAll("[data-lightbox]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        lb.querySelector("img").src = el.getAttribute("href") || el.dataset.lightbox;
        lb.classList.add("open");
      });
    });
    lb.querySelector("button")?.addEventListener("click", () => lb.classList.remove("open"));
    lb.addEventListener("click", (e) => { if (e.target === lb) lb.classList.remove("open"); });
  }

  /* Volunteer team cards — tap/keyboard flip */
  document.querySelectorAll(".v-flip").forEach((card) => {
    const fineHover = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      if (fineHover()) return;
      card.classList.toggle("is-flipped");
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("is-flipped");
      }
    });
  });

  /* Donation details */
  const CAUSES = {
    education: {
      cat: "Education",
      title: "Let’s education for children get good life",
      img: "images/client/education/reading-02.jpg",
      alt: "Public school children supported by Habari Foundation",
      text: "This program provides education services to children who have no access to school. The targeted children are those from poor families, orphans and street children in Moshi, Kilimanjaro. We support both enrolled students and children who are not yet in school by taking them to class — uniforms, fees and a trusted adult who stays in touch.",
      raisedLabel: "Sponsor",
      raised: "$90",
      goalLabel: "Goal",
      goal: "1 year",
      summary1: "Child sponsorship is one of the most effective ways to help children escape poverty. As you exchange letters, send photos and offer encouragement, your care brings hope that can last a lifetime.",
      points: [
        "Uniforms and school fees so a child can stay in class",
        "Each child has only one sponsor, from age 3 to 18",
        "The child writes at least twice a year"
      ],
      summary2: "More than 22 children are currently sponsored in Habari Foundation’s Child Sponsorship Program. We always do a physical assessment of families and schools when selecting children — living standards and real need on the ground.",
      subject: "Sponsor a public-school child ($90)"
    },
    private: {
      cat: "Education",
      title: "Private school for a child in Kilimanjaro",
      img: "images/client/education/classroom-lesson.jpg",
      alt: "Volunteers visiting a partner school",
      text: "There are many children waiting for a place in a private classroom. A year of fees, food and a uniform is $750. A secondary student is $956. Temporary teachers in public school cost $400 for four months; one full-time teacher for a year is $1,200.",
      raisedLabel: "Sponsor",
      raised: "$750",
      goalLabel: "Secondary",
      goal: "$956",
      summary1: "Private-school sponsorship covers fees, food and a uniform so a child can learn in a safer, better-resourced classroom.",
      points: [
        "Private school: $750 a year for fees, food and uniform",
        "Secondary student: $956 a year",
        "A full-time teacher for one year: $1,200"
      ],
      summary2: "As we work with school management and local government, we always do a physical assessment of families and schools when selecting children.",
      subject: "Sponsor a private-school child ($750)"
    },
    health: {
      cat: "Health",
      title: "HIV, malaria and mosquito nets",
      img: "images/client/health/health-check-03.jpg",
      alt: "Health outreach and community distribution",
      text: "This program raises awareness among orphans, their families and communities on HIV/AIDS and malaria. It is a mobile outreach — taking information to people where they are, linking families to care, and delivering mosquito nets.",
      raisedLabel: "Events",
      raised: "7+",
      goalLabel: "Goal",
      goal: "Yearly",
      summary1: "Every year the program holds at least seven awareness events. We visit families, listen first, then provide nets and the right services.",
      points: [
        "Mosquito nets — a simple way to cut malaria deaths among children",
        "Listen to the family and explore what could actually help",
        "Link people to organizations already working on malaria and HIV"
      ],
      summary2: "The program also works with 50 families of vulnerable children to improve their economic base — training in small business and more opportunities for women in rural families.",
      subject: "Support health outreach"
    },
    school: {
      cat: "School",
      title: "Build a nursery and primary school",
      img: "images/client/school/blockwork.jpg",
      alt: "Habari Foundation school project",
      text: "Based on growing community need, Habari Foundation is seeking a grant to construct a nursery and primary school so we can offer educational services to all vulnerable children — orphans, the poor, and all others in need.",
      raisedLabel: "Need",
      raised: "Grant",
      goalLabel: "Where",
      goal: "Kilimanjaro",
      summary1: "The main objective is free quality education that equips underprivileged children. Children from middle-income families will pay a little so the school can stay sustainable after donor support.",
      points: [
        "Nursery and primary classrooms for children who have none",
        "Work alongside Tanzania’s free primary-education mandate",
        "Local construction manager with the Ministry of Education"
      ],
      summary2: "Coordinators report to Habari’s headquarters in the Kilimanjaro region, where a compiled report is sent to donors and stakeholders.",
      subject: "Give to the school project"
    },
    livelihood: {
      cat: "Livelihood",
      title: "Machame coffee project for families",
      img: "images/client/livelihood/banana-shade.jpg",
      alt: "Arabica coffee growing in Kilimanjaro",
      text: "Apart from depending on funds from donors, Habari Foundation is creating other means of generating extra income for the children by investing in small projects — involving homeless children themselves, and local and international volunteers.",
      raisedLabel: "Started",
      raised: "2020",
      goalLabel: "Where",
      goal: "Machame",
      summary1: "The coffee project in Machame village was established in 2020 with cultivation of 25 pits. Arabica coffee grows on the northern slopes of Kilimanjaro under the shade of banana plants.",
      points: [
        "Employment and income through production and sale of coffee",
        "Managed with a local community-based organization",
        "Technical support from agriculture and coffee experts"
      ],
      summary2: "The project aims to support primary schools and families in the village so income lasts after a visit or a one-off gift ends.",
      subject: "Support the coffee & tree projects"
    },
    tours: {
      cat: "Tours",
      title: "Climb Kilimanjaro for charity",
      img: "images/Habari-foundation-kilimanjaro-charity-Tour.jpg",
      alt: "Charity climbers at Uhuru Peak",
      text: "Depending on the amount donated, 25% is allocated to students’ needs and 75% pays the costs of the tour. After arrival in Tanzania you spend a day or more in Moshi visiting our children in schools and their families before you start the mountain.",
      raisedLabel: "To students",
      raised: "25%",
      goalLabel: "From",
      goal: "$1,350",
      summary1: "We welcome group charity tours and solo travellers. A non-refundable registration fee is payable to Habari Foundation at booking.",
      points: [
        "25% of each climb donation goes to students’ needs",
        "Visit children in school before the trek",
        "Routes include Machame, Lemosho and Marangu"
      ],
      summary2: "You can self-fund the climb or confirm a minimum sponsorship pledge — typically double the cost of the adventure, less the registration fee.",
      subject: "Join a charity climb"
    }
  };

  if (PAGE === "donate-details") {
    const requested = new URLSearchParams(location.search).get("cause") || "education";
    const id = CAUSES[requested] ? requested : "education";
    const cause = CAUSES[id];
    const set = (sel, val, prop = "textContent") => {
      const el = document.querySelector(sel);
      if (el) el[prop] = val;
    };
    set("#dd-cat", cause.cat);
    set("#dd-org-cat", cause.cat);
    set("#dd-title", cause.title);
    set("#dd-text", cause.text);
    set("#dd-raised-label", cause.raisedLabel);
    set("#dd-raised", cause.raised);
    set("#dd-goal-label", cause.goalLabel);
    set("#dd-goal", cause.goal);
    set("#dd-summary-1", cause.summary1);
    set("#dd-summary-2", cause.summary2);
    set("#dd-subject", cause.subject, "value");
    const img = document.getElementById("dd-img");
    if (img) {
      img.src = cause.img;
      img.alt = cause.alt;
    }
    const headerBg = document.getElementById("dd-header-bg");
    if (headerBg) headerBg.style.backgroundImage = `url('${cause.img}')`;
    const points = document.getElementById("dd-points");
    if (points) {
      points.innerHTML = cause.points.map((p) =>
        `<li><div class="icon"><i class="fa-solid fa-check"></i></div><div class="text"><p>${p}</p></div></li>`
      ).join("");
    }
    const others = document.getElementById("dd-others");
    if (others) {
      others.innerHTML = Object.entries(CAUSES)
        .filter(([key]) => key !== id)
        .slice(0, 3)
        .map(([key, c]) =>
          `<li>
            <img src="${c.img}" alt="">
            <div>
              <span>${c.cat}</span>
              <h4><a href="donate-details.html?cause=${key}">${c.title}</a></h4>
            </div>
          </li>`
        ).join("");
    }
    const pageUrl = encodeURIComponent(location.href);
    const tw = document.getElementById("dd-share-tw");
    const fb = document.getElementById("dd-share-fb");
    if (tw) tw.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${encodeURIComponent(cause.title)}`;
    if (fb) fb.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    document.title = `${cause.title} | Habari Foundation`;
  }

  const EVENTS = {
    "school-visit": {
      date: "Year-round",
      time: "Daytime",
      cat: "Education",
      loc: "Moshi, Kilimanjaro",
      title: "Classroom visits with local schools",
      header: "images/client/education/classroom-lesson.jpg",
      img1: "images/client/education/reading-02.jpg",
      img2: "images/client/education/class-group-04.jpg",
      text1: "Volunteers sit beside local teachers in Moshi classrooms — reading, play and extra attention for children who need it. We work with partner nursery and primary schools so every visit supports the lesson already underway.",
      text2: "A happy child is a successful one. We provide a positive, safe and stimulating environment where all are valued.",
      text3: "As we work with school management and local government, we always do a physical assessment of families and schools. Living standards and real need on the ground come first — not a form from far away.",
      text4: "You can join for a single morning or a longer placement. Local and international volunteers are welcome. Director Stan Wilfred arranges each visit with the school so children are not disrupted.",
      text5: "We intend that all children enjoy learning, achieve their potential and become independent life-long learners.",
      text6: "Write to habarifoundation@gmail.com or call +255 754 044 692 to arrange a date. If you are already coming to Moshi for a charity climb, a classroom visit is part of the days before the mountain.",
      register: "volunteers.html"
    },
    health: {
      date: "7+ yearly",
      time: "Community day",
      cat: "Health",
      loc: "Kilimanjaro region",
      title: "HIV, malaria and mosquito-net drives",
      header: "images/client/health/health-check-03.jpg",
      img1: "images/client/health/health-check-01.jpg",
      img2: "images/client/health/handwashing.jpg",
      text1: "This outreach raises awareness among orphans, families and communities on HIV/AIDS and malaria. It is mobile — we take information, nets and links to care to people where they are.",
      text2: "Every year the program holds at least seven awareness events.",
      text3: "We visit the family, listen first, then provide mosquito nets — a simple, proven way to cut malaria deaths among children — and connect people to organizations already working on malaria and HIV.",
      text4: "The program also works with families of vulnerable children to improve their economic base, with more opportunities for women in rural households.",
      text5: "Listen to the family and explore what could actually help.",
      text6: "Local and international volunteers are welcome on community days. Contact Director Stan Wilfred to join the next outreach in the Kilimanjaro region.",
      register: "contact.html"
    },
    family: {
      date: "Year-round",
      time: "Daytime",
      cat: "Community",
      loc: "Kilimanjaro region",
      title: "Community visits with families",
      header: "images/client/education/outdoor-assembly.jpg",
      img1: "images/client/education/school-meeting-01.jpg",
      img2: "images/client/education/home-kitchen-01.jpg",
      text1: "Habari walks with families, not only with children in a classroom. Community visits start by listening — then helping where the household and local leaders ask.",
      text2: "Families, leaders, donors and children share the work of lasting change.",
      text3: "We arrange a time to visit, sit with the household, and look at what would actually help: school, health, a bed, livestock or food. Follow-up continues after a child has been supported.",
      text4: "Sponsors who travel to Tanzania can meet their child and family on a visit like this, always with a Habari staff member who knows the household.",
      text5: "We treat sponsorship funds and children’s stories with honesty and care.",
      text6: "Write to habarifoundation@gmail.com if you are a sponsor planning a visit, or a volunteer who wants to walk with families in Moshi.",
      register: "contact.html"
    },
    machame: {
      date: "On booking",
      time: "7 days",
      cat: "Charity tours",
      loc: "Machame, Kilimanjaro",
      title: "Machame charity climb",
      header: "images/Habari-foundation-School-charity-Tour-scaled.jpg",
      img1: "images/Habari-foundation-School-charity-Tour-scaled.jpg",
      img2: "images/Habari-foundation-kilimanjaro-charity-Tour.jpg",
      text1: "Climb via the Machame route — beautiful, popular and busy — experiencing the southwest and south-east side of the mountain. After arrival you spend a day in Moshi visiting our children in school before the trek begins.",
      text2: "Depending on the amount donated, 25% is allocated to students’ needs and 75% pays the costs of the tour.",
      text3: "Day 1 walks from Machame Gate (1,800 m) to Machame Camp (2,835 m) through montane forest and Chagga coffee and banana plantations. The route then climbs to Shira, Barranco and Barafu before a midnight summit push to Uhuru Peak (5,895 m).",
      text4: "We welcome group charity tours and solo travellers. A non-refundable registration fee is payable to Habari Foundation at booking. Then choose self-funding or a minimum sponsorship pledge.",
      text5: "Visit children in school before you start the mountain.",
      text6: "Certificates are issued at Mweka Gate. Transfer to the airport or a safari after the descent. Contact Stan Wilfred to book a Machame charity climb.",
      register: "tours.html"
    },
    marangu: {
      date: "On booking",
      time: "5 days",
      cat: "Charity tours",
      loc: "Marangu, Kilimanjaro",
      title: "Marangu charity climb",
      header: "images/habari-foundation-5-Days-Marangu-Charity-Tour-scaled.jpg",
      img1: "images/habari-foundation-5-Days-Marangu-Charity-Tour-scaled.jpg",
      img2: "images/Habari-Foundation-marangu.jpg",
      text1: "The oldest and most popular route. Hut accommodation. Same charity model: visit children in Moshi, then climb. Group prices start from $1,350 per person for five or more.",
      text2: "Included: 25% donation, all accommodation, environmental responsibility, national park fees.",
      text3: "Day 1: Marangu Gate (1,860 m) to Mandara Hut (2,700 m) through rainforest. Then Horombo, Kibo, a midnight start via Gilman’s Point to Uhuru Peak, and descent to the gate.",
      text4: "1 person $1,800. 2–4 people $1,600. 5 and above $1,350 per person. A registration fee is payable to Habari Foundation at booking.",
      text5: "Hut route. Same purpose: classrooms after the climb.",
      text6: "Write to habarifoundation@gmail.com to reserve a Marangu charity tour. You will meet the children the climb is meant to support before you walk.",
      register: "tours.html"
    },
    kili: {
      date: "On booking",
      time: "Summit week",
      cat: "Charity tours",
      loc: "Uhuru Peak, Tanzania",
      title: "Climb Kilimanjaro for charity",
      header: "images/Habari-foundation-kilimanjaro-charity-Tour.jpg",
      img1: "images/Habari-foundation-kilimanjaro-charity-Tour.jpg",
      img2: "images/giving-out-e1650552456361.jpg",
      text1: "Raise funds by climbing Kilimanjaro with Habari, then meet the children and classrooms the climb is meant to support. Routes include Machame, Lemosho and Marangu.",
      text2: "25% of each climb donation goes to students’ needs.",
      text3: "Lemosho is preferred for scenery and a high summit success rate, from $2,100 per person. Machame is the classic 7-day trail. Marangu is the 5-day hut route from $1,350 in a group of five or more.",
      text4: "You can self-fund the climb or confirm a minimum sponsorship pledge — typically double the cost of the adventure, less the registration fee.",
      text5: "Climb Kili. Change a life.",
      text6: "After Uhuru Peak, climbers return to Moshi. Contact Director Stan Wilfred to choose a route and a date that also includes time in our partner schools.",
      register: "tours.html"
    }
  };

  if (PAGE === "event-details") {
    const requested = new URLSearchParams(location.search).get("event") || "school-visit";
    const id = EVENTS[requested] ? requested : "school-visit";
    const ev = EVENTS[id];
    const set = (sel, val, prop = "textContent") => {
      const el = document.querySelector(sel);
      if (el) el[prop] = val;
    };
    set("#ed-date", ev.date);
    set("#ed-date-side", ev.date);
    set("#ed-title", ev.title);
    set("#ed-text-1", ev.text1);
    set("#ed-text-2", ev.text2);
    set("#ed-text-3", ev.text3);
    set("#ed-text-4", ev.text4);
    set("#ed-text-5", ev.text5);
    set("#ed-text-6", ev.text6);
    set("#ed-time", ev.time);
    set("#ed-cat", ev.cat);
    set("#ed-loc", ev.loc);
    const headerBg = document.getElementById("ed-header-bg");
    if (headerBg) headerBg.style.backgroundImage = `url('${ev.header}')`;
    const img1 = document.getElementById("ed-img-1");
    const img2 = document.getElementById("ed-img-2");
    if (img1) { img1.src = ev.img1; img1.alt = ev.title; }
    if (img2) { img2.src = ev.img2; img2.alt = ev.title; }
    const reg = document.getElementById("ed-register");
    if (reg) reg.href = ev.register;
    const pageUrl = encodeURIComponent(location.href);
    const tw = document.getElementById("ed-share-tw");
    const fb = document.getElementById("ed-share-fb");
    if (tw) tw.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${encodeURIComponent(ev.title)}`;
    if (fb) fb.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    document.title = `${ev.title} | Habari Foundation`;
  }

  /* Forms */
  document.querySelectorAll("form[data-contact]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const email = data.get("email") || "";
      const subject = data.get("subject") || "Habari Foundation enquiry";
      const message = data.get("message") || "";
      const extra = ["phone", "address", "dob", "occupation", "interest"]
        .map((k) => data.get(k) ? `${k}: ${data.get(k)}` : "")
        .filter(Boolean)
        .join("\n");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}${extra ? "\n" + extra : ""}\n\n${message}`);
      window.location.href = `mailto:habarifoundation@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      const ok = form.querySelector(".form-success");
      if (ok) ok.style.display = "block";
    });
  });

  /* Custom cursor */
  const cur = document.querySelector(".cursor");
  const dot = document.querySelector(".cursor-dot");
  if (cur && window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    });
  }

  /* GSAP */
  let booted = false;
  const ready = () => {
    if (booted) return;
    booted = true;
    const pre = document.querySelector(".preloader");
    if (pre) {
      pre.style.transition = "opacity .4s ease";
      pre.style.opacity = "0";
      setTimeout(() => pre.remove(), 450);
    }
    if (typeof gsap === "undefined") return;
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach((el, i) => {
      gsap.from(el, {
        y: 36,
        duration: 0.8,
        delay: (i % 3) * 0.05,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    });

    document.querySelectorAll(".bar-inner[data-percent]").forEach((bar) => {
      const pct = bar.dataset.percent;
      gsap.to(bar, {
        width: pct,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: bar, start: "top 90%" },
      });
    });

    document.querySelectorAll("[data-count]").forEach((el) => {
      const end = parseFloat(el.dataset.count);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: end,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
        onUpdate: () => {
          el.textContent = Math.floor(obj.val).toLocaleString();
        },
      });
    });
  };

  window.addEventListener("load", ready);
  document.addEventListener("DOMContentLoaded", () => setTimeout(ready, 400));
  setTimeout(ready, 1800);
  if (document.readyState === "complete") ready();
})();
