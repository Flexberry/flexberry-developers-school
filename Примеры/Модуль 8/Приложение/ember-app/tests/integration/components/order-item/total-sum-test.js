import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | order-item/total-sum', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders and works', async function(assert) {
    this.set('relatedModel', { actualTotalSum: 10 });

    await render(hbs`{{order-item/total-sum relatedModel=relatedModel}}`);

    assert.equal(this.element.textContent.trim(), '10');
  });
});
