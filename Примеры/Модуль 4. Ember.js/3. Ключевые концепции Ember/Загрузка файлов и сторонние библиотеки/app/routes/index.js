import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
  setupController(controller/*, model*/) {
    this._super(...arguments);
    set(controller, 'tags', []);
    set(controller, 'uploadData', null);
    set(controller, 'bookName', '');
    // this.setProperties(controller, {
    //   tags: [],
    //   uploadData: null,
    //   bookName: ''
    // });
  }
});
