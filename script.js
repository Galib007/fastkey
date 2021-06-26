
document.addEventListener("keyup", event => {
  const keyPressed = String.fromCharCode(event.keyCode);   
  const keyElement = document.getElementById(keyPressed); 
  const tempkey=document.querySelector(".selected");
  keyElement.classList.add("selected") 
  keyElement.classList.add("hit");
  if(keyPressed!== tempkey.innerHTML){
    tempkey.classList.remove("selected")
    tempkey.classList.remove("hit")
  }
  else{
    // keyElement.classList.remove("hit");
    keyElement.classList.remove("selected") 
    tempkey.classList.add("hit")
    // keyElement.classList.add("hit");
  }
})

