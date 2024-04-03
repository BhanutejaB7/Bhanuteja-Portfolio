document.addEventListener('DOMContentLoaded', function () {
    var roles = ["Software Developer", "Web Developer", "Data Analyst", "Editor"];
    var roleIndex = 0;
    var textElement = document.getElementById('role');
    var text = roles[roleIndex];
    var typingSpeed = 45; // typing speed in milliseconds
    var delaySpeed = 1500; // delay between roles in milliseconds

    function typeWriter() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setTimeout(eraseText, delaySpeed);
      }
    }

    function eraseText() {
      if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, typingSpeed);
      } else {
        roleIndex = (roleIndex + 1) % roles.length;
        text = roles[roleIndex];
        index = 0;
        setTimeout(typeWriter, typingSpeed);
      }
    }

    var index = 0; // index for typing animation
    typeWriter(); // start the typing animation
  });