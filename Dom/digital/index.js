const clockDate = document.getElementById('date')
const clockHour = document.getElementById('hour')
const clockMinutes = document.getElementById('minute')
const clockSeconds = document.getElementById('second')
const clockAmpm = document.getElementById('ampm')

function updateClock(){
    let d = new Date().getDate()
    let mon = new Date().getMonth() + 1
    let y = new Date().getFullYear() 
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = 'AM'

    if(h > 12){
        h = h - 12
        ampm = 'PM'
    }

    d = d < 10? '0' + d : d
    h = h < 10 ? '0' + h : h
    m = m < 10? '0' + m : m
    s = s < 10? '0' + s : s


    clockDate.innerHTML = d + '/' + mon + '/' + y
    clockHour.innerHTML = h
    clockMinutes.innerHTML = m
    clockSeconds.innerHTML = s
    clockAmpm.innerHTML = ampm

    setTimeout(() =>{
        updateClock()
    }, 1000)
}

// updateClock()