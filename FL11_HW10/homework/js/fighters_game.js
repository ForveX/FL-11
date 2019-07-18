let Fighter = (function () {
    //closure for property acces restriction
    function Fighter(obj) {
        const maxHp = obj.hp; //fixation start hp level
        //battle log object
        let logging = { 
            name: obj.name,
            Wins: 0,
            Losses: 0
        };
        // get properties in anonymous functions 
        this.getName = function () {
            return obj.name;
        };
        this.setHealth = function (s) {
            obj.hp = s;
            return obj.hp;
        }
        this.getDamage = function () {
            return obj.damage;
        };
        this.getAgility = function () {
            return obj.agility;
        };
        this.getHealth = function () {
            return obj.hp;
        };
        // battle functions
        this.atack = function (defender) {
            let chance = (100 - defender.getAgility()) / 100;
            let successHitChance = Math.random();

            if (successHitChance < chance) {
                console.log(this.getName() + ' make ' + this.getDamage() + ' to ' + defender.getName());
                return this.getDamage();
            } else {
                console.log(defender.getName() + ' attack missed');
            }
        };

        this.dealDamage = function (damage) {
            if (this.getHealth() - damage > 0) {
                this.setHealth(this.getHealth() - damage);
            } else {
                this.setHealth(0);
            }
            return this.getHealth()
        }
        //combat history logs 
        this.addWin = function () {
            logging.Wins++;
            return logging.Wins;
        }

        this.addLoss = function () {
            logging.Losses++;
            return logging.Losses
        }

        this.logCombatHistory = function () {
            console.log(logging);
        }
        //non batle heal fighter method
        this.heal = function (amount) {
            if (this.getHealth() + amount >= maxHp) {
                this.setHealth(maxHp);
            } else {
                this.setHealth(this.getHealth() + amount);
            }
            return this.getHealth();
        }

    }
    return Fighter;
}());

function battle(fighter1, fighter2) {
    //check is some fighter dead
    if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) { 
        if (fighter1.getHealth() === 0) {
            console.log(fighter1.getName() + " is dead and can't fight");
        }
        if (fighter2.getHealth() === 0) {
            console.log(fighter2.getName() + " is dead and can't fight");
        }
    } else {
        //figth till somebody die
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            if (fighter1.atack(fighter2)) {
                fighter2.dealDamage(fighter1.getDamage());
            }
            if (fighter2.atack(fighter1)) {
                fighter1.dealDamage(fighter2.getDamage());
            }
        }
        //who win and log recording
        if(fighter1.getHealth() > 0) {
            console.log(fighter1.getName() + ' win')
            fighter1.addWin();
            fighter2.addLoss();
        } else {
            console.log(fighter2.getName() + ' win')
            fighter2.addWin();
            fighter1.addLoss();
        }
    }
}