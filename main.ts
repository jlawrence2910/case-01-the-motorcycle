function move_backward() {
    wuKong.setAllMotor(-100, -100)
}

function stop() {
    wuKong.stopAllMotor()
}

function move_forward() {
    wuKong.setAllMotor(100, 100)
}

function turn(direction: string) {
    if (direction == "left") {
        wuKong.setAllMotor(100, 20)
    } else if (direction == "right") {
        wuKong.setAllMotor(20, 100)
    }
    
}

function getSonar(): number {
    let distance = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    return distance
}

radio.onReceivedString(function on_received_string(receivedString: string) {
    if (receivedString == "forward") {
        basic.showString("F")
        move_forward()
    } else if (receivedString == "backward") {
        basic.showString("B")
        move_backward()
    } else if (receivedString == "stop") {
        basic.showString("S")
        stop()
    } else if (receivedString == "left") {
        basic.showString("L")
        turn("left")
    } else if (receivedString == "right") {
        basic.showString("R")
        turn("right")
    }
    
})
radio.setGroup(1)
//  get sonar value
// distance = getSonar()
// if distance < 2:
//     stop()
basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.A)) {
        move_backward()
    } else if (input.buttonIsPressed(Button.AB)) {
        stop()
    } else if (input.buttonIsPressed(Button.B)) {
        move_forward()
    }
    
})
