/* ============================================
   GWC CONSTRUCTION - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- 1. Mobile Menu Toggle ----------
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          navMenu.classList.remove('active');
          const icon = menuToggle.querySelector('i');
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // ---------- 2. Form Validation ----------
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const fname = document.getElementById('fname').value.trim();
      const lname = document.getElementById('lname').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let errors = [];

      if (!fname) errors.push('First name is required.');
      if (!lname) errors.push('Last name is required.');
      if (!email || !emailRegex.test(email)) errors.push('Please enter a valid email.');
      if (!message) errors.push('Message cannot be empty.');

      if (errors.length > 0) {
        e.preventDefault();
        alert('Please correct the following:\n\n- ' + errors.join('\n- '));
      }
    });
  }

  // ---------- 3. Header Shadow on Scroll ----------
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
      } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
      }
    });
  }

  // ---------- 4. Back to Top Button ----------
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- 5. TYPEWRITER — SENTENSI 3 ZINAZOBADILIKA ----------
  const typewriterElement = document.getElementById('typewriter');
  
  if (typewriterElement) {
    // ============================================
    // BADILISHA SENTENSI HAPA 👇
    // ============================================
    const sentences = [
      'GWC CONSTRUCTION',
      'CONNECTING MARKETS',
      'DELIVERING VALUE'
    ];
    // ============================================

    let sentenceIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Muda (unaweza kubadilisha)
    let typingSpeed = 80;        // Kasi ya kuandika (ms)
    let deletingSpeed = 30;      // Kasi ya kufuta (ms)
    let pauseAfterType = 2000;   // Pumzika baada ya kuandika
    let pauseAfterDelete = 400;  // Pumzika kabla ya sentensi inayofuata

    function typeSentence() {
      const currentSentence = sentences[sentenceIndex];

      if (!isDeleting) {
        // ===== INAANDIKA =====
        typewriterElement.textContent = currentSentence.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentSentence.length) {
          isDeleting = true;
          setTimeout(typeSentence, pauseAfterType);
          return;
        }

        setTimeout(typeSentence, typingSpeed);

      } else {
        // ===== INAFUTA =====
        typewriterElement.textContent = currentSentence.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          sentenceIndex = (sentenceIndex + 1) % sentences.length;
          setTimeout(typeSentence, pauseAfterDelete);
          return;
        }

        setTimeout(typeSentence, deletingSpeed);
      }
    }

    // Anza baada ya sekunde 1
    setTimeout(typeSentence, 1000);
  }

});