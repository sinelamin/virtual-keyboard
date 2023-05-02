"use strict";

const keysArr = [];

const rowKeys1 = { Backquote: [['`', '~'], ['ё', 'Ё']], Digit1: ['1', '!'], Digit2: ['2', '@'], Digit3: ['3', '#'], Digit4: ['4', '$'], Digit5: ['5', '%'], Digit6: ['6', '^'], Digit7: ['7', '&'], Digit8: ['8', '*'], Digit9: ['9', '('], Digit0: ['0', ')'], Minus: ['-', '_'], Equal: ['=', '+'], Backspace: 'Backspace' };
const rowKeys2 = { Tab: 'Tab', KeyQ: [['q', 'Q'], ['й', 'Й']], KeyW: [['w', 'W'], ['ц', 'Ц']], KeyE: [['e', 'E'], ['у', 'У']], KeyR: [['r', 'R'], ['к', 'К']], KeyT: [['t', 'T'], ['е', 'Е']], KeyY: [['y', 'Y'], ['н', 'Н']], KeyU: [['u', 'U'], ['г', 'Г']], KeyI: [['i', 'I'], ['ш', 'Ш']], KeyO: [['o', 'O'], ['щ', 'Щ']], KeyP: [['p', 'P'], ['з', 'З']], BracketLeft: [['[', '{'], ['х', 'Х']], BracketRight: [[']', '}'], ['ъ', 'Ъ']], Backslash: [['\\', '|'], ['\\', '/']], Delete: 'Del' };
const rowKeys3 = { CapsLock: 'CapsLock', KeyA: [['a', 'A'], ['ф', 'Ф']], KeyS: [['s', 'S'], ['ы', 'Ы']], KeyD: [['d', 'D'], ['в', 'В']], KeyF: [['f', 'F'], ['а', 'А']], KeyG: [['g', 'G'], ['п', 'П']], KeyH: [['h', 'H'], ['р', 'Р']], KeyJ: [['j', 'J'], ['о', 'О']], KeyK: [['k', 'K'], ['л', 'Л']], KeyL: [['l', 'L'], ['д', 'Д']], Semicolon: [[';', ':'], ['ж', 'Ж']], Quote: [["'", '"'], ['э', 'Э']], Enter: 'Enter' };
const rowKeys4 = { ShiftLeft: 'Shift', KeyZ: [['z', 'Z'], ['я', 'Я']], KeyX: [['x', 'X'], ['ч', 'Ч']], KeyC: [['c', 'C'], ['с', 'С']], KeyV: [['v', 'V'], ['м', 'М']], KeyB: [['b', 'B'], ['и', 'И']], KeyN: [['n', 'N'], ['т', 'Т']], KeyM: [['m', 'M'], ['ь', 'Ь']], Comma: [[',', '<'], ['б', 'Б']], Period: [['.', '>'], ['ю', 'Ю']], Slash: [['/', '?'], ['.', ',']], ArrowUp: '▲ ', ShiftRight: 'Shift' };
const rowKeys5 = { ControlLeft: 'Ctrl', MetaLeft: 'Win', AltLeft: 'Alt', Space: '', AltRight: 'Alt', ArrowLeft: '◄ ', ArrowDown: '▼ ', ArrowRight: '► ', ControlRight: 'Ctrl' };

const arrow = {
  ArrowUp: '▲',
  ArrowLeft: '◄',
  ArrowDown: '▼',
  ArrowRight: '►'
};

const rows = [rowKeys1, rowKeys2, rowKeys3, rowKeys4, rowKeys5];




const body = document.querySelector('.body');


// layout the page
const container = document.createElement('div');
container.classList.add('container');
body.append(container);

const header = document.createElement('header');
header.classList.add('header');
container.append(header);

const headerTitle = document.createElement('header');
headerTitle.classList.add('header-title');
container.append(headerTitle);

const main = document.createElement('main');
main.classList.add('main');
container.append(main);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
main.append(keyboard);

const keyboardInput = document.createElement('textarea');
keyboardInput.classList.add('keyboard-input');
keyboard.append(keyboardInput);

const keyboardKeys = document.createElement('div');
keyboardKeys.classList.add('keyboard-keys');
keyboard.append(keyboardKeys);

const info = document.createElement('div');
info.classList.add('info');
main.append(info);

const infoPartOne = document.createElement('p');
infoPartOne.classList.add('info__part1');
info.append(infoPartOne);

const infoPartTwo = document.createElement('p');
infoPartTwo.classList.add('info__part2');
info.append(infoPartTwo);


headerTitle.innerText = 'RSS Виртуальная клавиатура';
infoPartOne.innerText = 'Клавиатура создана в операционной системе Windows';
infoPartTwo.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
//



