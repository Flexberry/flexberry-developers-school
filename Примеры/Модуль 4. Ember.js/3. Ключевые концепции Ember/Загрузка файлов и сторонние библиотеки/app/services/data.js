import Service from '@ember/service';
import ENV from 'files/config/environment';
// import { getOwner } from '@ember/application';

export default Service.extend({
  async getBooks(search) {
    let queryParams = '';
    if (search) {
      queryParams = `?q=${search}`;
    }

    const response = await fetch(`${ENV.backendURL}/books${queryParams}`);
    return await response.json();
  },

  async getBook(id) {
    const response = await fetch(`${ENV.backendURL}/books/${id}`);
    return await response.json();
  },

  deleteBook(book) {
    return fetch(`${ENV.backendURL}/books/${book.id}`, { method: 'DELETE' });
  },

  async createBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        const savedBookPromise = await fetch(`${ENV.backendURL}/books`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        });

        const savedBook = await savedBookPromise.json();

        if (!uploadData) {
          resolve();
        }

        uploadData.url = `${ENV.fileUploadURL}`;
        // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
        uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
          try {
            const dataToUpload = {
              entityName: 'books',
              id: savedBook.id,
              fileName: result.filename
            };

            await fetch(`${ENV.backendURL}/saveURL`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToUpload)
            });

            // eslint-disable-next-line no-console
            console.log('Ok');
            resolve();
          }
          catch (e) {
            reject(e);
          }
        }).fail((jqXhr, textStatus, errorThrown) => {
          reject(errorThrown);
        });
      }
      catch (e) {
        reject(e);
      }
    });
  },
});
