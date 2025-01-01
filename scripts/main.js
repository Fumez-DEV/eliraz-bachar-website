document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetElement = document.querySelector(anchor.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Intersection Observer for Animations
  const animatedElements = document.querySelectorAll('[data-animation]');
  if (animatedElements.length) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    animatedElements.forEach((el) => observer.observe(el));
  }

  // "Start Now" Button Handling in Programs Section
  document.querySelectorAll('.program-btn').forEach(button => {
    button.addEventListener('click', () => {
      const programName = button.closest('.program-card')?.querySelector('h3')?.textContent;
      if (programName) alert(`נבחרה תוכנית: ${programName}. ניצור איתך קשר בהקדם!`);
    });
  });

  // "Start Now" Button in Hero Section
  const heroButton = document.querySelector('.hero-btn');
  const contactSection = document.querySelector('#contact');
  heroButton?.addEventListener('click', () => {
    alert('תודה על ההתעניינות! ניצור איתך קשר בהקדם.');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  });

  // FAQ Toggle Effect with Dynamic Color Changes
  document.querySelectorAll('.faq-item details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      const summary = detail.querySelector('summary');
      if (summary) summary.style.color = detail.open ? '#FF0000' : '#fff';
    });
  });

  // Touch Support for Result Items
  document.querySelectorAll('.result-item').forEach(item => {
    const beforeImage = item.querySelector('.before');
    const afterImage = item.querySelector('.after');
    if (beforeImage && afterImage) {
      item.addEventListener('touchstart', () => {
        beforeImage.style.opacity = '0';
        afterImage.style.opacity = '1';
      }, { passive: true });
      item.addEventListener('touchend', () => {
        beforeImage.style.opacity = '1';
        afterImage.style.opacity = '0';
      }, { passive: true });
    }
  });

  // Notification Animation Based on Scroll
  const notification = document.querySelector('.notification');
  if (notification) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            notification.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(notification);
  }

  // Sticky Navbar Effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Notification Message Based on Screen Width
  const updateNotification = () => {
    if (notification) {
      notification.textContent = window.innerWidth <= 768
        ? 'לחצו כדי לראות תוצאה'
        : 'העבירו את העכבר כדי לראות תוצאה';
    }
  };
  updateNotification();
  window.addEventListener('resize', updateNotification);
});
