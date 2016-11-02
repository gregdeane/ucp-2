import * as businessPartnerTypes from './types';

export default [
  {
    "id": 1,
    "name": "Content",
    "applications": [
      {
        "id": 1,
        "name": "CMS",
        "url": "/cms",
        "businessPartnerTypes": [
          businessPartnerTypes.BRAND,
          businessPartnerTypes.SUPPLIER
        ]
      },
      {
        "id": 2,
        "name": "Analytics",
        "url": "/analytics",
        "businessPartnerTypes": [
          businessPartnerTypes.BRAND
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Insights",
    "applications": [{
      "id": 3,
      "name": "Coplanner",
      "url": "/coplanner",
      "businessPartnerTypes": [
        businessPartnerTypes.SUPPLIER
      ]
    }]
  },
  {
    "id": 3,
    "name": "Merchant center",
    "applications": [
      {
        "id": 4,
        "name": "Merchant Center Articles",
        "url": "/articles",
        "businessPartnerTypes": [
          businessPartnerTypes.MERCHANT
        ]
      },
      {
        "id": 5,
        "name": "Merchant Center Orders",
        "url": "/orders",
        "businessPartnerTypes": [
          businessPartnerTypes.MERCHANT
        ]
      }
    ]
  }
];
