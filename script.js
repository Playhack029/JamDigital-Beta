
function clock() {
      var jam = document.getElementById("hour")
      var menit = document.getElementById("minute")
      var detik = document.getElementById("second")
      
      var hours = new Date().getHours()
      var minutes = new Date().getMinutes()
      var seconds = new Date().getSeconds()
      
      jam.innerHTML = hours
      menit.innerHTML = minutes
      detik.innerHTML = seconds
    }
    
    var inter = setInterval(clock, 1000)
    
    var date = new Date();
    
    document.getElementById("dt").innerHTML = date.toDateString();
