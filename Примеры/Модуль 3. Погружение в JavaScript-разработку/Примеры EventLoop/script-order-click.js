clickEventsButton.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 1'));
  console.log('Listener 1');
});

clickEventsButton.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 2'));
  console.log('Listener 2');
});

// clickEventsButton.click();
