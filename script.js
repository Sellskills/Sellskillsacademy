document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('startForm');
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const first = document.getElementById('firstname').value.trim();
        const last = document.getElementById('lastname').value.trim();
  
        if (first && last) {
          localStorage.setItem('studentName', `${first} ${last}`);
          window.location.href = 'lesson1.html';
        } else {
          alert('Veuillez remplir votre prénom et votre nom.');
        }
      });
    }
  });
  