const header = document.getElementById('header');
const helper = document.getElementById('helper');

let page = 0;

//let headertxt = ['I can read your mind', 'string 2', 'string 3', 'string 4'];
//    let headerOne = headertxt[0];
//   let headerTwo = headertxt[1];
//   let headerThree = headertxt[2];
//  let headerFour = headertxt[3];
//   header.innerHTML = headertxt[0];

let helpertxt = ['', 'when you have your number click next', 'string 3', 'string 4'];
    let helperOne = helpertxt[0];
    let helperTwo = helpertxt[1];
    let helperThree = helpertxt[2];
    let helperFour = helpertxt[3];
    helper.innerHTML = helpertxt[0];

function updatePage() {
    switch(page) {
        case 0:
        header.innerHTML = 'I can read your mind';
        break;
    }
}