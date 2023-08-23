"use strict";
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (ItemType = {}));
;
const libraryItems = [
    { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: ItemType.DVD, title: 'Inception', duration: 148 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];
function filterItems(arg, filterFun) {
    console.log(arg.filter(filterFun));
}
;
filterItems(libraryItems, (arg) => {
    if ("duration" in arg) {
        return arg.duration > 120 ? true : false;
    }
    return false;
});
filterItems(libraryItems, (arg) => {
    if ("author" in arg) {
        return arg.author === "Harper Lee" ? true : false;
    }
    return false;
});
function printItemsData(arg) {
    arg.forEach(element => {
        console.log(element);
    });
}
printItemsData(libraryItems);
var moves;
(function (moves) {
    moves["rock"] = "rock";
    moves["paper"] = "paper";
    moves["scissors"] = "scissors";
    moves["none"] = "none";
})(moves || (moves = {}));
var result;
(function (result) {
    result[result["player 1 win"] = 0] = "player 1 win";
    result[result["player 2 win"] = 1] = "player 2 win";
    result[result["tie"] = 2] = "tie";
    result[result["you have to chose"] = 3] = "you have to chose";
})(result || (result = {}));
function playGame(player1, player2) {
    let res = "";
    if (player1 === moves.paper && player2 === moves.scissors || player1 === moves.scissors && player2 === moves.rock || player1 === moves.rock && player2 === moves.scissors) {
        res = result[0];
    }
    else if (player2 === player1) {
        res = result[2];
    }
    else if (player2 === moves.none || player2 === moves.none) {
        res = result[3];
    }
    else {
        res = result[1];
    }
    return res;
}
let player1 = {
    move: moves.paper
};
let player2 = {
    move: moves.scissors
};
console.log(playGame(player1.move, player2.move));
const pair = function (arg1, arg2) {
    return [arg1, arg2];
};
console.log(pair("moshe", 3));
const returnValue = function (arg1, arg2) {
    return arg1[arg2];
};
let obj = {
    name: "moshe"
};
console.log(returnValue(obj, "name"));
