function toggleText(id, btn) {
    let text = document.getElementById(id);
  
    if (text.classList.contains("show")) {
      text.classList.remove("show");
      btn.innerHTML = "▼"; // Change back to down arrow
    } else {
      text.classList.add("show");
      btn.innerHTML = "▲"; // Change to up arrow
    }
  }


