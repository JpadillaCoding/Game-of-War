/* TODO
*-Make values for each card 
*-Make the game start at the load of the page
-distrubute at random 26 cards in array
    -create randomizer
    -assign to each player
-Create func to do a normal round
    -draw from top of stack(array)
    -if else comaprison for higher value 
    -move card to player that won to back of stack
    -if card is the same value, go to WAR
-create war round func
    -create seperate array (move not just copy) for 3 cards
    -draw the top of the array
    -compare, if a win then go back to normal rounds with winner having both sets
    -else redo the war func, allowing to keep adding 3 cards to top of stack
    -if normal round deck is empty, game is tied

-check if any of the decks are empty, if empty then opposite player won.

-- edge cases to include --
-make sure all inputs are capital letters or force capitals
-only 2-10nums accepted
*/
function gow() {
    const values = {
        2:2,
        3:3,
        4:4,
        5:5,
        6:6,
        7:7,
        8:8,
        9:9,
        10:10,
        'J':11,
        'Q':12,
        'K':13,
        'A':14
    }
    let deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,
        7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,'J','J','J','J',
        'Q','Q','Q','Q','K','K','K','K','A','A','A','A']
    console.log("Welcome to the game!");
    let player = []
    let computer = []
    function randomKey() {
        const keys = Object.keys(values);

        return keys[Math.floor(Math.random() * keys.length)];
    }

}