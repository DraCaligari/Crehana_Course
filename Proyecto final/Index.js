function Pokemon (name) {
    let pokemon = Object.create({});
    pokemon.name = name;
    pokemon.health = 100;
    pokemon.powerAttack = 0;
    pokemon.powerDefense = 0;

    return pokemon;
}

function Fight(team1, team2) {
    let fight = Object.create({});
    fight.team1 = team1;
    fight.team2 = team2;

    return fight;
}

function UI(){
    let ui = new Object({});
    ui.container = '';

    return ui;
}