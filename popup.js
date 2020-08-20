// Set click event listener for all buttons and send code change to content javascript file

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click);
  }
});

// function click(e) {
//   chrome.tabs.executeScript(null,
//       {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
//   window.close();
// }

// Sets background color of the body on click, on the second click, resets it to white
function click(e) {
  chrome.tabs.executeScript(null,
      {code:`if (document.body.style.backgroundColor === "${e.target.id}") {
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.backgroundColor = "${e.target.id}";
      }`});
  window.close();
}