// Enhanced drag-to-scroll with better UX
(function () {
  const scrollers = document.querySelectorAll(".team-list, .speakers-container");
  
  scrollers.forEach(scroller => {
    if (!scroller) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let velocity = 0;
    let rafId = null;

    scroller.addEventListener("mousedown", (e) => {
      isDown = true;
      scroller.classList.add("is-dragging");
      scroller.style.cursor = "grabbing";
      scroller.style.userSelect = "none";
      startX = e.pageX - scroller.offsetLeft;
      scrollLeft = scroller.scrollLeft;
      velocity = 0;
      if (rafId) cancelAnimationFrame(rafId);
    });

    window.addEventListener("mouseup", () => {
      if (isDown) {
        isDown = false;
        scroller.classList.remove("is-dragging");
        scroller.style.cursor = "grab";
        scroller.style.userSelect = "";
        
        // Add momentum scrolling
        const applyMomentum = () => {
          if (Math.abs(velocity) > 0.5) {
            scroller.scrollLeft -= velocity;
            velocity *= 0.95; // Deceleration
            rafId = requestAnimationFrame(applyMomentum);
          }
        };
        applyMomentum();
      }
    });

    scroller.addEventListener("mouseleave", () => {
      if (isDown) {
        isDown = false;
        scroller.classList.remove("is-dragging");
        scroller.style.cursor = "grab";
        scroller.style.userSelect = "";
      }
    });

    scroller.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scroller.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      velocity = walk - (scroller.scrollLeft - scrollLeft);
      scroller.scrollLeft = scrollLeft - walk;
    });

    // Add wheel scroll enhancement
    scroller.addEventListener("wheel", (e) => {
      e.preventDefault();
      scroller.scrollLeft += e.deltaY;
    }, { passive: false });

    // Set initial cursor
    scroller.style.cursor = "grab";
  });
})();

// Add smooth scroll buttons for horizontal scrollers (optional)
(function() {
  const createScrollButtons = (container) => {
    const wrapper = container.parentElement;
    if (!wrapper) return;

    const prevBtn = document.createElement('button');
    prevBtn.className = 'scroll-btn scroll-prev';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.setAttribute('aria-label', 'Scroll left');

    const nextBtn = document.createElement('button');
    nextBtn.className = 'scroll-btn scroll-next';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.setAttribute('aria-label', 'Scroll right');

    const scrollAmount = 300;

    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Add buttons to wrapper if it has position relative/absolute
    const wrapperStyle = window.getComputedStyle(wrapper);
    if (wrapperStyle.position === 'relative' || wrapperStyle.position === 'absolute') {
      wrapper.appendChild(prevBtn);
      wrapper.appendChild(nextBtn);

      // Show/hide buttons based on scroll position
      const updateButtons = () => {
        prevBtn.style.opacity = container.scrollLeft > 0 ? '1' : '0';
        nextBtn.style.opacity = 
          container.scrollLeft < container.scrollWidth - container.clientWidth ? '1' : '0';
      };

      container.addEventListener('scroll', updateButtons);
      updateButtons();
    }
  };

  // Uncomment to add scroll buttons
  // const scrollContainers = document.querySelectorAll('.team-list, .speakers-container');
  // scrollContainers.forEach(createScrollButtons);
})();
