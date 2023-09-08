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

function changeDisplay(element) {
  // Kiểm tra xem lớp đã có trong phần tử hay chưa
  if (element.classList.contains("d-none")) {
    // Nếu đã có, thì gỡ bỏ lớp đi
    element.classList.remove("d-none");
  } else {
    // Nếu chưa có, thêm lớp vào phần tử
    element.classList.add("d-none");
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

function validateInput(inputId, regexPattern) {
  // Lấy giá trị từ trường input
  var inputValue = document.getElementById(inputId).value;

  // Kiểm tra giá trị với biểu thức chính quy
  var regex = new RegExp(regexPattern);
  var isValid = regex.test(inputValue);

  return isValid;
}

function changeSpanValue(idSpan, newSpan) {
  // Lấy tham chiếu đến phần tử span bằng id
  var spanElement = document.getElementById(idSpan);

  // Thay đổi giá trị của span bằng thuộc tính textContent
  spanElement.textContent = newSpan;
}

// Chọn nút bằng id
var button = document.getElementById("BTN_check_email");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Thêm sự kiện "click" vào nút
button.addEventListener("click", function () {
  // var inputValue = document.getElementById("input_email").value;

  // alert(`${inputValue}`);
  if (validateInput("input_email", regex)) {
    // alert("đúng");
    // alert(`${inputValue}`);
    changeSpanValue("span_info", "Đã nhập đúng định dạng!");
    addClassToElement("#box_enter_email", "d-none");
    removeClassFromElement("#box_info", "d-none");
  } else {
    // alert("sai");
    changeSpanValue(
      "span_info",
      "Bạn đã nhập sai định dạng email, vui lòng nhập lại !"
    );
    // alert(`${inputValue}`);
  }
});

var listCard = document.querySelectorAll("#job-info .card");

listCard.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    // Tìm phần tử <button> trong phạm vi của element
    var buttonElement = element.querySelector("button");
    if (buttonElement) {
      changeDisplay(buttonElement);

      // Kiểm tra xem sự kiện "click" đã được gán cho nút chưa
      if (!buttonElement.clickEventAdded) {
        buttonElement.addEventListener("click", function () {
          console.log("x");
          var element_ul = element.querySelector("ul");
          changeDisplay(element_ul);
        });

        // Đánh dấu rằng sự kiện "click" đã được gán
        buttonElement.clickEventAdded = true;
      }
    }
  });
});

listCard.forEach(function (element) {
  element.addEventListener("mouseleave", function () {
    // Tìm phần tử <button> trong phạm vi của element
    var buttonElement = element.querySelector("button");
    if (buttonElement) {
      console.log("có nha");
      changeDisplay(buttonElement);
    }
  });
});
