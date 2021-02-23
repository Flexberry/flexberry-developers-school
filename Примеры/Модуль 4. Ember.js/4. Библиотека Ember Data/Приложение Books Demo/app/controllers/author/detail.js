import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async deleteAuthor(author) {
        await author.destroyRecord();

        this.transitionToRoute('author.index');
    }
  }
});
