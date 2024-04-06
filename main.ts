function on_button_pressed_a() {
    wuKong.setAllMotor(-100, -100)
}

function on_button_pressed_ab() {
    wuKong.stopAllMotor()
}

function move_forward() {
    wuKong.setAllMotor(100, 100)
}

radio.onReceivedString(function on_received_string(receivedString: string) {
    if (receivedString == "forward") {
        basic.showString("F")
        move_forward()
    } else if (receivedString == "backward") {
        basic.showString("B")
    } else if (receivedString == "stop") {
        basic.showString("S")
    } else if (receivedString == "left") {
        basic.showString("L")
    } else if (receivedString == "right") {
        basic.showString("R")
    }
    
})
radio.setGroup(1)
basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.A)) {
        on_button_pressed_a()
    } else if (input.buttonIsPressed(Button.AB)) {
        on_button_pressed_ab()
    } else if (input.buttonIsPressed(Button.B)) {
        move_forward()
    }
    
})
