// 🌗 Dark/Light Mode Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
  });
  
  // 🎯 Typing Text Animation
  const words = [
    "Turning Ideas into Stunning Experiences",
    "Empowering Minds Through ICT",
    "Transforming Culture With Technology",
    "Crafting Stories That Matter",
    "Presenter A — Powered by Passion"
  ];
  
  let wordIndex = 0;
  let charIndex = 0;
  let typingElement = document.getElementById("typing");
  let isDeleting = false;
  
  function type() {
    const currentWord = words[wordIndex];
    typingElement.textContent = isDeleting
      ? currentWord.substring(0, charIndex--)
      : currentWord.substring(0, charIndex++);
  
    if (!isDeleting && charIndex === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if (typingElement) {
      setTimeout(type, 800);
    }
  });
  
  // ✉️ Contact Form Feedback (Optional Visual Alert)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent! Thank you for contacting PRESENTER A.");
      form.reset();
    });
  }
  