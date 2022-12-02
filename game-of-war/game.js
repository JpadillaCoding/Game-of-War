/* TODO
*-Make values for each card 
*-Make the game start at the load of the page
*-distrubute at random 26 cards in array
    *-create randomizer
    *-assign to each player
-Create func to do a normal round
    *-draw from top of stack(array)
    *-if else comaprison for higher value 
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
-Player can only go onto next round with blank and enter, make sure 
    this is told 
*/
function gow() {
    //Showing the values of each possible card assigned
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
    //A deck of cards 
    let deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,
        7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,'J','J','J','J',
        'Q','Q','Q','Q','K','K','K','K','A','A','A','A']
    console.log("Welcome to the game!");
    let player1 = []
    let computer = []
    //gets a random card from the deck. reusable and changes to size of deck
    function randomCard() {
        return Math.floor(Math.random() * deck.length);
    }
    //moves an element from deck into the chosen user (playe or computer) by calling func
    function assignCards(user) {
        for(let i = 0; i < 26; i++) {
            //random card is called on variable for x2 uses. copies into users deck and deletes from original deck
            let randomNum = randomCard();
            user[i] = deck[randomNum];
            deck.splice(randomNum, 1)
        }
    }
    function normalGame() {
        //use the top of the deck and compare
        playerCard = player1[0];
        computerCard = computer[0];

        console.log("Player's card is: " + playerCard);
        console.log("computer's card is: " +computerCard);
        //comparing the 2 and no war function yet
        if (values[playerCard] > values[computerCard]) {
            console.log("Player wins!");
            player1.push(computer[0])
            computer.splice(0,1)
        }
        else if (values[playerCard] < values[computerCard]) {
            console.log("computer wins!");
            computer.push(player1[0])
            player1.splice(0,1)
        }
        else {
            console.log("ayooo were going to war!")
        }
    }
    //checking status of decks
    assignCards(player1);
    assignCards(computer);
    console.log("player 1: ", player1);
    console.log("computer: " , computer);
    console.log(deck);
    normalGame();
    console.log("player 1: ", player1);
    console.log("computer: " , computer);
    console.log(deck);
};