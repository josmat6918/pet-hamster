input.onButtonPressed(Button.A, function () {
    Health += 2
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Health)
})
input.onButtonPressed(Button.B, function () {
    Health += -5
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
let Health = 0
Health = 200
basic.showIcon(IconNames.Asleep)
loops.everyInterval(2000, function () {
    Health += -2
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . # # # .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # # #
        . . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # # #
        . . # . #
        . # . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . # # # .
        . # . # .
        # . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        # . # . .
        # . # . .
        `)
    if (Health == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . # . # .
            . # # # #
            `)
        basic.pause(3000)
        basic.showString("YourPetIsDead")
    }
})
basic.forever(function () {
    music.playMelody("E A E G A F C5 C ", 120)
})
