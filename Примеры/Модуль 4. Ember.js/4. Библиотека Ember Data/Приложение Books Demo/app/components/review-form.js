import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  moment: service(),

  didInsertElement() {
    this.set('user', this.get('review.user'));
    this.set('body', this.get('review.body'));
  },

  actions: {
    async saveReview(e) {
      e.preventDefault();

      this.get('onSubmit')({
        user: this.get('user'),
        body: this.get('body'),
        createdAt: this.get('moment').moment(new Date()).format('YYYY-MM-DD'),
        book: this.get('review.book')
      });
    }
  }
});
