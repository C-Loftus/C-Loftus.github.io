window.onload = function () {
  var spans = document.getElementsByTagName("span");
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].textContent.includes("Powered by")) {
      spans[i].parentNode.removeChild(spans[i]);
    }
  }

  // Select all elements with the class 'footer'
  var footerElements = document.querySelectorAll(".footer");

  // Iterate over each footer element
  footerElements.forEach(function (element) {
    // Replace '·' with an empty string within the innerHTML of the element
    element.innerHTML = element.innerHTML.replace(/·/g, "");
  });
};
