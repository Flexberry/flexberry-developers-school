import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveReview(review) {
      try {
        const newReview = this.get('store').createRecord('review', review);

        await newReview.save();

        this.transitionToRoute('book.detail', this.get('model.book.id'));
      }
      catch(e) {
        this.send('error', e)
      }
    }
  }
});
