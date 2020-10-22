import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  dataService: service('data'),
  model() {
    return new Promise((resolve, reject) => {
      later(async () => {
        try {
          let authors = await this.get("dataService").getAuthors();
          resolve(authors);
        }
        catch (e) {
          reject('Connection failed');
        }
      }, 1000);
    });
  },

  actions: {
    refreshAuthors() {
      this.refresh();
    }
  }
});
