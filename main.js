document.addEventListener('DOMContentLoaded', () => {
    const displayInput = document.getElementById('displayInput')
    const buttonsContainer = document.getElementById('buttonsContainer')

    const buttons = [
        '1','2','3','4','5','6','7','8','9','0','-','+','*','/','C','='
    ]

    buttons.forEach(buttonText => {
        const button = document.createElement('button')

        button.textContent = buttonText

        button.addEventListener('click', () => handleClick(buttonText))

        buttonsContainer.appendChild(button)
    })

    let expression = ''


    function handleClick(value) {
        if(value === '=') {
            calculateResult()
        } else if(value === 'C') {
            clearDisplay()
        } else {
            addToDisplay(value)
        }
    }

    function addToDisplay(value) {

        expression += value
        displayInput.value = expression
    } 
    
    function clearDisplay() {
        expression = ''
        displayInput.value = expression
    }

    function calculateResult() {
        try {

            if(expression.includes('/0')) {
                throw new Error('No se puede dividir por cero')
            }

            expression = eval(expression)

            if(isNaN(expression)) {
                throw new Error('Numero no definido')
            }

            displayInput.value = expression
        } catch (error) {
            displayInput.value = error.message
        }
    }
})