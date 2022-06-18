document.addEventListener("DOMContentLoaded", dienow);

function dienow( ){
    
    setInterval(() => {
    var today = new Date().toLocaleTimeString();
    document.getElementById('hours').textContent=today

    }, 1);
  }
  