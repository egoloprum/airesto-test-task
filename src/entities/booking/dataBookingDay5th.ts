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
      id: '96a29047-e1ce-44c8-ad9f-f5c90221a7b2',
      capacity: 6,
      number: '1',
      zone: '1 этаж',
      orders: [
        {
          id: '305e0dfc-5f53-4ab3-9ae6-6242f47f19e2',
          status: 'New',
          start_time: '2025-04-05T20:45:00+10:00',
          end_time: '2025-04-05T21:55:00+10:00'
        },
        {
          id: '56443f34-6e30-4167-9e41-34c2f50f4f63',
          status: 'Closed',
          start_time: '2025-04-05T13:19:00+10:00',
          end_time: '2025-04-05T14:32:00+10:00'
        },
        {
          id: '58df409b-a974-4a3d-ab94-7c9c30be1a32',
          status: 'New',
          start_time: '2025-04-05T16:41:00+10:00',
          end_time: '2025-04-05T18:06:00+10:00'
        },
        {
          id: '46de9461-e52c-45b7-abd2-d097a1955b8c',
          status: 'Banquet',
          start_time: '2025-04-05T14:57:00+10:00',
          end_time: '2025-04-05T15:37:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30000,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79321243434',
          status: 'Новая',
          seating_time: '2025-04-05T14:43:00+10:00',
          end_time: '2025-04-05T16:45:00+10:00'
        },
        {
          id: 30001,
          name_for_reservation: 'Роман',
          num_people: 1,
          phone_number: '+79540684540',
          status: 'Живая очередь',
          seating_time: '2025-04-05T18:03:00+10:00',
          end_time: '2025-04-05T19:28:00+10:00'
        },
        {
          id: 30002,
          name_for_reservation: 'Анатолий',
          num_people: 2,
          phone_number: '+79928529577',
          status: 'Открыт',
          seating_time: '2025-04-05T13:31:00+10:00',
          end_time: '2025-04-05T15:31:00+10:00'
        },
        {
          id: 30003,
          name_for_reservation: 'Анатолий',
          num_people: 2,
          phone_number: '+79140230431',
          status: 'Новая',
          seating_time: '2025-04-05T15:38:00+10:00',
          end_time: '2025-04-05T18:10:00+10:00'
        },
        {
          id: 30004,
          name_for_reservation: 'Роман',
          num_people: 4,
          phone_number: '+79591779405',
          status: 'Закрыт',
          seating_time: '2025-04-05T12:56:00+10:00',
          end_time: '2025-04-05T14:06:00+10:00'
        }
      ]
    },
    {
      id: '46c21059-b156-4f4a-a0e3-48e006aa2128',
      capacity: 4,
      number: '2',
      zone: '1 этаж',
      orders: [
        {
          id: '1782fbcf-130b-4a9f-89ee-5c151c44f427',
          status: 'Closed',
          start_time: '2025-04-05T18:51:00+10:00',
          end_time: '2025-04-05T20:47:00+10:00'
        },
        {
          id: '3b51255b-ce7f-429c-9c23-1dd9dc10ad8b',
          status: 'Closed',
          start_time: '2025-04-05T14:32:00+10:00',
          end_time: '2025-04-05T15:47:00+10:00'
        },
        {
          id: '09b28f15-3ed4-496a-8555-24d51a88b2f7',
          status: 'Bill',
          start_time: '2025-04-05T17:59:00+10:00',
          end_time: '2025-04-05T18:29:00+10:00'
        },
        {
          id: 'a81efb86-4b9a-4ec1-9ab2-a499bbf68aa9',
          status: 'Banquet',
          start_time: '2025-04-05T13:02:00+10:00',
          end_time: '2025-04-05T14:32:00+10:00'
        },
        {
          id: 'd94a6411-d6dd-4ddf-b20e-f96f69ebb95e',
          status: 'Banquet',
          start_time: '2025-04-05T17:38:00+10:00',
          end_time: '2025-04-05T19:39:00+10:00'
        },
        {
          id: '43498887-c53e-48e1-be6c-162f72d91666',
          status: 'Closed',
          start_time: '2025-04-05T12:39:00+10:00',
          end_time: '2025-04-05T14:22:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30005,
          name_for_reservation: 'Наталья',
          num_people: 4,
          phone_number: '+79653799904',
          status: 'Заявка',
          seating_time: '2025-04-05T11:38:00+10:00',
          end_time: '2025-04-05T13:53:00+10:00'
        },
        {
          id: 30006,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79101899512',
          status: 'Заявка',
          seating_time: '2025-04-05T17:04:00+10:00',
          end_time: '2025-04-05T20:02:00+10:00'
        },
        {
          id: 30007,
          name_for_reservation: 'Анатолий',
          num_people: 4,
          phone_number: '+79212615802',
          status: 'Заявка',
          seating_time: '2025-04-05T11:50:00+10:00',
          end_time: '2025-04-05T12:26:00+10:00'
        },
        {
          id: 30008,
          name_for_reservation: 'Роман',
          num_people: 3,
          phone_number: '+79650404049',
          status: 'Живая очередь',
          seating_time: '2025-04-05T22:11:00+10:00',
          end_time: '2025-04-05T22:58:00+10:00'
        }
      ]
    },
    {
      id: '505d0437-1c1a-4e77-8e34-9e82c3f129a0',
      capacity: 10,
      number: '3',
      zone: '1 этаж',
      orders: [
        {
          id: '6a8a3bf5-83b0-460e-80b3-e10cf458d6af',
          status: 'Banquet',
          start_time: '2025-04-05T21:38:00+10:00',
          end_time: '2025-04-05T23:20:00+10:00'
        },
        {
          id: '52d0ae67-6abe-4113-8cc7-261f907adc46',
          status: 'Closed',
          start_time: '2025-04-05T13:10:00+10:00',
          end_time: '2025-04-05T14:06:00+10:00'
        },
        {
          id: '3e964443-6c88-4f62-aaff-ca7b05aff160',
          status: 'Banquet',
          start_time: '2025-04-05T19:52:00+10:00',
          end_time: '2025-04-05T21:30:00+10:00'
        },
        {
          id: '06eb7506-0efd-4a0c-93a2-56676698cf28',
          status: 'New',
          start_time: '2025-04-05T23:07:00+10:00',
          end_time: '2025-04-05T23:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30009,
          name_for_reservation: 'Татьяна',
          num_people: 4,
          phone_number: '+79567740084',
          status: 'Живая очередь',
          seating_time: '2025-04-05T20:50:00+10:00',
          end_time: '2025-04-05T22:44:00+10:00'
        },
        {
          id: 30010,
          name_for_reservation: 'Анна',
          num_people: 10,
          phone_number: '+79454787749',
          status: 'Закрыт',
          seating_time: '2025-04-05T14:54:00+10:00',
          end_time: '2025-04-05T15:46:00+10:00'
        },
        {
          id: 30011,
          name_for_reservation: 'Аркадий',
          num_people: 7,
          phone_number: '+79563008387',
          status: 'Заявка',
          seating_time: '2025-04-05T19:53:00+10:00',
          end_time: '2025-04-05T21:56:00+10:00'
        },
        {
          id: 30012,
          name_for_reservation: 'Валентина',
          num_people: 2,
          phone_number: '+79380774521',
          status: 'Заявка',
          seating_time: '2025-04-05T17:11:00+10:00',
          end_time: '2025-04-05T18:02:00+10:00'
        }
      ]
    },
    {
      id: 'efe96a34-4167-4491-a631-44f7c1fa5414',
      capacity: 10,
      number: '4',
      zone: '1 этаж',
      orders: [
        {
          id: '95dfdca0-2c89-46a8-ab36-380fb54b0659',
          status: 'New',
          start_time: '2025-04-05T18:07:00+10:00',
          end_time: '2025-04-05T20:49:00+10:00'
        },
        {
          id: 'bd9ede8f-860e-4137-9aff-a7d3ea4b6650',
          status: 'Bill',
          start_time: '2025-04-05T21:06:00+10:00',
          end_time: '2025-04-05T23:10:00+10:00'
        },
        {
          id: 'a4be4b69-6834-4447-aa35-52a19ad9011c',
          status: 'New',
          start_time: '2025-04-05T19:25:00+10:00',
          end_time: '2025-04-05T22:19:00+10:00'
        },
        {
          id: 'f01e64df-0522-4365-a9a2-d6e6e9ef6b8f',
          status: 'Closed',
          start_time: '2025-04-05T13:10:00+10:00',
          end_time: '2025-04-05T14:15:00+10:00'
        },
        {
          id: '1b0c3973-9916-4162-8a8d-3d3e8c80fea3',
          status: 'Closed',
          start_time: '2025-04-05T15:40:00+10:00',
          end_time: '2025-04-05T18:32:00+10:00'
        },
        {
          id: '26e99c44-97b9-4a92-80c2-4a38237644de',
          status: 'New',
          start_time: '2025-04-05T14:36:00+10:00',
          end_time: '2025-04-05T17:03:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30013,
          name_for_reservation: 'Татьяна',
          num_people: 1,
          phone_number: '+79699646974',
          status: 'Новая',
          seating_time: '2025-04-05T11:06:00+10:00',
          end_time: '2025-04-05T13:30:00+10:00'
        },
        {
          id: 30014,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79741520226',
          status: 'Новая',
          seating_time: '2025-04-05T22:01:00+10:00',
          end_time: '2025-04-05T23:22:00+10:00'
        },
        {
          id: 30015,
          name_for_reservation: 'Лариса',
          num_people: 1,
          phone_number: '+79645471552',
          status: 'Заявка',
          seating_time: '2025-04-05T15:59:00+10:00',
          end_time: '2025-04-05T17:41:00+10:00'
        },
        {
          id: 30016,
          name_for_reservation: 'Сергей',
          num_people: 1,
          phone_number: '+79774165040',
          status: 'Заявка',
          seating_time: '2025-04-05T21:20:00+10:00',
          end_time: '2025-04-05T22:11:00+10:00'
        }
      ]
    },
    {
      id: '00230429-577e-49c2-8986-2c45258ef72a',
      capacity: 6,
      number: '5',
      zone: '1 этаж',
      orders: [
        {
          id: '0b506775-10e2-45f4-a9c2-627cf26a0171',
          status: 'New',
          start_time: '2025-04-05T19:25:00+10:00',
          end_time: '2025-04-05T21:26:00+10:00'
        },
        {
          id: 'ac064b2e-7547-4045-98f0-2fe19105e903',
          status: 'Bill',
          start_time: '2025-04-05T21:30:00+10:00',
          end_time: '2025-04-05T22:48:00+10:00'
        },
        {
          id: 'e972ca2e-c882-44d5-be58-59801ecbea66',
          status: 'Closed',
          start_time: '2025-04-05T14:30:00+10:00',
          end_time: '2025-04-05T17:20:00+10:00'
        },
        {
          id: 'ff1e331c-5ad9-425c-8574-fdf62f1a20ac',
          status: 'Closed',
          start_time: '2025-04-05T12:37:00+10:00',
          end_time: '2025-04-05T15:12:00+10:00'
        },
        {
          id: '74cbf4bc-b7c7-4278-9ae8-6449afab013c',
          status: 'Bill',
          start_time: '2025-04-05T14:03:00+10:00',
          end_time: '2025-04-05T16:11:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30017,
          name_for_reservation: 'Мария',
          num_people: 4,
          phone_number: '+79985871965',
          status: 'Новая',
          seating_time: '2025-04-05T17:11:00+10:00',
          end_time: '2025-04-05T18:13:00+10:00'
        },
        {
          id: 30018,
          name_for_reservation: 'Аркадий',
          num_people: 1,
          phone_number: '+79727773049',
          status: 'Новая',
          seating_time: '2025-04-05T17:08:00+10:00',
          end_time: '2025-04-05T20:07:00+10:00'
        },
        {
          id: 30019,
          name_for_reservation: 'Татьяна',
          num_people: 2,
          phone_number: '+79562403729',
          status: 'Открыт',
          seating_time: '2025-04-05T14:12:00+10:00',
          end_time: '2025-04-05T14:42:00+10:00'
        },
        {
          id: 30020,
          name_for_reservation: 'Валентина',
          num_people: 5,
          phone_number: '+79395748451',
          status: 'Закрыт',
          seating_time: '2025-04-05T21:33:00+10:00',
          end_time: '2025-04-05T22:51:00+10:00'
        },
        {
          id: 30021,
          name_for_reservation: 'Иван',
          num_people: 3,
          phone_number: '+79422259346',
          status: 'Живая очередь',
          seating_time: '2025-04-05T14:27:00+10:00',
          end_time: '2025-04-05T16:32:00+10:00'
        },
        {
          id: 30022,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79223531553',
          status: 'Новая',
          seating_time: '2025-04-05T22:05:00+10:00',
          end_time: '2025-04-05T23:16:00+10:00'
        }
      ]
    },
    {
      id: '8a17d0ed-6077-454c-93a9-be56721aebba',
      capacity: 6,
      number: '6',
      zone: '1 этаж',
      orders: [
        {
          id: 'f9301222-f26c-4eb1-9b25-de46cd78fae4',
          status: 'Banquet',
          start_time: '2025-04-05T14:31:00+10:00',
          end_time: '2025-04-05T16:17:00+10:00'
        },
        {
          id: 'a1ae8aee-a3de-460d-9b77-6a7d02708abb',
          status: 'New',
          start_time: '2025-04-05T19:34:00+10:00',
          end_time: '2025-04-05T20:10:00+10:00'
        },
        {
          id: 'b2fef37b-4219-42e8-8a35-5e9bedaf5f9f',
          status: 'Bill',
          start_time: '2025-04-05T14:10:00+10:00',
          end_time: '2025-04-05T15:36:00+10:00'
        },
        {
          id: 'cdd0e112-56ad-48a6-a6ef-d093c92b6e03',
          status: 'Banquet',
          start_time: '2025-04-05T11:26:00+10:00',
          end_time: '2025-04-05T13:06:00+10:00'
        },
        {
          id: 'c16b44c9-1896-4f5b-8009-5029db05e608',
          status: 'Bill',
          start_time: '2025-04-05T16:18:00+10:00',
          end_time: '2025-04-05T18:53:00+10:00'
        },
        {
          id: '3e92fd79-fa1f-4dcd-8d18-8b8ebe7f8cd2',
          status: 'Banquet',
          start_time: '2025-04-05T14:32:00+10:00',
          end_time: '2025-04-05T15:09:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30023,
          name_for_reservation: 'Юлия',
          num_people: 4,
          phone_number: '+79222325045',
          status: 'Закрыт',
          seating_time: '2025-04-05T19:42:00+10:00',
          end_time: '2025-04-05T22:39:00+10:00'
        },
        {
          id: 30024,
          name_for_reservation: 'Валентина',
          num_people: 1,
          phone_number: '+79917323517',
          status: 'Новая',
          seating_time: '2025-04-05T22:15:00+10:00',
          end_time: '2025-04-05T22:50:00+10:00'
        },
        {
          id: 30025,
          name_for_reservation: 'Василий',
          num_people: 1,
          phone_number: '+79159251862',
          status: 'Заявка',
          seating_time: '2025-04-05T22:49:00+10:00',
          end_time: '2025-04-05T23:25:00+10:00'
        },
        {
          id: 30026,
          name_for_reservation: 'Татьяна',
          num_people: 5,
          phone_number: '+79914953771',
          status: 'Живая очередь',
          seating_time: '2025-04-05T19:00:00+10:00',
          end_time: '2025-04-05T20:41:00+10:00'
        }
      ]
    },
    {
      id: '1dfa9847-a2a2-4920-91c9-71e06efc86ad',
      capacity: 4,
      number: '7',
      zone: '1 этаж',
      orders: [
        {
          id: '1e706b9c-fb2d-42ba-a436-cd7930d14695',
          status: 'Bill',
          start_time: '2025-04-05T13:20:00+10:00',
          end_time: '2025-04-05T14:49:00+10:00'
        },
        {
          id: 'd602017d-f503-44b3-a1f5-b53994b28b6e',
          status: 'Closed',
          start_time: '2025-04-05T12:18:00+10:00',
          end_time: '2025-04-05T13:18:00+10:00'
        },
        {
          id: '8d86e498-e4a7-41f3-b1ce-2a467b59bc12',
          status: 'Banquet',
          start_time: '2025-04-05T14:42:00+10:00',
          end_time: '2025-04-05T15:33:00+10:00'
        },
        {
          id: '32bf5bff-aa66-451a-b7de-c9a0a91edf63',
          status: 'New',
          start_time: '2025-04-05T13:55:00+10:00',
          end_time: '2025-04-05T15:19:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30027,
          name_for_reservation: 'Светлана',
          num_people: 3,
          phone_number: '+79754316246',
          status: 'Заявка',
          seating_time: '2025-04-05T17:29:00+10:00',
          end_time: '2025-04-05T19:13:00+10:00'
        },
        {
          id: 30028,
          name_for_reservation: 'Евгений',
          num_people: 3,
          phone_number: '+79524323097',
          status: 'Открыт',
          seating_time: '2025-04-05T20:26:00+10:00',
          end_time: '2025-04-05T22:31:00+10:00'
        },
        {
          id: 30029,
          name_for_reservation: 'Иван',
          num_people: 2,
          phone_number: '+79966901186',
          status: 'Новая',
          seating_time: '2025-04-05T22:20:00+10:00',
          end_time: '2025-04-05T23:30:00+10:00'
        },
        {
          id: 30030,
          name_for_reservation: 'Роман',
          num_people: 3,
          phone_number: '+79375430325',
          status: 'Закрыт',
          seating_time: '2025-04-05T11:14:00+10:00',
          end_time: '2025-04-05T14:03:00+10:00'
        },
        {
          id: 30031,
          name_for_reservation: 'Мария',
          num_people: 4,
          phone_number: '+79272640778',
          status: 'Живая очередь',
          seating_time: '2025-04-05T15:21:00+10:00',
          end_time: '2025-04-05T17:01:00+10:00'
        }
      ]
    },
    {
      id: 'df06c5dd-3baa-4b78-ae08-0af6a84ca1cd',
      capacity: 6,
      number: '8',
      zone: '1 этаж',
      orders: [
        {
          id: 'bba367d6-c668-4dff-8d31-5de7d9ce2111',
          status: 'New',
          start_time: '2025-04-05T17:37:00+10:00',
          end_time: '2025-04-05T19:27:00+10:00'
        },
        {
          id: 'e67aaebb-8f82-4804-b5a2-97fbd16ecd65',
          status: 'Closed',
          start_time: '2025-04-05T12:32:00+10:00',
          end_time: '2025-04-05T13:34:00+10:00'
        },
        {
          id: '3dd3ffad-b6a0-4794-b7d0-16255db7dcb3',
          status: 'Banquet',
          start_time: '2025-04-05T13:50:00+10:00',
          end_time: '2025-04-05T16:17:00+10:00'
        },
        {
          id: 'bf84e10a-cf9d-40f7-8210-426136fd291d',
          status: 'New',
          start_time: '2025-04-05T15:37:00+10:00',
          end_time: '2025-04-05T17:53:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30032,
          name_for_reservation: 'Ольга',
          num_people: 4,
          phone_number: '+79519238041',
          status: 'Живая очередь',
          seating_time: '2025-04-05T13:12:00+10:00',
          end_time: '2025-04-05T14:47:00+10:00'
        },
        {
          id: 30033,
          name_for_reservation: 'Иван',
          num_people: 4,
          phone_number: '+79368619809',
          status: 'Живая очередь',
          seating_time: '2025-04-05T11:35:00+10:00',
          end_time: '2025-04-05T13:29:00+10:00'
        },
        {
          id: 30034,
          name_for_reservation: 'Ксения',
          num_people: 4,
          phone_number: '+79783370711',
          status: 'Открыт',
          seating_time: '2025-04-05T15:36:00+10:00',
          end_time: '2025-04-05T17:38:00+10:00'
        },
        {
          id: 30035,
          name_for_reservation: 'Андрей',
          num_people: 6,
          phone_number: '+79364647427',
          status: 'Заявка',
          seating_time: '2025-04-05T19:15:00+10:00',
          end_time: '2025-04-05T20:29:00+10:00'
        },
        {
          id: 30036,
          name_for_reservation: 'Константин',
          num_people: 1,
          phone_number: '+79992845330',
          status: 'Открыт',
          seating_time: '2025-04-05T21:26:00+10:00',
          end_time: '2025-04-05T22:33:00+10:00'
        },
        {
          id: 30037,
          name_for_reservation: 'Анатолий',
          num_people: 4,
          phone_number: '+79900161162',
          status: 'Живая очередь',
          seating_time: '2025-04-05T17:47:00+10:00',
          end_time: '2025-04-05T18:25:00+10:00'
        },
        {
          id: 30038,
          name_for_reservation: 'Василий',
          num_people: 5,
          phone_number: '+79930574911',
          status: 'Новая',
          seating_time: '2025-04-05T22:04:00+10:00',
          end_time: '2025-04-05T23:20:00+10:00'
        }
      ]
    },
    {
      id: '4b1b35ee-cf66-492e-b638-e5bc86d81225',
      capacity: 4,
      number: '9',
      zone: '1 этаж',
      orders: [
        {
          id: '1c0f8baf-6d2d-4015-8c86-70aedfeaa150',
          status: 'Banquet',
          start_time: '2025-04-05T16:27:00+10:00',
          end_time: '2025-04-05T17:45:00+10:00'
        },
        {
          id: '3efa81b6-9f9c-426f-953a-10269b99b4b3',
          status: 'New',
          start_time: '2025-04-05T17:57:00+10:00',
          end_time: '2025-04-05T20:28:00+10:00'
        },
        {
          id: '57e06814-bc4e-4a8a-beb8-0c2e7de73ee0',
          status: 'New',
          start_time: '2025-04-05T21:41:00+10:00',
          end_time: '2025-04-05T22:12:00+10:00'
        },
        {
          id: 'c3ec668a-209e-4a95-989b-feed17832062',
          status: 'Closed',
          start_time: '2025-04-05T22:38:00+10:00',
          end_time: '2025-04-05T23:17:00+10:00'
        },
        {
          id: '86278801-4bdd-42fc-895f-abd6a93d218d',
          status: 'New',
          start_time: '2025-04-05T12:21:00+10:00',
          end_time: '2025-04-05T13:55:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30039,
          name_for_reservation: 'Роман',
          num_people: 1,
          phone_number: '+79799936429',
          status: 'Закрыт',
          seating_time: '2025-04-05T14:33:00+10:00',
          end_time: '2025-04-05T16:28:00+10:00'
        },
        {
          id: 30040,
          name_for_reservation: 'Александр',
          num_people: 3,
          phone_number: '+79282979094',
          status: 'Новая',
          seating_time: '2025-04-05T11:59:00+10:00',
          end_time: '2025-04-05T14:47:00+10:00'
        },
        {
          id: 30041,
          name_for_reservation: 'Анна',
          num_people: 2,
          phone_number: '+79273680428',
          status: 'Заявка',
          seating_time: '2025-04-05T16:41:00+10:00',
          end_time: '2025-04-05T18:41:00+10:00'
        },
        {
          id: 30042,
          name_for_reservation: 'Александр',
          num_people: 3,
          phone_number: '+79374032918',
          status: 'Заявка',
          seating_time: '2025-04-05T14:02:00+10:00',
          end_time: '2025-04-05T16:22:00+10:00'
        },
        {
          id: 30043,
          name_for_reservation: 'Константин',
          num_people: 4,
          phone_number: '+79506328354',
          status: 'Новая',
          seating_time: '2025-04-05T20:00:00+10:00',
          end_time: '2025-04-05T21:18:00+10:00'
        },
        {
          id: 30044,
          name_for_reservation: 'Дмитрий',
          num_people: 1,
          phone_number: '+79420016061',
          status: 'Закрыт',
          seating_time: '2025-04-05T18:55:00+10:00',
          end_time: '2025-04-05T20:31:00+10:00'
        }
      ]
    },
    {
      id: '69babe4a-22ea-42ad-8eed-1c8283b3c013',
      capacity: 8,
      number: '10',
      zone: '1 этаж',
      orders: [
        {
          id: '0649c5c0-4ca4-4e6e-b48f-71db0693ffdd',
          status: 'New',
          start_time: '2025-04-05T11:17:00+10:00',
          end_time: '2025-04-05T13:47:00+10:00'
        },
        {
          id: '218545a2-94c3-4469-ac23-418bd84a4d79',
          status: 'Banquet',
          start_time: '2025-04-05T17:44:00+10:00',
          end_time: '2025-04-05T20:30:00+10:00'
        },
        {
          id: 'ddd50513-4e4f-4238-a500-9803651410ca',
          status: 'New',
          start_time: '2025-04-05T16:34:00+10:00',
          end_time: '2025-04-05T17:59:00+10:00'
        },
        {
          id: '3eaf6f54-fe17-4b77-a284-285db55e9539',
          status: 'New',
          start_time: '2025-04-05T11:19:00+10:00',
          end_time: '2025-04-05T13:46:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30045,
          name_for_reservation: 'Константин',
          num_people: 7,
          phone_number: '+79789592744',
          status: 'Закрыт',
          seating_time: '2025-04-05T11:23:00+10:00',
          end_time: '2025-04-05T12:07:00+10:00'
        },
        {
          id: 30046,
          name_for_reservation: 'Константин',
          num_people: 3,
          phone_number: '+79169851911',
          status: 'Закрыт',
          seating_time: '2025-04-05T14:01:00+10:00',
          end_time: '2025-04-05T14:59:00+10:00'
        },
        {
          id: 30047,
          name_for_reservation: 'Мария',
          num_people: 5,
          phone_number: '+79993557198',
          status: 'Открыт',
          seating_time: '2025-04-05T18:03:00+10:00',
          end_time: '2025-04-05T20:39:00+10:00'
        },
        {
          id: 30048,
          name_for_reservation: 'Андрей',
          num_people: 3,
          phone_number: '+79550068185',
          status: 'Открыт',
          seating_time: '2025-04-05T20:49:00+10:00',
          end_time: '2025-04-05T23:15:00+10:00'
        }
      ]
    },
    {
      id: '27a644d0-5716-4a34-b209-78dc1ad6b21b',
      capacity: 6,
      number: '11',
      zone: '1 этаж',
      orders: [
        {
          id: '96b54548-6a70-4080-949e-bfdaa96865d9',
          status: 'Banquet',
          start_time: '2025-04-05T15:00:00+10:00',
          end_time: '2025-04-05T17:33:00+10:00'
        },
        {
          id: '32103b5e-ed3d-4ae7-adda-45eb69cecbe6',
          status: 'Banquet',
          start_time: '2025-04-05T20:10:00+10:00',
          end_time: '2025-04-05T23:07:00+10:00'
        },
        {
          id: 'ed700019-b3a9-4b73-a3a0-8a57e84f9f08',
          status: 'Banquet',
          start_time: '2025-04-05T12:35:00+10:00',
          end_time: '2025-04-05T14:02:00+10:00'
        },
        {
          id: '55c3af41-a312-484d-a900-2f13f0ca6727',
          status: 'Bill',
          start_time: '2025-04-05T12:45:00+10:00',
          end_time: '2025-04-05T15:03:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30049,
          name_for_reservation: 'Лариса',
          num_people: 1,
          phone_number: '+79536849878',
          status: 'Открыт',
          seating_time: '2025-04-05T16:51:00+10:00',
          end_time: '2025-04-05T18:00:00+10:00'
        },
        {
          id: 30050,
          name_for_reservation: 'Ольга',
          num_people: 1,
          phone_number: '+79305476631',
          status: 'Живая очередь',
          seating_time: '2025-04-05T23:06:00+10:00',
          end_time: '2025-04-05T23:39:00+10:00'
        },
        {
          id: 30051,
          name_for_reservation: 'Анна',
          num_people: 6,
          phone_number: '+79926686449',
          status: 'Живая очередь',
          seating_time: '2025-04-05T21:53:00+10:00',
          end_time: '2025-04-05T23:15:00+10:00'
        },
        {
          id: 30052,
          name_for_reservation: 'Василий',
          num_people: 5,
          phone_number: '+79615571694',
          status: 'Новая',
          seating_time: '2025-04-05T20:08:00+10:00',
          end_time: '2025-04-05T22:55:00+10:00'
        },
        {
          id: 30053,
          name_for_reservation: 'Ольга',
          num_people: 4,
          phone_number: '+79740746209',
          status: 'Живая очередь',
          seating_time: '2025-04-05T21:11:00+10:00',
          end_time: '2025-04-05T23:15:00+10:00'
        }
      ]
    },
    {
      id: '9e5827ab-348d-456b-86f1-ae0b9d4e8760',
      capacity: 2,
      number: '12',
      zone: '1 этаж',
      orders: [
        {
          id: 'aa0ba9e6-6d57-4567-8550-f12b43c1bc77',
          status: 'Closed',
          start_time: '2025-04-05T18:41:00+10:00',
          end_time: '2025-04-05T19:40:00+10:00'
        },
        {
          id: '65e13df2-46cd-454e-abac-6b2f97f32458',
          status: 'Closed',
          start_time: '2025-04-05T22:51:00+10:00',
          end_time: '2025-04-05T23:38:00+10:00'
        },
        {
          id: '1b266345-9af3-445c-ac7a-dff4016c0c43',
          status: 'Bill',
          start_time: '2025-04-05T22:16:00+10:00',
          end_time: '2025-04-05T23:11:00+10:00'
        },
        {
          id: '3474390a-4730-4ed5-84b0-ea6bb57f7b24',
          status: 'Closed',
          start_time: '2025-04-05T22:49:00+10:00',
          end_time: '2025-04-05T23:30:00+10:00'
        },
        {
          id: 'db69358c-9ae5-4515-ad50-ea619b4a81a4',
          status: 'Bill',
          start_time: '2025-04-05T15:36:00+10:00',
          end_time: '2025-04-05T17:45:00+10:00'
        },
        {
          id: 'b11cbd41-20c2-4f2c-86d5-3453ac07d527',
          status: 'Banquet',
          start_time: '2025-04-05T12:02:00+10:00',
          end_time: '2025-04-05T13:31:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30054,
          name_for_reservation: 'Александр',
          num_people: 2,
          phone_number: '+79486836739',
          status: 'Живая очередь',
          seating_time: '2025-04-05T17:29:00+10:00',
          end_time: '2025-04-05T18:23:00+10:00'
        },
        {
          id: 30055,
          name_for_reservation: 'Светлана',
          num_people: 1,
          phone_number: '+79460184346',
          status: 'Живая очередь',
          seating_time: '2025-04-05T15:16:00+10:00',
          end_time: '2025-04-05T17:57:00+10:00'
        },
        {
          id: 30056,
          name_for_reservation: 'Иван',
          num_people: 2,
          phone_number: '+79470409593',
          status: 'Закрыт',
          seating_time: '2025-04-05T16:41:00+10:00',
          end_time: '2025-04-05T18:42:00+10:00'
        },
        {
          id: 30057,
          name_for_reservation: 'Геннадий',
          num_people: 1,
          phone_number: '+79159197013',
          status: 'Открыт',
          seating_time: '2025-04-05T18:38:00+10:00',
          end_time: '2025-04-05T19:37:00+10:00'
        },
        {
          id: 30058,
          name_for_reservation: 'Евгений',
          num_people: 1,
          phone_number: '+79181242343',
          status: 'Живая очередь',
          seating_time: '2025-04-05T22:41:00+10:00',
          end_time: '2025-04-05T23:29:00+10:00'
        }
      ]
    },
    {
      id: 'a6167867-e2b0-404d-abb5-cd03cdb1134e',
      capacity: 6,
      number: '13',
      zone: '1 этаж',
      orders: [
        {
          id: '93d30e37-7e21-48fd-b5f4-19d65c5e8242',
          status: 'Bill',
          start_time: '2025-04-05T12:13:00+10:00',
          end_time: '2025-04-05T14:12:00+10:00'
        },
        {
          id: '17c2851c-acd5-4f0f-8d87-8cee1a585664',
          status: 'Closed',
          start_time: '2025-04-05T13:15:00+10:00',
          end_time: '2025-04-05T14:05:00+10:00'
        },
        {
          id: 'dc4d985a-a059-4a3c-b412-65170d3eda08',
          status: 'Bill',
          start_time: '2025-04-05T22:10:00+10:00',
          end_time: '2025-04-05T22:54:00+10:00'
        },
        {
          id: '3e8a7823-1c33-4e04-81ac-877f84f7dbdd',
          status: 'Banquet',
          start_time: '2025-04-05T16:30:00+10:00',
          end_time: '2025-04-05T19:11:00+10:00'
        },
        {
          id: '79574182-df28-4f8a-bf01-c62d1a722d69',
          status: 'Banquet',
          start_time: '2025-04-05T21:28:00+10:00',
          end_time: '2025-04-05T22:51:00+10:00'
        },
        {
          id: '97c76bbe-bf09-44b0-8f83-8ac0f92ded44',
          status: 'Closed',
          start_time: '2025-04-05T22:56:00+10:00',
          end_time: '2025-04-05T23:27:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30059,
          name_for_reservation: 'Геннадий',
          num_people: 5,
          phone_number: '+79778234376',
          status: 'Новая',
          seating_time: '2025-04-05T19:55:00+10:00',
          end_time: '2025-04-05T20:30:00+10:00'
        },
        {
          id: 30060,
          name_for_reservation: 'Дмитрий',
          num_people: 3,
          phone_number: '+79649219938',
          status: 'Живая очередь',
          seating_time: '2025-04-05T13:13:00+10:00',
          end_time: '2025-04-05T15:56:00+10:00'
        },
        {
          id: 30061,
          name_for_reservation: 'Ксения',
          num_people: 4,
          phone_number: '+79145463983',
          status: 'Новая',
          seating_time: '2025-04-05T20:05:00+10:00',
          end_time: '2025-04-05T21:51:00+10:00'
        },
        {
          id: 30062,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79545916108',
          status: 'Новая',
          seating_time: '2025-04-05T20:12:00+10:00',
          end_time: '2025-04-05T20:56:00+10:00'
        },
        {
          id: 30063,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79629157798',
          status: 'Заявка',
          seating_time: '2025-04-05T13:15:00+10:00',
          end_time: '2025-04-05T15:03:00+10:00'
        },
        {
          id: 30064,
          name_for_reservation: 'Евгений',
          num_people: 6,
          phone_number: '+79599184436',
          status: 'Открыт',
          seating_time: '2025-04-05T20:17:00+10:00',
          end_time: '2025-04-05T21:01:00+10:00'
        },
        {
          id: 30065,
          name_for_reservation: 'Евгения',
          num_people: 1,
          phone_number: '+79171075202',
          status: 'Заявка',
          seating_time: '2025-04-05T22:41:00+10:00',
          end_time: '2025-04-05T23:40:00+10:00'
        }
      ]
    },
    {
      id: '3779a492-9354-407e-9b7e-ccc2feb1dec7',
      capacity: 2,
      number: '101',
      zone: '2 этаж',
      orders: [
        {
          id: '75421be0-2876-4710-a632-999af997c23f',
          status: 'Banquet',
          start_time: '2025-04-05T16:52:00+10:00',
          end_time: '2025-04-05T18:59:00+10:00'
        },
        {
          id: '7c0c550c-d8b1-4d98-9664-98cb4513594d',
          status: 'Banquet',
          start_time: '2025-04-05T22:43:00+10:00',
          end_time: '2025-04-05T23:18:00+10:00'
        },
        {
          id: '66dd1e92-b6eb-4835-9053-8682cc665c7a',
          status: 'Closed',
          start_time: '2025-04-05T15:30:00+10:00',
          end_time: '2025-04-05T17:37:00+10:00'
        },
        {
          id: '4d82657f-67d9-4cf1-9edc-785913e7f37c',
          status: 'Closed',
          start_time: '2025-04-05T22:02:00+10:00',
          end_time: '2025-04-05T22:39:00+10:00'
        },
        {
          id: 'c0f56312-4736-4cdc-a507-1c45e2d20c10',
          status: 'Closed',
          start_time: '2025-04-05T11:15:00+10:00',
          end_time: '2025-04-05T11:46:00+10:00'
        },
        {
          id: '0e621b19-cbfe-48f9-b7fe-acd08a80d79c',
          status: 'New',
          start_time: '2025-04-05T12:06:00+10:00',
          end_time: '2025-04-05T14:27:00+10:00'
        },
        {
          id: '22be5df4-5e98-4aed-9d48-73e581bded7f',
          status: 'Banquet',
          start_time: '2025-04-05T14:38:00+10:00',
          end_time: '2025-04-05T16:11:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30066,
          name_for_reservation: 'Андрей',
          num_people: 2,
          phone_number: '+79848651937',
          status: 'Живая очередь',
          seating_time: '2025-04-05T18:15:00+10:00',
          end_time: '2025-04-05T20:27:00+10:00'
        },
        {
          id: 30067,
          name_for_reservation: 'Дмитрий',
          num_people: 2,
          phone_number: '+79887014662',
          status: 'Живая очередь',
          seating_time: '2025-04-05T20:57:00+10:00',
          end_time: '2025-04-05T22:10:00+10:00'
        },
        {
          id: 30068,
          name_for_reservation: 'Евгений',
          num_people: 1,
          phone_number: '+79251776106',
          status: 'Закрыт',
          seating_time: '2025-04-05T17:23:00+10:00',
          end_time: '2025-04-05T17:57:00+10:00'
        },
        {
          id: 30069,
          name_for_reservation: 'Александр',
          num_people: 1,
          phone_number: '+79726577973',
          status: 'Открыт',
          seating_time: '2025-04-05T21:43:00+10:00',
          end_time: '2025-04-05T22:50:00+10:00'
        },
        {
          id: 30070,
          name_for_reservation: 'Наталья',
          num_people: 2,
          phone_number: '+79580528911',
          status: 'Новая',
          seating_time: '2025-04-05T18:54:00+10:00',
          end_time: '2025-04-05T21:23:00+10:00'
        },
        {
          id: 30071,
          name_for_reservation: 'Евгений',
          num_people: 2,
          phone_number: '+79630139923',
          status: 'Живая очередь',
          seating_time: '2025-04-05T18:03:00+10:00',
          end_time: '2025-04-05T19:47:00+10:00'
        }
      ]
    },
    {
      id: 'ed651dfc-e0f9-412a-97ef-d3f8de08f3e6',
      capacity: 8,
      number: '102',
      zone: '2 этаж',
      orders: [
        {
          id: '4bc45154-65ec-465f-a11e-4ae6c3c61c8f',
          status: 'Banquet',
          start_time: '2025-04-05T17:20:00+10:00',
          end_time: '2025-04-05T19:19:00+10:00'
        },
        {
          id: 'f2444a0e-eb7a-4631-b594-6b08ff9f0296',
          status: 'Bill',
          start_time: '2025-04-05T12:34:00+10:00',
          end_time: '2025-04-05T14:35:00+10:00'
        },
        {
          id: '2985c388-b176-4f50-b25d-b6ccee9565cb',
          status: 'Closed',
          start_time: '2025-04-05T18:46:00+10:00',
          end_time: '2025-04-05T19:33:00+10:00'
        },
        {
          id: '84089ed3-b732-41a8-83cc-761351aee319',
          status: 'New',
          start_time: '2025-04-05T21:05:00+10:00',
          end_time: '2025-04-05T22:06:00+10:00'
        },
        {
          id: '1b1eb244-ee7c-4c1e-bf53-4336902d1d79',
          status: 'Closed',
          start_time: '2025-04-05T16:39:00+10:00',
          end_time: '2025-04-05T19:25:00+10:00'
        },
        {
          id: '67472c24-8ddc-4139-bda4-77b80f5074ba',
          status: 'Banquet',
          start_time: '2025-04-05T15:59:00+10:00',
          end_time: '2025-04-05T17:20:00+10:00'
        },
        {
          id: 'c12630de-dc09-46f4-960a-74ca870ba4ac',
          status: 'Banquet',
          start_time: '2025-04-05T15:57:00+10:00',
          end_time: '2025-04-05T18:27:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30072,
          name_for_reservation: 'Роман',
          num_people: 1,
          phone_number: '+79548668886',
          status: 'Новая',
          seating_time: '2025-04-05T11:01:00+10:00',
          end_time: '2025-04-05T12:53:00+10:00'
        },
        {
          id: 30073,
          name_for_reservation: 'Григорий',
          num_people: 6,
          phone_number: '+79350896020',
          status: 'Открыт',
          seating_time: '2025-04-05T14:19:00+10:00',
          end_time: '2025-04-05T15:26:00+10:00'
        },
        {
          id: 30074,
          name_for_reservation: 'Дмитрий',
          num_people: 4,
          phone_number: '+79308331512',
          status: 'Живая очередь',
          seating_time: '2025-04-05T23:01:00+10:00',
          end_time: '2025-04-05T23:31:00+10:00'
        },
        {
          id: 30075,
          name_for_reservation: 'Светлана',
          num_people: 5,
          phone_number: '+79345827456',
          status: 'Заявка',
          seating_time: '2025-04-05T20:58:00+10:00',
          end_time: '2025-04-05T23:14:00+10:00'
        },
        {
          id: 30076,
          name_for_reservation: 'Мария',
          num_people: 6,
          phone_number: '+79163898872',
          status: 'Закрыт',
          seating_time: '2025-04-05T15:26:00+10:00',
          end_time: '2025-04-05T16:55:00+10:00'
        }
      ]
    },
    {
      id: 'f85c0f52-90a5-4fc1-a63e-e63451f7d296',
      capacity: 2,
      number: '103',
      zone: '2 этаж',
      orders: [
        {
          id: '74be0bf2-47e5-4ab6-a739-8b1e05edb06b',
          status: 'New',
          start_time: '2025-04-05T16:53:00+10:00',
          end_time: '2025-04-05T18:27:00+10:00'
        },
        {
          id: '5c5d3a1f-d610-43d6-b6e1-0dd623d0ed4a',
          status: 'Bill',
          start_time: '2025-04-05T22:56:00+10:00',
          end_time: '2025-04-05T23:31:00+10:00'
        },
        {
          id: '19dc53ea-445a-4b36-acf5-12f85d9afef6',
          status: 'New',
          start_time: '2025-04-05T15:14:00+10:00',
          end_time: '2025-04-05T17:39:00+10:00'
        },
        {
          id: '39ce1b09-9780-42fc-bec4-568415ec55eb',
          status: 'Banquet',
          start_time: '2025-04-05T13:06:00+10:00',
          end_time: '2025-04-05T13:41:00+10:00'
        },
        {
          id: '17adf614-07ff-4947-9697-3512c127efa1',
          status: 'Banquet',
          start_time: '2025-04-05T17:53:00+10:00',
          end_time: '2025-04-05T19:13:00+10:00'
        },
        {
          id: '0a33177c-c338-4e08-a62b-542a9a531ff7',
          status: 'Banquet',
          start_time: '2025-04-05T20:31:00+10:00',
          end_time: '2025-04-05T21:54:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30077,
          name_for_reservation: 'Сергей',
          num_people: 1,
          phone_number: '+79817278297',
          status: 'Закрыт',
          seating_time: '2025-04-05T21:07:00+10:00',
          end_time: '2025-04-05T22:10:00+10:00'
        },
        {
          id: 30078,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79576017326',
          status: 'Живая очередь',
          seating_time: '2025-04-05T17:03:00+10:00',
          end_time: '2025-04-05T19:51:00+10:00'
        },
        {
          id: 30079,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79639939520',
          status: 'Закрыт',
          seating_time: '2025-04-05T17:24:00+10:00',
          end_time: '2025-04-05T18:08:00+10:00'
        },
        {
          id: 30080,
          name_for_reservation: 'Наталья',
          num_people: 2,
          phone_number: '+79819054916',
          status: 'Живая очередь',
          seating_time: '2025-04-05T13:28:00+10:00',
          end_time: '2025-04-05T15:51:00+10:00'
        }
      ]
    },
    {
      id: 'fdc40f60-dbad-4017-99ea-ddb3b50a796c',
      capacity: 12,
      number: '104',
      zone: '2 этаж',
      orders: [
        {
          id: '674a9a29-8f4b-4586-8f7f-9dcc99488fa4',
          status: 'New',
          start_time: '2025-04-05T11:21:00+10:00',
          end_time: '2025-04-05T14:03:00+10:00'
        },
        {
          id: 'b073d123-fcb9-429b-ab4a-e0ec2aecfaa5',
          status: 'Closed',
          start_time: '2025-04-05T14:39:00+10:00',
          end_time: '2025-04-05T17:11:00+10:00'
        },
        {
          id: '9c699498-094e-4ab6-b28a-b52535152f7e',
          status: 'Bill',
          start_time: '2025-04-05T17:29:00+10:00',
          end_time: '2025-04-05T19:47:00+10:00'
        },
        {
          id: '414ccf66-292f-4c7c-8096-b3c7b74b7a6b',
          status: 'Banquet',
          start_time: '2025-04-05T15:42:00+10:00',
          end_time: '2025-04-05T16:42:00+10:00'
        },
        {
          id: '39035a8b-2944-459c-ae18-318304c400db',
          status: 'New',
          start_time: '2025-04-05T19:54:00+10:00',
          end_time: '2025-04-05T20:48:00+10:00'
        },
        {
          id: '744d2bb6-6d2c-4d80-afb3-f52830fef1c1',
          status: 'New',
          start_time: '2025-04-05T16:11:00+10:00',
          end_time: '2025-04-05T17:15:00+10:00'
        },
        {
          id: 'c68e2441-c128-4896-98b6-23111ee2e4cc',
          status: 'Banquet',
          start_time: '2025-04-05T20:44:00+10:00',
          end_time: '2025-04-05T21:24:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30081,
          name_for_reservation: 'Юлия',
          num_people: 9,
          phone_number: '+79251679404',
          status: 'Закрыт',
          seating_time: '2025-04-05T20:21:00+10:00',
          end_time: '2025-04-05T21:15:00+10:00'
        },
        {
          id: 30082,
          name_for_reservation: 'Василий',
          num_people: 9,
          phone_number: '+79190716505',
          status: 'Закрыт',
          seating_time: '2025-04-05T18:50:00+10:00',
          end_time: '2025-04-05T21:36:00+10:00'
        },
        {
          id: 30083,
          name_for_reservation: 'Иван',
          num_people: 3,
          phone_number: '+79732735846',
          status: 'Заявка',
          seating_time: '2025-04-05T13:17:00+10:00',
          end_time: '2025-04-05T13:52:00+10:00'
        },
        {
          id: 30084,
          name_for_reservation: 'Анна',
          num_people: 5,
          phone_number: '+79510831670',
          status: 'Открыт',
          seating_time: '2025-04-05T20:36:00+10:00',
          end_time: '2025-04-05T21:17:00+10:00'
        },
        {
          id: 30085,
          name_for_reservation: 'Светлана',
          num_people: 12,
          phone_number: '+79802944152',
          status: 'Открыт',
          seating_time: '2025-04-05T14:43:00+10:00',
          end_time: '2025-04-05T16:28:00+10:00'
        },
        {
          id: 30086,
          name_for_reservation: 'Анна',
          num_people: 9,
          phone_number: '+79396664234',
          status: 'Закрыт',
          seating_time: '2025-04-05T16:08:00+10:00',
          end_time: '2025-04-05T18:43:00+10:00'
        }
      ]
    },
    {
      id: '786fae22-e798-4fb5-9f5e-be1cda764171',
      capacity: 4,
      number: '105',
      zone: '2 этаж',
      orders: [
        {
          id: '1d964fb5-c5d1-4eee-af74-876364f9dbb7',
          status: 'Bill',
          start_time: '2025-04-05T21:45:00+10:00',
          end_time: '2025-04-05T22:27:00+10:00'
        },
        {
          id: 'c044c31a-34a2-456b-a547-bdfb6202ad6b',
          status: 'Closed',
          start_time: '2025-04-05T20:18:00+10:00',
          end_time: '2025-04-05T21:16:00+10:00'
        },
        {
          id: 'ee1cd0de-7395-4d46-bffc-4b21a3203ef2',
          status: 'New',
          start_time: '2025-04-05T11:23:00+10:00',
          end_time: '2025-04-05T12:35:00+10:00'
        },
        {
          id: '49b7aa92-1ba8-46b0-94a7-efea7b8098ac',
          status: 'Bill',
          start_time: '2025-04-05T21:56:00+10:00',
          end_time: '2025-04-05T23:19:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30087,
          name_for_reservation: 'Сергей',
          num_people: 4,
          phone_number: '+79469289830',
          status: 'Открыт',
          seating_time: '2025-04-05T20:35:00+10:00',
          end_time: '2025-04-05T23:16:00+10:00'
        },
        {
          id: 30088,
          name_for_reservation: 'Аркадий',
          num_people: 1,
          phone_number: '+79660090835',
          status: 'Закрыт',
          seating_time: '2025-04-05T19:02:00+10:00',
          end_time: '2025-04-05T20:56:00+10:00'
        },
        {
          id: 30089,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79987771642',
          status: 'Живая очередь',
          seating_time: '2025-04-05T11:32:00+10:00',
          end_time: '2025-04-05T12:07:00+10:00'
        },
        {
          id: 30090,
          name_for_reservation: 'Иван',
          num_people: 1,
          phone_number: '+79609671680',
          status: 'Закрыт',
          seating_time: '2025-04-05T18:36:00+10:00',
          end_time: '2025-04-05T19:08:00+10:00'
        },
        {
          id: 30091,
          name_for_reservation: 'Иван',
          num_people: 4,
          phone_number: '+79343856210',
          status: 'Живая очередь',
          seating_time: '2025-04-05T13:09:00+10:00',
          end_time: '2025-04-05T13:56:00+10:00'
        }
      ]
    },
    {
      id: '56486a2d-71ca-4108-82e1-5a8fe581da1a',
      capacity: 6,
      number: '106',
      zone: '2 этаж',
      orders: [
        {
          id: '5fb19b0b-224c-446d-8834-f5847d4a4c9a',
          status: 'Banquet',
          start_time: '2025-04-05T13:20:00+10:00',
          end_time: '2025-04-05T14:09:00+10:00'
        },
        {
          id: 'aac2f62e-fd3a-4f50-96d4-4569071a7082',
          status: 'New',
          start_time: '2025-04-05T12:01:00+10:00',
          end_time: '2025-04-05T13:49:00+10:00'
        },
        {
          id: 'c5a6c62e-9093-47c8-8c74-1939f4797b6a',
          status: 'New',
          start_time: '2025-04-05T19:08:00+10:00',
          end_time: '2025-04-05T20:10:00+10:00'
        },
        {
          id: 'f6f11cef-9d10-42a0-85e4-8ccef4811461',
          status: 'Closed',
          start_time: '2025-04-05T11:52:00+10:00',
          end_time: '2025-04-05T13:02:00+10:00'
        },
        {
          id: '54398b77-9eaf-4b25-9191-614711fedb08',
          status: 'New',
          start_time: '2025-04-05T14:31:00+10:00',
          end_time: '2025-04-05T15:38:00+10:00'
        },
        {
          id: '8e8ffcc3-5a09-4123-9fc2-ef690580c7ea',
          status: 'Banquet',
          start_time: '2025-04-05T19:20:00+10:00',
          end_time: '2025-04-05T22:14:00+10:00'
        },
        {
          id: '4332b26c-9599-487e-a63a-57e9d5abee85',
          status: 'Closed',
          start_time: '2025-04-05T20:11:00+10:00',
          end_time: '2025-04-05T22:34:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30092,
          name_for_reservation: 'Анна',
          num_people: 5,
          phone_number: '+79735194601',
          status: 'Заявка',
          seating_time: '2025-04-05T17:35:00+10:00',
          end_time: '2025-04-05T19:39:00+10:00'
        },
        {
          id: 30093,
          name_for_reservation: 'Дмитрий',
          num_people: 1,
          phone_number: '+79161042258',
          status: 'Живая очередь',
          seating_time: '2025-04-05T15:11:00+10:00',
          end_time: '2025-04-05T15:53:00+10:00'
        },
        {
          id: 30094,
          name_for_reservation: 'Юлия',
          num_people: 2,
          phone_number: '+79627150690',
          status: 'Живая очередь',
          seating_time: '2025-04-05T11:02:00+10:00',
          end_time: '2025-04-05T13:47:00+10:00'
        },
        {
          id: 30095,
          name_for_reservation: 'Алина',
          num_people: 3,
          phone_number: '+79560551808',
          status: 'Заявка',
          seating_time: '2025-04-05T13:51:00+10:00',
          end_time: '2025-04-05T15:05:00+10:00'
        },
        {
          id: 30096,
          name_for_reservation: 'Евгений',
          num_people: 1,
          phone_number: '+79537707923',
          status: 'Закрыт',
          seating_time: '2025-04-05T23:05:00+10:00',
          end_time: '2025-04-05T23:38:00+10:00'
        },
        {
          id: 30097,
          name_for_reservation: 'Алина',
          num_people: 5,
          phone_number: '+79156644673',
          status: 'Новая',
          seating_time: '2025-04-05T21:13:00+10:00',
          end_time: '2025-04-05T23:12:00+10:00'
        },
        {
          id: 30098,
          name_for_reservation: 'Дмитрий',
          num_people: 1,
          phone_number: '+79178299172',
          status: 'Новая',
          seating_time: '2025-04-05T19:03:00+10:00',
          end_time: '2025-04-05T19:54:00+10:00'
        }
      ]
    },
    {
      id: '2241d846-f402-4446-95b7-443af54378fe',
      capacity: 10,
      number: '107',
      zone: '2 этаж',
      orders: [
        {
          id: 'cf6237b7-ca73-4809-b971-14a5f755a87d',
          status: 'Closed',
          start_time: '2025-04-05T13:14:00+10:00',
          end_time: '2025-04-05T14:29:00+10:00'
        },
        {
          id: '7079f6e4-c19f-412e-a11c-6a7cb36d4d2d',
          status: 'Closed',
          start_time: '2025-04-05T20:22:00+10:00',
          end_time: '2025-04-05T22:01:00+10:00'
        },
        {
          id: '3bf36fa6-6a94-410c-beb2-9fcf48099690',
          status: 'Closed',
          start_time: '2025-04-05T11:38:00+10:00',
          end_time: '2025-04-05T12:51:00+10:00'
        },
        {
          id: '80ce0209-1776-4ed7-a298-feab00a11048',
          status: 'Banquet',
          start_time: '2025-04-05T13:59:00+10:00',
          end_time: '2025-04-05T15:53:00+10:00'
        },
        {
          id: '09547e19-7fe9-4a98-a925-3fab38a5d772',
          status: 'Banquet',
          start_time: '2025-04-05T13:54:00+10:00',
          end_time: '2025-04-05T16:44:00+10:00'
        },
        {
          id: '43114f92-c0ea-4f5b-8416-25acaaf567a7',
          status: 'Banquet',
          start_time: '2025-04-05T17:23:00+10:00',
          end_time: '2025-04-05T19:25:00+10:00'
        },
        {
          id: 'd5525056-cb76-4df0-9297-804efe43c6ad',
          status: 'New',
          start_time: '2025-04-05T16:07:00+10:00',
          end_time: '2025-04-05T18:22:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30099,
          name_for_reservation: 'Светлана',
          num_people: 7,
          phone_number: '+79891580395',
          status: 'Заявка',
          seating_time: '2025-04-05T21:53:00+10:00',
          end_time: '2025-04-05T23:24:00+10:00'
        },
        {
          id: 30100,
          name_for_reservation: 'Алина',
          num_people: 8,
          phone_number: '+79174662562',
          status: 'Открыт',
          seating_time: '2025-04-05T13:22:00+10:00',
          end_time: '2025-04-05T15:26:00+10:00'
        },
        {
          id: 30101,
          name_for_reservation: 'Иван',
          num_people: 8,
          phone_number: '+79581476144',
          status: 'Новая',
          seating_time: '2025-04-05T20:36:00+10:00',
          end_time: '2025-04-05T22:30:00+10:00'
        },
        {
          id: 30102,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79300867949',
          status: 'Заявка',
          seating_time: '2025-04-05T16:30:00+10:00',
          end_time: '2025-04-05T17:11:00+10:00'
        },
        {
          id: 30103,
          name_for_reservation: 'Сергей',
          num_people: 10,
          phone_number: '+79619901072',
          status: 'Заявка',
          seating_time: '2025-04-05T12:31:00+10:00',
          end_time: '2025-04-05T14:52:00+10:00'
        },
        {
          id: 30104,
          name_for_reservation: 'Григорий',
          num_people: 1,
          phone_number: '+79665917666',
          status: 'Заявка',
          seating_time: '2025-04-05T19:26:00+10:00',
          end_time: '2025-04-05T21:06:00+10:00'
        },
        {
          id: 30105,
          name_for_reservation: 'Сергей',
          num_people: 7,
          phone_number: '+79117406076',
          status: 'Живая очередь',
          seating_time: '2025-04-05T12:51:00+10:00',
          end_time: '2025-04-05T15:31:00+10:00'
        }
      ]
    },
    {
      id: '5a7212ec-d3e0-4897-9185-503984a381f3',
      capacity: 10,
      number: '108',
      zone: '2 этаж',
      orders: [
        {
          id: 'cbe88806-5ea0-48bf-b43f-274e97891fc1',
          status: 'New',
          start_time: '2025-04-05T16:37:00+10:00',
          end_time: '2025-04-05T18:11:00+10:00'
        },
        {
          id: 'bee5cf38-5c03-43d2-9774-50b10f76e57e',
          status: 'Banquet',
          start_time: '2025-04-05T20:01:00+10:00',
          end_time: '2025-04-05T22:09:00+10:00'
        },
        {
          id: '4486f6f6-6c27-47eb-83eb-de0b9249b312',
          status: 'Bill',
          start_time: '2025-04-05T14:58:00+10:00',
          end_time: '2025-04-05T17:17:00+10:00'
        },
        {
          id: '7b34981b-7268-4a89-832d-052f5e6433a4',
          status: 'Banquet',
          start_time: '2025-04-05T19:11:00+10:00',
          end_time: '2025-04-05T19:42:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30106,
          name_for_reservation: 'Анатолий',
          num_people: 10,
          phone_number: '+79882037938',
          status: 'Живая очередь',
          seating_time: '2025-04-05T18:14:00+10:00',
          end_time: '2025-04-05T21:05:00+10:00'
        },
        {
          id: 30107,
          name_for_reservation: 'Сергей',
          num_people: 2,
          phone_number: '+79992168234',
          status: 'Заявка',
          seating_time: '2025-04-05T16:24:00+10:00',
          end_time: '2025-04-05T18:31:00+10:00'
        },
        {
          id: 30108,
          name_for_reservation: 'Валентина',
          num_people: 4,
          phone_number: '+79516843253',
          status: 'Новая',
          seating_time: '2025-04-05T12:50:00+10:00',
          end_time: '2025-04-05T14:14:00+10:00'
        },
        {
          id: 30109,
          name_for_reservation: 'Ольга',
          num_people: 9,
          phone_number: '+79365805794',
          status: 'Открыт',
          seating_time: '2025-04-05T11:15:00+10:00',
          end_time: '2025-04-05T12:41:00+10:00'
        },
        {
          id: 30110,
          name_for_reservation: 'Евгения',
          num_people: 1,
          phone_number: '+79143529482',
          status: 'Закрыт',
          seating_time: '2025-04-05T21:02:00+10:00',
          end_time: '2025-04-05T23:01:00+10:00'
        },
        {
          id: 30111,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79757510038',
          status: 'Открыт',
          seating_time: '2025-04-05T14:30:00+10:00',
          end_time: '2025-04-05T15:37:00+10:00'
        }
      ]
    },
    {
      id: '8401ceb4-08a5-48d7-8e19-bc2bb44b1925',
      capacity: 12,
      number: '109',
      zone: '2 этаж',
      orders: [
        {
          id: 'bdd0d713-a6c8-4b09-9ad8-3e50970b0f7b',
          status: 'Bill',
          start_time: '2025-04-05T21:05:00+10:00',
          end_time: '2025-04-05T22:32:00+10:00'
        },
        {
          id: '0b96821d-3189-4c0b-abc7-9d309a96c37a',
          status: 'Bill',
          start_time: '2025-04-05T22:22:00+10:00',
          end_time: '2025-04-05T22:56:00+10:00'
        },
        {
          id: '6b3d9a4c-2cb2-41db-9c51-f9a4a6c9392c',
          status: 'Banquet',
          start_time: '2025-04-05T17:15:00+10:00',
          end_time: '2025-04-05T20:04:00+10:00'
        },
        {
          id: '971a3ee0-cc8a-49e9-a1af-00f1ef256219',
          status: 'Bill',
          start_time: '2025-04-05T13:50:00+10:00',
          end_time: '2025-04-05T15:46:00+10:00'
        },
        {
          id: 'fe8c7879-f3da-4385-b4de-63a770f38079',
          status: 'Bill',
          start_time: '2025-04-05T22:57:00+10:00',
          end_time: '2025-04-05T23:34:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30112,
          name_for_reservation: 'Василий',
          num_people: 7,
          phone_number: '+79127463571',
          status: 'Закрыт',
          seating_time: '2025-04-05T20:30:00+10:00',
          end_time: '2025-04-05T21:03:00+10:00'
        },
        {
          id: 30113,
          name_for_reservation: 'Анатолий',
          num_people: 3,
          phone_number: '+79791046128',
          status: 'Открыт',
          seating_time: '2025-04-05T11:57:00+10:00',
          end_time: '2025-04-05T12:40:00+10:00'
        },
        {
          id: 30114,
          name_for_reservation: 'Алина',
          num_people: 4,
          phone_number: '+79998922352',
          status: 'Закрыт',
          seating_time: '2025-04-05T18:03:00+10:00',
          end_time: '2025-04-05T21:01:00+10:00'
        },
        {
          id: 30115,
          name_for_reservation: 'Евгения',
          num_people: 9,
          phone_number: '+79192079858',
          status: 'Живая очередь',
          seating_time: '2025-04-05T20:17:00+10:00',
          end_time: '2025-04-05T20:53:00+10:00'
        }
      ]
    },
    {
      id: 'c11897c7-1ae3-4eaa-8ed0-6f87e359f363',
      capacity: 12,
      number: '110',
      zone: '2 этаж',
      orders: [
        {
          id: '08c8800a-88ed-4e50-a348-b43b7f594553',
          status: 'Bill',
          start_time: '2025-04-05T15:40:00+10:00',
          end_time: '2025-04-05T17:57:00+10:00'
        },
        {
          id: '1b3f110f-d53f-4b5b-92de-8581d23d0173',
          status: 'New',
          start_time: '2025-04-05T11:26:00+10:00',
          end_time: '2025-04-05T12:34:00+10:00'
        },
        {
          id: '8ccb511c-c464-4e36-89b3-f0034b576ade',
          status: 'Banquet',
          start_time: '2025-04-05T21:53:00+10:00',
          end_time: '2025-04-05T22:25:00+10:00'
        },
        {
          id: '96cb9336-44f7-437e-9665-00b18ba4ea80',
          status: 'Banquet',
          start_time: '2025-04-05T20:36:00+10:00',
          end_time: '2025-04-05T23:19:00+10:00'
        },
        {
          id: '77792f4c-50c4-412b-8608-d053305ff995',
          status: 'Bill',
          start_time: '2025-04-05T13:01:00+10:00',
          end_time: '2025-04-05T13:46:00+10:00'
        },
        {
          id: 'b989fb93-6fe4-459f-97e6-cd0371530abf',
          status: 'New',
          start_time: '2025-04-05T22:59:00+10:00',
          end_time: '2025-04-05T23:34:00+10:00'
        },
        {
          id: '67e49ab4-649a-4213-9aaa-a63f7c3ab35a',
          status: 'New',
          start_time: '2025-04-05T13:23:00+10:00',
          end_time: '2025-04-05T14:52:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30116,
          name_for_reservation: 'Алина',
          num_people: 4,
          phone_number: '+79719950331',
          status: 'Новая',
          seating_time: '2025-04-05T18:42:00+10:00',
          end_time: '2025-04-05T21:01:00+10:00'
        },
        {
          id: 30117,
          name_for_reservation: 'Лариса',
          num_people: 3,
          phone_number: '+79271443822',
          status: 'Закрыт',
          seating_time: '2025-04-05T16:53:00+10:00',
          end_time: '2025-04-05T18:03:00+10:00'
        },
        {
          id: 30118,
          name_for_reservation: 'Григорий',
          num_people: 12,
          phone_number: '+79259497227',
          status: 'Новая',
          seating_time: '2025-04-05T11:26:00+10:00',
          end_time: '2025-04-05T14:25:00+10:00'
        },
        {
          id: 30119,
          name_for_reservation: 'Наталья',
          num_people: 4,
          phone_number: '+79841580375',
          status: 'Открыт',
          seating_time: '2025-04-05T18:02:00+10:00',
          end_time: '2025-04-05T18:51:00+10:00'
        },
        {
          id: 30120,
          name_for_reservation: 'Иван',
          num_people: 10,
          phone_number: '+79810216157',
          status: 'Открыт',
          seating_time: '2025-04-05T21:56:00+10:00',
          end_time: '2025-04-05T23:12:00+10:00'
        }
      ]
    },
    {
      id: '94b05803-ae7b-4005-9c0d-7e4954edf12e',
      capacity: 2,
      number: 'B1',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '91fb30c8-55fc-4367-b344-4aa8b9c57e22',
          status: 'Banquet',
          start_time: '2025-04-05T16:31:00+10:00',
          end_time: '2025-04-05T17:19:00+10:00'
        },
        {
          id: '7e87132d-cbdc-487d-97b3-8e092b6a61ec',
          status: 'New',
          start_time: '2025-04-05T16:36:00+10:00',
          end_time: '2025-04-05T19:02:00+10:00'
        },
        {
          id: '86168106-a4a3-456c-866b-4f8c7546f7f4',
          status: 'Closed',
          start_time: '2025-04-05T12:37:00+10:00',
          end_time: '2025-04-05T14:13:00+10:00'
        },
        {
          id: '52c14788-2c6b-4feb-8474-485c44436f05',
          status: 'Bill',
          start_time: '2025-04-05T14:44:00+10:00',
          end_time: '2025-04-05T15:16:00+10:00'
        },
        {
          id: 'df71ac64-4f26-4fdc-b523-0f8514181f3f',
          status: 'Bill',
          start_time: '2025-04-05T19:36:00+10:00',
          end_time: '2025-04-05T21:00:00+10:00'
        },
        {
          id: '6a41aa2b-0013-4e52-a176-446cca8ea1f0',
          status: 'Banquet',
          start_time: '2025-04-05T19:02:00+10:00',
          end_time: '2025-04-05T20:23:00+10:00'
        },
        {
          id: '2773e9f6-82e8-4aca-b156-679f7aec70a8',
          status: 'Banquet',
          start_time: '2025-04-05T13:14:00+10:00',
          end_time: '2025-04-05T13:59:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30121,
          name_for_reservation: 'Иван',
          num_people: 1,
          phone_number: '+79602679921',
          status: 'Открыт',
          seating_time: '2025-04-05T12:37:00+10:00',
          end_time: '2025-04-05T15:34:00+10:00'
        },
        {
          id: 30122,
          name_for_reservation: 'Дмитрий',
          num_people: 1,
          phone_number: '+79355101892',
          status: 'Закрыт',
          seating_time: '2025-04-05T18:09:00+10:00',
          end_time: '2025-04-05T20:37:00+10:00'
        },
        {
          id: 30123,
          name_for_reservation: 'Ольга',
          num_people: 1,
          phone_number: '+79683387986',
          status: 'Живая очередь',
          seating_time: '2025-04-05T15:31:00+10:00',
          end_time: '2025-04-05T17:39:00+10:00'
        },
        {
          id: 30124,
          name_for_reservation: 'Анна',
          num_people: 2,
          phone_number: '+79130206448',
          status: 'Закрыт',
          seating_time: '2025-04-05T12:52:00+10:00',
          end_time: '2025-04-05T14:51:00+10:00'
        },
        {
          id: 30125,
          name_for_reservation: 'Наталья',
          num_people: 1,
          phone_number: '+79185324650',
          status: 'Заявка',
          seating_time: '2025-04-05T13:34:00+10:00',
          end_time: '2025-04-05T15:02:00+10:00'
        },
        {
          id: 30126,
          name_for_reservation: 'Валентина',
          num_people: 2,
          phone_number: '+79410296911',
          status: 'Новая',
          seating_time: '2025-04-05T16:55:00+10:00',
          end_time: '2025-04-05T19:37:00+10:00'
        }
      ]
    },
    {
      id: 'f7a3c022-ef33-487b-a133-d6f735ccaa70',
      capacity: 12,
      number: 'B2',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '9bbc88b8-e9c6-47d3-a3a9-1b3d87e75152',
          status: 'New',
          start_time: '2025-04-05T20:06:00+10:00',
          end_time: '2025-04-05T22:26:00+10:00'
        },
        {
          id: 'e47e0037-18f8-478b-bd3c-ba8bc748ae77',
          status: 'Bill',
          start_time: '2025-04-05T20:43:00+10:00',
          end_time: '2025-04-05T21:55:00+10:00'
        },
        {
          id: 'f3261a38-959c-4b55-b3e9-da71bdfb5d0d',
          status: 'Bill',
          start_time: '2025-04-05T12:27:00+10:00',
          end_time: '2025-04-05T14:32:00+10:00'
        },
        {
          id: 'e802b89f-27a7-43d5-9012-4d2076cc29ed',
          status: 'New',
          start_time: '2025-04-05T18:27:00+10:00',
          end_time: '2025-04-05T19:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30127,
          name_for_reservation: 'Евгений',
          num_people: 6,
          phone_number: '+79962347639',
          status: 'Закрыт',
          seating_time: '2025-04-05T15:38:00+10:00',
          end_time: '2025-04-05T16:52:00+10:00'
        },
        {
          id: 30128,
          name_for_reservation: 'Григорий',
          num_people: 3,
          phone_number: '+79726491453',
          status: 'Живая очередь',
          seating_time: '2025-04-05T11:29:00+10:00',
          end_time: '2025-04-05T14:13:00+10:00'
        },
        {
          id: 30129,
          name_for_reservation: 'Мария',
          num_people: 6,
          phone_number: '+79372483905',
          status: 'Новая',
          seating_time: '2025-04-05T22:29:00+10:00',
          end_time: '2025-04-05T23:04:00+10:00'
        },
        {
          id: 30130,
          name_for_reservation: 'Мария',
          num_people: 8,
          phone_number: '+79947122510',
          status: 'Заявка',
          seating_time: '2025-04-05T17:37:00+10:00',
          end_time: '2025-04-05T20:22:00+10:00'
        }
      ]
    },
    {
      id: 'bc0303eb-d03b-451d-819a-fb1a368f4f48',
      capacity: 6,
      number: 'B3',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'c7950151-b645-4156-8f45-a856963ef54f',
          status: 'Bill',
          start_time: '2025-04-05T14:58:00+10:00',
          end_time: '2025-04-05T16:01:00+10:00'
        },
        {
          id: '06caf604-7b4c-4a2d-bd69-b525274494fd',
          status: 'Bill',
          start_time: '2025-04-05T16:15:00+10:00',
          end_time: '2025-04-05T18:55:00+10:00'
        },
        {
          id: '641692e9-1af9-472e-9991-50c3f909f6ac',
          status: 'Bill',
          start_time: '2025-04-05T16:45:00+10:00',
          end_time: '2025-04-05T19:33:00+10:00'
        },
        {
          id: 'adb5e201-6924-4053-8e8d-2740bd765a58',
          status: 'Closed',
          start_time: '2025-04-05T16:19:00+10:00',
          end_time: '2025-04-05T19:07:00+10:00'
        },
        {
          id: 'f7add16d-af30-4bcc-941f-a6c7553e8b6c',
          status: 'Closed',
          start_time: '2025-04-05T12:00:00+10:00',
          end_time: '2025-04-05T13:35:00+10:00'
        },
        {
          id: 'aa3d7537-2d9a-47d0-8887-d172a6859f39',
          status: 'Banquet',
          start_time: '2025-04-05T15:45:00+10:00',
          end_time: '2025-04-05T16:34:00+10:00'
        },
        {
          id: '9d3c343f-b20c-4472-873a-085135356b27',
          status: 'New',
          start_time: '2025-04-05T13:14:00+10:00',
          end_time: '2025-04-05T14:09:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30131,
          name_for_reservation: 'Татьяна',
          num_people: 6,
          phone_number: '+79655022627',
          status: 'Новая',
          seating_time: '2025-04-05T13:37:00+10:00',
          end_time: '2025-04-05T15:48:00+10:00'
        },
        {
          id: 30132,
          name_for_reservation: 'Юлия',
          num_people: 5,
          phone_number: '+79615502877',
          status: 'Живая очередь',
          seating_time: '2025-04-05T15:50:00+10:00',
          end_time: '2025-04-05T16:41:00+10:00'
        },
        {
          id: 30133,
          name_for_reservation: 'Сергей',
          num_people: 6,
          phone_number: '+79487103333',
          status: 'Открыт',
          seating_time: '2025-04-05T19:40:00+10:00',
          end_time: '2025-04-05T20:39:00+10:00'
        },
        {
          id: 30134,
          name_for_reservation: 'Евгений',
          num_people: 1,
          phone_number: '+79415348284',
          status: 'Закрыт',
          seating_time: '2025-04-05T15:10:00+10:00',
          end_time: '2025-04-05T16:40:00+10:00'
        },
        {
          id: 30135,
          name_for_reservation: 'Анатолий',
          num_people: 5,
          phone_number: '+79608254785',
          status: 'Живая очередь',
          seating_time: '2025-04-05T19:05:00+10:00',
          end_time: '2025-04-05T21:02:00+10:00'
        },
        {
          id: 30136,
          name_for_reservation: 'Геннадий',
          num_people: 3,
          phone_number: '+79449408647',
          status: 'Открыт',
          seating_time: '2025-04-05T19:00:00+10:00',
          end_time: '2025-04-05T20:18:00+10:00'
        }
      ]
    },
    {
      id: '3aaf8414-63fb-4aa4-a939-a1de51c3fdbb',
      capacity: 4,
      number: 'B4',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'f7606705-fd3a-41be-960c-ba6c185d2919',
          status: 'Bill',
          start_time: '2025-04-05T22:15:00+10:00',
          end_time: '2025-04-05T22:53:00+10:00'
        },
        {
          id: 'aa29cecb-9910-437d-ace0-d060d84a86a4',
          status: 'Closed',
          start_time: '2025-04-05T16:23:00+10:00',
          end_time: '2025-04-05T19:10:00+10:00'
        },
        {
          id: '8a61aa06-37b4-4264-a2f6-35fab27b73e8',
          status: 'Bill',
          start_time: '2025-04-05T21:52:00+10:00',
          end_time: '2025-04-05T22:31:00+10:00'
        },
        {
          id: '83cc239c-716d-4a5a-96b9-4c1505064dd8',
          status: 'New',
          start_time: '2025-04-05T17:58:00+10:00',
          end_time: '2025-04-05T19:49:00+10:00'
        },
        {
          id: '9011e2ae-46b7-4fdf-b5e1-e22a16b435c8',
          status: 'Banquet',
          start_time: '2025-04-05T12:31:00+10:00',
          end_time: '2025-04-05T13:06:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30137,
          name_for_reservation: 'Сергей',
          num_people: 1,
          phone_number: '+79959729221',
          status: 'Новая',
          seating_time: '2025-04-05T12:13:00+10:00',
          end_time: '2025-04-05T14:07:00+10:00'
        },
        {
          id: 30138,
          name_for_reservation: 'Алина',
          num_people: 4,
          phone_number: '+79788000180',
          status: 'Заявка',
          seating_time: '2025-04-05T20:55:00+10:00',
          end_time: '2025-04-05T22:14:00+10:00'
        },
        {
          id: 30139,
          name_for_reservation: 'Константин',
          num_people: 4,
          phone_number: '+79770218980',
          status: 'Новая',
          seating_time: '2025-04-05T12:39:00+10:00',
          end_time: '2025-04-05T15:38:00+10:00'
        },
        {
          id: 30140,
          name_for_reservation: 'Аркадий',
          num_people: 4,
          phone_number: '+79902977804',
          status: 'Новая',
          seating_time: '2025-04-05T21:25:00+10:00',
          end_time: '2025-04-05T23:37:00+10:00'
        }
      ]
    },
    {
      id: '5094732f-1abe-47ec-a206-817354fb2c65',
      capacity: 12,
      number: 'B5',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'aeabaf2e-a510-47d5-8437-73e63e4175d0',
          status: 'Banquet',
          start_time: '2025-04-05T14:00:00+10:00',
          end_time: '2025-04-05T16:46:00+10:00'
        },
        {
          id: 'c844128b-c4d6-4417-b6e0-447595c38b64',
          status: 'Bill',
          start_time: '2025-04-05T15:05:00+10:00',
          end_time: '2025-04-05T16:05:00+10:00'
        },
        {
          id: '02fd8e9a-e9aa-4dd9-85ab-78d2e66a68e9',
          status: 'Banquet',
          start_time: '2025-04-05T19:03:00+10:00',
          end_time: '2025-04-05T21:14:00+10:00'
        },
        {
          id: '7c5ea0ec-46db-4619-b56c-fc110faaf68d',
          status: 'Banquet',
          start_time: '2025-04-05T18:24:00+10:00',
          end_time: '2025-04-05T20:42:00+10:00'
        },
        {
          id: 'dd627101-4b45-44e6-997a-56a577516e04',
          status: 'Bill',
          start_time: '2025-04-05T22:44:00+10:00',
          end_time: '2025-04-05T23:18:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30141,
          name_for_reservation: 'Андрей',
          num_people: 5,
          phone_number: '+79513001451',
          status: 'Новая',
          seating_time: '2025-04-05T12:15:00+10:00',
          end_time: '2025-04-05T14:13:00+10:00'
        },
        {
          id: 30142,
          name_for_reservation: 'Ольга',
          num_people: 9,
          phone_number: '+79820892285',
          status: 'Живая очередь',
          seating_time: '2025-04-05T18:26:00+10:00',
          end_time: '2025-04-05T20:20:00+10:00'
        },
        {
          id: 30143,
          name_for_reservation: 'Сергей',
          num_people: 3,
          phone_number: '+79175102173',
          status: 'Закрыт',
          seating_time: '2025-04-05T20:50:00+10:00',
          end_time: '2025-04-05T23:08:00+10:00'
        },
        {
          id: 30144,
          name_for_reservation: 'Григорий',
          num_people: 12,
          phone_number: '+79877846312',
          status: 'Открыт',
          seating_time: '2025-04-05T15:26:00+10:00',
          end_time: '2025-04-05T18:02:00+10:00'
        },
        {
          id: 30145,
          name_for_reservation: 'Андрей',
          num_people: 3,
          phone_number: '+79781049701',
          status: 'Новая',
          seating_time: '2025-04-05T20:23:00+10:00',
          end_time: '2025-04-05T22:38:00+10:00'
        },
        {
          id: 30146,
          name_for_reservation: 'Ольга',
          num_people: 11,
          phone_number: '+79307943947',
          status: 'Заявка',
          seating_time: '2025-04-05T19:18:00+10:00',
          end_time: '2025-04-05T21:51:00+10:00'
        }
      ]
    },
    {
      id: 'a23ca3a7-7822-4657-84f4-a93684d99467',
      capacity: 4,
      number: 'B6',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'd32e953d-5918-43b8-b92c-fe0a7e33c732',
          status: 'Bill',
          start_time: '2025-04-05T13:46:00+10:00',
          end_time: '2025-04-05T14:34:00+10:00'
        },
        {
          id: '5d070d5e-a882-4983-8911-86c4bedf4a08',
          status: 'Closed',
          start_time: '2025-04-05T14:41:00+10:00',
          end_time: '2025-04-05T15:42:00+10:00'
        },
        {
          id: 'f8d90e6c-963a-4310-aca9-00a36b6afdfb',
          status: 'Banquet',
          start_time: '2025-04-05T14:50:00+10:00',
          end_time: '2025-04-05T16:18:00+10:00'
        },
        {
          id: 'c2643d06-3d90-4536-bd2e-f5d75c6a01a7',
          status: 'Banquet',
          start_time: '2025-04-05T12:51:00+10:00',
          end_time: '2025-04-05T13:43:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30147,
          name_for_reservation: 'Иван',
          num_people: 4,
          phone_number: '+79842384165',
          status: 'Открыт',
          seating_time: '2025-04-05T14:41:00+10:00',
          end_time: '2025-04-05T16:38:00+10:00'
        },
        {
          id: 30148,
          name_for_reservation: 'Наталья',
          num_people: 1,
          phone_number: '+79145337475',
          status: 'Новая',
          seating_time: '2025-04-05T19:57:00+10:00',
          end_time: '2025-04-05T21:57:00+10:00'
        },
        {
          id: 30149,
          name_for_reservation: 'Василий',
          num_people: 1,
          phone_number: '+79986033429',
          status: 'Заявка',
          seating_time: '2025-04-05T15:46:00+10:00',
          end_time: '2025-04-05T18:40:00+10:00'
        },
        {
          id: 30150,
          name_for_reservation: 'Константин',
          num_people: 3,
          phone_number: '+79625457627',
          status: 'Открыт',
          seating_time: '2025-04-05T15:00:00+10:00',
          end_time: '2025-04-05T16:25:00+10:00'
        },
        {
          id: 30151,
          name_for_reservation: 'Татьяна',
          num_people: 4,
          phone_number: '+79244849283',
          status: 'Новая',
          seating_time: '2025-04-05T16:33:00+10:00',
          end_time: '2025-04-05T19:22:00+10:00'
        },
        {
          id: 30152,
          name_for_reservation: 'Анна',
          num_people: 1,
          phone_number: '+79165015050',
          status: 'Закрыт',
          seating_time: '2025-04-05T14:14:00+10:00',
          end_time: '2025-04-05T16:11:00+10:00'
        },
        {
          id: 30153,
          name_for_reservation: 'Аркадий',
          num_people: 4,
          phone_number: '+79266121679',
          status: 'Заявка',
          seating_time: '2025-04-05T21:47:00+10:00',
          end_time: '2025-04-05T23:03:00+10:00'
        }
      ]
    },
    {
      id: 'a0681819-0024-4e0f-b725-0677df75b089',
      capacity: 12,
      number: 'B7',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'b32d112b-db71-4fe5-a5b5-2d8bc52dc724',
          status: 'Bill',
          start_time: '2025-04-05T21:18:00+10:00',
          end_time: '2025-04-05T23:27:00+10:00'
        },
        {
          id: 'f754060c-a485-4700-b8fa-00e80f920faa',
          status: 'Banquet',
          start_time: '2025-04-05T18:22:00+10:00',
          end_time: '2025-04-05T20:05:00+10:00'
        },
        {
          id: 'bdacc84b-7f7f-4686-9443-cfe677117ff9',
          status: 'New',
          start_time: '2025-04-05T16:29:00+10:00',
          end_time: '2025-04-05T16:59:00+10:00'
        },
        {
          id: '9c5e951c-4e76-4498-806c-f70ef5768c69',
          status: 'Banquet',
          start_time: '2025-04-05T22:48:00+10:00',
          end_time: '2025-04-05T23:34:00+10:00'
        },
        {
          id: 'a6e7e6c5-dd2f-47c3-a906-50bf2ed64976',
          status: 'Banquet',
          start_time: '2025-04-05T17:04:00+10:00',
          end_time: '2025-04-05T19:32:00+10:00'
        },
        {
          id: '8cb482ce-027c-4da0-840b-d1423ee2cc5d',
          status: 'Banquet',
          start_time: '2025-04-05T19:38:00+10:00',
          end_time: '2025-04-05T22:01:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30154,
          name_for_reservation: 'Ксения',
          num_people: 10,
          phone_number: '+79291525897',
          status: 'Закрыт',
          seating_time: '2025-04-05T19:37:00+10:00',
          end_time: '2025-04-05T22:17:00+10:00'
        },
        {
          id: 30155,
          name_for_reservation: 'Евгения',
          num_people: 8,
          phone_number: '+79351812154',
          status: 'Новая',
          seating_time: '2025-04-05T14:30:00+10:00',
          end_time: '2025-04-05T15:10:00+10:00'
        },
        {
          id: 30156,
          name_for_reservation: 'Евгений',
          num_people: 10,
          phone_number: '+79528035594',
          status: 'Закрыт',
          seating_time: '2025-04-05T20:01:00+10:00',
          end_time: '2025-04-05T21:30:00+10:00'
        },
        {
          id: 30157,
          name_for_reservation: 'Наталья',
          num_people: 11,
          phone_number: '+79343123967',
          status: 'Заявка',
          seating_time: '2025-04-05T16:16:00+10:00',
          end_time: '2025-04-05T18:34:00+10:00'
        },
        {
          id: 30158,
          name_for_reservation: 'Аркадий',
          num_people: 10,
          phone_number: '+79238446525',
          status: 'Закрыт',
          seating_time: '2025-04-05T13:12:00+10:00',
          end_time: '2025-04-05T15:06:00+10:00'
        }
      ]
    },
    {
      id: '39657ba3-dc4e-429a-8047-7de5856f7229',
      capacity: 4,
      number: 'B8',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '70729d1f-afc3-48bf-bbbc-835446e4cb10',
          status: 'Banquet',
          start_time: '2025-04-05T15:19:00+10:00',
          end_time: '2025-04-05T17:27:00+10:00'
        },
        {
          id: '391692b5-e6d6-4216-9058-0e1346fcec0b',
          status: 'Bill',
          start_time: '2025-04-05T17:02:00+10:00',
          end_time: '2025-04-05T19:11:00+10:00'
        },
        {
          id: 'a6d9b43e-b759-4b2a-820e-5fceecb36991',
          status: 'Banquet',
          start_time: '2025-04-05T15:22:00+10:00',
          end_time: '2025-04-05T17:55:00+10:00'
        },
        {
          id: '21fe506f-83a1-4d96-b761-95f47110308e',
          status: 'Banquet',
          start_time: '2025-04-05T12:53:00+10:00',
          end_time: '2025-04-05T14:41:00+10:00'
        },
        {
          id: '2e64c085-0111-4c43-a7e9-f2dd93915ce1',
          status: 'Bill',
          start_time: '2025-04-05T20:49:00+10:00',
          end_time: '2025-04-05T21:36:00+10:00'
        },
        {
          id: '5680a531-8823-42d3-acb0-0fa387267fc1',
          status: 'Closed',
          start_time: '2025-04-05T20:24:00+10:00',
          end_time: '2025-04-05T21:23:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30159,
          name_for_reservation: 'Григорий',
          num_people: 3,
          phone_number: '+79751381056',
          status: 'Живая очередь',
          seating_time: '2025-04-05T19:28:00+10:00',
          end_time: '2025-04-05T22:28:00+10:00'
        },
        {
          id: 30160,
          name_for_reservation: 'Василий',
          num_people: 2,
          phone_number: '+79559068691',
          status: 'Живая очередь',
          seating_time: '2025-04-05T15:58:00+10:00',
          end_time: '2025-04-05T18:21:00+10:00'
        },
        {
          id: 30161,
          name_for_reservation: 'Алина',
          num_people: 2,
          phone_number: '+79452145821',
          status: 'Открыт',
          seating_time: '2025-04-05T19:25:00+10:00',
          end_time: '2025-04-05T21:05:00+10:00'
        },
        {
          id: 30162,
          name_for_reservation: 'Ольга',
          num_people: 2,
          phone_number: '+79865714572',
          status: 'Открыт',
          seating_time: '2025-04-05T11:54:00+10:00',
          end_time: '2025-04-05T12:52:00+10:00'
        }
      ]
    },
    {
      id: 'c40f88c4-6fb5-46bd-bd8e-79c10ed51a42',
      capacity: 2,
      number: 'B9',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'db69c67c-b970-4cbe-a652-e552edfca1e1',
          status: 'Banquet',
          start_time: '2025-04-05T20:17:00+10:00',
          end_time: '2025-04-05T22:59:00+10:00'
        },
        {
          id: 'e24fdf56-2cdb-4eea-8660-1499bd8f7a79',
          status: 'New',
          start_time: '2025-04-05T16:11:00+10:00',
          end_time: '2025-04-05T17:46:00+10:00'
        },
        {
          id: '5a8ca3b0-088b-4ecd-b2e5-8584cb108285',
          status: 'New',
          start_time: '2025-04-05T16:47:00+10:00',
          end_time: '2025-04-05T18:04:00+10:00'
        },
        {
          id: '54631d94-8ee5-44e1-96a6-ac2a1e0b3621',
          status: 'Bill',
          start_time: '2025-04-05T18:51:00+10:00',
          end_time: '2025-04-05T19:26:00+10:00'
        },
        {
          id: '79687311-73cf-458d-b8d4-4f051283d167',
          status: 'Closed',
          start_time: '2025-04-05T20:12:00+10:00',
          end_time: '2025-04-05T20:55:00+10:00'
        },
        {
          id: '26314023-5e0d-4978-8cbb-e3a830ddacdb',
          status: 'Bill',
          start_time: '2025-04-05T11:58:00+10:00',
          end_time: '2025-04-05T12:32:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30163,
          name_for_reservation: 'Василий',
          num_people: 2,
          phone_number: '+79294367098',
          status: 'Живая очередь',
          seating_time: '2025-04-05T18:23:00+10:00',
          end_time: '2025-04-05T21:23:00+10:00'
        },
        {
          id: 30164,
          name_for_reservation: 'Дмитрий',
          num_people: 1,
          phone_number: '+79806502288',
          status: 'Живая очередь',
          seating_time: '2025-04-05T11:37:00+10:00',
          end_time: '2025-04-05T12:40:00+10:00'
        },
        {
          id: 30165,
          name_for_reservation: 'Сергей',
          num_people: 2,
          phone_number: '+79689001259',
          status: 'Закрыт',
          seating_time: '2025-04-05T16:44:00+10:00',
          end_time: '2025-04-05T18:09:00+10:00'
        },
        {
          id: 30166,
          name_for_reservation: 'Наталья',
          num_people: 1,
          phone_number: '+79507828275',
          status: 'Закрыт',
          seating_time: '2025-04-05T15:47:00+10:00',
          end_time: '2025-04-05T18:42:00+10:00'
        }
      ]
    },
    {
      id: '4663569f-7a61-43c5-8672-2622e50c07f9',
      capacity: 6,
      number: 'B10',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '938ca84f-a631-42a9-a56c-0eb39090ff73',
          status: 'Closed',
          start_time: '2025-04-05T11:59:00+10:00',
          end_time: '2025-04-05T13:09:00+10:00'
        },
        {
          id: '5025c291-4620-433f-a060-0ca33fcb2ed6',
          status: 'New',
          start_time: '2025-04-05T22:57:00+10:00',
          end_time: '2025-04-05T23:39:00+10:00'
        },
        {
          id: '4ec2e3b0-c159-407d-bb0f-67852943d43b',
          status: 'Banquet',
          start_time: '2025-04-05T14:31:00+10:00',
          end_time: '2025-04-05T17:22:00+10:00'
        },
        {
          id: '1644a26e-4468-48dd-bdda-002c82b71957',
          status: 'Banquet',
          start_time: '2025-04-05T13:02:00+10:00',
          end_time: '2025-04-05T14:24:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30167,
          name_for_reservation: 'Алина',
          num_people: 3,
          phone_number: '+79892563944',
          status: 'Открыт',
          seating_time: '2025-04-05T17:16:00+10:00',
          end_time: '2025-04-05T19:05:00+10:00'
        },
        {
          id: 30168,
          name_for_reservation: 'Евгений',
          num_people: 6,
          phone_number: '+79464116232',
          status: 'Живая очередь',
          seating_time: '2025-04-05T22:21:00+10:00',
          end_time: '2025-04-05T23:07:00+10:00'
        },
        {
          id: 30169,
          name_for_reservation: 'Иван',
          num_people: 5,
          phone_number: '+79728534010',
          status: 'Открыт',
          seating_time: '2025-04-05T18:50:00+10:00',
          end_time: '2025-04-05T20:11:00+10:00'
        },
        {
          id: 30170,
          name_for_reservation: 'Ольга',
          num_people: 1,
          phone_number: '+79981681615',
          status: 'Заявка',
          seating_time: '2025-04-05T15:09:00+10:00',
          end_time: '2025-04-05T15:50:00+10:00'
        },
        {
          id: 30171,
          name_for_reservation: 'Анна',
          num_people: 4,
          phone_number: '+79689923008',
          status: 'Живая очередь',
          seating_time: '2025-04-05T19:34:00+10:00',
          end_time: '2025-04-05T21:59:00+10:00'
        }
      ]
    },
    {
      id: '81201b13-1a0d-46c1-82bb-f72ef79a82de',
      capacity: 6,
      number: 'B11',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '2e9b3d3e-c0f9-43fa-9a4d-208fa9522049',
          status: 'Banquet',
          start_time: '2025-04-05T14:25:00+10:00',
          end_time: '2025-04-05T16:59:00+10:00'
        },
        {
          id: 'a4f8a968-ca11-40c7-83e8-1c16fe82b90d',
          status: 'Bill',
          start_time: '2025-04-05T21:02:00+10:00',
          end_time: '2025-04-05T22:16:00+10:00'
        },
        {
          id: 'a50931f1-8345-4dfa-ae29-27cd90c9cefb',
          status: 'Closed',
          start_time: '2025-04-05T16:59:00+10:00',
          end_time: '2025-04-05T18:53:00+10:00'
        },
        {
          id: '7f0807e4-262a-4cc7-afd4-73efac09f686',
          status: 'Banquet',
          start_time: '2025-04-05T17:27:00+10:00',
          end_time: '2025-04-05T19:43:00+10:00'
        },
        {
          id: 'c00eee11-5129-412f-8f9d-bd89788f8fc6',
          status: 'Closed',
          start_time: '2025-04-05T20:19:00+10:00',
          end_time: '2025-04-05T23:06:00+10:00'
        },
        {
          id: '3109fdb8-1f27-47ac-9ef9-5e2891aeb6ae',
          status: 'Bill',
          start_time: '2025-04-05T17:00:00+10:00',
          end_time: '2025-04-05T20:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30172,
          name_for_reservation: 'Анна',
          num_people: 3,
          phone_number: '+79485217571',
          status: 'Живая очередь',
          seating_time: '2025-04-05T21:10:00+10:00',
          end_time: '2025-04-05T21:52:00+10:00'
        },
        {
          id: 30173,
          name_for_reservation: 'Сергей',
          num_people: 4,
          phone_number: '+79902577556',
          status: 'Заявка',
          seating_time: '2025-04-05T19:06:00+10:00',
          end_time: '2025-04-05T19:54:00+10:00'
        },
        {
          id: 30174,
          name_for_reservation: 'Евгения',
          num_people: 6,
          phone_number: '+79774656525',
          status: 'Открыт',
          seating_time: '2025-04-05T20:07:00+10:00',
          end_time: '2025-04-05T22:41:00+10:00'
        },
        {
          id: 30175,
          name_for_reservation: 'Геннадий',
          num_people: 1,
          phone_number: '+79775251673',
          status: 'Закрыт',
          seating_time: '2025-04-05T18:33:00+10:00',
          end_time: '2025-04-05T21:25:00+10:00'
        },
        {
          id: 30176,
          name_for_reservation: 'Ольга',
          num_people: 2,
          phone_number: '+79290828829',
          status: 'Новая',
          seating_time: '2025-04-05T11:14:00+10:00',
          end_time: '2025-04-05T13:22:00+10:00'
        }
      ]
    },
    {
      id: '8f885572-48be-4515-a26d-a211131f2538',
      capacity: 4,
      number: 'B12',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '9dd240db-9f3f-4c78-8272-64961c0bcea6',
          status: 'Bill',
          start_time: '2025-04-05T20:06:00+10:00',
          end_time: '2025-04-05T20:57:00+10:00'
        },
        {
          id: 'e8abdb7c-f23a-4d18-badf-87b110f81f7f',
          status: 'New',
          start_time: '2025-04-05T18:42:00+10:00',
          end_time: '2025-04-05T21:07:00+10:00'
        },
        {
          id: '676ea135-7116-40f9-995c-cb6952f00605',
          status: 'Closed',
          start_time: '2025-04-05T11:32:00+10:00',
          end_time: '2025-04-05T13:00:00+10:00'
        },
        {
          id: 'dccdcaee-bc58-414a-8ccc-414fe7744227',
          status: 'Banquet',
          start_time: '2025-04-05T21:21:00+10:00',
          end_time: '2025-04-05T22:44:00+10:00'
        },
        {
          id: '6c385b02-3b69-4cc3-a631-4c959090f01a',
          status: 'Closed',
          start_time: '2025-04-05T18:07:00+10:00',
          end_time: '2025-04-05T20:08:00+10:00'
        },
        {
          id: 'c9fcb330-c0b5-477a-8af3-b4a842b359f9',
          status: 'Banquet',
          start_time: '2025-04-05T20:46:00+10:00',
          end_time: '2025-04-05T21:55:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30177,
          name_for_reservation: 'Татьяна',
          num_people: 3,
          phone_number: '+79225547514',
          status: 'Новая',
          seating_time: '2025-04-05T18:32:00+10:00',
          end_time: '2025-04-05T20:50:00+10:00'
        },
        {
          id: 30178,
          name_for_reservation: 'Ксения',
          num_people: 2,
          phone_number: '+79364156570',
          status: 'Открыт',
          seating_time: '2025-04-05T14:30:00+10:00',
          end_time: '2025-04-05T17:21:00+10:00'
        },
        {
          id: 30179,
          name_for_reservation: 'Сергей',
          num_people: 4,
          phone_number: '+79314676463',
          status: 'Заявка',
          seating_time: '2025-04-05T14:53:00+10:00',
          end_time: '2025-04-05T16:59:00+10:00'
        },
        {
          id: 30180,
          name_for_reservation: 'Юлия',
          num_people: 2,
          phone_number: '+79899579674',
          status: 'Новая',
          seating_time: '2025-04-05T19:00:00+10:00',
          end_time: '2025-04-05T21:42:00+10:00'
        }
      ]
    },
    {
      id: '67438057-ff63-48e5-9559-3d4fc276ba9b',
      capacity: 12,
      number: 'B13',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'f31c038b-ef26-4296-a0a3-aaafc57393bd',
          status: 'Banquet',
          start_time: '2025-04-05T13:05:00+10:00',
          end_time: '2025-04-05T14:22:00+10:00'
        },
        {
          id: '34a7632b-dea6-45bc-aace-73ad8965ef07',
          status: 'Closed',
          start_time: '2025-04-05T13:13:00+10:00',
          end_time: '2025-04-05T16:06:00+10:00'
        },
        {
          id: '618faf6f-367b-4ecb-916c-d7a726236269',
          status: 'Banquet',
          start_time: '2025-04-05T13:16:00+10:00',
          end_time: '2025-04-05T16:05:00+10:00'
        },
        {
          id: '3dbef412-525f-48d4-994a-75cb6b29965a',
          status: 'Closed',
          start_time: '2025-04-05T16:36:00+10:00',
          end_time: '2025-04-05T17:07:00+10:00'
        },
        {
          id: '85cd185e-bbe1-4b74-aabf-2ba2bf3ae23e',
          status: 'Bill',
          start_time: '2025-04-05T17:19:00+10:00',
          end_time: '2025-04-05T17:59:00+10:00'
        },
        {
          id: 'af154a49-ae7f-49cc-a715-215cc851c9c9',
          status: 'New',
          start_time: '2025-04-05T17:49:00+10:00',
          end_time: '2025-04-05T19:52:00+10:00'
        },
        {
          id: '742ad47c-e67a-4efd-98da-1f30af3ca6e2',
          status: 'Closed',
          start_time: '2025-04-05T15:44:00+10:00',
          end_time: '2025-04-05T17:23:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30181,
          name_for_reservation: 'Мария',
          num_people: 3,
          phone_number: '+79651703481',
          status: 'Закрыт',
          seating_time: '2025-04-05T17:57:00+10:00',
          end_time: '2025-04-05T18:43:00+10:00'
        },
        {
          id: 30182,
          name_for_reservation: 'Наталья',
          num_people: 2,
          phone_number: '+79289542635',
          status: 'Заявка',
          seating_time: '2025-04-05T13:43:00+10:00',
          end_time: '2025-04-05T14:40:00+10:00'
        },
        {
          id: 30183,
          name_for_reservation: 'Евгения',
          num_people: 1,
          phone_number: '+79423733591',
          status: 'Закрыт',
          seating_time: '2025-04-05T16:33:00+10:00',
          end_time: '2025-04-05T17:24:00+10:00'
        },
        {
          id: 30184,
          name_for_reservation: 'Анатолий',
          num_people: 12,
          phone_number: '+79132804187',
          status: 'Заявка',
          seating_time: '2025-04-05T16:13:00+10:00',
          end_time: '2025-04-05T16:49:00+10:00'
        },
        {
          id: 30185,
          name_for_reservation: 'Константин',
          num_people: 6,
          phone_number: '+79494101848',
          status: 'Заявка',
          seating_time: '2025-04-05T22:59:00+10:00',
          end_time: '2025-04-05T23:29:00+10:00'
        },
        {
          id: 30186,
          name_for_reservation: 'Лариса',
          num_people: 10,
          phone_number: '+79886364581',
          status: 'Открыт',
          seating_time: '2025-04-05T15:38:00+10:00',
          end_time: '2025-04-05T18:20:00+10:00'
        }
      ]
    },
    {
      id: '651bbd3a-3eb3-4ff7-bd75-4e328afc78f4',
      capacity: 4,
      number: 'B14',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '340ae1c5-bcf4-404b-abd4-153e2981d81a',
          status: 'New',
          start_time: '2025-04-05T13:34:00+10:00',
          end_time: '2025-04-05T15:18:00+10:00'
        },
        {
          id: '33ace293-c2e8-4b31-932e-53e3b21348da',
          status: 'New',
          start_time: '2025-04-05T19:00:00+10:00',
          end_time: '2025-04-05T20:42:00+10:00'
        },
        {
          id: '13f5d2e4-4b62-4f4d-8729-dba6fdbeb157',
          status: 'Banquet',
          start_time: '2025-04-05T14:35:00+10:00',
          end_time: '2025-04-05T15:25:00+10:00'
        },
        {
          id: '5282b9a3-939a-4ac0-abbd-51dc11e8190c',
          status: 'Banquet',
          start_time: '2025-04-05T20:27:00+10:00',
          end_time: '2025-04-05T20:58:00+10:00'
        },
        {
          id: '06148743-ed7b-4b92-9b39-6c6b4ebad8a7',
          status: 'Banquet',
          start_time: '2025-04-05T11:34:00+10:00',
          end_time: '2025-04-05T14:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30187,
          name_for_reservation: 'Мария',
          num_people: 4,
          phone_number: '+79282685160',
          status: 'Открыт',
          seating_time: '2025-04-05T13:51:00+10:00',
          end_time: '2025-04-05T16:01:00+10:00'
        },
        {
          id: 30188,
          name_for_reservation: 'Григорий',
          num_people: 1,
          phone_number: '+79298801029',
          status: 'Заявка',
          seating_time: '2025-04-05T15:31:00+10:00',
          end_time: '2025-04-05T18:04:00+10:00'
        },
        {
          id: 30189,
          name_for_reservation: 'Константин',
          num_people: 4,
          phone_number: '+79453642371',
          status: 'Закрыт',
          seating_time: '2025-04-05T15:13:00+10:00',
          end_time: '2025-04-05T17:09:00+10:00'
        },
        {
          id: 30190,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79475305275',
          status: 'Живая очередь',
          seating_time: '2025-04-05T13:45:00+10:00',
          end_time: '2025-04-05T14:16:00+10:00'
        },
        {
          id: 30191,
          name_for_reservation: 'Ольга',
          num_people: 4,
          phone_number: '+79377102430',
          status: 'Открыт',
          seating_time: '2025-04-05T16:58:00+10:00',
          end_time: '2025-04-05T17:30:00+10:00'
        },
        {
          id: 30192,
          name_for_reservation: 'Валентина',
          num_people: 4,
          phone_number: '+79544954558',
          status: 'Новая',
          seating_time: '2025-04-05T21:19:00+10:00',
          end_time: '2025-04-05T22:45:00+10:00'
        },
        {
          id: 30193,
          name_for_reservation: 'Григорий',
          num_people: 4,
          phone_number: '+79606693193',
          status: 'Закрыт',
          seating_time: '2025-04-05T22:00:00+10:00',
          end_time: '2025-04-05T23:40:00+10:00'
        }
      ]
    },
    {
      id: '96987d8a-6de5-458f-aced-f5ac3dd41c10',
      capacity: 4,
      number: 'B15',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '5d4c4065-36b3-4658-afc4-dbab42806453',
          status: 'Banquet',
          start_time: '2025-04-05T22:21:00+10:00',
          end_time: '2025-04-05T22:54:00+10:00'
        },
        {
          id: 'c6fd4103-8015-47ae-b244-9d621d20e721',
          status: 'Closed',
          start_time: '2025-04-05T17:41:00+10:00',
          end_time: '2025-04-05T19:26:00+10:00'
        },
        {
          id: '1b82de49-8660-4a97-a0ed-b002dadc8fee',
          status: 'Closed',
          start_time: '2025-04-05T15:33:00+10:00',
          end_time: '2025-04-05T18:22:00+10:00'
        },
        {
          id: 'e04c939a-6f5f-466d-a325-6557e4cc82d9',
          status: 'Bill',
          start_time: '2025-04-05T17:12:00+10:00',
          end_time: '2025-04-05T19:28:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30194,
          name_for_reservation: 'Ксения',
          num_people: 2,
          phone_number: '+79138718414',
          status: 'Заявка',
          seating_time: '2025-04-05T20:39:00+10:00',
          end_time: '2025-04-05T23:23:00+10:00'
        },
        {
          id: 30195,
          name_for_reservation: 'Евгения',
          num_people: 2,
          phone_number: '+79143922125',
          status: 'Заявка',
          seating_time: '2025-04-05T20:50:00+10:00',
          end_time: '2025-04-05T23:18:00+10:00'
        },
        {
          id: 30196,
          name_for_reservation: 'Ксения',
          num_people: 1,
          phone_number: '+79443472078',
          status: 'Открыт',
          seating_time: '2025-04-05T23:08:00+10:00',
          end_time: '2025-04-05T23:38:00+10:00'
        },
        {
          id: 30197,
          name_for_reservation: 'Ольга',
          num_people: 4,
          phone_number: '+79999888575',
          status: 'Заявка',
          seating_time: '2025-04-05T13:38:00+10:00',
          end_time: '2025-04-05T16:18:00+10:00'
        }
      ]
    },
    {
      id: 'fcc2c141-fbcc-4619-99df-0c6fdae65e10',
      capacity: 4,
      number: 'B16',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '2116cd01-8dd6-490e-acaa-bb994b441da4',
          status: 'Bill',
          start_time: '2025-04-05T13:38:00+10:00',
          end_time: '2025-04-05T14:50:00+10:00'
        },
        {
          id: '83e1065e-259d-43d3-8859-c7d25beb5f52',
          status: 'New',
          start_time: '2025-04-05T18:56:00+10:00',
          end_time: '2025-04-05T21:28:00+10:00'
        },
        {
          id: '41586e5f-af37-41db-ab47-ec56268c38cf',
          status: 'Bill',
          start_time: '2025-04-05T18:06:00+10:00',
          end_time: '2025-04-05T20:59:00+10:00'
        },
        {
          id: '2749fec1-1731-4f9a-8046-117e3f72cfef',
          status: 'Banquet',
          start_time: '2025-04-05T15:50:00+10:00',
          end_time: '2025-04-05T17:47:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30198,
          name_for_reservation: 'Евгения',
          num_people: 3,
          phone_number: '+79642204526',
          status: 'Закрыт',
          seating_time: '2025-04-05T13:15:00+10:00',
          end_time: '2025-04-05T15:38:00+10:00'
        },
        {
          id: 30199,
          name_for_reservation: 'Алина',
          num_people: 3,
          phone_number: '+79314119686',
          status: 'Новая',
          seating_time: '2025-04-05T23:10:00+10:00',
          end_time: '2025-04-05T23:40:00+10:00'
        },
        {
          id: 30200,
          name_for_reservation: 'Анатолий',
          num_people: 3,
          phone_number: '+79515768749',
          status: 'Живая очередь',
          seating_time: '2025-04-05T12:53:00+10:00',
          end_time: '2025-04-05T14:50:00+10:00'
        },
        {
          id: 30201,
          name_for_reservation: 'Ксения',
          num_people: 2,
          phone_number: '+79192652464',
          status: 'Закрыт',
          seating_time: '2025-04-05T19:54:00+10:00',
          end_time: '2025-04-05T21:30:00+10:00'
        },
        {
          id: 30202,
          name_for_reservation: 'Юлия',
          num_people: 3,
          phone_number: '+79617396919',
          status: 'Заявка',
          seating_time: '2025-04-05T19:29:00+10:00',
          end_time: '2025-04-05T22:16:00+10:00'
        },
        {
          id: 30203,
          name_for_reservation: 'Василий',
          num_people: 1,
          phone_number: '+79453377542',
          status: 'Открыт',
          seating_time: '2025-04-05T17:11:00+10:00',
          end_time: '2025-04-05T17:56:00+10:00'
        }
      ]
    },
    {
      id: 'f28af566-39ce-4ca6-93f9-70bae6445099',
      capacity: 6,
      number: 'B17',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '273888b8-6525-455d-9711-e3981c347dde',
          status: 'New',
          start_time: '2025-04-05T18:17:00+10:00',
          end_time: '2025-04-05T21:04:00+10:00'
        },
        {
          id: '62c1fe4a-d300-4902-a036-fb5d07abf2d9',
          status: 'Banquet',
          start_time: '2025-04-05T14:55:00+10:00',
          end_time: '2025-04-05T17:01:00+10:00'
        },
        {
          id: 'f0214864-457f-4822-9b14-83c23234e649',
          status: 'New',
          start_time: '2025-04-05T23:05:00+10:00',
          end_time: '2025-04-05T23:39:00+10:00'
        },
        {
          id: 'd6e43d9f-97a3-421d-920a-8afc8e02f5ed',
          status: 'Banquet',
          start_time: '2025-04-05T22:39:00+10:00',
          end_time: '2025-04-05T23:36:00+10:00'
        },
        {
          id: 'e874f9f3-598a-49cc-bdd0-450d59c76652',
          status: 'Closed',
          start_time: '2025-04-05T16:58:00+10:00',
          end_time: '2025-04-05T17:34:00+10:00'
        },
        {
          id: '452900e6-46f6-48e0-b0a2-b53460a4dde6',
          status: 'Banquet',
          start_time: '2025-04-05T22:20:00+10:00',
          end_time: '2025-04-05T23:07:00+10:00'
        },
        {
          id: 'fbd13c56-1ef4-40f7-b375-643a77fc74d0',
          status: 'Bill',
          start_time: '2025-04-05T15:39:00+10:00',
          end_time: '2025-04-05T17:11:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30204,
          name_for_reservation: 'Валентина',
          num_people: 2,
          phone_number: '+79831724447',
          status: 'Заявка',
          seating_time: '2025-04-05T11:25:00+10:00',
          end_time: '2025-04-05T12:27:00+10:00'
        },
        {
          id: 30205,
          name_for_reservation: 'Лариса',
          num_people: 2,
          phone_number: '+79753984661',
          status: 'Новая',
          seating_time: '2025-04-05T18:52:00+10:00',
          end_time: '2025-04-05T21:10:00+10:00'
        },
        {
          id: 30206,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79140416424',
          status: 'Живая очередь',
          seating_time: '2025-04-05T11:58:00+10:00',
          end_time: '2025-04-05T14:30:00+10:00'
        },
        {
          id: 30207,
          name_for_reservation: 'Анна',
          num_people: 6,
          phone_number: '+79909180258',
          status: 'Заявка',
          seating_time: '2025-04-05T19:11:00+10:00',
          end_time: '2025-04-05T20:47:00+10:00'
        },
        {
          id: 30208,
          name_for_reservation: 'Константин',
          num_people: 6,
          phone_number: '+79647208106',
          status: 'Новая',
          seating_time: '2025-04-05T14:08:00+10:00',
          end_time: '2025-04-05T15:27:00+10:00'
        },
        {
          id: 30209,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79634909709',
          status: 'Новая',
          seating_time: '2025-04-05T21:37:00+10:00',
          end_time: '2025-04-05T23:00:00+10:00'
        },
        {
          id: 30210,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79483298619',
          status: 'Живая очередь',
          seating_time: '2025-04-05T14:23:00+10:00',
          end_time: '2025-04-05T16:53:00+10:00'
        }
      ]
    },
    {
      id: '83bc3555-fbd8-4b16-a0f3-805a04f05cf7',
      capacity: 8,
      number: 'B18',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '13728074-30c1-401b-8ec6-218f03c0b3f4',
          status: 'Bill',
          start_time: '2025-04-05T21:00:00+10:00',
          end_time: '2025-04-05T22:29:00+10:00'
        },
        {
          id: 'cc685a48-ed7f-40c2-8f80-69fbd98b58fb',
          status: 'Closed',
          start_time: '2025-04-05T20:43:00+10:00',
          end_time: '2025-04-05T21:51:00+10:00'
        },
        {
          id: 'a40e9843-d1e9-470a-bf26-f8967f115124',
          status: 'New',
          start_time: '2025-04-05T11:10:00+10:00',
          end_time: '2025-04-05T12:45:00+10:00'
        },
        {
          id: '0b682e55-0801-44a6-a449-e73d8ba7feb8',
          status: 'Banquet',
          start_time: '2025-04-05T11:42:00+10:00',
          end_time: '2025-04-05T13:27:00+10:00'
        }
      ],
      reservations: [
        {
          id: 30211,
          name_for_reservation: 'Ксения',
          num_people: 5,
          phone_number: '+79647565163',
          status: 'Открыт',
          seating_time: '2025-04-05T15:48:00+10:00',
          end_time: '2025-04-05T16:50:00+10:00'
        },
        {
          id: 30212,
          name_for_reservation: 'Наталья',
          num_people: 6,
          phone_number: '+79118797723',
          status: 'Заявка',
          seating_time: '2025-04-05T14:44:00+10:00',
          end_time: '2025-04-05T17:39:00+10:00'
        },
        {
          id: 30213,
          name_for_reservation: 'Евгения',
          num_people: 4,
          phone_number: '+79614065370',
          status: 'Живая очередь',
          seating_time: '2025-04-05T17:30:00+10:00',
          end_time: '2025-04-05T18:24:00+10:00'
        },
        {
          id: 30214,
          name_for_reservation: 'Александр',
          num_people: 5,
          phone_number: '+79224094172',
          status: 'Открыт',
          seating_time: '2025-04-05T22:26:00+10:00',
          end_time: '2025-04-05T23:10:00+10:00'
        },
        {
          id: 30215,
          name_for_reservation: 'Алина',
          num_people: 6,
          phone_number: '+79784003028',
          status: 'Новая',
          seating_time: '2025-04-05T18:49:00+10:00',
          end_time: '2025-04-05T20:15:00+10:00'
        },
        {
          id: 30216,
          name_for_reservation: 'Валентина',
          num_people: 6,
          phone_number: '+79376747851',
          status: 'Заявка',
          seating_time: '2025-04-05T16:04:00+10:00',
          end_time: '2025-04-05T17:57:00+10:00'
        }
      ]
    }
  ]
}
