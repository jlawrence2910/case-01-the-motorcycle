def move_backward():
    wuKong.set_all_motor(-100, -100)
    
def stop():
    wuKong.stop_all_motor()

def move_forward():
    wuKong.set_all_motor(100, 100)

def turn(direction):
    if direction == 'left':
        wuKong.set_all_motor(100, 20)
    elif direction == 'right':
        wuKong.set_all_motor(20, 100)


def getSonar():
    distance = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    return distance


def on_received_string(receivedString):
    if receivedString == "forward":
        basic.show_string('F')
        move_forward()
    elif receivedString == "backward":
        basic.show_string('B')
        move_backward()
    elif receivedString == "stop":
        basic.show_string('S')
        stop()
    elif receivedString == "left":
        basic.show_string('L')
        turn('left')
    elif receivedString == "right":
        basic.show_string('R')
        turn('right')
radio.on_received_string(on_received_string)


radio.set_group(1)


def on_forever():
    if input.button_is_pressed(Button.A):
        move_backward()
    elif input.button_is_pressed(Button.AB):
        stop()
    elif input.button_is_pressed(Button.B):
        move_forward()
    
    # get sonar value
    #distance = getSonar()
    #if distance < 2:
    #    stop()
basic.forever(on_forever)