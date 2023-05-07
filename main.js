let searchInp= document.querySelector(".search")
let textArea = document.querySelector(".textarea")
let countWords = document.querySelector(".count .words span")
let countLetters = document.querySelector(".count .letters span")

// count Words And Letters

textArea.addEventListener("keyup",()=>{
     let words = textArea.textContent.split(" ")
     let letters = textArea.textContent.split("")
     
     countWords.textContent = words.length
     countLetters.textContent = letters.length
})

// Search in textArea

searchInp.addEventListener("keyup",()=>{
 
  if(searchInp.value != ""){
    let reg = new RegExp(searchInp.value,"gi") 
    textArea.innerHTML = (textArea.textContent).replace(reg,`<mark>$&</mark>`)
  } else{
    textArea.innerHTML = (textArea.textContent).replace(reg,reg)
  }
})

// style fontName And FontSize

let FontsName = document.querySelectorAll(".FontsName")
let FontSize = document.querySelectorAll(".FontsSize")

FontsName.forEach((el)=>{
  el.addEventListener("click",()=>{
    textArea.style.fontFamily=`${el.value}`;
    
  })
});

FontSize.forEach((el)=>{
  el.addEventListener("click",()=>{
    textArea.style.fontSize=`${el.value}`;
    
  })
});

// Style text

let iconEdit = document.querySelectorAll(".icons button ")

iconEdit.forEach((el)=>{
  el.addEventListener("click",()=>{
    console.log(el.id)
    document.execCommand(`${el.id}`)
    el.classList.toggle("active-icon")
  })
});


// Listen text

let Listen = document.querySelector(".btn")

Listen.addEventListener("click",()=>{
  let speech = new SpeechSynthesisUtterance(textArea.textContent.trim());
   speech.lang = "en-US"; 
   window.speechSynthesis.speak(speech);

})

//  style color

let color =document.querySelector("input.color")
let bgColor =document.querySelector("input.hilitColor")

function addcolor(){
  document.execCommand(`${this.id}`,false,this.value)
}

color.onchange = addcolor
bgColor.onchange = addcolor