//Call keyCreate for every row
rows.forEach(item => {
  keyCreate(item);
});
//

//Load LocalStorage
function setLocalStorage() {
  keyDown.forEach(item => {
    if (item.classList.contains('eng_active')) {
      localStorage.setItem('lang', 'eng_active');
    } else {
      localStorage.setItem('lang', 'rus_active');
    }
  });
}
window.addEventListener('beforeunload', setLocalStorage);
//


function addСhar(rowKeys, keyCode, keyCap, keySimEngLow, keySimEngUp, keySimRusLow, keySimRusUp, keySimNumLow, keySimNumUp) {

  let arr1 = [keySimEngLow, keySimRusLow];
  let arr2 = [keySimEngUp, keySimRusUp];
  let count = 0;

  if (Array.isArray(rowKeys[keyCode])) {

    if (rowKeys[keyCode].flat(2).length < 3) {

      if (rowKeys[keyCode][0].length < 1) {
        keyCap.classList.add('keyboard-row__space', 'key');
      } else if (rowKeys[keyCode][0].length >= 1 && rowKeys[keyCode][0].length < 5) {
        keyCap.classList.add('keyboard-row__square', 'key');
      } else {
        keyCap.classList.add('keyboard-row__rectangle', 'key');
      }

      if (rowKeys[keyCode][0].length > 1) {
        keyCap.classList.add('special-key');
      }

      keySimNumLow.innerHTML = rowKeys[keyCode][0];
      keySimNumUp.innerHTML = rowKeys[keyCode][1];
    } else {

      for (let x of rowKeys[keyCode]) {

        for (let i = 0; i < x.length; i += 1) {

          if (x[i].length < 1) {
            keyCap.classList.add('keyboard-row__space', 'key');
          } else if (x[i].length >= 1 && x[i].length < 5) {
            keyCap.classList.add('keyboard-row__square', 'key');
          } else {
            keyCap.classList.add('keyboard-row__rectangle', 'key');
          }

          if (x[i].length > 1) {
            keyCap.classList.add('special-key');
          }
        }

        arr1[count].innerHTML = x[0];
        arr2[count].innerHTML = x[1];

        if (count == 2) {
          count = 0;
        }
        count++;
      }
    }
  } else {
    if (rowKeys[keyCode].length < 1) {
      keyCap.classList.add('keyboard-row__space', 'key');
    } else if (rowKeys[keyCode].length >= 1 && rowKeys[keyCode].length < 5) {
      keyCap.classList.add('keyboard-row__square', 'key');
    } else {
      keyCap.classList.add('keyboard-row__rectangle', 'key');
    }

    if (rowKeys[keyCode].length > 1) {
      keyCap.classList.add('special-key');
    }

    keyCap.classList.add(`${keyCode}`);

    keySimEngLow.innerHTML = rowKeys[keyCode];
    keySimEngUp.innerHTML = rowKeys[keyCode];
    keySimRusLow.innerHTML = rowKeys[keyCode];
    keySimRusUp.innerHTML = rowKeys[keyCode];
  }

}

function keyCreate(rowKeys) {
  const row = document.createElement('div');
  for (let keyCode in rowKeys) {
    const keyCap = document.createElement('div');
    const keySimEng = document.createElement('span');
    const keySimRus = document.createElement('span');
    const keySimNum = document.createElement('span');
    const keySimEngLow = document.createElement('span');
    const keySimEngUp = document.createElement('span');
    const keySimRusLow = document.createElement('span');
    const keySimRusUp = document.createElement('span');
    const keySimNumLow = document.createElement('span');
    const keySimNumUp = document.createElement('span');

    row.classList.add('keyboard-row');
    keySimEng.classList.add('eng');
    keySimRus.classList.add('rus');
    keySimNum.classList.add('num');
    keySimEngLow.classList.add('low-case');
    keySimEngUp.classList.add('up-case');
    keySimRusLow.classList.add('low-case');
    keySimRusUp.classList.add('up-case');
    keySimNumLow.classList.add('low-case');
    keySimNumUp.classList.add('up-case');

    row.append(keyCap);
    keyCap.append(keySimEng);
    keyCap.append(keySimNum);
    keyCap.append(keySimRus);
    keySimEng.append(keySimEngLow);
    keySimEng.append(keySimEngUp);
    keySimNum.append(keySimNumLow);
    keySimNum.append(keySimNumUp);
    keySimRus.append(keySimRusLow);
    keySimRus.append(keySimRusUp);

    addСhar(rowKeys, keyCode, keyCap, keySimEngLow, keySimEngUp, keySimRusLow, keySimRusUp, keySimNumLow, keySimNumUp);

    keyCap.classList.add(`${keyCode}`);
    keySimEngLow.classList.add('show');
    keySimEngUp.classList.add('hidden');
    keySimRusLow.classList.add('hidden');
    keySimRusUp.classList.add('hidden');
    keySimNumLow.classList.add('show');
    keySimNumUp.classList.add('hidden');
  }

  keyboardKeys.append(row);
}



