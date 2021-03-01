import Component from '@ember/component';
import { set } from '@ember/object';
import { debounce } from '@ember/runloop';

const NON_NUMERIC = /[^0-9.]/gi;

export default Component.extend({
  init() {
    this._super(...arguments);
    set(this, 'actualValue', '');
  },

  didRender() {
    console.log('Run Loop Component has been rendered')
  },

  actions: {
    inputHandler(event) {
      let { target } = event;
      // this._updateValue(target);
      debounce(() => {
        this._updateValue(target);
      }, 2000);
    }
  },

  _updateValue(target) {
    set(this, 'actualValue', target.value.replace(NON_NUMERIC, ''));
    console.log('Hehey!');
  }
});
