/*       extra.addEventListener('DOMNodeInserted', event => {
        console.log('Add element: ', event);
      }); */
// Select the node that will be observed for mutations
const targetNode = document.getElementById('extra');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
  console.log('Результат изменения DOM:', mutationsList);

  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

addSpansButton.onclick = () => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  for (let i = 0; i < 10; i++) {
    const span = document.createElement('span');
    extra.appendChild(span);
    span.textContent = 'Hello ';
  }
};

stopObserveButton.onclick = () => {
  console.log('Observing has been stopped');

  // Later, you can stop observing
  observer.disconnect();
};
