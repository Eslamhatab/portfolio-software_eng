// js/custom.js

document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("lang-toggle");
  let currentLang = "en"; // اللغة الحالية

  // جميع النصوص الديناميكية
  const translations = {
    en: {
      home: "Home",
      about: "About",
      resume: "Resume",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact",
      heroTitle: "Eslam Hatab",
      heroSubtitle: "Full Stack Developer",
      heroDescription: "Passionate about creating exceptional digital experiences.",
      skillsTitle: "Skills",
      servicesTitle: "Services",
      contactTitle: "Contact",
      contactDescription: "Get in touch with me using the form below."
      // يمكنك إضافة المزيد من النصوص حسب الحاجة
    },
    ar: {
      home: "الرئيسية",
      about: "من أنا",
      resume: "السيرة الذاتية",
      portfolio: "الأعمال",
      services: "الخدمات",
      contact: "تواصل",
      heroTitle:"إسلام حطب " , 
      heroSubtitle: "مطور ويب كامل",
      heroDescription: "شغوف بابتكار تجارب رقمية استثنائية.",
      skillsTitle: "المهارات",
      servicesTitle: "الخدمات",
      contactTitle: "تواصل",
      contactDescription: "تواصل معي عبر النموذج أدناه."
      // أضف أي نصوص عربية أخرى هنا
    }
  };

  function setLanguage(lang) {
    currentLang = lang;

    // تغيير اتجاه الصفحة
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.body.classList.add("rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.body.classList.remove("rtl");
    }

    // ترجمة عناصر الـ Navbar
    document.querySelector('a[href="#hero"]').textContent = translations[lang].home;
    document.querySelector('a[href="#about"]').textContent = translations[lang].about;
    document.querySelector('a[href="#resume"]').textContent = translations[lang].resume;
    document.querySelector('a[href="#portfolio"]').textContent = translations[lang].portfolio;
    document.querySelector('a[href="#services"]').textContent = translations[lang].services;
    document.querySelector('a[href="#contact"]').textContent = translations[lang].contact;

    // ترجمة Hero
    const heroTitle = document.querySelector(".hero-text h1");
    const heroSubtitle = document.querySelector(".hero-text h2");
    const heroDescription = document.querySelector(".hero-text .description");

    if (heroTitle) heroTitle.textContent = translations[lang].heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = translations[lang].heroSubtitle;
    if (heroDescription) heroDescription.textContent = translations[lang].heroDescription;

    // ترجمة Skills
    const skillsSection = document.querySelector("#skills .section-title h2");
    if (skillsSection) skillsSection.textContent = translations[lang].skillsTitle;

    // ترجمة Services
    const servicesSection = document.querySelector("#services .section-title h2");
    if (servicesSection) servicesSection.textContent = translations[lang].servicesTitle;

    // ترجمة Contact
    const contactSection = document.querySelector("#contact .section-title h2");
    const contactDesc = document.querySelector("#contact .section-title p");
    if (contactSection) contactSection.textContent = translations[lang].contactTitle;
    if (contactDesc) contactDesc.textContent = translations[lang].contactDescription;
  }

  // تغيير اللغة عند الضغط على الزر
  langToggle.addEventListener("click", function () {
    if (currentLang === "en") {
      setLanguage("ar");
    } else {
      setLanguage("en");
    }
  });

  // تعيين اللغة الافتراضية عند التحميل
  setLanguage("en");
});
