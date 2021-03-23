import $ from 'jquery';
import OrderStatusEnum from '../enums/i-i-s-shop-order-status';
import { buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as OrderMixin
} from '../mixins/regenerated/models/i-i-s-shop-order';

import DocumentModel from './i-i-s-shop-document';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-shop-document';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = DocumentModel.extend(OrderMixin, Validations, {
  isBlocked: computed('status', function() {
    const status = this.get('status');
    const dirtyAttributes = this.get('hasDirtyAttributes');

    return (status === OrderStatusEnum.Paid || status === OrderStatusEnum.Canceled) && !dirtyAttributes;
  })
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
