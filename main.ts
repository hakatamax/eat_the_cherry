sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . 6 6 7 7 7 7 8 
. . . . . . 8 8 8 7 7 8 8 6 8 8 
. . e e e e c 6 6 8 8 . 8 7 8 . 
. e 2 5 4 2 e c 8 . . . 6 7 8 . 
e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
e 2 e e 2 2 2 2 e e e e c 6 8 . 
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
. c 2 e e e 2 e 2 4 2 2 2 2 c . 
. . c 2 2 2 e e 2 2 2 2 2 2 2 e 
. . . e c c e c 2 2 2 2 2 2 2 e 
. . . . . . . c 2 e e 2 2 e 2 c 
. . . . . . . c e e e e e e 2 c 
. . . . . . . . c e 2 2 2 2 c . 
. . . . . . . . . c c c c c . . 
`, SpriteKind.Food)
    mySprite2.setPosition(Math.randomRange(0, 80), Math.randomRange(0, 120))
    mySprite2.setVelocity(0, 60)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.destroy()
    info.changeScoreBy(100)
})
let mySprite2: Sprite = null
info.setScore(0)
scene.setBackgroundColor(12)
let mySprite = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
mySprite.setPosition(80, 108)
mySprite2 = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . 6 6 7 7 7 7 8 
. . . . . . 8 8 8 7 7 8 8 6 8 8 
. . e e e e c 6 6 8 8 . 8 7 8 . 
. e 2 5 4 2 e c 8 . . . 6 7 8 . 
e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
e 2 e e 2 2 2 2 e e e e c 6 8 . 
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
. c 2 e e e 2 e 2 4 2 2 2 2 c . 
. . c 2 2 2 e e 2 2 2 2 2 2 2 e 
. . . e c c e c 2 2 2 2 2 2 2 e 
. . . . . . . c 2 e e 2 2 e 2 c 
. . . . . . . c e e e e e e 2 c 
. . . . . . . . c e 2 2 2 2 c . 
. . . . . . . . . c c c c c . . 
`, SpriteKind.Food)
mySprite2.setPosition(70, 5)
mySprite2.setVelocity(0, 60)
game.splash("さくらんぼを食え！")
forever(function () {
    controller.moveSprite(mySprite)
    if (mySprite2.y >= 108) {
        mySprite2.destroy()
    }
})
