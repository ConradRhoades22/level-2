class Character{
    constructor(){
        this.name = ""
        this.coins = 0
        this.status = "Small"
        this.star = false
    }
    gotPowerUp(){
        if (this.status === "Small") {
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "PoweredUp"
        }else if (this.status === "PoweredUp") {
            this.star = true
        }
    }
    gotHit(){
        if(this.star === true){
            this.star = false
        } else if (this.status === "PoweredUp") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Small") {
            this.status = "Dead"
            clearInterval(game)
        } 
    }
    addCoins(){
        this.coins++
    }
    setName(){
        let nameNum = randomNum(0, 1)
        if (nameNum === 0) {
            this.name = "Mario"
        } else if (nameNum === 1) {
            this.name = "Luigi"
        }
    }
    
    printStatus(){
        console.log(`        -----
        Name: ${this.name} 
        Status: ${this.status}
        Coins: ${this.coins}`)
    }
    gameRun(){ 
        let currentNum = randomNum(0, 2)
        if (player.status === "Dead") {
            player.printStatus()
        } else if (currentNum === 1) {
            player.gotPowerUp()
            player.printStatus()
        } else if (currentNum === 2) {
            player.addCoins()
            player.printStatus()
        } else if (currentNum === 0) {
            player.gotHit()
            player.printStatus()
        }
    }
}

const player = new Character()

player.setName()
player.printStatus()

let game = setInterval(player.gameRun, 1000)

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
