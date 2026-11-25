/**
 * 가상의 동네 카페 매출 대시보드 데이터 (data.js)
 * 30일 x 메뉴 5종 판매량 및 매출 가상 데이터
 * 본 데이터는 가상의 데이터이며 실제 카페 및 업체와 무관합니다.
 */

const CAFE_INFO = {
    "name":  "달빛모퉁이 카페 (Moonlight Corner Cafe)",
    "description":  "가상의 동네 카페 30일간 매출 통계",
    "period":  "2026년 11월 01일 ~ 11월 30일 (30일)",
    "totalRevenue":  26063600,
    "totalQuantity":  5915,
    "averageDailyRevenue":  868787
};

const MENU_ITEMS = [
    {
        "price":  4000,
        "color":  "#8B5A2B",
        "name":  "아메리카노",
        "id":  "americano"
    },
    {
        "price":  4500,
        "color":  "#C49A6C",
        "name":  "카페라떼",
        "id":  "caffe_latte"
    },
    {
        "price":  5000,
        "color":  "#E0B589",
        "name":  "바닐라라떼",
        "id":  "vanilla_latte"
    },
    {
        "price":  5500,
        "color":  "#FF6B8B",
        "name":  "딸기에이드",
        "id":  "strawberry_ade"
    },
    {
        "price":  3800,
        "color":  "#5D4037",
        "name":  "초코 크루아상",
        "id":  "choco_croissant"
    }
];

