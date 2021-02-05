import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async deleteBook() {
      try {
        let reviews = this.model.reviews.toArray();

        await this.model.destroyRecord();

        reviews.forEach(review => {
          review.unloadRecord();
        });

        this.transitionToRoute('book.index');
      }
      catch(e) {
        this.send('error', e);
      }
    }
  }
});
