input.onButtonPressed(Button.A, function () {
    if (PaddleA.get(LedSpriteProperty.X) > 0) {
        PaddleA.change(LedSpriteProperty.X, -1)
        PaddleB.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (PaddleA.get(LedSpriteProperty.X) < 3) {
        PaddleB.change(LedSpriteProperty.X, 1)
        PaddleA.change(LedSpriteProperty.X, 1)
    }
})
let PaddleB: game.LedSprite = null
let PaddleA: game.LedSprite = null
basic.showNumber(1)
basic.showNumber(2)
basic.showNumber(3)
basic.showString("Start")
let Score = 0
basic.showNumber(Score)
basic.pause(100)
PaddleA = game.createSprite(2, 4)
PaddleB = game.createSprite(3, 4)
let Ball = game.createSprite(randint(0, 4), 0)
let directionY = 1
let directionX = randint(-1, 1)
basic.pause(500)
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (game.isGameOver()) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("F F G G A A G G ", 120)
        }
        led.enable(true)
    }
})
basic.forever(function () {
    Ball.change(LedSpriteProperty.X, directionX)
    Ball.change(LedSpriteProperty.Y, directionY)
    if (Ball.isTouching(PaddleA) || Ball.isTouching(PaddleB)) {
        Ball.change(LedSpriteProperty.X, directionX * -1)
        Ball.change(LedSpriteProperty.Y, -1)
        directionY = -1
        directionX = randint(-1, 1)
    } else {
        if (Ball.get(LedSpriteProperty.Y) <= 0) {
            directionY = 1
            directionX = randint(-1, 1)
        } else if (Ball.get(LedSpriteProperty.Y) >= 4) {
            Ball.set(LedSpriteProperty.Blink, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (Ball.get(LedSpriteProperty.X) <= 0) {
            directionX = 1
        } else if (Ball.get(LedSpriteProperty.X) >= 4) {
            directionX = -1
        }
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
