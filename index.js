const btn = document.getElementById("btn");
const input = document.getElementById("input");
const copyBtn = document.querySelector(".far");
const slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
    const passwardSymbols = "qwertyuiopasdfghjklzxcvbnm`1234567890-=.,~!@#$%^&*()_+{}QWERTYUIOPASDFGHJKLZXCVBNM";
    const passwardLength = 14;
    let passward = "";
    for (let index = 0; index < passwardLength; index++) {
        const randomNum = Math.floor(Math.random() * passwardSymbols.length);
        passward += passwardSymbols.substring(randomNum, randomNum + 1);
    }
        input.value = passward;  
})

copyBtn.addEventListener("click", () => {
    if(input.value){
        input.select();
        input.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(input.value);
        slider.classList.add("active");
            slider.innerText = input.value + "  copied"
        setTimeout(() => {
            slider.classList.remove("active");
        }, 2000)
        
    }
   
})