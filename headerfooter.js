window.onload = () => {
var hreq = new XMLHttpRequest()
hreq.open("GET", "header.html", true)
hreq.onReadyStateChange = () => {
  if(hreq.readyState==4 && hreq.status==200) {
    document.getElementById("header").innerHTML = hreq.responseText
  }
}

var freq = new XMLHttpRequest()
freq.open("GET", "footer.html", true)
freq.onReadyStateChange = () => {
  if(freq.readyState==4 && freq.status==200) {
    document.getElementById("footer").innerHTML = freq.responseText
  }
}
}
