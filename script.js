function toggleText(id) {
    var textElement = document.getElementById(id);
    if (textElement.style.display === "none" || textElement.style.display === "") {
        textElement.style.display = "block"; // Show text
    } else {
        textElement.style.display = "none"; // Hide text
    }
}
