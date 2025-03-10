// 토글 클릭 이벤트 핸들러
document.querySelectorAll('.contents-board > li > a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); 
      
      const li = this.parentElement;
      li.classList.toggle('active');
      li.classList.toggle('is-open-noti');

      const replyDiv = this.nextElementSibling;
      if (replyDiv && replyDiv.classList.contains('reply')) {
          // 토글 표시
          replyDiv.style.display = (replyDiv.style.display === 'block') ? 'none' : 'block';
      }
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


  const video = document.getElementById('background-video');
  video.addEventListener('ended', function() {
    video.play(); 
  });


  