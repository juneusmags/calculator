
var allNumbers = document.querySelectorAll("#number")
var allOperations = document.querySelectorAll("#operation")
var equals = document.querySelector("#equals")
var deleteSingle = document.querySelector("#delete")
var prevDisplay = document.querySelector("#previous-display")
var currentDisplay = document.querySelector("#current-display")
var clearAll = document.querySelector("#clear")

class  Calculator {
    constructor(prevDisplay, currentDisplay){
        this.prevDisplay = prevDisplay
        this.currentDisplay= currentDisplay
        this.operater = ""
        this.currentNumber = ""
        this.prevNumber = ""
    }

    clear(){
        this.operater = ""
        this.currentNumber = ""
        this.prevNumber = ""
    }

    delete(){
        this.currentNumber = this.currentNumber.toString().slice(0,-1)
    }

    inputNumber(number){
        if(number === "." && this.currentNumber.includes(".")){
            return
        }
        this.currentNumber= this.currentNumber.toString() + number
    }

    selectOperation(operation){
        if(this.curentNumber === ""){
            return
        }
        if(this.prevNumber !== ""){
            this.calculate()
        }
        this.operater = operation
        this.prevNumber = this.currentNumber
        this.currentNumber = ""
    }

    calculate(){
        let result = ""
        let previous = parseFloat(this.prevNumber)
        let current = parseFloat(this.currentNumber)
        if(!previous || !current){
            return
        }
        
        if(this.operater === "+"){
            
            result = previous + current
        }
        else if(this.operater === "-"){
            result = previous - current
        }
        else if(this.operater === "X"){
            result = previous*current
        }
        else if(this.operater === "÷"){
          
            result = previous / current
        }
        else{
            return
        }

        if(result % 1 !== 0){
            result = Math.round(result)
        }
        this.currentNumber = result
        this.operater = ""
        this.prevNumber = ""
        
    }

    updateDisplay(){
        this.currentDisplay.innerHTML = this.currentNumber
        this.prevDisplay.innerHTML = this.prevNumber
        
    }
}

const calculator = new Calculator(prevDisplay, currentDisplay)

allNumbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        calculator.inputNumber(btn.innerHTML)
        calculator.updateDisplay()
    })
})


allOperations.forEach((operation) => {
    operation.addEventListener("click", () => {
        calculator.selectOperation(operation.innerHTML)
        calculator.updateDisplay()
    })
})

equals.addEventListener("click", () => {
    calculator.calculate()
    calculator.updateDisplay()
})

clearAll.addEventListener("click", () => {
    calculator.clear()
    calculator.updateDisplay()
}) 

deleteSingle.addEventListener("click", ()=>{
    calculator.delete()
    calculator.updateDisplay()
})