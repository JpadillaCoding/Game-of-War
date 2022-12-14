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
            //random card is picked from the deck. copies into users deck and deletes from original deck
            let randomNum = randomCard();
            user[i] = deck[randomNum];
            deck.splice(randomNum, 1)
        }
    }
    function winnerCheck() {
        //Check for winner by checking empty decks. Done after every game/war/chainedwar
        if (player1.length == 0) {
            console.log("Computer won the game!")
            return 0
        }
        else if (computer.length == 0) {
            console.log("Player won the game!")
            return 0
        }
        else {
            normalGame();
        }
    }
    function chainedWar() {
        //Needed a seperate func for multiple wars in a row, removed splice(0,1)
        //since chained wars only draw 3 more cards
        player1War = player1.splice(0,3).concat(player1War)
        computerWar = computer.splice(0,3).concat(computerWar)

        let playerCard = player1War[0];
        let computerCard = computerWar[0];

        console.log(`Player's card is: ${playerCard} \nComputer card is: ${computerCard}`);
    
        if (values[playerCard] > values[computerCard]) {

            player1 = player1.concat(player1War,computerWar)
            computerWar = []
            player1War = []

            console.log(`Player wins! \nPlayer card count: ${player1.length}\nComputer card count: ${computer.length}`);

            winnerCheck();
        }

        else if (values[playerCard] < values[computerCard]) { 

            computer = computer.concat(computerWar, player1War)
            computerWar = []
            player1War = []

            console.log(`Computer wins! \nPlayer card count: ${player1.length}\nComputer card count: ${computer.length}`);

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
        //concating after the splice puts the original card in the back of the war deck
        //war deck keeps stacking as long as wars keep going
        player1War = player1.splice(0,3).concat(player1War)
        computerWar = computer.splice(0,3).concat(computerWar)

        let playerCard = player1War[0];
        let computerCard = computerWar[0];
        console.log(`Player's card is: ${playerCard} \nComputer card is: ${computerCard}`);
    
        if (values[playerCard] > values[computerCard]) {
            //winner takes all cards in war decks, then clear both war decks.
            player1 = player1.concat(player1War,computerWar)
            computerWar = []
            player1War = []

            console.log(`Player wins! \nPlayer card count: ${player1.length}\nComputer card count: ${computer.length}`);

            winnerCheck();
        }

        else if (values[playerCard] < values[computerCard]) {

            computer = computer.concat(computerWar, player1War)
            computerWar = []
            player1War = []

            console.log(`Computer wins! \nPlayer card count: ${player1.length}\nComputer card count: ${computer.length}`);

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
        
        console.log(`Player's card is: ${playerCard} \nComputer card is: ${computerCard}`)
        if (values[playerCard] > values[computerCard]) {
            //move players card to back,take computers card, and delete taken cards from computer
            player1.push(player1.shift([0]));
            player1.push(computer[0]);
            computer.splice(0,1);
            console.log(`Player wins! \nPlayer card count: ${player1.length}\nComputer card count: ${computer.length}`);

            winnerCheck();
        }
        else if (values[playerCard] < values[computerCard]) {
            //move computer card to back,take players card, and delete taken cards from player
            computer.push(computer.shift([0]));
            computer.push(player1[0]);
            player1.splice(0,1);

            console.log(`Computer wins! \nPlayer card count: ${player1.length}\nComputer card count: ${computer.length}`);

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
/* class Card {
    constructor(suit, rank, score) {
        
        this.suit = suit,
        this.rank = rank,
        this.score = score 
    }
}
class Deck {
    constructor(){
        this.length = 52
        this.cards = []
    }
    draw() {
        let randomCard = Math.floor(Math.random() * this.length)
        
        return randomCard
    }
    createDeck() {
        const suits = ['hearts','spades','clubs','diamonds']
        const ranks = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace']
        const value = [2,3,4,5,6,7,8,9,10,11,12,13,14] 
        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < ranks.length; j++){
                this.cards.push(new Card(suits[i],ranks[j],value[j]))
            }
        }
    }
    shuffle() {
        for (let i = 0; i < 20; i++) {
            this.cards = this.cards.sort((a, b) => 0.5 - Math.random());            
        }

    }
    
}
class Player {
    constructor() {
        this.length = 26
        this.playerDeck = []
        this.playerDeck = masterDeck.cards.splice(0,26);
    }
} 

const masterDeck = new Deck();
masterDeck.createDeck();
masterDeck.shuffle();
console.log(masterDeck.cards);
let player = new Player;
let computer = new Player;
console.log(masterDeck.cards, player.playerDeck, computer.playerDeck); */