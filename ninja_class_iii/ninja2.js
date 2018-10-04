class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;

        let speed = 3;
        let strength = 3;

        this.setSpeed = function(v){speed = v;}
        this.getSpeed = function(){return speed;}
        this.setStrength = function(v){strength = v;}
        this.getStrength = function(){return strength;}
    }

    sayName(){
        console.log( this.name );
    }

    showStats(){
        console.log( 
            "Name: "+this.name+"\n"+
            "Health: "+this.health+"\n"+
            "Speed: "+this.getSpeed()+"\n"+
            "Strength: "+this.getStrength()
        );        
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200;
        this.setSpeed(10);
        this.setStrength(10);
        this.wisdom = 10; 
    }

    drinkSake(){
        super.drinkSake();
        this.wisdom += 1;
    }

    showStats(){
        super.showStats();
        console.log("Wisdom: "+this.wisdom);
    }

    speakWisdom(){
        this.showStats();
        this.drinkSake();
        console.log("A bird in the hand is worth two in the bush!");
        this.showStats();
    }
}

let will = new Sensei("Will Goode");
will.speakWisdom();