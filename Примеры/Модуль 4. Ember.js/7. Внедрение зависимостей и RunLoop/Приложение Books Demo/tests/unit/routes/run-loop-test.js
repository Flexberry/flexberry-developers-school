import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | run-loop', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:run-loop');
    assert.ok(route);
  });
});
