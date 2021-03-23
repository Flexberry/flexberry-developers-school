export default {
  projections: {
    OrderE: {
      number: {
        __caption__: 'Номер'
      },
      status: {
        __caption__: 'Статус'
      },
      createDate: {
        __caption__: 'Дата оформления'
      },
      manager: {
        __caption__: 'Менеджер',
        lastName: {
          __caption__: '~'
        },
        firstName: {
          __caption__: '~'
        },
        middleName: {
          __caption__: '~'
        }
      },
      totalSum: {
        __caption__: 'Стоимость заказа'
      },
      paymentDate: {
        __caption__: 'Дата оплаты'
      },
      shipmentDate: {
        __caption__: 'Дата отгрузки'
      },
      orderItem: {
        __caption__: 'Содержимое заказа',
        product: {
          __caption__: 'Товар',
          name: {
            __caption__: '~'
          },
          productCode: {
            __caption__: '~'
          },
          price: {
            __caption__: '~'
          },
          weight: {
            __caption__: '~'
          },
          measure: {
            __caption__: '~'
          }
        },
        amount: {
          __caption__: 'Количество'
        },
        priceWTaxes: {
          __caption__: 'Цена с налогом'
        },
        totalSum: {
          __caption__: 'Сумма по позиции'
        }
      }
    },
    OrderL: {
      number: {
        __caption__: 'Номер'
      },
      status: {
        __caption__: 'Статус'
      },
      createDate: {
        __caption__: 'Дата оформления'
      },
      manager: {
        __caption__: 'Менеджер',
        lastName: {
          __caption__: 'Менеджер'
        }
      },
      totalSum: {
        __caption__: 'Стоимость заказа'
      },
      paymentDate: {
        __caption__: 'Дата оплаты'
      },
      shipmentDate: {
        __caption__: 'Дата отгрузки'
      }
    }
  },
  validations: {
    status: {
      __caption__: 'Статус'
    },
    shipmentDate: {
      __caption__: 'Дата отгрузки'
    },
    paymentDate: {
      __caption__: 'Дата оплаты'
    },
    totalSum: {
      __caption__: 'Стоимость заказа'
    },
    manager: {
      __caption__: 'Менеджер'
    },
    orderItem: {
      __caption__: 'Содержимое заказа'
    }
  }
};
