"use strict";

const keysArr = [];

const rowKeys1 = { Backquote: [['`', '~'], ['ё', 'Ё']], Digit1: ['1', '!'], Digit2: ['2', '@'], Digit3: ['3', '#'], Digit4: ['4', '$'], Digit5: ['5', '%'], Digit6: ['6', '^'], Digit7: ['7', '&'], Digit8: ['8', '*'], Digit9: ['9', '('], Digit0: ['0', ')'], Minus: ['-', '_'], Equal: ['=', '+'], Backspace: 'Backspace' };
const rowKeys2 = { Tab: 'Tab', KeyQ: [['q', 'Q'], ['й', 'Й']], KeyW: [['w', 'W'], ['ц', 'Ц']], KeyE: [['e', 'E'], ['у', 'У']], KeyR: [['r', 'R'], ['к', 'К']], KeyT: [['t', 'T'], ['е', 'Е']], KeyY: [['y', 'Y'], ['н', 'Н']], KeyU: [['u', 'U'], ['г', 'Г']], KeyI: [['i', 'I'], ['ш', 'Ш']], KeyO: [['o', 'O'], ['щ', 'Щ']], KeyP: [['p', 'P'], ['з', 'З']], BracketLeft: [['[', '{'], ['х', 'Х']], BracketRight: [[']', '}'], ['ъ', 'Ъ']], Backslash: [['\\', '|'], ['\\', '/']], Delete: 'Del' };
const rowKeys3 = { CapsLock: 'CapsLock', KeyA: [['a', 'A'], ['ф', 'Ф']], KeyS: [['s', 'S'], ['ы', 'Ы']], KeyD: [['d', 'D'], ['в', 'В']], KeyF: [['f', 'F'], ['а', 'А']], KeyG: [['g', 'G'], ['п', 'П']], KeyH: [['h', 'H'], ['р', 'Р']], KeyJ: [['j', 'J'], ['о', 'О']], KeyK: [['k', 'K'], ['л', 'Л']], KeyL: [['l', 'L'], ['д', 'Д']], Semicolon: [[';', ':'], ['ж', 'Ж']], Quote: [["'", '"'], ['э', 'Э']], Enter: 'Enter' };
const rowKeys4 = { ShiftLeft: 'Shift', KeyZ: [['z', 'Z'], ['я', 'Я']], KeyX: [['x', 'X'], ['ч', 'Ч']], KeyC: [['c', 'C'], ['с', 'С']], KeyV: [['v', 'V'], ['м', 'М']], KeyB: [['b', 'B'], ['и', 'И']], KeyN: [['n', 'N'], ['т', 'Т']], KeyM: [['m', 'M'], ['ь', 'Ь']], Comma: [[',', '<'], ['б', 'Б']], Period: [['.', '>'], ['ю', 'Ю']], Slash: [['/', '?'], ['.', ',']], ArrowUp: '▲ ', ShiftRight: 'Shift' };
const rowKeys5 = { ControlLeft: 'Ctrl', MetaLeft: 'Win', AltLeft: 'Alt', Space: '', AltRight: 'Alt', ArrowLeft: '◄ ', ArrowDown: '▼ ', ArrowRight: '► ', ControlRight: 'Ctrl' };

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



addEventListener('keydown', e => {
  keysArr.push(e.key);
  console.log(keysArr);

});


// for (let key in rowKeys1) {
//   // console.log(Array.isArray(rowKeys1[key]));
//   if (Array.isArray(rowKeys1[key])) {
//     // console.log(rowKeys1[key].flat(2).length);
//   }

// }

function addСhar(rowKeys, keyCode, keyCap, keySimEnLow, keySimEnUp, keySimRusLow, keySimRusUp, keySimNumLow, keySimNumUp) {

  let arr1 = [keySimEnLow, keySimRusLow];
  let arr2 = [keySimEnUp, keySimRusUp];
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

        // console.log(x);

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

    keySimEnLow.innerHTML = rowKeys[keyCode];
    keySimEnUp.innerHTML = rowKeys[keyCode];
    keySimRusLow.innerHTML = rowKeys[keyCode];
    keySimRusUp.innerHTML = rowKeys[keyCode];
  }

}

