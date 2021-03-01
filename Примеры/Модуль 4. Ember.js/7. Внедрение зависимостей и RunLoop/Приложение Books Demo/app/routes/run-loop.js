import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('author');
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller._refreshData();
  }
});

// sync - связывание данных, обновление свойств
// actions - запланированные задачи, разрешение промисов
// routerTransitions - перенаправление пользователя
// render - отображение элементов на странице
// afterRender - то, что происходит после рендеринга
// destroy - уничножение объектов
