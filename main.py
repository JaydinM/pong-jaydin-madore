def on_button_pressed_a():
    if PaddleA.get(LedSpriteProperty.X) > 0:
        PaddleA.change(LedSpriteProperty.X, -1)
        PaddleB.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if PaddleA.get(LedSpriteProperty.X) < 3:
        PaddleB.change(LedSpriteProperty.X, 1)
        PaddleA.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

PaddleB: game.LedSprite = None
PaddleA: game.LedSprite = None
basic.show_number(1)
basic.show_number(2)
basic.show_number(3)
basic.show_string("Start")
PaddleA = game.create_sprite(2, 4)
PaddleB = game.create_sprite(3, 4)
Ball = game.create_sprite(randint(0, 4), 0)
directionY = 1
directionX = randint(-1, 1)
basic.pause(500)

def on_forever():
    global directionY, directionX
    Ball.change(LedSpriteProperty.X, directionX)
    Ball.change(LedSpriteProperty.Y, directionY)
    if Ball.is_touching(PaddleA) or Ball.is_touching(PaddleB):
        Ball.change(LedSpriteProperty.X, directionX * -1)
        Ball.change(LedSpriteProperty.Y, -1)
        directionY = -1
        directionX = randint(-1, 1)
    else:
        if Ball.get(LedSpriteProperty.Y) <= 0:
            directionY = 1
            directionX = randint(-1, 1)
        elif Ball.get(LedSpriteProperty.Y) >= 4:
            Ball.set(LedSpriteProperty.BLINK, 1)
            basic.pause(2000)
            game.game_over()
        if Ball.get(LedSpriteProperty.X) <= 0:
            directionX = 1
        elif Ball.get(LedSpriteProperty.X) >= 4:
            directionX = -1
        basic.pause(500)
basic.forever(on_forever)

def on_forever2():
    if game.is_game_over():
        for index in range(2):
            music.play_melody("F F G G A A G G ", 120)
        led.enable(True)
basic.forever(on_forever2)
