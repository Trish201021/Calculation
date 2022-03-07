input.onButtonPressed(Button.A, function () {
    VARIABLES += 1
    basic.showNumber(VARIABLES)
})
input.onButtonPressed(Button.AB, function () {
    a = VARIABLES + 9
    B = VARIABLES - 9
    C = VARIABLES * 2
    D = VARIABLES + 3
    E = VARIABLES % 4
    F = Math.sqrt(VARIABLES)
    G = Math.round(3 / 4)
    H = VARIABLES
})
input.onButtonPressed(Button.B, function () {
    VARIABLES += -1
    basic.showNumber(VARIABLES)
})
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let a = 0
let VARIABLES = 0
VARIABLES = 0
basic.forever(function () {
	
})
