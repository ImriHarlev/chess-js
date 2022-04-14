
const body = document.body;
  
const div1 = document.createElement("div");
div1.innerText = 'wake up'
div1.className = 'black box'
div1.style.background = "black"

const div2 = document.createElement("div");
div2.innerText = 'wake up'
div2.className = 'black box'
div2.style.background = "white"

body.append(div1);
body.append(div2);

