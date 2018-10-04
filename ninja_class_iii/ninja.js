function Ninja(name,health=100){
    this.name        = name;
    this.health      = health;

    let speed        = 3;
    let strength     = 3;

    this.setSpeed    = function(v){speed = v;}
    this.getSpeed    = function(){return speed;}
    this.setStrength = function(v){strength = v;}
    this.getStrength = function(){return strength;}
    this.sayName = function(){console.log( this.name );}

    this.showStats = function(){
        console.log( 
            "Name: "+this.name+"\n"+
            "Health: "+this.health+"\n"+
            "Speed: "+this.getSpeed()+"\n"+
            "Strength: "+this.getStrength()
        );
    }

    this.drinkSake = function(){this.health += 10;}
}

function doTestStuff(){
    let choi = new Ninja("Michael Choi");
    // console.log( choi.getSpeed() )
    // choi.setSpeed(123);
    // console.log( choi.getSpeed() )
    // choi.sayName();

    choi.showStats();
    choi.drinkSake();
    choi.showStats();
}
doTestStuff();