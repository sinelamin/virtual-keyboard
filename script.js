"use strict";

// const keysArr = [];

const RowKeys1 = { Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: '=', Backspace: 'Backspace' };
const RowKeys2 = { Tab: 'Tab', KeyQ: 'q', KeyW: 'w', KeyE: 'e', KeyR: 'r', KeyT: 't', KeyY: 'y', KeyU: 'u', KeyI: 'i', KeyO: 'o', KeyP: 'p', BracketLeft: '[', BracketRight: ']', Backslash: '\\', Delete: 'Del' };
const RowKeys3 = { CapsLock: 'CapsLock', KeyA: 'a', KeyS: 's', KeyD: 'd', KeyF: 'f', KeyG: 'g', KeyH: 'h', KeyJ: 'j', KeyK: 'k', KeyL: 'l', Semicolon: ';', Quote: "'", Enter: 'Enter' };
const RowKeys4 = { ShiftLeft: 'Shift', KeyZ: 'z', KeyX: 'x', KeyC: 'c', KeyV: 'v', KeyB: 'b', KeyN: 'n', KeyM: 'm', Comma: ',', Period: '.', Slash: '/', ArrowUp: '▲ ', ShiftRight: 'Shift' };
const RowKeys5 = { ControlLeft: 'Ctrl', MetaLeft: 'Win', AltLeft: 'Alt', Space: '', AltRight: 'Alt', ArrowLeft: '◄ ', ArrowDown: '▼ ', ArrowRight: '► ', ControlRight: 'Ctrl' };

const rows = [RowKeys1, RowKeys2, RowKeys3, RowKeys4, RowKeys5];




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




// addEventListener('keydown', e => {
//   // console.log(key);

//   // console.log(e);

//   // keysArr.push(e.code);
//   // console.log(keysArr);

// });




function keyCreate(RowKeys) {
  const row = document.createElement('div');
  for (let keySim in RowKeys) {
    row.classList.add('keyboard-row');
    const key = document.createElement('div');

    row.append(key);

    if (RowKeys[keySim].length < 1) {
      key.classList.add('keyboard-row__space', 'key');
    } else if (RowKeys[keySim].length >= 1 && RowKeys[keySim].length < 5) {
      key.classList.add('keyboard-row__square', 'key');
    } else {
      key.classList.add('keyboard-row__rectangle', 'key');
    }

    if (RowKeys[keySim].length > 1) {
      key.classList.add('special-key');
    }

    key.classList.add(`${keySim}`);
    key.innerHTML = RowKeys[keySim];
  }

  keyboardKeys.append(row);
}


//Call keyCreate for every row
rows.forEach(item => {
  keyCreate(item);
});
//



let keyDown = document.querySelectorAll('.key');

//Event key
addEventListener('keydown', event => {
  keyDown.forEach(item => {
    if (item.classList.contains(`${event.code}`)) {
      item.classList.add('active');
    } else {}
  });
});

addEventListener('keyup', event => {
  keyDown.forEach(item => {
    if (item.classList.contains(`${event.code}`)) {
      item.classList.remove('active');
    } else {}
  });
});
//


//Event mouse
addEventListener('mousedown', event => {
  keyDown.forEach(item => {
    if (item == event.target) {
      item.classList.add('active');
    } else {}
  });
});

addEventListener('mouseup', event => {
  keyDown.forEach(item => {
    if (item == event.target) {
      item.classList.remove('active');
    } else {}
  });
});
//

