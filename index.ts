enum ItemType {
    Book = 'book',
    DVD = 'dvd',
};

type Book = {
    type:ItemType.Book
    title:string
   author:string
};

type DVD = {
   type:ItemType.DVD
   title:string
   duration:number
};


const libraryItems: (Book | DVD)[] = [
    { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: ItemType.DVD, title: 'Inception', duration: 148 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
  ];

function filterItems<T>(arg:T[], filterFun:(itam:T)=> boolean):void {
    console.log(arg.filter(filterFun));
};



filterItems(libraryItems, (arg) => {
    if ("duration" in arg) {
    return arg.duration > 120 ? true : false
}
return false}
)

filterItems(libraryItems, (arg) => {
    if ("author" in arg) {
    return arg.author ===  "Harper Lee" ? true : false
}
return false}

)



function printItemsData<T>(arg:T[]) :void{
   arg.forEach(element => {
    console.log(element);
    
   });
}

printItemsData(libraryItems)


enum moves {
    rock = "rock",
    paper = "paper",
    scissors = "scissors",
    none = "none"
}

enum result {
    "player 1 win",
    "player 2 win",
    "tie",
    "you have to chose"
}

function playGame<T, S>(player1:string, player2:string):string {
    let res : string = ""
   if (player1 === moves.paper && player2 === moves.scissors || player1 === moves.scissors && player2 === moves.rock || player1 === moves.rock && player2 === moves.scissors) {
        res = result[0]
   }
   else if (player2 === player1) {
        res = result[2]
   }
   else if (player2 === moves.none || player2 === moves.none) {
        res = result[3]
   } else {
    res = result[1]
   }
    return res
}


let player1 = {
    move: moves.paper
};

let player2 = {
    move: moves.scissors
};

console.log(playGame(player1.move, player2.move));


const pair = function <T, S>(arg1:T, arg2:S):(T|S)[] {
    return [arg1, arg2]
};

console.log(pair("moshe", 3));

const returnValue = function <T, S extends keyof T>(arg1:T, arg2:S):T[S] {
    return arg1[arg2]
};

let obj = {
    name: "moshe"
}

// console.log(returnValue(obj, "name"));

const addObjToArray = function <T, S>(arg1:T[], arg2:S):void {
    
};


