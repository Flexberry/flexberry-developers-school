import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { schedule, run, later, cancel } from '@ember/runloop';

export default Controller.extend({
  shouldShowComponent: true,

  actions: {
    clickAction() {
      // this.toggleProperty('shouldShowComponent');
      schedule('actions', () => {
        set(this, 'shouldShowComponent', false);
      });
      schedule('routerTransitions', this, function () {
        // this will be executed in the 'actions' queue, after bindings have synced.
        debugger;
      });
      run(() => {
        set(this, 'shouldShowComponent', true);
      });
      run(() => {
        set(this, 'shouldShowComponent', false);
      });
      run(() => {
        set(this, 'shouldShowComponent', true);
      });
      run(() => {
        set(this, 'shouldShowComponent', false);
      });
      run(() => {
        set(this, 'shouldShowComponent', true);
      });
    },
    cancelPolling() {
      let laterId = get(this, 'laterId');
      cancel(laterId);
    }
  },

  _refreshData() {
    let laterId = later(() => {
      get(this, 'store').findAll('author').then((data) => {
        set(this, 'model', data);
        console.log('Data has been read');
        schedule('afterRender', () => {
          this._refreshData();
        });
      });
    }, 3000);

    set(this, 'laterId', laterId);
  }
});
