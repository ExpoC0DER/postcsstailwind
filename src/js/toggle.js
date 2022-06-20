function toggleNavigation() {
    var x = document.getElementById("mobileNav");
    if (x.classList.contains("hidden")) {
      x.classList.remove("hidden");
    } else {
        x.classList.add("hidden");
    }
    var x = document.getElementById("body");
    if (x.classList.contains("overflow-hidden")) {
      x.classList.remove("overflow-hidden");
      x.classList.add("overflow-visible");
    } else {
        x.classList.remove("overflow-visible");
        x.classList.add("overflow-hidden");
    }
  }