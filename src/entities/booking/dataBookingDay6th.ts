import { BookingData } from './type'

export const BookingDay6thOfApril: BookingData = {
  available_days: [
    '2025-04-04',
    '2025-04-05',
    '2025-04-06',
    '2025-04-07',
    '2025-04-08'
  ],
  current_day: '2025-04-06',
  restaurant: {
    id: 11100,
    timezone: 'Asia/Vladivostok',
    restaurant_name: 'Супра',
    opening_time: '11:00',
    closing_time: '23:40'
  },
  tables: [
    {
      id: '90268f24-1d96-4b15-b4aa-6df7b5e7be90',
      capacity: 8,
      number: '1',
      zone: '1 этаж',
      orders: [
        {
          id: '7083f76d-abe7-47f8-857b-c65856d3bd5b',
          status: 'Closed',
          start_time: '2025-04-06T16:00:00+10:00',
          end_time: '2025-04-06T18:00:00+10:00'
        },
        {
          id: '1a782390-4c53-4ed1-a34b-c31ed8e4702c',
          status: 'Bill',
          start_time: '2025-04-06T13:50:00+10:00',
          end_time: '2025-04-06T14:50:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'c7808eac-8983-4d6c-9358-8fbf6b263075',
      capacity: 10,
      number: '2',
      zone: '1 этаж',
      orders: [
        {
          id: 'c15fc392-73bd-43bf-b215-30e62aae5fd8',
          status: 'Bill',
          start_time: '2025-04-06T21:50:00+10:00',
          end_time: '2025-04-07T00:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26217,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79302732287',
          status: 'Закрыт',
          seating_time: '2025-04-06T18:40:00+10:00',
          end_time: '2025-04-06T21:40:00+10:00'
        },
        {
          id: 27937,
          name_for_reservation: 'Елена',
          num_people: 4,
          phone_number: '+79683600366',
          status: 'Заявка',
          seating_time: '2025-04-06T18:20:00+10:00',
          end_time: '2025-04-06T20:20:00+10:00'
        },
        {
          id: 22895,
          name_for_reservation: 'Елена',
          num_people: 2,
          phone_number: '+79917729219',
          status: 'Живая очередь',
          seating_time: '2025-04-06T19:20:00+10:00',
          end_time: '2025-04-06T21:20:00+10:00'
        }
      ]
    },
    {
      id: '16c9fb69-0ed6-4590-b88a-d4d3ee03dc0e',
      capacity: 10,
      number: '3',
      zone: '1 этаж',
      orders: [],
      reservations: []
    },
    {
      id: 'f8c04d56-c995-4793-a6b4-3e6c257f4b11',
      capacity: 2,
      number: '4',
      zone: '1 этаж',
      orders: [
        {
          id: '3154cda9-7cef-4384-8a8d-8c6d4ed15ca9',
          status: 'Closed',
          start_time: '2025-04-06T17:00:00+10:00',
          end_time: '2025-04-06T20:00:00+10:00'
        },
        {
          id: '24c290c6-f3d6-4f75-a7b1-58765f6da50f',
          status: 'New',
          start_time: '2025-04-06T11:40:00+10:00',
          end_time: '2025-04-06T13:40:00+10:00'
        },
        {
          id: 'd8121e72-5159-4976-b319-43590e4128d6',
          status: 'Banquet',
          start_time: '2025-04-06T11:10:00+10:00',
          end_time: '2025-04-06T13:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24563,
          name_for_reservation: 'Наталья',
          num_people: 4,
          phone_number: '+79233314293',
          status: 'Открыт',
          seating_time: '2025-04-06T18:50:00+10:00',
          end_time: '2025-04-06T21:50:00+10:00'
        }
      ]
    },
    {
      id: 'ff6ae412-c287-4171-8aaa-87e280185ede',
      capacity: 8,
      number: '5',
      zone: '1 этаж',
      orders: [
        {
          id: '18d9b3f0-e39f-4f86-bfa3-e7b30d128502',
          status: 'Banquet',
          start_time: '2025-04-06T20:40:00+10:00',
          end_time: '2025-04-06T21:40:00+10:00'
        },
        {
          id: '26091611-8c43-48d3-91d9-49de6d5e049c',
          status: 'Banquet',
          start_time: '2025-04-06T14:20:00+10:00',
          end_time: '2025-04-06T15:20:00+10:00'
        },
        {
          id: '2b67db54-7433-4111-8e73-eef60f6797cb',
          status: 'Banquet',
          start_time: '2025-04-06T14:20:00+10:00',
          end_time: '2025-04-06T15:20:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '0229a673-ec9b-4720-bdae-de6f5be8cbd7',
      capacity: 12,
      number: '6',
      zone: '1 этаж',
      orders: [
        {
          id: '1d859629-b2de-4bb7-8bc3-d2c1ab56d368',
          status: 'Banquet',
          start_time: '2025-04-06T13:50:00+10:00',
          end_time: '2025-04-06T15:50:00+10:00'
        },
        {
          id: '0e5d66c3-4074-449a-9013-eb8f5ae2503a',
          status: 'Closed',
          start_time: '2025-04-06T18:50:00+10:00',
          end_time: '2025-04-06T21:50:00+10:00'
        },
        {
          id: '68b64055-865a-434b-aa86-542d29eae0b7',
          status: 'Closed',
          start_time: '2025-04-06T16:30:00+10:00',
          end_time: '2025-04-06T17:30:00+10:00'
        },
        {
          id: 'ed2a0d00-2de5-437a-a8a7-3b9a9388c48c',
          status: 'Banquet',
          start_time: '2025-04-06T21:30:00+10:00',
          end_time: '2025-04-06T23:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26622,
          name_for_reservation: 'Татьяна',
          num_people: 8,
          phone_number: '+79544065715',
          status: 'Заявка',
          seating_time: '2025-04-06T18:00:00+10:00',
          end_time: '2025-04-06T21:00:00+10:00'
        },
        {
          id: 23445,
          name_for_reservation: 'Ирина',
          num_people: 5,
          phone_number: '+79079834407',
          status: 'Новая',
          seating_time: '2025-04-06T16:20:00+10:00',
          end_time: '2025-04-06T17:20:00+10:00'
        },
        {
          id: 29113,
          name_for_reservation: 'Ирина',
          num_people: 2,
          phone_number: '+79423700191',
          status: 'Закрыт',
          seating_time: '2025-04-06T13:10:00+10:00',
          end_time: '2025-04-06T16:10:00+10:00'
        },
        {
          id: 22813,
          name_for_reservation: 'Лариса',
          num_people: 5,
          phone_number: '+79690201564',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:50:00+10:00',
          end_time: '2025-04-06T18:50:00+10:00'
        }
      ]
    },
    {
      id: '6f1dc65a-3585-478d-bedf-10f7e741f44e',
      capacity: 8,
      number: '7',
      zone: '1 этаж',
      orders: [
        {
          id: 'f308635a-c1ab-4d6e-b52b-4c8d94e3a7c3',
          status: 'Banquet',
          start_time: '2025-04-06T17:00:00+10:00',
          end_time: '2025-04-06T19:00:00+10:00'
        },
        {
          id: '83d2ed67-ea2c-4e5e-ad75-e170dfad5d96',
          status: 'New',
          start_time: '2025-04-06T21:00:00+10:00',
          end_time: '2025-04-06T23:00:00+10:00'
        },
        {
          id: '962c5130-8a95-48fd-8d1c-64456ae134dc',
          status: 'New',
          start_time: '2025-04-06T16:00:00+10:00',
          end_time: '2025-04-06T18:00:00+10:00'
        },
        {
          id: '2ac1c295-c2b9-4186-9d8b-c97ee6dac2b0',
          status: 'Bill',
          start_time: '2025-04-06T20:00:00+10:00',
          end_time: '2025-04-06T22:00:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '70942818-249a-4feb-9d2e-352339cdaa30',
      capacity: 6,
      number: '8',
      zone: '1 этаж',
      orders: [
        {
          id: '50fa2c47-8926-423c-ae0f-bd6d5c8f50c8',
          status: 'New',
          start_time: '2025-04-06T13:10:00+10:00',
          end_time: '2025-04-06T14:10:00+10:00'
        },
        {
          id: '955910a3-ebac-4007-ac1d-f9e1f8f971e7',
          status: 'New',
          start_time: '2025-04-06T11:00:00+10:00',
          end_time: '2025-04-06T12:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28483,
          name_for_reservation: 'Анна',
          num_people: 9,
          phone_number: '+79877919592',
          status: 'Живая очередь',
          seating_time: '2025-04-06T22:50:00+10:00',
          end_time: '2025-04-07T01:50:00+10:00'
        },
        {
          id: 20396,
          name_for_reservation: 'Татьяна',
          num_people: 1,
          phone_number: '+79611837468',
          status: 'Новая',
          seating_time: '2025-04-06T14:50:00+10:00',
          end_time: '2025-04-06T16:50:00+10:00'
        },
        {
          id: 27551,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79299398951',
          status: 'Закрыт',
          seating_time: '2025-04-06T11:20:00+10:00',
          end_time: '2025-04-06T12:20:00+10:00'
        }
      ]
    },
    {
      id: '66320fa4-a4c0-44b6-8836-41859f1181d6',
      capacity: 6,
      number: '9',
      zone: '1 этаж',
      orders: [
        {
          id: '18fe9d9a-2ead-43d8-8cb9-6f391038d4af',
          status: 'Bill',
          start_time: '2025-04-06T12:30:00+10:00',
          end_time: '2025-04-06T14:30:00+10:00'
        },
        {
          id: 'a032a642-ffb5-4f10-848d-95d03bd4e3fa',
          status: 'Closed',
          start_time: '2025-04-06T11:10:00+10:00',
          end_time: '2025-04-06T12:10:00+10:00'
        },
        {
          id: '3669ce1b-e74a-4a25-ada9-67a062a9e71a',
          status: 'Banquet',
          start_time: '2025-04-06T22:30:00+10:00',
          end_time: '2025-04-06T23:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27218,
          name_for_reservation: 'Светлана',
          num_people: 4,
          phone_number: '+79900714897',
          status: 'Живая очередь',
          seating_time: '2025-04-06T13:20:00+10:00',
          end_time: '2025-04-06T16:20:00+10:00'
        }
      ]
    },
    {
      id: '36034ddc-1196-49d4-8e5b-75886bc50c51',
      capacity: 4,
      number: '10',
      zone: '1 этаж',
      orders: [
        {
          id: '7e7eff2f-7cbf-4b32-8d1e-e0474540494b',
          status: 'New',
          start_time: '2025-04-06T14:30:00+10:00',
          end_time: '2025-04-06T17:30:00+10:00'
        },
        {
          id: '62b672d7-6719-4255-8598-7a189440710f',
          status: 'New',
          start_time: '2025-04-06T13:20:00+10:00',
          end_time: '2025-04-06T15:20:00+10:00'
        },
        {
          id: '4abe40d3-b249-4e96-b662-842acc199749',
          status: 'Bill',
          start_time: '2025-04-06T20:30:00+10:00',
          end_time: '2025-04-06T23:30:00+10:00'
        },
        {
          id: '42f76fc6-c36a-461d-bf02-cba82e61a28e',
          status: 'Banquet',
          start_time: '2025-04-06T18:10:00+10:00',
          end_time: '2025-04-06T20:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26333,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79653186904',
          status: 'Новая',
          seating_time: '2025-04-06T12:30:00+10:00',
          end_time: '2025-04-06T15:30:00+10:00'
        },
        {
          id: 25979,
          name_for_reservation: 'Ирина',
          num_people: 6,
          phone_number: '+79586133369',
          status: 'Открыт',
          seating_time: '2025-04-06T11:20:00+10:00',
          end_time: '2025-04-06T12:20:00+10:00'
        },
        {
          id: 29252,
          name_for_reservation: 'Лариса',
          num_people: 3,
          phone_number: '+79574676217',
          status: 'Новая',
          seating_time: '2025-04-06T18:40:00+10:00',
          end_time: '2025-04-06T20:40:00+10:00'
        },
        {
          id: 26210,
          name_for_reservation: 'Наталья',
          num_people: 8,
          phone_number: '+79288133092',
          status: 'Заявка',
          seating_time: '2025-04-06T22:50:00+10:00',
          end_time: '2025-04-06T23:50:00+10:00'
        }
      ]
    },
    {
      id: '38f4c592-c0f5-4377-912b-41bab3d567ba',
      capacity: 6,
      number: '11',
      zone: '1 этаж',
      orders: [
        {
          id: '1e389383-5acd-4a2e-bc1e-32876f011b6a',
          status: 'New',
          start_time: '2025-04-06T14:00:00+10:00',
          end_time: '2025-04-06T17:00:00+10:00'
        },
        {
          id: '685fa714-f237-4334-b1c8-06540b8e88b3',
          status: 'Bill',
          start_time: '2025-04-06T20:10:00+10:00',
          end_time: '2025-04-06T23:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28372,
          name_for_reservation: 'Сергей',
          num_people: 5,
          phone_number: '+79267625797',
          status: 'Живая очередь',
          seating_time: '2025-04-06T17:00:00+10:00',
          end_time: '2025-04-06T19:00:00+10:00'
        },
        {
          id: 28958,
          name_for_reservation: 'Алексей',
          num_people: 1,
          phone_number: '+79301874969',
          status: 'Новая',
          seating_time: '2025-04-06T19:40:00+10:00',
          end_time: '2025-04-06T21:40:00+10:00'
        },
        {
          id: 23598,
          name_for_reservation: 'Ирина',
          num_people: 9,
          phone_number: '+79079070599',
          status: 'Новая',
          seating_time: '2025-04-06T18:30:00+10:00',
          end_time: '2025-04-06T19:30:00+10:00'
        }
      ]
    },
    {
      id: '2479546c-6576-435c-b5ae-80d1242439a4',
      capacity: 10,
      number: '12',
      zone: '1 этаж',
      orders: [
        {
          id: '30bf0532-47a3-4d85-96d6-fa61235e6f04',
          status: 'Bill',
          start_time: '2025-04-06T20:50:00+10:00',
          end_time: '2025-04-06T23:50:00+10:00'
        },
        {
          id: 'd4594067-7bed-413a-8158-c2de020667e3',
          status: 'New',
          start_time: '2025-04-06T20:40:00+10:00',
          end_time: '2025-04-06T22:40:00+10:00'
        },
        {
          id: '9fa25969-8e63-46e1-a245-f2c58ac5d448',
          status: 'Banquet',
          start_time: '2025-04-06T12:30:00+10:00',
          end_time: '2025-04-06T13:30:00+10:00'
        },
        {
          id: '561740a6-0fee-44fc-87af-1f44f4228b8f',
          status: 'New',
          start_time: '2025-04-06T20:10:00+10:00',
          end_time: '2025-04-06T23:10:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'f9b61d15-48bf-4c81-84e4-8e47df516a42',
      capacity: 6,
      number: '13',
      zone: '1 этаж',
      orders: [
        {
          id: '1f8807a5-c3ca-4685-b156-924d3b2b1122',
          status: 'Closed',
          start_time: '2025-04-06T14:10:00+10:00',
          end_time: '2025-04-06T17:10:00+10:00'
        },
        {
          id: '77efe94e-ce00-4557-a2a0-8797480ca261',
          status: 'Bill',
          start_time: '2025-04-06T17:50:00+10:00',
          end_time: '2025-04-06T18:50:00+10:00'
        },
        {
          id: 'e421af98-76dd-4853-b5b4-9a0bdbb53f4f',
          status: 'Banquet',
          start_time: '2025-04-06T17:10:00+10:00',
          end_time: '2025-04-06T19:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27018,
          name_for_reservation: 'Татьяна',
          num_people: 3,
          phone_number: '+79605248982',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:20:00+10:00',
          end_time: '2025-04-06T19:20:00+10:00'
        },
        {
          id: 24320,
          name_for_reservation: 'Светлана',
          num_people: 6,
          phone_number: '+79026880610',
          status: 'Открыт',
          seating_time: '2025-04-06T13:40:00+10:00',
          end_time: '2025-04-06T14:40:00+10:00'
        }
      ]
    },
    {
      id: '03e28e3a-f106-49e0-ad76-cdf19041d1da',
      capacity: 2,
      number: '101',
      zone: '2 этаж',
      orders: [
        {
          id: '437ad272-9df5-4eda-8a7b-dc6ddb28a8d8',
          status: 'Bill',
          start_time: '2025-04-06T21:40:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        },
        {
          id: '14bb8554-92ae-40b4-9e60-b2962675b83a',
          status: 'Closed',
          start_time: '2025-04-06T16:00:00+10:00',
          end_time: '2025-04-06T17:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20232,
          name_for_reservation: 'Сергей',
          num_people: 3,
          phone_number: '+79312103385',
          status: 'Закрыт',
          seating_time: '2025-04-06T20:00:00+10:00',
          end_time: '2025-04-06T22:00:00+10:00'
        },
        {
          id: 20643,
          name_for_reservation: 'Татьяна',
          num_people: 4,
          phone_number: '+79312069600',
          status: 'Живая очередь',
          seating_time: '2025-04-06T21:30:00+10:00',
          end_time: '2025-04-06T22:30:00+10:00'
        }
      ]
    },
    {
      id: '8afaf8f4-81ed-46f8-bd7f-283f342e4090',
      capacity: 12,
      number: '102',
      zone: '2 этаж',
      orders: [],
      reservations: [
        {
          id: 24734,
          name_for_reservation: 'Татьяна',
          num_people: 1,
          phone_number: '+79762354731',
          status: 'Заявка',
          seating_time: '2025-04-06T20:20:00+10:00',
          end_time: '2025-04-06T21:20:00+10:00'
        },
        {
          id: 27062,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79190301389',
          status: 'Заявка',
          seating_time: '2025-04-06T17:40:00+10:00',
          end_time: '2025-04-06T20:40:00+10:00'
        },
        {
          id: 24414,
          name_for_reservation: 'Наталья',
          num_people: 1,
          phone_number: '+79340169828',
          status: 'Открыт',
          seating_time: '2025-04-06T16:40:00+10:00',
          end_time: '2025-04-06T17:40:00+10:00'
        },
        {
          id: 29931,
          name_for_reservation: 'Алексей',
          num_people: 1,
          phone_number: '+79250189059',
          status: 'Открыт',
          seating_time: '2025-04-06T13:40:00+10:00',
          end_time: '2025-04-06T16:40:00+10:00'
        }
      ]
    },
    {
      id: '56893509-0eb6-484d-bdce-979e907dd2e8',
      capacity: 12,
      number: '103',
      zone: '2 этаж',
      orders: [
        {
          id: '2c493a98-a344-4301-a78e-3a0838762d27',
          status: 'New',
          start_time: '2025-04-06T20:40:00+10:00',
          end_time: '2025-04-06T22:40:00+10:00'
        },
        {
          id: 'e6eec1b7-6db2-4bb6-94b3-9aa275b474c9',
          status: 'Closed',
          start_time: '2025-04-06T20:50:00+10:00',
          end_time: '2025-04-06T23:50:00+10:00'
        },
        {
          id: 'e92d78f2-9c12-43e7-9958-8d4c42a4fc5d',
          status: 'Banquet',
          start_time: '2025-04-06T21:30:00+10:00',
          end_time: '2025-04-07T00:30:00+10:00'
        },
        {
          id: 'a32aff1a-da82-4783-a97d-2ef89ca45a62',
          status: 'Banquet',
          start_time: '2025-04-06T21:10:00+10:00',
          end_time: '2025-04-06T22:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24112,
          name_for_reservation: 'Валентина',
          num_people: 2,
          phone_number: '+79294097795',
          status: 'Закрыт',
          seating_time: '2025-04-06T19:00:00+10:00',
          end_time: '2025-04-06T20:00:00+10:00'
        },
        {
          id: 28959,
          name_for_reservation: 'Мария',
          num_people: 3,
          phone_number: '+79659317348',
          status: 'Открыт',
          seating_time: '2025-04-06T15:30:00+10:00',
          end_time: '2025-04-06T16:30:00+10:00'
        },
        {
          id: 22607,
          name_for_reservation: 'Наталья',
          num_people: 4,
          phone_number: '+79584608472',
          status: 'Новая',
          seating_time: '2025-04-06T11:40:00+10:00',
          end_time: '2025-04-06T13:40:00+10:00'
        }
      ]
    },
    {
      id: '47504155-6d5f-4823-83d8-1e927ed27cf6',
      capacity: 2,
      number: '104',
      zone: '2 этаж',
      orders: [],
      reservations: [
        {
          id: 23933,
          name_for_reservation: 'Сергей',
          num_people: 3,
          phone_number: '+79480073242',
          status: 'Живая очередь',
          seating_time: '2025-04-06T11:20:00+10:00',
          end_time: '2025-04-06T14:20:00+10:00'
        },
        {
          id: 27681,
          name_for_reservation: 'Сергей',
          num_people: 7,
          phone_number: '+79713827080',
          status: 'Заявка',
          seating_time: '2025-04-06T20:00:00+10:00',
          end_time: '2025-04-06T22:00:00+10:00'
        },
        {
          id: 22218,
          name_for_reservation: 'Алексей',
          num_people: 9,
          phone_number: '+79029686820',
          status: 'Заявка',
          seating_time: '2025-04-06T20:50:00+10:00',
          end_time: '2025-04-06T23:50:00+10:00'
        }
      ]
    },
    {
      id: '3815d66c-40b0-454d-9417-5d5de9dc33ca',
      capacity: 4,
      number: '105',
      zone: '2 этаж',
      orders: [
        {
          id: '1e75fc83-b1e6-4f8c-926f-7f372e57c502',
          status: 'Closed',
          start_time: '2025-04-06T12:40:00+10:00',
          end_time: '2025-04-06T13:40:00+10:00'
        },
        {
          id: 'daaecc10-2377-4bf5-80c2-59d2d72f2d96',
          status: 'Banquet',
          start_time: '2025-04-06T17:20:00+10:00',
          end_time: '2025-04-06T19:20:00+10:00'
        },
        {
          id: '247f9d65-8bc3-474a-a136-01ab690be4b2',
          status: 'New',
          start_time: '2025-04-06T17:50:00+10:00',
          end_time: '2025-04-06T19:50:00+10:00'
        },
        {
          id: '52c2a35d-7f3b-4ca6-832c-963900f3aa08',
          status: 'Banquet',
          start_time: '2025-04-06T18:30:00+10:00',
          end_time: '2025-04-06T19:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24172,
          name_for_reservation: 'Ольга',
          num_people: 8,
          phone_number: '+79050815771',
          status: 'Заявка',
          seating_time: '2025-04-06T14:20:00+10:00',
          end_time: '2025-04-06T17:20:00+10:00'
        },
        {
          id: 23126,
          name_for_reservation: 'Сергей',
          num_people: 4,
          phone_number: '+79588699175',
          status: 'Открыт',
          seating_time: '2025-04-06T16:50:00+10:00',
          end_time: '2025-04-06T19:50:00+10:00'
        }
      ]
    },
    {
      id: 'a9a8b166-2c6d-4d83-bb78-4c6bbecb4f80',
      capacity: 12,
      number: '106',
      zone: '2 этаж',
      orders: [
        {
          id: '72348e20-6fa9-436f-a476-6d07da780373',
          status: 'Bill',
          start_time: '2025-04-06T21:00:00+10:00',
          end_time: '2025-04-07T00:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22288,
          name_for_reservation: 'Мария',
          num_people: 7,
          phone_number: '+79730299247',
          status: 'Закрыт',
          seating_time: '2025-04-06T11:30:00+10:00',
          end_time: '2025-04-06T13:30:00+10:00'
        },
        {
          id: 28470,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79786975406',
          status: 'Живая очередь',
          seating_time: '2025-04-06T19:00:00+10:00',
          end_time: '2025-04-06T22:00:00+10:00'
        },
        {
          id: 23951,
          name_for_reservation: 'Ольга',
          num_people: 5,
          phone_number: '+79312667938',
          status: 'Закрыт',
          seating_time: '2025-04-06T22:40:00+10:00',
          end_time: '2025-04-07T01:40:00+10:00'
        }
      ]
    },
    {
      id: '35951b97-452d-48af-a3f0-c7832845ee23',
      capacity: 4,
      number: '107',
      zone: '2 этаж',
      orders: [
        {
          id: 'f6c233f2-97b2-43b3-b2ab-a98b068c452d',
          status: 'Bill',
          start_time: '2025-04-06T19:30:00+10:00',
          end_time: '2025-04-06T22:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26690,
          name_for_reservation: 'Дмитрий',
          num_people: 10,
          phone_number: '+79220170262',
          status: 'Заявка',
          seating_time: '2025-04-06T14:10:00+10:00',
          end_time: '2025-04-06T15:10:00+10:00'
        }
      ]
    },
    {
      id: '9f979063-2429-4da0-9080-4469841c51ca',
      capacity: 6,
      number: '108',
      zone: '2 этаж',
      orders: [
        {
          id: '2fee770f-947f-4596-a330-2415730a2b2c',
          status: 'Bill',
          start_time: '2025-04-06T12:30:00+10:00',
          end_time: '2025-04-06T14:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27772,
          name_for_reservation: 'Сергей',
          num_people: 8,
          phone_number: '+79203769134',
          status: 'Заявка',
          seating_time: '2025-04-06T19:30:00+10:00',
          end_time: '2025-04-06T20:30:00+10:00'
        },
        {
          id: 22484,
          name_for_reservation: 'Павел',
          num_people: 1,
          phone_number: '+79973235155',
          status: 'Открыт',
          seating_time: '2025-04-06T21:40:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        }
      ]
    },
    {
      id: 'be9bddfa-2613-4aeb-b509-facf452c1908',
      capacity: 10,
      number: '109',
      zone: '2 этаж',
      orders: [
        {
          id: 'cdfccc09-3657-4ade-baf3-80713ecf942c',
          status: 'Bill',
          start_time: '2025-04-06T19:10:00+10:00',
          end_time: '2025-04-06T21:10:00+10:00'
        },
        {
          id: 'e5363f8b-e40b-4f06-b94f-c6f597e6ba40',
          status: 'Closed',
          start_time: '2025-04-06T20:10:00+10:00',
          end_time: '2025-04-06T23:10:00+10:00'
        },
        {
          id: '3b8cfa02-939b-4417-8969-6d1ebfd57b7f',
          status: 'Banquet',
          start_time: '2025-04-06T15:40:00+10:00',
          end_time: '2025-04-06T17:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20469,
          name_for_reservation: 'Ирина',
          num_people: 9,
          phone_number: '+79611960515',
          status: 'Открыт',
          seating_time: '2025-04-06T20:20:00+10:00',
          end_time: '2025-04-06T23:20:00+10:00'
        }
      ]
    },
    {
      id: '714eca8f-b617-4c00-be59-a63888436a7f',
      capacity: 4,
      number: '110',
      zone: '2 этаж',
      orders: [],
      reservations: [
        {
          id: 25547,
          name_for_reservation: 'Наталья',
          num_people: 9,
          phone_number: '+79478693764',
          status: 'Открыт',
          seating_time: '2025-04-06T20:10:00+10:00',
          end_time: '2025-04-06T21:10:00+10:00'
        },
        {
          id: 28672,
          name_for_reservation: 'Мария',
          num_people: 6,
          phone_number: '+79787770248',
          status: 'Новая',
          seating_time: '2025-04-06T18:30:00+10:00',
          end_time: '2025-04-06T20:30:00+10:00'
        }
      ]
    },
    {
      id: 'c7add6cd-0947-4580-a98e-cad37208d4be',
      capacity: 6,
      number: 'B1',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '119a917d-c199-4923-bdc7-e29373030da6',
          status: 'Closed',
          start_time: '2025-04-06T19:10:00+10:00',
          end_time: '2025-04-06T20:10:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '49237051-f868-4ce7-a941-036411e72a7f',
      capacity: 4,
      number: 'B2',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '832628bd-b29f-48b6-9d64-b96abfb6603d',
          status: 'New',
          start_time: '2025-04-06T14:00:00+10:00',
          end_time: '2025-04-06T16:00:00+10:00'
        },
        {
          id: 'ed18c20d-de8d-49ce-a60e-a9f037ba5c7f',
          status: 'New',
          start_time: '2025-04-06T19:40:00+10:00',
          end_time: '2025-04-06T21:40:00+10:00'
        },
        {
          id: '2c5323b1-acde-4c8b-8aa7-d364f14deaa5',
          status: 'New',
          start_time: '2025-04-06T19:20:00+10:00',
          end_time: '2025-04-06T21:20:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'e047d8ef-5e72-4c59-b83c-367ebe3977b9',
      capacity: 2,
      number: 'B3',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '611c00f9-a687-4993-ab18-3058f7338dc6',
          status: 'Closed',
          start_time: '2025-04-06T19:20:00+10:00',
          end_time: '2025-04-06T21:20:00+10:00'
        },
        {
          id: 'fe548055-76a2-4a29-9b7e-2b2301afdd47',
          status: 'Bill',
          start_time: '2025-04-06T16:40:00+10:00',
          end_time: '2025-04-06T18:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 21546,
          name_for_reservation: 'Дмитрий',
          num_people: 9,
          phone_number: '+79577517504',
          status: 'Заявка',
          seating_time: '2025-04-06T20:50:00+10:00',
          end_time: '2025-04-06T21:50:00+10:00'
        }
      ]
    },
    {
      id: '626d7c5f-ac02-4284-a8f9-685da31e9db7',
      capacity: 8,
      number: 'B4',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'bcee2a33-85fb-4380-969b-bcc9657920f7',
          status: 'Bill',
          start_time: '2025-04-06T21:20:00+10:00',
          end_time: '2025-04-06T23:20:00+10:00'
        },
        {
          id: '693c54aa-c7f1-496b-9765-324f614f19ea',
          status: 'New',
          start_time: '2025-04-06T17:40:00+10:00',
          end_time: '2025-04-06T20:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28205,
          name_for_reservation: 'Елена',
          num_people: 4,
          phone_number: '+79233079081',
          status: 'Новая',
          seating_time: '2025-04-06T22:20:00+10:00',
          end_time: '2025-04-07T01:20:00+10:00'
        },
        {
          id: 20268,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79180345910',
          status: 'Заявка',
          seating_time: '2025-04-06T11:30:00+10:00',
          end_time: '2025-04-06T13:30:00+10:00'
        },
        {
          id: 25303,
          name_for_reservation: 'Дмитрий',
          num_people: 9,
          phone_number: '+79631657168',
          status: 'Заявка',
          seating_time: '2025-04-06T18:00:00+10:00',
          end_time: '2025-04-06T21:00:00+10:00'
        },
        {
          id: 22516,
          name_for_reservation: 'Мария',
          num_people: 6,
          phone_number: '+79409811686',
          status: 'Живая очередь',
          seating_time: '2025-04-06T21:30:00+10:00',
          end_time: '2025-04-06T23:30:00+10:00'
        }
      ]
    },
    {
      id: 'f85f6192-23fd-4e6c-89a1-17fd4e8ede12',
      capacity: 6,
      number: 'B5',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'f7a26810-18c5-43f7-96ec-6e7b59569de7',
          status: 'Banquet',
          start_time: '2025-04-06T15:30:00+10:00',
          end_time: '2025-04-06T16:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27046,
          name_for_reservation: 'Алексей',
          num_people: 2,
          phone_number: '+79310533231',
          status: 'Новая',
          seating_time: '2025-04-06T20:20:00+10:00',
          end_time: '2025-04-06T21:20:00+10:00'
        },
        {
          id: 23569,
          name_for_reservation: 'Сергей',
          num_people: 8,
          phone_number: '+79042598406',
          status: 'Закрыт',
          seating_time: '2025-04-06T20:30:00+10:00',
          end_time: '2025-04-06T21:30:00+10:00'
        },
        {
          id: 23649,
          name_for_reservation: 'Валентина',
          num_people: 6,
          phone_number: '+79336864442',
          status: 'Новая',
          seating_time: '2025-04-06T16:30:00+10:00',
          end_time: '2025-04-06T18:30:00+10:00'
        }
      ]
    },
    {
      id: 'e3f5deb0-36b7-43fb-9bf9-d63ca23b95ed',
      capacity: 10,
      number: 'B6',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 29276,
          name_for_reservation: 'Мария',
          num_people: 10,
          phone_number: '+79618559903',
          status: 'Новая',
          seating_time: '2025-04-06T18:00:00+10:00',
          end_time: '2025-04-06T21:00:00+10:00'
        },
        {
          id: 26012,
          name_for_reservation: 'Светлана',
          num_people: 8,
          phone_number: '+79885996272',
          status: 'Новая',
          seating_time: '2025-04-06T17:40:00+10:00',
          end_time: '2025-04-06T20:40:00+10:00'
        },
        {
          id: 28249,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79981842378',
          status: 'Закрыт',
          seating_time: '2025-04-06T21:10:00+10:00',
          end_time: '2025-04-06T22:10:00+10:00'
        },
        {
          id: 27490,
          name_for_reservation: 'Сергей',
          num_people: 10,
          phone_number: '+79639428157',
          status: 'Открыт',
          seating_time: '2025-04-06T16:50:00+10:00',
          end_time: '2025-04-06T17:50:00+10:00'
        }
      ]
    },
    {
      id: '00ec576a-cca4-444a-9228-e661385b4823',
      capacity: 8,
      number: 'B7',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 28098,
          name_for_reservation: 'Виктор',
          num_people: 3,
          phone_number: '+79659147011',
          status: 'Закрыт',
          seating_time: '2025-04-06T20:50:00+10:00',
          end_time: '2025-04-06T22:50:00+10:00'
        }
      ]
    },
    {
      id: '6efde0f6-5996-42ed-8a70-9a6fbeb7b7ea',
      capacity: 4,
      number: 'B8',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 27328,
          name_for_reservation: 'Наталья',
          num_people: 2,
          phone_number: '+79915859706',
          status: 'Заявка',
          seating_time: '2025-04-06T22:40:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        },
        {
          id: 24157,
          name_for_reservation: 'Анна',
          num_people: 3,
          phone_number: '+79632549964',
          status: 'Живая очередь',
          seating_time: '2025-04-06T19:30:00+10:00',
          end_time: '2025-04-06T22:30:00+10:00'
        },
        {
          id: 25631,
          name_for_reservation: 'Анна',
          num_people: 7,
          phone_number: '+79359333597',
          status: 'Новая',
          seating_time: '2025-04-06T15:00:00+10:00',
          end_time: '2025-04-06T17:00:00+10:00'
        }
      ]
    },
    {
      id: 'd6b405d2-f396-463a-b128-3f9cc58451a6',
      capacity: 8,
      number: 'B9',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 21236,
          name_for_reservation: 'Ольга',
          num_people: 1,
          phone_number: '+79035371257',
          status: 'Живая очередь',
          seating_time: '2025-04-06T20:40:00+10:00',
          end_time: '2025-04-06T21:40:00+10:00'
        },
        {
          id: 22542,
          name_for_reservation: 'Павел',
          num_people: 8,
          phone_number: '+79867742725',
          status: 'Закрыт',
          seating_time: '2025-04-06T19:20:00+10:00',
          end_time: '2025-04-06T20:20:00+10:00'
        }
      ]
    },
    {
      id: '96361f9d-29b7-444d-8c64-3429b290e354',
      capacity: 10,
      number: 'B10',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'aa2c9b5d-195d-4650-9a60-1d9027a13f6f',
          status: 'Banquet',
          start_time: '2025-04-06T17:20:00+10:00',
          end_time: '2025-04-06T19:20:00+10:00'
        },
        {
          id: '815727b8-5011-48b0-b9de-4867c71b1d7a',
          status: 'Bill',
          start_time: '2025-04-06T11:00:00+10:00',
          end_time: '2025-04-06T14:00:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'a4e3207d-a32e-454b-b99d-1b85802eece8',
      capacity: 12,
      number: 'B11',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'a4c65c07-d05a-4281-b00b-796bf8302c6f',
          status: 'Bill',
          start_time: '2025-04-06T19:10:00+10:00',
          end_time: '2025-04-06T21:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26310,
          name_for_reservation: 'Ирина',
          num_people: 7,
          phone_number: '+79492092693',
          status: 'Живая очередь',
          seating_time: '2025-04-06T18:30:00+10:00',
          end_time: '2025-04-06T19:30:00+10:00'
        }
      ]
    },
    {
      id: '77b8a071-19be-489d-9d68-bf971aa3e5eb',
      capacity: 10,
      number: 'B12',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'fd1683f7-6076-4c02-a138-a20959c1c015',
          status: 'New',
          start_time: '2025-04-06T14:10:00+10:00',
          end_time: '2025-04-06T15:10:00+10:00'
        },
        {
          id: 'c83c81fb-6e9e-4bc9-807c-7bd7f1112390',
          status: 'Bill',
          start_time: '2025-04-06T15:40:00+10:00',
          end_time: '2025-04-06T18:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22273,
          name_for_reservation: 'Елена',
          num_people: 5,
          phone_number: '+79506077440',
          status: 'Открыт',
          seating_time: '2025-04-06T14:20:00+10:00',
          end_time: '2025-04-06T17:20:00+10:00'
        },
        {
          id: 23841,
          name_for_reservation: 'Ольга',
          num_people: 3,
          phone_number: '+79330952097',
          status: 'Живая очередь',
          seating_time: '2025-04-06T12:20:00+10:00',
          end_time: '2025-04-06T15:20:00+10:00'
        }
      ]
    },
    {
      id: '0e02b79a-e0da-456c-bf11-4fd30a8975f2',
      capacity: 4,
      number: 'B13',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '419346f6-ce7d-42e5-8cbb-6b9b58e92dbb',
          status: 'Banquet',
          start_time: '2025-04-06T19:30:00+10:00',
          end_time: '2025-04-06T21:30:00+10:00'
        },
        {
          id: '877b3c8e-75b0-41a8-99aa-92b6563fd149',
          status: 'Closed',
          start_time: '2025-04-06T16:50:00+10:00',
          end_time: '2025-04-06T18:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28922,
          name_for_reservation: 'Павел',
          num_people: 2,
          phone_number: '+79655653820',
          status: 'Живая очередь',
          seating_time: '2025-04-06T22:30:00+10:00',
          end_time: '2025-04-07T00:30:00+10:00'
        },
        {
          id: 22331,
          name_for_reservation: 'Ольга',
          num_people: 8,
          phone_number: '+79899822767',
          status: 'Закрыт',
          seating_time: '2025-04-06T14:00:00+10:00',
          end_time: '2025-04-06T15:00:00+10:00'
        },
        {
          id: 29384,
          name_for_reservation: 'Дмитрий',
          num_people: 4,
          phone_number: '+79172114754',
          status: 'Новая',
          seating_time: '2025-04-06T12:20:00+10:00',
          end_time: '2025-04-06T13:20:00+10:00'
        }
      ]
    },
    {
      id: '86c64926-0960-4e92-ae63-aed4a1f5549d',
      capacity: 10,
      number: 'B14',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '73e0b0df-b7a6-4a55-aa69-a85265450499',
          status: 'Banquet',
          start_time: '2025-04-06T12:00:00+10:00',
          end_time: '2025-04-06T15:00:00+10:00'
        },
        {
          id: '82500d55-a8a6-4c29-ba0a-50d304519d77',
          status: 'Banquet',
          start_time: '2025-04-06T22:40:00+10:00',
          end_time: '2025-04-07T00:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 29400,
          name_for_reservation: 'Алексей',
          num_people: 3,
          phone_number: '+79900519161',
          status: 'Новая',
          seating_time: '2025-04-06T20:50:00+10:00',
          end_time: '2025-04-06T22:50:00+10:00'
        },
        {
          id: 21029,
          name_for_reservation: 'Валентина',
          num_people: 6,
          phone_number: '+79153973817',
          status: 'Открыт',
          seating_time: '2025-04-06T17:30:00+10:00',
          end_time: '2025-04-06T18:30:00+10:00'
        }
      ]
    },
    {
      id: '28f1766e-d442-4523-a269-14cfee7d95d8',
      capacity: 10,
      number: 'B15',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '44538f1d-61a0-40a0-b2d3-d35727215f43',
          status: 'Closed',
          start_time: '2025-04-06T14:30:00+10:00',
          end_time: '2025-04-06T17:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 21028,
          name_for_reservation: 'Дмитрий',
          num_people: 8,
          phone_number: '+79302836493',
          status: 'Живая очередь',
          seating_time: '2025-04-06T19:30:00+10:00',
          end_time: '2025-04-06T21:30:00+10:00'
        },
        {
          id: 21587,
          name_for_reservation: 'Анна',
          num_people: 1,
          phone_number: '+79961222892',
          status: 'Закрыт',
          seating_time: '2025-04-06T13:40:00+10:00',
          end_time: '2025-04-06T15:40:00+10:00'
        },
        {
          id: 27877,
          name_for_reservation: 'Ирина',
          num_people: 7,
          phone_number: '+79880376540',
          status: 'Заявка',
          seating_time: '2025-04-06T19:30:00+10:00',
          end_time: '2025-04-06T22:30:00+10:00'
        },
        {
          id: 20929,
          name_for_reservation: 'Ольга',
          num_people: 10,
          phone_number: '+79804647024',
          status: 'Новая',
          seating_time: '2025-04-06T17:50:00+10:00',
          end_time: '2025-04-06T19:50:00+10:00'
        }
      ]
    },
    {
      id: '19dc8ce7-83c2-4238-959b-b8bf5c13d0f5',
      capacity: 10,
      number: 'B16',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'f109248e-3dda-42b9-b656-8f93f58686fc',
          status: 'New',
          start_time: '2025-04-06T18:00:00+10:00',
          end_time: '2025-04-06T19:00:00+10:00'
        },
        {
          id: '845add5d-5a6a-4a2f-918f-4f0564794f68',
          status: 'New',
          start_time: '2025-04-06T18:10:00+10:00',
          end_time: '2025-04-06T21:10:00+10:00'
        },
        {
          id: 'd8fc9354-186e-484f-b8b2-70673f172b20',
          status: 'Closed',
          start_time: '2025-04-06T22:10:00+10:00',
          end_time: '2025-04-06T23:10:00+10:00'
        },
        {
          id: '81ecd9e2-d79c-4715-aa81-88b2899d0cb7',
          status: 'New',
          start_time: '2025-04-06T19:50:00+10:00',
          end_time: '2025-04-06T21:50:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '7570349b-4e31-4a5f-bf8f-7c8c2738ffb7',
      capacity: 10,
      number: 'B17',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'b3e1a369-6602-480f-a305-d648b626d12a',
          status: 'New',
          start_time: '2025-04-06T19:50:00+10:00',
          end_time: '2025-04-06T21:50:00+10:00'
        },
        {
          id: '0bc62ac6-e4b2-42c3-8757-eb07edd1e86a',
          status: 'Closed',
          start_time: '2025-04-06T17:30:00+10:00',
          end_time: '2025-04-06T18:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20421,
          name_for_reservation: 'Виктор',
          num_people: 9,
          phone_number: '+79220026295',
          status: 'Закрыт',
          seating_time: '2025-04-06T21:20:00+10:00',
          end_time: '2025-04-06T22:20:00+10:00'
        },
        {
          id: 21854,
          name_for_reservation: 'Светлана',
          num_people: 8,
          phone_number: '+79965322994',
          status: 'Новая',
          seating_time: '2025-04-06T15:30:00+10:00',
          end_time: '2025-04-06T17:30:00+10:00'
        }
      ]
    },
    {
      id: '493d7efc-5aec-483a-b9be-e6433a443b81',
      capacity: 10,
      number: 'B18',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '3c6b108f-f7ee-4b30-a03e-137af5f4967e',
          status: 'Bill',
          start_time: '2025-04-06T14:10:00+10:00',
          end_time: '2025-04-06T16:10:00+10:00'
        },
        {
          id: '5339123a-7c7c-42d8-baf4-93986ee4ee13',
          status: 'Bill',
          start_time: '2025-04-06T11:40:00+10:00',
          end_time: '2025-04-06T12:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22772,
          name_for_reservation: 'Светлана',
          num_people: 9,
          phone_number: '+79226551144',
          status: 'Заявка',
          seating_time: '2025-04-06T15:40:00+10:00',
          end_time: '2025-04-06T16:40:00+10:00'
        },
        {
          id: 25610,
          name_for_reservation: 'Павел',
          num_people: 6,
          phone_number: '+79329614044',
          status: 'Заявка',
          seating_time: '2025-04-06T12:20:00+10:00',
          end_time: '2025-04-06T14:20:00+10:00'
        },
        {
          id: 23111,
          name_for_reservation: 'Светлана',
          num_people: 1,
          phone_number: '+79154923789',
          status: 'Живая очередь',
          seating_time: '2025-04-06T12:20:00+10:00',
          end_time: '2025-04-06T15:20:00+10:00'
        },
        {
          id: 26317,
          name_for_reservation: 'Светлана',
          num_people: 1,
          phone_number: '+79322548017',
          status: 'Заявка',
          seating_time: '2025-04-06T18:00:00+10:00',
          end_time: '2025-04-06T20:00:00+10:00'
        }
      ]
    }
  ]
}
