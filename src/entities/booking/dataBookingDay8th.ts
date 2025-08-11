import { BookingData } from './type'

export const BookingDay8thOfApril: BookingData = {
  available_days: [
    '2025-04-04',
    '2025-04-05',
    '2025-04-06',
    '2025-04-07',
    '2025-04-08'
  ],
  current_day: '2025-04-08',
  restaurant: {
    id: 11100,
    timezone: 'Asia/Vladivostok',
    restaurant_name: 'Супра',
    opening_time: '11:00',
    closing_time: '23:40'
  },
  tables: [
    {
      id: 'faeeed2d-a1cf-4114-ba33-58ccef322607',
      capacity: 8,
      number: '1',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 26784,
          name_for_reservation: 'Дмитрий',
          num_people: 6,
          phone_number: '+79928609244',
          status: 'Живая очередь',
          seating_time: '2025-04-08T15:20:00+10:00',
          end_time: '2025-04-08T17:20:00+10:00'
        }
      ]
    },
    {
      id: 'e17f80d5-7da4-4741-95fc-4bf97d834976',
      capacity: 10,
      number: '2',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 23719,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79398750297',
          status: 'Новая',
          seating_time: '2025-04-08T17:50:00+10:00',
          end_time: '2025-04-08T20:50:00+10:00'
        },
        {
          id: 21790,
          name_for_reservation: 'Дмитрий',
          num_people: 3,
          phone_number: '+79802777506',
          status: 'Закрыт',
          seating_time: '2025-04-08T21:20:00+10:00',
          end_time: '2025-04-08T22:20:00+10:00'
        }
      ]
    },
    {
      id: '4ab5771d-808f-4fcd-b5ea-5298d1f3988a',
      capacity: 10,
      number: '3',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 27699,
          name_for_reservation: 'Светлана',
          num_people: 4,
          phone_number: '+79290027386',
          status: 'Заявка',
          seating_time: '2025-04-08T18:20:00+10:00',
          end_time: '2025-04-08T21:20:00+10:00'
        },
        {
          id: 25655,
          name_for_reservation: 'Лариса',
          num_people: 3,
          phone_number: '+79502205101',
          status: 'Новая',
          seating_time: '2025-04-08T22:40:00+10:00',
          end_time: '2025-04-08T23:40:00+10:00'
        }
      ]
    },
    {
      id: 'ac9e0656-9836-48af-ae46-3207c7b811b7',
      capacity: 2,
      number: '4',
      zone: '1 этаж',
      orders: [
        {
          id: '5784df0f-6b12-4255-ac54-4a69f0c1611e',
          status: 'Bill',
          start_time: '2025-04-08T22:20:00+10:00',
          end_time: '2025-04-09T00:20:00+10:00'
        },
        {
          id: '572dcfad-9bbf-4597-8e17-d62c628f4c15',
          status: 'New',
          start_time: '2025-04-08T16:50:00+10:00',
          end_time: '2025-04-08T17:50:00+10:00'
        },
        {
          id: '0f853879-a540-45d2-8ce4-3bd854bba082',
          status: 'Banquet',
          start_time: '2025-04-08T15:50:00+10:00',
          end_time: '2025-04-08T18:50:00+10:00'
        },
        {
          id: 'cdfe0591-53f6-45c4-b5d2-8bdfff932108',
          status: 'Closed',
          start_time: '2025-04-08T16:30:00+10:00',
          end_time: '2025-04-08T19:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28739,
          name_for_reservation: 'Наталья',
          num_people: 7,
          phone_number: '+79944855958',
          status: 'Открыт',
          seating_time: '2025-04-08T17:20:00+10:00',
          end_time: '2025-04-08T19:20:00+10:00'
        }
      ]
    },
    {
      id: '03baae21-791d-439b-a70a-0e0ee96ec1b6',
      capacity: 8,
      number: '5',
      zone: '1 этаж',
      orders: [
        {
          id: '3dd5a737-25c8-4616-a036-c8d49399f4e4',
          status: 'Bill',
          start_time: '2025-04-08T16:10:00+10:00',
          end_time: '2025-04-08T19:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25413,
          name_for_reservation: 'Наталья',
          num_people: 7,
          phone_number: '+79241091304',
          status: 'Живая очередь',
          seating_time: '2025-04-08T20:50:00+10:00',
          end_time: '2025-04-08T22:50:00+10:00'
        },
        {
          id: 29902,
          name_for_reservation: 'Сергей',
          num_people: 6,
          phone_number: '+79962132467',
          status: 'Живая очередь',
          seating_time: '2025-04-08T13:20:00+10:00',
          end_time: '2025-04-08T14:20:00+10:00'
        },
        {
          id: 29198,
          name_for_reservation: 'Татьяна',
          num_people: 8,
          phone_number: '+79492609926',
          status: 'Закрыт',
          seating_time: '2025-04-08T20:30:00+10:00',
          end_time: '2025-04-08T21:30:00+10:00'
        }
      ]
    },
    {
      id: 'ac448c6e-9336-4243-8f17-bbc6fdf7f8b4',
      capacity: 12,
      number: '6',
      zone: '1 этаж',
      orders: [
        {
          id: '23fe0fba-1a67-4fed-b22d-3fd5615bad68',
          status: 'New',
          start_time: '2025-04-08T18:10:00+10:00',
          end_time: '2025-04-08T19:10:00+10:00'
        },
        {
          id: 'a753237b-7f67-4c3b-b843-4ea915adc9b8',
          status: 'Closed',
          start_time: '2025-04-08T19:20:00+10:00',
          end_time: '2025-04-08T21:20:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '3badf6f2-e5d1-4214-900d-249ba86d1f05',
      capacity: 8,
      number: '7',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 24412,
          name_for_reservation: 'Анна',
          num_people: 6,
          phone_number: '+79519295972',
          status: 'Живая очередь',
          seating_time: '2025-04-08T11:00:00+10:00',
          end_time: '2025-04-08T13:00:00+10:00'
        }
      ]
    },
    {
      id: 'a649caa6-d53d-4272-b085-16a17b3cdb7f',
      capacity: 6,
      number: '8',
      zone: '1 этаж',
      orders: [],
      reservations: []
    },
    {
      id: '75b0deb1-eca7-4c4e-b873-82ceb936d1cc',
      capacity: 6,
      number: '9',
      zone: '1 этаж',
      orders: [
        {
          id: '3d32effb-1cce-4ae2-a061-970e2609150f',
          status: 'Banquet',
          start_time: '2025-04-08T15:30:00+10:00',
          end_time: '2025-04-08T17:30:00+10:00'
        },
        {
          id: 'd6e354ae-123a-4234-80b8-c243b216ff89',
          status: 'Closed',
          start_time: '2025-04-08T13:30:00+10:00',
          end_time: '2025-04-08T16:30:00+10:00'
        },
        {
          id: 'df49aa9d-6eb7-427d-89ed-0f425a1c5444',
          status: 'Banquet',
          start_time: '2025-04-08T21:50:00+10:00',
          end_time: '2025-04-08T23:50:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'b2c5f581-8380-4b83-824f-2b694413a664',
      capacity: 4,
      number: '10',
      zone: '1 этаж',
      orders: [
        {
          id: '93baa5da-7759-41b9-852c-a2051aeb0143',
          status: 'New',
          start_time: '2025-04-08T12:00:00+10:00',
          end_time: '2025-04-08T13:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28754,
          name_for_reservation: 'Мария',
          num_people: 4,
          phone_number: '+79991233216',
          status: 'Открыт',
          seating_time: '2025-04-08T17:10:00+10:00',
          end_time: '2025-04-08T20:10:00+10:00'
        }
      ]
    },
    {
      id: '7274fbe5-892a-4acc-bf5a-f5249d272e2e',
      capacity: 6,
      number: '11',
      zone: '1 этаж',
      orders: [
        {
          id: 'd90938e3-a84b-4072-8c6a-9e46dd55b6c0',
          status: 'Closed',
          start_time: '2025-04-08T12:20:00+10:00',
          end_time: '2025-04-08T15:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 29153,
          name_for_reservation: 'Дмитрий',
          num_people: 6,
          phone_number: '+79326182789',
          status: 'Живая очередь',
          seating_time: '2025-04-08T16:30:00+10:00',
          end_time: '2025-04-08T19:30:00+10:00'
        },
        {
          id: 23116,
          name_for_reservation: 'Дмитрий',
          num_people: 2,
          phone_number: '+79458821813',
          status: 'Открыт',
          seating_time: '2025-04-08T15:20:00+10:00',
          end_time: '2025-04-08T17:20:00+10:00'
        }
      ]
    },
    {
      id: 'ca6048f8-cea1-4590-9569-83719606f952',
      capacity: 10,
      number: '12',
      zone: '1 этаж',
      orders: [
        {
          id: 'd29ed79f-16e5-42bf-8237-abd76ec3f8ab',
          status: 'Closed',
          start_time: '2025-04-08T16:20:00+10:00',
          end_time: '2025-04-08T18:20:00+10:00'
        },
        {
          id: '5adb82b9-15d9-4ff3-9bbe-ffa58550052b',
          status: 'Bill',
          start_time: '2025-04-08T21:30:00+10:00',
          end_time: '2025-04-09T00:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27592,
          name_for_reservation: 'Светлана',
          num_people: 8,
          phone_number: '+79702041772',
          status: 'Новая',
          seating_time: '2025-04-08T12:40:00+10:00',
          end_time: '2025-04-08T13:40:00+10:00'
        }
      ]
    },
    {
      id: 'bd0c601b-441a-4787-bcf0-e4bc6ef53ac9',
      capacity: 6,
      number: '13',
      zone: '1 этаж',
      orders: [
        {
          id: '561355f7-54f2-48dd-bb49-3633178b5a8f',
          status: 'Banquet',
          start_time: '2025-04-08T22:10:00+10:00',
          end_time: '2025-04-08T23:10:00+10:00'
        },
        {
          id: 'a24452fd-457a-4e94-8e8e-978676b0c0f8',
          status: 'New',
          start_time: '2025-04-08T16:00:00+10:00',
          end_time: '2025-04-08T18:00:00+10:00'
        },
        {
          id: 'ebdb520e-7893-495a-8921-322ba4ffd4c2',
          status: 'Closed',
          start_time: '2025-04-08T20:40:00+10:00',
          end_time: '2025-04-08T21:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 21811,
          name_for_reservation: 'Сергей',
          num_people: 8,
          phone_number: '+79622503723',
          status: 'Живая очередь',
          seating_time: '2025-04-08T16:30:00+10:00',
          end_time: '2025-04-08T19:30:00+10:00'
        },
        {
          id: 28873,
          name_for_reservation: 'Виктор',
          num_people: 3,
          phone_number: '+79139202771',
          status: 'Закрыт',
          seating_time: '2025-04-08T14:10:00+10:00',
          end_time: '2025-04-08T17:10:00+10:00'
        },
        {
          id: 28744,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79366026005',
          status: 'Новая',
          seating_time: '2025-04-08T20:40:00+10:00',
          end_time: '2025-04-08T23:40:00+10:00'
        },
        {
          id: 27954,
          name_for_reservation: 'Светлана',
          num_people: 5,
          phone_number: '+79440585526',
          status: 'Закрыт',
          seating_time: '2025-04-08T12:20:00+10:00',
          end_time: '2025-04-08T14:20:00+10:00'
        }
      ]
    },
    {
      id: 'b9ebeef8-e897-4e42-a67e-a8bda026168a',
      capacity: 2,
      number: '101',
      zone: '2 этаж',
      orders: [
        {
          id: '86858327-188d-479f-8a3f-c57a4ff7197d',
          status: 'Banquet',
          start_time: '2025-04-08T18:40:00+10:00',
          end_time: '2025-04-08T21:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26295,
          name_for_reservation: 'Анна',
          num_people: 1,
          phone_number: '+79547159637',
          status: 'Живая очередь',
          seating_time: '2025-04-08T21:50:00+10:00',
          end_time: '2025-04-08T23:50:00+10:00'
        },
        {
          id: 27241,
          name_for_reservation: 'Ирина',
          num_people: 1,
          phone_number: '+79290314353',
          status: 'Живая очередь',
          seating_time: '2025-04-08T16:30:00+10:00',
          end_time: '2025-04-08T17:30:00+10:00'
        },
        {
          id: 27044,
          name_for_reservation: 'Елена',
          num_people: 6,
          phone_number: '+79479873120',
          status: 'Закрыт',
          seating_time: '2025-04-08T12:00:00+10:00',
          end_time: '2025-04-08T15:00:00+10:00'
        }
      ]
    },
    {
      id: '23dec272-46be-4956-b7b5-3442ff7bf5c3',
      capacity: 12,
      number: '102',
      zone: '2 этаж',
      orders: [],
      reservations: [
        {
          id: 26881,
          name_for_reservation: 'Наталья',
          num_people: 1,
          phone_number: '+79242039724',
          status: 'Открыт',
          seating_time: '2025-04-08T20:00:00+10:00',
          end_time: '2025-04-08T23:00:00+10:00'
        }
      ]
    },
    {
      id: '1430e15b-39e3-4447-bc57-3abc69efa2ef',
      capacity: 12,
      number: '103',
      zone: '2 этаж',
      orders: [
        {
          id: '44f0a219-eafa-440c-8f95-0d2f51bb73ba',
          status: 'Banquet',
          start_time: '2025-04-08T14:20:00+10:00',
          end_time: '2025-04-08T16:20:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'f30783fc-a696-4fda-bf23-8d9f7f3f33c9',
      capacity: 2,
      number: '104',
      zone: '2 этаж',
      orders: [
        {
          id: '3d04b3ae-420c-430e-98bf-762815aaad49',
          status: 'Bill',
          start_time: '2025-04-08T22:50:00+10:00',
          end_time: '2025-04-09T00:50:00+10:00'
        },
        {
          id: 'b1a9db64-e6a5-4f18-8ff7-f152d3201a9a',
          status: 'Bill',
          start_time: '2025-04-08T21:40:00+10:00',
          end_time: '2025-04-09T00:40:00+10:00'
        },
        {
          id: '24ddc649-59c8-40e3-8dd7-869ed1309b0c',
          status: 'Banquet',
          start_time: '2025-04-08T14:30:00+10:00',
          end_time: '2025-04-08T15:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24212,
          name_for_reservation: 'Ирина',
          num_people: 3,
          phone_number: '+79957791494',
          status: 'Закрыт',
          seating_time: '2025-04-08T22:50:00+10:00',
          end_time: '2025-04-09T01:50:00+10:00'
        },
        {
          id: 27421,
          name_for_reservation: 'Лариса',
          num_people: 9,
          phone_number: '+79826419086',
          status: 'Заявка',
          seating_time: '2025-04-08T21:00:00+10:00',
          end_time: '2025-04-08T23:00:00+10:00'
        }
      ]
    },
    {
      id: 'dacac1ed-1a62-4dc5-bcad-6d8fabb4a0b8',
      capacity: 4,
      number: '105',
      zone: '2 этаж',
      orders: [
        {
          id: '5fe3257b-ca45-436e-9894-4243287981ed',
          status: 'New',
          start_time: '2025-04-08T17:40:00+10:00',
          end_time: '2025-04-08T20:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 29609,
          name_for_reservation: 'Наталья',
          num_people: 8,
          phone_number: '+79391433146',
          status: 'Живая очередь',
          seating_time: '2025-04-08T12:40:00+10:00',
          end_time: '2025-04-08T14:40:00+10:00'
        },
        {
          id: 28596,
          name_for_reservation: 'Татьяна',
          num_people: 10,
          phone_number: '+79543241665',
          status: 'Открыт',
          seating_time: '2025-04-08T19:50:00+10:00',
          end_time: '2025-04-08T22:50:00+10:00'
        }
      ]
    },
    {
      id: 'c2b127dc-a74c-46ae-a1d4-7d3d4cd9b6c6',
      capacity: 12,
      number: '106',
      zone: '2 этаж',
      orders: [
        {
          id: '887047be-f5ee-44b1-ad84-a8cec62f79d6',
          status: 'Closed',
          start_time: '2025-04-08T20:20:00+10:00',
          end_time: '2025-04-08T22:20:00+10:00'
        },
        {
          id: '978c5363-59c1-4278-aee5-3ce00c85a33b',
          status: 'Bill',
          start_time: '2025-04-08T13:30:00+10:00',
          end_time: '2025-04-08T15:30:00+10:00'
        },
        {
          id: '2463aae0-0efc-45ef-8f8b-5722e6b57f20',
          status: 'Bill',
          start_time: '2025-04-08T15:40:00+10:00',
          end_time: '2025-04-08T17:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22079,
          name_for_reservation: 'Ирина',
          num_people: 9,
          phone_number: '+79706238892',
          status: 'Заявка',
          seating_time: '2025-04-08T17:50:00+10:00',
          end_time: '2025-04-08T18:50:00+10:00'
        },
        {
          id: 20835,
          name_for_reservation: 'Ирина',
          num_people: 2,
          phone_number: '+79519799469',
          status: 'Новая',
          seating_time: '2025-04-08T22:50:00+10:00',
          end_time: '2025-04-09T01:50:00+10:00'
        },
        {
          id: 24368,
          name_for_reservation: 'Мария',
          num_people: 4,
          phone_number: '+79401652696',
          status: 'Заявка',
          seating_time: '2025-04-08T19:30:00+10:00',
          end_time: '2025-04-08T21:30:00+10:00'
        }
      ]
    },
    {
      id: '39d2071d-aaa9-4393-9441-1deff36598e2',
      capacity: 4,
      number: '107',
      zone: '2 этаж',
      orders: [
        {
          id: '05a9e5eb-71ef-40c0-8f1e-1ed98213e542',
          status: 'Bill',
          start_time: '2025-04-08T19:00:00+10:00',
          end_time: '2025-04-08T22:00:00+10:00'
        },
        {
          id: 'cacf3498-5855-402d-a26a-e087e4fa1744',
          status: 'Closed',
          start_time: '2025-04-08T12:20:00+10:00',
          end_time: '2025-04-08T15:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22621,
          name_for_reservation: 'Анна',
          num_people: 8,
          phone_number: '+79666925413',
          status: 'Живая очередь',
          seating_time: '2025-04-08T22:00:00+10:00',
          end_time: '2025-04-09T01:00:00+10:00'
        },
        {
          id: 27196,
          name_for_reservation: 'Мария',
          num_people: 9,
          phone_number: '+79896879385',
          status: 'Закрыт',
          seating_time: '2025-04-08T13:50:00+10:00',
          end_time: '2025-04-08T14:50:00+10:00'
        }
      ]
    },
    {
      id: 'd3e27073-3667-4631-a6c3-840de2ef1488',
      capacity: 6,
      number: '108',
      zone: '2 этаж',
      orders: [],
      reservations: [
        {
          id: 28842,
          name_for_reservation: 'Ольга',
          num_people: 6,
          phone_number: '+79331579890',
          status: 'Закрыт',
          seating_time: '2025-04-08T18:00:00+10:00',
          end_time: '2025-04-08T19:00:00+10:00'
        },
        {
          id: 29390,
          name_for_reservation: 'Мария',
          num_people: 4,
          phone_number: '+79996539035',
          status: 'Закрыт',
          seating_time: '2025-04-08T18:00:00+10:00',
          end_time: '2025-04-08T20:00:00+10:00'
        },
        {
          id: 21855,
          name_for_reservation: 'Лариса',
          num_people: 8,
          phone_number: '+79450744348',
          status: 'Открыт',
          seating_time: '2025-04-08T17:00:00+10:00',
          end_time: '2025-04-08T19:00:00+10:00'
        },
        {
          id: 26628,
          name_for_reservation: 'Виктор',
          num_people: 3,
          phone_number: '+79503086930',
          status: 'Новая',
          seating_time: '2025-04-08T14:40:00+10:00',
          end_time: '2025-04-08T16:40:00+10:00'
        }
      ]
    },
    {
      id: '91115d77-42e4-44dd-9240-ae77d7ab2d98',
      capacity: 10,
      number: '109',
      zone: '2 этаж',
      orders: [
        {
          id: '0e357d1d-968a-4abb-8a58-fc96b56f4d6a',
          status: 'New',
          start_time: '2025-04-08T14:40:00+10:00',
          end_time: '2025-04-08T16:40:00+10:00'
        },
        {
          id: '413a9e30-0738-47b3-9606-5dfe323318a5',
          status: 'Closed',
          start_time: '2025-04-08T21:40:00+10:00',
          end_time: '2025-04-08T23:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 23695,
          name_for_reservation: 'Лариса',
          num_people: 8,
          phone_number: '+79794394312',
          status: 'Открыт',
          seating_time: '2025-04-08T12:40:00+10:00',
          end_time: '2025-04-08T15:40:00+10:00'
        },
        {
          id: 21859,
          name_for_reservation: 'Мария',
          num_people: 8,
          phone_number: '+79954194990',
          status: 'Новая',
          seating_time: '2025-04-08T11:10:00+10:00',
          end_time: '2025-04-08T13:10:00+10:00'
        },
        {
          id: 23036,
          name_for_reservation: 'Лариса',
          num_people: 5,
          phone_number: '+79430479704',
          status: 'Открыт',
          seating_time: '2025-04-08T20:20:00+10:00',
          end_time: '2025-04-08T22:20:00+10:00'
        }
      ]
    },
    {
      id: 'ad17f0aa-31b9-418f-a9a2-41ca49dbd93b',
      capacity: 4,
      number: '110',
      zone: '2 этаж',
      orders: [
        {
          id: 'f55d8bda-0b74-439d-8462-2ba3ed82e0d7',
          status: 'Closed',
          start_time: '2025-04-08T21:40:00+10:00',
          end_time: '2025-04-09T00:40:00+10:00'
        },
        {
          id: 'bbea82ae-d396-4317-addb-827313d08c9e',
          status: 'Bill',
          start_time: '2025-04-08T11:40:00+10:00',
          end_time: '2025-04-08T13:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25080,
          name_for_reservation: 'Алексей',
          num_people: 10,
          phone_number: '+79581748424',
          status: 'Живая очередь',
          seating_time: '2025-04-08T13:20:00+10:00',
          end_time: '2025-04-08T14:20:00+10:00'
        },
        {
          id: 25549,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79026209527',
          status: 'Новая',
          seating_time: '2025-04-08T22:50:00+10:00',
          end_time: '2025-04-09T00:50:00+10:00'
        },
        {
          id: 24634,
          name_for_reservation: 'Елена',
          num_people: 7,
          phone_number: '+79049772459',
          status: 'Закрыт',
          seating_time: '2025-04-08T17:50:00+10:00',
          end_time: '2025-04-08T19:50:00+10:00'
        },
        {
          id: 26743,
          name_for_reservation: 'Ольга',
          num_people: 6,
          phone_number: '+79632191212',
          status: 'Живая очередь',
          seating_time: '2025-04-08T15:20:00+10:00',
          end_time: '2025-04-08T16:20:00+10:00'
        }
      ]
    },
    {
      id: '6a9d6195-a5bc-467e-9af3-98bafebc9b52',
      capacity: 6,
      number: 'B1',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'cc1d8b44-37a8-46e6-94de-846d319f4ece',
          status: 'New',
          start_time: '2025-04-08T20:30:00+10:00',
          end_time: '2025-04-08T22:30:00+10:00'
        },
        {
          id: '9518511a-a798-448d-ba9e-999844cd4f33',
          status: 'Bill',
          start_time: '2025-04-08T21:40:00+10:00',
          end_time: '2025-04-09T00:40:00+10:00'
        },
        {
          id: '72c3d3aa-12ae-4034-a3f2-55eff55ae90b',
          status: 'Closed',
          start_time: '2025-04-08T21:50:00+10:00',
          end_time: '2025-04-08T22:50:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '94bddaf2-5334-45fb-8abc-241f3d5041ce',
      capacity: 4,
      number: 'B2',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'c2c3d775-8fc4-4690-93a4-ebf94d4fffa9',
          status: 'New',
          start_time: '2025-04-08T16:40:00+10:00',
          end_time: '2025-04-08T19:40:00+10:00'
        },
        {
          id: 'a0d75b1c-8783-4c87-bf34-99221a2df1bf',
          status: 'Closed',
          start_time: '2025-04-08T19:20:00+10:00',
          end_time: '2025-04-08T21:20:00+10:00'
        },
        {
          id: '3c104689-7a3e-4f7f-8b0d-852947fbb9b1',
          status: 'New',
          start_time: '2025-04-08T20:40:00+10:00',
          end_time: '2025-04-08T21:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28472,
          name_for_reservation: 'Павел',
          num_people: 2,
          phone_number: '+79359303495',
          status: 'Новая',
          seating_time: '2025-04-08T19:20:00+10:00',
          end_time: '2025-04-08T20:20:00+10:00'
        },
        {
          id: 28321,
          name_for_reservation: 'Мария',
          num_people: 9,
          phone_number: '+79578789023',
          status: 'Заявка',
          seating_time: '2025-04-08T14:40:00+10:00',
          end_time: '2025-04-08T15:40:00+10:00'
        },
        {
          id: 25285,
          name_for_reservation: 'Сергей',
          num_people: 3,
          phone_number: '+79489279279',
          status: 'Новая',
          seating_time: '2025-04-08T13:30:00+10:00',
          end_time: '2025-04-08T14:30:00+10:00'
        },
        {
          id: 20159,
          name_for_reservation: 'Дмитрий',
          num_people: 8,
          phone_number: '+79888997578',
          status: 'Живая очередь',
          seating_time: '2025-04-08T15:50:00+10:00',
          end_time: '2025-04-08T17:50:00+10:00'
        }
      ]
    },
    {
      id: '255d354f-e999-44fa-b32d-10809496a7c1',
      capacity: 2,
      number: 'B3',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 28708,
          name_for_reservation: 'Лариса',
          num_people: 9,
          phone_number: '+79962671365',
          status: 'Новая',
          seating_time: '2025-04-08T22:10:00+10:00',
          end_time: '2025-04-09T00:10:00+10:00'
        },
        {
          id: 29032,
          name_for_reservation: 'Виктор',
          num_people: 10,
          phone_number: '+79877864302',
          status: 'Открыт',
          seating_time: '2025-04-08T16:10:00+10:00',
          end_time: '2025-04-08T18:10:00+10:00'
        },
        {
          id: 29249,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79300389726',
          status: 'Новая',
          seating_time: '2025-04-08T22:30:00+10:00',
          end_time: '2025-04-09T00:30:00+10:00'
        }
      ]
    },
    {
      id: 'd00741f3-2f83-40f4-9ef9-f1db3fa44de3',
      capacity: 8,
      number: 'B4',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '71bea4b2-b5b1-4627-9516-49a1135837e3',
          status: 'Bill',
          start_time: '2025-04-08T15:40:00+10:00',
          end_time: '2025-04-08T18:40:00+10:00'
        },
        {
          id: 'b4acb69a-b5b4-439f-8bf9-673f0551b38d',
          status: 'Banquet',
          start_time: '2025-04-08T17:30:00+10:00',
          end_time: '2025-04-08T20:30:00+10:00'
        },
        {
          id: 'a0868339-af49-4cb8-acdd-5ccc259633ad',
          status: 'Banquet',
          start_time: '2025-04-08T11:00:00+10:00',
          end_time: '2025-04-08T13:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25200,
          name_for_reservation: 'Лариса',
          num_people: 5,
          phone_number: '+79255395569',
          status: 'Заявка',
          seating_time: '2025-04-08T19:50:00+10:00',
          end_time: '2025-04-08T22:50:00+10:00'
        },
        {
          id: 25738,
          name_for_reservation: 'Алексей',
          num_people: 2,
          phone_number: '+79781477532',
          status: 'Закрыт',
          seating_time: '2025-04-08T18:40:00+10:00',
          end_time: '2025-04-08T21:40:00+10:00'
        }
      ]
    },
    {
      id: '69b29745-17de-43c9-a7aa-43b3cdfff9a4',
      capacity: 6,
      number: 'B5',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'a2301f81-4c0e-440f-a797-2c01b8394bd5',
          status: 'New',
          start_time: '2025-04-08T17:00:00+10:00',
          end_time: '2025-04-08T20:00:00+10:00'
        },
        {
          id: 'e8f9a1d2-8fc1-4998-868a-915695fb851e',
          status: 'New',
          start_time: '2025-04-08T18:30:00+10:00',
          end_time: '2025-04-08T20:30:00+10:00'
        },
        {
          id: 'e2534cdc-c1eb-4dbe-9bbe-07eea425a468',
          status: 'Bill',
          start_time: '2025-04-08T13:30:00+10:00',
          end_time: '2025-04-08T14:30:00+10:00'
        },
        {
          id: '236a42b3-9dc7-4946-ba80-35c2b9ee2263',
          status: 'Closed',
          start_time: '2025-04-08T16:30:00+10:00',
          end_time: '2025-04-08T19:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22258,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79707657010',
          status: 'Новая',
          seating_time: '2025-04-08T16:00:00+10:00',
          end_time: '2025-04-08T19:00:00+10:00'
        },
        {
          id: 28949,
          name_for_reservation: 'Татьяна',
          num_people: 6,
          phone_number: '+79848180775',
          status: 'Живая очередь',
          seating_time: '2025-04-08T21:30:00+10:00',
          end_time: '2025-04-09T00:30:00+10:00'
        }
      ]
    },
    {
      id: '805c2256-7087-4a17-9784-cf759c50ef8b',
      capacity: 10,
      number: 'B6',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '14d2215a-9b9b-4a15-aea8-048d23d3061a',
          status: 'Closed',
          start_time: '2025-04-08T17:50:00+10:00',
          end_time: '2025-04-08T20:50:00+10:00'
        },
        {
          id: 'ba9dcd3b-e280-4885-9154-41bfda7a0602',
          status: 'Bill',
          start_time: '2025-04-08T22:40:00+10:00',
          end_time: '2025-04-08T23:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24709,
          name_for_reservation: 'Елена',
          num_people: 5,
          phone_number: '+79003617749',
          status: 'Заявка',
          seating_time: '2025-04-08T18:50:00+10:00',
          end_time: '2025-04-08T19:50:00+10:00'
        },
        {
          id: 23236,
          name_for_reservation: 'Татьяна',
          num_people: 10,
          phone_number: '+79635847501',
          status: 'Новая',
          seating_time: '2025-04-08T22:50:00+10:00',
          end_time: '2025-04-09T01:50:00+10:00'
        }
      ]
    },
    {
      id: 'ba4d342f-8ca4-470d-a5f2-0a4221a0ab87',
      capacity: 8,
      number: 'B7',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '1c2e6bd7-f2ac-4629-877c-37c324279123',
          status: 'Closed',
          start_time: '2025-04-08T18:50:00+10:00',
          end_time: '2025-04-08T19:50:00+10:00'
        },
        {
          id: '326ecba5-0f70-4c16-9ed3-767a877cdb30',
          status: 'Bill',
          start_time: '2025-04-08T21:30:00+10:00',
          end_time: '2025-04-09T00:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 29564,
          name_for_reservation: 'Алексей',
          num_people: 4,
          phone_number: '+79571653165',
          status: 'Новая',
          seating_time: '2025-04-08T15:00:00+10:00',
          end_time: '2025-04-08T18:00:00+10:00'
        },
        {
          id: 28084,
          name_for_reservation: 'Валентина',
          num_people: 9,
          phone_number: '+79791415608',
          status: 'Открыт',
          seating_time: '2025-04-08T12:10:00+10:00',
          end_time: '2025-04-08T14:10:00+10:00'
        }
      ]
    },
    {
      id: '67b5b0ff-c37e-4b74-bcd3-a14e19b65127',
      capacity: 4,
      number: 'B8',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '4f4d2610-b7be-4427-ab0e-034255baed17',
          status: 'Bill',
          start_time: '2025-04-08T12:50:00+10:00',
          end_time: '2025-04-08T15:50:00+10:00'
        },
        {
          id: '34b7744b-7592-4661-9c17-6304fb472f6f',
          status: 'Bill',
          start_time: '2025-04-08T17:30:00+10:00',
          end_time: '2025-04-08T18:30:00+10:00'
        },
        {
          id: '98919e4c-836c-4087-aace-7cd25faba529',
          status: 'New',
          start_time: '2025-04-08T20:00:00+10:00',
          end_time: '2025-04-08T23:00:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'ce8703f3-7aa6-4bd9-8f4e-966980bd2ab4',
      capacity: 8,
      number: 'B9',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '40087fcc-43af-44fa-9e5b-2b3874760383',
          status: 'New',
          start_time: '2025-04-08T16:30:00+10:00',
          end_time: '2025-04-08T18:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27830,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79070498835',
          status: 'Открыт',
          seating_time: '2025-04-08T20:00:00+10:00',
          end_time: '2025-04-08T21:00:00+10:00'
        },
        {
          id: 20834,
          name_for_reservation: 'Лариса',
          num_people: 10,
          phone_number: '+79145679812',
          status: 'Заявка',
          seating_time: '2025-04-08T19:10:00+10:00',
          end_time: '2025-04-08T22:10:00+10:00'
        }
      ]
    },
    {
      id: '0f98d023-aa0c-4f0b-ba31-78b2f10dca0e',
      capacity: 10,
      number: 'B10',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'a67a901a-9027-4ecb-bcee-e471014b5d2e',
          status: 'New',
          start_time: '2025-04-08T20:10:00+10:00',
          end_time: '2025-04-08T23:10:00+10:00'
        },
        {
          id: '8a9a8bde-49a8-4a5c-b641-f02147f83cda',
          status: 'Closed',
          start_time: '2025-04-08T21:10:00+10:00',
          end_time: '2025-04-08T22:10:00+10:00'
        },
        {
          id: '7b25e897-1345-4d0d-84bd-196a23bde1bc',
          status: 'Closed',
          start_time: '2025-04-08T14:00:00+10:00',
          end_time: '2025-04-08T16:00:00+10:00'
        },
        {
          id: '0a5bf6be-1976-40fd-bb49-55fe70924a73',
          status: 'Banquet',
          start_time: '2025-04-08T14:30:00+10:00',
          end_time: '2025-04-08T16:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25702,
          name_for_reservation: 'Светлана',
          num_people: 5,
          phone_number: '+79860396826',
          status: 'Новая',
          seating_time: '2025-04-08T14:10:00+10:00',
          end_time: '2025-04-08T16:10:00+10:00'
        },
        {
          id: 26360,
          name_for_reservation: 'Ирина',
          num_people: 5,
          phone_number: '+79686231578',
          status: 'Живая очередь',
          seating_time: '2025-04-08T15:40:00+10:00',
          end_time: '2025-04-08T17:40:00+10:00'
        },
        {
          id: 21129,
          name_for_reservation: 'Сергей',
          num_people: 2,
          phone_number: '+79030576718',
          status: 'Новая',
          seating_time: '2025-04-08T19:40:00+10:00',
          end_time: '2025-04-08T22:40:00+10:00'
        }
      ]
    },
    {
      id: 'c0eda9e0-fc2b-4336-a5f1-36244cd113ff',
      capacity: 12,
      number: 'B11',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'cccc663f-66bd-49e6-8d9d-b052c8a34f8e',
          status: 'Closed',
          start_time: '2025-04-08T20:00:00+10:00',
          end_time: '2025-04-08T22:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25763,
          name_for_reservation: 'Анна',
          num_people: 6,
          phone_number: '+79636724069',
          status: 'Закрыт',
          seating_time: '2025-04-08T17:20:00+10:00',
          end_time: '2025-04-08T18:20:00+10:00'
        },
        {
          id: 21985,
          name_for_reservation: 'Наталья',
          num_people: 5,
          phone_number: '+79248174769',
          status: 'Новая',
          seating_time: '2025-04-08T18:20:00+10:00',
          end_time: '2025-04-08T19:20:00+10:00'
        },
        {
          id: 27700,
          name_for_reservation: 'Павел',
          num_people: 3,
          phone_number: '+79563242010',
          status: 'Заявка',
          seating_time: '2025-04-08T17:00:00+10:00',
          end_time: '2025-04-08T20:00:00+10:00'
        },
        {
          id: 27628,
          name_for_reservation: 'Сергей',
          num_people: 8,
          phone_number: '+79580996135',
          status: 'Новая',
          seating_time: '2025-04-08T16:00:00+10:00',
          end_time: '2025-04-08T17:00:00+10:00'
        }
      ]
    },
    {
      id: '88eaa9e7-d5fc-48f6-8f63-0af2ab85ff66',
      capacity: 10,
      number: 'B12',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 25705,
          name_for_reservation: 'Светлана',
          num_people: 5,
          phone_number: '+79979130312',
          status: 'Закрыт',
          seating_time: '2025-04-08T20:00:00+10:00',
          end_time: '2025-04-08T23:00:00+10:00'
        },
        {
          id: 23903,
          name_for_reservation: 'Сергей',
          num_people: 8,
          phone_number: '+79047747976',
          status: 'Новая',
          seating_time: '2025-04-08T13:50:00+10:00',
          end_time: '2025-04-08T14:50:00+10:00'
        },
        {
          id: 27888,
          name_for_reservation: 'Алексей',
          num_people: 7,
          phone_number: '+79166990110',
          status: 'Закрыт',
          seating_time: '2025-04-08T19:50:00+10:00',
          end_time: '2025-04-08T22:50:00+10:00'
        },
        {
          id: 28201,
          name_for_reservation: 'Ирина',
          num_people: 1,
          phone_number: '+79673048794',
          status: 'Открыт',
          seating_time: '2025-04-08T15:50:00+10:00',
          end_time: '2025-04-08T18:50:00+10:00'
        }
      ]
    },
    {
      id: '2a2e3d91-ca38-4372-9ff9-dc7bff6a9cd0',
      capacity: 4,
      number: 'B13',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '2ac2b287-ea3f-45cd-b7ac-2c27c0aacbb6',
          status: 'Closed',
          start_time: '2025-04-08T13:40:00+10:00',
          end_time: '2025-04-08T16:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22406,
          name_for_reservation: 'Наталья',
          num_people: 2,
          phone_number: '+79534307686',
          status: 'Закрыт',
          seating_time: '2025-04-08T11:50:00+10:00',
          end_time: '2025-04-08T13:50:00+10:00'
        },
        {
          id: 27142,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79089741609',
          status: 'Заявка',
          seating_time: '2025-04-08T15:20:00+10:00',
          end_time: '2025-04-08T18:20:00+10:00'
        },
        {
          id: 20548,
          name_for_reservation: 'Ольга',
          num_people: 1,
          phone_number: '+79180194532',
          status: 'Заявка',
          seating_time: '2025-04-08T18:40:00+10:00',
          end_time: '2025-04-08T20:40:00+10:00'
        }
      ]
    },
    {
      id: '89f46d3a-3fcb-46fe-9a47-4fca9351f2ac',
      capacity: 10,
      number: 'B14',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'c63043d1-afe0-4e37-8bd6-0f14198f8fc6',
          status: 'Closed',
          start_time: '2025-04-08T14:40:00+10:00',
          end_time: '2025-04-08T15:40:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'a273c394-b15b-4aa5-9d72-c11842937091',
      capacity: 10,
      number: 'B15',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'c2ad469c-6c3f-4f8c-ae71-77dc394398a3',
          status: 'New',
          start_time: '2025-04-08T21:50:00+10:00',
          end_time: '2025-04-08T23:50:00+10:00'
        },
        {
          id: '4843a121-648d-4c3c-92c0-12f25074f52a',
          status: 'Bill',
          start_time: '2025-04-08T11:00:00+10:00',
          end_time: '2025-04-08T14:00:00+10:00'
        },
        {
          id: '43aa2b42-8e60-4897-bc24-c0e5b9729e40',
          status: 'Banquet',
          start_time: '2025-04-08T22:40:00+10:00',
          end_time: '2025-04-08T23:40:00+10:00'
        },
        {
          id: 'f20c158b-6f1d-4862-af0d-19b051c0470c',
          status: 'Closed',
          start_time: '2025-04-08T14:40:00+10:00',
          end_time: '2025-04-08T15:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 21413,
          name_for_reservation: 'Ольга',
          num_people: 8,
          phone_number: '+79663195251',
          status: 'Живая очередь',
          seating_time: '2025-04-08T15:40:00+10:00',
          end_time: '2025-04-08T17:40:00+10:00'
        },
        {
          id: 23008,
          name_for_reservation: 'Павел',
          num_people: 4,
          phone_number: '+79416429637',
          status: 'Заявка',
          seating_time: '2025-04-08T22:20:00+10:00',
          end_time: '2025-04-09T01:20:00+10:00'
        }
      ]
    },
    {
      id: 'b457550f-41b8-4899-804a-5978d1ee195c',
      capacity: 10,
      number: 'B16',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 27412,
          name_for_reservation: 'Светлана',
          num_people: 10,
          phone_number: '+79845492050',
          status: 'Заявка',
          seating_time: '2025-04-08T15:40:00+10:00',
          end_time: '2025-04-08T18:40:00+10:00'
        },
        {
          id: 21483,
          name_for_reservation: 'Алексей',
          num_people: 8,
          phone_number: '+79768584953',
          status: 'Новая',
          seating_time: '2025-04-08T21:40:00+10:00',
          end_time: '2025-04-08T23:40:00+10:00'
        },
        {
          id: 22290,
          name_for_reservation: 'Валентина',
          num_people: 1,
          phone_number: '+79697819690',
          status: 'Живая очередь',
          seating_time: '2025-04-08T19:40:00+10:00',
          end_time: '2025-04-08T20:40:00+10:00'
        },
        {
          id: 28791,
          name_for_reservation: 'Лариса',
          num_people: 2,
          phone_number: '+79237693672',
          status: 'Открыт',
          seating_time: '2025-04-08T15:30:00+10:00',
          end_time: '2025-04-08T16:30:00+10:00'
        }
      ]
    },
    {
      id: '52abc2fb-446c-4363-8e9e-1f80e309c398',
      capacity: 10,
      number: 'B17',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '12eefecc-1dde-4c28-a316-b4994a178377',
          status: 'Bill',
          start_time: '2025-04-08T13:30:00+10:00',
          end_time: '2025-04-08T14:30:00+10:00'
        },
        {
          id: 'f8e8843d-6ba0-4737-83df-0658e95732cb',
          status: 'Closed',
          start_time: '2025-04-08T18:40:00+10:00',
          end_time: '2025-04-08T21:40:00+10:00'
        },
        {
          id: '9a2f9bb5-e79e-4a04-9b8d-245121fb2cac',
          status: 'Banquet',
          start_time: '2025-04-08T14:10:00+10:00',
          end_time: '2025-04-08T15:10:00+10:00'
        },
        {
          id: 'b7e248f7-a0dd-4872-877b-411282867824',
          status: 'Banquet',
          start_time: '2025-04-08T17:10:00+10:00',
          end_time: '2025-04-08T19:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 23135,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79072635829',
          status: 'Живая очередь',
          seating_time: '2025-04-08T21:50:00+10:00',
          end_time: '2025-04-08T23:50:00+10:00'
        },
        {
          id: 28574,
          name_for_reservation: 'Анна',
          num_people: 4,
          phone_number: '+79663792236',
          status: 'Открыт',
          seating_time: '2025-04-08T13:20:00+10:00',
          end_time: '2025-04-08T16:20:00+10:00'
        }
      ]
    },
    {
      id: 'aef7ef8b-76d7-4357-9d28-fb0fe79f22d8',
      capacity: 10,
      number: 'B18',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '21093ae2-2432-4ec8-b635-85d613308b86',
          status: 'Banquet',
          start_time: '2025-04-08T18:10:00+10:00',
          end_time: '2025-04-08T19:10:00+10:00'
        },
        {
          id: 'f6eb4723-c319-4979-85fa-a560aee24be6',
          status: 'Closed',
          start_time: '2025-04-08T14:40:00+10:00',
          end_time: '2025-04-08T17:40:00+10:00'
        },
        {
          id: '68e86ea2-55b8-443b-aeb6-d8a225c13676',
          status: 'New',
          start_time: '2025-04-08T12:50:00+10:00',
          end_time: '2025-04-08T13:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28995,
          name_for_reservation: 'Наталья',
          num_people: 2,
          phone_number: '+79522934906',
          status: 'Заявка',
          seating_time: '2025-04-08T12:20:00+10:00',
          end_time: '2025-04-08T13:20:00+10:00'
        },
        {
          id: 28796,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79397644268',
          status: 'Новая',
          seating_time: '2025-04-08T13:00:00+10:00',
          end_time: '2025-04-08T15:00:00+10:00'
        }
      ]
    }
  ]
}
