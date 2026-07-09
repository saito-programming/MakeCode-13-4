function 実際の角度 (角度: number) {
    return 角度 * 2 / 3
}
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    値 = serial.readLine()
    今何度 = parseFloat(値)
    pins.servoWritePin(AnalogPin.P0, 実際の角度(今何度))
})
let 値 = ""
let 今何度 = 0
pins.servoWritePin(AnalogPin.P0, 実際の角度(今何度))
