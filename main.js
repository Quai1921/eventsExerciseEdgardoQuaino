// 1.
const btnChange = document.getElementById("changeColor")

const divChangeColor = document.getElementById("divContainer")

const textColor = document.getElementById("textColor")

btnChange.addEventListener("click", e => {
    if(divChangeColor.classList.contains("bg-gray-500")){
        textColor.textContent = "Ligth Blue"
        textColor.classList.replace("text-white", "text-blue-600")
        divChangeColor.classList.remove("bg-gray-500")
        divChangeColor.classList.add("bg-blue-200")
    } else if(divChangeColor.classList.contains("bg-blue-200")){
        textColor.textContent = "Red"
        textColor.classList.replace("text-blue-600", "text-red-600")
        divChangeColor.classList.remove("bg-blue-200")
        divChangeColor.classList.add("bg-red-400")
    } else {
        textColor.textContent = "Gray"
        textColor.classList.replace("text-red-600", "text-white")
        divChangeColor.classList.remove("bg-red-400")
        divChangeColor.classList.add("bg-gray-500")
    }
})


// 2.
const typeHere = document.getElementById("typeHere")

let text = ""

const textEntered = document.getElementById("textEntered")

const reset = document.getElementById("reset")

reset.addEventListener("click", e => {
    textEntered.textContent = ""
    typeHere.value = ""
})

typeHere.addEventListener("input", e => {
    text = e.target.value;
    textEntered.textContent = text
    return text
} )


// 3.
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const calculate = document.getElementById("calculate")
const result = document.getElementById("result")


calculate.addEventListener("click", e => {
    heightEntered = (parseInt(height.value) / 100)
    console.log(heightEntered)
    weightEntered = parseInt(weight.value)
    console.log(weightEntered)
    resultBodyMass = ( weightEntered / (heightEntered **2) )
    result.value = resultBodyMass.toFixed(2)
})


// 4.
const localCurrency = document.getElementById("localCurrency")
const amountDollars = document.getElementById("amountDollars")
const refValue = document.getElementById("refValue")
const convert = document.getElementById("convert")
const restart = document.getElementById("restart")
const reverse = document.getElementById("reverse")
const amountText = document.getElementById("amountText")
const resultText = document.getElementById("resultText")



convert.addEventListener("click", e => {
    let localCurrencyEntered = parseFloat(localCurrency.value)
    if(amountText.textContent == "Amount in ARS:"){
        let fnConvertion = localCurrencyEntered / parseFloat(refValue.textContent)
        amountDollars.value = fnConvertion.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )
    } else {
        let fnConvertion = localCurrencyEntered * parseFloat(refValue.textContent) 
        console.log(fnConvertion)
        amountDollars.value = fnConvertion.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
    }
})

reverse.addEventListener("click", e => {
    if(amountText.textContent == "Amount in ARS:" && resultText.textContent == "Result in USD:"){
        amountText.textContent = "Amount in USD:"
        resultText.textContent = "Result in ARS:"
    } else if (amountText.textContent == "Amount in USD:" && resultText.textContent == "Result in ARS:"){
        amountText.textContent = "Amount in ARS:"
        resultText.textContent = "Result in USD:"
    }
})

restart.addEventListener("click", e => {
    localCurrency.value= ""
    amountDollars.value= ""
})






























