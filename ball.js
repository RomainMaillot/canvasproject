class ball
{
    constructor(_posX, _posY)
    {
        this.x = _posX
        this.y = _posY
        this.radius = Math.random() * 100
        this.speed_x = -25 + Math.random() * 50
        this.speed_y = 0
        this.gravity = 0.8
        this.airFriction = 0.99
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`
        this._draw()
    }

    _draw()
    {
        // Update
        this.speed_y *= this.airFriction
        this.speed_x *= this.airFriction
        this.speed_y += this.gravity
    
        this.x += this.speed_x
        this.y += this.speed_y
    
        if(this.y > windowHeight - this.radius)
        {
            this.speed_y *= -1
            this.y = windowHeight - this.radius
        }
        if(this.x > windowWidth - this.radius)
        {
            this.speed_x *= -1
            this.x = windowWidth - this.radius
        }
        if(this.x < this.radius)
        {
            this.speed_x *= -1
            this.x = this.radius
        }
        
    
        // Draw
        context.beginPath()
        context.fillStyle = `${this.color}`
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context.fill()
    }
}