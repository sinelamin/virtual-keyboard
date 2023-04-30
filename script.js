"use strict";

// const keysArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const keysArr = [];

const Rowkeys1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const Rowkeys2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const Rowkeys3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const Rowkeys4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲ ', 'Shift'];
const Rowkeys5 = ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄ ', '▼ ', '► ', 'Ctrl'];




const body = document.querySelector('.body');



//layout the page
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
//-




// addEventListener('keydown', e => {
//   // console.log(e);
//   // console.log(String.fromCharCode(e.code));

//   keysArr.push(e.key);
//   console.log(keysArr);
// });


function keyCreate(Rowkeys) {
  const row = document.createElement('div');
  for (let keySim of Rowkeys) {
    row.classList.add('keyboard-row');
    const key = document.createElement('div');

    row.append(key);

    if (keySim.length < 1) {
      key.classList.add('keyboard-row__space', 'key');
    } else if (keySim.length >= 1 && keySim.length < 5) {
      key.classList.add('keyboard-row__square', 'key');
    } else {
      key.classList.add('keyboard-row__rectangle', 'key');
    }

    if (keySim.length > 1) {
      key.classList.add('special-key');
    }

    key.innerHTML = keySim;
  }

  keyboardKeys.append(row);
}

keyCreate(Rowkeys1);
keyCreate(Rowkeys2);
keyCreate(Rowkeys3);
keyCreate(Rowkeys4);
keyCreate(Rowkeys5);
