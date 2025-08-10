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
        },
        {
          id: 'e09fd2d0-fc5b-485e-8d89-f1af52fc3f7c',
          status: 'New',
          start_time: '2025-04-04T20:44:00+10:00',
          end_time: '2025-04-04T22:26:00+10:00'
        },
        {
          id: 'a7378b0c-7bb9-4595-97f4-661fd8fd8f7d',
          status: 'New',
          start_time: '2025-04-04T17:29:00+10:00',
          end_time: '2025-04-04T20:09:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20000,
          name_for_reservation: 'Мария',
          num_people: 5,
          phone_number: '+79403471251',
          status: 'Новая',
          seating_time: '2025-04-04T21:47:00+10:00',
          end_time: '2025-04-04T22:57:00+10:00'
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
          id: 20002,
          name_for_reservation: 'Алина',
          num_people: 7,
          phone_number: '+79154264846',
          status: 'Новая',
          seating_time: '2025-04-04T14:03:00+10:00',
          end_time: '2025-04-04T16:19:00+10:00'
        },
        {
          id: 20003,
          name_for_reservation: 'Светлана',
          num_people: 1,
          phone_number: '+79303341410',
          status: 'Закрыт',
          seating_time: '2025-04-04T19:42:00+10:00',
          end_time: '2025-04-04T21:44:00+10:00'
        },
        {
          id: 20004,
          name_for_reservation: 'Григорий',
          num_people: 2,
          phone_number: '+79911380948',
          status: 'Открыт',
          seating_time: '2025-04-04T21:57:00+10:00',
          end_time: '2025-04-04T22:49:00+10:00'
        },
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
          id: 20006,
          name_for_reservation: 'Евгения',
          num_people: 4,
          phone_number: '+79343491161',
          status: 'Открыт',
          seating_time: '2025-04-04T12:02:00+10:00',
          end_time: '2025-04-04T13:55:00+10:00'
        }
      ]
    },
    {
      id: 'd66a8b07-08f1-4b2b-9fd5-17b2f6218c85',
      capacity: 10,
      number: '2',
      zone: '1 этаж',
      orders: [
        {
          id: 'ff77ed27-ef80-4c83-9d1b-33457280d4bf',
          status: 'New',
          start_time: '2025-04-04T22:32:00+10:00',
          end_time: '2025-04-04T23:14:00+10:00'
        },
        {
          id: 'de9f0aa9-25bb-43dd-a946-4aeddec121d4',
          status: 'Banquet',
          start_time: '2025-04-04T21:39:00+10:00',
          end_time: '2025-04-04T22:32:00+10:00'
        },
        {
          id: '57dea5b5-6286-4599-b305-cd48d2273eb9',
          status: 'Closed',
          start_time: '2025-04-04T20:46:00+10:00',
          end_time: '2025-04-04T21:22:00+10:00'
        },
        {
          id: 'c3cb1172-5fa8-45f9-9ce2-adc4fcb12fc0',
          status: 'Bill',
          start_time: '2025-04-04T15:12:00+10:00',
          end_time: '2025-04-04T16:02:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20007,
          name_for_reservation: 'Константин',
          num_people: 8,
          phone_number: '+79644771919',
          status: 'Живая очередь',
          seating_time: '2025-04-04T22:15:00+10:00',
          end_time: '2025-04-04T23:29:00+10:00'
        },
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
          id: 20009,
          name_for_reservation: 'Ольга',
          num_people: 6,
          phone_number: '+79893758340',
          status: 'Новая',
          seating_time: '2025-04-04T21:30:00+10:00',
          end_time: '2025-04-04T22:09:00+10:00'
        },
        {
          id: 20010,
          name_for_reservation: 'Роман',
          num_people: 6,
          phone_number: '+79737230797',
          status: 'Живая очередь',
          seating_time: '2025-04-04T21:55:00+10:00',
          end_time: '2025-04-04T23:17:00+10:00'
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
          id: 'e8d06e2e-b43f-4201-9f79-2719ae1f7f81',
          status: 'New',
          start_time: '2025-04-04T18:48:00+10:00',
          end_time: '2025-04-04T19:48:00+10:00'
        },
        {
          id: 'ddc26329-df06-4251-9a2a-602662212a8c',
          status: 'Closed',
          start_time: '2025-04-04T12:47:00+10:00',
          end_time: '2025-04-04T15:16:00+10:00'
        },
        {
          id: '459b974c-002a-4ce1-8ce4-52a6b8d4c3df',
          status: 'Banquet',
          start_time: '2025-04-04T19:54:00+10:00',
          end_time: '2025-04-04T21:04:00+10:00'
        },
        {
          id: 'd86ef5bd-e117-4d70-9528-584023ee94c1',
          status: 'Banquet',
          start_time: '2025-04-04T16:16:00+10:00',
          end_time: '2025-04-04T16:46:00+10:00'
        },
        {
          id: 'c424cef0-506a-4680-ae86-f1a13a94cbb8',
          status: 'Closed',
          start_time: '2025-04-04T22:40:00+10:00',
          end_time: '2025-04-04T23:33:00+10:00'
        },
        {
          id: 'e648567c-7e3a-4081-9ca8-66a83bf7fec0',
          status: 'Bill',
          start_time: '2025-04-04T19:02:00+10:00',
          end_time: '2025-04-04T21:54:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20011,
          name_for_reservation: 'Лариса',
          num_people: 9,
          phone_number: '+79642760074',
          status: 'Новая',
          seating_time: '2025-04-04T11:46:00+10:00',
          end_time: '2025-04-04T13:10:00+10:00'
        },
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
          id: 20013,
          name_for_reservation: 'Татьяна',
          num_people: 4,
          phone_number: '+79398599103',
          status: 'Новая',
          seating_time: '2025-04-04T20:17:00+10:00',
          end_time: '2025-04-04T21:15:00+10:00'
        },
        {
          id: 20014,
          name_for_reservation: 'Евгений',
          num_people: 1,
          phone_number: '+79580898560',
          status: 'Новая',
          seating_time: '2025-04-04T13:29:00+10:00',
          end_time: '2025-04-04T16:16:00+10:00'
        }
      ]
    },
    {
      id: '827c3fbc-b1b4-46bf-ab7b-2b49267fe36a',
      capacity: 2,
      number: '4',
      zone: '1 этаж',
      orders: [
        {
          id: '28b8f77a-b03b-49d0-8aef-c10f68bcc246',
          status: 'Closed',
          start_time: '2025-04-04T15:48:00+10:00',
          end_time: '2025-04-04T18:29:00+10:00'
        },
        {
          id: 'dcb8512c-9042-4d0e-ba45-da7e793a64a6',
          status: 'Bill',
          start_time: '2025-04-04T14:21:00+10:00',
          end_time: '2025-04-04T16:10:00+10:00'
        },
        {
          id: '7bc689d5-6e4b-4a03-a4b0-45902e33d664',
          status: 'Closed',
          start_time: '2025-04-04T12:56:00+10:00',
          end_time: '2025-04-04T14:29:00+10:00'
        },
        {
          id: '8fda5612-9fec-4c59-91b1-092b3258de7e',
          status: 'Bill',
          start_time: '2025-04-04T19:16:00+10:00',
          end_time: '2025-04-04T22:16:00+10:00'
        },
        {
          id: '7fea7d92-2cf0-44e2-8958-bfeb1f53a7b2',
          status: 'Closed',
          start_time: '2025-04-04T13:08:00+10:00',
          end_time: '2025-04-04T15:32:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20015,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79927922378',
          status: 'Закрыт',
          seating_time: '2025-04-04T22:50:00+10:00',
          end_time: '2025-04-04T23:22:00+10:00'
        },
        {
          id: 20016,
          name_for_reservation: 'Роман',
          num_people: 1,
          phone_number: '+79824881146',
          status: 'Открыт',
          seating_time: '2025-04-04T17:32:00+10:00',
          end_time: '2025-04-04T19:53:00+10:00'
        },
        {
          id: 20017,
          name_for_reservation: 'Наталья',
          num_people: 2,
          phone_number: '+79571459167',
          status: 'Живая очередь',
          seating_time: '2025-04-04T21:04:00+10:00',
          end_time: '2025-04-04T23:39:00+10:00'
        },
        {
          id: 20018,
          name_for_reservation: 'Константин',
          num_people: 1,
          phone_number: '+79597554189',
          status: 'Заявка',
          seating_time: '2025-04-04T14:11:00+10:00',
          end_time: '2025-04-04T17:06:00+10:00'
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
          id: 'df28c597-e68b-44ae-973a-91cb71393b5d',
          status: 'Bill',
          start_time: '2025-04-04T19:00:00+10:00',
          end_time: '2025-04-04T20:28:00+10:00'
        },
        {
          id: 'c3d96e5d-b2e4-4d76-a865-c7a70c3a6405',
          status: 'Bill',
          start_time: '2025-04-04T21:50:00+10:00',
          end_time: '2025-04-04T22:52:00+10:00'
        },
        {
          id: 'bdd65ff6-0a22-48f9-9de7-ce6f473a325e',
          status: 'New',
          start_time: '2025-04-04T19:30:00+10:00',
          end_time: '2025-04-04T20:17:00+10:00'
        },
        {
          id: '6a5d340d-e80e-40d5-91e7-940519688edc',
          status: 'New',
          start_time: '2025-04-04T11:37:00+10:00',
          end_time: '2025-04-04T13:15:00+10:00'
        },
        {
          id: 'fb2792a9-fa6e-4781-9b46-4f16f5b5ee93',
          status: 'Banquet',
          start_time: '2025-04-04T20:47:00+10:00',
          end_time: '2025-04-04T22:54:00+10:00'
        },
        {
          id: '2a77ede5-3479-4260-87a9-837d077ce06c',
          status: 'New',
          start_time: '2025-04-04T14:49:00+10:00',
          end_time: '2025-04-04T16:05:00+10:00'
        },
        {
          id: '0e0a6d1b-1032-4c21-bb99-bffc20ecf76f',
          status: 'Bill',
          start_time: '2025-04-04T20:58:00+10:00',
          end_time: '2025-04-04T23:36:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20019,
          name_for_reservation: 'Евгения',
          num_people: 2,
          phone_number: '+79220919606',
          status: 'Открыт',
          seating_time: '2025-04-04T19:55:00+10:00',
          end_time: '2025-04-04T20:56:00+10:00'
        },
        {
          id: 20020,
          name_for_reservation: 'Лариса',
          num_people: 1,
          phone_number: '+79137669051',
          status: 'Заявка',
          seating_time: '2025-04-04T22:55:00+10:00',
          end_time: '2025-04-04T23:37:00+10:00'
        },
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
        },
        {
          id: 20023,
          name_for_reservation: 'Ксения',
          num_people: 1,
          phone_number: '+79105450572',
          status: 'Живая очередь',
          seating_time: '2025-04-04T11:24:00+10:00',
          end_time: '2025-04-04T13:18:00+10:00'
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
          id: '4ddd23e8-6ff6-4ecd-93e5-4a554961f9cf',
          status: 'Banquet',
          start_time: '2025-04-04T18:06:00+10:00',
          end_time: '2025-04-04T19:59:00+10:00'
        },
        {
          id: '320b03dd-4a13-4344-a90a-95bf7d1b77c6',
          status: 'Banquet',
          start_time: '2025-04-04T14:42:00+10:00',
          end_time: '2025-04-04T16:01:00+10:00'
        },
        {
          id: 'd404cec0-a390-4dce-94d1-1646590ceb05',
          status: 'Closed',
          start_time: '2025-04-04T14:11:00+10:00',
          end_time: '2025-04-04T16:43:00+10:00'
        },
        {
          id: 'bba03e47-d9f2-425c-9c59-ecfa5a4acb7f',
          status: 'New',
          start_time: '2025-04-04T12:45:00+10:00',
          end_time: '2025-04-04T15:42:00+10:00'
        },
        {
          id: '83d1098f-a8ff-4a2c-ae52-7c62e02c85a3',
          status: 'Closed',
          start_time: '2025-04-04T20:09:00+10:00',
          end_time: '2025-04-04T21:07:00+10:00'
        },
        {
          id: '16ed74fe-c657-4482-ad75-6773a90eb6d9',
          status: 'Bill',
          start_time: '2025-04-04T11:32:00+10:00',
          end_time: '2025-04-04T14:12:00+10:00'
        },
        {
          id: 'c2e15186-b96c-4f04-9aac-7cc4ce5c6e14',
          status: 'New',
          start_time: '2025-04-04T11:24:00+10:00',
          end_time: '2025-04-04T13:21:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20024,
          name_for_reservation: 'Евгений',
          num_people: 8,
          phone_number: '+79499866911',
          status: 'Новая',
          seating_time: '2025-04-04T21:33:00+10:00',
          end_time: '2025-04-04T22:13:00+10:00'
        },
        {
          id: 20025,
          name_for_reservation: 'Аркадий',
          num_people: 9,
          phone_number: '+79468247564',
          status: 'Открыт',
          seating_time: '2025-04-04T11:40:00+10:00',
          end_time: '2025-04-04T14:16:00+10:00'
        },
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
        },
        {
          id: 20028,
          name_for_reservation: 'Мария',
          num_people: 6,
          phone_number: '+79911358439',
          status: 'Живая очередь',
          seating_time: '2025-04-04T18:38:00+10:00',
          end_time: '2025-04-04T21:10:00+10:00'
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
          id: 'd2f57cae-9355-4f7f-88f2-b70f598fa8f1',
          status: 'Banquet',
          start_time: '2025-04-04T19:55:00+10:00',
          end_time: '2025-04-04T22:16:00+10:00'
        },
        {
          id: '2d832a4f-1ae8-4632-9d47-c25fff09836e',
          status: 'Closed',
          start_time: '2025-04-04T16:36:00+10:00',
          end_time: '2025-04-04T18:29:00+10:00'
        },
        {
          id: '40038322-d36a-4750-bc71-883597d4b9b4',
          status: 'Closed',
          start_time: '2025-04-04T15:59:00+10:00',
          end_time: '2025-04-04T17:27:00+10:00'
        },
        {
          id: '68904b6e-8d81-42a6-8951-9fbb22619aed',
          status: 'New',
          start_time: '2025-04-04T12:10:00+10:00',
          end_time: '2025-04-04T15:01:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20029,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79329207606',
          status: 'Открыт',
          seating_time: '2025-04-04T20:08:00+10:00',
          end_time: '2025-04-04T21:22:00+10:00'
        },
        {
          id: 20030,
          name_for_reservation: 'Иван',
          num_people: 4,
          phone_number: '+79999936987',
          status: 'Новая',
          seating_time: '2025-04-04T22:03:00+10:00',
          end_time: '2025-04-04T23:27:00+10:00'
        },
        {
          id: 20031,
          name_for_reservation: 'Наталья',
          num_people: 1,
          phone_number: '+79113586716',
          status: 'Новая',
          seating_time: '2025-04-04T17:15:00+10:00',
          end_time: '2025-04-04T19:25:00+10:00'
        },
        {
          id: 20032,
          name_for_reservation: 'Евгений',
          num_people: 4,
          phone_number: '+79836089572',
          status: 'Закрыт',
          seating_time: '2025-04-04T14:29:00+10:00',
          end_time: '2025-04-04T16:56:00+10:00'
        },
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
          id: 20035,
          name_for_reservation: 'Ксения',
          num_people: 1,
          phone_number: '+79299206902',
          status: 'Открыт',
          seating_time: '2025-04-04T22:43:00+10:00',
          end_time: '2025-04-04T23:27:00+10:00'
        }
      ]
    },
    {
      id: '77f09675-08a7-4f43-988a-911d425db0d0',
      capacity: 6,
      number: '8',
      zone: '1 этаж',
      orders: [
        {
          id: '792f8ba7-4baa-4e52-896c-799cd2ea0f0b',
          status: 'Banquet',
          start_time: '2025-04-04T16:57:00+10:00',
          end_time: '2025-04-04T18:02:00+10:00'
        },
        {
          id: '5377a66d-163c-4f8c-9790-696885bb8f12',
          status: 'Bill',
          start_time: '2025-04-04T22:47:00+10:00',
          end_time: '2025-04-04T23:36:00+10:00'
        },
        {
          id: '04c8ace5-a053-4cc1-ac50-19f41a3be080',
          status: 'Banquet',
          start_time: '2025-04-04T16:28:00+10:00',
          end_time: '2025-04-04T18:27:00+10:00'
        },
        {
          id: 'b3166f07-b622-49e5-9849-65c3f57730ec',
          status: 'New',
          start_time: '2025-04-04T12:21:00+10:00',
          end_time: '2025-04-04T15:13:00+10:00'
        },
        {
          id: 'da9399ac-0087-459d-9ad3-a53034460fe8',
          status: 'Banquet',
          start_time: '2025-04-04T16:42:00+10:00',
          end_time: '2025-04-04T17:37:00+10:00'
        },
        {
          id: '1f6888a8-9b93-48e1-8811-42407c4a53cd',
          status: 'New',
          start_time: '2025-04-04T11:11:00+10:00',
          end_time: '2025-04-04T11:53:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20036,
          name_for_reservation: 'Валентина',
          num_people: 6,
          phone_number: '+79951756977',
          status: 'Закрыт',
          seating_time: '2025-04-04T17:49:00+10:00',
          end_time: '2025-04-04T20:21:00+10:00'
        },
        {
          id: 20037,
          name_for_reservation: 'Евгения',
          num_people: 2,
          phone_number: '+79546463259',
          status: 'Открыт',
          seating_time: '2025-04-04T12:49:00+10:00',
          end_time: '2025-04-04T14:49:00+10:00'
        },
        {
          id: 20038,
          name_for_reservation: 'Андрей',
          num_people: 6,
          phone_number: '+79956222312',
          status: 'Живая очередь',
          seating_time: '2025-04-04T22:03:00+10:00',
          end_time: '2025-04-04T22:54:00+10:00'
        },
        {
          id: 20039,
          name_for_reservation: 'Иван',
          num_people: 1,
          phone_number: '+79558188652',
          status: 'Заявка',
          seating_time: '2025-04-04T16:47:00+10:00',
          end_time: '2025-04-04T17:48:00+10:00'
        }
      ]
    },
    {
      id: '76996ab0-d069-4b8f-982c-1741db3d5664',
      capacity: 6,
      number: '9',
      zone: '1 этаж',
      orders: [
        {
          id: '66bcd5e4-74c8-462b-aabc-43ceb644dd33',
          status: 'New',
          start_time: '2025-04-04T14:57:00+10:00',
          end_time: '2025-04-04T15:48:00+10:00'
        },
        {
          id: 'ea5d95d2-fca3-4465-8c08-89d6b8e10dea',
          status: 'Banquet',
          start_time: '2025-04-04T18:48:00+10:00',
          end_time: '2025-04-04T19:18:00+10:00'
        },
        {
          id: 'b8c105e6-55a4-46be-997f-9c8a9856a899',
          status: 'Banquet',
          start_time: '2025-04-04T18:11:00+10:00',
          end_time: '2025-04-04T19:10:00+10:00'
        },
        {
          id: '7722d12e-63a3-4a0e-a408-d8fac7f66673',
          status: 'Banquet',
          start_time: '2025-04-04T19:05:00+10:00',
          end_time: '2025-04-04T20:23:00+10:00'
        }
      ],
      reservations: [
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
          id: 20042,
          name_for_reservation: 'Иван',
          num_people: 4,
          phone_number: '+79892093029',
          status: 'Открыт',
          seating_time: '2025-04-04T20:24:00+10:00',
          end_time: '2025-04-04T22:22:00+10:00'
        },
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
          id: 20044,
          name_for_reservation: 'Евгения',
          num_people: 5,
          phone_number: '+79802610133',
          status: 'Новая',
          seating_time: '2025-04-04T14:17:00+10:00',
          end_time: '2025-04-04T14:52:00+10:00'
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
          id: 'be9242c4-1bd8-4a4f-a198-fc34fc20c511',
          status: 'Banquet',
          start_time: '2025-04-04T12:17:00+10:00',
          end_time: '2025-04-04T13:09:00+10:00'
        },
        {
          id: '2b9da987-f8bf-4930-9311-f320949cda6f',
          status: 'Bill',
          start_time: '2025-04-04T17:06:00+10:00',
          end_time: '2025-04-04T19:17:00+10:00'
        },
        {
          id: '3b1bbddb-1482-4989-b020-fb8616f20224',
          status: 'New',
          start_time: '2025-04-04T14:34:00+10:00',
          end_time: '2025-04-04T16:31:00+10:00'
        },
        {
          id: '435ae434-6bca-49c9-a9e3-6962fa15b594',
          status: 'Bill',
          start_time: '2025-04-04T20:43:00+10:00',
          end_time: '2025-04-04T21:43:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20046,
          name_for_reservation: 'Татьяна',
          num_people: 2,
          phone_number: '+79249240269',
          status: 'Живая очередь',
          seating_time: '2025-04-04T20:10:00+10:00',
          end_time: '2025-04-04T21:57:00+10:00'
        },
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
          id: 20048,
          name_for_reservation: 'Дмитрий',
          num_people: 1,
          phone_number: '+79660193534',
          status: 'Закрыт',
          seating_time: '2025-04-04T14:37:00+10:00',
          end_time: '2025-04-04T15:30:00+10:00'
        },
        {
          id: 20049,
          name_for_reservation: 'Александр',
          num_people: 1,
          phone_number: '+79451969528',
          status: 'Живая очередь',
          seating_time: '2025-04-04T21:39:00+10:00',
          end_time: '2025-04-04T23:32:00+10:00'
        },
        {
          id: 20050,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79686712407',
          status: 'Новая',
          seating_time: '2025-04-04T11:27:00+10:00',
          end_time: '2025-04-04T11:59:00+10:00'
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
      orders: [
        {
          id: '80ced14e-373d-4ed8-bae4-6e8f832c787f',
          status: 'Bill',
          start_time: '2025-04-04T22:36:00+10:00',
          end_time: '2025-04-04T23:20:00+10:00'
        },
        {
          id: '5ad01c03-8a09-40a8-bcec-54acc956c6fb',
          status: 'Closed',
          start_time: '2025-04-04T17:40:00+10:00',
          end_time: '2025-04-04T18:16:00+10:00'
        },
        {
          id: '4eab3256-af37-4cfd-bf5a-ca34ef242bcc',
          status: 'Bill',
          start_time: '2025-04-04T18:28:00+10:00',
          end_time: '2025-04-04T20:02:00+10:00'
        },
        {
          id: '2e59f16d-0403-44f5-8f93-23806605fb2f',
          status: 'Bill',
          start_time: '2025-04-04T14:57:00+10:00',
          end_time: '2025-04-04T17:15:00+10:00'
        },
        {
          id: '414ae4c3-89db-40f1-875a-ddf4d5f1fe31',
          status: 'New',
          start_time: '2025-04-04T13:19:00+10:00',
          end_time: '2025-04-04T16:14:00+10:00'
        },
        {
          id: '1ecee82e-263e-4bca-8bc6-b3966f366f92',
          status: 'Banquet',
          start_time: '2025-04-04T12:23:00+10:00',
          end_time: '2025-04-04T14:49:00+10:00'
        },
        {
          id: 'b018fd7b-5743-4508-98f5-ee246dcb602c',
          status: 'New',
          start_time: '2025-04-04T19:38:00+10:00',
          end_time: '2025-04-04T21:16:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20052,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79324658983',
          status: 'Заявка',
          seating_time: '2025-04-04T15:18:00+10:00',
          end_time: '2025-04-04T17:56:00+10:00'
        },
        {
          id: 20053,
          name_for_reservation: 'Юлия',
          num_people: 5,
          phone_number: '+79441743958',
          status: 'Живая очередь',
          seating_time: '2025-04-04T18:57:00+10:00',
          end_time: '2025-04-04T20:57:00+10:00'
        },
        {
          id: 20054,
          name_for_reservation: 'Татьяна',
          num_people: 5,
          phone_number: '+79789297313',
          status: 'Новая',
          seating_time: '2025-04-04T12:04:00+10:00',
          end_time: '2025-04-04T13:55:00+10:00'
        },
        {
          id: 20055,
          name_for_reservation: 'Геннадий',
          num_people: 3,
          phone_number: '+79680005335',
          status: 'Закрыт',
          seating_time: '2025-04-04T17:04:00+10:00',
          end_time: '2025-04-04T18:34:00+10:00'
        },
        {
          id: 20056,
          name_for_reservation: 'Иван',
          num_people: 2,
          phone_number: '+79456715015',
          status: 'Живая очередь',
          seating_time: '2025-04-04T21:39:00+10:00',
          end_time: '2025-04-04T22:50:00+10:00'
        },
        {
          id: 20057,
          name_for_reservation: 'Аркадий',
          num_people: 3,
          phone_number: '+79298148357',
          status: 'Заявка',
          seating_time: '2025-04-04T15:58:00+10:00',
          end_time: '2025-04-04T18:22:00+10:00'
        },
        {
          id: 20058,
          name_for_reservation: 'Константин',
          num_people: 1,
          phone_number: '+79572857019',
          status: 'Новая',
          seating_time: '2025-04-04T14:03:00+10:00',
          end_time: '2025-04-04T16:19:00+10:00'
        }
      ]
    },
    {
      id: '2f5c6f52-5fd9-4380-9f94-784f569a35a0',
      capacity: 10,
      number: '12',
      zone: '1 этаж',
      orders: [
        {
          id: '694447de-439d-4920-a7db-2eaaa4dea66a',
          status: 'Banquet',
          start_time: '2025-04-04T20:56:00+10:00',
          end_time: '2025-04-04T22:14:00+10:00'
        },
        {
          id: 'c1cbbec8-cf2c-4ce0-bcd6-25e901755989',
          status: 'Bill',
          start_time: '2025-04-04T17:51:00+10:00',
          end_time: '2025-04-04T20:00:00+10:00'
        },
        {
          id: 'e1e9275c-dc03-4be7-bfae-db1ec853f473',
          status: 'Bill',
          start_time: '2025-04-04T18:57:00+10:00',
          end_time: '2025-04-04T21:40:00+10:00'
        },
        {
          id: '200c8b04-a82c-44b5-9530-774e6e7f5e86',
          status: 'Closed',
          start_time: '2025-04-04T15:34:00+10:00',
          end_time: '2025-04-04T16:29:00+10:00'
        },
        {
          id: '08bb8dd4-d9aa-4a69-bb50-8078b7bde7e9',
          status: 'Closed',
          start_time: '2025-04-04T11:31:00+10:00',
          end_time: '2025-04-04T14:29:00+10:00'
        },
        {
          id: '5b8449d0-8553-450e-a2fd-ac58236d426e',
          status: 'Closed',
          start_time: '2025-04-04T11:46:00+10:00',
          end_time: '2025-04-04T12:17:00+10:00'
        },
        {
          id: '2a39e23c-5816-47d2-8d1e-d209591d11dc',
          status: 'Closed',
          start_time: '2025-04-04T19:53:00+10:00',
          end_time: '2025-04-04T21:15:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20059,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79994602384',
          status: 'Закрыт',
          seating_time: '2025-04-04T18:52:00+10:00',
          end_time: '2025-04-04T21:09:00+10:00'
        },
        {
          id: 20060,
          name_for_reservation: 'Анатолий',
          num_people: 8,
          phone_number: '+79560367716',
          status: 'Новая',
          seating_time: '2025-04-04T12:45:00+10:00',
          end_time: '2025-04-04T15:23:00+10:00'
        },
        {
          id: 20061,
          name_for_reservation: 'Александр',
          num_people: 2,
          phone_number: '+79865495444',
          status: 'Живая очередь',
          seating_time: '2025-04-04T20:48:00+10:00',
          end_time: '2025-04-04T21:32:00+10:00'
        },
        {
          id: 20062,
          name_for_reservation: 'Анатолий',
          num_people: 7,
          phone_number: '+79866512461',
          status: 'Живая очередь',
          seating_time: '2025-04-04T14:28:00+10:00',
          end_time: '2025-04-04T16:29:00+10:00'
        },
        {
          id: 20063,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79430551252',
          status: 'Закрыт',
          seating_time: '2025-04-04T12:31:00+10:00',
          end_time: '2025-04-04T14:03:00+10:00'
        },
        {
          id: 20064,
          name_for_reservation: 'Евгения',
          num_people: 4,
          phone_number: '+79230590558',
          status: 'Живая очередь',
          seating_time: '2025-04-04T22:48:00+10:00',
          end_time: '2025-04-04T23:36:00+10:00'
        }
      ]
    },
    {
      id: '0a8cfe43-d5eb-46df-a316-51527a51a7d2',
      capacity: 6,
      number: '13',
      zone: '1 этаж',
      orders: [
        {
          id: '3b1bffc8-bd4f-4d3a-8413-98fa99ceef55',
          status: 'Bill',
          start_time: '2025-04-04T13:41:00+10:00',
          end_time: '2025-04-04T15:23:00+10:00'
        },
        {
          id: 'e060e0c2-0e8e-4ec5-8e95-8f7480ea6b2c',
          status: 'Banquet',
          start_time: '2025-04-04T17:31:00+10:00',
          end_time: '2025-04-04T19:11:00+10:00'
        },
        {
          id: '2ff12bac-1c4a-44e0-b38d-aaa8fab2710b',
          status: 'Closed',
          start_time: '2025-04-04T14:50:00+10:00',
          end_time: '2025-04-04T15:44:00+10:00'
        },
        {
          id: '37106e00-f04b-436c-ae15-02bd7c5c3e37',
          status: 'Bill',
          start_time: '2025-04-04T22:01:00+10:00',
          end_time: '2025-04-04T23:36:00+10:00'
        },
        {
          id: '2dfd2c4b-1ae1-460e-81ca-ed3fe3f87972',
          status: 'Banquet',
          start_time: '2025-04-04T21:17:00+10:00',
          end_time: '2025-04-04T23:23:00+10:00'
        },
        {
          id: '0d3a4ba0-647e-4c74-9aa5-3b5c263d1862',
          status: 'Banquet',
          start_time: '2025-04-04T21:55:00+10:00',
          end_time: '2025-04-04T22:45:00+10:00'
        },
        {
          id: 'ee119914-a841-4dcd-8ba0-82c20d69258d',
          status: 'New',
          start_time: '2025-04-04T17:05:00+10:00',
          end_time: '2025-04-04T19:36:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20065,
          name_for_reservation: 'Юлия',
          num_people: 6,
          phone_number: '+79188544723',
          status: 'Новая',
          seating_time: '2025-04-04T15:50:00+10:00',
          end_time: '2025-04-04T17:10:00+10:00'
        },
        {
          id: 20066,
          name_for_reservation: 'Анна',
          num_people: 5,
          phone_number: '+79258721431',
          status: 'Закрыт',
          seating_time: '2025-04-04T11:59:00+10:00',
          end_time: '2025-04-04T14:42:00+10:00'
        },
        {
          id: 20067,
          name_for_reservation: 'Евгения',
          num_people: 2,
          phone_number: '+79973345486',
          status: 'Закрыт',
          seating_time: '2025-04-04T22:33:00+10:00',
          end_time: '2025-04-04T23:24:00+10:00'
        },
        {
          id: 20068,
          name_for_reservation: 'Василий',
          num_people: 6,
          phone_number: '+79187817011',
          status: 'Живая очередь',
          seating_time: '2025-04-04T14:09:00+10:00',
          end_time: '2025-04-04T15:43:00+10:00'
        },
        {
          id: 20069,
          name_for_reservation: 'Василий',
          num_people: 3,
          phone_number: '+79640765953',
          status: 'Закрыт',
          seating_time: '2025-04-04T13:36:00+10:00',
          end_time: '2025-04-04T14:39:00+10:00'
        }
      ]
    },
    {
      id: 'fbde83ae-0e2a-4b87-8b20-667e2354d75f',
      capacity: 2,
      number: '101',
      zone: '2 этаж',
      orders: [
        {
          id: '538ad2de-9155-42a0-a254-6719bd920f3a',
          status: 'Bill',
          start_time: '2025-04-04T20:17:00+10:00',
          end_time: '2025-04-04T22:29:00+10:00'
        },
        {
          id: '0ab81dd1-e4db-4646-8301-8e64c13189cd',
          status: 'Banquet',
          start_time: '2025-04-04T16:02:00+10:00',
          end_time: '2025-04-04T18:50:00+10:00'
        },
        {
          id: '0ed17988-bb88-40fb-bc07-49bed80631e3',
          status: 'Closed',
          start_time: '2025-04-04T17:56:00+10:00',
          end_time: '2025-04-04T20:46:00+10:00'
        },
        {
          id: '695e8d17-d678-45ad-aea4-1b081e203a68',
          status: 'Closed',
          start_time: '2025-04-04T14:45:00+10:00',
          end_time: '2025-04-04T15:27:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20070,
          name_for_reservation: 'Роман',
          num_people: 2,
          phone_number: '+79241543093',
          status: 'Закрыт',
          seating_time: '2025-04-04T14:40:00+10:00',
          end_time: '2025-04-04T15:36:00+10:00'
        },
        {
          id: 20071,
          name_for_reservation: 'Евгения',
          num_people: 2,
          phone_number: '+79117715945',
          status: 'Открыт',
          seating_time: '2025-04-04T21:33:00+10:00',
          end_time: '2025-04-04T22:50:00+10:00'
        },
        {
          id: 20072,
          name_for_reservation: 'Татьяна',
          num_people: 1,
          phone_number: '+79162348194',
          status: 'Открыт',
          seating_time: '2025-04-04T12:25:00+10:00',
          end_time: '2025-04-04T13:55:00+10:00'
        },
        {
          id: 20073,
          name_for_reservation: 'Иван',
          num_people: 2,
          phone_number: '+79912582999',
          status: 'Новая',
          seating_time: '2025-04-04T16:01:00+10:00',
          end_time: '2025-04-04T16:48:00+10:00'
        },
        {
          id: 20074,
          name_for_reservation: 'Наталья',
          num_people: 1,
          phone_number: '+79133720229',
          status: 'Закрыт',
          seating_time: '2025-04-04T18:11:00+10:00',
          end_time: '2025-04-04T20:31:00+10:00'
        },
        {
          id: 20075,
          name_for_reservation: 'Александр',
          num_people: 1,
          phone_number: '+79131570565',
          status: 'Заявка',
          seating_time: '2025-04-04T11:59:00+10:00',
          end_time: '2025-04-04T13:30:00+10:00'
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
          id: '7fee0bc2-d0bd-419d-bf9d-791522fb88c6',
          status: 'Closed',
          start_time: '2025-04-04T11:46:00+10:00',
          end_time: '2025-04-04T12:23:00+10:00'
        },
        {
          id: '89d452b8-6fc0-4be5-be26-f7a7fe4a4ec8',
          status: 'Closed',
          start_time: '2025-04-04T12:45:00+10:00',
          end_time: '2025-04-04T15:20:00+10:00'
        },
        {
          id: '1cbf275a-cefb-4482-a327-0d20bf5d1677',
          status: 'Banquet',
          start_time: '2025-04-04T21:18:00+10:00',
          end_time: '2025-04-04T21:57:00+10:00'
        },
        {
          id: 'b0bc3f6e-eab0-4c05-8815-7f52db917324',
          status: 'New',
          start_time: '2025-04-04T21:57:00+10:00',
          end_time: '2025-04-04T22:33:00+10:00'
        },
        {
          id: '2121a86e-e3e1-45fb-a214-7fe99c5a45eb',
          status: 'New',
          start_time: '2025-04-04T21:34:00+10:00',
          end_time: '2025-04-04T22:10:00+10:00'
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
          id: 20076,
          name_for_reservation: 'Светлана',
          num_people: 8,
          phone_number: '+79454347113',
          status: 'Открыт',
          seating_time: '2025-04-04T19:40:00+10:00',
          end_time: '2025-04-04T21:29:00+10:00'
        },
        {
          id: 20077,
          name_for_reservation: 'Валентина',
          num_people: 8,
          phone_number: '+79527814278',
          status: 'Открыт',
          seating_time: '2025-04-04T19:31:00+10:00',
          end_time: '2025-04-04T21:40:00+10:00'
        },
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
          id: 20079,
          name_for_reservation: 'Алина',
          num_people: 7,
          phone_number: '+79869269727',
          status: 'Живая очередь',
          seating_time: '2025-04-04T18:41:00+10:00',
          end_time: '2025-04-04T21:16:00+10:00'
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
          id: '38846fc3-2e1c-4cf7-b30c-c47019b79a5d',
          status: 'Banquet',
          start_time: '2025-04-04T16:46:00+10:00',
          end_time: '2025-04-04T18:59:00+10:00'
        },
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
          id: '1d5beae9-23c4-46c0-94e7-61412cffd6bd',
          status: 'New',
          start_time: '2025-04-04T14:06:00+10:00',
          end_time: '2025-04-04T15:12:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20081,
          name_for_reservation: 'Валентина',
          num_people: 7,
          phone_number: '+79540155716',
          status: 'Новая',
          seating_time: '2025-04-04T20:01:00+10:00',
          end_time: '2025-04-04T22:36:00+10:00'
        },
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
          id: 20083,
          name_for_reservation: 'Василий',
          num_people: 9,
          phone_number: '+79218742694',
          status: 'Открыт',
          seating_time: '2025-04-04T13:59:00+10:00',
          end_time: '2025-04-04T14:42:00+10:00'
        },
        {
          id: 20084,
          name_for_reservation: 'Иван',
          num_people: 6,
          phone_number: '+79509884715',
          status: 'Новая',
          seating_time: '2025-04-04T15:08:00+10:00',
          end_time: '2025-04-04T16:19:00+10:00'
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
          id: 'a8711c36-6b72-4822-bcef-dc7b2900c8f8',
          status: 'Banquet',
          start_time: '2025-04-04T16:04:00+10:00',
          end_time: '2025-04-04T17:20:00+10:00'
        },
        {
          id: '23c37822-202c-4ec7-af88-3193f34e9e0d',
          status: 'Banquet',
          start_time: '2025-04-04T15:18:00+10:00',
          end_time: '2025-04-04T16:38:00+10:00'
        },
        {
          id: '5bc9d177-b019-4f9f-86fa-e11fee65e681',
          status: 'Bill',
          start_time: '2025-04-04T12:19:00+10:00',
          end_time: '2025-04-04T13:22:00+10:00'
        },
        {
          id: '09625003-e660-4a6a-aee5-23246d690ff4',
          status: 'New',
          start_time: '2025-04-04T18:10:00+10:00',
          end_time: '2025-04-04T18:48:00+10:00'
        },
        {
          id: '6b7e402a-04fa-4567-ab3a-a20d4a5eaab5',
          status: 'Banquet',
          start_time: '2025-04-04T17:18:00+10:00',
          end_time: '2025-04-04T19:36:00+10:00'
        },
        {
          id: 'eb0cab58-456f-4904-b634-1d2646fcfe38',
          status: 'Closed',
          start_time: '2025-04-04T16:57:00+10:00',
          end_time: '2025-04-04T17:33:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20086,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79395577611',
          status: 'Открыт',
          seating_time: '2025-04-04T21:38:00+10:00',
          end_time: '2025-04-04T23:22:00+10:00'
        },
        {
          id: 20087,
          name_for_reservation: 'Светлана',
          num_people: 1,
          phone_number: '+79312946675',
          status: 'Живая очередь',
          seating_time: '2025-04-04T15:13:00+10:00',
          end_time: '2025-04-04T16:11:00+10:00'
        },
        {
          id: 20088,
          name_for_reservation: 'Роман',
          num_people: 2,
          phone_number: '+79651433948',
          status: 'Живая очередь',
          seating_time: '2025-04-04T22:28:00+10:00',
          end_time: '2025-04-04T23:00:00+10:00'
        },
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
          id: 20090,
          name_for_reservation: 'Евгений',
          num_people: 1,
          phone_number: '+79622277252',
          status: 'Новая',
          seating_time: '2025-04-04T11:28:00+10:00',
          end_time: '2025-04-04T13:54:00+10:00'
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
          id: 'a7c15713-b505-45a6-82cb-cc6eba4ac031',
          status: 'New',
          start_time: '2025-04-04T13:35:00+10:00',
          end_time: '2025-04-04T14:09:00+10:00'
        },
        {
          id: '092b7aab-6e09-4122-b564-21f4554943c6',
          status: 'Closed',
          start_time: '2025-04-04T17:29:00+10:00',
          end_time: '2025-04-04T17:59:00+10:00'
        },
        {
          id: 'c87aa2bf-c5c2-498f-90c9-adbfd01d2ecf',
          status: 'Closed',
          start_time: '2025-04-04T16:43:00+10:00',
          end_time: '2025-04-04T19:22:00+10:00'
        },
        {
          id: 'fec40d06-6cb9-453e-b51e-f47a4b7e15d6',
          status: 'Bill',
          start_time: '2025-04-04T15:41:00+10:00',
          end_time: '2025-04-04T18:05:00+10:00'
        },
        {
          id: '15b2ed8c-c4fe-4bc6-8f86-62c44b65b5f0',
          status: 'Closed',
          start_time: '2025-04-04T12:31:00+10:00',
          end_time: '2025-04-04T14:43:00+10:00'
        },
        {
          id: '8d59138e-fb00-4b0b-abe3-41a0d1013b84',
          status: 'Bill',
          start_time: '2025-04-04T16:47:00+10:00',
          end_time: '2025-04-04T17:59:00+10:00'
        },
        {
          id: 'b78fc3d3-f64f-45b0-b125-404e8fc8c893',
          status: 'Closed',
          start_time: '2025-04-04T11:41:00+10:00',
          end_time: '2025-04-04T14:07:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20091,
          name_for_reservation: 'Татьяна',
          num_people: 2,
          phone_number: '+79346199990',
          status: 'Заявка',
          seating_time: '2025-04-04T22:44:00+10:00',
          end_time: '2025-04-04T23:33:00+10:00'
        },
        {
          id: 20092,
          name_for_reservation: 'Лариса',
          num_people: 1,
          phone_number: '+79245572671',
          status: 'Живая очередь',
          seating_time: '2025-04-04T11:14:00+10:00',
          end_time: '2025-04-04T12:36:00+10:00'
        },
        {
          id: 20093,
          name_for_reservation: 'Анна',
          num_people: 1,
          phone_number: '+79400736748',
          status: 'Новая',
          seating_time: '2025-04-04T18:05:00+10:00',
          end_time: '2025-04-04T19:38:00+10:00'
        },
        {
          id: 20094,
          name_for_reservation: 'Дмитрий',
          num_people: 3,
          phone_number: '+79805874935',
          status: 'Закрыт',
          seating_time: '2025-04-04T12:56:00+10:00',
          end_time: '2025-04-04T13:32:00+10:00'
        }
      ]
    },
    {
      id: 'c6a8f932-33a8-4e6c-80e7-1cc199552faa',
      capacity: 12,
      number: '106',
      zone: '2 этаж',
      orders: [
        {
          id: 'f5950ef8-d7ef-46a5-ad06-c603c040fc98',
          status: 'Banquet',
          start_time: '2025-04-04T20:57:00+10:00',
          end_time: '2025-04-04T22:26:00+10:00'
        },
        {
          id: '76d2a57e-e537-483b-8d48-b76e9c240f33',
          status: 'Bill',
          start_time: '2025-04-04T18:29:00+10:00',
          end_time: '2025-04-04T19:45:00+10:00'
        },
        {
          id: '836395f1-bd7c-4def-869f-6041c748214e',
          status: 'New',
          start_time: '2025-04-04T11:44:00+10:00',
          end_time: '2025-04-04T14:35:00+10:00'
        },
        {
          id: '3d656e05-0eed-4367-8580-bfab20d69b07',
          status: 'New',
          start_time: '2025-04-04T11:06:00+10:00',
          end_time: '2025-04-04T12:39:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20095,
          name_for_reservation: 'Василий',
          num_people: 5,
          phone_number: '+79507267459',
          status: 'Живая очередь',
          seating_time: '2025-04-04T14:05:00+10:00',
          end_time: '2025-04-04T14:52:00+10:00'
        },
        {
          id: 20096,
          name_for_reservation: 'Татьяна',
          num_people: 2,
          phone_number: '+79421010719',
          status: 'Заявка',
          seating_time: '2025-04-04T17:20:00+10:00',
          end_time: '2025-04-04T18:34:00+10:00'
        },
        {
          id: 20097,
          name_for_reservation: 'Василий',
          num_people: 5,
          phone_number: '+79873287189',
          status: 'Открыт',
          seating_time: '2025-04-04T19:16:00+10:00',
          end_time: '2025-04-04T21:51:00+10:00'
        },
        {
          id: 20098,
          name_for_reservation: 'Алина',
          num_people: 8,
          phone_number: '+79517259300',
          status: 'Новая',
          seating_time: '2025-04-04T18:40:00+10:00',
          end_time: '2025-04-04T21:14:00+10:00'
        },
        {
          id: 20099,
          name_for_reservation: 'Татьяна',
          num_people: 9,
          phone_number: '+79550883540',
          status: 'Закрыт',
          seating_time: '2025-04-04T11:03:00+10:00',
          end_time: '2025-04-04T13:52:00+10:00'
        },
        {
          id: 20100,
          name_for_reservation: 'Ольга',
          num_people: 11,
          phone_number: '+79665747802',
          status: 'Живая очередь',
          seating_time: '2025-04-04T13:18:00+10:00',
          end_time: '2025-04-04T16:16:00+10:00'
        }
      ]
    },
    {
      id: 'be12bd11-7fa1-4f05-8c8a-fa93fada5120',
      capacity: 4,
      number: '107',
      zone: '2 этаж',
      orders: [
        {
          id: '7faaf783-e921-46ad-a384-b3e58f898983',
          status: 'Banquet',
          start_time: '2025-04-04T21:40:00+10:00',
          end_time: '2025-04-04T22:19:00+10:00'
        },
        {
          id: '0a2f2048-803a-42c7-892d-1c695ae15e41',
          status: 'Banquet',
          start_time: '2025-04-04T21:50:00+10:00',
          end_time: '2025-04-04T23:00:00+10:00'
        },
        {
          id: '1431dc68-6671-4f24-94e6-000bcf775328',
          status: 'New',
          start_time: '2025-04-04T14:34:00+10:00',
          end_time: '2025-04-04T17:04:00+10:00'
        },
        {
          id: 'c5de9330-1781-41bd-a0ce-ce3cdabb56e7',
          status: 'New',
          start_time: '2025-04-04T17:26:00+10:00',
          end_time: '2025-04-04T19:56:00+10:00'
        },
        {
          id: '587b020e-d2e5-4189-8ef9-e5f91921aa63',
          status: 'Bill',
          start_time: '2025-04-04T19:53:00+10:00',
          end_time: '2025-04-04T21:13:00+10:00'
        },
        {
          id: '4942ecf4-2081-4c0a-a421-26e2651c434d',
          status: 'New',
          start_time: '2025-04-04T15:36:00+10:00',
          end_time: '2025-04-04T18:18:00+10:00'
        },
        {
          id: '2fddff52-10a2-4129-8056-d248e5265d1c',
          status: 'Closed',
          start_time: '2025-04-04T11:37:00+10:00',
          end_time: '2025-04-04T13:39:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20101,
          name_for_reservation: 'Валентина',
          num_people: 1,
          phone_number: '+79948675653',
          status: 'Закрыт',
          seating_time: '2025-04-04T12:35:00+10:00',
          end_time: '2025-04-04T13:15:00+10:00'
        },
        {
          id: 20102,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79227724636',
          status: 'Заявка',
          seating_time: '2025-04-04T17:10:00+10:00',
          end_time: '2025-04-04T19:13:00+10:00'
        },
        {
          id: 20103,
          name_for_reservation: 'Роман',
          num_people: 4,
          phone_number: '+79350939790',
          status: 'Заявка',
          seating_time: '2025-04-04T19:38:00+10:00',
          end_time: '2025-04-04T21:24:00+10:00'
        },
        {
          id: 20104,
          name_for_reservation: 'Сергей',
          num_people: 1,
          phone_number: '+79167094224',
          status: 'Открыт',
          seating_time: '2025-04-04T15:04:00+10:00',
          end_time: '2025-04-04T16:01:00+10:00'
        },
        {
          id: 20105,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79920362537',
          status: 'Закрыт',
          seating_time: '2025-04-04T16:11:00+10:00',
          end_time: '2025-04-04T17:54:00+10:00'
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
        },
        {
          id: '0b032cba-6578-4647-a301-af0b8c95e87d',
          status: 'Banquet',
          start_time: '2025-04-04T21:59:00+10:00',
          end_time: '2025-04-04T23:13:00+10:00'
        },
        {
          id: '12fb22ae-3461-4bed-a011-7895326b49e9',
          status: 'New',
          start_time: '2025-04-04T11:16:00+10:00',
          end_time: '2025-04-04T13:20:00+10:00'
        },
        {
          id: 'c471a643-39e6-4d5e-8e0f-6d71b28884b8',
          status: 'Closed',
          start_time: '2025-04-04T12:06:00+10:00',
          end_time: '2025-04-04T13:59:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20106,
          name_for_reservation: 'Григорий',
          num_people: 3,
          phone_number: '+79726853364',
          status: 'Заявка',
          seating_time: '2025-04-04T15:28:00+10:00',
          end_time: '2025-04-04T16:15:00+10:00'
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
          id: 20108,
          name_for_reservation: 'Андрей',
          num_people: 5,
          phone_number: '+79903651660',
          status: 'Живая очередь',
          seating_time: '2025-04-04T16:29:00+10:00',
          end_time: '2025-04-04T18:06:00+10:00'
        },
        {
          id: 20109,
          name_for_reservation: 'Светлана',
          num_people: 4,
          phone_number: '+79499043884',
          status: 'Закрыт',
          seating_time: '2025-04-04T21:19:00+10:00',
          end_time: '2025-04-04T22:27:00+10:00'
        },
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
          id: 20111,
          name_for_reservation: 'Наталья',
          num_people: 1,
          phone_number: '+79337986158',
          status: 'Открыт',
          seating_time: '2025-04-04T19:38:00+10:00',
          end_time: '2025-04-04T20:50:00+10:00'
        }
      ]
    },
    {
      id: 'a9178b1e-829b-4711-9781-9e29985beb44',
      capacity: 10,
      number: '109',
      zone: '2 этаж',
      orders: [
        {
          id: '0ca297f3-7a94-4e76-9a43-24c2530a5d5a',
          status: 'Banquet',
          start_time: '2025-04-04T19:11:00+10:00',
          end_time: '2025-04-04T22:05:00+10:00'
        },
        {
          id: '703024f8-0983-44a8-b74b-a2b8d9ccef8a',
          status: 'Banquet',
          start_time: '2025-04-04T17:12:00+10:00',
          end_time: '2025-04-04T17:51:00+10:00'
        },
        {
          id: '0439eac2-4da6-41e3-ad28-30ecee2f6eef',
          status: 'Bill',
          start_time: '2025-04-04T19:17:00+10:00',
          end_time: '2025-04-04T21:23:00+10:00'
        },
        {
          id: '0fa40a21-fece-4587-b089-e2c88b8a5282',
          status: 'Closed',
          start_time: '2025-04-04T20:19:00+10:00',
          end_time: '2025-04-04T23:00:00+10:00'
        },
        {
          id: 'd66fabd8-076f-4816-8533-880d1fe7e4d5',
          status: 'Bill',
          start_time: '2025-04-04T11:54:00+10:00',
          end_time: '2025-04-04T14:32:00+10:00'
        }
      ],
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
        },
        {
          id: 20114,
          name_for_reservation: 'Ксения',
          num_people: 9,
          phone_number: '+79608569429',
          status: 'Закрыт',
          seating_time: '2025-04-04T22:30:00+10:00',
          end_time: '2025-04-04T23:12:00+10:00'
        },
        {
          id: 20115,
          name_for_reservation: 'Евгений',
          num_people: 4,
          phone_number: '+79138020763',
          status: 'Заявка',
          seating_time: '2025-04-04T11:41:00+10:00',
          end_time: '2025-04-04T13:52:00+10:00'
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
          id: '506f2b95-bb0a-4933-8934-b4e87cdceba5',
          status: 'Closed',
          start_time: '2025-04-04T18:31:00+10:00',
          end_time: '2025-04-04T20:44:00+10:00'
        },
        {
          id: '5ad0bb0b-47c2-4259-8a52-76db73e9da81',
          status: 'New',
          start_time: '2025-04-04T13:37:00+10:00',
          end_time: '2025-04-04T15:55:00+10:00'
        },
        {
          id: '6b5bfb41-7b7a-4d76-b692-0d035b2be879',
          status: 'Banquet',
          start_time: '2025-04-04T21:40:00+10:00',
          end_time: '2025-04-04T23:22:00+10:00'
        },
        {
          id: '30dcdac0-32fb-4a4f-978c-90aa32ea02e3',
          status: 'New',
          start_time: '2025-04-04T11:31:00+10:00',
          end_time: '2025-04-04T13:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20116,
          name_for_reservation: 'Роман',
          num_people: 3,
          phone_number: '+79832139183',
          status: 'Закрыт',
          seating_time: '2025-04-04T19:16:00+10:00',
          end_time: '2025-04-04T20:36:00+10:00'
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
          id: 20118,
          name_for_reservation: 'Василий',
          num_people: 3,
          phone_number: '+79711797777',
          status: 'Новая',
          seating_time: '2025-04-04T15:19:00+10:00',
          end_time: '2025-04-04T16:06:00+10:00'
        },
        {
          id: 20119,
          name_for_reservation: 'Евгений',
          num_people: 3,
          phone_number: '+79873748200',
          status: 'Заявка',
          seating_time: '2025-04-04T20:46:00+10:00',
          end_time: '2025-04-04T22:53:00+10:00'
        },
        {
          id: 20120,
          name_for_reservation: 'Александр',
          num_people: 1,
          phone_number: '+79460029752',
          status: 'Живая очередь',
          seating_time: '2025-04-04T13:31:00+10:00',
          end_time: '2025-04-04T14:22:00+10:00'
        },
        {
          id: 20121,
          name_for_reservation: 'Аркадий',
          num_people: 2,
          phone_number: '+79466298850',
          status: 'Закрыт',
          seating_time: '2025-04-04T18:12:00+10:00',
          end_time: '2025-04-04T21:01:00+10:00'
        },
        {
          id: 20122,
          name_for_reservation: 'Ольга',
          num_people: 3,
          phone_number: '+79238597162',
          status: 'Заявка',
          seating_time: '2025-04-04T13:48:00+10:00',
          end_time: '2025-04-04T16:28:00+10:00'
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
        },
        {
          id: 'cc7bc33a-ca8c-4b87-a850-7c676fc644e3',
          status: 'Bill',
          start_time: '2025-04-04T15:24:00+10:00',
          end_time: '2025-04-04T16:31:00+10:00'
        },
        {
          id: 'a8e9e2e2-1c87-456c-8f18-c079e13e935c',
          status: 'Closed',
          start_time: '2025-04-04T15:16:00+10:00',
          end_time: '2025-04-04T16:42:00+10:00'
        },
        {
          id: '9e649476-6ab7-4f9a-8e76-879a69391637',
          status: 'Bill',
          start_time: '2025-04-04T23:06:00+10:00',
          end_time: '2025-04-04T23:36:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20123,
          name_for_reservation: 'Сергей',
          num_people: 3,
          phone_number: '+79456412340',
          status: 'Закрыт',
          seating_time: '2025-04-04T22:15:00+10:00',
          end_time: '2025-04-04T23:05:00+10:00'
        },
        {
          id: 20124,
          name_for_reservation: 'Ксения',
          num_people: 2,
          phone_number: '+79193603391',
          status: 'Открыт',
          seating_time: '2025-04-04T20:26:00+10:00',
          end_time: '2025-04-04T21:57:00+10:00'
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
          id: 20126,
          name_for_reservation: 'Мария',
          num_people: 4,
          phone_number: '+79337650500',
          status: 'Новая',
          seating_time: '2025-04-04T17:46:00+10:00',
          end_time: '2025-04-04T18:16:00+10:00'
        },
        {
          id: 20127,
          name_for_reservation: 'Геннадий',
          num_people: 6,
          phone_number: '+79669534423',
          status: 'Новая',
          seating_time: '2025-04-04T17:55:00+10:00',
          end_time: '2025-04-04T19:21:00+10:00'
        },
        {
          id: 20128,
          name_for_reservation: 'Ольга',
          num_people: 6,
          phone_number: '+79231992540',
          status: 'Открыт',
          seating_time: '2025-04-04T16:30:00+10:00',
          end_time: '2025-04-04T17:45:00+10:00'
        },
        {
          id: 20129,
          name_for_reservation: 'Юлия',
          num_people: 1,
          phone_number: '+79663529667',
          status: 'Заявка',
          seating_time: '2025-04-04T11:53:00+10:00',
          end_time: '2025-04-04T13:56:00+10:00'
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
          id: '6792006c-4b38-4255-aac8-c2205724c991',
          status: 'Banquet',
          start_time: '2025-04-04T19:29:00+10:00',
          end_time: '2025-04-04T20:59:00+10:00'
        },
        {
          id: '20697ea2-bb2b-483e-ab1f-9eb1109c37fd',
          status: 'Banquet',
          start_time: '2025-04-04T13:47:00+10:00',
          end_time: '2025-04-04T16:17:00+10:00'
        },
        {
          id: '14f04009-6053-482d-9ada-786bccec69c2',
          status: 'New',
          start_time: '2025-04-04T16:18:00+10:00',
          end_time: '2025-04-04T19:17:00+10:00'
        },
        {
          id: '5981a557-080c-40b6-905b-cc3069ec54ca',
          status: 'New',
          start_time: '2025-04-04T17:44:00+10:00',
          end_time: '2025-04-04T20:33:00+10:00'
        },
        {
          id: 'ad1c851e-0306-498f-b38b-ea183efb46ae',
          status: 'Closed',
          start_time: '2025-04-04T21:26:00+10:00',
          end_time: '2025-04-04T23:27:00+10:00'
        },
        {
          id: '43a2a046-1597-4916-9598-004dfc154b54',
          status: 'Bill',
          start_time: '2025-04-04T16:59:00+10:00',
          end_time: '2025-04-04T17:57:00+10:00'
        },
        {
          id: 'ff7e60a3-7cac-4dd9-baca-f07f8c049ee6',
          status: 'Banquet',
          start_time: '2025-04-04T13:56:00+10:00',
          end_time: '2025-04-04T14:42:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20130,
          name_for_reservation: 'Наталья',
          num_people: 4,
          phone_number: '+79557186929',
          status: 'Живая очередь',
          seating_time: '2025-04-04T20:27:00+10:00',
          end_time: '2025-04-04T23:16:00+10:00'
        },
        {
          id: 20131,
          name_for_reservation: 'Дмитрий',
          num_people: 3,
          phone_number: '+79582777462',
          status: 'Живая очередь',
          seating_time: '2025-04-04T15:17:00+10:00',
          end_time: '2025-04-04T15:55:00+10:00'
        },
        {
          id: 20132,
          name_for_reservation: 'Татьяна',
          num_people: 3,
          phone_number: '+79945515045',
          status: 'Закрыт',
          seating_time: '2025-04-04T13:54:00+10:00',
          end_time: '2025-04-04T14:58:00+10:00'
        },
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
          id: 20134,
          name_for_reservation: 'Сергей',
          num_people: 1,
          phone_number: '+79286411195',
          status: 'Открыт',
          seating_time: '2025-04-04T18:04:00+10:00',
          end_time: '2025-04-04T19:35:00+10:00'
        },
        {
          id: 20135,
          name_for_reservation: 'Сергей',
          num_people: 3,
          phone_number: '+79554838236',
          status: 'Закрыт',
          seating_time: '2025-04-04T19:23:00+10:00',
          end_time: '2025-04-04T22:13:00+10:00'
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
          id: 'a3357c48-2786-4212-9461-4dd4ca314eed',
          status: 'Bill',
          start_time: '2025-04-04T14:29:00+10:00',
          end_time: '2025-04-04T17:23:00+10:00'
        },
        {
          id: 'db2699d2-61c1-4743-8fd1-ad8395ddf6cc',
          status: 'New',
          start_time: '2025-04-04T11:39:00+10:00',
          end_time: '2025-04-04T14:04:00+10:00'
        },
        {
          id: '0df0c76a-1a23-49e1-b8aa-b0cc1eaf61e6',
          status: 'Banquet',
          start_time: '2025-04-04T14:45:00+10:00',
          end_time: '2025-04-04T16:32:00+10:00'
        },
        {
          id: 'af7bddd0-e208-49dd-808f-f5877d333c99',
          status: 'Bill',
          start_time: '2025-04-04T14:20:00+10:00',
          end_time: '2025-04-04T16:39:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20136,
          name_for_reservation: 'Ксения',
          num_people: 2,
          phone_number: '+79393655709',
          status: 'Новая',
          seating_time: '2025-04-04T11:50:00+10:00',
          end_time: '2025-04-04T13:46:00+10:00'
        },
        {
          id: 20137,
          name_for_reservation: 'Роман',
          num_people: 1,
          phone_number: '+79744705208',
          status: 'Новая',
          seating_time: '2025-04-04T14:32:00+10:00',
          end_time: '2025-04-04T15:29:00+10:00'
        },
        {
          id: 20138,
          name_for_reservation: 'Василий',
          num_people: 1,
          phone_number: '+79883493122',
          status: 'Новая',
          seating_time: '2025-04-04T18:59:00+10:00',
          end_time: '2025-04-04T20:55:00+10:00'
        },
        {
          id: 20139,
          name_for_reservation: 'Татьяна',
          num_people: 2,
          phone_number: '+79974400643',
          status: 'Открыт',
          seating_time: '2025-04-04T23:02:00+10:00',
          end_time: '2025-04-04T23:35:00+10:00'
        },
        {
          id: 20140,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79830348956',
          status: 'Заявка',
          seating_time: '2025-04-04T22:18:00+10:00',
          end_time: '2025-04-04T23:07:00+10:00'
        }
      ]
    },
    {
      id: '122a6e9c-4061-4663-a493-88aef91b6cc9',
      capacity: 8,
      number: 'B4',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '670fa1d0-552e-4a56-80bd-21c6a0e3ae58',
          status: 'Closed',
          start_time: '2025-04-04T18:56:00+10:00',
          end_time: '2025-04-04T20:12:00+10:00'
        },
        {
          id: '9d2f34c6-254f-4163-b623-e7f20a5f0f02',
          status: 'New',
          start_time: '2025-04-04T18:42:00+10:00',
          end_time: '2025-04-04T19:41:00+10:00'
        },
        {
          id: '6c45b3a1-571a-4c5a-be50-e8f04bd13d06',
          status: 'New',
          start_time: '2025-04-04T13:53:00+10:00',
          end_time: '2025-04-04T15:49:00+10:00'
        },
        {
          id: '42e8ad0a-2706-4c15-9fe9-18fb3e9fa28d',
          status: 'Closed',
          start_time: '2025-04-04T17:23:00+10:00',
          end_time: '2025-04-04T19:14:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20141,
          name_for_reservation: 'Ксения',
          num_people: 5,
          phone_number: '+79734810986',
          status: 'Заявка',
          seating_time: '2025-04-04T11:22:00+10:00',
          end_time: '2025-04-04T12:57:00+10:00'
        },
        {
          id: 20142,
          name_for_reservation: 'Сергей',
          num_people: 4,
          phone_number: '+79788482064',
          status: 'Заявка',
          seating_time: '2025-04-04T18:41:00+10:00',
          end_time: '2025-04-04T19:51:00+10:00'
        },
        {
          id: 20143,
          name_for_reservation: 'Александр',
          num_people: 8,
          phone_number: '+79859989077',
          status: 'Живая очередь',
          seating_time: '2025-04-04T22:30:00+10:00',
          end_time: '2025-04-04T23:28:00+10:00'
        },
        {
          id: 20144,
          name_for_reservation: 'Алина',
          num_people: 3,
          phone_number: '+79953660297',
          status: 'Новая',
          seating_time: '2025-04-04T16:43:00+10:00',
          end_time: '2025-04-04T17:59:00+10:00'
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
          id: 'da8212e4-7b12-421e-94ed-7e67277b8a7b',
          status: 'Bill',
          start_time: '2025-04-04T19:31:00+10:00',
          end_time: '2025-04-04T21:51:00+10:00'
        },
        {
          id: 'dc479bae-61f1-4c5a-b7a4-7ca7fb70e749',
          status: 'New',
          start_time: '2025-04-04T16:46:00+10:00',
          end_time: '2025-04-04T19:08:00+10:00'
        },
        {
          id: '6c0e9f3d-73d4-442d-a420-84319fdb7f66',
          status: 'Closed',
          start_time: '2025-04-04T13:12:00+10:00',
          end_time: '2025-04-04T14:46:00+10:00'
        },
        {
          id: '418b4e80-49ce-42e4-bea3-a788b42b07c8',
          status: 'New',
          start_time: '2025-04-04T21:39:00+10:00',
          end_time: '2025-04-04T23:21:00+10:00'
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
        },
        {
          id: 20147,
          name_for_reservation: 'Василий',
          num_people: 6,
          phone_number: '+79138389708',
          status: 'Заявка',
          seating_time: '2025-04-04T14:07:00+10:00',
          end_time: '2025-04-04T14:40:00+10:00'
        },
        {
          id: 20148,
          name_for_reservation: 'Валентина',
          num_people: 1,
          phone_number: '+79519472469',
          status: 'Закрыт',
          seating_time: '2025-04-04T16:39:00+10:00',
          end_time: '2025-04-04T17:12:00+10:00'
        },
        {
          id: 20149,
          name_for_reservation: 'Ксения',
          num_people: 4,
          phone_number: '+79469365897',
          status: 'Закрыт',
          seating_time: '2025-04-04T16:33:00+10:00',
          end_time: '2025-04-04T18:22:00+10:00'
        },
        {
          id: 20150,
          name_for_reservation: 'Сергей',
          num_people: 5,
          phone_number: '+79614193709',
          status: 'Новая',
          seating_time: '2025-04-04T15:03:00+10:00',
          end_time: '2025-04-04T15:54:00+10:00'
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
        },
        {
          id: '7e58238b-475a-4b2a-a556-e5907c2f0af5',
          status: 'Closed',
          start_time: '2025-04-04T17:25:00+10:00',
          end_time: '2025-04-04T18:01:00+10:00'
        },
        {
          id: '42a41571-5784-4017-bc97-f253d442a5a0',
          status: 'Bill',
          start_time: '2025-04-04T16:07:00+10:00',
          end_time: '2025-04-04T18:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20151,
          name_for_reservation: 'Александр',
          num_people: 9,
          phone_number: '+79566057672',
          status: 'Открыт',
          seating_time: '2025-04-04T17:17:00+10:00',
          end_time: '2025-04-04T17:56:00+10:00'
        },
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
        },
        {
          id: 20154,
          name_for_reservation: 'Татьяна',
          num_people: 9,
          phone_number: '+79164181194',
          status: 'Живая очередь',
          seating_time: '2025-04-04T14:33:00+10:00',
          end_time: '2025-04-04T15:26:00+10:00'
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
          id: 'd49b88e2-5245-4be7-b34e-9a0d9cca30bd',
          status: 'New',
          start_time: '2025-04-04T21:50:00+10:00',
          end_time: '2025-04-04T23:03:00+10:00'
        },
        {
          id: 'b985e9a9-1f54-4bb5-ad5f-8abb53ed2f86',
          status: 'Bill',
          start_time: '2025-04-04T21:25:00+10:00',
          end_time: '2025-04-04T22:37:00+10:00'
        },
        {
          id: 'bf702ebf-01b8-4140-9675-a632544f9431',
          status: 'New',
          start_time: '2025-04-04T19:04:00+10:00',
          end_time: '2025-04-04T21:59:00+10:00'
        },
        {
          id: '482a511e-15c6-430b-a3c5-a7f46cea4c88',
          status: 'Banquet',
          start_time: '2025-04-04T11:03:00+10:00',
          end_time: '2025-04-04T12:55:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20155,
          name_for_reservation: 'Аркадий',
          num_people: 1,
          phone_number: '+79425047538',
          status: 'Новая',
          seating_time: '2025-04-04T14:34:00+10:00',
          end_time: '2025-04-04T17:24:00+10:00'
        },
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
          id: 20157,
          name_for_reservation: 'Евгения',
          num_people: 8,
          phone_number: '+79512969549',
          status: 'Живая очередь',
          seating_time: '2025-04-04T15:17:00+10:00',
          end_time: '2025-04-04T16:01:00+10:00'
        },
        {
          id: 20158,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79864415903',
          status: 'Новая',
          seating_time: '2025-04-04T17:57:00+10:00',
          end_time: '2025-04-04T20:34:00+10:00'
        },
        {
          id: 20159,
          name_for_reservation: 'Роман',
          num_people: 8,
          phone_number: '+79182248080',
          status: 'Новая',
          seating_time: '2025-04-04T17:21:00+10:00',
          end_time: '2025-04-04T18:20:00+10:00'
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
          id: 'a10082ff-bc6f-43af-b0e6-97ca12129fbe',
          status: 'Bill',
          start_time: '2025-04-04T21:39:00+10:00',
          end_time: '2025-04-04T23:13:00+10:00'
        },
        {
          id: '2169c0fd-a457-4ec2-ae67-a26bce1bd4df',
          status: 'New',
          start_time: '2025-04-04T18:42:00+10:00',
          end_time: '2025-04-04T20:39:00+10:00'
        },
        {
          id: 'b91b8c4d-222c-46fd-9cbf-10906eb77f5b',
          status: 'Closed',
          start_time: '2025-04-04T18:41:00+10:00',
          end_time: '2025-04-04T21:09:00+10:00'
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
        },
        {
          id: 20163,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79115250135',
          status: 'Открыт',
          seating_time: '2025-04-04T13:09:00+10:00',
          end_time: '2025-04-04T15:34:00+10:00'
        },
        {
          id: 20164,
          name_for_reservation: 'Наталья',
          num_people: 1,
          phone_number: '+79185937249',
          status: 'Открыт',
          seating_time: '2025-04-04T20:47:00+10:00',
          end_time: '2025-04-04T21:39:00+10:00'
        }
      ]
    },
    {
      id: 'ec78a7ea-3be6-4414-8f18-03c89e1e25b5',
      capacity: 8,
      number: 'B9',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '37046573-84b0-4372-99cf-3b32a8f30e1f',
          status: 'Closed',
          start_time: '2025-04-04T20:52:00+10:00',
          end_time: '2025-04-04T22:55:00+10:00'
        },
        {
          id: 'ce1f99a4-821e-47c6-90c1-062af6c70459',
          status: 'New',
          start_time: '2025-04-04T22:52:00+10:00',
          end_time: '2025-04-04T23:24:00+10:00'
        },
        {
          id: '50b4662b-a58d-46de-a83f-b1c05115636a',
          status: 'Banquet',
          start_time: '2025-04-04T21:38:00+10:00',
          end_time: '2025-04-04T23:40:00+10:00'
        },
        {
          id: '5da746c6-4d96-469e-b74b-fea9d95de387',
          status: 'Bill',
          start_time: '2025-04-04T18:54:00+10:00',
          end_time: '2025-04-04T20:17:00+10:00'
        },
        {
          id: '217dd1f1-b8d6-4fe7-9ec8-4ddf6df19980',
          status: 'Banquet',
          start_time: '2025-04-04T19:18:00+10:00',
          end_time: '2025-04-04T20:10:00+10:00'
        },
        {
          id: 'ee06129d-2885-481b-8254-079ec1313a00',
          status: 'Bill',
          start_time: '2025-04-04T16:08:00+10:00',
          end_time: '2025-04-04T18:42:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20165,
          name_for_reservation: 'Александр',
          num_people: 2,
          phone_number: '+79755868806',
          status: 'Живая очередь',
          seating_time: '2025-04-04T20:00:00+10:00',
          end_time: '2025-04-04T22:23:00+10:00'
        },
        {
          id: 20166,
          name_for_reservation: 'Ольга',
          num_people: 7,
          phone_number: '+79949759902',
          status: 'Закрыт',
          seating_time: '2025-04-04T14:22:00+10:00',
          end_time: '2025-04-04T14:57:00+10:00'
        },
        {
          id: 20167,
          name_for_reservation: 'Наталья',
          num_people: 5,
          phone_number: '+79488927915',
          status: 'Закрыт',
          seating_time: '2025-04-04T20:01:00+10:00',
          end_time: '2025-04-04T22:25:00+10:00'
        },
        {
          id: 20168,
          name_for_reservation: 'Татьяна',
          num_people: 6,
          phone_number: '+79508683347',
          status: 'Живая очередь',
          seating_time: '2025-04-04T13:08:00+10:00',
          end_time: '2025-04-04T14:25:00+10:00'
        }
      ]
    },
    {
      id: 'e9b3acf7-2ba1-4cce-aaaa-02045598f087',
      capacity: 10,
      number: 'B10',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'eeeb44b6-25e8-4207-8eb7-3d306f43ade2',
          status: 'Banquet',
          start_time: '2025-04-04T19:45:00+10:00',
          end_time: '2025-04-04T20:31:00+10:00'
        },
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
        },
        {
          id: '6e86d8d3-23bd-48c2-ac42-1662091daf43',
          status: 'Bill',
          start_time: '2025-04-04T11:53:00+10:00',
          end_time: '2025-04-04T13:13:00+10:00'
        },
        {
          id: '582a4076-9c00-4545-8302-03d367104e89',
          status: 'New',
          start_time: '2025-04-04T19:31:00+10:00',
          end_time: '2025-04-04T21:32:00+10:00'
        },
        {
          id: 'f81faa46-4db0-45e4-a5a4-eafbac858082',
          status: 'Bill',
          start_time: '2025-04-04T20:35:00+10:00',
          end_time: '2025-04-04T23:14:00+10:00'
        },
        {
          id: '82ed800b-09a3-4a07-bca2-c48dd12fcda3',
          status: 'Banquet',
          start_time: '2025-04-04T22:54:00+10:00',
          end_time: '2025-04-04T23:37:00+10:00'
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
          id: 20170,
          name_for_reservation: 'Светлана',
          num_people: 7,
          phone_number: '+79703554486',
          status: 'Живая очередь',
          seating_time: '2025-04-04T16:28:00+10:00',
          end_time: '2025-04-04T19:25:00+10:00'
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
        },
        {
          id: 20173,
          name_for_reservation: 'Роман',
          num_people: 5,
          phone_number: '+79524057112',
          status: 'Заявка',
          seating_time: '2025-04-04T14:58:00+10:00',
          end_time: '2025-04-04T17:22:00+10:00'
        },
        {
          id: 20174,
          name_for_reservation: 'Иван',
          num_people: 4,
          phone_number: '+79815411369',
          status: 'Заявка',
          seating_time: '2025-04-04T23:07:00+10:00',
          end_time: '2025-04-04T23:38:00+10:00'
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
          id: 'df0305b1-0c57-48f9-9d87-e829c8714375',
          status: 'New',
          start_time: '2025-04-04T18:02:00+10:00',
          end_time: '2025-04-04T18:38:00+10:00'
        },
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
        },
        {
          id: '5b82027d-2aea-4c03-8aa6-ae815e223dbd',
          status: 'Bill',
          start_time: '2025-04-04T21:59:00+10:00',
          end_time: '2025-04-04T22:34:00+10:00'
        },
        {
          id: '1f0bb388-71dd-4f9d-b36e-356cbdc6bd6e',
          status: 'Closed',
          start_time: '2025-04-04T18:21:00+10:00',
          end_time: '2025-04-04T19:13:00+10:00'
        },
        {
          id: '83481fcc-7602-40b3-886b-799a2f5bde59',
          status: 'New',
          start_time: '2025-04-04T13:21:00+10:00',
          end_time: '2025-04-04T14:31:00+10:00'
        },
        {
          id: '7182d69f-acd3-47f6-98bf-f8c9375e3a0f',
          status: 'New',
          start_time: '2025-04-04T11:14:00+10:00',
          end_time: '2025-04-04T12:48:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20175,
          name_for_reservation: 'Григорий',
          num_people: 6,
          phone_number: '+79360806887',
          status: 'Заявка',
          seating_time: '2025-04-04T12:27:00+10:00',
          end_time: '2025-04-04T13:06:00+10:00'
        },
        {
          id: 20176,
          name_for_reservation: 'Ольга',
          num_people: 2,
          phone_number: '+79291152059',
          status: 'Открыт',
          seating_time: '2025-04-04T20:32:00+10:00',
          end_time: '2025-04-04T22:33:00+10:00'
        },
        {
          id: 20177,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79204390849',
          status: 'Заявка',
          seating_time: '2025-04-04T17:31:00+10:00',
          end_time: '2025-04-04T20:01:00+10:00'
        },
        {
          id: 20178,
          name_for_reservation: 'Дмитрий',
          num_people: 12,
          phone_number: '+79991793915',
          status: 'Новая',
          seating_time: '2025-04-04T20:21:00+10:00',
          end_time: '2025-04-04T21:39:00+10:00'
        },
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
          id: 20181,
          name_for_reservation: 'Анатолий',
          num_people: 5,
          phone_number: '+79670109041',
          status: 'Живая очередь',
          seating_time: '2025-04-04T20:56:00+10:00',
          end_time: '2025-04-04T23:35:00+10:00'
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
          id: '817a8596-0199-472b-862c-8fcf673372ac',
          status: 'New',
          start_time: '2025-04-04T22:35:00+10:00',
          end_time: '2025-04-04T23:06:00+10:00'
        },
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
        },
        {
          id: 'aaf859d7-2cfa-4770-8398-e9e3d4ec03a1',
          status: 'Closed',
          start_time: '2025-04-04T15:07:00+10:00',
          end_time: '2025-04-04T17:36:00+10:00'
        },
        {
          id: '1221a49a-4d99-48c7-a0c3-a384ed6f1e7c',
          status: 'Bill',
          start_time: '2025-04-04T14:03:00+10:00',
          end_time: '2025-04-04T14:45:00+10:00'
        },
        {
          id: '03c7ba08-8313-4341-a64d-501435640231',
          status: 'New',
          start_time: '2025-04-04T14:52:00+10:00',
          end_time: '2025-04-04T16:03:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20182,
          name_for_reservation: 'Ксения',
          num_people: 6,
          phone_number: '+79901243444',
          status: 'Открыт',
          seating_time: '2025-04-04T23:04:00+10:00',
          end_time: '2025-04-04T23:36:00+10:00'
        },
        {
          id: 20183,
          name_for_reservation: 'Константин',
          num_people: 4,
          phone_number: '+79422337649',
          status: 'Заявка',
          seating_time: '2025-04-04T13:20:00+10:00',
          end_time: '2025-04-04T15:07:00+10:00'
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
          id: 20185,
          name_for_reservation: 'Дмитрий',
          num_people: 10,
          phone_number: '+79633183511',
          status: 'Закрыт',
          seating_time: '2025-04-04T11:38:00+10:00',
          end_time: '2025-04-04T13:41:00+10:00'
        },
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
          id: 20187,
          name_for_reservation: 'Татьяна',
          num_people: 8,
          phone_number: '+79453081149',
          status: 'Живая очередь',
          seating_time: '2025-04-04T22:35:00+10:00',
          end_time: '2025-04-04T23:05:00+10:00'
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
        },
        {
          id: '2e19b1a9-73ee-4710-a486-1433ae4ffa6c',
          status: 'Closed',
          start_time: '2025-04-04T16:59:00+10:00',
          end_time: '2025-04-04T19:25:00+10:00'
        },
        {
          id: '962faac5-bda3-4a7c-b74d-900f76e09fec',
          status: 'New',
          start_time: '2025-04-04T16:17:00+10:00',
          end_time: '2025-04-04T17:41:00+10:00'
        },
        {
          id: '123f8f76-4150-40a5-9cc1-c65fea5003e6',
          status: 'Bill',
          start_time: '2025-04-04T16:14:00+10:00',
          end_time: '2025-04-04T17:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20189,
          name_for_reservation: 'Геннадий',
          num_people: 4,
          phone_number: '+79533273483',
          status: 'Заявка',
          seating_time: '2025-04-04T11:36:00+10:00',
          end_time: '2025-04-04T14:05:00+10:00'
        },
        {
          id: 20190,
          name_for_reservation: 'Иван',
          num_people: 4,
          phone_number: '+79142015782',
          status: 'Новая',
          seating_time: '2025-04-04T21:14:00+10:00',
          end_time: '2025-04-04T22:54:00+10:00'
        },
        {
          id: 20191,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79565227535',
          status: 'Открыт',
          seating_time: '2025-04-04T13:34:00+10:00',
          end_time: '2025-04-04T16:05:00+10:00'
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
          id: 20193,
          name_for_reservation: 'Юлия',
          num_people: 2,
          phone_number: '+79859248294',
          status: 'Закрыт',
          seating_time: '2025-04-04T12:55:00+10:00',
          end_time: '2025-04-04T15:52:00+10:00'
        },
        {
          id: 20194,
          name_for_reservation: 'Василий',
          num_people: 4,
          phone_number: '+79615264768',
          status: 'Заявка',
          seating_time: '2025-04-04T14:00:00+10:00',
          end_time: '2025-04-04T14:57:00+10:00'
        },
        {
          id: 20195,
          name_for_reservation: 'Анатолий',
          num_people: 1,
          phone_number: '+79457155262',
          status: 'Открыт',
          seating_time: '2025-04-04T19:39:00+10:00',
          end_time: '2025-04-04T20:15:00+10:00'
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
          id: 'e7ba6dd2-cfb1-402f-878a-f791c743fc5c',
          status: 'Bill',
          start_time: '2025-04-04T18:20:00+10:00',
          end_time: '2025-04-04T20:21:00+10:00'
        },
        {
          id: '0d383f9b-5938-4323-8774-19a2c1937033',
          status: 'Bill',
          start_time: '2025-04-04T16:42:00+10:00',
          end_time: '2025-04-04T17:14:00+10:00'
        },
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
        }
      ],
      reservations: [
        {
          id: 20196,
          name_for_reservation: 'Валентина',
          num_people: 6,
          phone_number: '+79967440944',
          status: 'Новая',
          seating_time: '2025-04-04T11:10:00+10:00',
          end_time: '2025-04-04T11:49:00+10:00'
        },
        {
          id: 20197,
          name_for_reservation: 'Сергей',
          num_people: 6,
          phone_number: '+79135947291',
          status: 'Закрыт',
          seating_time: '2025-04-04T14:31:00+10:00',
          end_time: '2025-04-04T16:46:00+10:00'
        },
        {
          id: 20198,
          name_for_reservation: 'Лариса',
          num_people: 6,
          phone_number: '+79888700769',
          status: 'Открыт',
          seating_time: '2025-04-04T15:47:00+10:00',
          end_time: '2025-04-04T18:00:00+10:00'
        },
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
          id: '4dbff805-80b0-4293-b2a4-761a7d8de5a5',
          status: 'New',
          start_time: '2025-04-04T19:45:00+10:00',
          end_time: '2025-04-04T20:58:00+10:00'
        },
        {
          id: '3f49a1a1-a184-40ab-a465-c9cfdb386633',
          status: 'Closed',
          start_time: '2025-04-04T22:35:00+10:00',
          end_time: '2025-04-04T23:12:00+10:00'
        },
        {
          id: 'a20789bb-91f7-48fc-8a94-5fbc3a7502a8',
          status: 'Closed',
          start_time: '2025-04-04T11:24:00+10:00',
          end_time: '2025-04-04T12:37:00+10:00'
        },
        {
          id: '53745ef8-c4d0-4689-a0e2-60aec0cdd4f4',
          status: 'Banquet',
          start_time: '2025-04-04T19:27:00+10:00',
          end_time: '2025-04-04T21:57:00+10:00'
        },
        {
          id: '7597294d-14de-404d-9949-205becd8e319',
          status: 'Bill',
          start_time: '2025-04-04T15:18:00+10:00',
          end_time: '2025-04-04T16:45:00+10:00'
        },
        {
          id: '68f4d625-4d05-4764-91d3-903fc434bce1',
          status: 'New',
          start_time: '2025-04-04T22:18:00+10:00',
          end_time: '2025-04-04T22:54:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20200,
          name_for_reservation: 'Анна',
          num_people: 3,
          phone_number: '+79209958610',
          status: 'Заявка',
          seating_time: '2025-04-04T19:05:00+10:00',
          end_time: '2025-04-04T20:16:00+10:00'
        },
        {
          id: 20201,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79411139120',
          status: 'Заявка',
          seating_time: '2025-04-04T21:37:00+10:00',
          end_time: '2025-04-04T22:39:00+10:00'
        },
        {
          id: 20202,
          name_for_reservation: 'Лариса',
          num_people: 5,
          phone_number: '+79368122472',
          status: 'Открыт',
          seating_time: '2025-04-04T12:02:00+10:00',
          end_time: '2025-04-04T14:40:00+10:00'
        },
        {
          id: 20203,
          name_for_reservation: 'Анатолий',
          num_people: 7,
          phone_number: '+79887359966',
          status: 'Заявка',
          seating_time: '2025-04-04T17:38:00+10:00',
          end_time: '2025-04-04T20:24:00+10:00'
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
          id: '6623c630-43e8-43e8-ab50-a827c22ec5ac',
          status: 'Banquet',
          start_time: '2025-04-04T17:30:00+10:00',
          end_time: '2025-04-04T18:37:00+10:00'
        },
        {
          id: '0a8b8a0d-b5d1-4f2d-8a75-3427b1a1bd89',
          status: 'New',
          start_time: '2025-04-04T14:45:00+10:00',
          end_time: '2025-04-04T15:24:00+10:00'
        },
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
        },
        {
          id: '4dca502f-c1b5-477a-914d-848d039c8ccf',
          status: 'Closed',
          start_time: '2025-04-04T15:05:00+10:00',
          end_time: '2025-04-04T16:29:00+10:00'
        },
        {
          id: '61896526-1bde-4517-aa0f-d6e34ec7d0ee',
          status: 'Banquet',
          start_time: '2025-04-04T22:35:00+10:00',
          end_time: '2025-04-04T23:08:00+10:00'
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
        },
        {
          id: 20206,
          name_for_reservation: 'Алина',
          num_people: 6,
          phone_number: '+79416822189',
          status: 'Заявка',
          seating_time: '2025-04-04T14:30:00+10:00',
          end_time: '2025-04-04T16:51:00+10:00'
        },
        {
          id: 20207,
          name_for_reservation: 'Андрей',
          num_people: 6,
          phone_number: '+79121302288',
          status: 'Открыт',
          seating_time: '2025-04-04T15:15:00+10:00',
          end_time: '2025-04-04T16:11:00+10:00'
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
          id: '053cca45-d28b-4a4a-95f0-ff925f6fb2df',
          status: 'Banquet',
          start_time: '2025-04-04T14:12:00+10:00',
          end_time: '2025-04-04T15:06:00+10:00'
        },
        {
          id: '9987b6ac-f681-4479-8dc0-c29f2dbcaf3c',
          status: 'New',
          start_time: '2025-04-04T15:28:00+10:00',
          end_time: '2025-04-04T17:06:00+10:00'
        },
        {
          id: 'ea9e5512-73eb-4148-a08f-be2a83cff4ae',
          status: 'Banquet',
          start_time: '2025-04-04T11:55:00+10:00',
          end_time: '2025-04-04T14:00:00+10:00'
        },
        {
          id: '07f8ac6e-fb2b-40a7-ac04-1f0a7c032740',
          status: 'Banquet',
          start_time: '2025-04-04T20:19:00+10:00',
          end_time: '2025-04-04T22:34:00+10:00'
        },
        {
          id: 'ae051109-be26-4f53-b3b7-f9cb26940f97',
          status: 'Banquet',
          start_time: '2025-04-04T19:58:00+10:00',
          end_time: '2025-04-04T22:54:00+10:00'
        },
        {
          id: '286777a8-e45d-427f-af8e-23e9437f30f4',
          status: 'Banquet',
          start_time: '2025-04-04T22:47:00+10:00',
          end_time: '2025-04-04T23:40:00+10:00'
        },
        {
          id: 'ea88fcaf-1460-4a95-98be-e16e61e62a80',
          status: 'Closed',
          start_time: '2025-04-04T17:59:00+10:00',
          end_time: '2025-04-04T19:18:00+10:00'
        }
      ],
      reservations: [
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
          id: 20209,
          name_for_reservation: 'Геннадий',
          num_people: 9,
          phone_number: '+79399162300',
          status: 'Открыт',
          seating_time: '2025-04-04T14:52:00+10:00',
          end_time: '2025-04-04T17:42:00+10:00'
        },
        {
          id: 20210,
          name_for_reservation: 'Ольга',
          num_people: 4,
          phone_number: '+79148625395',
          status: 'Живая очередь',
          seating_time: '2025-04-04T19:18:00+10:00',
          end_time: '2025-04-04T22:18:00+10:00'
        },
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
          id: 20212,
          name_for_reservation: 'Анна',
          num_people: 9,
          phone_number: '+79282544887',
          status: 'Открыт',
          seating_time: '2025-04-04T22:32:00+10:00',
          end_time: '2025-04-04T23:29:00+10:00'
        },
        {
          id: 20213,
          name_for_reservation: 'Александр',
          num_people: 9,
          phone_number: '+79906548794',
          status: 'Закрыт',
          seating_time: '2025-04-04T16:07:00+10:00',
          end_time: '2025-04-04T17:53:00+10:00'
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
          id: 'd463451a-c5ee-4fa3-8421-b786e4151b45',
          status: 'Closed',
          start_time: '2025-04-04T19:03:00+10:00',
          end_time: '2025-04-04T21:11:00+10:00'
        },
        {
          id: 'b7a76f8d-caf1-4320-9f23-9211a0ea862e',
          status: 'Closed',
          start_time: '2025-04-04T20:20:00+10:00',
          end_time: '2025-04-04T22:23:00+10:00'
        },
        {
          id: '3163cae6-096c-4135-926e-40df6074a1ba',
          status: 'Banquet',
          start_time: '2025-04-04T21:11:00+10:00',
          end_time: '2025-04-04T22:46:00+10:00'
        },
        {
          id: 'cec1e879-0b93-44e0-aafa-b25f5055f0f0',
          status: 'Closed',
          start_time: '2025-04-04T13:08:00+10:00',
          end_time: '2025-04-04T14:10:00+10:00'
        },
        {
          id: '26a6633d-04e0-40a0-8b45-fefda4c2bae8',
          status: 'Bill',
          start_time: '2025-04-04T17:50:00+10:00',
          end_time: '2025-04-04T19:47:00+10:00'
        },
        {
          id: '28f5319f-d632-4746-aa12-9ac075e2f8df',
          status: 'Closed',
          start_time: '2025-04-04T17:21:00+10:00',
          end_time: '2025-04-04T20:03:00+10:00'
        },
        {
          id: '4836e1c1-54fd-4b97-ac10-f6f4e59657b5',
          status: 'Banquet',
          start_time: '2025-04-04T16:15:00+10:00',
          end_time: '2025-04-04T17:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20214,
          name_for_reservation: 'Григорий',
          num_people: 3,
          phone_number: '+79682174377',
          status: 'Закрыт',
          seating_time: '2025-04-04T14:42:00+10:00',
          end_time: '2025-04-04T17:22:00+10:00'
        },
        {
          id: 20215,
          name_for_reservation: 'Анна',
          num_people: 3,
          phone_number: '+79592498728',
          status: 'Открыт',
          seating_time: '2025-04-04T11:07:00+10:00',
          end_time: '2025-04-04T12:41:00+10:00'
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
          id: 20217,
          name_for_reservation: 'Дмитрий',
          num_people: 3,
          phone_number: '+79767167462',
          status: 'Заявка',
          seating_time: '2025-04-04T11:59:00+10:00',
          end_time: '2025-04-04T13:51:00+10:00'
        },
        {
          id: 20218,
          name_for_reservation: 'Анна',
          num_people: 1,
          phone_number: '+79408388852',
          status: 'Закрыт',
          seating_time: '2025-04-04T21:00:00+10:00',
          end_time: '2025-04-04T22:18:00+10:00'
        },
        {
          id: 20219,
          name_for_reservation: 'Валентина',
          num_people: 8,
          phone_number: '+79298005812',
          status: 'Живая очередь',
          seating_time: '2025-04-04T15:41:00+10:00',
          end_time: '2025-04-04T18:19:00+10:00'
        }
      ]
    }
  ]
}
