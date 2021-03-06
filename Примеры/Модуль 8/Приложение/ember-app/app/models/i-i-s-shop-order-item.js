import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';
import OrderStatusEnum from '../enums/i-i-s-shop-order-status';
import { validator } from 'ember-cp-validations';
import { observer, computed } from '@ember/object';
import { once } from '@ember/runloop';
import { on } from '@ember/object/evented';

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

  /*
   * Цена с налогом
   */
  _priceWTaxesChanged: on('init', observer('product', function() {
    if (!this.get('order.isBlocked')) {
      once(this, '_priceWTaxesCompute');
    }
  })),
  _priceWTaxesCompute: function() {
    let product = this.get('product');

    let result = 0; // При добавлении строки, когда товара еще нет
    if (product) {
      let price = Number(product.get('price'));
      let taxes = this.get('taxes') / 100 + 1;
      result = Number((price * taxes).toFixed(2)); // округление до 2 знаков
    }

    if (!this.get('isDeleted')) {
      this.set('priceWTaxes', result);
    }
  },

  /*
   * Сумма по позиции
   */
  _totalSumChanged: on('init', observer('priceWTaxes', 'amount', function() {
    once(this, '_totalSumCompute');
  })),
  _totalSumCompute: function() {
    let priceWTaxes = Number(this.get('priceWTaxes'));
    let amount = Number(this.get('amount'));

    let result = 0;
    if (!Number.isNaN(priceWTaxes) && !Number.isNaN(amount)) {
      result = Number((priceWTaxes * amount).toFixed(2));
    }

    if (!this.get('isDeleted')) {
      this.set('totalSum', result);
    }
  },
});

defineProjections(Model);

export default Model;
