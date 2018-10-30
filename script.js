/**
* Verkefni 7 – Reikniæfingarforrit
*
* Forrit sem æfir hraða í að reikna einföld dæmi
*/

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
* Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
* með kalli í play().
* Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
*/

function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
  play();
  const GAME_OVER = confirm('Spila annan leik?');
  if (GAME_OVER) {
    play();
  } else if(!GAME_OVER) {
    exit ();
  }

}

/**
* Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
* fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
*   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
*   Meðalrétt svör á sekúndu eru Z
* Þar sem Y og Z hafa tvo aukastafi.
*
* Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
* upplsýingar um niðurstöður.
*
*/

function play() {
  let crrct = 0;
  let tic = new Date();
  for (i = 1; i < GAMES_TO_PLAY+1; i++) {
    ask();
    if (ans == sum) {
      crrct = crrct + 1;
    } else if (ans === null) {
      alert('Hætt í leik');
      const GAME_OVER = confirm('Spila annan leik?');
      if (GAME_OVER) {
        start();
      } else if(!GAME_OVER) {
        exit();
      }
    }
    let tac = new Date();
    t = (tac - tic)/1000;
  }
  alert('Þú svaraðir ' + crrct + ' af ' + GAMES_TO_PLAY + ' dæmum rétt á ' +
  t.toFixed(2) + ' sekúndum\nMeðalrétt svör á sekúndu eru ' + t.toFixed(2)/crrct);
  return ans;
}

/**
* Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
* nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
* svara í og túlkar svarið yfir í tölu.
*
* Mögulegar spurningar eru:
* - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
* - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
* - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
* - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
*   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
*
* Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
*/
function ask() {
  let z = randomNumber(1,4);
  operation(z);
  ans = prompt('Hvað er ' + x + sign + y + '?');
  return ans, sum;
}

/**
* Skilar tölu af handahófi á bilinu [min, max]
*/
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function operation(z) {
  switch(z) {
    case 1:
    x = randomNumber(1, 100);
    y = randomNumber(1, 100);
    sum = x + y;
    sign = ' + ';
    break;
    case 2:
    x = randomNumber(1, 100);
    y = randomNumber(1, 100);
    sum = x - y;
    sign = ' - ';
    break;
    case 3:
    x = randomNumber(1, 10);
    y = randomNumber(1, 10);
    sum = x * y;
    sign = ' * ';
    break;
    case 4:
    y = randomNumber(2, 10);
    x = y * randomNumber(2, 10);
    sum = x / y;
    sign = ' / ';
    break;
  }
  return x, y, sum, sign;
}

// Byrjar leik
start();
