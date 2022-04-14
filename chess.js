const body = document.body;
const frame = createDivElement("frame")
const blackBox = createDivElement("black-box")
const whiteBox = createDivElement("white-box")
const lineNumber = 8
body.appendChild(frame);

/**
 * @description the function return a new div element with given params
 * @param {className} [className=null] (string)
 * @param {id} [id=null] (string)
 * @return {new div element} (htmlDivElement)
 */
function createDivElement(className = null, id = null){
  let divElement = document.createElement("div")
  if (id != null) {
    divElement.id = id
  }
  if (className != null) {
    divElement.classList.add(className) 
  }
  return divElement
}
/**
 * @description the function return an array of the whit and black boxes 
 * @param {*} startWithWhite (boolean)
 * @return {*} (array of htmlDivElements)
 */
function createRow(startWithWhite) {
  let row = []
  if (typeof(startWithWhite) != "boolean") {throw new Error("not a boolean!")}
  if (startWithWhite) {
    for (let index = 0; index < lineNumber/2; index++) {
      row.push(whiteBox)
      row.push(blackBox)
    } 
  }
  else {
    for (let index = 0; index < lineNumber/2; index++) {
      row.push(blackBox)
      row.push(whiteBox)
    } 
  }
  return row
}

//!this is the function that actually run and build the chest
for (let col = 0; col < lineNumber; col++) {
  let lineArray = [] //!the array of the html boxes elements
  let lineElement = createDivElement(); //!the actual line element
  if (col % 2 == 0) {
    lineArray = createRow(true);
  } else {
    lineArray = createRow(false);
  }
  //!add the elements from the lineArray to the lineElement
  lineArray.forEach(box => {
    lineElement.appendChild(box.cloneNode(true))
  });
  //!add the lineElement to the frame
  frame.appendChild(lineElement)
}

// const line1 = document.createElement('div');
// frame.appendChild(line1);
// line1.className = 'line1';

// const line2 = document.createElement('div');
// frame.appendChild(line2);
// line2.className = 'line2';

// const line3 = document.createElement('div');
// frame.appendChild(line3);
// line3.className = 'line3';

// const line4 = document.createElement('div');
// frame.appendChild(line4);
// line4.className = 'line4';

// const line5 = document.createElement('div');
// frame.appendChild(line5);
// line5.className = 'line5';

// const line6 = document.createElement('div');
// frame.appendChild(line6);
// line6.className = 'line6';

// const line7 = document.createElement('div');
// frame.appendChild(line7);
// line7.className = 'line7';

// const line8 = document.createElement('div');
// frame.appendChild(line8);
// line8.className = 'line8';


//   const row1 = () => {
   
// const div1 = document.createElement("div");
// div1.innerText = 'wake up'
// div1.className = 'box'
// div1.style.background = "black"
// div1.id = "box"

// const div2 = document.createElement("div");
// div2.innerText = '.'
// div2.className = 'box'
// div2.style.background = "white"


// line1.appendChild(div1);
// line1.appendChild(div2);


// }
//   const row2 = () => {
   
// const div3 = document.createElement("div");
// div3.innerText = 'wake up'
// div3.className = 'box'
// div3.style.background = "white"

// const div4 = document.createElement("div");
// div4.innerText = '.'
// div4.className = 'box'
// div4.style.background = "black"


// line2.appendChild(div3);
// line2.appendChild(div4);

// }
//   const row3 = () => {
   
// const div1 = document.createElement("div");
// div1.innerText = 'wake up'
// div1.className = 'box'
// div1.style.background = "black"
// div1.id = "box"

// const div2 = document.createElement("div");
// div2.innerText = '.'
// div2.className = 'box'
// div2.style.background = "white"


// line3.appendChild(div1);
// line3.appendChild(div2);


// }
//   const row4 = () => {
   
// const div3 = document.createElement("div");
// div3.innerText = 'wake up'
// div3.className = 'box'
// div3.style.background = "white"

// const div4 = document.createElement("div");
// div4.innerText = '.'
// div4.className = 'box'
// div4.style.background = "black"


// line4.appendChild(div3);
// line4.appendChild(div4);

// }
//   const row5 = () => {
   
// const div1 = document.createElement("div");
// div1.innerText = 'wake up'
// div1.className = 'box'
// div1.style.background = "black"
// div1.id = "box"

// const div2 = document.createElement("div");
// div2.innerText = '.'
// div2.className = 'box'
// div2.style.background = "white"


// line5.appendChild(div1);
// line5.appendChild(div2);


// }
//   const row6 = () => {
   
// const div3 = document.createElement("div");
// div3.innerText = 'wake up'
// div3.className = 'box'
// div3.style.background = "white"

// const div4 = document.createElement("div");
// div4.innerText = '.'
// div4.className = 'box'
// div4.style.background = "black"


// line6.appendChild(div3);
// line6.appendChild(div4);

// }
//   const row7 = () => {
   
// const div1 = document.createElement("div");
// div1.innerText = 'wake up'
// div1.className = 'box'
// div1.style.background = "black"
// div1.id = "box"

// const div2 = document.createElement("div");
// div2.innerText = '.'
// div2.className = 'box'
// div2.style.background = "white"


// line7.appendChild(div1);
// line7.appendChild(div2);


// }
//   const row8 = () => {
   
// const div3 = document.createElement("div");
// div3.innerText = 'wake up'
// div3.className = 'box'
// div3.style.background = "white"

// const div4 = document.createElement("div");
// div4.innerText = '.'
// div4.className = 'box'
// div4.style.background = "black"


// line8.appendChild(div3);
// line8.appendChild(div4);

// }



// for(let i = 0; i < 4 ;i++){
// row1();

// }
// for(let i = 0; i < 4 ;i++){
// row2();

// }
// for(let i = 0; i < 4 ;i++){
// row3();

// }
// for(let i = 0; i < 4 ;i++){
// row4();

// }
// for(let i = 0; i < 4 ;i++){
// row5();

// }
// for(let i = 0; i < 4 ;i++){
// row6();

// }
// for(let i = 0; i < 4 ;i++){
// row7();

// }
// for(let i = 0; i < 4 ;i++){
// row8();

// }




