import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | invoice-item/total-sum', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('relatedModel', { actualTotalSum: 10 });

    await render(hbs`{{invoice-item/total-sum relatedModel=relatedModel}}`);

    assert.equal(this.element.textContent.trim(), '10');
  });
});
