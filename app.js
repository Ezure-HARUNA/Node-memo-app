console.log("app.js稼働開始")

//外部関数を呼び出す関数
//➀コアモジュール、ビルドインモジュール

//➂npmパッケージ

const fs = require("fs");
const os = require("os");

//➁オリジナルファイル
const notes = require("./notes.js");
let result = notes.addNote()
console.log(result)

// let user = os.userInfo()
console.log(user)

//ES6, ECMAScript

// fs.appendFile("greeting.txt", "Hello, " + user.username + "!。"　+ "あなたは" + notes.age + "歳です。",  function(err){
//     if(err) {
//         console.log(err)
//     }
// })







