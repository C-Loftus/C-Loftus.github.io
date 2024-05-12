document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll("*");
  elements.forEach(function (element) {
    if (
      element.childNodes.length === 1 &&
      element.childNodes[0].nodeType === Node.TEXT_NODE
    ) {
      if (element.textContent.includes("· Powered by Hugo & PaperMod")) {
        element.textContent = element.textContent.replace(
          "· Powered by Hugo & PaperMod",
          ""
        );
      }
    }
  });
});
