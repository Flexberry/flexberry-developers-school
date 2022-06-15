export default {
  projections: {
    InvoiceE: {
      number: {
        __caption__: 'number'
      },
      status: {
        __caption__: 'status'
      },
      createDate: {
        __caption__: 'createDate'
      },
      order: {
        __caption__: 'order',
        number: {
          __caption__: 'number'
        },
        totalSum: {
          __caption__: 'totalSum'
        }
      },
      customerName: {
        __caption__: 'customerName'
      },
      totalSum: {
        __caption__: 'totalSum'
      },
      totalWeight: {
        __caption__: 'totalWeight'
      },
      note: {
        __caption__: 'note'
      },
      shipmentDateTime: {
        __caption__: 'shipmentDateTime'
      },
      responsiblePerson: {
        __caption__: 'responsiblePerson',
        lastName: {
          __caption__: 'lastName'
        },
        firstName: {
          __caption__: 'firstName'
        },
        middleName: {
          __caption__: 'middleName'
        }
      },
      invoiceItem: {
        __caption__: 'invoiceItem',
        product: {
          __caption__: 'product',
          name: {
            __caption__: 'name'
          }
        },
        amount: {
          __caption__: 'amount'
        },
        weight: {
          __caption__: 'weight'
        },
        price: {
          __caption__: 'price'
        },
        totalSum: {
          __caption__: 'totalSum'
        }
      }
    },
    InvoiceL: {
      number: {
        __caption__: 'number'
      },
      status: {
        __caption__: 'status'
      },
      createDate: {
        __caption__: 'createDate'
      },
      order: {
        __caption__: 'order',
        number: {
          __caption__: 'number'
        }
      },
      customerName: {
        __caption__: 'customerName'
      },
      totalSum: {
        __caption__: 'totalSum'
      },
      totalWeight: {
        __caption__: 'totalWeight'
      },
      note: {
        __caption__: 'note'
      },
      shipmentDateTime: {
        __caption__: 'shipmentDateTime'
      },
      responsiblePerson: {
        __caption__: 'responsiblePerson',
        lastName: {
          __caption__: 'lastName'
        }
      },
      invoiceItem: {
        __caption__: 'invoiceItem',
        price: {
          __caption__: 'price'
        },
        amount: {
          __caption__: 'amount'
        },
        weight: {
          __caption__: 'weight'
        }
      }
    }
  },
  validations: {
    status: {
      __caption__: 'status'
    },
    shipmentDateTime: {
      __caption__: 'shipmentDateTime'
    },
    totalSum: {
      __caption__: 'totalSum'
    },
    totalWeight: {
      __caption__: 'totalWeight'
    },
    note: {
      __caption__: 'note'
    },
    customerName: {
      __caption__: 'customerName'
    },
    order: {
      __caption__: 'order'
    },
    responsiblePerson: {
      __caption__: 'responsiblePerson'
    },
    invoiceItem: {
      __caption__: 'invoiceItem'
    }
  }
};
