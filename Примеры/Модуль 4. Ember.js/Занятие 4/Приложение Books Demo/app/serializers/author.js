import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalize(model, hash) {
    let hashCopy = Object.assign({}, hash);
    hashCopy.attributes = {};
    hashCopy.attributes.firstName = hashCopy.firstName;
    hashCopy.attributes.lastName = hashCopy.lastName;
    delete hashCopy.firstName;
    delete hashCopy.lastName;
    hash = {
      data: hashCopy
    };

    return hash;
  }
});
