// ###################################################
// ## Iteration 3 - Visualizing our data structures ##
// ###################################################

const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {
  // clear all items from queue list
  queueUL.querySelectorAll('*').forEach((n) => n.remove());
  // build up queue list items
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    QueueDummyElement = document.createElement('li');
    if (queue.display()[i] === undefined) {
      QueueDummyElement.className = 'inactive';
    } else {
      QueueDummyElement.className = 'active';
      QueueDummyElement.innerText = queue.display()[i];
    }
    queueUL.appendChild(QueueDummyElement);
  }
  // remove underflow warning
  warningBottomQueue.style.display = 'none';
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningBottomQueue.innerText = type;
    warningBottomQueue.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopQueue.innerText = type;
    warningTopQueue.style.display = 'block';
  }
};

const addToQueue = () => {
  try {
    queue.enqueue(queueInput.value);
    clearQueueInput();
    generateListQueue();
  } catch (error) {
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue();
    generateListQueue();
    // remove underflow warning
    warningTopQueue.style.display = 'none';
  } catch (error) {
    generateWarningQueue('underflow');
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
