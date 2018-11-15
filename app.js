var form = document.getElementById("add-item")
var input = document.getElementById("input")
var list = document.getElementById("list")

//prevents page reloads and losing of form data
function addItem(e) {
  e.preventDefault()
  var item = input.value
  //this grabs user input and puts it into a ul
  list.innerHTML += "<li>" + item + "</li>"

  //puts form in initial value, clears text in box
  form.reset()

}

form.addEventListener('submit', addItem)




