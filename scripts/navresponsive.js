function myFunction() {
    var topnav = document.getElementById("menu");
    if (topnav.className === "nav") {
      topnav.className += " responsive";
    } else {
      topnav.className = "nav";
    }
  }