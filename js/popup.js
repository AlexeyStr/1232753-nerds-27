var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".button-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");  
var text = popup.querySelector("[name=letter]");
var loginbox = popup.querySelector(".half-width.name");
var mailbox = popup.querySelector(".half-width.mail");
var textbox = popup.querySelector(".text-letter");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageb = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");

  login.focus();
  
  if (storage) {
    login.value = storage;
    mail.focus();
    if (storage) {
      mail.value = storageb;
      text.focus();
    } else {
      mail.focus();
    }
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value) {
    evt.preventDefault();
    loginbox.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", login.value);  
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!mail.value) {
    evt.preventDefault();
    mailbox.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("mail", mail.value);
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!text.value) {
    evt.preventDefault();
    textbox.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", login.value);
      localStorage.setitem("mail", mail.value);  
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});
