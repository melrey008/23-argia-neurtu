basic.forever(function () {
    if (input.lightLevel() > 30) {
        music.setVolume(255)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showString("egun on")
    }
})
