// ###################################################
// ## Iteration 3 - Visualizing our data structures ##
// ###################################################

const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  // clear all items from stack list
  stackList.querySelectorAll('*').forEach((n) => n.remove());
  // build up stack list items
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    stackDummyElement = document.createElement('li');
    if (newStack.display()[i] === undefined) {
      stackDummyElement.className = 'inactive';
    } else {
      stackDummyElement.className = 'active';
      stackDummyElement.innerText = newStack.display()[i];
    }
    stackList.appendChild(stackDummyElement);
  }
  // remove underflow warning
  warningBottomStack.style.display = 'none';
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    warningBottomStack.innerText = type;
    warningBottomStack.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopStack.innerText = type;
    warningTopStack.style.display = 'block';
  }
};

const addToStack = () => {
  try {
    newStack.push(stackInput.value);
    clearStackInput();
    renderListStack();
  } catch (error) {
    generateWarningStack('overflow');
  }
};

const removeFromStack = () => {
  try {
    newStack.pop();
    renderListStack();
    // remove underflow warning
    warningTopStack.style.display = 'none';
  } catch (error) {
    generateWarningStack('underflow');
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
