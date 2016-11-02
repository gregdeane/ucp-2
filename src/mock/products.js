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
        ],
        "roles": [
          {
            "name": "Reviewer",
            "minSeniority": 0,
            "moduleId": 1,
            "roles": [
              {
                "id": 1,
                "name": "cms.edit",
                "moduleId": 1
              },
              {
                "id": 3,
                "name": "cms.view",
                "moduleId": 1
              },
              {
                "id": 4,
                "name": "cms.review",
                "moduleId": 1
              }
            ],
            "id": 1,
            "textId": "1_reviewer"
          }
        ]
      },
      {
        "id": 2,
        "name": "Analytics",
        "url": "/analytics",
        "businessPartnerTypes": [
          businessPartnerTypes.BRAND
        ],
        "roles": [
          {
            "name": "View",
            "minSeniority": 0,
            "moduleId": 2,
            "roles": [
              {
                "id": 7,
                "name": "analytics.view",
                "moduleId": 2
              }
            ],
            "id": 5,
            "textId": "2_view"
          },
          {
            "name": "Edit",
            "minSeniority": 0,
            "moduleId": 2,
            "roles": [
              {
                "id": 18,
                "name": "analytics.edit",
                "moduleId": 2
              }
            ],
            "id": 18,
            "textId": "2_edit"
          }
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
      ],
      "roles": [
        {
          "name": "Basic Access",
          "minSeniority": 0,
          "description": "",
          "moduleId": 9,
          "roles": [
            {
              "id": 31,
              "name": "coplanner.sso-link.read",
              "moduleId": 9
            }
          ],
          "id": 24,
          "textId": "coplanner.basic"
        }
      ]
    }]
  },
  {
    "id": 3,
    "name": "Merchant center",
    "applications": [
      {
        "id": 4,
        "name": "Articles",
        "url": "/articles",
        "businessPartnerTypes": [
          businessPartnerTypes.MERCHANT
        ],
        "roles": [
          {
            "name": "View",
            "minSeniority": 0,
            "moduleId": 4,
            "roles": [
              {
                "id": 10,
                "name": "articles.view",
                "moduleId": 4
              }
            ],
            "id": 8,
            "textId": "4_view"
          },
          {
            "name": "Create & edit",
            "minSeniority": 0,
            "moduleId": 4,
            "roles": [
              {
                "id": 11,
                "name": "articles.edit",
                "moduleId": 4
              }
            ],
            "id": 9,
            "textId": "4_create_edit"
          }
        ]
      },
      {
        "id": 5,
        "name": "Orders",
        "url": "/orders",
        "businessPartnerTypes": [
          businessPartnerTypes.MERCHANT
        ],
        "roles": [
          {
            "name": "Owner",
            "minSeniority": 0,
            "moduleId": 6,
            "roles": [
              {
                "id": 20,
                "name": "orders.update",
                "moduleId": 6
              },
              {
                "id": 22,
                "name": "orders.view",
                "moduleId": 6
              }
            ],
            "id": 22,
            "textId": "6_owner"
          },
          {
            "name": "Super Admin",
            "minSeniority": 0,
            "moduleId": 6,
            "roles": [
              {
                "id": 21,
                "name": "orders.update_all",
                "moduleId": 6
              },
              {
                "id": 23,
                "name": "orders.view_all",
                "moduleId": 6
              }
            ],
            "id": 20,
            "textId": "6_super_admin"
          },
          {
            "name": "Create",
            "minSeniority": 0,
            "moduleId": 6,
            "roles": [
              {
                "id": 19,
                "name": "orders.create",
                "moduleId": 6
              },
              {
                "id": 20,
                "name": "orders.update",
                "moduleId": 6
              },
              {
                "id": 21,
                "name": "orders.update_all",
                "moduleId": 6
              },
              {
                "id": 22,
                "name": "orders.view",
                "moduleId": 6
              },
              {
                "id": 23,
                "name": "orders.view_all",
                "moduleId": 6
              },
              {
                "id": 24,
                "name": "orders.delete",
                "moduleId": 6
              }
            ],
            "id": 19,
            "textId": "6_create"
          },
          {
            "name": "Developer",
            "minSeniority": 0,
            "moduleId": 6,
            "roles": [
              {
                "id": 19,
                "name": "orders.create",
                "moduleId": 6
              },
              {
                "id": 20,
                "name": "orders.update",
                "moduleId": 6
              },
              {
                "id": 22,
                "name": "orders.view",
                "moduleId": 6
              },
              {
                "id": 24,
                "name": "orders.delete",
                "moduleId": 6
              }
            ],
            "id": 21,
            "textId": "6_developer"
          },
          {
            "name": "Management",
            "minSeniority": 100,
            "moduleId": 6,
            "roles": [
              {
                "id": 17,
                "name": "orders.new",
                "moduleId": 6
              }
            ],
            "id": 15,
            "textId": "6_management"
          }
        ]
      }
    ]
  }
];
