document.addEventListener("DOMContentLoaded", dienow);

function dienow( ){
    
    setInterval(() => {
    var today = new Date();

    var hr = today.getHours()
    var mn = today.getMinutes()
    var sc = today.getSeconds()
    document.getElementById('hours').textContent=hr
    document.getElementById('minutes').textContent=mn
    document.getElementById('seconds').textContent=sc
    }, 1);
  }
  