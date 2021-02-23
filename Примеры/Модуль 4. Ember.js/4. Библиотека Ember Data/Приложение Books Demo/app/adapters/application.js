import DS from 'ember-data';
import ENV from 'books-demo/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL,

  init() {
    this._super(...arguments);
    this.set('headers', {
      'Content-Type': 'application/json'
    });
  },

  buildURL(modelName, id, snapshot, requestType, query) {
    let url = this._super(...arguments);
    if (modelName === 'author' && requestType === 'findRecord' && id) {
      url += '?_embed=books';
    }

    if (modelName === 'book' && requestType === 'findRecord' && id) {
      url += '?_embed=reviews';
    }

    return url;
  }
});
