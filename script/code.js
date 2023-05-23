
// DOM For calculate, Buttons and input screens 
let height = document.querySelector(".H-input-screen");
let weight = document.querySelector(".W-input-screen");
let result = document.querySelector(".BMI-answer");
let calculate = document.querySelector(".calculate");
let clear = document.querySelector(".clear");
let text = document.querySelector(".result-text");
let image = document.querySelector(".image")


// Calculate button script 
calculate.addEventListener("click", ()=>{

    let userHeight = height.value;
    let userWeight = weight.value;
    let BMI = (userWeight/ ((userHeight*userHeight)/10000)).toFixed(2);
    result.innerText = BMI;

    if(BMI < 18.5){
        text.innerText = "You are Underweight ☹️"; result.style.color = "orangered"; text.style.color  = "orangered";
    }
    else if((BMI > 18.5) && (BMI <= 24.9)){
        text.innerText = "You are Healthy"; result.style.color = "yellowgreen"; text.style.color  = "yellowgreen";
    }
    else if((BMI >= 25) && (BMI <= 29.9)){
        text.innerText = "You are Overweight 😐"; result.style.color = "orangered"; text.style.color  = "orangered";
    }
    else if(BMI < 30){
        text.innerText = "You are Obese 😡"; result.style.color = "red"; text.style.color  = "red";
    } 
    if((BMI > 18.5) && (BMI <= 24.9)){
        console.log('Worked!');
        let divTag = document.getElementById('img');
        let img = document.createElement('img');
        img.setAttribute('src', 'https://cdn.betterttv.net/emote/609431bc39b5010444d0cbdc/2x.gif');
        divTag.appendChild(img)
    // image.innerHTML += `<img scr="../2x.gif" alt="heathly guy"></img>`;
    }
    else {
        text.innerText = null;

    }
});

// Clear button 
document.querySelector(".clear").
addEventListener("click", ()=>{
   let remove = height.value; weight.value;
   result.innerHTML = "";
   text.innerHTML = "";
   image.innerHTML = "";
   height.value = "";
   weight.value = "";
});