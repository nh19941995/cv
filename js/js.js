function removeClassFromElement(selector, className) {
  const element = document.querySelector(selector);

  if (element) {
    element.classList.remove(className);
  } else {
    console.log("Element not found.");
  }
}

function addClassToElement(selector, className) {
  const element = document.querySelector(selector);

  if (element) {
    element.classList.add(className);
  } else {
    console.log("Element not found.");
  }
}

function appendChildToParent(parentSelector, childSelector) {
  const parentElement = document.querySelector(parentSelector);
  const childElement = document.querySelector(childSelector);

  if (parentElement && childElement) {
    parentElement.appendChild(childElement);
  } else {
    console.log("Parent or child element not found.");
  }
}

if (window.innerWidth > 1399) {
  appendChildToParent("#laptop-box", "#experience");
  appendChildToParent("#laptop-box", "#education");
  appendChildToParent("#laptop-box", "#activate");
  appendChildToParent("#laptop-box", "#interest");

  appendChildToParent("#laptop-box", "#languages");
  appendChildToParent("#laptop-box", "#skills");
} else if (window.innerWidth <= 1399 && window.innerWidth >= 1000) {
  appendChildToParent("#left-block", "#experience");
  appendChildToParent("#left-block", "#skills");
  appendChildToParent("#left-block", "#languages");

  appendChildToParent("#right-block", "#activate");
  appendChildToParent("#right-block", "#education");
  appendChildToParent("#right-block", "#interest");
} else {
  console.log("quá bé");
  appendChildToParent("#laptop-box", "#experience");
  appendChildToParent("#laptop-box", "#education");
  appendChildToParent("#laptop-box", "#activate");
  appendChildToParent("#laptop-box", "#interest");
  appendChildToParent("#laptop-box", "#languages");
  appendChildToParent("#laptop-box", "#skills");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 1399) {
    appendChildToParent("#laptop-box", "#experience");
    appendChildToParent("#laptop-box", "#education");
    appendChildToParent("#laptop-box", "#activate");
    appendChildToParent("#laptop-box", "#interest");
    appendChildToParent("#laptop-box", "#languages");
    appendChildToParent("#laptop-box", "#skills");
  } else if (window.innerWidth <= 1399 && window.innerWidth >= 1000) {
    appendChildToParent("#left-block", "#experience");
    appendChildToParent("#left-block", "#skills");
    appendChildToParent("#left-block", "#languages");

    appendChildToParent("#right-block", "#activate");
    appendChildToParent("#right-block", "#education");
    appendChildToParent("#right-block", "#interest");
  } else {
    appendChildToParent("#laptop-box", "#experience");
    appendChildToParent("#laptop-box", "#education");
    appendChildToParent("#laptop-box", "#activate");
    appendChildToParent("#laptop-box", "#interest");
    appendChildToParent("#laptop-box", "#languages");
    appendChildToParent("#laptop-box", "#skills");
  }
});
