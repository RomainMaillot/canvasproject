const $canvas = document.querySelector('.js-canvas')
const context = $canvas.getContext('2d')
let balls = new Array()
let posX, posY

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

// Animation
window.addEventListener(
    'click',
    (_event) =>
    {
        createBall(_event)
        posX = _event.clientX
        posY = _event.clientY
    }
)

const createBall = (mousePos) =>
{
    balls.push(new ball(posX, posY))
}

const moveBalls = () =>
{
    window.requestAnimationFrame(moveBalls)
    // Clear
    context.clearRect(0, 0, windowWidth, windowHeight)
    if(balls.length != 0)
    {
        for (const ball of balls) 
        {
            ball._draw()
        }
    }
}
moveBalls()