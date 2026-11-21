 let inputScreen = document.getElementById("inputScreen")
        let outputScreen = document.getElementById("outputScreen")
        let history = document.getElementById("history")

        function appendValue(value) {
            inputScreen.value += value
        }

        function appendFunction(value) {
            inputScreen.value += value
        }

        function clearAll() {
            inputScreen.value = ""
            outputScreen.value = ""
        }
        function deleteLast() {
            inputScreen.value = inputScreen.value.slice(0, -1)
        }

        function calculate() {

            try {
                let result = eval(inputScreen.value)
                outputScreen.value = result
                addHistory(inputScreen.value + " = " + result)
            }
            catch {
                outputScreen.value = "Error"
            }

        }
 function squareValue() {

            try {
                let result = eval(inputScreen.value)
                outputScreen.value = result * result
                addHistory(result + "² = " + outputScreen.value)
            }
            catch {
                outputScreen.value = "Error"
            }

        }

        function factorial() {

            try {
                let num = eval(inputScreen.value)

                if (num < 0) {
                    outputScreen.value = "Error"
                    return
                }

                let fact = 1

                for (let i = 1; i <= num; i++) {
                    fact *= i
                }

                outputScreen.value = fact
                addHistory(num + "! = " + fact)
            }
            catch {
                outputScreen.value = "Error"
            }

        }
function addHistory(text) {
            let div = document.createElement("div")
            div.classList.add("history-item")
            div.innerText = text
            history.prepend(div)
        }

        function toggleTheme() {
            document.body.classList.toggle("hashim")
        }

        document.addEventListener("keydown", function (event) {

            let key = event.key

            if (!isNaN(key) || "+-*/.%()".includes(key)) {
                appendValue(key)
            }

            else if (key === "Enter") {
                calculate()
            }

            else if (key === "Backspace") {
                deleteLast()
            }

            else if (key === "Escape") {
                clearAll()
            }

        })
