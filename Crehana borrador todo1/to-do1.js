class Pokemon {
    constructor(name) {
        this.name = name[0].toUpperCase() + name.slice(1);
        this.powerAttack = this.#setPowerAttack();
        this.powerDefense = this.#setPowerDefense();
        this.health = 100;
    }

    #setPowerAttack() {
        return Math.ceil(Math.random()* 50 + 25);
    }

    #setPowerDefense() {
        return Math.ceil(Math.random()* 50 + 25);
    }

    attack () {
        return this.powerAttack;
    }

    get isAlive() {
        return this.health > 0;
    }

    receiveDamage (damage) {
        return this.health -= damage;
    }
}
// function Pokemon (name) {
//     let pokemon = Object.create({});
//     pokemon.name = name;
//     pokemon.health = 100;
//     pokemon.powerAttack = Math.ceil(Math.random()* 50 + 25);
//     pokemon.powerDefense = Math.ceil(Math.random()* 50 + 25);
//     pokemon.attack = function(){
//         return pokemon.powerAttack
//     };
//     pokemon.isAlive = function(){
//         return pokemon.health
//     };
//     pokemon.receiveDamage = function(damage){
//         pokemon.health -= damage;
//     }

//     return pokemon;
// }

class Fight {
    constructor(team1, team2) {
        this.team1 = team1;
        this.team2 = team2;
    }

    organizeTeams() {
        return [this.team1, this.team2].sort((a, b) => b.starter - a.starter);
    }

    f1vsf2(teamName) {
        const attacker = [this.team1, this.team2].filter(
            team => team.name === teamName
        )[0];

        const defender = [this.team1, this.team2].filter(
            team => team.name !== teamName
        )[0];

        defender.members[this.numberFight].receiveDamage(
            attacker.members[this.numberFight].attack()
        );
    }

    set currentFight(position) {
        this.numberFight = position;
    }

    get areStillFighting() {
        return (
            this.team1.members[this.numberFight].isAlive &&
            this.team2.members[this.numberFight].isAlive
        );
    };
    
    get selectWinner(){
        const team2Alive = this.team2.members.filter(member => member.isAlive);
        const team1Alive = this.team1.members.filter(member => member.isAlive);

        return team1Alive.length > team2Alive.length 
        ? this.team1.name
        : this.team2.name;
    };
}

// function Fight(team1, team2) {
//     let fight = Object.create({});
//     fight.team1 = team1;
//     fight.team2 = team2;
//     fight.organizeTeams = function(){
//         return[fight.team1, fight.team2].sort((a, b) => b.starter - a.starter);
//     };
//     fight.currentFight = function (position) {
//         fight.numberFight = position;
//     };
//     fight.f1vsf2 = function(teamName) {
//         const attacker = [fight.team1, fight.team2].filter(
//             team=> team.name === teamName
//         )[0];

//         const defender = [fight.team1, fight.team2].filter(
//             team => team.name !== teamName
//         )[0];

//         defender.members[fight.numberFight].receiveDamage(
//             attacker.members[fight.numberFight].attack()
//         );
//     };

//     fight.areStillFighting = function (){
//         return(
//             fight.team1.members[fight.numberFight].isAlive &&
//             fight.team2.members[fight.numberFight].isAlive
//             );
//     };
//     fight.selectWinner = function(){
//         const team1Alive = fight.team1.members.filter(member => member.isAlive);
//         const team2Alive = fight.team2.members.filter(member => member.isAlive);
        
//         return team1Alive.length > team2Alive.length 
//         ? fight.team1.name
//         : fight.team2.name;
//     };

//     return fight;
// }

class UI {
    constructor() {
        this.container = document.querySelector('#body');
    }

    clearContainer() {
        [...this.container.children].forEach(child => {
            this.container.removeChild(child);
         });
     }

     showMessage(message, variant, team) {
        const pClasses = {
            title: 'text-lg font-semibold text-pokemon-blue mb-3',
            subtitle: 'text-base font-normal text-pokemon-blue mb-3 w-full',
            'Team 1': 'text-left',
            'Team 2': 'text-right',
            result: 'text-lg font-semibold text-pokemon-red mt-5 mb-5 text-center',
            final: 'text-4xl font-bold text-pokemon-yellow mt-5 mb-10',
        };

        const p = this.createElement('p', `${pClasses[variant]} ${pClasses[team]}`);

        p.innerText = message;

        this.container.appendChild(p);
     }

     createElement(type,classes) {
        const element = document.createElement(type);
        element.className = classes;

        return element;
     }

     showRestart() {
        const button = this.createElement(
            'button',
            'hover:bg-pokemon-blue text-pokemon-blue hover:text-white inline px-5 py-3 rounded-lg border border-pokemon-blue transition-all duration-125'
        );

        button.innerText = 'Restart battle';
        button.onclick = resetTeams;

        this.container.appendChild(button);
     }

     restart() {
        this.clearContainer();

        document
            .querySelectorAll('img')
            .forEach(tag=> (tag.src= '.assets/pokeball.jpeg'));

            const button = this.createElement(
                'button',
                'hover:bg-pokemon-blue text-pokemon-blue hover:text-white inline px-5 py-3 rounded-lg border border-pokemon-blue transition-all duration-125'
            );
                button.innerText = 'Star Fight';
                button.onclick = startFight; 

        this.container.appendChild(button);
        }


     }
     

// function UI(){
//     let ui = new Object({});
//     ui.container = document.querySelector('#body');
//     ui.clearContainer = function () {
//         [...ui.container.children].forEach(child => {
//             ui.container.removeChild(child);
//         });
//     };
//     ui.createElement = function (type,classes) {
//         const element = document.createElement(type);
//         element.className = classes;

//         return element;
//     };
//     ui.showMessage = function (message, variant, team) {
//         const pClasses = {
//             title: 'text-lg font-semibold text-pokemon-blue mb-3',
//             subtitle: 'text-base font-normal text-pokemon-blue mb-3 w-full',
//             'Team 1': 'text-left',
//             'Team 2': 'text-right',
//             result: 'text-lg font-semibold text-pokemon-red mt-5 mb-5 text-center',
//             final: 'text-4xl font-bold text-pokemon-yellow mt-5 mb-10',
//         };

//         const p = ui.createElement('p', `${pClasses[variant]} ${pClasses[team]}`);
//         p.innerText = message;
//         ui.container.appendChild(p);
//     };

//     ui.showRestart = function(){
//         const button = ui.createElement(
//             'button',
//             'hover:bg-pokemon-blue text-pokemon-blue hover:text-white inline px-5 py-3 rounded-lg border border-pokemon-blue transition-all duration-125'
//         );
//         button.innerText = 'Restart battle';
//         button.onclick = resetTeams;

//         ui.container.appendChild(button);
//     };

//     ui.restart = function () {
//         ui.clearContainer();
//         document
//         .querySelectorAll('img')
//         .forEach(tag=> (tag.src= '.assets/pokeball.jpeg'));

//         const button = ui.createElement(
//             'button',
//             'hover:bg-pokemon-blue text-pokemon-blue hover:text-white inline px-5 py-3 rounded-lg border border-pokemon-blue transition-all duration-125'
//         );
//         button.innerText = 'Star Fight';
//         button.onclick = startFight; 

//         ui.container.appendChild(button);
//     }

//     return ui;
// }