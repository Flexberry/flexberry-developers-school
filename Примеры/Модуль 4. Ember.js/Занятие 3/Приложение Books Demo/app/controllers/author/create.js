import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('author', EmberObject.create());
    this.get('author').set('firstName', '');
    this.get('author').set('lastName', '');
  },

  dataService: service('data'),
  actions: {
    async saveAuthor(author) {
      await this.get("dataService").createAuthor(author);

      this.transitionToRoute('author.index');
    },
  },
});
