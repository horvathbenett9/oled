input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    OLED12864_I2C.showString(
    0,
    1,
    "0123456789",
    1
    )
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    OLED12864_I2C.rect(
    0,
    0,
    60,
    30,
    1
    )
})
basic.forever(function () {
    OLED12864_I2C.init(60)
})
