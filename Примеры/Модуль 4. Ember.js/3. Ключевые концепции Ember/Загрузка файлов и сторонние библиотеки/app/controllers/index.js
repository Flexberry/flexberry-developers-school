import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  // init() {
  //   this._super(...arguments);
  //   set(this, 'tags', []);
  //   set(this, 'uploadData', null);
  // },

  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);

      // eslint-disable-next-line no-console
      console.log(get(this, 'tags'));
    },

    async saveBook(e) {
      e.preventDefault();

      set(this, 'isUploadingFile', true);
      const uploadData = get(this, 'uploadData');
      await this.get("dataService").createBook({
        name: this.get('bookName'),
        fio: this.get('authorFIO'),
        pagesCount: this.get('pagesCount'),
        url: this.get('bookDescriptionURL'),
        tags: this.get('tags'),
        coverURL: '',
      }, uploadData);

      set(this, 'isUploadingFile', false);
      this.transitionToRoute('temp');
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    },

    change() {
      set(this, 'tags', ['1', '2', '3']);
    },

    goToTemp(/* e */) {
      //e.preventDefault();
      this.transitionToRoute('temp')
    }
  },

  reset() {
    set(this, 'isUploadingFile', false);
    set(this, 'bookName', '');
    set(this, 'authorFIO', '');
    set(this, 'pagesCount', '');
    set(this, 'bookDescriptionURL', '');
    set(this, 'tags', []);
    set(this, 'uploadData', null);
  }
});
