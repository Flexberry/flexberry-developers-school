console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

new Promise(resolve => {
  console.log('inside promise');
  setTimeout(function() {
    console.log('promise setTimeout');
  }, 0);
  //   new Promise(resolveInner => {
  //     console.log('inside inner promise');
  //     setTimeout(() => {
  //       console.log('inner promise setTimeout');
  //       resolveInner();
  //     }, 1000);
  //   }).then(() => {
  //     console.log('inner promise then 1');
  //     resolve();
  //   });
  resolve();
})
  .then(function() {
    console.log('promise then 1');
  })
  .then(function() {
    console.log('promise then 2');
  });

console.log('script end');
