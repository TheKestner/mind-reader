const header = document.getElementById('header');
const helper = document.getElementById('helper').style.display = "none";
const circlebtn = document.getElementById('circlebtn');

let page = 0;

    
    switch(page) {
        case 0:
            header.innerHTML = 'I can read your mind';
            helper.innerHTML = none;

            break;

        case 1:
            header.innerHTML = 'Pick a number from 01 - 99';
            helper.innerHTML = 'when you have your number click next';

            break;
        
        case 2:
            header.innerHTML = 'Add both digits together to get a new number';
            helper.innerHTML = 'Ex: 14 is 1 + 4 = 5 click next to proceed';

            break;
        
        case 3:
            header.innerHTML = 'Subtract your new number from the original number';
            helper.innerHTML = 'Ex: 14 - 5 = 9 click next to procced';

            break;

        case 4: 
            header.innerHTML = ' need symbols list' ;
            helper.innerHTML = 'Find your new number. Note the symbol beside the number';

            break;

        case 5:
            header.innerHTML = 'return symbol'
            helper.innerHTML = 'your symbol is: return symbol'

            break;


    }



//let headertxt = ['I can read your mind', 'string 2', 'string 3', 'string 4'];
//    let headerOne = headertxt[0];
//   let headerTwo = headertxt[1];
//   let headerThree = headertxt[2];
//  let headerFour = headertxt[3];
//   header.innerHTML = headertxt[0];

//let helpertxt = ['', 'when you have your number click next', 'string 3', 'string 4'];
//let helperOne = helpertxt[0];
//let helperTwo = helpertxt[1];
//let helperThree = helpertxt[2];
//let helperFour = helpertxt[3];
//helper.innerHTML = helpertxt[0];

//button event listener