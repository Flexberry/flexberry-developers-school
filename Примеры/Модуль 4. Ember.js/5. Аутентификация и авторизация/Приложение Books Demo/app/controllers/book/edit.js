import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveBook(book) {
      try {
        this.get('model').setProperties(book);
        await this.get('model').save();

        this.transitionToRoute('book.index');
      }
      catch(e) {
        this.send('error', e);
      }
    }
  }
});
