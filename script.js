// Android vs apple web
// Evente listener android-btn
document.getElementById("android").addEventListener("click", change);

// function
function change() {
  // input
  var anchor = document.getElementById("link");

  anchor.href = "https://www.android.com/";
  // output
  document.getElementById("pic").style.backgroundImage =
    "url(images/Android-Logo.jpg)";
  document.getElementById("link").innerHTML = "Android Home";
  document.getElementById("link").style.backgroundColor = "#a4c93b";

  //   location.replace("https://www.android.com/");
  document.getElementById("html").style.backgroundColor = "#a4c93b";
  document.getElementById("body").style.fontFamily = "'Roboto', sans-serif";
  document.getElementById("android").classList.add("active");
  document.getElementById("apple").classList.remove("active");
}

// Evente listener apple-btn
document.getElementById("apple").addEventListener("click", change2);

// function
function change2() {
  document.getElementById("link").innerHTML = "Apple Home";
  document.getElementById("link").style.backgroundColor = "#b6bcca";
  //   location.replace("https://www.apple.com/");
  document.getElementById("html").style.backgroundColor = "#b6bcca";
  document.getElementById("body").style.fontFamily = "'Brygada 1918', serif";
  document.getElementById("apple").classList.add("active");
  document.getElementById("android").classList.remove("active");
}
