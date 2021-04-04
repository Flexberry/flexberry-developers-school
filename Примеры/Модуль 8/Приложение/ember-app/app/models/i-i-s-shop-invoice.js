import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';

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
  actualTotalSum: computed('invoiceItem.@each.{amount,price}', function() {
    return this.get('invoiceItem').reduce((sum, item) => {
      const price = Number(item.get('price') || 0);
      const amount = Number(item.get('amount') || 0);
      if (Number.isNaN(price) || Number.isNaN(amount)) {
        throw new Error(`Invalid 'price' or 'amount' for invoice item: '${item}'.`);
      }

      return sum + price * amount;
    }, 0);
  }),
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
