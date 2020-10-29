import DS from 'ember-data';
import ENV from 'books-demo/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL
});
