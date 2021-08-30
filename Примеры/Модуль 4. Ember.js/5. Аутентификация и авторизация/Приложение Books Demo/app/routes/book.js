import Route from '@ember/routing/route';

import { PER_PAGE } from '../controllers/book';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },

  model({ search, page }) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
    };

    if (search) {
      query.q = search;
    }

    return this.store.query('book', query);
  },

  actions: {
    loading() {
      return false;
    }
  }
});
