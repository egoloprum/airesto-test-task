import { BookingData } from './type'

export const BookingDay5thOfApril: BookingData = {
  available_days: [
    '2025-04-04',
    '2025-04-05',
    '2025-04-06',
    '2025-04-07',
    '2025-04-08'
  ],
  current_day: '2025-04-05',
  restaurant: {
    id: 11100,
    timezone: 'Asia/Vladivostok',
    restaurant_name: 'Супра',
    opening_time: '11:00',
    closing_time: '23:40'
  },
  tables: [
    {
      id: 'e5f630ff-8246-4fca-869c-6a503045a848',
      capacity: 8,
      number: '1',
      zone: '1 этаж',
      orders: [
        {
          id: '3b4dcd58-0cc6-4201-8e05-aa5092675b7a',
          status: 'Bill',
          start_time: '2025-04-05T13:20:00+10:00',
          end_time: '2025-04-05T16:20:00+10:00'
        },
        {
          id: '7bdcff36-3d35-4c94-a5ac-b12360c591bd',
          status: 'Bill',
          start_time: '2025-04-05T12:50:00+10:00',
          end_time: '2025-04-05T13:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 29437,
          name_for_reservation: 'Татьяна',
          num_people: 7,
          phone_number: '+79363004096',
          status: 'Живая очередь',
          seating_time: '2025-04-05T21:30:00+10:00',
          end_time: '2025-04-05T22:30:00+10:00'
        },
        {
          id: 27496,
          name_for_reservation: 'Алексей',
          num_people: 1,
          phone_number: '+79588016952',
          status: 'Открыт',
          seating_time: '2025-04-05T11:10:00+10:00',
          end_time: '2025-04-05T13:10:00+10:00'
        },
        {
          id: 25830,
          name_for_reservation: 'Виктор',
          num_people: 4,
          phone_number: '+79838816187',
          status: 'Закрыт',
          seating_time: '2025-04-05T20:30:00+10:00',
          end_time: '2025-04-05T21:30:00+10:00'
        }
      ]
    },
    {
      id: 'f399cb36-717e-4f3b-a0b2-58707f0bd0f4',
      capacity: 10,
      number: '2',
      zone: '1 этаж',
      orders: [
        {
          id: '1bb44716-bcdd-48cf-9c6f-2f5dd97ccd6f',
          status: 'New',
          start_time: '2025-04-05T19:00:00+10:00',
          end_time: '2025-04-05T20:00:00+10:00'
        },
        {
          id: '30e0b14a-398c-44ee-b892-a6f988c3048e',
          status: 'New',
          start_time: '2025-04-05T11:20:00+10:00',
          end_time: '2025-04-05T12:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 23611,
          name_for_reservation: 'Лариса',
          num_people: 2,
          phone_number: '+79318551063',
          status: 'Заявка',
          seating_time: '2025-04-05T15:30:00+10:00',
          end_time: '2025-04-05T16:30:00+10:00'
        }
      ]
    },
    {
      id: '4ce714ea-5e28-436b-b452-f6705ba025a3',
      capacity: 10,
      number: '3',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 25173,
          name_for_reservation: 'Татьяна',
          num_people: 9,
          phone_number: '+79273012139',
          status: 'Открыт',
          seating_time: '2025-04-05T13:50:00+10:00',
          end_time: '2025-04-05T14:50:00+10:00'
        },
        {
          id: 21163,
          name_for_reservation: 'Сергей',
          num_people: 7,
          phone_number: '+79255427751',
          status: 'Заявка',
          seating_time: '2025-04-05T16:20:00+10:00',
          end_time: '2025-04-05T18:20:00+10:00'
        }
      ]
    },
    {
      id: '78ac7fe1-c5b3-4aa5-ab50-78ae13142eb7',
      capacity: 2,
      number: '4',
      zone: '1 этаж',
      orders: [
        {
          id: 'f4b39a9e-0674-4ec8-a17b-00d2cb2261e2',
          status: 'Bill',
          start_time: '2025-04-05T11:00:00+10:00',
          end_time: '2025-04-05T13:00:00+10:00'
        },
        {
          id: '86f830ad-720b-4512-b6d3-eb199b9bf64a',
          status: 'New',
          start_time: '2025-04-05T21:30:00+10:00',
          end_time: '2025-04-06T00:30:00+10:00'
        },
        {
          id: '437282fe-2df4-4e33-b53a-be2f895787b8',
          status: 'Bill',
          start_time: '2025-04-05T16:30:00+10:00',
          end_time: '2025-04-05T19:30:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'a8bc80dc-f63a-475b-b315-1aca0424ad67',
      capacity: 8,
      number: '5',
      zone: '1 этаж',
      orders: [
        {
          id: '047d6fa5-8812-40ec-85c5-1aefd12844b7',
          status: 'Banquet',
          start_time: '2025-04-05T13:40:00+10:00',
          end_time: '2025-04-05T14:40:00+10:00'
        },
        {
          id: '0d8e3247-16dc-4f35-9ad8-f67e95ae7dd9',
          status: 'Closed',
          start_time: '2025-04-05T22:30:00+10:00',
          end_time: '2025-04-05T23:30:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '18d3c17c-b5c8-4699-be1f-59aa71032739',
      capacity: 12,
      number: '6',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 28346,
          name_for_reservation: 'Сергей',
          num_people: 2,
          phone_number: '+79730492669',
          status: 'Открыт',
          seating_time: '2025-04-05T19:10:00+10:00',
          end_time: '2025-04-05T22:10:00+10:00'
        },
        {
          id: 21619,
          name_for_reservation: 'Анна',
          num_people: 7,
          phone_number: '+79711621777',
          status: 'Закрыт',
          seating_time: '2025-04-05T16:20:00+10:00',
          end_time: '2025-04-05T19:20:00+10:00'
        }
      ]
    },
    {
      id: 'ff076f4e-5a62-4e5f-8ce1-3934477b8fc2',
      capacity: 8,
      number: '7',
      zone: '1 этаж',
      orders: [
        {
          id: 'c2e29217-45e7-4770-a388-c581ee52d9ee',
          status: 'Bill',
          start_time: '2025-04-05T15:50:00+10:00',
          end_time: '2025-04-05T18:50:00+10:00'
        },
        {
          id: '36c27a2f-dc94-47de-9fee-081dfc52752d',
          status: 'Closed',
          start_time: '2025-04-05T15:00:00+10:00',
          end_time: '2025-04-05T17:00:00+10:00'
        },
        {
          id: '0ab1e028-680f-46f8-a762-973dd616b6b1',
          status: 'Closed',
          start_time: '2025-04-05T21:20:00+10:00',
          end_time: '2025-04-05T23:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27443,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79034584330',
          status: 'Открыт',
          seating_time: '2025-04-05T22:20:00+10:00',
          end_time: '2025-04-06T01:20:00+10:00'
        },
        {
          id: 28923,
          name_for_reservation: 'Елена',
          num_people: 10,
          phone_number: '+79002142098',
          status: 'Новая',
          seating_time: '2025-04-05T13:20:00+10:00',
          end_time: '2025-04-05T16:20:00+10:00'
        },
        {
          id: 27267,
          name_for_reservation: 'Сергей',
          num_people: 6,
          phone_number: '+79790523039',
          status: 'Открыт',
          seating_time: '2025-04-05T19:20:00+10:00',
          end_time: '2025-04-05T21:20:00+10:00'
        },
        {
          id: 26719,
          name_for_reservation: 'Сергей',
          num_people: 6,
          phone_number: '+79960010285',
          status: 'Новая',
          seating_time: '2025-04-05T20:50:00+10:00',
          end_time: '2025-04-05T21:50:00+10:00'
        }
      ]
    },
    {
      id: '9db24e54-7249-40a1-87ef-278af21b3bf6',
      capacity: 6,
      number: '8',
      zone: '1 этаж',
      orders: [
        {
          id: 'f0851a8e-b6d0-4dc6-9fd2-10c96c843560',
          status: 'Closed',
          start_time: '2025-04-05T14:30:00+10:00',
          end_time: '2025-04-05T17:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 29232,
          name_for_reservation: 'Мария',
          num_people: 10,
          phone_number: '+79565247652',
          status: 'Закрыт',
          seating_time: '2025-04-05T14:20:00+10:00',
          end_time: '2025-04-05T16:20:00+10:00'
        },
        {
          id: 22447,
          name_for_reservation: 'Виктор',
          num_people: 1,
          phone_number: '+79492547661',
          status: 'Открыт',
          seating_time: '2025-04-05T13:10:00+10:00',
          end_time: '2025-04-05T16:10:00+10:00'
        },
        {
          id: 27283,
          name_for_reservation: 'Мария',
          num_people: 10,
          phone_number: '+79998025056',
          status: 'Живая очередь',
          seating_time: '2025-04-05T15:30:00+10:00',
          end_time: '2025-04-05T17:30:00+10:00'
        },
        {
          id: 29897,
          name_for_reservation: 'Лариса',
          num_people: 3,
          phone_number: '+79051057504',
          status: 'Закрыт',
          seating_time: '2025-04-05T20:00:00+10:00',
          end_time: '2025-04-05T21:00:00+10:00'
        }
      ]
    },
    {
      id: '0204aa68-fa2b-42c9-b21d-21ff23a65e12',
      capacity: 6,
      number: '9',
      zone: '1 этаж',
      orders: [
        {
          id: '50068726-6619-4f74-90d5-ba424a4a29a3',
          status: 'Banquet',
          start_time: '2025-04-05T16:20:00+10:00',
          end_time: '2025-04-05T18:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20002,
          name_for_reservation: 'Елена',
          num_people: 9,
          phone_number: '+79972037204',
          status: 'Новая',
          seating_time: '2025-04-05T18:20:00+10:00',
          end_time: '2025-04-05T20:20:00+10:00'
        },
        {
          id: 29195,
          name_for_reservation: 'Павел',
          num_people: 4,
          phone_number: '+79181001742',
          status: 'Закрыт',
          seating_time: '2025-04-05T20:50:00+10:00',
          end_time: '2025-04-05T22:50:00+10:00'
        },
        {
          id: 29007,
          name_for_reservation: 'Лариса',
          num_people: 9,
          phone_number: '+79463940479',
          status: 'Открыт',
          seating_time: '2025-04-05T18:50:00+10:00',
          end_time: '2025-04-05T21:50:00+10:00'
        }
      ]
    },
    {
      id: 'f34383a3-7525-4e4b-b738-2f418ce606de',
      capacity: 4,
      number: '10',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 21875,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79125132447',
          status: 'Живая очередь',
          seating_time: '2025-04-05T16:50:00+10:00',
          end_time: '2025-04-05T19:50:00+10:00'
        }
      ]
    },
    {
      id: 'e84f5987-ad5b-4afa-b3a7-5e8281692a41',
      capacity: 6,
      number: '11',
      zone: '1 этаж',
      orders: [
        {
          id: 'b678f3e9-39b9-4d2c-babc-8a5a63eca239',
          status: 'Bill',
          start_time: '2025-04-05T16:10:00+10:00',
          end_time: '2025-04-05T17:10:00+10:00'
        },
        {
          id: '613f566d-4ebd-42e9-991b-07faa1a31f89',
          status: 'Closed',
          start_time: '2025-04-05T16:40:00+10:00',
          end_time: '2025-04-05T18:40:00+10:00'
        },
        {
          id: '32775573-9c6c-4d1f-89b7-d60d25cc23dd',
          status: 'Banquet',
          start_time: '2025-04-05T17:00:00+10:00',
          end_time: '2025-04-05T19:00:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '92cff0e9-ff1e-4224-9c71-8560e4e423fd',
      capacity: 10,
      number: '12',
      zone: '1 этаж',
      orders: [
        {
          id: 'e0aa4d11-084e-416d-b197-f235df4f549a',
          status: 'New',
          start_time: '2025-04-05T22:20:00+10:00',
          end_time: '2025-04-06T01:20:00+10:00'
        },
        {
          id: '02950285-749d-43db-bdc7-dcb629d9b673',
          status: 'New',
          start_time: '2025-04-05T15:20:00+10:00',
          end_time: '2025-04-05T18:20:00+10:00'
        },
        {
          id: '5d173070-32cc-4c80-8f8d-e759d84d7434',
          status: 'Banquet',
          start_time: '2025-04-05T19:30:00+10:00',
          end_time: '2025-04-05T22:30:00+10:00'
        },
        {
          id: '67a609cc-e8a6-483a-83f2-23bab676e071',
          status: 'New',
          start_time: '2025-04-05T11:20:00+10:00',
          end_time: '2025-04-05T14:20:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'fb04d5c8-c79e-4d9b-9954-68dd90513bad',
      capacity: 6,
      number: '13',
      zone: '1 этаж',
      orders: [
        {
          id: '14482d5e-087a-4d0c-90cb-97ff5193770c',
          status: 'Banquet',
          start_time: '2025-04-05T12:50:00+10:00',
          end_time: '2025-04-05T13:50:00+10:00'
        },
        {
          id: '577468b7-dc80-4400-bacd-78787f1daab6',
          status: 'Bill',
          start_time: '2025-04-05T11:50:00+10:00',
          end_time: '2025-04-05T14:50:00+10:00'
        },
        {
          id: '90da5735-1e5a-4891-883d-08e0910700cf',
          status: 'Closed',
          start_time: '2025-04-05T21:20:00+10:00',
          end_time: '2025-04-05T22:20:00+10:00'
        },
        {
          id: '93742ce1-0b25-4498-92b6-175fbbf5c38e',
          status: 'Banquet',
          start_time: '2025-04-05T12:50:00+10:00',
          end_time: '2025-04-05T15:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24925,
          name_for_reservation: 'Елена',
          num_people: 10,
          phone_number: '+79059222927',
          status: 'Заявка',
          seating_time: '2025-04-05T19:00:00+10:00',
          end_time: '2025-04-05T22:00:00+10:00'
        },
        {
          id: 27739,
          name_for_reservation: 'Дмитрий',
          num_people: 2,
          phone_number: '+79574557657',
          status: 'Заявка',
          seating_time: '2025-04-05T15:10:00+10:00',
          end_time: '2025-04-05T16:10:00+10:00'
        },
        {
          id: 22361,
          name_for_reservation: 'Анна',
          num_people: 8,
          phone_number: '+79191053300',
          status: 'Живая очередь',
          seating_time: '2025-04-05T16:50:00+10:00',
          end_time: '2025-04-05T18:50:00+10:00'
        }
      ]
    },
    {
      id: '2325eb46-c2a1-4f96-b48f-2e70cdc0c7a1',
      capacity: 2,
      number: '101',
      zone: '2 этаж',
      orders: [
        {
          id: '068a3b66-ab89-4c4d-945f-9e870bb87b25',
          status: 'Banquet',
          start_time: '2025-04-05T18:30:00+10:00',
          end_time: '2025-04-05T20:30:00+10:00'
        },
        {
          id: '2e57e9f2-f9ae-4af5-b138-35304dba228f',
          status: 'Banquet',
          start_time: '2025-04-05T15:10:00+10:00',
          end_time: '2025-04-05T18:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22816,
          name_for_reservation: 'Ольга',
          num_people: 9,
          phone_number: '+79364287109',
          status: 'Открыт',
          seating_time: '2025-04-05T16:50:00+10:00',
          end_time: '2025-04-05T17:50:00+10:00'
        },
        {
          id: 23480,
          name_for_reservation: 'Татьяна',
          num_people: 9,
          phone_number: '+79652413878',
          status: 'Новая',
          seating_time: '2025-04-05T12:50:00+10:00',
          end_time: '2025-04-05T14:50:00+10:00'
        }
      ]
    },
    {
      id: '916b8b19-0038-495f-b163-d87ae9e68b81',
      capacity: 12,
      number: '102',
      zone: '2 этаж',
      orders: [
        {
          id: 'cc662351-5101-4202-9275-83b82ee39726',
          status: 'Closed',
          start_time: '2025-04-05T18:20:00+10:00',
          end_time: '2025-04-05T20:20:00+10:00'
        },
        {
          id: 'e81900e4-1954-4df6-a6de-071e5f974445',
          status: 'New',
          start_time: '2025-04-05T11:30:00+10:00',
          end_time: '2025-04-05T13:30:00+10:00'
        },
        {
          id: 'a4e2631c-6f8b-4122-a4b4-99782eb8a613',
          status: 'New',
          start_time: '2025-04-05T18:30:00+10:00',
          end_time: '2025-04-05T20:30:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'e82f38f9-6f29-404b-8ee0-eee0e2564824',
      capacity: 12,
      number: '103',
      zone: '2 этаж',
      orders: [],
      reservations: []
    },
    {
      id: '9d7bbd75-71cf-41bd-9e13-64af1a90b322',
      capacity: 2,
      number: '104',
      zone: '2 этаж',
      orders: [
        {
          id: '6ec60b5d-b7f6-4480-8ef5-2b9be16d0994',
          status: 'Bill',
          start_time: '2025-04-05T22:20:00+10:00',
          end_time: '2025-04-05T23:20:00+10:00'
        },
        {
          id: 'fa6be8ae-cc79-422b-9c11-7a1e3e3656cd',
          status: 'Closed',
          start_time: '2025-04-05T13:40:00+10:00',
          end_time: '2025-04-05T14:40:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'e1d5d7fd-b976-4b61-8f20-44bfa3fc8891',
      capacity: 4,
      number: '105',
      zone: '2 этаж',
      orders: [],
      reservations: [
        {
          id: 27175,
          name_for_reservation: 'Наталья',
          num_people: 4,
          phone_number: '+79809659759',
          status: 'Новая',
          seating_time: '2025-04-05T14:50:00+10:00',
          end_time: '2025-04-05T17:50:00+10:00'
        },
        {
          id: 22621,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79115026106',
          status: 'Закрыт',
          seating_time: '2025-04-05T11:00:00+10:00',
          end_time: '2025-04-05T13:00:00+10:00'
        }
      ]
    },
    {
      id: 'd6bc98d0-bb74-48e1-8028-41f5f9bf6abd',
      capacity: 12,
      number: '106',
      zone: '2 этаж',
      orders: [],
      reservations: []
    },
    {
      id: 'bc49c24c-853f-4fcc-b203-4e2848cc157f',
      capacity: 4,
      number: '107',
      zone: '2 этаж',
      orders: [
        {
          id: 'f6ba6cc4-e6fb-4aed-ab66-fe62b76ebee8',
          status: 'Bill',
          start_time: '2025-04-05T18:10:00+10:00',
          end_time: '2025-04-05T19:10:00+10:00'
        },
        {
          id: 'fed58a73-5344-49c2-8536-2387fd89c891',
          status: 'Bill',
          start_time: '2025-04-05T16:00:00+10:00',
          end_time: '2025-04-05T18:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 23889,
          name_for_reservation: 'Сергей',
          num_people: 5,
          phone_number: '+79074823525',
          status: 'Закрыт',
          seating_time: '2025-04-05T21:30:00+10:00',
          end_time: '2025-04-05T22:30:00+10:00'
        }
      ]
    },
    {
      id: '3d5625d6-cf84-4bd5-a17b-250acbc8fc05',
      capacity: 6,
      number: '108',
      zone: '2 этаж',
      orders: [
        {
          id: '71e87165-4f75-493f-b184-9c2d55461627',
          status: 'Bill',
          start_time: '2025-04-05T22:20:00+10:00',
          end_time: '2025-04-06T00:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25964,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79705856985',
          status: 'Закрыт',
          seating_time: '2025-04-05T20:20:00+10:00',
          end_time: '2025-04-05T23:20:00+10:00'
        }
      ]
    },
    {
      id: '685658d7-6c95-4f93-9d3e-d79410352ee6',
      capacity: 10,
      number: '109',
      zone: '2 этаж',
      orders: [
        {
          id: '23d374af-b535-4e0d-9039-17273f3a3f74',
          status: 'Bill',
          start_time: '2025-04-05T17:50:00+10:00',
          end_time: '2025-04-05T20:50:00+10:00'
        },
        {
          id: 'bc133638-cd6a-4116-8568-90552b81c977',
          status: 'Bill',
          start_time: '2025-04-05T18:20:00+10:00',
          end_time: '2025-04-05T20:20:00+10:00'
        },
        {
          id: '47a9265a-60f3-4c65-a263-7b01f4d0c1c1',
          status: 'Banquet',
          start_time: '2025-04-05T18:10:00+10:00',
          end_time: '2025-04-05T21:10:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '5c6f2a1f-50a0-4217-a78b-2ea61cda9319',
      capacity: 4,
      number: '110',
      zone: '2 этаж',
      orders: [],
      reservations: [
        {
          id: 28652,
          name_for_reservation: 'Сергей',
          num_people: 7,
          phone_number: '+79665367457',
          status: 'Закрыт',
          seating_time: '2025-04-05T15:50:00+10:00',
          end_time: '2025-04-05T17:50:00+10:00'
        },
        {
          id: 26949,
          name_for_reservation: 'Анна',
          num_people: 9,
          phone_number: '+79710179335',
          status: 'Заявка',
          seating_time: '2025-04-05T11:00:00+10:00',
          end_time: '2025-04-05T14:00:00+10:00'
        }
      ]
    },
    {
      id: '8385eabc-1e2a-4cbb-a46d-9daa329c9add',
      capacity: 6,
      number: 'B1',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '648a26ad-dc9e-4a6a-b7fc-3d1bbb542a50',
          status: 'Bill',
          start_time: '2025-04-05T14:20:00+10:00',
          end_time: '2025-04-05T15:20:00+10:00'
        },
        {
          id: '4f70c345-0ca2-40c6-b305-a4542789b49d',
          status: 'Closed',
          start_time: '2025-04-05T13:20:00+10:00',
          end_time: '2025-04-05T16:20:00+10:00'
        },
        {
          id: '0ad6bd2f-76e0-4981-aec6-8faec53009de',
          status: 'Banquet',
          start_time: '2025-04-05T19:40:00+10:00',
          end_time: '2025-04-05T20:40:00+10:00'
        },
        {
          id: 'fbfc1880-e603-402e-b8d7-383a415aec3f',
          status: 'Bill',
          start_time: '2025-04-05T19:10:00+10:00',
          end_time: '2025-04-05T20:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24856,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79258227957',
          status: 'Живая очередь',
          seating_time: '2025-04-05T21:50:00+10:00',
          end_time: '2025-04-05T22:50:00+10:00'
        },
        {
          id: 24978,
          name_for_reservation: 'Елена',
          num_people: 2,
          phone_number: '+79424867145',
          status: 'Новая',
          seating_time: '2025-04-05T16:50:00+10:00',
          end_time: '2025-04-05T18:50:00+10:00'
        }
      ]
    },
    {
      id: '52dc44a4-1ab1-4b36-b26d-0a14e81db5f8',
      capacity: 4,
      number: 'B2',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'b44dd5a1-39d8-49e5-b3f4-e64f12e5028c',
          status: 'Closed',
          start_time: '2025-04-05T21:40:00+10:00',
          end_time: '2025-04-05T22:40:00+10:00'
        },
        {
          id: '38392f2d-e5c3-4519-84ce-67477884dd40',
          status: 'Closed',
          start_time: '2025-04-05T16:20:00+10:00',
          end_time: '2025-04-05T17:20:00+10:00'
        },
        {
          id: '257a07a3-48fc-4469-94fc-48c7b2cb7b1b',
          status: 'Bill',
          start_time: '2025-04-05T11:20:00+10:00',
          end_time: '2025-04-05T13:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 29668,
          name_for_reservation: 'Татьяна',
          num_people: 5,
          phone_number: '+79597079051',
          status: 'Новая',
          seating_time: '2025-04-05T11:00:00+10:00',
          end_time: '2025-04-05T12:00:00+10:00'
        }
      ]
    },
    {
      id: '3bd03d17-9fe2-45c1-874e-4080bd804e7b',
      capacity: 2,
      number: 'B3',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '137f8ebf-0e04-472a-ac64-480cb5240598',
          status: 'Closed',
          start_time: '2025-04-05T13:40:00+10:00',
          end_time: '2025-04-05T16:40:00+10:00'
        },
        {
          id: '4c4e15d6-2ac4-4bab-bbf0-69cbcd1c3cf1',
          status: 'Banquet',
          start_time: '2025-04-05T22:10:00+10:00',
          end_time: '2025-04-05T23:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22706,
          name_for_reservation: 'Мария',
          num_people: 10,
          phone_number: '+79561147483',
          status: 'Живая очередь',
          seating_time: '2025-04-05T18:50:00+10:00',
          end_time: '2025-04-05T21:50:00+10:00'
        },
        {
          id: 28927,
          name_for_reservation: 'Дмитрий',
          num_people: 8,
          phone_number: '+79218671261',
          status: 'Заявка',
          seating_time: '2025-04-05T20:10:00+10:00',
          end_time: '2025-04-05T22:10:00+10:00'
        }
      ]
    },
    {
      id: 'cedcf536-f064-4798-87ba-6193eb63acb8',
      capacity: 8,
      number: 'B4',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '304d06b6-57cf-4a0c-a4bc-398146f6b69b',
          status: 'New',
          start_time: '2025-04-05T15:30:00+10:00',
          end_time: '2025-04-05T16:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27690,
          name_for_reservation: 'Анна',
          num_people: 9,
          phone_number: '+79785785093',
          status: 'Новая',
          seating_time: '2025-04-05T20:40:00+10:00',
          end_time: '2025-04-05T23:40:00+10:00'
        },
        {
          id: 28170,
          name_for_reservation: 'Светлана',
          num_people: 4,
          phone_number: '+79417174253',
          status: 'Новая',
          seating_time: '2025-04-05T18:40:00+10:00',
          end_time: '2025-04-05T21:40:00+10:00'
        },
        {
          id: 21203,
          name_for_reservation: 'Лариса',
          num_people: 2,
          phone_number: '+79750953369',
          status: 'Закрыт',
          seating_time: '2025-04-05T11:50:00+10:00',
          end_time: '2025-04-05T13:50:00+10:00'
        }
      ]
    },
    {
      id: 'a7068efc-3633-4b23-996f-38a4c0bf22a4',
      capacity: 6,
      number: 'B5',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '47c6dfeb-42a5-485b-becf-4b629b54e82f',
          status: 'Bill',
          start_time: '2025-04-05T13:20:00+10:00',
          end_time: '2025-04-05T16:20:00+10:00'
        },
        {
          id: '318860ae-3f92-42ab-b021-4930a53546ef',
          status: 'New',
          start_time: '2025-04-05T19:30:00+10:00',
          end_time: '2025-04-05T21:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25039,
          name_for_reservation: 'Елена',
          num_people: 3,
          phone_number: '+79426985713',
          status: 'Заявка',
          seating_time: '2025-04-05T13:30:00+10:00',
          end_time: '2025-04-05T15:30:00+10:00'
        }
      ]
    },
    {
      id: '553cc77f-1af2-4b66-ab1e-671d1c5ff819',
      capacity: 10,
      number: 'B6',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '7995c47a-c155-42e0-9eaf-d97c88ab46d9',
          status: 'New',
          start_time: '2025-04-05T20:10:00+10:00',
          end_time: '2025-04-05T21:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 21641,
          name_for_reservation: 'Сергей',
          num_people: 9,
          phone_number: '+79251093493',
          status: 'Заявка',
          seating_time: '2025-04-05T19:20:00+10:00',
          end_time: '2025-04-05T21:20:00+10:00'
        },
        {
          id: 29511,
          name_for_reservation: 'Татьяна',
          num_people: 7,
          phone_number: '+79243923068',
          status: 'Живая очередь',
          seating_time: '2025-04-05T22:30:00+10:00',
          end_time: '2025-04-05T23:30:00+10:00'
        }
      ]
    },
    {
      id: 'dbaa4762-edba-4061-8605-7f37ed860a9e',
      capacity: 8,
      number: 'B7',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '3673c3c1-8c73-4223-90c7-436782101764',
          status: 'Bill',
          start_time: '2025-04-05T15:20:00+10:00',
          end_time: '2025-04-05T18:20:00+10:00'
        },
        {
          id: '472a4371-879d-4919-ad79-3b93ea91907b',
          status: 'Banquet',
          start_time: '2025-04-05T20:40:00+10:00',
          end_time: '2025-04-05T21:40:00+10:00'
        },
        {
          id: '6b28e89b-558b-4b44-8d3e-e75b2ad05c6d',
          status: 'New',
          start_time: '2025-04-05T16:20:00+10:00',
          end_time: '2025-04-05T18:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26686,
          name_for_reservation: 'Наталья',
          num_people: 3,
          phone_number: '+79205370230',
          status: 'Заявка',
          seating_time: '2025-04-05T19:00:00+10:00',
          end_time: '2025-04-05T22:00:00+10:00'
        }
      ]
    },
    {
      id: '3f678042-b6b4-4c18-9158-bbbc19738030',
      capacity: 4,
      number: 'B8',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '5471e6db-1c07-419d-9577-72d2b0df08b8',
          status: 'New',
          start_time: '2025-04-05T22:20:00+10:00',
          end_time: '2025-04-05T23:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24666,
          name_for_reservation: 'Павел',
          num_people: 6,
          phone_number: '+79086093488',
          status: 'Новая',
          seating_time: '2025-04-05T16:40:00+10:00',
          end_time: '2025-04-05T18:40:00+10:00'
        },
        {
          id: 22064,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79251494646',
          status: 'Заявка',
          seating_time: '2025-04-05T20:20:00+10:00',
          end_time: '2025-04-05T21:20:00+10:00'
        },
        {
          id: 21349,
          name_for_reservation: 'Ирина',
          num_people: 2,
          phone_number: '+79984357545',
          status: 'Открыт',
          seating_time: '2025-04-05T16:40:00+10:00',
          end_time: '2025-04-05T17:40:00+10:00'
        }
      ]
    },
    {
      id: '838f2f91-798d-4f83-a97c-c2614d17ea9e',
      capacity: 8,
      number: 'B9',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '5a7e0a10-523f-48ef-97b3-b7a8fd70877f',
          status: 'New',
          start_time: '2025-04-05T18:50:00+10:00',
          end_time: '2025-04-05T19:50:00+10:00'
        },
        {
          id: 'd3a59b8b-cc83-4321-9e3e-4c6945ad23ef',
          status: 'Bill',
          start_time: '2025-04-05T21:50:00+10:00',
          end_time: '2025-04-05T22:50:00+10:00'
        },
        {
          id: '0fb57557-401f-477b-b959-466f83b1ef23',
          status: 'Closed',
          start_time: '2025-04-05T13:40:00+10:00',
          end_time: '2025-04-05T15:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20173,
          name_for_reservation: 'Алексей',
          num_people: 7,
          phone_number: '+79843045639',
          status: 'Заявка',
          seating_time: '2025-04-05T18:10:00+10:00',
          end_time: '2025-04-05T19:10:00+10:00'
        },
        {
          id: 25822,
          name_for_reservation: 'Анна',
          num_people: 3,
          phone_number: '+79466482725',
          status: 'Заявка',
          seating_time: '2025-04-05T14:10:00+10:00',
          end_time: '2025-04-05T15:10:00+10:00'
        },
        {
          id: 27223,
          name_for_reservation: 'Елена',
          num_people: 9,
          phone_number: '+79644471784',
          status: 'Открыт',
          seating_time: '2025-04-05T22:30:00+10:00',
          end_time: '2025-04-06T01:30:00+10:00'
        },
        {
          id: 25158,
          name_for_reservation: 'Ольга',
          num_people: 4,
          phone_number: '+79799443584',
          status: 'Открыт',
          seating_time: '2025-04-05T13:20:00+10:00',
          end_time: '2025-04-05T15:20:00+10:00'
        }
      ]
    },
    {
      id: 'bc495791-569d-4812-a73b-11540c4a7cbe',
      capacity: 10,
      number: 'B10',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '7d642529-bb42-4124-98a6-ebcb64b5589a',
          status: 'Bill',
          start_time: '2025-04-05T22:00:00+10:00',
          end_time: '2025-04-06T01:00:00+10:00'
        },
        {
          id: '04174f5b-99fd-4b3b-ab35-3618bcedffa2',
          status: 'Banquet',
          start_time: '2025-04-05T14:00:00+10:00',
          end_time: '2025-04-05T17:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28810,
          name_for_reservation: 'Павел',
          num_people: 6,
          phone_number: '+79963695773',
          status: 'Открыт',
          seating_time: '2025-04-05T22:30:00+10:00',
          end_time: '2025-04-06T00:30:00+10:00'
        },
        {
          id: 23169,
          name_for_reservation: 'Наталья',
          num_people: 7,
          phone_number: '+79135294545',
          status: 'Живая очередь',
          seating_time: '2025-04-05T22:00:00+10:00',
          end_time: '2025-04-05T23:00:00+10:00'
        },
        {
          id: 25499,
          name_for_reservation: 'Дмитрий',
          num_people: 1,
          phone_number: '+79470311755',
          status: 'Закрыт',
          seating_time: '2025-04-05T19:00:00+10:00',
          end_time: '2025-04-05T22:00:00+10:00'
        }
      ]
    },
    {
      id: 'f25f7278-398b-4c48-95f2-aee1ea9432b4',
      capacity: 12,
      number: 'B11',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 24532,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79568354365',
          status: 'Живая очередь',
          seating_time: '2025-04-05T20:30:00+10:00',
          end_time: '2025-04-05T23:30:00+10:00'
        }
      ]
    },
    {
      id: '8379390f-31a3-41d2-839a-c97b203ba017',
      capacity: 10,
      number: 'B12',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '5ef4b2f4-6d38-4c6a-b607-0a68c63b061b',
          status: 'Closed',
          start_time: '2025-04-05T14:40:00+10:00',
          end_time: '2025-04-05T17:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 29643,
          name_for_reservation: 'Наталья',
          num_people: 10,
          phone_number: '+79096126139',
          status: 'Открыт',
          seating_time: '2025-04-05T20:00:00+10:00',
          end_time: '2025-04-05T22:00:00+10:00'
        },
        {
          id: 21928,
          name_for_reservation: 'Дмитрий',
          num_people: 6,
          phone_number: '+79517108174',
          status: 'Новая',
          seating_time: '2025-04-05T20:20:00+10:00',
          end_time: '2025-04-05T23:20:00+10:00'
        },
        {
          id: 27066,
          name_for_reservation: 'Павел',
          num_people: 7,
          phone_number: '+79244063796',
          status: 'Заявка',
          seating_time: '2025-04-05T11:10:00+10:00',
          end_time: '2025-04-05T14:10:00+10:00'
        }
      ]
    },
    {
      id: 'cc637e13-bfa1-46a9-8f9c-5faadd917e1a',
      capacity: 4,
      number: 'B13',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '638b66a0-c930-43a0-a446-581fc4f13a30',
          status: 'Banquet',
          start_time: '2025-04-05T21:50:00+10:00',
          end_time: '2025-04-05T23:50:00+10:00'
        },
        {
          id: 'e611ba7b-6ef8-4b4a-b994-a7dab98ee15b',
          status: 'Closed',
          start_time: '2025-04-05T13:30:00+10:00',
          end_time: '2025-04-05T16:30:00+10:00'
        },
        {
          id: '223d7ef9-c564-4685-a721-b9c2c6c00092',
          status: 'Bill',
          start_time: '2025-04-05T20:20:00+10:00',
          end_time: '2025-04-05T22:20:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '52a08868-4c2a-409a-b868-5b4c2bb538f9',
      capacity: 10,
      number: 'B14',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'df1eeffb-435d-47c7-a757-5ddfa258be51',
          status: 'Closed',
          start_time: '2025-04-05T19:00:00+10:00',
          end_time: '2025-04-05T22:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26615,
          name_for_reservation: 'Елена',
          num_people: 1,
          phone_number: '+79398810674',
          status: 'Заявка',
          seating_time: '2025-04-05T20:20:00+10:00',
          end_time: '2025-04-05T23:20:00+10:00'
        },
        {
          id: 22818,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79461203660',
          status: 'Закрыт',
          seating_time: '2025-04-05T15:00:00+10:00',
          end_time: '2025-04-05T16:00:00+10:00'
        },
        {
          id: 29756,
          name_for_reservation: 'Светлана',
          num_people: 4,
          phone_number: '+79830598375',
          status: 'Живая очередь',
          seating_time: '2025-04-05T17:50:00+10:00',
          end_time: '2025-04-05T18:50:00+10:00'
        }
      ]
    },
    {
      id: '80b63012-81e2-42dd-9b2c-5e5db5367702',
      capacity: 10,
      number: 'B15',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '705c1249-43de-4dc3-beda-a56a343e6d4f',
          status: 'Closed',
          start_time: '2025-04-05T20:50:00+10:00',
          end_time: '2025-04-05T21:50:00+10:00'
        },
        {
          id: '9430e7bf-982c-4359-8c73-f03d5e6fdf4f',
          status: 'New',
          start_time: '2025-04-05T18:30:00+10:00',
          end_time: '2025-04-05T19:30:00+10:00'
        },
        {
          id: 'e5134563-20b2-4446-9c0a-2fe50bae5f39',
          status: 'Closed',
          start_time: '2025-04-05T19:10:00+10:00',
          end_time: '2025-04-05T21:10:00+10:00'
        },
        {
          id: '4351b0e0-14a3-4daa-ac96-98bd6a99dfdb',
          status: 'Bill',
          start_time: '2025-04-05T18:30:00+10:00',
          end_time: '2025-04-05T21:30:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'e8f5cbf9-599d-40cc-9bc5-dc35ea630e89',
      capacity: 10,
      number: 'B16',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '964e0622-5d1a-4aaf-9a47-d3382e215ae4',
          status: 'Banquet',
          start_time: '2025-04-05T18:40:00+10:00',
          end_time: '2025-04-05T21:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 21704,
          name_for_reservation: 'Лариса',
          num_people: 9,
          phone_number: '+79254255673',
          status: 'Открыт',
          seating_time: '2025-04-05T17:20:00+10:00',
          end_time: '2025-04-05T20:20:00+10:00'
        },
        {
          id: 23526,
          name_for_reservation: 'Светлана',
          num_people: 5,
          phone_number: '+79983679702',
          status: 'Новая',
          seating_time: '2025-04-05T15:00:00+10:00',
          end_time: '2025-04-05T16:00:00+10:00'
        }
      ]
    },
    {
      id: 'f7169664-683a-4842-9f5e-2a95e6dc1c69',
      capacity: 10,
      number: 'B17',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '156e3fe9-348c-4dbe-9e08-881fd5c346ab',
          status: 'Closed',
          start_time: '2025-04-05T12:30:00+10:00',
          end_time: '2025-04-05T14:30:00+10:00'
        },
        {
          id: 'f2d126c3-d551-4944-ac8d-901d25f3851b',
          status: 'New',
          start_time: '2025-04-05T13:10:00+10:00',
          end_time: '2025-04-05T15:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20171,
          name_for_reservation: 'Ольга',
          num_people: 9,
          phone_number: '+79409395133',
          status: 'Живая очередь',
          seating_time: '2025-04-05T13:20:00+10:00',
          end_time: '2025-04-05T14:20:00+10:00'
        },
        {
          id: 22842,
          name_for_reservation: 'Валентина',
          num_people: 1,
          phone_number: '+79873151333',
          status: 'Закрыт',
          seating_time: '2025-04-05T14:10:00+10:00',
          end_time: '2025-04-05T15:10:00+10:00'
        },
        {
          id: 24217,
          name_for_reservation: 'Павел',
          num_people: 4,
          phone_number: '+79088874192',
          status: 'Живая очередь',
          seating_time: '2025-04-05T12:10:00+10:00',
          end_time: '2025-04-05T15:10:00+10:00'
        }
      ]
    },
    {
      id: '12b536da-df6e-4f5f-b5f3-5113e6a11f2e',
      capacity: 10,
      number: 'B18',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '6b17b64b-c886-449f-8a87-bab186c95a24',
          status: 'Closed',
          start_time: '2025-04-05T14:50:00+10:00',
          end_time: '2025-04-05T17:50:00+10:00'
        },
        {
          id: 'f9a53831-b671-4b8c-bb36-7562e5888f0e',
          status: 'Bill',
          start_time: '2025-04-05T14:10:00+10:00',
          end_time: '2025-04-05T17:10:00+10:00'
        },
        {
          id: '1b77a99b-7744-4c07-8e59-cd7f82ab56c2',
          status: 'Banquet',
          start_time: '2025-04-05T18:10:00+10:00',
          end_time: '2025-04-05T20:10:00+10:00'
        },
        {
          id: '96d31edc-b07d-4bc0-83bc-8b7e8774fd26',
          status: 'New',
          start_time: '2025-04-05T14:50:00+10:00',
          end_time: '2025-04-05T16:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25208,
          name_for_reservation: 'Валентина',
          num_people: 1,
          phone_number: '+79813134344',
          status: 'Заявка',
          seating_time: '2025-04-05T18:40:00+10:00',
          end_time: '2025-04-05T19:40:00+10:00'
        },
        {
          id: 21548,
          name_for_reservation: 'Дмитрий',
          num_people: 2,
          phone_number: '+79388861819',
          status: 'Заявка',
          seating_time: '2025-04-05T11:20:00+10:00',
          end_time: '2025-04-05T12:20:00+10:00'
        },
        {
          id: 23298,
          name_for_reservation: 'Павел',
          num_people: 5,
          phone_number: '+79647491639',
          status: 'Новая',
          seating_time: '2025-04-05T18:10:00+10:00',
          end_time: '2025-04-05T20:10:00+10:00'
        },
        {
          id: 28436,
          name_for_reservation: 'Елена',
          num_people: 4,
          phone_number: '+79462802580',
          status: 'Открыт',
          seating_time: '2025-04-05T20:50:00+10:00',
          end_time: '2025-04-05T23:50:00+10:00'
        }
      ]
    }
  ]
}
