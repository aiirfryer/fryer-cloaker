function cloaker() {
  var website = prompt("Enter the website you want to cloak");
  var win = window.open()
  var url = String(website);
  var iframe = win.document.createElement('iframe')
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.src = url
  win.document.body.appendChild(iframe)
}