const keyDown = document.querySelectorAll('.key');


//Event key
addEventListener('keydown', event => {
  event.preventDefault();
  keyDown.forEach(item => {
    if (item.classList.contains(`${event.code}`)) {
      item.classList.add('active');
    }

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      if (item.classList.contains('eng_active')) {
        document.querySelectorAll('.eng').forEach(item => {
          item.firstChild.classList.add('hidden');
          item.firstChild.classList.remove('show');
        });
        document.querySelectorAll('.eng').forEach(item => {
          item.lastChild.classList.remove('hidden');
          item.lastChild.classList.add('show');
        });
      }

      if (item.classList.contains('rus_active')) {
        document.querySelectorAll('.rus').forEach(item => {
          item.firstChild.classList.add('hidden');
          item.firstChild.classList.remove('show');
        });
        document.querySelectorAll('.rus').forEach(item => {
          item.lastChild.classList.remove('hidden');
          item.lastChild.classList.add('show');
        });
      }

      item.childNodes[1].firstChild.classList.add('hidden');
      item.childNodes[1].firstChild.classList.remove('show');
      item.childNodes[1].lastChild.classList.remove('hidden');
      item.childNodes[1].lastChild.classList.add('show');
    }
  });
});


addEventListener('keyup', event => {
  event.preventDefault();
  keyDown.forEach(item => {
    if (item.classList.contains(`${event.code}`)) {
      item.classList.remove('active');
    }

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      if (item.classList.contains('eng_active')) {
        document.querySelectorAll('.eng').forEach(item => {
          item.firstChild.classList.remove('hidden');
          item.firstChild.classList.add('show');
        });
        document.querySelectorAll('.eng').forEach(item => {
          item.lastChild.classList.add('hidden');
          item.lastChild.classList.remove('show');
        });
      }

      if (item.classList.contains('rus_active')) {
        document.querySelectorAll('.rus').forEach(item => {
          item.firstChild.classList.remove('hidden');
          item.firstChild.classList.add('show');
        });
        document.querySelectorAll('.rus').forEach(item => {
          item.lastChild.classList.add('hidden');
          item.lastChild.classList.remove('show');
        });
      }

      item.childNodes[1].firstChild.classList.remove('hidden');
      item.childNodes[1].firstChild.classList.add('show');
      item.childNodes[1].lastChild.classList.add('hidden');
      item.childNodes[1].lastChild.classList.remove('show');
    }
  });
});
//

//Text input keyboard
addEventListener('keydown', event => {
  event.preventDefault();
  // console.log(event);

  if (event.key == 'Backspace') {
    keysArr.pop(event.key);
  } else if (event.key == 'Enter') {
    keysArr.push('\n');
  } else if (event.key == 'Tab') {
    keysArr.push('    ');
  } else if (event.key == 'Control' || event.key == 'Shift' || event.key == 'Alt' || event.key == 'CapsLock' || event.key == 'AltGraph' || event.key == 'Delete') {
  } else if (event.key == 'ArrowUp' || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'ArrowDown') {
    for (let key in arrow) {
      if (event.key == key) {
        keysArr.push(arrow[key]);
      }
    }
  } else {
    keysArr.push(event.key);
  }

  document.querySelector('.keyboard-input').innerHTML = keysArr.join('');
});


//Text input click mouse
addEventListener('click', event => {

  if (event.target.innerText == 'Backspace') {
    keysArr.pop(event.target.innerText);
  } else if (event.target.innerText == 'Enter') {
    keysArr.push('\n');
  } else if (event.target.innerText == '') {
    keysArr.push(' ');
  } else if (event.target.innerText == 'Tab') {
    keysArr.push('    ');
  } else if (event.target.innerText == 'Ctrl' || event.target.innerText == 'Shift' || event.target.innerText == 'Alt' || event.target.innerText == 'CapsLock' || event.target.innerText == 'Win' || event.target.innerText == 'Del') {

  } else {
    keysArr.push(event.target.innerText);
  }

  document.querySelector('.keyboard-input').innerHTML = keysArr.join('');
});
//


//Change Lang
function runOnKeys(changeLang, ...codes) {
  let shortcutKey = new Set();

  document.addEventListener('keydown', event => {
    shortcutKey.add(event.code);

    for (let code of codes) {
      if (!shortcutKey.has(code)) {
        return;
      }
    }

    shortcutKey.clear();

    changeLang();
  });

  document.addEventListener('keyup', event => {
    shortcutKey.delete(event.code);
  });

}

