"use strict";

// const keysArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const keysArr = [];

const keysRow1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const keysRow2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const keysRow3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const keysRow4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲ ', 'Shift'];
const keysRow5 = ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄ ', '▼ ', '► ', 'Ctrl'];

;// addEventListener('keydown', e => {
//   // console.log(e);
//   // console.log(String.fromCharCode(e.code));

//   keysArr.push(e.key);
//   console.log(keysArr);
// });

const keyboard = document.querySelector(".keyboard-keys");

function keyCreate(keysRow) {
  const row = document.createElement('div');
  for (let keySim of keysRow) {
    row.classList.add('keyboard-row');
    const key = document.createElement("div");
    
    row.append(key);
  
    if (keySim.length < 1) {
      key.classList.add('keyboard-row__space', 'key');
    } else if (keySim.length >= 1 && keySim.length < 5 ) {
      key.classList.add('keyboard-row__square', 'key');
    } else {
      key.classList.add('keyboard-row__rectangle', 'key');
    }
  
    if (keySim.length > 1) {
      key.classList.add('special-key');
    }

    key.innerHTML = keySim;
  }
  
  keyboard.append(row);
}

keyCreate(keysRow1);
keyCreate(keysRow2);
keyCreate(keysRow3);
keyCreate(keysRow4);
keyCreate(keysRow5);
