import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';
import OrderStatusEnum from '../enums/i-i-s-shop-order-status';
import { validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

import {
  defineProjections,
  ValidationRules,
  Model as OrderItemMixin
} from '../mixins/regenerated/models/i-i-s-shop-order-item';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, OrderItemMixin, Validations, {
  taxes: 10,

  actualPriceWTaxes: computed('product.price', 'taxes', function() {
    const price = Number(this.get('product.price') || 0);
    if (Number.isNaN(price)) {
      throw new Error(`Invalid price for product: '${this.get('product')}'.`);
    }

    const coefficient = this.get('taxes') / 100 + 1;

    return (price * coefficient).toFixed(2);
  }),

  actualTotalSum: computed('actualPriceWTaxes', 'amount', function() {
    const price = Number(this.get('actualPriceWTaxes') || 0);
    const amount = Number(this.get('amount') || 0);

    return (price * amount).toFixed(2);
  }),
});

defineProjections(Model);

export default Model;
