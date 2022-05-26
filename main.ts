input.onSound(DetectedSound.Loud, function () {
    lights_on = !(lights_on)
    if (lights_on) {
        basic.showString("Happy Birthday!")
    }
})
let lights_on = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
