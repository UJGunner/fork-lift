radio.onReceivedNumber(function (receivedNumber) {
    lock = 1
})
function forkDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 10)
}
input.onButtonPressed(Button.A, function () {
    if (stop == 0) {
        stop = 1
    } else if (stop == 1) {
        stop = 0
    }
})
function backward () {
    wuKong.setAllMotor(-100, -100)
}
input.onButtonPressed(Button.AB, function () {
    if (lock == 1) {
        lock = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (stop == 0) {
        stop = 1
    } else if (stop == 1) {
        stop = 0
    }
})
radio.onReceivedValue(function (name, value) {
    name = name
    action = value
})
function forward () {
    wuKong.setAllMotor(100, 100)
}
function forkUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
let radio2 = 0
let action = 0
let stop = 0
let lock = 0
joystickbit.initJoystickBit()
radio.setGroup(27)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    let name = ""
    if (name == "UJGunner") {
        if (6 == action) {
            forkUp()
        } else if (7 == action) {
            forkDown()
        } else if (1 == action) {
            forward()
        } else if (2 == action) {
            backward()
        } else if (0 == action) {
            wuKong.stopAllMotor()
        }
    }
})
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendValue("UJGunner", 6)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendValue("UJGunner", 7)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 570) {
        radio.sendValue("UJGunner", 1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 470) {
        radio.sendValue("UJGunner", 2)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 470 && joystickbit.getRockerValue(joystickbit.rockerType.Y) == 570) {
        radio.sendValue("UJGunner", 0)
    }
})
basic.forever(function () {
    if (lock == 1) {
        radio.sendNumber(randint(6, 7))
    } else if (radio2 >= 26) {
        radio2 += 0
    } else {
        radio2 += 1
        radio.setGroup(radio2)
        radio.sendNumber(randint(6, 7))
    }
})
