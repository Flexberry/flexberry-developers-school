import Component from '@ember/component';
import { validator, buildValidations } from 'ember-cp-validations';
import { get, set, setProperties } from '@ember/object';

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('presence', true),
  ]
});

export default Component.extend(Validations, {
  isInvalid: false,

  actions: {
    login(e) {
      e.preventDefault();

      set(this, 'isInvalid', !this.get('validations.isValid'));
      if (!get(this, 'isInvalid')) {
        get(this, 'onSubmit')({
          email: this.email,
          password: this.password
        });
      }
    }
  },

  didReceiveAttrs() {
    setProperties(this, {
      email: get(this, 'user.email'),
      password: get(this, 'user.password')
    });
  }
});
