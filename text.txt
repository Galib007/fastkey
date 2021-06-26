
document.addEventListener("keyup", event => {
  const keyPressed = String.fromCharCode(event.keyCode);   
  const keyElement = document.getElementById(keyPressed); 
  const tempkey=document.querySelector(".selected");
  keyElement.classList.add("selected") 
  if(keyPressed!== tempkey.innerHTML){
    tempkey.classList.remove("selected");
  }
})

