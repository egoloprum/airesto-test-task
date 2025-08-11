import { BookingData } from './type'

export const BookingDay4thOfApril: BookingData = {
  available_days: [
    '2025-04-04',
    '2025-04-05',
    '2025-04-06',
    '2025-04-07',
    '2025-04-08'
  ],
  current_day: '2025-04-04',
  restaurant: {
    id: 11100,
    timezone: 'Asia/Vladivostok',
    restaurant_name: 'Супра',
    opening_time: '11:00',
    closing_time: '23:40'
  },
  tables: [
    {
      id: 'b1ca53e2-ef40-4e9f-aa2f-6b1dcf554d77',
      capacity: 8,
      number: '1',
      zone: '1 этаж',
      orders: [
        {
          id: 'bc2a0ecc-9894-4f8e-b8c7-76110218de55',
          status: 'Closed',
          start_time: '2025-04-04T16:07:00+10:00',
          end_time: '2025-04-04T19:01:00+10:00'
        },
        {
          id: 'eb96ee55-956d-47ca-8975-c8aaef53dd1a',
          status: 'Banquet',
          start_time: '2025-04-04T20:30:00+10:00',
          end_time: '2025-04-04T22:08:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20005,
          name_for_reservation: 'Сергей',
          num_people: 1,
          phone_number: '+79101658143',
          status: 'Открыт',
          seating_time: '2025-04-04T12:10:00+10:00',
          end_time: '2025-04-04T13:23:00+10:00'
        },
        {
          id: 20001,
          name_for_reservation: 'Наталья',
          num_people: 4,
          phone_number: '+79663812979',
          status: 'Закрыт',
          seating_time: '2025-04-04T12:34:00+10:00',
          end_time: '2025-04-04T14:37:00+10:00'
        },
        {
          id: 20003,
          name_for_reservation: 'Светлана',
          num_people: 1,
          phone_number: '+79303341410',
          status: 'Закрыт',
          seating_time: '2025-04-04T19:42:00+10:00',
          end_time: '2025-04-04T21:44:00+10:00'
        }
      ]
    },
    {
      id: 'd66a8b07-08f1-4b2b-9fd5-17b2f6218c85',
      capacity: 10,
      number: '2',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 20008,
          name_for_reservation: 'Анна',
          num_people: 3,
          phone_number: '+79117310655',
          status: 'Заявка',
          seating_time: '2025-04-04T13:15:00+10:00',
          end_time: '2025-04-04T14:19:00+10:00'
        },
        {
          id: 20010,
          name_for_reservation: 'Роман',
          num_people: 6,
          phone_number: '+79737230797',
          status: 'Живая очередь',
          seating_time: '2025-04-04T21:55:00+10:00',
          end_time: '2025-04-04T23:17:00+10:00'
        },
        {
          id: 20007,
          name_for_reservation: 'Константин',
          num_people: 8,
          phone_number: '+79644771919',
          status: 'Живая очередь',
          seating_time: '2025-04-04T22:15:00+10:00',
          end_time: '2025-04-04T23:29:00+10:00'
        }
      ]
    },
    {
      id: '9067fe43-e699-4bb4-a9f3-4885d12451e4',
      capacity: 10,
      number: '3',
      zone: '1 этаж',
      orders: [
        {
          id: 'ddc26329-df06-4251-9a2a-602662212a8c',
          status: 'Closed',
          start_time: '2025-04-04T12:47:00+10:00',
          end_time: '2025-04-04T15:16:00+10:00'
        },
        {
          id: 'e8d06e2e-b43f-4201-9f79-2719ae1f7f81',
          status: 'New',
          start_time: '2025-04-04T18:48:00+10:00',
          end_time: '2025-04-04T19:48:00+10:00'
        },
        {
          id: '459b974c-002a-4ce1-8ce4-52a6b8d4c3df',
          status: 'Banquet',
          start_time: '2025-04-04T19:54:00+10:00',
          end_time: '2025-04-04T21:04:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20012,
          name_for_reservation: 'Ольга',
          num_people: 6,
          phone_number: '+79602743677',
          status: 'Новая',
          seating_time: '2025-04-04T11:25:00+10:00',
          end_time: '2025-04-04T13:37:00+10:00'
        },
        {
          id: 20011,
          name_for_reservation: 'Лариса',
          num_people: 9,
          phone_number: '+79642760074',
          status: 'Новая',
          seating_time: '2025-04-04T11:46:00+10:00',
          end_time: '2025-04-04T13:10:00+10:00'
        }
      ]
    },
    {
      id: '827c3fbc-b1b4-46bf-ab7b-2b49267fe36a',
      capacity: 2,
      number: '4',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 20016,
          name_for_reservation: 'Роман',
          num_people: 1,
          phone_number: '+79824881146',
          status: 'Открыт',
          seating_time: '2025-04-04T17:32:00+10:00',
          end_time: '2025-04-04T19:53:00+10:00'
        }
      ]
    },
    {
      id: '68141730-643f-4906-b7af-c759eb944331',
      capacity: 8,
      number: '5',
      zone: '1 этаж',
      orders: [
        {
          id: '0e0a6d1b-1032-4c21-bb99-bffc20ecf76f',
          status: 'Bill',
          start_time: '2025-04-04T20:58:00+10:00',
          end_time: '2025-04-04T23:36:00+10:00'
        },
        {
          id: 'c3d96e5d-b2e4-4d76-a865-c7a70c3a6405',
          status: 'Bill',
          start_time: '2025-04-04T21:50:00+10:00',
          end_time: '2025-04-04T22:52:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20021,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79517234303',
          status: 'Новая',
          seating_time: '2025-04-04T15:36:00+10:00',
          end_time: '2025-04-04T17:09:00+10:00'
        },
        {
          id: 20022,
          name_for_reservation: 'Евгений',
          num_people: 2,
          phone_number: '+79209452397',
          status: 'Новая',
          seating_time: '2025-04-04T21:22:00+10:00',
          end_time: '2025-04-04T22:44:00+10:00'
        }
      ]
    },
    {
      id: 'aa3456ea-3d75-45ad-b67c-36db19c4e3aa',
      capacity: 12,
      number: '6',
      zone: '1 этаж',
      orders: [
        {
          id: 'c2e15186-b96c-4f04-9aac-7cc4ce5c6e14',
          status: 'New',
          start_time: '2025-04-04T11:24:00+10:00',
          end_time: '2025-04-04T13:21:00+10:00'
        },
        {
          id: '320b03dd-4a13-4344-a90a-95bf7d1b77c6',
          status: 'Banquet',
          start_time: '2025-04-04T14:42:00+10:00',
          end_time: '2025-04-04T16:01:00+10:00'
        },
        {
          id: '4ddd23e8-6ff6-4ecd-93e5-4a554961f9cf',
          status: 'Banquet',
          start_time: '2025-04-04T18:06:00+10:00',
          end_time: '2025-04-04T19:59:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20026,
          name_for_reservation: 'Ксения',
          num_people: 5,
          phone_number: '+79727999039',
          status: 'Живая очередь',
          seating_time: '2025-04-04T19:22:00+10:00',
          end_time: '2025-04-04T22:14:00+10:00'
        },
        {
          id: 20027,
          name_for_reservation: 'Татьяна',
          num_people: 9,
          phone_number: '+79844749954',
          status: 'Закрыт',
          seating_time: '2025-04-04T19:27:00+10:00',
          end_time: '2025-04-04T22:13:00+10:00'
        }
      ]
    },
    {
      id: '13945677-7879-4470-8c7d-5bc7b1f4183f',
      capacity: 8,
      number: '7',
      zone: '1 этаж',
      orders: [
        {
          id: 'b7333dcf-4117-4134-aa9f-23d4e81752f6',
          status: 'Banquet',
          start_time: '2025-04-04T15:58:00+10:00',
          end_time: '2025-04-04T18:12:00+10:00'
        },
        {
          id: '2d832a4f-1ae8-4632-9d47-c25fff09836e',
          status: 'Closed',
          start_time: '2025-04-04T16:36:00+10:00',
          end_time: '2025-04-04T18:29:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20033,
          name_for_reservation: 'Ольга',
          num_people: 8,
          phone_number: '+79199537484',
          status: 'Заявка',
          seating_time: '2025-04-04T11:20:00+10:00',
          end_time: '2025-04-04T13:19:00+10:00'
        },
        {
          id: 20034,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79910728164',
          status: 'Новая',
          seating_time: '2025-04-04T15:38:00+10:00',
          end_time: '2025-04-04T16:38:00+10:00'
        },
        {
          id: 20029,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79329207606',
          status: 'Открыт',
          seating_time: '2025-04-04T20:08:00+10:00',
          end_time: '2025-04-04T21:22:00+10:00'
        }
      ]
    },
    {
      id: '77f09675-08a7-4f43-988a-911d425db0d0',
      capacity: 6,
      number: '8',
      zone: '1 этаж',
      orders: [],
      reservations: []
    },
    {
      id: '76996ab0-d069-4b8f-982c-1741db3d5664',
      capacity: 6,
      number: '9',
      zone: '1 этаж',
      orders: [
        {
          id: '7722d12e-63a3-4a0e-a408-d8fac7f66673',
          status: 'Banquet',
          start_time: '2025-04-04T19:05:00+10:00',
          end_time: '2025-04-04T20:23:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20043,
          name_for_reservation: 'Мария',
          num_people: 4,
          phone_number: '+79357993678',
          status: 'Живая очередь',
          seating_time: '2025-04-04T11:07:00+10:00',
          end_time: '2025-04-04T12:23:00+10:00'
        },
        {
          id: 20040,
          name_for_reservation: 'Евгения',
          num_people: 5,
          phone_number: '+79655006373',
          status: 'Заявка',
          seating_time: '2025-04-04T14:10:00+10:00',
          end_time: '2025-04-04T15:11:00+10:00'
        },
        {
          id: 20041,
          name_for_reservation: 'Сергей',
          num_people: 1,
          phone_number: '+79579041760',
          status: 'Новая',
          seating_time: '2025-04-04T17:21:00+10:00',
          end_time: '2025-04-04T19:37:00+10:00'
        },
        {
          id: 20045,
          name_for_reservation: 'Анна',
          num_people: 6,
          phone_number: '+79151983221',
          status: 'Заявка',
          seating_time: '2025-04-04T19:17:00+10:00',
          end_time: '2025-04-04T21:12:00+10:00'
        }
      ]
    },
    {
      id: 'dfcce020-3d60-4779-9e50-f8f16c644093',
      capacity: 4,
      number: '10',
      zone: '1 этаж',
      orders: [
        {
          id: '98919f20-ca16-49f4-b367-d0a9b639f350',
          status: 'New',
          start_time: '2025-04-04T11:17:00+10:00',
          end_time: '2025-04-04T13:34:00+10:00'
        },
        {
          id: '3b1bbddb-1482-4989-b020-fb8616f20224',
          status: 'New',
          start_time: '2025-04-04T14:34:00+10:00',
          end_time: '2025-04-04T16:31:00+10:00'
        },
        {
          id: '2b9da987-f8bf-4930-9311-f320949cda6f',
          status: 'Bill',
          start_time: '2025-04-04T17:06:00+10:00',
          end_time: '2025-04-04T19:17:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20047,
          name_for_reservation: 'Ксения',
          num_people: 1,
          phone_number: '+79827680853',
          status: 'Открыт',
          seating_time: '2025-04-04T19:12:00+10:00',
          end_time: '2025-04-04T21:48:00+10:00'
        },
        {
          id: 20051,
          name_for_reservation: 'Ольга',
          num_people: 3,
          phone_number: '+79191826931',
          status: 'Открыт',
          seating_time: '2025-04-04T19:15:00+10:00',
          end_time: '2025-04-04T21:18:00+10:00'
        }
      ]
    },
    {
      id: 'bb106f2c-cdb7-4689-ad93-a2cc5442bee3',
      capacity: 6,
      number: '11',
      zone: '1 этаж',
      orders: [],
      reservations: []
    },
    {
      id: '2f5c6f52-5fd9-4380-9f94-784f569a35a0',
      capacity: 10,
      number: '12',
      zone: '1 этаж',
      orders: [],
      reservations: []
    },
    {
      id: '0a8cfe43-d5eb-46df-a316-51527a51a7d2',
      capacity: 6,
      number: '13',
      zone: '1 этаж',
      orders: [],
      reservations: []
    },
    {
      id: 'fbde83ae-0e2a-4b87-8b20-667e2354d75f',
      capacity: 2,
      number: '101',
      zone: '2 этаж',
      orders: [
        {
          id: '0ab81dd1-e4db-4646-8301-8e64c13189cd',
          status: 'Banquet',
          start_time: '2025-04-04T16:02:00+10:00',
          end_time: '2025-04-04T18:50:00+10:00'
        },
        {
          id: '538ad2de-9155-42a0-a254-6719bd920f3a',
          status: 'Bill',
          start_time: '2025-04-04T20:17:00+10:00',
          end_time: '2025-04-04T22:29:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20072,
          name_for_reservation: 'Татьяна',
          num_people: 1,
          phone_number: '+79162348194',
          status: 'Открыт',
          seating_time: '2025-04-04T12:25:00+10:00',
          end_time: '2025-04-04T13:55:00+10:00'
        }
      ]
    },
    {
      id: '5e0dd690-4123-4c6a-81e4-2dc74d5424ea',
      capacity: 12,
      number: '102',
      zone: '2 этаж',
      orders: [
        {
          id: '89d452b8-6fc0-4be5-be26-f7a7fe4a4ec8',
          status: 'Closed',
          start_time: '2025-04-04T12:45:00+10:00',
          end_time: '2025-04-04T15:20:00+10:00'
        },
        {
          id: 'f1df6c91-82d0-41cd-b056-57f782ee839a',
          status: 'Closed',
          start_time: '2025-04-04T13:27:00+10:00',
          end_time: '2025-04-04T15:53:00+10:00'
        },
        {
          id: 'ecc57b45-b9d2-4f6e-b7d2-023c882a39d1',
          status: 'Closed',
          start_time: '2025-04-04T19:38:00+10:00',
          end_time: '2025-04-04T21:54:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20078,
          name_for_reservation: 'Геннадий',
          num_people: 2,
          phone_number: '+79103064351',
          status: 'Живая очередь',
          seating_time: '2025-04-04T17:22:00+10:00',
          end_time: '2025-04-04T20:15:00+10:00'
        },
        {
          id: 20080,
          name_for_reservation: 'Иван',
          num_people: 8,
          phone_number: '+79254336573',
          status: 'Новая',
          seating_time: '2025-04-04T17:50:00+10:00',
          end_time: '2025-04-04T19:27:00+10:00'
        }
      ]
    },
    {
      id: 'a7b15782-88b2-4cb7-9c03-900b99eb1627',
      capacity: 12,
      number: '103',
      zone: '2 этаж',
      orders: [
        {
          id: '64ca78ca-71d5-49e9-93b8-798512576908',
          status: 'Banquet',
          start_time: '2025-04-04T12:17:00+10:00',
          end_time: '2025-04-04T14:05:00+10:00'
        },
        {
          id: '20566013-3f2e-4c2a-94ae-331a6a0fe6f0',
          status: 'Banquet',
          start_time: '2025-04-04T13:31:00+10:00',
          end_time: '2025-04-04T15:04:00+10:00'
        },
        {
          id: '38846fc3-2e1c-4cf7-b30c-c47019b79a5d',
          status: 'Banquet',
          start_time: '2025-04-04T16:46:00+10:00',
          end_time: '2025-04-04T18:59:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20082,
          name_for_reservation: 'Лариса',
          num_people: 2,
          phone_number: '+79938389989',
          status: 'Открыт',
          seating_time: '2025-04-04T12:53:00+10:00',
          end_time: '2025-04-04T14:24:00+10:00'
        },
        {
          id: 20085,
          name_for_reservation: 'Аркадий',
          num_people: 8,
          phone_number: '+79175749099',
          status: 'Закрыт',
          seating_time: '2025-04-04T17:51:00+10:00',
          end_time: '2025-04-04T20:50:00+10:00'
        }
      ]
    },
    {
      id: '37e336e3-28b7-4411-afbc-65be55eea77f',
      capacity: 2,
      number: '104',
      zone: '2 этаж',
      orders: [
        {
          id: '5bc9d177-b019-4f9f-86fa-e11fee65e681',
          status: 'Bill',
          start_time: '2025-04-04T12:19:00+10:00',
          end_time: '2025-04-04T13:22:00+10:00'
        },
        {
          id: '23c37822-202c-4ec7-af88-3193f34e9e0d',
          status: 'Banquet',
          start_time: '2025-04-04T15:18:00+10:00',
          end_time: '2025-04-04T16:38:00+10:00'
        },
        {
          id: 'a8711c36-6b72-4822-bcef-dc7b2900c8f8',
          status: 'Banquet',
          start_time: '2025-04-04T16:04:00+10:00',
          end_time: '2025-04-04T17:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20089,
          name_for_reservation: 'Лариса',
          num_people: 1,
          phone_number: '+79425320679',
          status: 'Открыт',
          seating_time: '2025-04-04T19:19:00+10:00',
          end_time: '2025-04-04T20:57:00+10:00'
        },
        {
          id: 20086,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79395577611',
          status: 'Открыт',
          seating_time: '2025-04-04T21:38:00+10:00',
          end_time: '2025-04-04T23:22:00+10:00'
        }
      ]
    },
    {
      id: '6618be6b-7236-48cc-b0c1-76cc5f236944',
      capacity: 4,
      number: '105',
      zone: '2 этаж',
      orders: [
        {
          id: 'b78fc3d3-f64f-45b0-b125-404e8fc8c893',
          status: 'Closed',
          start_time: '2025-04-04T11:41:00+10:00',
          end_time: '2025-04-04T14:07:00+10:00'
        },
        {
          id: '15b2ed8c-c4fe-4bc6-8f86-62c44b65b5f0',
          status: 'Closed',
          start_time: '2025-04-04T12:31:00+10:00',
          end_time: '2025-04-04T14:43:00+10:00'
        },
        {
          id: 'fec40d06-6cb9-453e-b51e-f47a4b7e15d6',
          status: 'Bill',
          start_time: '2025-04-04T15:41:00+10:00',
          end_time: '2025-04-04T18:05:00+10:00'
        },
        {
          id: 'c87aa2bf-c5c2-498f-90c9-adbfd01d2ecf',
          status: 'Closed',
          start_time: '2025-04-04T16:43:00+10:00',
          end_time: '2025-04-04T19:22:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20092,
          name_for_reservation: 'Лариса',
          num_people: 1,
          phone_number: '+79245572671',
          status: 'Живая очередь',
          seating_time: '2025-04-04T11:14:00+10:00',
          end_time: '2025-04-04T12:36:00+10:00'
        }
      ]
    },
    {
      id: 'c6a8f932-33a8-4e6c-80e7-1cc199552faa',
      capacity: 12,
      number: '106',
      zone: '2 этаж',
      orders: [],
      reservations: []
    },
    {
      id: 'be12bd11-7fa1-4f05-8c8a-fa93fada5120',
      capacity: 4,
      number: '107',
      zone: '2 этаж',
      orders: [
        {
          id: '2fddff52-10a2-4129-8056-d248e5265d1c',
          status: 'Closed',
          start_time: '2025-04-04T11:37:00+10:00',
          end_time: '2025-04-04T13:39:00+10:00'
        },
        {
          id: '1431dc68-6671-4f24-94e6-000bcf775328',
          status: 'New',
          start_time: '2025-04-04T14:34:00+10:00',
          end_time: '2025-04-04T17:04:00+10:00'
        },
        {
          id: '0a2f2048-803a-42c7-892d-1c695ae15e41',
          status: 'Banquet',
          start_time: '2025-04-04T21:50:00+10:00',
          end_time: '2025-04-04T23:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20105,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79920362537',
          status: 'Закрыт',
          seating_time: '2025-04-04T16:11:00+10:00',
          end_time: '2025-04-04T17:54:00+10:00'
        },
        {
          id: 20103,
          name_for_reservation: 'Роман',
          num_people: 4,
          phone_number: '+79350939790',
          status: 'Заявка',
          seating_time: '2025-04-04T19:38:00+10:00',
          end_time: '2025-04-04T21:24:00+10:00'
        }
      ]
    },
    {
      id: '51de4a7b-685c-49eb-81a2-09613daa2e21',
      capacity: 6,
      number: '108',
      zone: '2 этаж',
      orders: [
        {
          id: '59b6a534-9819-4c2d-a9b4-5a0c03c6e4e3',
          status: 'Banquet',
          start_time: '2025-04-04T15:18:00+10:00',
          end_time: '2025-04-04T16:18:00+10:00'
        },
        {
          id: '252a749c-7d18-4e87-b4cf-0ee893131c23',
          status: 'Closed',
          start_time: '2025-04-04T20:14:00+10:00',
          end_time: '2025-04-04T22:05:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20110,
          name_for_reservation: 'Аркадий',
          num_people: 1,
          phone_number: '+79954760391',
          status: 'Открыт',
          seating_time: '2025-04-04T11:06:00+10:00',
          end_time: '2025-04-04T12:28:00+10:00'
        },
        {
          id: 20107,
          name_for_reservation: 'Сергей',
          num_people: 4,
          phone_number: '+79128909128',
          status: 'Открыт',
          seating_time: '2025-04-04T12:21:00+10:00',
          end_time: '2025-04-04T14:37:00+10:00'
        },
        {
          id: 20109,
          name_for_reservation: 'Светлана',
          num_people: 4,
          phone_number: '+79499043884',
          status: 'Закрыт',
          seating_time: '2025-04-04T21:19:00+10:00',
          end_time: '2025-04-04T22:27:00+10:00'
        }
      ]
    },
    {
      id: 'a9178b1e-829b-4711-9781-9e29985beb44',
      capacity: 10,
      number: '109',
      zone: '2 этаж',
      orders: [],
      reservations: [
        {
          id: 20112,
          name_for_reservation: 'Константин',
          num_people: 2,
          phone_number: '+79220249398',
          status: 'Новая',
          seating_time: '2025-04-04T15:05:00+10:00',
          end_time: '2025-04-04T17:17:00+10:00'
        },
        {
          id: 20113,
          name_for_reservation: 'Ольга',
          num_people: 5,
          phone_number: '+79354719543',
          status: 'Закрыт',
          seating_time: '2025-04-04T21:33:00+10:00',
          end_time: '2025-04-04T23:13:00+10:00'
        }
      ]
    },
    {
      id: '065bfe32-c2ea-4656-83b4-7b6ce14bd59a',
      capacity: 4,
      number: '110',
      zone: '2 этаж',
      orders: [
        {
          id: '5ad0bb0b-47c2-4259-8a52-76db73e9da81',
          status: 'New',
          start_time: '2025-04-04T13:37:00+10:00',
          end_time: '2025-04-04T15:55:00+10:00'
        },
        {
          id: '506f2b95-bb0a-4933-8934-b4e87cdceba5',
          status: 'Closed',
          start_time: '2025-04-04T18:31:00+10:00',
          end_time: '2025-04-04T20:44:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20122,
          name_for_reservation: 'Ольга',
          num_people: 3,
          phone_number: '+79238597162',
          status: 'Заявка',
          seating_time: '2025-04-04T13:48:00+10:00',
          end_time: '2025-04-04T16:28:00+10:00'
        },
        {
          id: 20117,
          name_for_reservation: 'Анна',
          num_people: 2,
          phone_number: '+79895359017',
          status: 'Открыт',
          seating_time: '2025-04-04T17:44:00+10:00',
          end_time: '2025-04-04T19:32:00+10:00'
        },
        {
          id: 20121,
          name_for_reservation: 'Аркадий',
          num_people: 2,
          phone_number: '+79466298850',
          status: 'Закрыт',
          seating_time: '2025-04-04T18:12:00+10:00',
          end_time: '2025-04-04T21:01:00+10:00'
        }
      ]
    },
    {
      id: '2fb785c2-1ee2-4a6f-9bfa-cbd2c0001f1a',
      capacity: 6,
      number: 'B1',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '8f5e2aa9-eedb-4919-9fdb-c307a59b9f2c',
          status: 'Closed',
          start_time: '2025-04-04T15:47:00+10:00',
          end_time: '2025-04-04T18:23:00+10:00'
        },
        {
          id: '2d0e40e9-ee25-465a-a1af-854588fac479',
          status: 'Banquet',
          start_time: '2025-04-04T21:20:00+10:00',
          end_time: '2025-04-04T22:25:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20129,
          name_for_reservation: 'Юлия',
          num_people: 1,
          phone_number: '+79663529667',
          status: 'Заявка',
          seating_time: '2025-04-04T11:53:00+10:00',
          end_time: '2025-04-04T13:56:00+10:00'
        },
        {
          id: 20125,
          name_for_reservation: 'Лариса',
          num_people: 6,
          phone_number: '+79267457731',
          status: 'Открыт',
          seating_time: '2025-04-04T15:06:00+10:00',
          end_time: '2025-04-04T16:30:00+10:00'
        },
        {
          id: 20128,
          name_for_reservation: 'Ольга',
          num_people: 6,
          phone_number: '+79231992540',
          status: 'Открыт',
          seating_time: '2025-04-04T16:30:00+10:00',
          end_time: '2025-04-04T17:45:00+10:00'
        }
      ]
    },
    {
      id: 'd03a5099-052b-4611-bb50-dacffe848b78',
      capacity: 4,
      number: 'B2',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '20697ea2-bb2b-483e-ab1f-9eb1109c37fd',
          status: 'Banquet',
          start_time: '2025-04-04T13:47:00+10:00',
          end_time: '2025-04-04T16:17:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20133,
          name_for_reservation: 'Константин',
          num_people: 2,
          phone_number: '+79996476290',
          status: 'Живая очередь',
          seating_time: '2025-04-04T19:53:00+10:00',
          end_time: '2025-04-04T21:24:00+10:00'
        },
        {
          id: 20130,
          name_for_reservation: 'Наталья',
          num_people: 4,
          phone_number: '+79557186929',
          status: 'Живая очередь',
          seating_time: '2025-04-04T20:27:00+10:00',
          end_time: '2025-04-04T23:16:00+10:00'
        }
      ]
    },
    {
      id: '55fc7e50-d184-4b70-a3d8-d7dba3221962',
      capacity: 2,
      number: 'B3',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'f3edc9b7-4ed0-4ada-9582-08cdf7103a12',
          status: 'New',
          start_time: '2025-04-04T11:09:00+10:00',
          end_time: '2025-04-04T12:41:00+10:00'
        },
        {
          id: 'af7bddd0-e208-49dd-808f-f5877d333c99',
          status: 'Bill',
          start_time: '2025-04-04T14:20:00+10:00',
          end_time: '2025-04-04T16:39:00+10:00'
        },
        {
          id: 'a3357c48-2786-4212-9461-4dd4ca314eed',
          status: 'Bill',
          start_time: '2025-04-04T14:29:00+10:00',
          end_time: '2025-04-04T17:23:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '122a6e9c-4061-4663-a493-88aef91b6cc9',
      capacity: 8,
      number: 'B4',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '6c45b3a1-571a-4c5a-be50-e8f04bd13d06',
          status: 'New',
          start_time: '2025-04-04T13:53:00+10:00',
          end_time: '2025-04-04T15:49:00+10:00'
        },
        {
          id: '670fa1d0-552e-4a56-80bd-21c6a0e3ae58',
          status: 'Closed',
          start_time: '2025-04-04T18:56:00+10:00',
          end_time: '2025-04-04T20:12:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20142,
          name_for_reservation: 'Сергей',
          num_people: 4,
          phone_number: '+79788482064',
          status: 'Заявка',
          seating_time: '2025-04-04T18:41:00+10:00',
          end_time: '2025-04-04T19:51:00+10:00'
        }
      ]
    },
    {
      id: '47cdb8f9-6365-41f3-8c62-0d78c2f25390',
      capacity: 6,
      number: 'B5',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '6c0e9f3d-73d4-442d-a420-84319fdb7f66',
          status: 'Closed',
          start_time: '2025-04-04T13:12:00+10:00',
          end_time: '2025-04-04T14:46:00+10:00'
        },
        {
          id: 'dc479bae-61f1-4c5a-b7a4-7ca7fb70e749',
          status: 'New',
          start_time: '2025-04-04T16:46:00+10:00',
          end_time: '2025-04-04T19:08:00+10:00'
        },
        {
          id: 'da8212e4-7b12-421e-94ed-7e67277b8a7b',
          status: 'Bill',
          start_time: '2025-04-04T19:31:00+10:00',
          end_time: '2025-04-04T21:51:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20145,
          name_for_reservation: 'Татьяна',
          num_people: 3,
          phone_number: '+79614318640',
          status: 'Живая очередь',
          seating_time: '2025-04-04T11:13:00+10:00',
          end_time: '2025-04-04T12:43:00+10:00'
        },
        {
          id: 20146,
          name_for_reservation: 'Татьяна',
          num_people: 4,
          phone_number: '+79635434126',
          status: 'Закрыт',
          seating_time: '2025-04-04T13:00:00+10:00',
          end_time: '2025-04-04T15:15:00+10:00'
        }
      ]
    },
    {
      id: 'ed472b7a-f514-4d8f-b5d6-0506d63a03a6',
      capacity: 10,
      number: 'B6',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '575811e9-0fba-4d90-bc8b-ade48698e0d1',
          status: 'Banquet',
          start_time: '2025-04-04T11:32:00+10:00',
          end_time: '2025-04-04T13:19:00+10:00'
        },
        {
          id: '98c042d6-907b-4b99-946b-1c001a2f96fd',
          status: 'Closed',
          start_time: '2025-04-04T14:35:00+10:00',
          end_time: '2025-04-04T16:16:00+10:00'
        },
        {
          id: '59b845c0-0ae7-426f-a02d-bfd55facb624',
          status: 'Closed',
          start_time: '2025-04-04T20:45:00+10:00',
          end_time: '2025-04-04T23:06:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20152,
          name_for_reservation: 'Евгений',
          num_people: 3,
          phone_number: '+79910037864',
          status: 'Новая',
          seating_time: '2025-04-04T13:38:00+10:00',
          end_time: '2025-04-04T14:42:00+10:00'
        },
        {
          id: 20153,
          name_for_reservation: 'Светлана',
          num_people: 5,
          phone_number: '+79674915870',
          status: 'Новая',
          seating_time: '2025-04-04T19:21:00+10:00',
          end_time: '2025-04-04T21:41:00+10:00'
        }
      ]
    },
    {
      id: '37b7d365-eebf-4240-a259-e732c1bc0aaf',
      capacity: 8,
      number: 'B7',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'b985e9a9-1f54-4bb5-ad5f-8abb53ed2f86',
          status: 'Bill',
          start_time: '2025-04-04T21:25:00+10:00',
          end_time: '2025-04-04T22:37:00+10:00'
        },
        {
          id: 'd49b88e2-5245-4be7-b34e-9a0d9cca30bd',
          status: 'New',
          start_time: '2025-04-04T21:50:00+10:00',
          end_time: '2025-04-04T23:03:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20156,
          name_for_reservation: 'Лариса',
          num_people: 1,
          phone_number: '+79832038621',
          status: 'Новая',
          seating_time: '2025-04-04T14:26:00+10:00',
          end_time: '2025-04-04T16:22:00+10:00'
        },
        {
          id: 20160,
          name_for_reservation: 'Анна',
          num_people: 5,
          phone_number: '+79684740421',
          status: 'Новая',
          seating_time: '2025-04-04T17:54:00+10:00',
          end_time: '2025-04-04T20:42:00+10:00'
        }
      ]
    },
    {
      id: '48a3df6a-4bf7-4841-9f21-5859294948cb',
      capacity: 4,
      number: 'B8',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '7ce8d21b-93e1-4328-b7a8-0c9d363e68ed',
          status: 'Closed',
          start_time: '2025-04-04T12:22:00+10:00',
          end_time: '2025-04-04T15:06:00+10:00'
        },
        {
          id: '2169c0fd-a457-4ec2-ae67-a26bce1bd4df',
          status: 'New',
          start_time: '2025-04-04T18:42:00+10:00',
          end_time: '2025-04-04T20:39:00+10:00'
        },
        {
          id: 'a10082ff-bc6f-43af-b0e6-97ca12129fbe',
          status: 'Bill',
          start_time: '2025-04-04T21:39:00+10:00',
          end_time: '2025-04-04T23:13:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20161,
          name_for_reservation: 'Геннадий',
          num_people: 4,
          phone_number: '+79173322079',
          status: 'Закрыт',
          seating_time: '2025-04-04T12:43:00+10:00',
          end_time: '2025-04-04T14:57:00+10:00'
        },
        {
          id: 20162,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79680100212',
          status: 'Новая',
          seating_time: '2025-04-04T13:29:00+10:00',
          end_time: '2025-04-04T16:18:00+10:00'
        }
      ]
    },
    {
      id: 'ec78a7ea-3be6-4414-8f18-03c89e1e25b5',
      capacity: 8,
      number: 'B9',
      zone: 'Банкетный зал',
      orders: [],
      reservations: []
    },
    {
      id: 'e9b3acf7-2ba1-4cce-aaaa-02045598f087',
      capacity: 10,
      number: 'B10',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'e958a92e-497c-48b6-8714-7ee569389a1b',
          status: 'Bill',
          start_time: '2025-04-04T15:02:00+10:00',
          end_time: '2025-04-04T18:01:00+10:00'
        },
        {
          id: '0775f08e-57ee-4972-a366-b9c3ba025f23',
          status: 'New',
          start_time: '2025-04-04T18:48:00+10:00',
          end_time: '2025-04-04T20:07:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20169,
          name_for_reservation: 'Василий',
          num_people: 5,
          phone_number: '+79179415335',
          status: 'Новая',
          seating_time: '2025-04-04T12:01:00+10:00',
          end_time: '2025-04-04T13:16:00+10:00'
        },
        {
          id: 20171,
          name_for_reservation: 'Григорий',
          num_people: 9,
          phone_number: '+79452290825',
          status: 'Живая очередь',
          seating_time: '2025-04-04T20:14:00+10:00',
          end_time: '2025-04-04T23:03:00+10:00'
        },
        {
          id: 20172,
          name_for_reservation: 'Юлия',
          num_people: 10,
          phone_number: '+79240181230',
          status: 'Живая очередь',
          seating_time: '2025-04-04T22:12:00+10:00',
          end_time: '2025-04-04T23:14:00+10:00'
        }
      ]
    },
    {
      id: 'ee0f1b34-edf0-49e0-a950-996998ae75b8',
      capacity: 12,
      number: 'B11',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'af8035d2-fa49-4351-8270-2d0e642a6579',
          status: 'Banquet',
          start_time: '2025-04-04T11:17:00+10:00',
          end_time: '2025-04-04T13:47:00+10:00'
        },
        {
          id: '0ba54fa4-8127-46cd-ba0f-131fc4f57bbf',
          status: 'Closed',
          start_time: '2025-04-04T21:08:00+10:00',
          end_time: '2025-04-04T22:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20179,
          name_for_reservation: 'Сергей',
          num_people: 9,
          phone_number: '+79938909052',
          status: 'Новая',
          seating_time: '2025-04-04T14:45:00+10:00',
          end_time: '2025-04-04T17:27:00+10:00'
        },
        {
          id: 20180,
          name_for_reservation: 'Светлана',
          num_people: 6,
          phone_number: '+79946122000',
          status: 'Открыт',
          seating_time: '2025-04-04T17:27:00+10:00',
          end_time: '2025-04-04T19:13:00+10:00'
        },
        {
          id: 20177,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79204390849',
          status: 'Заявка',
          seating_time: '2025-04-04T17:31:00+10:00',
          end_time: '2025-04-04T20:01:00+10:00'
        }
      ]
    },
    {
      id: '7636e7ca-069f-42cc-b3ba-065bb1177c9b',
      capacity: 10,
      number: 'B12',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '6aaa46d8-8dfc-457b-a1f5-63f6071d6ae5',
          status: 'Closed',
          start_time: '2025-04-04T13:55:00+10:00',
          end_time: '2025-04-04T15:50:00+10:00'
        },
        {
          id: '0881563c-2137-4627-b3ca-ec88a3b1293c',
          status: 'New',
          start_time: '2025-04-04T18:39:00+10:00',
          end_time: '2025-04-04T19:46:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20186,
          name_for_reservation: 'Валентина',
          num_people: 9,
          phone_number: '+79853456212',
          status: 'Открыт',
          seating_time: '2025-04-04T12:21:00+10:00',
          end_time: '2025-04-04T13:27:00+10:00'
        },
        {
          id: 20184,
          name_for_reservation: 'Юлия',
          num_people: 5,
          phone_number: '+79335842054',
          status: 'Новая',
          seating_time: '2025-04-04T16:17:00+10:00',
          end_time: '2025-04-04T18:37:00+10:00'
        },
        {
          id: 20188,
          name_for_reservation: 'Ксения',
          num_people: 1,
          phone_number: '+79884935938',
          status: 'Новая',
          seating_time: '2025-04-04T17:14:00+10:00',
          end_time: '2025-04-04T19:54:00+10:00'
        }
      ]
    },
    {
      id: '3e3b84da-aeed-4a15-b590-aaea9351c2f0',
      capacity: 4,
      number: 'B13',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '42deb71e-fa53-4efa-ad54-11dc419f8302',
          status: 'Closed',
          start_time: '2025-04-04T14:52:00+10:00',
          end_time: '2025-04-04T17:46:00+10:00'
        },
        {
          id: '3b3bd355-ace4-4f1d-a802-c9713f6efa26',
          status: 'Bill',
          start_time: '2025-04-04T20:22:00+10:00',
          end_time: '2025-04-04T21:33:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20193,
          name_for_reservation: 'Юлия',
          num_people: 2,
          phone_number: '+79859248294',
          status: 'Закрыт',
          seating_time: '2025-04-04T12:55:00+10:00',
          end_time: '2025-04-04T15:52:00+10:00'
        },
        {
          id: 20192,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79402920105',
          status: 'Заявка',
          seating_time: '2025-04-04T15:12:00+10:00',
          end_time: '2025-04-04T18:02:00+10:00'
        },
        {
          id: 20190,
          name_for_reservation: 'Иван',
          num_people: 4,
          phone_number: '+79142015782',
          status: 'Новая',
          seating_time: '2025-04-04T21:14:00+10:00',
          end_time: '2025-04-04T22:54:00+10:00'
        }
      ]
    },
    {
      id: '6686e2e0-7fdc-4532-b654-21e2b1986d2a',
      capacity: 10,
      number: 'B14',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'e3a975d8-12b8-4ed4-a949-53d9d219d2f4',
          status: 'New',
          start_time: '2025-04-04T14:57:00+10:00',
          end_time: '2025-04-04T16:53:00+10:00'
        },
        {
          id: '809b957f-2a21-4c7b-a799-eedec587db25',
          status: 'Banquet',
          start_time: '2025-04-04T18:03:00+10:00',
          end_time: '2025-04-04T19:22:00+10:00'
        },
        {
          id: 'e7ba6dd2-cfb1-402f-878a-f791c743fc5c',
          status: 'Bill',
          start_time: '2025-04-04T18:20:00+10:00',
          end_time: '2025-04-04T20:21:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20199,
          name_for_reservation: 'Алина',
          num_people: 6,
          phone_number: '+79223882744',
          status: 'Заявка',
          seating_time: '2025-04-04T14:45:00+10:00',
          end_time: '2025-04-04T17:24:00+10:00'
        }
      ]
    },
    {
      id: '1d865778-1113-4379-a137-3648d8fb2cc9',
      capacity: 10,
      number: 'B15',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'a20789bb-91f7-48fc-8a94-5fbc3a7502a8',
          status: 'Closed',
          start_time: '2025-04-04T11:24:00+10:00',
          end_time: '2025-04-04T12:37:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20203,
          name_for_reservation: 'Анатолий',
          num_people: 7,
          phone_number: '+79887359966',
          status: 'Заявка',
          seating_time: '2025-04-04T17:38:00+10:00',
          end_time: '2025-04-04T20:24:00+10:00'
        },
        {
          id: 20201,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79411139120',
          status: 'Заявка',
          seating_time: '2025-04-04T21:37:00+10:00',
          end_time: '2025-04-04T22:39:00+10:00'
        }
      ]
    },
    {
      id: '955a60b8-d881-41f6-add2-3e6076bd5f3c',
      capacity: 10,
      number: 'B16',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'edcb83da-4f54-4394-91ea-f29354f13b60',
          status: 'New',
          start_time: '2025-04-04T18:58:00+10:00',
          end_time: '2025-04-04T20:50:00+10:00'
        },
        {
          id: '3a8cdc5d-01fc-4897-a1ac-a41cbb38e8e7',
          status: 'New',
          start_time: '2025-04-04T20:26:00+10:00',
          end_time: '2025-04-04T21:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20204,
          name_for_reservation: 'Мария',
          num_people: 6,
          phone_number: '+79732839208',
          status: 'Живая очередь',
          seating_time: '2025-04-04T15:57:00+10:00',
          end_time: '2025-04-04T18:09:00+10:00'
        },
        {
          id: 20205,
          name_for_reservation: 'Евгения',
          num_people: 5,
          phone_number: '+79110960974',
          status: 'Закрыт',
          seating_time: '2025-04-04T20:57:00+10:00',
          end_time: '2025-04-04T22:00:00+10:00'
        }
      ]
    },
    {
      id: '3f7304dc-f666-41da-9b1a-ccf692e37b8a',
      capacity: 10,
      number: 'B17',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'ea9e5512-73eb-4148-a08f-be2a83cff4ae',
          status: 'Banquet',
          start_time: '2025-04-04T11:55:00+10:00',
          end_time: '2025-04-04T14:00:00+10:00'
        },
        {
          id: '9987b6ac-f681-4479-8dc0-c29f2dbcaf3c',
          status: 'New',
          start_time: '2025-04-04T15:28:00+10:00',
          end_time: '2025-04-04T17:06:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20211,
          name_for_reservation: 'Сергей',
          num_people: 10,
          phone_number: '+79370177863',
          status: 'Открыт',
          seating_time: '2025-04-04T14:08:00+10:00',
          end_time: '2025-04-04T16:16:00+10:00'
        },
        {
          id: 20208,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79698251659',
          status: 'Новая',
          seating_time: '2025-04-04T16:47:00+10:00',
          end_time: '2025-04-04T18:03:00+10:00'
        },
        {
          id: 20210,
          name_for_reservation: 'Ольга',
          num_people: 4,
          phone_number: '+79148625395',
          status: 'Живая очередь',
          seating_time: '2025-04-04T19:18:00+10:00',
          end_time: '2025-04-04T22:18:00+10:00'
        }
      ]
    },
    {
      id: 'cdd2bdbb-33d8-4987-a80d-b2558abdece5',
      capacity: 10,
      number: 'B18',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '28f5319f-d632-4746-aa12-9ac075e2f8df',
          status: 'Closed',
          start_time: '2025-04-04T17:21:00+10:00',
          end_time: '2025-04-04T20:03:00+10:00'
        },
        {
          id: 'd463451a-c5ee-4fa3-8421-b786e4151b45',
          status: 'Closed',
          start_time: '2025-04-04T19:03:00+10:00',
          end_time: '2025-04-04T21:11:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20217,
          name_for_reservation: 'Дмитрий',
          num_people: 3,
          phone_number: '+79767167462',
          status: 'Заявка',
          seating_time: '2025-04-04T11:59:00+10:00',
          end_time: '2025-04-04T13:51:00+10:00'
        },
        {
          id: 20216,
          name_for_reservation: 'Иван',
          num_people: 8,
          phone_number: '+79172718108',
          status: 'Живая очередь',
          seating_time: '2025-04-04T14:50:00+10:00',
          end_time: '2025-04-04T16:25:00+10:00'
        },
        {
          id: 20218,
          name_for_reservation: 'Анна',
          num_people: 1,
          phone_number: '+79408388852',
          status: 'Закрыт',
          seating_time: '2025-04-04T21:00:00+10:00',
          end_time: '2025-04-04T22:18:00+10:00'
        }
      ]
    }
  ]
}
