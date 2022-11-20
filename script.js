const field = document.querySelector('.field') 
const startBtn = document.querySelector('.start-btn') 
const cancelBtn = document.querySelector('.cancel-btn') 
const point = document.querySelector('.point') 

let points = 0
let createBox = () => {
    let box = document.createElement('div')
    field.appendChild(box)

    box.style.width = box.style.height = `${Math.floor(Math.random() * 30 + 50)}px`
    box.style.background = 'black'
    box.style.position = 'absolute'
    box.className = 'target'

    box.style.top = `${Math.floor(Math.random() * 450)}px`
    box.style.left = `${Math.floor(Math.random() * 850)}px`

    box.addEventListener('click', () => {
        points ++
        point.innerHTML = points
        box.remove()
    })

    return box
}

let playing = false
let play = () => {
    if (playing) {
        createBox()
        setTimeout(() => {
            play()
        }, 2000)
    } else {

        return
    }
}

startBtn.addEventListener('click', () => {
    playing = true
    startBtn.disabled = true
    play()
})
cancelBtn.addEventListener('click', () => {
    playing = false
    points = 0
    startBtn.disabled = false
    point.innerHTML = points

    let els = document.querySelectorAll('.target')
    els.forEach(e => {
        e.remove()
    })
})