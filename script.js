const button = document.querySelecton("button")
button.addEventListener( "click", receiveData )

function receiveData() {
  fetch("http://localhost:3000").then(response => response.json()).then(data => console.log(data.message))

}
