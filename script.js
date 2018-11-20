const $canvas = document.querySelector('.js-canvas')
const context = $canvas.getContext('2d')

// Resize
let windowWidth = $canvas.width
let windowHeight = $canvas.height
const resize = () => 
{
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight

    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
}

window.addEventListener('resize', resize)
resize()