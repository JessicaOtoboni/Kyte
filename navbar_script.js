<script>
  document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.uui-navbar03_component');
    const pageHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    const percentageTrigger = 0.005;

    function handleScroll() {
      const scrollPercentage = (window.pageYOffset / pageHeight) * 100;

      if (scrollPercentage >= percentageTrigger * 100) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        
        // Show Kyte button on mobile
        if (window.matchMedia("(max-width: 767px)").matches) {
          const Kytebutton = document.querySelector('.uui-navbar03_button-wrapper.hide-desktop');
          Kytebutton.style.display = 'flex';
        }
      } else {
        navbar.style.position = 'relative';
        
        //Hide Kyte button on mobile
        if (window.matchMedia("(max-width: 767px)").matches) {
          const Kytebutton = document.querySelector('.uui-navbar03_button-wrapper.hide-desktop');
          Kytebutton.style.display = 'none';
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
  });
</script>
