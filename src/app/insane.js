// This is for the Welcome! text at the begining to have an animation if hovered.

if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined")
}

window.onload = function(){ 
  // List of letters for the code to select from
  const letters = "Welcomeabcdfghijklmnopqrstuv!";

  let interval = null;
  document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }
};