function keyCreate(rowKeys) {
  const row = document.createElement('div');
  for (let keyCode in rowKeys) {
    const keyCap = document.createElement('div');
    const keySimEn = document.createElement('span');
    const keySimRus = document.createElement('span');
    const keySimNum = document.createElement('span');
    const keySimEnLow = document.createElement('span');
    const keySimEnUp = document.createElement('span');
    const keySimRusLow = document.createElement('span');
    const keySimRusUp = document.createElement('span');
    const keySimNumLow = document.createElement('span');
    const keySimNumUp = document.createElement('span');

    row.classList.add('keyboard-row');
    keySimEn.classList.add('eng');
    keySimRus.classList.add('rus');
    keySimNum.classList.add('num');
    keySimEnLow.classList.add('low-case');
    keySimEnUp.classList.add('up-case');
    keySimRusLow.classList.add('low-case');
    keySimRusUp.classList.add('up-case');
    keySimNumLow.classList.add('low-case');
    keySimNumUp.classList.add('up-case');

    row.append(keyCap);
    keyCap.append(keySimEn);
    keyCap.append(keySimNum);
    keyCap.append(keySimRus);
    keySimEn.append(keySimEnLow);
    keySimEn.append(keySimEnUp);
    keySimNum.append(keySimNumLow);
    keySimNum.append(keySimNumUp);
    keySimRus.append(keySimRusLow);
    keySimRus.append(keySimRusUp);

    addСhar(rowKeys, keyCode, keyCap, keySimEnLow, keySimEnUp, keySimRusLow, keySimRusUp, keySimNumLow, keySimNumUp);

    keyCap.classList.add(`${keyCode}`);
    keySimEnUp.classList.add('hidden');
    keySimRusLow.classList.add('hidden');
    keySimRusUp.classList.add('hidden');
    keySimNumUp.classList.add('hidden');
  }

  keyboardKeys.append(row);
}



const keyDown = document.querySelectorAll('.key');

//Event key
addEventListener('keydown', event => {
  keyDown.forEach(item => {
    if (item.classList.contains(`${event.code}`)) {
      item.classList.add('active');
    }

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      item.firstChild.firstChild.classList.add('hidden');
      item.childNodes[1].firstChild.classList.add('hidden');
      item.firstChild.lastChild.classList.remove('hidden');
      item.childNodes[1].lastChild.classList.remove('hidden');
    }
  });
});

addEventListener('keyup', event => {
  keyDown.forEach(item => {
    if (item.classList.contains(`${event.code}`)) {
      item.classList.remove('active');
    }

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      item.firstChild.firstChild.classList.remove('hidden');
      item.childNodes[1].firstChild.classList.remove('hidden');
      item.firstChild.lastChild.classList.add('hidden');
      item.childNodes[1].lastChild.classList.add('hidden');
    }
  });
});
//


//Event mouse
addEventListener('mousedown', event => {
  keyDown.forEach(item => {
    if (item == event.target) {
      item.classList.add('active');
    }


    if (item !== event.target && event.target.outerText == 'Shift') {
      item.firstChild.firstChild.classList.add('hidden');
      item.childNodes[1].firstChild.classList.add('hidden');
      item.firstChild.lastChild.classList.remove('hidden');
      item.childNodes[1].lastChild.classList.remove('hidden');
    }
  });
});

addEventListener('mouseup', event => {
  keyDown.forEach(item => {
    if (item == event.target) {
      item.classList.remove('active');
    }

    if (item !== event.target && event.target.outerText == 'Shift') {
      item.firstChild.firstChild.classList.remove('hidden');
      item.childNodes[1].firstChild.classList.remove('hidden');
      item.firstChild.lastChild.classList.add('hidden');
      item.childNodes[1].lastChild.classList.add('hidden');
    }
  });
});
//

