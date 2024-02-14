let passwordOutputbox = document.querySelector( "#passwordOutputbox" );
let generateBtn = document.querySelector( "#generateBtn" );
let copyBtn = document.querySelector( "#copyBtn" );

let clickCount = 0;

let password = "";
let passwordLen = 8;

let isPassword = true;

function characterGenerator() {
    for( let i = 0 ; i < 1 ; i++ ) {
        let randomCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        let character = String.fromCharCode(randomCharCode);
        password += character;
    }
}

function numberGenerator() {
    for( let i = 0 ; i < 1 ; i++ ) {
        let characters = Math.floor( Math.random() * 10 );
        password += characters;
    }
}

function generatePassword() {
    for( let i = 0 ; i < passwordLen ; i++ ) {
        if( isPassword ) {
            characterGenerator();
            isPassword = false;
        } else {
            numberGenerator();
            isPassword = true;
        }
    }
    passwordOutputbox.innerHTML = password;
}

function showPassword() {
    if( clickCount === 0 ) {
        clickCount++;
        generatePassword();
    } else {
        clickCount = 0;
        location.reload();
        clickCount = true;
    }
}

function copyPassword() {
    let copyPassword = document.querySelector( "passwordOutputbox" );
    let range = document.createRange();
    range.selectNode( passwordOutputbox );

    window.getSelection().removeAllRanges();
    window.getSelection().addRange( range );

    document.execCommand( "Copy" );

    window.getSelection().removeAllRanges();

    alert( "Password copied to clipboard!" )
}

console.log( password );