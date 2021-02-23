import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('presence', true),
    validator('length', {
      min: 4,
      max: 8
    })
  ],
  passwordConfirmation: [
    validator('presence', true),
    validator('confirmation', {
      on: 'password',
      message: '{description} do not match',
      description: 'Password and password confirmation'
    })
  ]
});

export default DS.Model.extend(Validations, {
  email: DS.attr('string'),
  username: DS.attr('string'),
  password: DS.attr(),
  passwordConfirmation: DS.attr()
});
