// // TODO:
// decimal button acts as a operator
// prevent divide by 0 == not a number
// dont let user click on op for their first option
// reset variables after =
// clear button
//
// Extra: chaining, history, memory

keys = document.querySelectorAll('.keys')
output = document.getElementById('output')
wipe = document.getElementById('clear')

var firstVal
var secondVal
var operator



wipe.addEventListener('click', function(){
  keyPress(this)
  clear();
});

keys.forEach(function(key){
  key.addEventListener('click', function(){
    keyPress(this)
    if (/\*|x|\/|-|\+|\./g.test(key.id)){
      firstVal = output.textContent
      operator = key.id
      output.textContent = ""

      //error check if first and second vall have a value
    }else if(key.id === "="){
      secondVal = output.textContent
      output.textContent = ""
      total = calculate()
      output.append(total)
    }else {
      output.append(key.id)
    }
  })
})

function calculate(){
  firstVal = parseInt(firstVal)
  secondVal = parseInt(secondVal)
  switch (operator) {
    case "+":
      return firstVal + secondVal
      break;
    case "-":
      return firstVal - secondVal
      break;
    case "/":
      return firstVal / secondVal
      break;
    case "x":
      return firstVal * secondVal
      break;
  }
}

function keyPress(selector){
  selector.classList.add("clicked")
  setTimeout(function(){
    selector.classList.remove("clicked");
    }, 100);
}

function clear(){
  firstVal = 0;
  secondVal = 0;
  output.textContent = ""
  console.log("clcik")
}