function changeLang() {
  keyDown.forEach(item => {
    if (item.classList.contains('eng_active')) {
      document.querySelectorAll('.eng').forEach(item => {
        item.firstChild.classList.add('hidden');
        item.firstChild.classList.remove('show');
      });
      document.querySelectorAll('.rus').forEach(item => {
        item.firstChild.classList.remove('hidden');
        item.firstChild.classList.add('show');
      });

      item.classList.add('rus_active');
      item.classList.remove('eng_active');
      localStorage.setItem('lang', 'rus_active');
    } else {
      document.querySelectorAll('.rus').forEach(item => {
        item.firstChild.classList.add('hidden');
        item.firstChild.classList.remove('show');
      });
      document.querySelectorAll('.eng').forEach(item => {
        item.firstChild.classList.remove('hidden');
        item.firstChild.classList.add('show');
      });

      item.classList.add('eng_active');
      item.classList.remove('rus_active');
      localStorage.setItem('lang', 'eng_active');
    }
  });
}

runOnKeys(changeLang, "ControlLeft", "AltLeft");
//


//Event mouse
addEventListener('mousedown', event => {
  event.preventDefault();
  keyDown.forEach(item => {
    if (item == event.target) {
      item.classList.add('active');
    }


    if (item !== event.target && event.target.outerText == 'Shift') {
      if (item.classList.contains('eng_active')) {
        item.firstChild.firstChild.classList.add('hidden'); //low eng
        item.firstChild.firstChild.classList.remove('show'); //low eng
        item.firstChild.lastChild.classList.remove('hidden'); // up en
        item.firstChild.lastChild.classList.add('show'); // up en


      }

      if (item.classList.contains('rus_active')) {
        item.lastChild.firstChild.classList.add('hidden'); //low eng
        item.lastChild.firstChild.classList.remove('show'); //low eng
        item.lastChild.lastChild.classList.remove('hidden'); // up en
        item.lastChild.lastChild.classList.add('show'); // up en


      }

      item.childNodes[1].firstChild.classList.add('hidden'); // num one
      item.childNodes[1].firstChild.classList.remove('show'); // num one
      item.childNodes[1].lastChild.classList.remove('hidden'); // num two
      item.childNodes[1].lastChild.classList.add('show'); // num two

    }
  });
});

addEventListener('mouseup', event => {
  event.preventDefault();
  keyDown.forEach(item => {
    if (item == event.target) {
      item.classList.remove('active');
    }

    if (item !== event.target && event.target.outerText == 'Shift') {
      // item.firstChild.firstChild.classList.remove('hidden');
      // item.childNodes[1].firstChild.classList.remove('hidden');
      // item.firstChild.lastChild.classList.add('hidden');
      // item.childNodes[1].lastChild.classList.add('hidden');

      if (item.classList.contains('eng_active')) {
        item.firstChild.firstChild.classList.remove('hidden'); //low eng
        item.firstChild.firstChild.classList.add('show'); //low eng
        item.firstChild.lastChild.classList.add('hidden'); // up en
        item.firstChild.lastChild.classList.remove('show'); // up en


      }

      if (item.classList.contains('rus_active')) {
        item.lastChild.firstChild.classList.remove('hidden'); //low eng
        item.lastChild.firstChild.classList.add('show'); //low eng
        item.lastChild.lastChild.classList.add('hidden'); // up en
        item.lastChild.lastChild.classList.remove('show'); // up en


      }

      item.childNodes[1].firstChild.classList.remove('hidden'); // num one
      item.childNodes[1].firstChild.classList.add('show'); // num one
      item.childNodes[1].lastChild.classList.add('hidden'); // num two
      item.childNodes[1].lastChild.classList.remove('show'); // num two
    }
  });
});
//


//LocalStorage
function getLocalStorage() {
  keyDown.forEach(item => {
    if (localStorage.getItem('lang') !== 'eng_active') {
      document.querySelectorAll('.eng').forEach(item => {
        item.firstChild.classList.add('hidden');
        item.firstChild.classList.remove('show');
      });
      document.querySelectorAll('.rus').forEach(item => {
        item.firstChild.classList.remove('hidden');
        item.firstChild.classList.add('show');
      });

      item.classList.add('rus_active');
      item.classList.remove('eng_active');
    } else {
      document.querySelectorAll('.rus').forEach(item => {
        item.firstChild.classList.add('hidden');
        item.firstChild.classList.remove('show');
      });
      document.querySelectorAll('.eng').forEach(item => {
        item.firstChild.classList.remove('hidden');
        item.firstChild.classList.add('show');
      });

      item.classList.add('eng_active');
      item.classList.remove('rus_active');
    }

  });
}


window.addEventListener('load', (event) => {
  getLocalStorage();
});
//