const DAILY_SALES_DATA = [
    {
        "day":  1,
        "date":  "11월 01일",
        "dayOfWeek":  "일",
        "isWeekend":  true,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  91,
                                    "price":  4000,
                                    "revenue":  364000
                                },
                      "카페라떼":  {
                                   "qty":  44,
                                   "price":  4500,
                                   "revenue":  198000
                               },
                      "바닐라라떼":  {
                                    "qty":  30,
                                    "price":  5000,
                                    "revenue":  150000
                                },
                      "딸기에이드":  {
                                    "qty":  36,
                                    "price":  5500,
                                    "revenue":  198000
                                },
                      "초코 크루아상":  {
                                      "qty":  36,
                                      "price":  3800,
                                      "revenue":  136800
                                  }
                  },
        "dailyTotalQty":  237,
        "dailyTotalRevenue":  1046800
    },
    {
        "day":  2,
        "date":  "11월 02일",
        "dayOfWeek":  "월",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  50,
                                    "price":  4000,
                                    "revenue":  200000
                                },
                      "카페라떼":  {
                                   "qty":  36,
                                   "price":  4500,
                                   "revenue":  162000
                               },
                      "바닐라라떼":  {
                                    "qty":  24,
                                    "price":  5000,
                                    "revenue":  120000
                                },
                      "딸기에이드":  {
                                    "qty":  18,
                                    "price":  5500,
                                    "revenue":  99000
                                },
                      "초코 크루아상":  {
                                      "qty":  32,
                                      "price":  3800,
                                      "revenue":  121600
                                  }
                  },
        "dailyTotalQty":  160,
        "dailyTotalRevenue":  702600
    },
    {
        "day":  3,
        "date":  "11월 03일",
        "dayOfWeek":  "화",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  54,
                                    "price":  4000,
                                    "revenue":  216000
                                },
                      "카페라떼":  {
                                   "qty":  32,
                                   "price":  4500,
                                   "revenue":  144000
                               },
                      "바닐라라떼":  {
                                    "qty":  27,
                                    "price":  5000,
                                    "revenue":  135000
                                },
                      "딸기에이드":  {
                                    "qty":  22,
                                    "price":  5500,
                                    "revenue":  121000
                                },
                      "초코 크루아상":  {
                                      "qty":  28,
                                      "price":  3800,
                                      "revenue":  106400
                                  }
                  },
        "dailyTotalQty":  163,
        "dailyTotalRevenue":  722400
    },
    {
        "day":  4,
        "date":  "11월 04일",
        "dayOfWeek":  "수",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  55,
                                    "price":  4000,
                                    "revenue":  220000
                                },
                      "카페라떼":  {
                                   "qty":  36,
                                   "price":  4500,
                                   "revenue":  162000
                               },
                      "바닐라라떼":  {
                                    "qty":  20,
                                    "price":  5000,
                                    "revenue":  100000
                                },
                      "딸기에이드":  {
                                    "qty":  29,
                                    "price":  5500,
                                    "revenue":  159500
                                },
                      "초코 크루아상":  {
                                      "qty":  32,
                                      "price":  3800,
                                      "revenue":  121600
                                  }
                  },
        "dailyTotalQty":  172,
        "dailyTotalRevenue":  763100
    },
    {
        "day":  5,
        "date":  "11월 05일",
        "dayOfWeek":  "목",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  57,
                                    "price":  4000,
                                    "revenue":  228000
                                },
                      "카페라떼":  {
                                   "qty":  30,
                                   "price":  4500,
                                   "revenue":  135000
                               },
                      "바닐라라떼":  {
                                    "qty":  21,
                                    "price":  5000,
                                    "revenue":  105000
                                },
                      "딸기에이드":  {
                                    "qty":  27,
                                    "price":  5500,
                                    "revenue":  148500
                                },
                      "초코 크루아상":  {
                                      "qty":  36,
                                      "price":  3800,
                                      "revenue":  136800
                                  }
                  },
        "dailyTotalQty":  171,
        "dailyTotalRevenue":  753300
    },
    {
        "day":  6,
        "date":  "11월 06일",
        "dayOfWeek":  "금",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  72,
                                    "price":  4000,
                                    "revenue":  288000
                                },
                      "카페라떼":  {
                                   "qty":  34,
                                   "price":  4500,
                                   "revenue":  153000
                               },
                      "바닐라라떼":  {
                                    "qty":  36,
                                    "price":  5000,
                                    "revenue":  180000
                                },
                      "딸기에이드":  {
                                    "qty":  24,
                                    "price":  5500,
                                    "revenue":  132000
                                },
                      "초코 크루아상":  {
                                      "qty":  46,
                                      "price":  3800,
                                      "revenue":  174800
                                  }
                  },
        "dailyTotalQty":  212,
        "dailyTotalRevenue":  927800
    },
    {
        "day":  7,
        "date":  "11월 07일",
        "dayOfWeek":  "토",
        "isWeekend":  true,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  91,
                                    "price":  4000,
                                    "revenue":  364000
                                },
                      "카페라떼":  {
                                   "qty":  52,
                                   "price":  4500,
                                   "revenue":  234000
                               },
                      "바닐라라떼":  {
                                    "qty":  32,
                                    "price":  5000,
                                    "revenue":  160000
                                },
                      "딸기에이드":  {
                                    "qty":  26,
                                    "price":  5500,
                                    "revenue":  143000
                                },
                      "초코 크루아상":  {
                                      "qty":  39,
                                      "price":  3800,
                                      "revenue":  148200
                                  }
                  },
        "dailyTotalQty":  240,
        "dailyTotalRevenue":  1049200
    },
    {
        "day":  8,
        "date":  "11월 08일",
        "dayOfWeek":  "일",
        "isWeekend":  true,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  88,
                                    "price":  4000,
                                    "revenue":  352000
                                },
                      "카페라떼":  {
                                   "qty":  59,
                                   "price":  4500,
                                   "revenue":  265500
                               },
                      "바닐라라떼":  {
                                    "qty":  29,
                                    "price":  5000,
                                    "revenue":  145000
                                },
                      "딸기에이드":  {
                                    "qty":  36,
                                    "price":  5500,
                                    "revenue":  198000
                                },
                      "초코 크루아상":  {
                                      "qty":  52,
                                      "price":  3800,
                                      "revenue":  197600
                                  }
                  },
        "dailyTotalQty":  264,
        "dailyTotalRevenue":  1158100
    },
    {
        "day":  9,
        "date":  "11월 09일",
        "dayOfWeek":  "월",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  58,
                                    "price":  4000,
                                    "revenue":  232000
                                },
                      "카페라떼":  {
                                   "qty":  31,
                                   "price":  4500,
                                   "revenue":  139500
                               },
                      "바닐라라떼":  {
                                    "qty":  20,
                                    "price":  5000,
                                    "revenue":  100000
                                },
                      "딸기에이드":  {
                                    "qty":  16,
                                    "price":  5500,
                                    "revenue":  88000
                                },
                      "초코 크루아상":  {
                                      "qty":  20,
                                      "price":  3800,
                                      "revenue":  76000
                                  }
                  },
        "dailyTotalQty":  145,
        "dailyTotalRevenue":  635500
    },
    {
        "day":  10,
        "date":  "11월 10일",
        "dayOfWeek":  "화",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  65,
                                    "price":  4000,
                                    "revenue":  260000
                                },
                      "카페라떼":  {
                                   "qty":  38,
                                   "price":  4500,
                                   "revenue":  171000
                               },
                      "바닐라라떼":  {
                                    "qty":  21,
                                    "price":  5000,
                                    "revenue":  105000
                                },
                      "딸기에이드":  {
                                    "qty":  21,
                                    "price":  5500,
                                    "revenue":  115500
                                },
                      "초코 크루아상":  {
                                      "qty":  35,
                                      "price":  3800,
                                      "revenue":  133000
                                  }
                  },
        "dailyTotalQty":  180,
        "dailyTotalRevenue":  784500
    },
    {
        "day":  11,
        "date":  "11월 11일",
        "dayOfWeek":  "수",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  55,
                                    "price":  4000,
                                    "revenue":  220000
                                },
                      "카페라떼":  {
                                   "qty":  39,
                                   "price":  4500,
                                   "revenue":  175500
                               },
                      "바닐라라떼":  {
                                    "qty":  22,
                                    "price":  5000,
                                    "revenue":  110000
                                },
                      "딸기에이드":  {
                                    "qty":  18,
                                    "price":  5500,
                                    "revenue":  99000
                                },
                      "초코 크루아상":  {
                                      "qty":  32,
                                      "price":  3800,
                                      "revenue":  121600
                                  }
                  },
        "dailyTotalQty":  166,
        "dailyTotalRevenue":  726100
    },
    {
        "day":  12,
        "date":  "11월 12일",
        "dayOfWeek":  "목",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  60,
                                    "price":  4000,
                                    "revenue":  240000
                                },
                      "카페라떼":  {
                                   "qty":  28,
                                   "price":  4500,
                                   "revenue":  126000
                               },
                      "바닐라라떼":  {
                                    "qty":  26,
                                    "price":  5000,
                                    "revenue":  130000
                                },
                      "딸기에이드":  {
                                    "qty":  27,
                                    "price":  5500,
                                    "revenue":  148500
                                },
                      "초코 크루아상":  {
                                      "qty":  33,
                                      "price":  3800,
                                      "revenue":  125400
                                  }
                  },
        "dailyTotalQty":  174,
        "dailyTotalRevenue":  769900
    },
    {
        "day":  13,
        "date":  "11월 13일",
        "dayOfWeek":  "금",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  65,
                                    "price":  4000,
                                    "revenue":  260000
                                },
                      "카페라떼":  {
                                   "qty":  34,
                                   "price":  4500,
                                   "revenue":  153000
                               },
                      "바닐라라떼":  {
                                    "qty":  30,
                                    "price":  5000,
                                    "revenue":  150000
                                },
                      "딸기에이드":  {
                                    "qty":  25,
                                    "price":  5500,
                                    "revenue":  137500
                                },
                      "초코 크루아상":  {
                                      "qty":  28,
                                      "price":  3800,
                                      "revenue":  106400
                                  }
                  },
        "dailyTotalQty":  182,
        "dailyTotalRevenue":  806900
    },
    {
        "day":  14,
        "date":  "11월 14일",
        "dayOfWeek":  "토",
        "isWeekend":  true,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  93,
                                    "price":  4000,
                                    "revenue":  372000
                                },
                      "카페라떼":  {
                                   "qty":  42,
                                   "price":  4500,
                                   "revenue":  189000
                               },
                      "바닐라라떼":  {
                                    "qty":  38,
                                    "price":  5000,
                                    "revenue":  190000
                                },
                      "딸기에이드":  {
                                    "qty":  26,
                                    "price":  5500,
                                    "revenue":  143000
                                },
                      "초코 크루아상":  {
                                      "qty":  52,
                                      "price":  3800,
                                      "revenue":  197600
                                  }
                  },
        "dailyTotalQty":  251,
        "dailyTotalRevenue":  1091600
    },
    {
        "day":  15,
        "date":  "11월 15일",
        "dayOfWeek":  "일",
        "isWeekend":  true,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  84,
                                    "price":  4000,
                                    "revenue":  336000
                                },
                      "카페라떼":  {
                                   "qty":  52,
                                   "price":  4500,
                                   "revenue":  234000
                               },
                      "바닐라라떼":  {
                                    "qty":  39,
                                    "price":  5000,
                                    "revenue":  195000
                                },
                      "딸기에이드":  {
                                    "qty":  26,
                                    "price":  5500,
                                    "revenue":  143000
                                },
                      "초코 크루아상":  {
                                      "qty":  52,
                                      "price":  3800,
                                      "revenue":  197600
                                  }
                  },
        "dailyTotalQty":  253,
        "dailyTotalRevenue":  1105600
    },
    {
        "day":  16,
        "date":  "11월 16일",
        "dayOfWeek":  "월",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  45,
                                    "price":  4000,
                                    "revenue":  180000
                                },
                      "카페라떼":  {
                                   "qty":  25,
                                   "price":  4500,
                                   "revenue":  112500
                               },
                      "바닐라라떼":  {
                                    "qty":  18,
                                    "price":  5000,
                                    "revenue":  90000
                                },
                      "딸기에이드":  {
                                    "qty":  24,
                                    "price":  5500,
                                    "revenue":  132000
                                },
                      "초코 크루아상":  {
                                      "qty":  20,
                                      "price":  3800,
                                      "revenue":  76000
                                  }
                  },
        "dailyTotalQty":  132,
        "dailyTotalRevenue":  590500
    },
    {
        "day":  17,
        "date":  "11월 17일",
        "dayOfWeek":  "화",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  68,
                                    "price":  4000,
                                    "revenue":  272000
                                },
                      "카페라떼":  {
                                   "qty":  43,
                                   "price":  4500,
                                   "revenue":  193500
                               },
                      "바닐라라떼":  {
                                    "qty":  26,
                                    "price":  5000,
                                    "revenue":  130000
                                },
                      "딸기에이드":  {
                                    "qty":  23,
                                    "price":  5500,
                                    "revenue":  126500
                                },
                      "초코 크루아상":  {
                                      "qty":  33,
                                      "price":  3800,
                                      "revenue":  125400
                                  }
                  },
        "dailyTotalQty":  193,
        "dailyTotalRevenue":  847400
    },
    {
        "day":  18,
        "date":  "11월 18일",
        "dayOfWeek":  "수",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  50,
                                    "price":  4000,
                                    "revenue":  200000
                                },
                      "카페라떼":  {
                                   "qty":  34,
                                   "price":  4500,
                                   "revenue":  153000
                               },
                      "바닐라라떼":  {
                                    "qty":  22,
                                    "price":  5000,
                                    "revenue":  110000
                                },
                      "딸기에이드":  {
                                    "qty":  24,
                                    "price":  5500,
                                    "revenue":  132000
                                },
                      "초코 크루아상":  {
                                      "qty":  36,
                                      "price":  3800,
                                      "revenue":  136800
                                  }
                  },
        "dailyTotalQty":  166,
        "dailyTotalRevenue":  731800
    },
    {
        "day":  19,
        "date":  "11월 19일",
        "dayOfWeek":  "목",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  60,
                                    "price":  4000,
                                    "revenue":  240000
                                },
                      "카페라떼":  {
                                   "qty":  34,
                                   "price":  4500,
                                   "revenue":  153000
                               },
                      "바닐라라떼":  {
                                    "qty":  24,
                                    "price":  5000,
                                    "revenue":  120000
                                },
                      "딸기에이드":  {
                                    "qty":  30,
                                    "price":  5500,
                                    "revenue":  165000
                                },
                      "초코 크루아상":  {
                                      "qty":  32,
                                      "price":  3800,
                                      "revenue":  121600
                                  }
                  },
        "dailyTotalQty":  180,
        "dailyTotalRevenue":  799600
    },
    {
        "day":  20,
        "date":  "11월 20일",
        "dayOfWeek":  "금",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  77,
                                    "price":  4000,
                                    "revenue":  308000
                                },
                      "카페라떼":  {
                                   "qty":  34,
                                   "price":  4500,
                                   "revenue":  153000
                               },
                      "바닐라라떼":  {
                                    "qty":  40,
                                    "price":  5000,
                                    "revenue":  200000
                                },
                      "딸기에이드":  {
                                    "qty":  37,
                                    "price":  5500,
                                    "revenue":  203500
                                },
                      "초코 크루아상":  {
                                      "qty":  32,
                                      "price":  3800,
                                      "revenue":  121600
                                  }
                  },
        "dailyTotalQty":  220,
        "dailyTotalRevenue":  986100
    },
    {
        "day":  21,
        "date":  "11월 21일",
        "dayOfWeek":  "토",
        "isWeekend":  true,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  93,
                                    "price":  4000,
                                    "revenue":  372000
                                },
                      "카페라떼":  {
                                   "qty":  44,
                                   "price":  4500,
                                   "revenue":  198000
                               },
                      "바닐라라떼":  {
                                    "qty":  30,
                                    "price":  5000,
                                    "revenue":  150000
                                },
                      "딸기에이드":  {
                                    "qty":  35,
                                    "price":  5500,
                                    "revenue":  192500
                                },
                      "초코 크루아상":  {
                                      "qty":  39,
                                      "price":  3800,
                                      "revenue":  148200
                                  }
                  },
        "dailyTotalQty":  241,
        "dailyTotalRevenue":  1060700
    },
    {
        "day":  22,
        "date":  "11월 22일",
        "dayOfWeek":  "일",
        "isWeekend":  true,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  94,
                                    "price":  4000,
                                    "revenue":  376000
                                },
                      "카페라떼":  {
                                   "qty":  44,
                                   "price":  4500,
                                   "revenue":  198000
                               },
                      "바닐라라떼":  {
                                    "qty":  32,
                                    "price":  5000,
                                    "revenue":  160000
                                },
                      "딸기에이드":  {
                                    "qty":  30,
                                    "price":  5500,
                                    "revenue":  165000
                                },
                      "초코 크루아상":  {
                                      "qty":  46,
                                      "price":  3800,
                                      "revenue":  174800
                                  }
                  },
        "dailyTotalQty":  246,
        "dailyTotalRevenue":  1073800
    },
    {
        "day":  23,
        "date":  "11월 23일",
        "dayOfWeek":  "월",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  54,
                                    "price":  4000,
                                    "revenue":  216000
                                },
                      "카페라떼":  {
                                   "qty":  40,
                                   "price":  4500,
                                   "revenue":  180000
                               },
                      "바닐라라떼":  {
                                    "qty":  28,
                                    "price":  5000,
                                    "revenue":  140000
                                },
                      "딸기에이드":  {
                                    "qty":  24,
                                    "price":  5500,
                                    "revenue":  132000
                                },
                      "초코 크루아상":  {
                                      "qty":  31,
                                      "price":  3800,
                                      "revenue":  117800
                                  }
                  },
        "dailyTotalQty":  177,
        "dailyTotalRevenue":  785800
    },
    {
        "day":  24,
        "date":  "11월 24일",
        "dayOfWeek":  "화",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  55,
                                    "price":  4000,
                                    "revenue":  220000
                                },
                      "카페라떼":  {
                                   "qty":  37,
                                   "price":  4500,
                                   "revenue":  166500
                               },
                      "바닐라라떼":  {
                                    "qty":  34,
                                    "price":  5000,
                                    "revenue":  170000
                                },
                      "딸기에이드":  {
                                    "qty":  27,
                                    "price":  5500,
                                    "revenue":  148500
                                },
                      "초코 크루아상":  {
                                      "qty":  22,
                                      "price":  3800,
                                      "revenue":  83600
                                  }
                  },
        "dailyTotalQty":  175,
        "dailyTotalRevenue":  788600
    },
    {
        "day":  25,
        "date":  "11월 25일",
        "dayOfWeek":  "수",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  56,
                                    "price":  4000,
                                    "revenue":  224000
                                },
                      "카페라떼":  {
                                   "qty":  43,
                                   "price":  4500,
                                   "revenue":  193500
                               },
                      "바닐라라떼":  {
                                    "qty":  20,
                                    "price":  5000,
                                    "revenue":  100000
                                },
                      "딸기에이드":  {
                                    "qty":  21,
                                    "price":  5500,
                                    "revenue":  115500
                                },
                      "초코 크루아상":  {
                                      "qty":  26,
                                      "price":  3800,
                                      "revenue":  98800
                                  }
                  },
        "dailyTotalQty":  166,
        "dailyTotalRevenue":  731800
    },
    {
        "day":  26,
        "date":  "11월 26일",
        "dayOfWeek":  "목",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  50,
                                    "price":  4000,
                                    "revenue":  200000
                                },
                      "카페라떼":  {
                                   "qty":  31,
                                   "price":  4500,
                                   "revenue":  139500
                               },
                      "바닐라라떼":  {
                                    "qty":  28,
                                    "price":  5000,
                                    "revenue":  140000
                                },
                      "딸기에이드":  {
                                    "qty":  23,
                                    "price":  5500,
                                    "revenue":  126500
                                },
                      "초코 크루아상":  {
                                      "qty":  23,
                                      "price":  3800,
                                      "revenue":  87400
                                  }
                  },
        "dailyTotalQty":  155,
        "dailyTotalRevenue":  693400
    },
    {
        "day":  27,
        "date":  "11월 27일",
        "dayOfWeek":  "금",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  83,
                                    "price":  4000,
                                    "revenue":  332000
                                },
                      "카페라떼":  {
                                   "qty":  36,
                                   "price":  4500,
                                   "revenue":  162000
                               },
                      "바닐라라떼":  {
                                    "qty":  25,
                                    "price":  5000,
                                    "revenue":  125000
                                },
                      "딸기에이드":  {
                                    "qty":  26,
                                    "price":  5500,
                                    "revenue":  143000
                                },
                      "초코 크루아상":  {
                                      "qty":  32,
                                      "price":  3800,
                                      "revenue":  121600
                                  }
                  },
        "dailyTotalQty":  202,
        "dailyTotalRevenue":  883600
    },
    {
        "day":  28,
        "date":  "11월 28일",
        "dayOfWeek":  "토",
        "isWeekend":  true,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  94,
                                    "price":  4000,
                                    "revenue":  376000
                                },
                      "카페라떼":  {
                                   "qty":  61,
                                   "price":  4500,
                                   "revenue":  274500
                               },
                      "바닐라라떼":  {
                                    "qty":  29,
                                    "price":  5000,
                                    "revenue":  145000
                                },
                      "딸기에이드":  {
                                    "qty":  26,
                                    "price":  5500,
                                    "revenue":  143000
                                },
                      "초코 크루아상":  {
                                      "qty":  54,
                                      "price":  3800,
                                      "revenue":  205200
                                  }
                  },
        "dailyTotalQty":  264,
        "dailyTotalRevenue":  1143700
    },
    {
        "day":  29,
        "date":  "11월 29일",
        "dayOfWeek":  "일",
        "isWeekend":  true,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  97,
                                    "price":  4000,
                                    "revenue":  388000
                                },
                      "카페라떼":  {
                                   "qty":  46,
                                   "price":  4500,
                                   "revenue":  207000
                               },
                      "바닐라라떼":  {
                                    "qty":  48,
                                    "price":  5000,
                                    "revenue":  240000
                                },
                      "딸기에이드":  {
                                    "qty":  42,
                                    "price":  5500,
                                    "revenue":  231000
                                },
                      "초코 크루아상":  {
                                      "qty":  39,
                                      "price":  3800,
                                      "revenue":  148200
                                  }
                  },
        "dailyTotalQty":  272,
        "dailyTotalRevenue":  1214200
    },
    {
        "day":  30,
        "date":  "11월 30일",
        "dayOfWeek":  "월",
        "isWeekend":  false,
        "sales":  {
                      "아메리카노":  {
                                    "qty":  54,
                                    "price":  4000,
                                    "revenue":  216000
                                },
                      "카페라떼":  {
                                   "qty":  34,
                                   "price":  4500,
                                   "revenue":  153000
                               },
                      "바닐라라떼":  {
                                    "qty":  26,
                                    "price":  5000,
                                    "revenue":  130000
                                },
                      "딸기에이드":  {
                                    "qty":  18,
                                    "price":  5500,
                                    "revenue":  99000
                                },
                      "초코 크루아상":  {
                                      "qty":  24,
                                      "price":  3800,
                                      "revenue":  91200
                                  }
                  },
        "dailyTotalQty":  156,
        "dailyTotalRevenue":  689200
    }
];