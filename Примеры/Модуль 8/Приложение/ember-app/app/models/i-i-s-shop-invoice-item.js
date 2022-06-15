import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';
import { computed } from '@ember/object';

import {
  defineProjections,
  ValidationRules,
  Model as InvoiceItemMixin
} from '../mixins/regenerated/models/i-i-s-shop-invoice-item';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, InvoiceItemMixin, Validations, {
  actualTotalSum: computed('price', 'amount', function() {
    const price = Number(this.get('price') || 0);
    const amount = Number(this.get('amount') || 0);

    return (price * amount).toFixed(2);
  }),
});

defineProjections(Model);

export default Model;
