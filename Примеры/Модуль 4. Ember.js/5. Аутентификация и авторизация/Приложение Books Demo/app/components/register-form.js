import Component from '@ember/component';

export default Component.extend({
  iAmRobot: true,

  actions: {
    async saveUser(e) {
      e.preventDefault();

      this.get('onSubmit')({
        email: this.email,
        username: this.username,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation
      });
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      email: this.get('user.email'),
      username: this.get('user.username'),
      password: this.get('user.password'),
      passwordConfirmation: this.get('user.passwordConfirmation'),
    });
  }
});
