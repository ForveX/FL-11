let do_you_want_play = confirm('Do you want to play a game?');
let system_number;
let user_number;
let award;
let prize = 0;
let continue_play = true;
let max_attempt_value = 4;
let game_iteration = 1;

if (!do_you_want_play) { 
    alert('You did not become a billionaire, but can.');
} else {
    while (continue_play) {
        max_attempt_value = max_attempt_value + 4;
        award = 50 * game_iteration * 2;
        system_number = Math.round(Math.random() * max_attempt_value);
        for (let i = 3; i > 0; i--) {
            user_number = prompt('Choose a roulete pocket number from 0 to ' + 
            max_attempt_value + '\nAttempts left: ' + i + '\nTotal prize: ' + prize + 
            '$ \nPossible prize on current attempt: '+ award + '$');
            if (user_number == system_number) {
                alert('Thank you for your participation. Your prize is: '+ award+ '$');
                prize = prize + award;
                continue_play = confirm('Do you want play again?');
                break;
            } else {
                award = award/2;
                continue;
            }
        }
        if (game_iteration % 2 === 1) {
            game_iteration = game_iteration + 1;
        } else {
 game_iteration = game_iteration + 2; 
}
    }
}