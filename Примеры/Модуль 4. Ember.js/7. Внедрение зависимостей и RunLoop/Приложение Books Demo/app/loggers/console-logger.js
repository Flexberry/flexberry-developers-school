import EmberObject from '@ember/object';

export default EmberObject.extend({
  log(message) {
    // eslint-disable-next-line no-console
    console.log(`Logger: ${message}`);
  }
});
