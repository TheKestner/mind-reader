let header = document.getElementById('header');
let helper = document.getElementById('helper');
let circlebtn = document.getElementById('circlebtn');
let squarebtn = document.getElementById('squarebtn');
let symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*'];

let page = 0;

let resetbtn = function () {
    if (page === 0) {
        page++;
    } else {
        page = 0;
    }
    changePage();
}

let forward = function () {
    page++;
    changePage();
}

circlebtn.addEventListener('click', resetbtn);
squarebtn.addEventListener('click', forward);

  function numList () {
    let result = '';
    for (let i = 0; i < 99; i++) {
    result += ( (i+1) + ' = ' + symbols[i % symbols.length] + '<br>');
    }
    return result;
}

let list = numList();
//   function random(min, max) {
//   const num = Math.floor(Math.random() * (max - min + 1)) + min;
//    return num;
// }

 function changePage() { 
    switch(page) {
        case 0:
            header.innerHTML = 'I can read your mind';
            helper.style.visibility = 'hidden';
            circlebtn.innerHTML = 'GO';
            squarebtn.style.visibility = 'hidden';
            break;

        case 1:
            header.innerHTML = 'Pick a number from 01 - 99';
            helper.innerHTML = 'When you have your number click next';
            helper.style.visibility = 'visible';
            circlebtn.innerHTML = 'Refresh';
            squarebtn.innerHTML = 'Next';
            squarebtn.style.visibility = 'visible';
            break;
        
        case 2:
            header.innerHTML = 'Add both digits together to get a new number';
            helper.innerHTML = 'Ex: 14 is 1 + 4 = 5 click next to proceed';
            circlebtn.innerHTML = 'Refresh';
            squarebtn.innerHTML = 'Next';
            break;
        
        case 3:
            header.innerHTML = 'Subtract your new number from the original number';
            helper.innerHTML = 'Ex: 14 - 5 = 9 click next to procced';
            circlebtn.onclick = "Refresh";
            squarebtn.onclick = 'Next';
            break;

        case 4: 
            header.innerHTML = list;
            helper.innerHTML = 'Find your new number. Note the symbol beside the number';
            circlebtn.innerHTML = 'Refresh';
            squarebtn.innerHTML = 'Reveal';
            break;

        case 5:
            header.innerHTML = '*';
            helper.innerHTML = 'your symbol is: *';
            circlebtn.innerHTML = 'Refresh';
            squarebtn.style.visibility = 'hidden';
            break;


    }
 }

 changePage();
