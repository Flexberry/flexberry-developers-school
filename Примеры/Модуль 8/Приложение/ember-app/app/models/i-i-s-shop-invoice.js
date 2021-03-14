import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';
import { observer } from '@ember/object';
import { once } from '@ember/runloop';
import { on } from '@ember/object/evented';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as InvoiceMixin
} from '../mixins/regenerated/models/i-i-s-shop-invoice';

import DocumentModel from './i-i-s-shop-document';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-shop-document';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = DocumentModel.extend(InvoiceMixin, Validations, {
  /*
   * Сумма заказа
   */
  _totalSumChanged: on('init', observer('order', function() {
    once(this, '_totalSumCompute');
  })),
  _totalSumCompute: function() {
    let order = this.get('order');
    let result = 0;
    if (order) {
      result = order.get('totalSum');
    }
    if (!this.get('isDeleted')) {
      this.set('totalSum', result);
    }
  },
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
