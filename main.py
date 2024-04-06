def on_button_pressed_a():
    wuKong.set_all_motor(-100, -100)
    
def on_button_pressed_ab():
    wuKong.stop_all_motor()

def move_forward():
    wuKong.set_all_motor(100, 100)

def on_received_string(receivedString):
    if receivedString == "forward":
        basic.show_string('F')
        move_forward()
    elif receivedString == "backward":
        basic.show_string('B')
    elif receivedString == "stop":
        basic.show_string('S')
    elif receivedString == "left":
        basic.show_string('L')
    elif receivedString == "right":
        basic.show_string('R')
radio.on_received_string(on_received_string)

radio.set_group(1)

def on_forever():
    if input.button_is_pressed(Button.A):
        on_button_pressed_a()
    elif input.button_is_pressed(Button.AB):
        on_button_pressed_ab()
    elif input.button_is_pressed(Button.B):
        move_forward()
        
basic.forever(on_forever)
