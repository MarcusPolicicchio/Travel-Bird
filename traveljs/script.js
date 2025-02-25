
// Fade-in Animation on Scroll
document.addEventListener("DOMContentLoaded", function() {
  let elements = document.querySelectorAll(".fade-in");

  function checkScroll() {
      let triggerBottom = window.innerHeight * 0.85;

      elements.forEach(element => {
          let elementTop = element.getBoundingClientRect().top;

          if (elementTop < triggerBottom) {
              element.classList.add("show");
          }
      });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on load
});

//  Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
      /*event.preventDefault();*/
      let targetId = this.getAttribute('href').substring(1);
      let targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 60,
              behavior: "smooth"
          });
      }
  });
});




document.addEventListener("DOMContentLoaded", function() {
  // Now it's safe to access elements
  let someElement = document.getElementById("someElement");
  
  if (someElement) {
      someElement.innerText = "The page has fully loaded!";
  } else {
      console.log("Element not found!");
  }
});
