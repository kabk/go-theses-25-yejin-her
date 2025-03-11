let trailElements = [];
const maxTrails = 40; 
const trailDuration = 10000; 

document.addEventListener('mousemove', function (e) {
  const trail = document.createElement('div');
  trail.classList.add('trail');
  document.body.appendChild(trail);

  trail.style.left = String(e.clientX) + 'px';
  trail.style.top = String(e.clientY + 20) + 'px';

  trailElements.push(trail);

  setTimeout(() => {
    trail.remove(); 
  }, trailDuration);

  if (trailElements.length > maxTrails) {
    trailElements.shift(); 
  }
});


// 챕터@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.addEventListener("DOMContentLoaded", function () {
  const textSections = document.querySelectorAll(".text-section");
  const changingImage = document.getElementById("changing-image");
  const captionElement = document.getElementById("image-caption"); 

  textSections.forEach((section) => {
    section.addEventListener("mouseenter", function () {
      const newImage = section.getAttribute("data-image"); 
      const newCaption = section.getAttribute("data-caption");
      
      if (newImage) {
        changingImage.src = newImage; 
      }

      if (newCaption) {
        captionElement.textContent = newCaption; 
      }
    });

    section.addEventListener("mouseleave", function () {
      const defaultImage = "images/Entry.jpg"; 

    });
  });
});


//Smae as main!, Next, Transition
document.addEventListener('DOMContentLoaded', function () {

  const fadeOut = document.createElement('div');
  fadeOut.classList.add('fade-out');
  document.body.appendChild(fadeOut);

  const links = document.querySelectorAll('.next');

  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); 

          fadeOut.classList.add('show');

          setTimeout(() => {
              window.location.href = link.getAttribute('href');
          }, 1000); 
      });
  });
});




// ⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰⋰

window.onload = () => {
  const currentPage = window.location.pathname.split('/').pop(); // 현재 페이지 파일명 가져오기
  let startIndex = 1; // 기본 시작 번호는 1

  if (currentPage === 'chapter2.html') {
    startIndex = 42;
  } else if (currentPage === 'chapter3.html') {
    startIndex = 65; 
  }

  document.querySelectorAll('.footnote').forEach((footnote, index) => {
    footnote.style.setProperty('--footnote-number', `'a ${startIndex + index}'`);
  });
};

