/* TODO
*-Make values for each card 
*-Make the game start at the load of the page
*-distrubute at random 26 cards in array
    *-create randomizer
    *-assign to each player
-Create func to do a normal round
    *-draw from top of stack(array)
    *-if else comaprison for higher value 
    *-move card to player that won to back of stack
    *-if card is the same value, go to WAR
-create war round func
    *-create seperate array (move not just copy) for 3 cards
    *-draw the top of the array
    *-compare, if a win then go back to normal rounds with winner having both sets
    -else redo the war func, allowing to keep adding 3 cards to top of stack
    *-if normal round deck is empty, game is tied

*-check if any of the decks are empty, if empty then opposite player won.

-- optimizations --
-make war and normal game one function. calling by paramater of (1) or (3)
-make war one function 
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
    let player1War = []
    let computer = []
    let computerWar = []
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
    function winnerCheck() {
        //Check for winner by checking empty decks. Done after every game/war
        if (player1.length == 0) {
            console.log("computer won the game!")
            return 0
        }
        else if (computer.length == 0) {
            console.log("player won the game!")
            return 0
        }
        else {
            normalGame();
        }
    }
    function chainedWar() {
        //Needed a seperate func for multiple wars in a row, removed splice(0,1)
        player1War = player1.splice(0,3).concat(player1War)
        computerWar = computer.splice(0,3).concat(computerWar)

        let playerCard = player1War[0];
        let computerCard = computerWar[0];

        console.log("Player's card is: " + playerCard);
        console.log("computer's card is: " + computerCard);
    
        if (values[playerCard] > values[computerCard]) {
            console.log("Player wins!");

            player1 = player1.concat(player1War,computerWar)
            computerWar = []
            player1War = []

            winnerCheck();
        }

        else if (values[playerCard] < values[computerCard]) {
            console.log("computer wins!");

            computer = computer.concat(computerWar, player1War)
            computerWar = []
            player1War = []

            winnerCheck();
        }

        else {
            console.log("Going to war!")
            chainedWar();
        }
    }
    function war() {
        //war deck gets original comparison card +3. OG card moved to back of war Deck for new comparison.
        player1War = player1.splice(0,1).concat(player1War)
        computerWar = computer.splice(0,1).concat(computerWar)
        player1War = player1.splice(0,3).concat(player1War)
        computerWar = computer.splice(0,3).concat(computerWar)

        let playerCard = player1War[0];
        let computerCard = computerWar[0];
        console.log("Player's card is: " + playerCard);
        console.log("computer's card is: " +computerCard);
    
        if (values[playerCard] > values[computerCard]) {
            console.log("Player wins!");
            //take all cards in war decks, then clear both war decks.
            player1 = player1.concat(player1War,computerWar)
            computerWar = []
            player1War = []

            winnerCheck();
        }

        else if (values[playerCard] < values[computerCard]) {
            console.log("computer wins!");

            computer = computer.concat(computerWar, player1War)
            computerWar = []
            player1War = []

            winnerCheck();
        }

        else {
            console.log("Going to war!")
            chainedWar();
        }
        
    }

    function normalGame() {

        let playerCard = player1[0];
        let computerCard = computer[0];
        
        console.log("Player's card is: " + playerCard);
        console.log("computer's card is: " +computerCard);
        if (values[playerCard] > values[computerCard]) {
            console.log("Player wins!");
            //move players card to back,take computers card, and delete compauters card
            player1.push(player1.shift([0]));
            player1.push(computer[0]);
            computer.splice(0,1);

            winnerCheck();
        }
        else if (values[playerCard] < values[computerCard]) {
            console.log("computer wins!");
  
            computer.push(computer.shift([0]));
            computer.push(player1[0]);
            player1.splice(0,1);

            winnerCheck();
        }
        else {
            console.log("Going to war!")
            war();
        }
    }
    //checking status of decks
    assignCards(player1);
    assignCards(computer);
    normalGame();
    /* checks all cards have 4 pairs and winner has all the cards. remove this comments to verify.
    player1.sort();
    computer.sort();
    console.log('player 1:' , player1 , 'war: ', player1War)
    console.log('computer:' , computer , 'war: ', computerWar)
    */
};