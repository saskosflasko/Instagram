// Function to update SVG color
function updateSvgColor(color) {
    const svgElement = document.querySelector("#colorSvgContainer svg");
    const selectedColor = color || document.getElementById("colorPicker").value;
    if (svgElement) {
      svgElement.querySelectorAll("path").forEach((path) => {
        path.setAttribute("fill", selectedColor);
      });
    }
  
    if (!color) {
      document.getElementById("colorName").textContent = "Custom Color";
    }
  }
  
  // Function to dynamically load the SVG
  function loadSvg() {
    fetch("Instagram.svg")
      .then((response) => response.text())
      .then((svgContent) => {
        // Insert the loaded SVG into the container
        document.getElementById("colorSvgContainer").innerHTML = svgContent;
  
        // Resize the SVG to 70x70 pixels
        const svgElement = document.querySelector("#colorSvgContainer svg");
        if (svgElement) {
          svgElement.setAttribute("width", "70px");
          svgElement.setAttribute("height", "70px");
        }
  
        // Apply a default color after loading the SVG
        updateSvgColor("rgb(255, 255, 255)");
      })
      .catch((error) => console.error("Error loading SVG:", error));
  }
  
  // Initialize SVG color picker and load SVG on page load
  document.addEventListener("DOMContentLoaded", () => {
    // Attach change event listener to color picker
    document.getElementById("colorPicker").addEventListener("change", () => {
      updateSvgColor();
    });
  
    // Load the SVG on page load
    loadSvg();
  });

  document.getElementById("Lajk").addEventListener("click", function () {
    Swal.fire({
      title: 'You liked the picture!',
      text: 'Thank you!',
      icon: "info",
      timer: 1500, // Timer in milliseconds
      showConfirmButton: false, // Remove the confirm button
      didOpen: () => {
          document.body.classList.remove('swal2-height-auto');
      }
  });
});
