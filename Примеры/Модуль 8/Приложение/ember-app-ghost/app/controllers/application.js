import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';



export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null,
          icon: 'home'
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.магазин.caption'),
          title: i18n.t('forms.application.sitemap.магазин.title'),
          icon: 'shopping basket',
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.caption'),
            title: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.title'),
            children: [{
              link: 'i-i-s-shop-order-l',
              caption: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.i-i-s-shop-order-l.caption'),
              title: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.i-i-s-shop-order-l.title'),
              children: null
            }, {
              link: 'i-i-s-shop-invoice-l',
              caption: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.i-i-s-shop-invoice-l.caption'),
              title: i18n.t('forms.application.sitemap.магазин.информация-о-заказах.i-i-s-shop-invoice-l.title'),
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.магазин.товары-на-складе.caption'),
            title: i18n.t('forms.application.sitemap.магазин.товары-на-складе.title'),
            children: [{
              link: 'i-i-s-shop-storehouse-l',
              caption: i18n.t('forms.application.sitemap.магазин.товары-на-складе.i-i-s-shop-storehouse-l.caption'),
              title: i18n.t('forms.application.sitemap.магазин.товары-на-складе.i-i-s-shop-storehouse-l.title'),
              children: null
            }, {
              link: 'i-i-s-shop-product-l',
              caption: i18n.t('forms.application.sitemap.магазин.товары-на-складе.i-i-s-shop-product-l.caption'),
              title: i18n.t('forms.application.sitemap.магазин.товары-на-складе.i-i-s-shop-product-l.title'),
              children: null
            }]
          }]
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.данные-о-сотрудниках.caption'),
          title: i18n.t('forms.application.sitemap.данные-о-сотрудниках.title'),
          icon: 'user',
          children: [{
            link: 'i-i-s-shop-employee-l',
            caption: i18n.t('forms.application.sitemap.данные-о-сотрудниках.i-i-s-shop-employee-l.caption'),
            title: i18n.t('forms.application.sitemap.данные-о-сотрудниках.i-i-s-shop-employee-l.title'),
            children: null
          }]
        }
      ]
    };
  }),

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    onMenuItemClick(e) {
      let namedItemSpans = $(e.currentTarget).find('span');
      if (namedItemSpans.length <= 0) {
        return;
      }

      let i18n = this.get('i18n');
      let namedSetting = namedItemSpans.get(0).innerText;

      switch (namedSetting) {
        case i18n.t('forms.application.header.logout.caption').toString(): {
          this.send('logout');
          break;
        }
      }
      return null;
    },

    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');
    }
  },
  /**
  Application usermenu.
  @property itemsUserMenu
  @type Object
*/
  itemsUserMenu: computed('i18n.locale', function() {
    let i18n = this.get('i18n');
    let rootItem = {
      icon: 'dropdown icon',
      title: i18n.t('forms.application.header.profile.caption'),
      iconAlignment: 'right',
      items: []
    };
    let device = this.get('device');
    if (device.type() === 'phone') {
      rootItem = {
        icon: '',
        title: '',
        iconAlignment: 'right',
        items: []
      };
    }

    let itemsUserMenu = {
      title: i18n.t('forms.application.header.logout.caption'),
      items: null
    };

    rootItem.items[rootItem.items.length] = itemsUserMenu;
    return [rootItem];
  }),
});
