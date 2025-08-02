     // scrolling bar start
      const scrollText = document.getElementById('scrollText');
      scrollText.addEventListener('mouseenter', () => {
        scrollText.style.animationPlayState = 'paused';
      });
      scrollText.addEventListener('mouseleave', () => {
        scrollText.style.animationPlayState = 'running';
      });

    // scrolling bar end 


        //vison  start

      document.addEventListener('DOMContentLoaded', function () {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.9 });

        document.querySelectorAll('.animate-on-scroll').forEach(block => {
          observer.observe(block);
        });
      });
 

    //vison  end
