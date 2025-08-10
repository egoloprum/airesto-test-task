import { BookingData } from "./type";

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
      id: '8102ffbe-a319-4c8b-a4c0-9b77a72b7008',
      capacity: 6,
      number: '1',
      zone: '1 этаж',
      orders: [
        {
          id: '276435b5-5259-436c-a07d-0ffc6c5780aa',
          status: 'Banquet',
          start_time: '2025-04-06T11:18:00+10:00',
          end_time: '2025-04-06T12:35:00+10:00'
        },
        {
          id: '8b5968b0-28d9-4b46-bbb5-68945b82f771',
          status: 'Closed',
          start_time: '2025-04-06T13:50:00+10:00',
          end_time: '2025-04-06T15:29:00+10:00'
        },
        {
          id: '94c6be23-39bd-47cb-853a-08cd25061993',
          status: 'Banquet',
          start_time: '2025-04-06T18:34:00+10:00',
          end_time: '2025-04-06T21:18:00+10:00'
        },
        {
          id: '86af6ca0-10fc-4ddb-91dd-4a8112960b42',
          status: 'New',
          start_time: '2025-04-06T17:40:00+10:00',
          end_time: '2025-04-06T20:40:00+10:00'
        },
        {
          id: '0cf40773-06cb-4a3d-a486-3c70539e0ecf',
          status: 'New',
          start_time: '2025-04-06T17:11:00+10:00',
          end_time: '2025-04-06T19:18:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40000,
          name_for_reservation: 'Аркадий',
          num_people: 5,
          phone_number: '+79357600482',
          status: 'Живая очередь',
          seating_time: '2025-04-06T15:18:00+10:00',
          end_time: '2025-04-06T18:09:00+10:00'
        },
        {
          id: 40001,
          name_for_reservation: 'Ксения',
          num_people: 5,
          phone_number: '+79293621875',
          status: 'Открыт',
          seating_time: '2025-04-06T22:55:00+10:00',
          end_time: '2025-04-06T23:32:00+10:00'
        },
        {
          id: 40002,
          name_for_reservation: 'Ольга',
          num_people: 4,
          phone_number: '+79925459651',
          status: 'Открыт',
          seating_time: '2025-04-06T13:33:00+10:00',
          end_time: '2025-04-06T14:31:00+10:00'
        },
        {
          id: 40003,
          name_for_reservation: 'Константин',
          num_people: 4,
          phone_number: '+79890534058',
          status: 'Закрыт',
          seating_time: '2025-04-06T19:22:00+10:00',
          end_time: '2025-04-06T21:21:00+10:00'
        }
      ]
    },
    {
      id: '15e14202-31e6-4f37-b26f-2b0df8259b10',
      capacity: 6,
      number: '2',
      zone: '1 этаж',
      orders: [
        {
          id: 'f37f7658-cf5b-4bbe-badd-209d3cc8a1dd',
          status: 'Bill',
          start_time: '2025-04-06T22:49:00+10:00',
          end_time: '2025-04-06T23:22:00+10:00'
        },
        {
          id: '69257e1e-0994-46f9-b7ca-35d69fa02290',
          status: 'Closed',
          start_time: '2025-04-06T13:31:00+10:00',
          end_time: '2025-04-06T15:04:00+10:00'
        },
        {
          id: '059ad24e-0da1-4317-9cb4-344e8931ebf1',
          status: 'Bill',
          start_time: '2025-04-06T22:46:00+10:00',
          end_time: '2025-04-06T23:36:00+10:00'
        },
        {
          id: 'ba7c5d3f-a4a6-4a05-8610-53d7545abce3',
          status: 'Bill',
          start_time: '2025-04-06T19:48:00+10:00',
          end_time: '2025-04-06T22:11:00+10:00'
        },
        {
          id: '85570ff8-9684-429f-a74a-e75a01ef9e2b',
          status: 'Closed',
          start_time: '2025-04-06T20:07:00+10:00',
          end_time: '2025-04-06T22:35:00+10:00'
        },
        {
          id: '1b292be2-fd17-4ada-bd61-406030386f59',
          status: 'Banquet',
          start_time: '2025-04-06T15:18:00+10:00',
          end_time: '2025-04-06T17:09:00+10:00'
        },
        {
          id: '042e4f94-7ffd-4da2-bbd7-d82bc6d38baa',
          status: 'Closed',
          start_time: '2025-04-06T21:21:00+10:00',
          end_time: '2025-04-06T22:12:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40004,
          name_for_reservation: 'Григорий',
          num_people: 2,
          phone_number: '+79900138842',
          status: 'Закрыт',
          seating_time: '2025-04-06T13:59:00+10:00',
          end_time: '2025-04-06T16:59:00+10:00'
        },
        {
          id: 40005,
          name_for_reservation: 'Наталья',
          num_people: 5,
          phone_number: '+79382011773',
          status: 'Заявка',
          seating_time: '2025-04-06T13:07:00+10:00',
          end_time: '2025-04-06T14:05:00+10:00'
        },
        {
          id: 40006,
          name_for_reservation: 'Татьяна',
          num_people: 5,
          phone_number: '+79872089131',
          status: 'Новая',
          seating_time: '2025-04-06T11:07:00+10:00',
          end_time: '2025-04-06T13:33:00+10:00'
        },
        {
          id: 40007,
          name_for_reservation: 'Татьяна',
          num_people: 4,
          phone_number: '+79184610223',
          status: 'Открыт',
          seating_time: '2025-04-06T11:11:00+10:00',
          end_time: '2025-04-06T13:00:00+10:00'
        },
        {
          id: 40008,
          name_for_reservation: 'Наталья',
          num_people: 3,
          phone_number: '+79677657505',
          status: 'Живая очередь',
          seating_time: '2025-04-06T19:58:00+10:00',
          end_time: '2025-04-06T21:23:00+10:00'
        },
        {
          id: 40009,
          name_for_reservation: 'Татьяна',
          num_people: 1,
          phone_number: '+79163024555',
          status: 'Живая очередь',
          seating_time: '2025-04-06T17:14:00+10:00',
          end_time: '2025-04-06T19:01:00+10:00'
        },
        {
          id: 40010,
          name_for_reservation: 'Анатолий',
          num_people: 1,
          phone_number: '+79769120683',
          status: 'Живая очередь',
          seating_time: '2025-04-06T11:28:00+10:00',
          end_time: '2025-04-06T12:15:00+10:00'
        }
      ]
    },
    {
      id: 'df0b8382-2ae9-43ae-ab78-21f3701756a4',
      capacity: 2,
      number: '3',
      zone: '1 этаж',
      orders: [
        {
          id: '27b123e8-7b39-438f-885d-862a425a8e3c',
          status: 'Bill',
          start_time: '2025-04-06T17:55:00+10:00',
          end_time: '2025-04-06T18:48:00+10:00'
        },
        {
          id: '2bdbabed-6dee-403f-b311-e410c1d8f145',
          status: 'New',
          start_time: '2025-04-06T12:57:00+10:00',
          end_time: '2025-04-06T13:52:00+10:00'
        },
        {
          id: '072ab5ee-3934-4290-9792-beaf333b0634',
          status: 'Bill',
          start_time: '2025-04-06T18:49:00+10:00',
          end_time: '2025-04-06T19:47:00+10:00'
        },
        {
          id: '6b96a4c6-f4e4-4a27-bad7-17b11b3b0b93',
          status: 'New',
          start_time: '2025-04-06T18:34:00+10:00',
          end_time: '2025-04-06T21:23:00+10:00'
        },
        {
          id: 'e9d60cc3-6c4c-471a-8d1a-18365722ca44',
          status: 'Bill',
          start_time: '2025-04-06T19:26:00+10:00',
          end_time: '2025-04-06T21:01:00+10:00'
        },
        {
          id: '07165c5f-dc5f-44ef-81b5-42d50b5f2152',
          status: 'Closed',
          start_time: '2025-04-06T15:56:00+10:00',
          end_time: '2025-04-06T16:51:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40011,
          name_for_reservation: 'Наталья',
          num_people: 2,
          phone_number: '+79698470932',
          status: 'Закрыт',
          seating_time: '2025-04-06T12:35:00+10:00',
          end_time: '2025-04-06T15:24:00+10:00'
        },
        {
          id: 40012,
          name_for_reservation: 'Ольга',
          num_people: 2,
          phone_number: '+79612933264',
          status: 'Новая',
          seating_time: '2025-04-06T22:14:00+10:00',
          end_time: '2025-04-06T23:10:00+10:00'
        },
        {
          id: 40013,
          name_for_reservation: 'Дмитрий',
          num_people: 2,
          phone_number: '+79680135087',
          status: 'Живая очередь',
          seating_time: '2025-04-06T20:03:00+10:00',
          end_time: '2025-04-06T22:37:00+10:00'
        },
        {
          id: 40014,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79852723053',
          status: 'Заявка',
          seating_time: '2025-04-06T19:40:00+10:00',
          end_time: '2025-04-06T20:33:00+10:00'
        },
        {
          id: 40015,
          name_for_reservation: 'Андрей',
          num_people: 2,
          phone_number: '+79531838719',
          status: 'Заявка',
          seating_time: '2025-04-06T14:05:00+10:00',
          end_time: '2025-04-06T15:44:00+10:00'
        },
        {
          id: 40016,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79387677913',
          status: 'Новая',
          seating_time: '2025-04-06T13:29:00+10:00',
          end_time: '2025-04-06T15:39:00+10:00'
        }
      ]
    },
    {
      id: '94aee5c9-a4bc-4449-863d-2cf5054d9e84',
      capacity: 12,
      number: '4',
      zone: '1 этаж',
      orders: [
        {
          id: 'dcde5d21-d2f3-4a50-9852-a048e92c262b',
          status: 'New',
          start_time: '2025-04-06T21:47:00+10:00',
          end_time: '2025-04-06T23:21:00+10:00'
        },
        {
          id: '84fd4467-dc43-4c25-8bd9-13b6e712704d',
          status: 'Closed',
          start_time: '2025-04-06T21:50:00+10:00',
          end_time: '2025-04-06T22:20:00+10:00'
        },
        {
          id: 'dfabf913-8392-4c85-9916-09d6ec0b0bf6',
          status: 'Banquet',
          start_time: '2025-04-06T20:46:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        },
        {
          id: '4045c8a0-d616-4cca-b749-d01c9a9bf0aa',
          status: 'Bill',
          start_time: '2025-04-06T12:49:00+10:00',
          end_time: '2025-04-06T13:37:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40017,
          name_for_reservation: 'Анна',
          num_people: 11,
          phone_number: '+79858131938',
          status: 'Заявка',
          seating_time: '2025-04-06T19:44:00+10:00',
          end_time: '2025-04-06T22:07:00+10:00'
        },
        {
          id: 40018,
          name_for_reservation: 'Аркадий',
          num_people: 7,
          phone_number: '+79752847655',
          status: 'Открыт',
          seating_time: '2025-04-06T20:25:00+10:00',
          end_time: '2025-04-06T22:39:00+10:00'
        },
        {
          id: 40019,
          name_for_reservation: 'Светлана',
          num_people: 3,
          phone_number: '+79619694236',
          status: 'Новая',
          seating_time: '2025-04-06T20:42:00+10:00',
          end_time: '2025-04-06T21:34:00+10:00'
        },
        {
          id: 40020,
          name_for_reservation: 'Лариса',
          num_people: 7,
          phone_number: '+79854838893',
          status: 'Открыт',
          seating_time: '2025-04-06T20:35:00+10:00',
          end_time: '2025-04-06T21:46:00+10:00'
        },
        {
          id: 40021,
          name_for_reservation: 'Светлана',
          num_people: 11,
          phone_number: '+79922462734',
          status: 'Живая очередь',
          seating_time: '2025-04-06T12:46:00+10:00',
          end_time: '2025-04-06T14:21:00+10:00'
        },
        {
          id: 40022,
          name_for_reservation: 'Татьяна',
          num_people: 9,
          phone_number: '+79687949261',
          status: 'Новая',
          seating_time: '2025-04-06T21:40:00+10:00',
          end_time: '2025-04-06T23:20:00+10:00'
        }
      ]
    },
    {
      id: 'd2abb02c-c7d4-4a39-a648-fe43c8e77915',
      capacity: 2,
      number: '5',
      zone: '1 этаж',
      orders: [
        {
          id: 'a0b1a1df-279d-4687-be4f-959e1be4bbcd',
          status: 'Bill',
          start_time: '2025-04-06T19:18:00+10:00',
          end_time: '2025-04-06T20:06:00+10:00'
        },
        {
          id: '997477b2-48ac-45ed-9add-90827f0074c6',
          status: 'Bill',
          start_time: '2025-04-06T18:03:00+10:00',
          end_time: '2025-04-06T20:45:00+10:00'
        },
        {
          id: '09b48895-7623-47ab-832b-c7669327c0a1',
          status: 'Banquet',
          start_time: '2025-04-06T22:31:00+10:00',
          end_time: '2025-04-06T23:35:00+10:00'
        },
        {
          id: '2ea2a116-433d-4243-b6a0-696703540cb6',
          status: 'Banquet',
          start_time: '2025-04-06T16:31:00+10:00',
          end_time: '2025-04-06T17:05:00+10:00'
        },
        {
          id: '48c58585-bbf0-49e9-849a-073fdcda22fc',
          status: 'Bill',
          start_time: '2025-04-06T18:08:00+10:00',
          end_time: '2025-04-06T20:34:00+10:00'
        },
        {
          id: 'd5ab46c9-aeda-487f-b92f-7b7d95d21cd6',
          status: 'Closed',
          start_time: '2025-04-06T19:38:00+10:00',
          end_time: '2025-04-06T22:07:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40023,
          name_for_reservation: 'Ксения',
          num_people: 1,
          phone_number: '+79890741394',
          status: 'Открыт',
          seating_time: '2025-04-06T15:44:00+10:00',
          end_time: '2025-04-06T16:48:00+10:00'
        },
        {
          id: 40024,
          name_for_reservation: 'Александр',
          num_people: 2,
          phone_number: '+79303399301',
          status: 'Закрыт',
          seating_time: '2025-04-06T15:00:00+10:00',
          end_time: '2025-04-06T16:30:00+10:00'
        },
        {
          id: 40025,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79527229425',
          status: 'Открыт',
          seating_time: '2025-04-06T21:45:00+10:00',
          end_time: '2025-04-06T23:24:00+10:00'
        },
        {
          id: 40026,
          name_for_reservation: 'Татьяна',
          num_people: 1,
          phone_number: '+79138334160',
          status: 'Открыт',
          seating_time: '2025-04-06T11:36:00+10:00',
          end_time: '2025-04-06T13:59:00+10:00'
        },
        {
          id: 40027,
          name_for_reservation: 'Роман',
          num_people: 1,
          phone_number: '+79142704255',
          status: 'Открыт',
          seating_time: '2025-04-06T21:24:00+10:00',
          end_time: '2025-04-06T22:17:00+10:00'
        },
        {
          id: 40028,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79857525577',
          status: 'Закрыт',
          seating_time: '2025-04-06T13:56:00+10:00',
          end_time: '2025-04-06T15:06:00+10:00'
        },
        {
          id: 40029,
          name_for_reservation: 'Константин',
          num_people: 1,
          phone_number: '+79302192876',
          status: 'Открыт',
          seating_time: '2025-04-06T20:58:00+10:00',
          end_time: '2025-04-06T22:14:00+10:00'
        }
      ]
    },
    {
      id: '194720bb-d8bf-40c5-ac6f-b8967e8972ac',
      capacity: 12,
      number: '6',
      zone: '1 этаж',
      orders: [
        {
          id: '995aaaad-acd0-414b-bf27-6124ea380d92',
          status: 'Banquet',
          start_time: '2025-04-06T17:55:00+10:00',
          end_time: '2025-04-06T19:38:00+10:00'
        },
        {
          id: 'c108f5ff-ccfb-4332-9654-6f95897fc4b2',
          status: 'Banquet',
          start_time: '2025-04-06T11:06:00+10:00',
          end_time: '2025-04-06T14:06:00+10:00'
        },
        {
          id: 'e9a49ec6-7c82-40c2-85f1-f8a6e6f2b1ee',
          status: 'Bill',
          start_time: '2025-04-06T16:39:00+10:00',
          end_time: '2025-04-06T19:05:00+10:00'
        },
        {
          id: '3a700e55-48fa-4b87-9c17-2a266a093e3f',
          status: 'Bill',
          start_time: '2025-04-06T14:15:00+10:00',
          end_time: '2025-04-06T16:31:00+10:00'
        },
        {
          id: 'd9a752c7-1f37-4c0c-a31b-eb54d7c04ab9',
          status: 'New',
          start_time: '2025-04-06T16:32:00+10:00',
          end_time: '2025-04-06T18:38:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40030,
          name_for_reservation: 'Константин',
          num_people: 9,
          phone_number: '+79602255138',
          status: 'Закрыт',
          seating_time: '2025-04-06T15:41:00+10:00',
          end_time: '2025-04-06T18:08:00+10:00'
        },
        {
          id: 40031,
          name_for_reservation: 'Аркадий',
          num_people: 7,
          phone_number: '+79839672981',
          status: 'Живая очередь',
          seating_time: '2025-04-06T19:07:00+10:00',
          end_time: '2025-04-06T20:46:00+10:00'
        },
        {
          id: 40032,
          name_for_reservation: 'Константин',
          num_people: 1,
          phone_number: '+79535265308',
          status: 'Открыт',
          seating_time: '2025-04-06T19:45:00+10:00',
          end_time: '2025-04-06T21:00:00+10:00'
        },
        {
          id: 40033,
          name_for_reservation: 'Андрей',
          num_people: 5,
          phone_number: '+79472447612',
          status: 'Живая очередь',
          seating_time: '2025-04-06T11:46:00+10:00',
          end_time: '2025-04-06T14:37:00+10:00'
        }
      ]
    },
    {
      id: '6ad702f7-fbe1-4f8b-8bec-eb8dbd2b001f',
      capacity: 4,
      number: '7',
      zone: '1 этаж',
      orders: [
        {
          id: 'f7091128-9295-493b-a041-f5052c6c865f',
          status: 'Bill',
          start_time: '2025-04-06T18:28:00+10:00',
          end_time: '2025-04-06T19:13:00+10:00'
        },
        {
          id: '96d906ab-29a8-40e1-8d92-55f94de90fb8',
          status: 'Closed',
          start_time: '2025-04-06T12:53:00+10:00',
          end_time: '2025-04-06T13:35:00+10:00'
        },
        {
          id: '987b4683-ce0f-4803-8300-a4c4e40e4dc4',
          status: 'New',
          start_time: '2025-04-06T21:01:00+10:00',
          end_time: '2025-04-06T21:41:00+10:00'
        },
        {
          id: '0b81f32e-9089-425f-8d8f-bdc058756a07',
          status: 'Bill',
          start_time: '2025-04-06T17:03:00+10:00',
          end_time: '2025-04-06T18:51:00+10:00'
        },
        {
          id: '267661a0-0de1-41f2-9408-78838212658a',
          status: 'Bill',
          start_time: '2025-04-06T22:54:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        },
        {
          id: '5c12cef4-8a3c-46cc-a9e8-f008cc79e806',
          status: 'Banquet',
          start_time: '2025-04-06T18:31:00+10:00',
          end_time: '2025-04-06T20:44:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40034,
          name_for_reservation: 'Геннадий',
          num_people: 4,
          phone_number: '+79913974756',
          status: 'Живая очередь',
          seating_time: '2025-04-06T17:07:00+10:00',
          end_time: '2025-04-06T18:33:00+10:00'
        },
        {
          id: 40035,
          name_for_reservation: 'Роман',
          num_people: 4,
          phone_number: '+79897716844',
          status: 'Закрыт',
          seating_time: '2025-04-06T21:18:00+10:00',
          end_time: '2025-04-06T22:40:00+10:00'
        },
        {
          id: 40036,
          name_for_reservation: 'Константин',
          num_people: 1,
          phone_number: '+79511212439',
          status: 'Закрыт',
          seating_time: '2025-04-06T22:55:00+10:00',
          end_time: '2025-04-06T23:33:00+10:00'
        },
        {
          id: 40037,
          name_for_reservation: 'Юлия',
          num_people: 4,
          phone_number: '+79880787302',
          status: 'Заявка',
          seating_time: '2025-04-06T22:43:00+10:00',
          end_time: '2025-04-06T23:29:00+10:00'
        },
        {
          id: 40038,
          name_for_reservation: 'Аркадий',
          num_people: 4,
          phone_number: '+79209405596',
          status: 'Открыт',
          seating_time: '2025-04-06T16:45:00+10:00',
          end_time: '2025-04-06T18:18:00+10:00'
        },
        {
          id: 40039,
          name_for_reservation: 'Евгения',
          num_people: 4,
          phone_number: '+79410819326',
          status: 'Закрыт',
          seating_time: '2025-04-06T20:20:00+10:00',
          end_time: '2025-04-06T22:39:00+10:00'
        }
      ]
    },
    {
      id: 'da5cba7a-7549-40ed-b3f8-4730bda95dd5',
      capacity: 10,
      number: '8',
      zone: '1 этаж',
      orders: [
        {
          id: '6b6c2472-761e-41b2-94df-ea65c18fe09c',
          status: 'Bill',
          start_time: '2025-04-06T12:01:00+10:00',
          end_time: '2025-04-06T14:52:00+10:00'
        },
        {
          id: '1dcd8aaa-a1eb-4f4f-8658-0a2e6537d1ce',
          status: 'Bill',
          start_time: '2025-04-06T20:16:00+10:00',
          end_time: '2025-04-06T22:38:00+10:00'
        },
        {
          id: '4b8424ac-bfc6-45c0-8373-412ab65bf457',
          status: 'Closed',
          start_time: '2025-04-06T12:27:00+10:00',
          end_time: '2025-04-06T14:31:00+10:00'
        },
        {
          id: '37193d5c-c502-414b-919b-ccc3c2f4a247',
          status: 'Banquet',
          start_time: '2025-04-06T18:57:00+10:00',
          end_time: '2025-04-06T21:30:00+10:00'
        },
        {
          id: 'f7c44035-14bc-46bf-807b-a5bf32972388',
          status: 'New',
          start_time: '2025-04-06T21:57:00+10:00',
          end_time: '2025-04-06T22:39:00+10:00'
        },
        {
          id: 'fa102575-e03a-4121-8b9d-56887854e505',
          status: 'Banquet',
          start_time: '2025-04-06T14:51:00+10:00',
          end_time: '2025-04-06T17:38:00+10:00'
        },
        {
          id: 'c5ea05e7-f295-4698-a3aa-770398da9ea3',
          status: 'Closed',
          start_time: '2025-04-06T16:57:00+10:00',
          end_time: '2025-04-06T18:26:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40040,
          name_for_reservation: 'Светлана',
          num_people: 9,
          phone_number: '+79468995183',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:40:00+10:00',
          end_time: '2025-04-06T19:24:00+10:00'
        },
        {
          id: 40041,
          name_for_reservation: 'Юлия',
          num_people: 10,
          phone_number: '+79721283431',
          status: 'Заявка',
          seating_time: '2025-04-06T22:23:00+10:00',
          end_time: '2025-04-06T23:15:00+10:00'
        },
        {
          id: 40042,
          name_for_reservation: 'Аркадий',
          num_people: 10,
          phone_number: '+79310357663',
          status: 'Живая очередь',
          seating_time: '2025-04-06T21:59:00+10:00',
          end_time: '2025-04-06T23:00:00+10:00'
        },
        {
          id: 40043,
          name_for_reservation: 'Светлана',
          num_people: 4,
          phone_number: '+79720103561',
          status: 'Живая очередь',
          seating_time: '2025-04-06T15:55:00+10:00',
          end_time: '2025-04-06T17:43:00+10:00'
        },
        {
          id: 40044,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79236481959',
          status: 'Открыт',
          seating_time: '2025-04-06T21:45:00+10:00',
          end_time: '2025-04-06T22:15:00+10:00'
        },
        {
          id: 40045,
          name_for_reservation: 'Василий',
          num_people: 6,
          phone_number: '+79874936994',
          status: 'Открыт',
          seating_time: '2025-04-06T19:11:00+10:00',
          end_time: '2025-04-06T20:59:00+10:00'
        },
        {
          id: 40046,
          name_for_reservation: 'Валентина',
          num_people: 9,
          phone_number: '+79651336899',
          status: 'Живая очередь',
          seating_time: '2025-04-06T15:45:00+10:00',
          end_time: '2025-04-06T18:42:00+10:00'
        }
      ]
    },
    {
      id: '891a7646-612c-4c00-a4a5-8773f494f413',
      capacity: 8,
      number: '9',
      zone: '1 этаж',
      orders: [
        {
          id: '17a674c5-1776-408b-8203-a0c26431eec8',
          status: 'New',
          start_time: '2025-04-06T17:30:00+10:00',
          end_time: '2025-04-06T18:54:00+10:00'
        },
        {
          id: '4b13e435-79ec-41ac-ae3c-f4a3f081b9a6',
          status: 'Banquet',
          start_time: '2025-04-06T14:38:00+10:00',
          end_time: '2025-04-06T16:16:00+10:00'
        },
        {
          id: '165389cd-acb3-4f5c-ad71-a9d361e21dd9',
          status: 'New',
          start_time: '2025-04-06T22:49:00+10:00',
          end_time: '2025-04-06T23:21:00+10:00'
        },
        {
          id: 'dfcbafa3-a394-44c6-89fd-5c7d76772dfa',
          status: 'Bill',
          start_time: '2025-04-06T11:23:00+10:00',
          end_time: '2025-04-06T13:47:00+10:00'
        },
        {
          id: '8a5d07c8-cb38-4d8d-8976-8becc50589c9',
          status: 'Closed',
          start_time: '2025-04-06T12:43:00+10:00',
          end_time: '2025-04-06T13:51:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40047,
          name_for_reservation: 'Константин',
          num_people: 3,
          phone_number: '+79515123473',
          status: 'Заявка',
          seating_time: '2025-04-06T19:26:00+10:00',
          end_time: '2025-04-06T20:30:00+10:00'
        },
        {
          id: 40048,
          name_for_reservation: 'Василий',
          num_people: 7,
          phone_number: '+79567402777',
          status: 'Живая очередь',
          seating_time: '2025-04-06T15:12:00+10:00',
          end_time: '2025-04-06T16:57:00+10:00'
        },
        {
          id: 40049,
          name_for_reservation: 'Григорий',
          num_people: 1,
          phone_number: '+79250230347',
          status: 'Заявка',
          seating_time: '2025-04-06T23:07:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        },
        {
          id: 40050,
          name_for_reservation: 'Аркадий',
          num_people: 5,
          phone_number: '+79314154225',
          status: 'Заявка',
          seating_time: '2025-04-06T14:42:00+10:00',
          end_time: '2025-04-06T15:46:00+10:00'
        }
      ]
    },
    {
      id: '725e123a-f011-41bc-a136-81089a3fec53',
      capacity: 10,
      number: '10',
      zone: '1 этаж',
      orders: [
        {
          id: '7dea3239-d15d-4479-9094-c94db797783f',
          status: 'Bill',
          start_time: '2025-04-06T16:21:00+10:00',
          end_time: '2025-04-06T17:32:00+10:00'
        },
        {
          id: 'd18e1d0f-f250-46d1-90fe-48a70911396c',
          status: 'Banquet',
          start_time: '2025-04-06T20:54:00+10:00',
          end_time: '2025-04-06T22:11:00+10:00'
        },
        {
          id: '368986f3-995c-4037-909e-01a7ac5a069e',
          status: 'Bill',
          start_time: '2025-04-06T15:54:00+10:00',
          end_time: '2025-04-06T18:06:00+10:00'
        },
        {
          id: '44ec686c-d1f6-4775-acb6-a2ac40257573',
          status: 'New',
          start_time: '2025-04-06T19:19:00+10:00',
          end_time: '2025-04-06T20:51:00+10:00'
        },
        {
          id: '8bb7858a-53e4-4a9c-8e24-b53d90d68db2',
          status: 'New',
          start_time: '2025-04-06T17:12:00+10:00',
          end_time: '2025-04-06T19:53:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40051,
          name_for_reservation: 'Евгений',
          num_people: 10,
          phone_number: '+79871851828',
          status: 'Заявка',
          seating_time: '2025-04-06T21:26:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        },
        {
          id: 40052,
          name_for_reservation: 'Геннадий',
          num_people: 3,
          phone_number: '+79360082654',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:23:00+10:00',
          end_time: '2025-04-06T18:19:00+10:00'
        },
        {
          id: 40053,
          name_for_reservation: 'Роман',
          num_people: 7,
          phone_number: '+79489846679',
          status: 'Открыт',
          seating_time: '2025-04-06T15:02:00+10:00',
          end_time: '2025-04-06T17:08:00+10:00'
        },
        {
          id: 40054,
          name_for_reservation: 'Мария',
          num_people: 6,
          phone_number: '+79581389284',
          status: 'Закрыт',
          seating_time: '2025-04-06T18:28:00+10:00',
          end_time: '2025-04-06T19:46:00+10:00'
        },
        {
          id: 40055,
          name_for_reservation: 'Анна',
          num_people: 8,
          phone_number: '+79442389175',
          status: 'Заявка',
          seating_time: '2025-04-06T20:28:00+10:00',
          end_time: '2025-04-06T21:11:00+10:00'
        }
      ]
    },
    {
      id: '01b3a4d7-313b-48b0-8548-d47600939a7b',
      capacity: 4,
      number: '11',
      zone: '1 этаж',
      orders: [
        {
          id: '6d8b4e34-830b-4af0-8130-fcefef164098',
          status: 'Bill',
          start_time: '2025-04-06T21:33:00+10:00',
          end_time: '2025-04-06T22:59:00+10:00'
        },
        {
          id: 'a4b69824-5947-4df5-b6d1-1a430bfe1bf6',
          status: 'Closed',
          start_time: '2025-04-06T21:21:00+10:00',
          end_time: '2025-04-06T23:39:00+10:00'
        },
        {
          id: 'c05dc99b-6cd4-4134-91e9-792fd3f30324',
          status: 'Closed',
          start_time: '2025-04-06T17:37:00+10:00',
          end_time: '2025-04-06T19:04:00+10:00'
        },
        {
          id: '582de6f0-da19-4e65-846e-7fdc7bdab567',
          status: 'Closed',
          start_time: '2025-04-06T13:34:00+10:00',
          end_time: '2025-04-06T14:30:00+10:00'
        },
        {
          id: 'b89a648a-b09f-41d5-ade1-200d797f0d3a',
          status: 'Bill',
          start_time: '2025-04-06T13:21:00+10:00',
          end_time: '2025-04-06T14:08:00+10:00'
        },
        {
          id: '5dd6711c-c3cb-4b07-9edb-3abbd0a5a0da',
          status: 'Banquet',
          start_time: '2025-04-06T19:24:00+10:00',
          end_time: '2025-04-06T22:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40056,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79434961563',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:37:00+10:00',
          end_time: '2025-04-06T19:04:00+10:00'
        },
        {
          id: 40057,
          name_for_reservation: 'Анна',
          num_people: 3,
          phone_number: '+79807607348',
          status: 'Заявка',
          seating_time: '2025-04-06T14:17:00+10:00',
          end_time: '2025-04-06T16:09:00+10:00'
        },
        {
          id: 40058,
          name_for_reservation: 'Ольга',
          num_people: 2,
          phone_number: '+79281770388',
          status: 'Новая',
          seating_time: '2025-04-06T11:58:00+10:00',
          end_time: '2025-04-06T14:44:00+10:00'
        },
        {
          id: 40059,
          name_for_reservation: 'Роман',
          num_people: 3,
          phone_number: '+79255505213',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:02:00+10:00',
          end_time: '2025-04-06T18:59:00+10:00'
        },
        {
          id: 40060,
          name_for_reservation: 'Татьяна',
          num_people: 2,
          phone_number: '+79753491022',
          status: 'Открыт',
          seating_time: '2025-04-06T19:34:00+10:00',
          end_time: '2025-04-06T20:05:00+10:00'
        },
        {
          id: 40061,
          name_for_reservation: 'Ксения',
          num_people: 1,
          phone_number: '+79319104246',
          status: 'Новая',
          seating_time: '2025-04-06T12:11:00+10:00',
          end_time: '2025-04-06T13:56:00+10:00'
        }
      ]
    },
    {
      id: '88c60cef-823f-45ee-84ff-65bbc9fadda8',
      capacity: 6,
      number: '12',
      zone: '1 этаж',
      orders: [
        {
          id: 'd2637004-f109-4e11-b0cf-f3e6d7cb4653',
          status: 'Banquet',
          start_time: '2025-04-06T13:32:00+10:00',
          end_time: '2025-04-06T15:52:00+10:00'
        },
        {
          id: '6ee8190c-c6fc-4e09-a83a-198b7f6303ff',
          status: 'Closed',
          start_time: '2025-04-06T16:39:00+10:00',
          end_time: '2025-04-06T17:52:00+10:00'
        },
        {
          id: 'f28b8b53-7ac4-4efb-a409-bd0f33f67941',
          status: 'Banquet',
          start_time: '2025-04-06T16:01:00+10:00',
          end_time: '2025-04-06T16:31:00+10:00'
        },
        {
          id: '921c3fed-db44-4beb-9bf1-6cf1f2ad1e6d',
          status: 'Banquet',
          start_time: '2025-04-06T11:48:00+10:00',
          end_time: '2025-04-06T13:44:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40062,
          name_for_reservation: 'Юлия',
          num_people: 2,
          phone_number: '+79777881021',
          status: 'Заявка',
          seating_time: '2025-04-06T18:22:00+10:00',
          end_time: '2025-04-06T19:17:00+10:00'
        },
        {
          id: 40063,
          name_for_reservation: 'Анна',
          num_people: 5,
          phone_number: '+79494526692',
          status: 'Заявка',
          seating_time: '2025-04-06T17:22:00+10:00',
          end_time: '2025-04-06T18:01:00+10:00'
        },
        {
          id: 40064,
          name_for_reservation: 'Сергей',
          num_people: 4,
          phone_number: '+79625015432',
          status: 'Живая очередь',
          seating_time: '2025-04-06T13:01:00+10:00',
          end_time: '2025-04-06T14:29:00+10:00'
        },
        {
          id: 40065,
          name_for_reservation: 'Юлия',
          num_people: 3,
          phone_number: '+79937469720',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:11:00+10:00',
          end_time: '2025-04-06T17:21:00+10:00'
        }
      ]
    },
    {
      id: '991089d2-ecb6-4281-804f-bff1d3c52b2f',
      capacity: 10,
      number: '13',
      zone: '1 этаж',
      orders: [
        {
          id: 'ddd38001-3da5-4812-b5e4-0ca870e7a30d',
          status: 'Banquet',
          start_time: '2025-04-06T14:00:00+10:00',
          end_time: '2025-04-06T15:29:00+10:00'
        },
        {
          id: 'ac44eec5-db4d-4a81-82d5-b12a71a02e96',
          status: 'Banquet',
          start_time: '2025-04-06T22:15:00+10:00',
          end_time: '2025-04-06T23:01:00+10:00'
        },
        {
          id: '8129236a-5801-40d4-9487-64d4e9eff8cc',
          status: 'Banquet',
          start_time: '2025-04-06T11:10:00+10:00',
          end_time: '2025-04-06T13:52:00+10:00'
        },
        {
          id: '6cd663c9-854b-4864-a22e-f3e62bfac07c',
          status: 'Banquet',
          start_time: '2025-04-06T11:33:00+10:00',
          end_time: '2025-04-06T13:21:00+10:00'
        },
        {
          id: 'a3772282-badc-4575-a398-5266303fe38c',
          status: 'Banquet',
          start_time: '2025-04-06T17:25:00+10:00',
          end_time: '2025-04-06T19:20:00+10:00'
        },
        {
          id: '23c8a512-4ab2-4d93-98ff-0f4e463c37df',
          status: 'Banquet',
          start_time: '2025-04-06T14:38:00+10:00',
          end_time: '2025-04-06T15:59:00+10:00'
        },
        {
          id: 'aaf613ef-4427-4ed3-8c9e-e25eb9b45cfe',
          status: 'New',
          start_time: '2025-04-06T21:05:00+10:00',
          end_time: '2025-04-06T22:38:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40066,
          name_for_reservation: 'Татьяна',
          num_people: 7,
          phone_number: '+79528896530',
          status: 'Закрыт',
          seating_time: '2025-04-06T13:00:00+10:00',
          end_time: '2025-04-06T13:52:00+10:00'
        },
        {
          id: 40067,
          name_for_reservation: 'Сергей',
          num_people: 3,
          phone_number: '+79997328913',
          status: 'Закрыт',
          seating_time: '2025-04-06T12:02:00+10:00',
          end_time: '2025-04-06T12:57:00+10:00'
        },
        {
          id: 40068,
          name_for_reservation: 'Дмитрий',
          num_people: 3,
          phone_number: '+79802089609',
          status: 'Новая',
          seating_time: '2025-04-06T19:49:00+10:00',
          end_time: '2025-04-06T21:52:00+10:00'
        },
        {
          id: 40069,
          name_for_reservation: 'Анатолий',
          num_people: 6,
          phone_number: '+79135932759',
          status: 'Заявка',
          seating_time: '2025-04-06T15:55:00+10:00',
          end_time: '2025-04-06T18:49:00+10:00'
        },
        {
          id: 40070,
          name_for_reservation: 'Геннадий',
          num_people: 7,
          phone_number: '+79921910137',
          status: 'Живая очередь',
          seating_time: '2025-04-06T14:02:00+10:00',
          end_time: '2025-04-06T16:19:00+10:00'
        }
      ]
    },
    {
      id: '01881447-2932-4ab7-b09a-72af955d8b49',
      capacity: 6,
      number: '101',
      zone: '2 этаж',
      orders: [
        {
          id: 'f056c5c0-8358-4f75-86d5-c1b105931844',
          status: 'New',
          start_time: '2025-04-06T17:24:00+10:00',
          end_time: '2025-04-06T20:13:00+10:00'
        },
        {
          id: '284a6b5f-77bb-4be5-bacf-9065d472928e',
          status: 'Closed',
          start_time: '2025-04-06T22:20:00+10:00',
          end_time: '2025-04-06T23:04:00+10:00'
        },
        {
          id: 'c20c9747-201a-41e6-9e38-72cc0d4997d0',
          status: 'Closed',
          start_time: '2025-04-06T18:54:00+10:00',
          end_time: '2025-04-06T19:34:00+10:00'
        },
        {
          id: 'b44081fc-786b-4775-80d4-12081647bc64',
          status: 'Closed',
          start_time: '2025-04-06T20:00:00+10:00',
          end_time: '2025-04-06T21:42:00+10:00'
        },
        {
          id: '2629a37a-b427-4156-83fc-1c1561421b1c',
          status: 'Banquet',
          start_time: '2025-04-06T21:41:00+10:00',
          end_time: '2025-04-06T23:29:00+10:00'
        },
        {
          id: '17ffa7e9-1eaa-451d-a950-e3d8ea43a865',
          status: 'Closed',
          start_time: '2025-04-06T19:08:00+10:00',
          end_time: '2025-04-06T22:07:00+10:00'
        },
        {
          id: '3e638d02-289c-41f2-8ecb-05e5ce8b3b7c',
          status: 'Banquet',
          start_time: '2025-04-06T22:10:00+10:00',
          end_time: '2025-04-06T23:16:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40071,
          name_for_reservation: 'Геннадий',
          num_people: 2,
          phone_number: '+79119214953',
          status: 'Новая',
          seating_time: '2025-04-06T14:04:00+10:00',
          end_time: '2025-04-06T16:21:00+10:00'
        },
        {
          id: 40072,
          name_for_reservation: 'Василий',
          num_people: 6,
          phone_number: '+79996149943',
          status: 'Заявка',
          seating_time: '2025-04-06T11:57:00+10:00',
          end_time: '2025-04-06T13:27:00+10:00'
        },
        {
          id: 40073,
          name_for_reservation: 'Анна',
          num_people: 3,
          phone_number: '+79804731084',
          status: 'Открыт',
          seating_time: '2025-04-06T15:25:00+10:00',
          end_time: '2025-04-06T17:50:00+10:00'
        },
        {
          id: 40074,
          name_for_reservation: 'Евгения',
          num_people: 3,
          phone_number: '+79642745663',
          status: 'Живая очередь',
          seating_time: '2025-04-06T11:13:00+10:00',
          end_time: '2025-04-06T12:06:00+10:00'
        }
      ]
    },
    {
      id: 'e1ac7560-f708-4bf7-b44e-5e7cd0af6b9f',
      capacity: 6,
      number: '102',
      zone: '2 этаж',
      orders: [
        {
          id: '83160b77-1ca5-4c14-b471-70300e48f07f',
          status: 'Banquet',
          start_time: '2025-04-06T21:34:00+10:00',
          end_time: '2025-04-06T23:36:00+10:00'
        },
        {
          id: 'b2c6deba-215d-4717-a618-9c1b2bffd5a1',
          status: 'Bill',
          start_time: '2025-04-06T11:22:00+10:00',
          end_time: '2025-04-06T13:27:00+10:00'
        },
        {
          id: '8c42530f-389b-4c6a-b1b2-c6db068bbdb9',
          status: 'Bill',
          start_time: '2025-04-06T23:03:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        },
        {
          id: '32dd57b6-a6c2-475a-991f-f6f46910478f',
          status: 'New',
          start_time: '2025-04-06T13:29:00+10:00',
          end_time: '2025-04-06T16:19:00+10:00'
        },
        {
          id: '1a34d195-a416-4493-93ff-039929247bc0',
          status: 'Closed',
          start_time: '2025-04-06T12:23:00+10:00',
          end_time: '2025-04-06T13:18:00+10:00'
        },
        {
          id: '52411a19-607b-46e2-ba59-dc3a37dbdb4e',
          status: 'Bill',
          start_time: '2025-04-06T18:27:00+10:00',
          end_time: '2025-04-06T19:00:00+10:00'
        },
        {
          id: '11f0c53a-64bc-4524-b7b8-999f6894269b',
          status: 'Banquet',
          start_time: '2025-04-06T18:50:00+10:00',
          end_time: '2025-04-06T21:31:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40075,
          name_for_reservation: 'Дмитрий',
          num_people: 2,
          phone_number: '+79936822771',
          status: 'Новая',
          seating_time: '2025-04-06T11:00:00+10:00',
          end_time: '2025-04-06T11:43:00+10:00'
        },
        {
          id: 40076,
          name_for_reservation: 'Роман',
          num_people: 1,
          phone_number: '+79993332356',
          status: 'Заявка',
          seating_time: '2025-04-06T12:06:00+10:00',
          end_time: '2025-04-06T13:47:00+10:00'
        },
        {
          id: 40077,
          name_for_reservation: 'Светлана',
          num_people: 4,
          phone_number: '+79998011203',
          status: 'Живая очередь',
          seating_time: '2025-04-06T15:17:00+10:00',
          end_time: '2025-04-06T17:25:00+10:00'
        },
        {
          id: 40078,
          name_for_reservation: 'Евгения',
          num_people: 2,
          phone_number: '+79431788632',
          status: 'Живая очередь',
          seating_time: '2025-04-06T17:00:00+10:00',
          end_time: '2025-04-06T17:39:00+10:00'
        },
        {
          id: 40079,
          name_for_reservation: 'Евгений',
          num_people: 6,
          phone_number: '+79585853378',
          status: 'Новая',
          seating_time: '2025-04-06T15:18:00+10:00',
          end_time: '2025-04-06T18:02:00+10:00'
        }
      ]
    },
    {
      id: '70818be6-e380-4d40-ae49-d51d659cb3af',
      capacity: 6,
      number: '103',
      zone: '2 этаж',
      orders: [
        {
          id: '77152219-3094-4989-8387-f8de72042eec',
          status: 'New',
          start_time: '2025-04-06T11:44:00+10:00',
          end_time: '2025-04-06T13:17:00+10:00'
        },
        {
          id: '68ca3f80-3918-45f2-9954-abc870f45833',
          status: 'Banquet',
          start_time: '2025-04-06T11:04:00+10:00',
          end_time: '2025-04-06T12:39:00+10:00'
        },
        {
          id: 'fde706a9-e877-46f8-a22e-a9f8a54dec7a',
          status: 'New',
          start_time: '2025-04-06T14:04:00+10:00',
          end_time: '2025-04-06T16:16:00+10:00'
        },
        {
          id: '50b51755-b925-407f-8002-fc6e1287fda4',
          status: 'Banquet',
          start_time: '2025-04-06T15:20:00+10:00',
          end_time: '2025-04-06T16:40:00+10:00'
        },
        {
          id: '9277f277-25ac-42ee-90d9-6aea06cf9756',
          status: 'New',
          start_time: '2025-04-06T11:20:00+10:00',
          end_time: '2025-04-06T12:28:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40080,
          name_for_reservation: 'Константин',
          num_people: 5,
          phone_number: '+79681629093',
          status: 'Закрыт',
          seating_time: '2025-04-06T12:01:00+10:00',
          end_time: '2025-04-06T12:54:00+10:00'
        },
        {
          id: 40081,
          name_for_reservation: 'Константин',
          num_people: 5,
          phone_number: '+79460417180',
          status: 'Открыт',
          seating_time: '2025-04-06T11:50:00+10:00',
          end_time: '2025-04-06T12:25:00+10:00'
        },
        {
          id: 40082,
          name_for_reservation: 'Василий',
          num_people: 6,
          phone_number: '+79267002925',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:44:00+10:00',
          end_time: '2025-04-06T17:24:00+10:00'
        },
        {
          id: 40083,
          name_for_reservation: 'Ольга',
          num_people: 5,
          phone_number: '+79148979610',
          status: 'Заявка',
          seating_time: '2025-04-06T13:36:00+10:00',
          end_time: '2025-04-06T15:03:00+10:00'
        },
        {
          id: 40084,
          name_for_reservation: 'Анна',
          num_people: 5,
          phone_number: '+79645364027',
          status: 'Заявка',
          seating_time: '2025-04-06T11:22:00+10:00',
          end_time: '2025-04-06T14:12:00+10:00'
        }
      ]
    },
    {
      id: 'dd04bfb9-9fe7-4c01-9f14-106457850886',
      capacity: 2,
      number: '104',
      zone: '2 этаж',
      orders: [
        {
          id: '5906c517-6e4e-4a9d-814e-d526541242b9',
          status: 'New',
          start_time: '2025-04-06T14:44:00+10:00',
          end_time: '2025-04-06T16:24:00+10:00'
        },
        {
          id: '8359dc31-27f3-42df-9d1a-792bf2393178',
          status: 'Bill',
          start_time: '2025-04-06T23:04:00+10:00',
          end_time: '2025-04-06T23:34:00+10:00'
        },
        {
          id: '6ee62457-d6ee-438d-9f2b-1b24dfac2856',
          status: 'Bill',
          start_time: '2025-04-06T16:22:00+10:00',
          end_time: '2025-04-06T18:03:00+10:00'
        },
        {
          id: 'fcb48896-4f41-4428-9438-7c8df6271027',
          status: 'New',
          start_time: '2025-04-06T12:40:00+10:00',
          end_time: '2025-04-06T15:18:00+10:00'
        },
        {
          id: 'c60368f0-602d-4ac4-b88d-502101dad424',
          status: 'Closed',
          start_time: '2025-04-06T20:42:00+10:00',
          end_time: '2025-04-06T21:21:00+10:00'
        },
        {
          id: 'ece54c5e-1f1b-49d5-aeb2-a7f5d832d207',
          status: 'Bill',
          start_time: '2025-04-06T16:44:00+10:00',
          end_time: '2025-04-06T17:29:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40085,
          name_for_reservation: 'Валентина',
          num_people: 1,
          phone_number: '+79270501305',
          status: 'Заявка',
          seating_time: '2025-04-06T14:36:00+10:00',
          end_time: '2025-04-06T15:56:00+10:00'
        },
        {
          id: 40086,
          name_for_reservation: 'Ольга',
          num_people: 2,
          phone_number: '+79634726886',
          status: 'Живая очередь',
          seating_time: '2025-04-06T17:51:00+10:00',
          end_time: '2025-04-06T19:53:00+10:00'
        },
        {
          id: 40087,
          name_for_reservation: 'Константин',
          num_people: 1,
          phone_number: '+79137801838',
          status: 'Новая',
          seating_time: '2025-04-06T22:53:00+10:00',
          end_time: '2025-04-06T23:39:00+10:00'
        },
        {
          id: 40088,
          name_for_reservation: 'Алина',
          num_people: 1,
          phone_number: '+79502280241',
          status: 'Заявка',
          seating_time: '2025-04-06T18:49:00+10:00',
          end_time: '2025-04-06T20:48:00+10:00'
        }
      ]
    },
    {
      id: 'ef58c49d-ea79-4588-adb7-6c33279d62bf',
      capacity: 2,
      number: '105',
      zone: '2 этаж',
      orders: [
        {
          id: 'fdb7998c-b4e7-4271-bf05-d86b157bd1e7',
          status: 'Banquet',
          start_time: '2025-04-06T16:55:00+10:00',
          end_time: '2025-04-06T19:08:00+10:00'
        },
        {
          id: '047d3b33-8737-4675-9ce6-f87b5d88e783',
          status: 'Banquet',
          start_time: '2025-04-06T17:58:00+10:00',
          end_time: '2025-04-06T19:13:00+10:00'
        },
        {
          id: '3976255a-5e5f-472f-9856-52c313ef9daa',
          status: 'Banquet',
          start_time: '2025-04-06T18:08:00+10:00',
          end_time: '2025-04-06T21:04:00+10:00'
        },
        {
          id: '6d37bee7-c745-403c-8014-823ec85f0464',
          status: 'Bill',
          start_time: '2025-04-06T20:03:00+10:00',
          end_time: '2025-04-06T20:56:00+10:00'
        },
        {
          id: '3cd5510b-9048-4937-851c-dac650b0fd2c',
          status: 'New',
          start_time: '2025-04-06T17:47:00+10:00',
          end_time: '2025-04-06T18:43:00+10:00'
        },
        {
          id: 'd1b8fb7e-cfea-4b61-9f2a-b61934e57280',
          status: 'Banquet',
          start_time: '2025-04-06T16:13:00+10:00',
          end_time: '2025-04-06T17:28:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40089,
          name_for_reservation: 'Валентина',
          num_people: 2,
          phone_number: '+79596456844',
          status: 'Закрыт',
          seating_time: '2025-04-06T20:54:00+10:00',
          end_time: '2025-04-06T21:39:00+10:00'
        },
        {
          id: 40090,
          name_for_reservation: 'Сергей',
          num_people: 1,
          phone_number: '+79314476529',
          status: 'Открыт',
          seating_time: '2025-04-06T20:36:00+10:00',
          end_time: '2025-04-06T21:38:00+10:00'
        },
        {
          id: 40091,
          name_for_reservation: 'Роман',
          num_people: 2,
          phone_number: '+79901661619',
          status: 'Новая',
          seating_time: '2025-04-06T16:03:00+10:00',
          end_time: '2025-04-06T17:21:00+10:00'
        },
        {
          id: 40092,
          name_for_reservation: 'Лариса',
          num_people: 2,
          phone_number: '+79954888097',
          status: 'Новая',
          seating_time: '2025-04-06T18:19:00+10:00',
          end_time: '2025-04-06T20:34:00+10:00'
        },
        {
          id: 40093,
          name_for_reservation: 'Дмитрий',
          num_people: 1,
          phone_number: '+79406247882',
          status: 'Заявка',
          seating_time: '2025-04-06T21:26:00+10:00',
          end_time: '2025-04-06T22:02:00+10:00'
        },
        {
          id: 40094,
          name_for_reservation: 'Ольга',
          num_people: 2,
          phone_number: '+79457002450',
          status: 'Открыт',
          seating_time: '2025-04-06T23:10:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        }
      ]
    },
    {
      id: '102e31ae-3e17-45f0-a643-00f58d95b776',
      capacity: 6,
      number: '106',
      zone: '2 этаж',
      orders: [
        {
          id: '39bebf46-7bd9-41db-a780-a8ae4b487582',
          status: 'New',
          start_time: '2025-04-06T21:38:00+10:00',
          end_time: '2025-04-06T22:47:00+10:00'
        },
        {
          id: 'e7b73369-ee16-491e-80d1-5c05fd7b91e2',
          status: 'Closed',
          start_time: '2025-04-06T23:10:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        },
        {
          id: 'aefd8177-1df4-4232-b4a5-4a9e5249046b',
          status: 'Closed',
          start_time: '2025-04-06T18:19:00+10:00',
          end_time: '2025-04-06T19:26:00+10:00'
        },
        {
          id: '13b6481b-be82-4815-9b47-bd6180075fd5',
          status: 'Bill',
          start_time: '2025-04-06T14:03:00+10:00',
          end_time: '2025-04-06T14:51:00+10:00'
        },
        {
          id: '16d0db8a-c30c-4a65-a4a6-fde393a6811c',
          status: 'Closed',
          start_time: '2025-04-06T22:31:00+10:00',
          end_time: '2025-04-06T23:15:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40095,
          name_for_reservation: 'Наталья',
          num_people: 4,
          phone_number: '+79787157094',
          status: 'Закрыт',
          seating_time: '2025-04-06T12:51:00+10:00',
          end_time: '2025-04-06T13:59:00+10:00'
        },
        {
          id: 40096,
          name_for_reservation: 'Ксения',
          num_people: 3,
          phone_number: '+79218182288',
          status: 'Заявка',
          seating_time: '2025-04-06T22:03:00+10:00',
          end_time: '2025-04-06T22:45:00+10:00'
        },
        {
          id: 40097,
          name_for_reservation: 'Мария',
          num_people: 3,
          phone_number: '+79883385473',
          status: 'Открыт',
          seating_time: '2025-04-06T16:02:00+10:00',
          end_time: '2025-04-06T18:49:00+10:00'
        },
        {
          id: 40098,
          name_for_reservation: 'Андрей',
          num_people: 4,
          phone_number: '+79705003250',
          status: 'Закрыт',
          seating_time: '2025-04-06T15:14:00+10:00',
          end_time: '2025-04-06T17:39:00+10:00'
        },
        {
          id: 40099,
          name_for_reservation: 'Ксения',
          num_people: 6,
          phone_number: '+79325076854',
          status: 'Живая очередь',
          seating_time: '2025-04-06T18:46:00+10:00',
          end_time: '2025-04-06T20:01:00+10:00'
        }
      ]
    },
    {
      id: 'eb4fd713-07d4-4807-9b36-9b55259a2a2f',
      capacity: 12,
      number: '107',
      zone: '2 этаж',
      orders: [
        {
          id: '808eaf9a-1fa6-48e4-b41a-5db6e9203846',
          status: 'New',
          start_time: '2025-04-06T11:38:00+10:00',
          end_time: '2025-04-06T13:42:00+10:00'
        },
        {
          id: '7cb8b5e6-5fb3-4a06-8822-33c986c8be69',
          status: 'New',
          start_time: '2025-04-06T16:20:00+10:00',
          end_time: '2025-04-06T19:06:00+10:00'
        },
        {
          id: 'b01e16f4-fb76-4bbc-922c-2adf86c12a0c',
          status: 'Closed',
          start_time: '2025-04-06T17:59:00+10:00',
          end_time: '2025-04-06T19:30:00+10:00'
        },
        {
          id: '26f07e97-ad59-48bd-8017-82b13d663e60',
          status: 'Banquet',
          start_time: '2025-04-06T16:53:00+10:00',
          end_time: '2025-04-06T17:56:00+10:00'
        },
        {
          id: '9d60e0c6-c789-440f-a095-3c998b493131',
          status: 'Bill',
          start_time: '2025-04-06T11:50:00+10:00',
          end_time: '2025-04-06T14:00:00+10:00'
        },
        {
          id: 'a07a3e34-7989-45cc-8326-94d73c3c4e9b',
          status: 'Bill',
          start_time: '2025-04-06T17:53:00+10:00',
          end_time: '2025-04-06T20:45:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40100,
          name_for_reservation: 'Наталья',
          num_people: 8,
          phone_number: '+79231431506',
          status: 'Закрыт',
          seating_time: '2025-04-06T17:36:00+10:00',
          end_time: '2025-04-06T20:22:00+10:00'
        },
        {
          id: 40101,
          name_for_reservation: 'Евгения',
          num_people: 2,
          phone_number: '+79416828685',
          status: 'Открыт',
          seating_time: '2025-04-06T12:59:00+10:00',
          end_time: '2025-04-06T13:48:00+10:00'
        },
        {
          id: 40102,
          name_for_reservation: 'Сергей',
          num_people: 12,
          phone_number: '+79170778379',
          status: 'Открыт',
          seating_time: '2025-04-06T17:14:00+10:00',
          end_time: '2025-04-06T19:39:00+10:00'
        },
        {
          id: 40103,
          name_for_reservation: 'Алина',
          num_people: 5,
          phone_number: '+79140906977',
          status: 'Закрыт',
          seating_time: '2025-04-06T20:46:00+10:00',
          end_time: '2025-04-06T22:54:00+10:00'
        },
        {
          id: 40104,
          name_for_reservation: 'Евгений',
          num_people: 5,
          phone_number: '+79523969264',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:18:00+10:00',
          end_time: '2025-04-06T17:34:00+10:00'
        }
      ]
    },
    {
      id: 'e5e96237-e594-4e75-9c92-6c47c9567d5c',
      capacity: 6,
      number: '108',
      zone: '2 этаж',
      orders: [
        {
          id: 'bf5facf6-5c00-491e-a846-f7ce372510f6',
          status: 'Bill',
          start_time: '2025-04-06T23:10:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        },
        {
          id: '750b9005-a5e9-4181-98aa-a42b9213cd3b',
          status: 'Closed',
          start_time: '2025-04-06T15:14:00+10:00',
          end_time: '2025-04-06T16:33:00+10:00'
        },
        {
          id: 'f2e3fa9e-3bca-4cc1-acc0-cf47ca29e986',
          status: 'Closed',
          start_time: '2025-04-06T12:58:00+10:00',
          end_time: '2025-04-06T14:31:00+10:00'
        },
        {
          id: '6fe28692-7e8c-4556-a966-5cb00d792de8',
          status: 'Banquet',
          start_time: '2025-04-06T20:00:00+10:00',
          end_time: '2025-04-06T20:31:00+10:00'
        },
        {
          id: '9fd449d4-403b-404a-aadd-b5622f712d55',
          status: 'Banquet',
          start_time: '2025-04-06T13:46:00+10:00',
          end_time: '2025-04-06T16:21:00+10:00'
        },
        {
          id: '2d0e79a1-bc8b-4d07-8987-48b37fde5191',
          status: 'Banquet',
          start_time: '2025-04-06T16:43:00+10:00',
          end_time: '2025-04-06T18:05:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40105,
          name_for_reservation: 'Роман',
          num_people: 6,
          phone_number: '+79593241940',
          status: 'Заявка',
          seating_time: '2025-04-06T13:37:00+10:00',
          end_time: '2025-04-06T14:58:00+10:00'
        },
        {
          id: 40106,
          name_for_reservation: 'Василий',
          num_people: 2,
          phone_number: '+79638723258',
          status: 'Заявка',
          seating_time: '2025-04-06T22:10:00+10:00',
          end_time: '2025-04-06T23:27:00+10:00'
        },
        {
          id: 40107,
          name_for_reservation: 'Дмитрий',
          num_people: 3,
          phone_number: '+79661852121',
          status: 'Заявка',
          seating_time: '2025-04-06T19:07:00+10:00',
          end_time: '2025-04-06T21:08:00+10:00'
        },
        {
          id: 40108,
          name_for_reservation: 'Роман',
          num_people: 2,
          phone_number: '+79501964928',
          status: 'Открыт',
          seating_time: '2025-04-06T17:23:00+10:00',
          end_time: '2025-04-06T19:21:00+10:00'
        },
        {
          id: 40109,
          name_for_reservation: 'Геннадий',
          num_people: 4,
          phone_number: '+79954581451',
          status: 'Живая очередь',
          seating_time: '2025-04-06T12:53:00+10:00',
          end_time: '2025-04-06T13:28:00+10:00'
        }
      ]
    },
    {
      id: '0011f52e-6092-4dbe-8fe4-605d78c9a997',
      capacity: 10,
      number: '109',
      zone: '2 этаж',
      orders: [
        {
          id: 'ee68f7e8-22f0-4a5e-8d12-4071b68089d0',
          status: 'Bill',
          start_time: '2025-04-06T17:56:00+10:00',
          end_time: '2025-04-06T19:29:00+10:00'
        },
        {
          id: '5c38ea69-c276-4160-845b-d7ca7eab15e1',
          status: 'Banquet',
          start_time: '2025-04-06T22:38:00+10:00',
          end_time: '2025-04-06T23:26:00+10:00'
        },
        {
          id: '0794bcd4-a8a1-4ef8-85f1-33240a8b0bdd',
          status: 'New',
          start_time: '2025-04-06T16:13:00+10:00',
          end_time: '2025-04-06T17:17:00+10:00'
        },
        {
          id: '0d5eb403-ba28-407a-b2f0-d60231b361aa',
          status: 'New',
          start_time: '2025-04-06T17:58:00+10:00',
          end_time: '2025-04-06T20:31:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40110,
          name_for_reservation: 'Сергей',
          num_people: 2,
          phone_number: '+79225192399',
          status: 'Заявка',
          seating_time: '2025-04-06T14:58:00+10:00',
          end_time: '2025-04-06T15:48:00+10:00'
        },
        {
          id: 40111,
          name_for_reservation: 'Ксения',
          num_people: 2,
          phone_number: '+79748304631',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:46:00+10:00',
          end_time: '2025-04-06T18:33:00+10:00'
        },
        {
          id: 40112,
          name_for_reservation: 'Геннадий',
          num_people: 1,
          phone_number: '+79439209451',
          status: 'Заявка',
          seating_time: '2025-04-06T22:01:00+10:00',
          end_time: '2025-04-06T23:21:00+10:00'
        },
        {
          id: 40113,
          name_for_reservation: 'Роман',
          num_people: 8,
          phone_number: '+79796863403',
          status: 'Открыт',
          seating_time: '2025-04-06T16:47:00+10:00',
          end_time: '2025-04-06T17:22:00+10:00'
        },
        {
          id: 40114,
          name_for_reservation: 'Лариса',
          num_people: 3,
          phone_number: '+79420553042',
          status: 'Заявка',
          seating_time: '2025-04-06T14:47:00+10:00',
          end_time: '2025-04-06T17:03:00+10:00'
        },
        {
          id: 40115,
          name_for_reservation: 'Константин',
          num_people: 3,
          phone_number: '+79335727872',
          status: 'Живая очередь',
          seating_time: '2025-04-06T19:09:00+10:00',
          end_time: '2025-04-06T20:48:00+10:00'
        }
      ]
    },
    {
      id: '5c3b0da1-99ed-485f-9896-278ea34b780f',
      capacity: 10,
      number: '110',
      zone: '2 этаж',
      orders: [
        {
          id: '4fd83e60-c4a3-46a5-aa7e-62b09e1a413f',
          status: 'Bill',
          start_time: '2025-04-06T15:48:00+10:00',
          end_time: '2025-04-06T17:11:00+10:00'
        },
        {
          id: '147e64a6-4960-4f64-84a3-7716d32699ec',
          status: 'Bill',
          start_time: '2025-04-06T17:48:00+10:00',
          end_time: '2025-04-06T18:40:00+10:00'
        },
        {
          id: 'ddb3829b-93f1-4855-95ce-a84a4df2b248',
          status: 'Closed',
          start_time: '2025-04-06T15:29:00+10:00',
          end_time: '2025-04-06T18:20:00+10:00'
        },
        {
          id: 'e3a252a6-40ce-40b5-87f8-aaf2cbce77be',
          status: 'Closed',
          start_time: '2025-04-06T22:06:00+10:00',
          end_time: '2025-04-06T23:14:00+10:00'
        },
        {
          id: '32435aab-32a4-440c-969e-e454495a5bb8',
          status: 'Bill',
          start_time: '2025-04-06T19:12:00+10:00',
          end_time: '2025-04-06T21:12:00+10:00'
        },
        {
          id: '37a355c3-c324-4c5f-8a9a-9e70d9f4d2dd',
          status: 'Bill',
          start_time: '2025-04-06T11:05:00+10:00',
          end_time: '2025-04-06T11:45:00+10:00'
        },
        {
          id: '96d200ed-33dc-4aba-80b4-4ee823b25a7b',
          status: 'Banquet',
          start_time: '2025-04-06T15:40:00+10:00',
          end_time: '2025-04-06T16:15:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40116,
          name_for_reservation: 'Григорий',
          num_people: 5,
          phone_number: '+79166470522',
          status: 'Живая очередь',
          seating_time: '2025-04-06T20:04:00+10:00',
          end_time: '2025-04-06T22:48:00+10:00'
        },
        {
          id: 40117,
          name_for_reservation: 'Иван',
          num_people: 4,
          phone_number: '+79568685045',
          status: 'Заявка',
          seating_time: '2025-04-06T22:00:00+10:00',
          end_time: '2025-04-06T23:21:00+10:00'
        },
        {
          id: 40118,
          name_for_reservation: 'Ксения',
          num_people: 8,
          phone_number: '+79403332048',
          status: 'Новая',
          seating_time: '2025-04-06T19:17:00+10:00',
          end_time: '2025-04-06T20:35:00+10:00'
        },
        {
          id: 40119,
          name_for_reservation: 'Александр',
          num_people: 7,
          phone_number: '+79886381163',
          status: 'Новая',
          seating_time: '2025-04-06T19:07:00+10:00',
          end_time: '2025-04-06T19:43:00+10:00'
        },
        {
          id: 40120,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79474182151',
          status: 'Заявка',
          seating_time: '2025-04-06T11:50:00+10:00',
          end_time: '2025-04-06T14:06:00+10:00'
        }
      ]
    },
    {
      id: '32c3d071-49a9-4355-85a0-0182e7b5616e',
      capacity: 12,
      number: 'B1',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '958385fa-2338-4f26-b7ea-4fa5df119fec',
          status: 'New',
          start_time: '2025-04-06T13:42:00+10:00',
          end_time: '2025-04-06T15:36:00+10:00'
        },
        {
          id: 'c057c1b5-a0f9-4f9f-811a-57a3bab7916d',
          status: 'Banquet',
          start_time: '2025-04-06T12:35:00+10:00',
          end_time: '2025-04-06T15:30:00+10:00'
        },
        {
          id: 'aa5e1428-0a83-4245-be71-95798d3df57b',
          status: 'Closed',
          start_time: '2025-04-06T20:11:00+10:00',
          end_time: '2025-04-06T22:03:00+10:00'
        },
        {
          id: '0ea322e2-26ad-4fbd-b973-e0ccbb60474d',
          status: 'New',
          start_time: '2025-04-06T14:24:00+10:00',
          end_time: '2025-04-06T15:28:00+10:00'
        },
        {
          id: 'ef6c2ca1-993e-489d-b8ee-e860ab269036',
          status: 'Bill',
          start_time: '2025-04-06T22:49:00+10:00',
          end_time: '2025-04-06T23:33:00+10:00'
        },
        {
          id: 'a2ea2f0f-35ac-4e04-ac75-29741c68b985',
          status: 'Banquet',
          start_time: '2025-04-06T12:54:00+10:00',
          end_time: '2025-04-06T14:24:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40121,
          name_for_reservation: 'Наталья',
          num_people: 3,
          phone_number: '+79149789773',
          status: 'Заявка',
          seating_time: '2025-04-06T16:30:00+10:00',
          end_time: '2025-04-06T19:11:00+10:00'
        },
        {
          id: 40122,
          name_for_reservation: 'Иван',
          num_people: 9,
          phone_number: '+79992305926',
          status: 'Закрыт',
          seating_time: '2025-04-06T16:53:00+10:00',
          end_time: '2025-04-06T19:46:00+10:00'
        },
        {
          id: 40123,
          name_for_reservation: 'Константин',
          num_people: 5,
          phone_number: '+79717573130',
          status: 'Заявка',
          seating_time: '2025-04-06T13:03:00+10:00',
          end_time: '2025-04-06T15:39:00+10:00'
        },
        {
          id: 40124,
          name_for_reservation: 'Алина',
          num_people: 10,
          phone_number: '+79273357829',
          status: 'Заявка',
          seating_time: '2025-04-06T22:33:00+10:00',
          end_time: '2025-04-06T23:32:00+10:00'
        },
        {
          id: 40125,
          name_for_reservation: 'Александр',
          num_people: 4,
          phone_number: '+79683873807',
          status: 'Заявка',
          seating_time: '2025-04-06T18:45:00+10:00',
          end_time: '2025-04-06T20:48:00+10:00'
        },
        {
          id: 40126,
          name_for_reservation: 'Анатолий',
          num_people: 6,
          phone_number: '+79105518076',
          status: 'Живая очередь',
          seating_time: '2025-04-06T21:11:00+10:00',
          end_time: '2025-04-06T23:10:00+10:00'
        },
        {
          id: 40127,
          name_for_reservation: 'Григорий',
          num_people: 5,
          phone_number: '+79413149282',
          status: 'Открыт',
          seating_time: '2025-04-06T13:10:00+10:00',
          end_time: '2025-04-06T15:48:00+10:00'
        }
      ]
    },
    {
      id: 'ef7d3041-ac6d-4dab-9c97-57b86007907c',
      capacity: 2,
      number: 'B2',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '6ff4462f-1264-4f9a-8c67-551201f77c72',
          status: 'Closed',
          start_time: '2025-04-06T15:21:00+10:00',
          end_time: '2025-04-06T17:43:00+10:00'
        },
        {
          id: 'b77664fc-c6fd-460d-bce0-3de42b5f8cf6',
          status: 'Closed',
          start_time: '2025-04-06T14:39:00+10:00',
          end_time: '2025-04-06T17:19:00+10:00'
        },
        {
          id: '83cf667e-57ec-449d-8bff-3fdccdc61484',
          status: 'Closed',
          start_time: '2025-04-06T18:09:00+10:00',
          end_time: '2025-04-06T18:44:00+10:00'
        },
        {
          id: '30c7a2e2-27d8-486c-b92f-9773eaa2865f',
          status: 'Closed',
          start_time: '2025-04-06T18:11:00+10:00',
          end_time: '2025-04-06T19:09:00+10:00'
        },
        {
          id: 'a9667fe9-0836-40c8-b92d-e0ad9ec99c2a',
          status: 'Bill',
          start_time: '2025-04-06T18:46:00+10:00',
          end_time: '2025-04-06T19:35:00+10:00'
        },
        {
          id: '6459a484-6c95-41ac-85cb-dec4b72d3b11',
          status: 'New',
          start_time: '2025-04-06T21:27:00+10:00',
          end_time: '2025-04-06T23:05:00+10:00'
        },
        {
          id: '9dc97125-5b0d-4727-9e14-219bc7f4b3a3',
          status: 'Banquet',
          start_time: '2025-04-06T12:31:00+10:00',
          end_time: '2025-04-06T15:21:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40128,
          name_for_reservation: 'Иван',
          num_people: 1,
          phone_number: '+79975665620',
          status: 'Заявка',
          seating_time: '2025-04-06T21:36:00+10:00',
          end_time: '2025-04-06T22:24:00+10:00'
        },
        {
          id: 40129,
          name_for_reservation: 'Константин',
          num_people: 1,
          phone_number: '+79676484653',
          status: 'Новая',
          seating_time: '2025-04-06T16:02:00+10:00',
          end_time: '2025-04-06T18:48:00+10:00'
        },
        {
          id: 40130,
          name_for_reservation: 'Константин',
          num_people: 2,
          phone_number: '+79692454996',
          status: 'Открыт',
          seating_time: '2025-04-06T15:58:00+10:00',
          end_time: '2025-04-06T16:51:00+10:00'
        },
        {
          id: 40131,
          name_for_reservation: 'Александр',
          num_people: 2,
          phone_number: '+79837404705',
          status: 'Закрыт',
          seating_time: '2025-04-06T20:13:00+10:00',
          end_time: '2025-04-06T21:38:00+10:00'
        },
        {
          id: 40132,
          name_for_reservation: 'Ольга',
          num_people: 2,
          phone_number: '+79116416279',
          status: 'Новая',
          seating_time: '2025-04-06T20:03:00+10:00',
          end_time: '2025-04-06T22:56:00+10:00'
        },
        {
          id: 40133,
          name_for_reservation: 'Евгений',
          num_people: 1,
          phone_number: '+79225731586',
          status: 'Живая очередь',
          seating_time: '2025-04-06T18:41:00+10:00',
          end_time: '2025-04-06T21:13:00+10:00'
        }
      ]
    },
    {
      id: 'd53ac1a7-4c63-4aa0-b358-61fd883f580e',
      capacity: 10,
      number: 'B3',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '52587dc3-b1ba-4a8f-9851-11845aca08fb',
          status: 'Bill',
          start_time: '2025-04-06T15:02:00+10:00',
          end_time: '2025-04-06T16:40:00+10:00'
        },
        {
          id: '443bce89-2bdd-4f01-b9a3-70ceb9389cc4',
          status: 'Bill',
          start_time: '2025-04-06T19:07:00+10:00',
          end_time: '2025-04-06T20:16:00+10:00'
        },
        {
          id: 'f85e911e-ff4b-403e-a7c7-dde84cc190fa',
          status: 'Bill',
          start_time: '2025-04-06T16:24:00+10:00',
          end_time: '2025-04-06T18:00:00+10:00'
        },
        {
          id: 'ab534f52-327d-40a2-956b-8a585de275cc',
          status: 'New',
          start_time: '2025-04-06T15:21:00+10:00',
          end_time: '2025-04-06T15:55:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40134,
          name_for_reservation: 'Геннадий',
          num_people: 6,
          phone_number: '+79785760638',
          status: 'Живая очередь',
          seating_time: '2025-04-06T14:17:00+10:00',
          end_time: '2025-04-06T15:04:00+10:00'
        },
        {
          id: 40135,
          name_for_reservation: 'Алина',
          num_people: 9,
          phone_number: '+79520442924',
          status: 'Живая очередь',
          seating_time: '2025-04-06T22:04:00+10:00',
          end_time: '2025-04-06T22:56:00+10:00'
        },
        {
          id: 40136,
          name_for_reservation: 'Дмитрий',
          num_people: 7,
          phone_number: '+79357009492',
          status: 'Заявка',
          seating_time: '2025-04-06T22:11:00+10:00',
          end_time: '2025-04-06T23:08:00+10:00'
        },
        {
          id: 40137,
          name_for_reservation: 'Анатолий',
          num_people: 7,
          phone_number: '+79818283992',
          status: 'Живая очередь',
          seating_time: '2025-04-06T18:57:00+10:00',
          end_time: '2025-04-06T19:56:00+10:00'
        },
        {
          id: 40138,
          name_for_reservation: 'Мария',
          num_people: 3,
          phone_number: '+79346743806',
          status: 'Новая',
          seating_time: '2025-04-06T21:03:00+10:00',
          end_time: '2025-04-06T23:31:00+10:00'
        }
      ]
    },
    {
      id: '9e7758d0-d221-4d31-ac80-2b7747261ca2',
      capacity: 8,
      number: 'B4',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '801f5e20-17f4-4bb7-8b0b-f59b0acc13bf',
          status: 'New',
          start_time: '2025-04-06T12:35:00+10:00',
          end_time: '2025-04-06T14:39:00+10:00'
        },
        {
          id: 'c9217fdf-44ab-48df-990a-3dd3be8f9d80',
          status: 'New',
          start_time: '2025-04-06T12:36:00+10:00',
          end_time: '2025-04-06T15:18:00+10:00'
        },
        {
          id: 'f5b02666-02ba-42d4-bd79-e4f87f7894e7',
          status: 'Banquet',
          start_time: '2025-04-06T15:24:00+10:00',
          end_time: '2025-04-06T18:24:00+10:00'
        },
        {
          id: 'e1df9cbd-8b62-44f7-93e1-99dd6e4b2647',
          status: 'Bill',
          start_time: '2025-04-06T15:03:00+10:00',
          end_time: '2025-04-06T16:17:00+10:00'
        },
        {
          id: 'cb7cf1dc-da75-45e8-8ae0-ae68c4274875',
          status: 'Closed',
          start_time: '2025-04-06T18:18:00+10:00',
          end_time: '2025-04-06T20:38:00+10:00'
        },
        {
          id: '1cfa5be9-fe2d-490a-ac36-2979a1b634db',
          status: 'New',
          start_time: '2025-04-06T23:10:00+10:00',
          end_time: '2025-04-06T23:40:00+10:00'
        },
        {
          id: '812649bc-0d72-4932-bb2b-5416b90baf07',
          status: 'Bill',
          start_time: '2025-04-06T19:33:00+10:00',
          end_time: '2025-04-06T21:43:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40139,
          name_for_reservation: 'Ольга',
          num_people: 1,
          phone_number: '+79617067890',
          status: 'Закрыт',
          seating_time: '2025-04-06T17:33:00+10:00',
          end_time: '2025-04-06T18:04:00+10:00'
        },
        {
          id: 40140,
          name_for_reservation: 'Лариса',
          num_people: 8,
          phone_number: '+79977401777',
          status: 'Живая очередь',
          seating_time: '2025-04-06T12:26:00+10:00',
          end_time: '2025-04-06T14:50:00+10:00'
        },
        {
          id: 40141,
          name_for_reservation: 'Иван',
          num_people: 8,
          phone_number: '+79164867503',
          status: 'Заявка',
          seating_time: '2025-04-06T22:51:00+10:00',
          end_time: '2025-04-06T23:21:00+10:00'
        },
        {
          id: 40142,
          name_for_reservation: 'Лариса',
          num_people: 1,
          phone_number: '+79960057119',
          status: 'Заявка',
          seating_time: '2025-04-06T22:00:00+10:00',
          end_time: '2025-04-06T22:53:00+10:00'
        },
        {
          id: 40143,
          name_for_reservation: 'Дмитрий',
          num_people: 4,
          phone_number: '+79444214622',
          status: 'Открыт',
          seating_time: '2025-04-06T18:20:00+10:00',
          end_time: '2025-04-06T19:41:00+10:00'
        },
        {
          id: 40144,
          name_for_reservation: 'Евгения',
          num_people: 2,
          phone_number: '+79376238446',
          status: 'Закрыт',
          seating_time: '2025-04-06T21:26:00+10:00',
          end_time: '2025-04-06T23:13:00+10:00'
        },
        {
          id: 40145,
          name_for_reservation: 'Лариса',
          num_people: 6,
          phone_number: '+79512189379',
          status: 'Открыт',
          seating_time: '2025-04-06T17:37:00+10:00',
          end_time: '2025-04-06T18:47:00+10:00'
        }
      ]
    },
    {
      id: '0805f510-e995-4e23-89d8-8eb8258360fa',
      capacity: 12,
      number: 'B5',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '93d5d0ce-466b-4a9f-9a65-09131e50da09',
          status: 'Closed',
          start_time: '2025-04-06T14:58:00+10:00',
          end_time: '2025-04-06T17:25:00+10:00'
        },
        {
          id: '21600f2f-860a-445f-8859-b46bef978ab2',
          status: 'New',
          start_time: '2025-04-06T21:24:00+10:00',
          end_time: '2025-04-06T22:02:00+10:00'
        },
        {
          id: '2441394e-0b43-41a4-b967-a35570bed91d',
          status: 'New',
          start_time: '2025-04-06T14:02:00+10:00',
          end_time: '2025-04-06T16:41:00+10:00'
        },
        {
          id: 'e7985108-4ab1-443f-918d-1014f08fc4e6',
          status: 'Banquet',
          start_time: '2025-04-06T21:48:00+10:00',
          end_time: '2025-04-06T23:15:00+10:00'
        },
        {
          id: 'f5791044-4a91-4790-a1fe-ac7c0cda5df4',
          status: 'Closed',
          start_time: '2025-04-06T15:15:00+10:00',
          end_time: '2025-04-06T16:12:00+10:00'
        },
        {
          id: '62685992-cad5-4c04-88e8-e930e564e504',
          status: 'New',
          start_time: '2025-04-06T13:48:00+10:00',
          end_time: '2025-04-06T15:38:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40146,
          name_for_reservation: 'Александр',
          num_people: 7,
          phone_number: '+79415154049',
          status: 'Закрыт',
          seating_time: '2025-04-06T14:59:00+10:00',
          end_time: '2025-04-06T15:40:00+10:00'
        },
        {
          id: 40147,
          name_for_reservation: 'Иван',
          num_people: 1,
          phone_number: '+79633793771',
          status: 'Открыт',
          seating_time: '2025-04-06T11:48:00+10:00',
          end_time: '2025-04-06T12:29:00+10:00'
        },
        {
          id: 40148,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79129851697',
          status: 'Новая',
          seating_time: '2025-04-06T17:08:00+10:00',
          end_time: '2025-04-06T19:37:00+10:00'
        },
        {
          id: 40149,
          name_for_reservation: 'Татьяна',
          num_people: 9,
          phone_number: '+79310679814',
          status: 'Живая очередь',
          seating_time: '2025-04-06T15:33:00+10:00',
          end_time: '2025-04-06T17:29:00+10:00'
        },
        {
          id: 40150,
          name_for_reservation: 'Валентина',
          num_people: 2,
          phone_number: '+79977017373',
          status: 'Открыт',
          seating_time: '2025-04-06T21:40:00+10:00',
          end_time: '2025-04-06T22:11:00+10:00'
        }
      ]
    },
    {
      id: '00c3cb16-48c3-4610-bb8f-3e2e29fec468',
      capacity: 2,
      number: 'B6',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'caeb4056-1bc5-4dac-acf4-f68f066188c5',
          status: 'Bill',
          start_time: '2025-04-06T12:53:00+10:00',
          end_time: '2025-04-06T13:51:00+10:00'
        },
        {
          id: 'c46f1c0d-72b6-4440-a519-20ed692f5eab',
          status: 'Bill',
          start_time: '2025-04-06T11:04:00+10:00',
          end_time: '2025-04-06T11:35:00+10:00'
        },
        {
          id: 'b652d44a-dcb8-4543-a825-404beaafeb13',
          status: 'Banquet',
          start_time: '2025-04-06T18:01:00+10:00',
          end_time: '2025-04-06T19:55:00+10:00'
        },
        {
          id: '1d20d454-25fa-4bf0-9404-3c167d534d65',
          status: 'Banquet',
          start_time: '2025-04-06T14:28:00+10:00',
          end_time: '2025-04-06T17:05:00+10:00'
        },
        {
          id: '2ba6a406-2fac-4b05-ac7e-f04de6cc8b3a',
          status: 'Closed',
          start_time: '2025-04-06T12:33:00+10:00',
          end_time: '2025-04-06T14:41:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40151,
          name_for_reservation: 'Юлия',
          num_people: 1,
          phone_number: '+79547908693',
          status: 'Живая очередь',
          seating_time: '2025-04-06T12:32:00+10:00',
          end_time: '2025-04-06T15:00:00+10:00'
        },
        {
          id: 40152,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79417147167',
          status: 'Закрыт',
          seating_time: '2025-04-06T14:14:00+10:00',
          end_time: '2025-04-06T16:08:00+10:00'
        },
        {
          id: 40153,
          name_for_reservation: 'Геннадий',
          num_people: 2,
          phone_number: '+79744363927',
          status: 'Закрыт',
          seating_time: '2025-04-06T21:38:00+10:00',
          end_time: '2025-04-06T23:01:00+10:00'
        },
        {
          id: 40154,
          name_for_reservation: 'Валентина',
          num_people: 1,
          phone_number: '+79632855445',
          status: 'Новая',
          seating_time: '2025-04-06T13:13:00+10:00',
          end_time: '2025-04-06T15:45:00+10:00'
        },
        {
          id: 40155,
          name_for_reservation: 'Аркадий',
          num_people: 2,
          phone_number: '+79178114424',
          status: 'Живая очередь',
          seating_time: '2025-04-06T12:39:00+10:00',
          end_time: '2025-04-06T15:32:00+10:00'
        },
        {
          id: 40156,
          name_for_reservation: 'Валентина',
          num_people: 2,
          phone_number: '+79851796655',
          status: 'Новая',
          seating_time: '2025-04-06T21:47:00+10:00',
          end_time: '2025-04-06T23:27:00+10:00'
        },
        {
          id: 40157,
          name_for_reservation: 'Юлия',
          num_people: 1,
          phone_number: '+79756168265',
          status: 'Живая очередь',
          seating_time: '2025-04-06T21:30:00+10:00',
          end_time: '2025-04-06T22:11:00+10:00'
        }
      ]
    },
    {
      id: '3f4f69fe-7d76-4f3b-9f35-d0f76f9ab7d8',
      capacity: 8,
      number: 'B7',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'ef4a1d0d-262a-4488-88b5-4638561e80a0',
          status: 'Closed',
          start_time: '2025-04-06T13:09:00+10:00',
          end_time: '2025-04-06T15:15:00+10:00'
        },
        {
          id: '2facbe55-1094-4c4b-bdbc-2a7f7a15440a',
          status: 'Closed',
          start_time: '2025-04-06T12:15:00+10:00',
          end_time: '2025-04-06T13:56:00+10:00'
        },
        {
          id: '18f80ac6-ca39-4d8b-8412-a368e87bdad4',
          status: 'Closed',
          start_time: '2025-04-06T20:38:00+10:00',
          end_time: '2025-04-06T21:32:00+10:00'
        },
        {
          id: '373831be-0fb4-4977-aa17-6ce76952d797',
          status: 'Closed',
          start_time: '2025-04-06T16:17:00+10:00',
          end_time: '2025-04-06T19:00:00+10:00'
        },
        {
          id: 'f478223a-f119-4b4e-bc33-706056662069',
          status: 'Bill',
          start_time: '2025-04-06T20:50:00+10:00',
          end_time: '2025-04-06T21:44:00+10:00'
        },
        {
          id: '8a25667c-803e-497c-9cc4-c717f82bc97d',
          status: 'New',
          start_time: '2025-04-06T14:13:00+10:00',
          end_time: '2025-04-06T16:13:00+10:00'
        },
        {
          id: '5cf5e845-d91c-45be-a495-fc337f8b0ad9',
          status: 'Bill',
          start_time: '2025-04-06T19:06:00+10:00',
          end_time: '2025-04-06T21:42:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40158,
          name_for_reservation: 'Ольга',
          num_people: 3,
          phone_number: '+79633347317',
          status: 'Новая',
          seating_time: '2025-04-06T20:56:00+10:00',
          end_time: '2025-04-06T21:36:00+10:00'
        },
        {
          id: 40159,
          name_for_reservation: 'Светлана',
          num_people: 3,
          phone_number: '+79979520801',
          status: 'Живая очередь',
          seating_time: '2025-04-06T19:06:00+10:00',
          end_time: '2025-04-06T19:57:00+10:00'
        },
        {
          id: 40160,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79813922911',
          status: 'Живая очередь',
          seating_time: '2025-04-06T14:00:00+10:00',
          end_time: '2025-04-06T16:13:00+10:00'
        },
        {
          id: 40161,
          name_for_reservation: 'Константин',
          num_people: 6,
          phone_number: '+79380143478',
          status: 'Открыт',
          seating_time: '2025-04-06T15:17:00+10:00',
          end_time: '2025-04-06T15:55:00+10:00'
        },
        {
          id: 40162,
          name_for_reservation: 'Анна',
          num_people: 8,
          phone_number: '+79144172772',
          status: 'Открыт',
          seating_time: '2025-04-06T12:09:00+10:00',
          end_time: '2025-04-06T15:06:00+10:00'
        },
        {
          id: 40163,
          name_for_reservation: 'Аркадий',
          num_people: 1,
          phone_number: '+79798537200',
          status: 'Живая очередь',
          seating_time: '2025-04-06T15:38:00+10:00',
          end_time: '2025-04-06T17:42:00+10:00'
        }
      ]
    },
    {
      id: 'efd30ec5-0d42-48ab-8b02-4d8c9cd97b71',
      capacity: 12,
      number: 'B8',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '15853dd0-53cd-4ae6-bba9-0ad09791a336',
          status: 'Bill',
          start_time: '2025-04-06T22:07:00+10:00',
          end_time: '2025-04-06T23:09:00+10:00'
        },
        {
          id: '8dca199e-1463-4487-ab1b-42525d05f032',
          status: 'Banquet',
          start_time: '2025-04-06T16:05:00+10:00',
          end_time: '2025-04-06T17:57:00+10:00'
        },
        {
          id: '75366156-7663-4e65-8c50-8728aa185075',
          status: 'Banquet',
          start_time: '2025-04-06T14:39:00+10:00',
          end_time: '2025-04-06T17:39:00+10:00'
        },
        {
          id: '86837f74-2005-4003-a905-34e37762ede7',
          status: 'New',
          start_time: '2025-04-06T15:46:00+10:00',
          end_time: '2025-04-06T17:24:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40164,
          name_for_reservation: 'Евгений',
          num_people: 5,
          phone_number: '+79107268580',
          status: 'Живая очередь',
          seating_time: '2025-04-06T17:14:00+10:00',
          end_time: '2025-04-06T18:03:00+10:00'
        },
        {
          id: 40165,
          name_for_reservation: 'Евгений',
          num_people: 3,
          phone_number: '+79936598056',
          status: 'Живая очередь',
          seating_time: '2025-04-06T20:11:00+10:00',
          end_time: '2025-04-06T20:51:00+10:00'
        },
        {
          id: 40166,
          name_for_reservation: 'Андрей',
          num_people: 7,
          phone_number: '+79367965786',
          status: 'Закрыт',
          seating_time: '2025-04-06T13:08:00+10:00',
          end_time: '2025-04-06T15:48:00+10:00'
        },
        {
          id: 40167,
          name_for_reservation: 'Валентина',
          num_people: 11,
          phone_number: '+79296600849',
          status: 'Открыт',
          seating_time: '2025-04-06T20:28:00+10:00',
          end_time: '2025-04-06T22:38:00+10:00'
        }
      ]
    },
    {
      id: 'c2e83f69-974b-42ae-944b-1012e2c15c93',
      capacity: 6,
      number: 'B9',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'd8858508-0035-42c4-afbc-c4c307a5bd4f',
          status: 'Closed',
          start_time: '2025-04-06T19:30:00+10:00',
          end_time: '2025-04-06T22:21:00+10:00'
        },
        {
          id: '13c70653-1646-46a8-baf0-7b59845b2433',
          status: 'New',
          start_time: '2025-04-06T16:58:00+10:00',
          end_time: '2025-04-06T17:53:00+10:00'
        },
        {
          id: '3a7f27be-b36e-45d2-b7b3-2e7cb73fde18',
          status: 'Closed',
          start_time: '2025-04-06T12:11:00+10:00',
          end_time: '2025-04-06T13:38:00+10:00'
        },
        {
          id: '40061642-ac73-40f8-afb9-a164fa6d26aa',
          status: 'Closed',
          start_time: '2025-04-06T21:19:00+10:00',
          end_time: '2025-04-06T22:20:00+10:00'
        },
        {
          id: 'ef74b4a3-8bbc-41f4-9819-d59bd9fba77d',
          status: 'Closed',
          start_time: '2025-04-06T23:07:00+10:00',
          end_time: '2025-04-06T23:37:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40168,
          name_for_reservation: 'Ольга',
          num_people: 3,
          phone_number: '+79209034801',
          status: 'Открыт',
          seating_time: '2025-04-06T23:07:00+10:00',
          end_time: '2025-04-06T23:37:00+10:00'
        },
        {
          id: 40169,
          name_for_reservation: 'Александр',
          num_people: 4,
          phone_number: '+79406258385',
          status: 'Живая очередь',
          seating_time: '2025-04-06T15:28:00+10:00',
          end_time: '2025-04-06T17:44:00+10:00'
        },
        {
          id: 40170,
          name_for_reservation: 'Валентина',
          num_people: 2,
          phone_number: '+79885848072',
          status: 'Заявка',
          seating_time: '2025-04-06T13:43:00+10:00',
          end_time: '2025-04-06T16:04:00+10:00'
        },
        {
          id: 40171,
          name_for_reservation: 'Сергей',
          num_people: 6,
          phone_number: '+79660966338',
          status: 'Живая очередь',
          seating_time: '2025-04-06T15:13:00+10:00',
          end_time: '2025-04-06T18:10:00+10:00'
        },
        {
          id: 40172,
          name_for_reservation: 'Татьяна',
          num_people: 3,
          phone_number: '+79323026570',
          status: 'Новая',
          seating_time: '2025-04-06T16:11:00+10:00',
          end_time: '2025-04-06T16:55:00+10:00'
        },
        {
          id: 40173,
          name_for_reservation: 'Василий',
          num_people: 1,
          phone_number: '+79903746969',
          status: 'Новая',
          seating_time: '2025-04-06T18:16:00+10:00',
          end_time: '2025-04-06T19:25:00+10:00'
        }
      ]
    },
    {
      id: 'fcaea1ec-a745-48e4-abe1-3a0333aac2e9',
      capacity: 6,
      number: 'B10',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'b6bd5f9e-6ab7-4987-89a2-4f156057d31c',
          status: 'Closed',
          start_time: '2025-04-06T20:43:00+10:00',
          end_time: '2025-04-06T21:49:00+10:00'
        },
        {
          id: '11e362e9-635e-424b-9507-32bd4c67f14f',
          status: 'Closed',
          start_time: '2025-04-06T17:53:00+10:00',
          end_time: '2025-04-06T19:42:00+10:00'
        },
        {
          id: 'b952640c-7d81-4cc6-a403-cf71e5855381',
          status: 'Banquet',
          start_time: '2025-04-06T12:09:00+10:00',
          end_time: '2025-04-06T14:25:00+10:00'
        },
        {
          id: 'a7083e68-9562-4a9b-bba3-8b6c72521fc9',
          status: 'Banquet',
          start_time: '2025-04-06T19:21:00+10:00',
          end_time: '2025-04-06T21:47:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40174,
          name_for_reservation: 'Сергей',
          num_people: 3,
          phone_number: '+79764747958',
          status: 'Закрыт',
          seating_time: '2025-04-06T14:44:00+10:00',
          end_time: '2025-04-06T16:50:00+10:00'
        },
        {
          id: 40175,
          name_for_reservation: 'Татьяна',
          num_people: 1,
          phone_number: '+79626300271',
          status: 'Живая очередь',
          seating_time: '2025-04-06T11:28:00+10:00',
          end_time: '2025-04-06T12:00:00+10:00'
        },
        {
          id: 40176,
          name_for_reservation: 'Александр',
          num_people: 5,
          phone_number: '+79682321865',
          status: 'Закрыт',
          seating_time: '2025-04-06T16:04:00+10:00',
          end_time: '2025-04-06T16:37:00+10:00'
        },
        {
          id: 40177,
          name_for_reservation: 'Василий',
          num_people: 2,
          phone_number: '+79615920596',
          status: 'Живая очередь',
          seating_time: '2025-04-06T19:07:00+10:00',
          end_time: '2025-04-06T19:56:00+10:00'
        },
        {
          id: 40178,
          name_for_reservation: 'Анатолий',
          num_people: 5,
          phone_number: '+79432935155',
          status: 'Закрыт',
          seating_time: '2025-04-06T22:27:00+10:00',
          end_time: '2025-04-06T23:29:00+10:00'
        }
      ]
    },
    {
      id: '357c43e6-7cfa-4899-b41d-f4094d9765d3',
      capacity: 2,
      number: 'B11',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'b78a55fe-ad9f-4e90-9c1b-d8f23d21f945',
          status: 'Bill',
          start_time: '2025-04-06T14:58:00+10:00',
          end_time: '2025-04-06T16:44:00+10:00'
        },
        {
          id: '6536202d-7733-4a3f-b8fe-514890a244a8',
          status: 'New',
          start_time: '2025-04-06T15:20:00+10:00',
          end_time: '2025-04-06T16:00:00+10:00'
        },
        {
          id: '9e8fa2d6-77da-4aa8-9bca-f99d78a2118b',
          status: 'New',
          start_time: '2025-04-06T18:59:00+10:00',
          end_time: '2025-04-06T20:02:00+10:00'
        },
        {
          id: 'fa5ce65d-47f7-4762-8bc9-fe0267921cdd',
          status: 'Bill',
          start_time: '2025-04-06T15:02:00+10:00',
          end_time: '2025-04-06T15:38:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40179,
          name_for_reservation: 'Геннадий',
          num_people: 2,
          phone_number: '+79361456024',
          status: 'Живая очередь',
          seating_time: '2025-04-06T18:22:00+10:00',
          end_time: '2025-04-06T19:04:00+10:00'
        },
        {
          id: 40180,
          name_for_reservation: 'Татьяна',
          num_people: 1,
          phone_number: '+79771922966',
          status: 'Новая',
          seating_time: '2025-04-06T15:29:00+10:00',
          end_time: '2025-04-06T16:03:00+10:00'
        },
        {
          id: 40181,
          name_for_reservation: 'Евгения',
          num_people: 2,
          phone_number: '+79421615755',
          status: 'Закрыт',
          seating_time: '2025-04-06T13:30:00+10:00',
          end_time: '2025-04-06T16:21:00+10:00'
        },
        {
          id: 40182,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79604456430',
          status: 'Закрыт',
          seating_time: '2025-04-06T23:09:00+10:00',
          end_time: '2025-04-06T23:39:00+10:00'
        },
        {
          id: 40183,
          name_for_reservation: 'Григорий',
          num_people: 2,
          phone_number: '+79591546718',
          status: 'Новая',
          seating_time: '2025-04-06T14:30:00+10:00',
          end_time: '2025-04-06T15:19:00+10:00'
        },
        {
          id: 40184,
          name_for_reservation: 'Валентина',
          num_people: 1,
          phone_number: '+79635743704',
          status: 'Открыт',
          seating_time: '2025-04-06T19:18:00+10:00',
          end_time: '2025-04-06T20:19:00+10:00'
        },
        {
          id: 40185,
          name_for_reservation: 'Александр',
          num_people: 2,
          phone_number: '+79459250885',
          status: 'Открыт',
          seating_time: '2025-04-06T11:05:00+10:00',
          end_time: '2025-04-06T12:51:00+10:00'
        }
      ]
    },
    {
      id: '96b68f06-f000-47e6-b563-eb80cb268050',
      capacity: 6,
      number: 'B12',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '5e81766c-bb09-461d-90b3-bc7ffeab247a',
          status: 'Closed',
          start_time: '2025-04-06T12:44:00+10:00',
          end_time: '2025-04-06T15:16:00+10:00'
        },
        {
          id: '7f55662a-00b8-42ac-8768-718ecfdfe40c',
          status: 'Banquet',
          start_time: '2025-04-06T21:54:00+10:00',
          end_time: '2025-04-06T22:53:00+10:00'
        },
        {
          id: 'b085f745-a63c-4200-b2cf-4abb0fe4f322',
          status: 'Closed',
          start_time: '2025-04-06T11:34:00+10:00',
          end_time: '2025-04-06T13:23:00+10:00'
        },
        {
          id: '84436e2f-127a-4f99-87ee-2cc25a45d5ad',
          status: 'Closed',
          start_time: '2025-04-06T21:07:00+10:00',
          end_time: '2025-04-06T23:27:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40186,
          name_for_reservation: 'Александр',
          num_people: 2,
          phone_number: '+79302395345',
          status: 'Заявка',
          seating_time: '2025-04-06T14:22:00+10:00',
          end_time: '2025-04-06T16:01:00+10:00'
        },
        {
          id: 40187,
          name_for_reservation: 'Евгения',
          num_people: 5,
          phone_number: '+79652588626',
          status: 'Новая',
          seating_time: '2025-04-06T14:24:00+10:00',
          end_time: '2025-04-06T16:08:00+10:00'
        },
        {
          id: 40188,
          name_for_reservation: 'Андрей',
          num_people: 6,
          phone_number: '+79290994317',
          status: 'Новая',
          seating_time: '2025-04-06T22:26:00+10:00',
          end_time: '2025-04-06T23:29:00+10:00'
        },
        {
          id: 40189,
          name_for_reservation: 'Сергей',
          num_people: 2,
          phone_number: '+79490836967',
          status: 'Закрыт',
          seating_time: '2025-04-06T11:47:00+10:00',
          end_time: '2025-04-06T13:25:00+10:00'
        },
        {
          id: 40190,
          name_for_reservation: 'Василий',
          num_people: 3,
          phone_number: '+79530230229',
          status: 'Заявка',
          seating_time: '2025-04-06T21:47:00+10:00',
          end_time: '2025-04-06T23:36:00+10:00'
        },
        {
          id: 40191,
          name_for_reservation: 'Мария',
          num_people: 5,
          phone_number: '+79617446653',
          status: 'Закрыт',
          seating_time: '2025-04-06T17:27:00+10:00',
          end_time: '2025-04-06T17:57:00+10:00'
        },
        {
          id: 40192,
          name_for_reservation: 'Андрей',
          num_people: 1,
          phone_number: '+79730070549',
          status: 'Новая',
          seating_time: '2025-04-06T13:27:00+10:00',
          end_time: '2025-04-06T14:50:00+10:00'
        }
      ]
    },
    {
      id: '0100449e-6ff2-4738-90f5-75d64069f4ba',
      capacity: 10,
      number: 'B13',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '5610545e-c2d7-4cf2-b33b-de864fa01d7d',
          status: 'Banquet',
          start_time: '2025-04-06T18:12:00+10:00',
          end_time: '2025-04-06T19:37:00+10:00'
        },
        {
          id: '96ae290d-098b-4a5e-9689-4c9db912f6a2',
          status: 'New',
          start_time: '2025-04-06T19:42:00+10:00',
          end_time: '2025-04-06T20:44:00+10:00'
        },
        {
          id: '9af1c1ca-da8f-4d16-99c1-869bb7185aec',
          status: 'Bill',
          start_time: '2025-04-06T13:17:00+10:00',
          end_time: '2025-04-06T15:09:00+10:00'
        },
        {
          id: '3c6b2972-41e2-44a9-b134-e35640776e03',
          status: 'Banquet',
          start_time: '2025-04-06T21:25:00+10:00',
          end_time: '2025-04-06T23:32:00+10:00'
        },
        {
          id: '18b12443-38e3-4748-af9c-fea24cf01d13',
          status: 'New',
          start_time: '2025-04-06T14:06:00+10:00',
          end_time: '2025-04-06T15:20:00+10:00'
        },
        {
          id: '289fb8b4-ea37-4def-9c55-842ae2bcd63a',
          status: 'New',
          start_time: '2025-04-06T20:53:00+10:00',
          end_time: '2025-04-06T23:25:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40193,
          name_for_reservation: 'Василий',
          num_people: 2,
          phone_number: '+79836989299',
          status: 'Заявка',
          seating_time: '2025-04-06T12:28:00+10:00',
          end_time: '2025-04-06T14:32:00+10:00'
        },
        {
          id: 40194,
          name_for_reservation: 'Василий',
          num_people: 7,
          phone_number: '+79263035778',
          status: 'Новая',
          seating_time: '2025-04-06T14:48:00+10:00',
          end_time: '2025-04-06T15:29:00+10:00'
        },
        {
          id: 40195,
          name_for_reservation: 'Лариса',
          num_people: 5,
          phone_number: '+79639951178',
          status: 'Живая очередь',
          seating_time: '2025-04-06T14:18:00+10:00',
          end_time: '2025-04-06T15:39:00+10:00'
        },
        {
          id: 40196,
          name_for_reservation: 'Дмитрий',
          num_people: 9,
          phone_number: '+79175135861',
          status: 'Открыт',
          seating_time: '2025-04-06T22:20:00+10:00',
          end_time: '2025-04-06T23:34:00+10:00'
        },
        {
          id: 40197,
          name_for_reservation: 'Григорий',
          num_people: 9,
          phone_number: '+79696499174',
          status: 'Открыт',
          seating_time: '2025-04-06T13:37:00+10:00',
          end_time: '2025-04-06T16:16:00+10:00'
        }
      ]
    },
    {
      id: '15d2272b-6b45-4482-b0af-e87f49b86f65',
      capacity: 8,
      number: 'B14',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'f4524afa-1f6a-4167-a76c-aea0df75fa62',
          status: 'Banquet',
          start_time: '2025-04-06T17:04:00+10:00',
          end_time: '2025-04-06T19:17:00+10:00'
        },
        {
          id: '80edd29a-1b42-4f4d-8e1f-d2ea7bdd2db5',
          status: 'New',
          start_time: '2025-04-06T16:38:00+10:00',
          end_time: '2025-04-06T17:39:00+10:00'
        },
        {
          id: 'beca0042-55e1-4a67-9436-5b97c21b47ff',
          status: 'Bill',
          start_time: '2025-04-06T22:48:00+10:00',
          end_time: '2025-04-06T23:27:00+10:00'
        },
        {
          id: 'fecb155e-3b6e-4465-a3f2-a0e2970b9add',
          status: 'Closed',
          start_time: '2025-04-06T19:49:00+10:00',
          end_time: '2025-04-06T20:51:00+10:00'
        },
        {
          id: '6b4b478c-9d17-4d13-bd7a-0d9a88c0e76a',
          status: 'Closed',
          start_time: '2025-04-06T17:31:00+10:00',
          end_time: '2025-04-06T18:07:00+10:00'
        },
        {
          id: 'ce475f17-5616-42be-81e5-c53abadf2bbd',
          status: 'Banquet',
          start_time: '2025-04-06T15:26:00+10:00',
          end_time: '2025-04-06T17:45:00+10:00'
        },
        {
          id: '11b7dcb8-dc21-43cf-9fd5-3e9888951a5d',
          status: 'Closed',
          start_time: '2025-04-06T14:07:00+10:00',
          end_time: '2025-04-06T16:46:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40198,
          name_for_reservation: 'Ольга',
          num_people: 3,
          phone_number: '+79200682066',
          status: 'Новая',
          seating_time: '2025-04-06T22:47:00+10:00',
          end_time: '2025-04-06T23:30:00+10:00'
        },
        {
          id: 40199,
          name_for_reservation: 'Александр',
          num_people: 7,
          phone_number: '+79703128335',
          status: 'Живая очередь',
          seating_time: '2025-04-06T12:09:00+10:00',
          end_time: '2025-04-06T14:38:00+10:00'
        },
        {
          id: 40200,
          name_for_reservation: 'Константин',
          num_people: 1,
          phone_number: '+79718148498',
          status: 'Заявка',
          seating_time: '2025-04-06T15:53:00+10:00',
          end_time: '2025-04-06T18:13:00+10:00'
        },
        {
          id: 40201,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79878012167',
          status: 'Закрыт',
          seating_time: '2025-04-06T19:43:00+10:00',
          end_time: '2025-04-06T21:40:00+10:00'
        },
        {
          id: 40202,
          name_for_reservation: 'Дмитрий',
          num_people: 8,
          phone_number: '+79878980540',
          status: 'Закрыт',
          seating_time: '2025-04-06T12:00:00+10:00',
          end_time: '2025-04-06T13:08:00+10:00'
        }
      ]
    },
    {
      id: '1fbf7c2d-6cca-4ed1-8608-33647b3e9811',
      capacity: 4,
      number: 'B15',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'bb1e4d62-5b19-444f-92df-174deddbb83d',
          status: 'Banquet',
          start_time: '2025-04-06T12:48:00+10:00',
          end_time: '2025-04-06T14:41:00+10:00'
        },
        {
          id: 'cbd165c7-593e-4b3e-b0e4-abf7fbc1456a',
          status: 'Closed',
          start_time: '2025-04-06T14:10:00+10:00',
          end_time: '2025-04-06T15:07:00+10:00'
        },
        {
          id: 'f10844e2-49ec-40c8-bd58-aed9646c59bb',
          status: 'Banquet',
          start_time: '2025-04-06T11:39:00+10:00',
          end_time: '2025-04-06T13:11:00+10:00'
        },
        {
          id: '2936eb2f-53fc-4154-842a-1a155a2b476a',
          status: 'Banquet',
          start_time: '2025-04-06T13:50:00+10:00',
          end_time: '2025-04-06T14:58:00+10:00'
        },
        {
          id: '5d2983bb-5112-4830-95cc-dd82dce0651f',
          status: 'Bill',
          start_time: '2025-04-06T20:00:00+10:00',
          end_time: '2025-04-06T22:21:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40203,
          name_for_reservation: 'Дмитрий',
          num_people: 4,
          phone_number: '+79842146201',
          status: 'Закрыт',
          seating_time: '2025-04-06T23:07:00+10:00',
          end_time: '2025-04-06T23:37:00+10:00'
        },
        {
          id: 40204,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79210658243',
          status: 'Заявка',
          seating_time: '2025-04-06T15:01:00+10:00',
          end_time: '2025-04-06T15:37:00+10:00'
        },
        {
          id: 40205,
          name_for_reservation: 'Иван',
          num_people: 1,
          phone_number: '+79691819438',
          status: 'Живая очередь',
          seating_time: '2025-04-06T19:39:00+10:00',
          end_time: '2025-04-06T22:29:00+10:00'
        },
        {
          id: 40206,
          name_for_reservation: 'Валентина',
          num_people: 1,
          phone_number: '+79244271985',
          status: 'Открыт',
          seating_time: '2025-04-06T15:34:00+10:00',
          end_time: '2025-04-06T17:05:00+10:00'
        }
      ]
    },
    {
      id: '086fcdb1-8f4e-410e-ad34-ce667ca93118',
      capacity: 8,
      number: 'B16',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'ea3b1d0c-dc9e-4f27-971c-b4e8c9663570',
          status: 'Bill',
          start_time: '2025-04-06T19:19:00+10:00',
          end_time: '2025-04-06T19:49:00+10:00'
        },
        {
          id: '8616e677-c6e0-4fa1-9403-d4260d410b56',
          status: 'New',
          start_time: '2025-04-06T16:38:00+10:00',
          end_time: '2025-04-06T19:27:00+10:00'
        },
        {
          id: '7f1d65b7-0d3e-45a2-9390-38e4ee7f7ee4',
          status: 'Banquet',
          start_time: '2025-04-06T16:47:00+10:00',
          end_time: '2025-04-06T18:24:00+10:00'
        },
        {
          id: '25830a1d-f668-423f-93fb-7615b9a4ad19',
          status: 'Banquet',
          start_time: '2025-04-06T21:24:00+10:00',
          end_time: '2025-04-06T22:35:00+10:00'
        },
        {
          id: '06f9ff76-6c7b-4d39-a76b-65f127bd4856',
          status: 'New',
          start_time: '2025-04-06T20:17:00+10:00',
          end_time: '2025-04-06T22:40:00+10:00'
        },
        {
          id: '12fef1b6-44c2-40ae-b6c7-5a8c9629a18c',
          status: 'Bill',
          start_time: '2025-04-06T11:48:00+10:00',
          end_time: '2025-04-06T13:13:00+10:00'
        },
        {
          id: '1dcfb03c-0411-42a3-bae8-416a64add138',
          status: 'Closed',
          start_time: '2025-04-06T19:06:00+10:00',
          end_time: '2025-04-06T21:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40207,
          name_for_reservation: 'Геннадий',
          num_people: 8,
          phone_number: '+79787986539',
          status: 'Открыт',
          seating_time: '2025-04-06T20:59:00+10:00',
          end_time: '2025-04-06T22:54:00+10:00'
        },
        {
          id: 40208,
          name_for_reservation: 'Иван',
          num_people: 6,
          phone_number: '+79211571069',
          status: 'Закрыт',
          seating_time: '2025-04-06T20:04:00+10:00',
          end_time: '2025-04-06T21:45:00+10:00'
        },
        {
          id: 40209,
          name_for_reservation: 'Роман',
          num_people: 5,
          phone_number: '+79932294470',
          status: 'Открыт',
          seating_time: '2025-04-06T20:26:00+10:00',
          end_time: '2025-04-06T21:16:00+10:00'
        },
        {
          id: 40210,
          name_for_reservation: 'Валентина',
          num_people: 2,
          phone_number: '+79508226764',
          status: 'Новая',
          seating_time: '2025-04-06T18:29:00+10:00',
          end_time: '2025-04-06T19:21:00+10:00'
        }
      ]
    },
    {
      id: 'ed5b2f75-1b25-4626-bba6-aec911761cc8',
      capacity: 2,
      number: 'B17',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'e7c6360c-1af3-4c0c-8c6a-cee5d7b4b7af',
          status: 'Closed',
          start_time: '2025-04-06T19:58:00+10:00',
          end_time: '2025-04-06T21:34:00+10:00'
        },
        {
          id: '6ced7d46-179f-4ebb-9e1a-fc87bdf25435',
          status: 'Banquet',
          start_time: '2025-04-06T18:10:00+10:00',
          end_time: '2025-04-06T20:09:00+10:00'
        },
        {
          id: '5150cc68-f9eb-4865-a73d-98283681ad00',
          status: 'Bill',
          start_time: '2025-04-06T15:41:00+10:00',
          end_time: '2025-04-06T17:49:00+10:00'
        },
        {
          id: '5b76444e-592d-4ae6-ac17-f3b93733009b',
          status: 'New',
          start_time: '2025-04-06T13:51:00+10:00',
          end_time: '2025-04-06T16:26:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40211,
          name_for_reservation: 'Анна',
          num_people: 2,
          phone_number: '+79273965107',
          status: 'Новая',
          seating_time: '2025-04-06T20:22:00+10:00',
          end_time: '2025-04-06T22:44:00+10:00'
        },
        {
          id: 40212,
          name_for_reservation: 'Анна',
          num_people: 2,
          phone_number: '+79639460547',
          status: 'Живая очередь',
          seating_time: '2025-04-06T23:01:00+10:00',
          end_time: '2025-04-06T23:38:00+10:00'
        },
        {
          id: 40213,
          name_for_reservation: 'Анатолий',
          num_people: 1,
          phone_number: '+79659878396',
          status: 'Новая',
          seating_time: '2025-04-06T14:44:00+10:00',
          end_time: '2025-04-06T17:22:00+10:00'
        },
        {
          id: 40214,
          name_for_reservation: 'Роман',
          num_people: 1,
          phone_number: '+79876446990',
          status: 'Открыт',
          seating_time: '2025-04-06T21:00:00+10:00',
          end_time: '2025-04-06T22:17:00+10:00'
        },
        {
          id: 40215,
          name_for_reservation: 'Аркадий',
          num_people: 2,
          phone_number: '+79771528414',
          status: 'Заявка',
          seating_time: '2025-04-06T11:46:00+10:00',
          end_time: '2025-04-06T13:52:00+10:00'
        },
        {
          id: 40216,
          name_for_reservation: 'Александр',
          num_people: 1,
          phone_number: '+79785322462',
          status: 'Живая очередь',
          seating_time: '2025-04-06T22:36:00+10:00',
          end_time: '2025-04-06T23:26:00+10:00'
        },
        {
          id: 40217,
          name_for_reservation: 'Евгений',
          num_people: 1,
          phone_number: '+79187259790',
          status: 'Заявка',
          seating_time: '2025-04-06T20:33:00+10:00',
          end_time: '2025-04-06T22:58:00+10:00'
        }
      ]
    },
    {
      id: '34a12ed9-1872-4c11-921b-abaa595477b7',
      capacity: 10,
      number: 'B18',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '479e4b51-7d9a-4a94-b4ab-2b99f6b241a3',
          status: 'Bill',
          start_time: '2025-04-06T22:18:00+10:00',
          end_time: '2025-04-06T23:02:00+10:00'
        },
        {
          id: '2edccae7-d944-45ac-b15c-de2b44d71134',
          status: 'Closed',
          start_time: '2025-04-06T12:38:00+10:00',
          end_time: '2025-04-06T14:47:00+10:00'
        },
        {
          id: '5dbe5531-65a4-4f81-83c9-591d5a6a90ec',
          status: 'Closed',
          start_time: '2025-04-06T14:19:00+10:00',
          end_time: '2025-04-06T15:07:00+10:00'
        },
        {
          id: 'bab5bda5-0687-4677-8206-f912a4671aa7',
          status: 'New',
          start_time: '2025-04-06T13:06:00+10:00',
          end_time: '2025-04-06T15:41:00+10:00'
        },
        {
          id: '90661fb9-9e7a-46c1-a09d-0854d6803cab',
          status: 'Bill',
          start_time: '2025-04-06T18:56:00+10:00',
          end_time: '2025-04-06T21:28:00+10:00'
        },
        {
          id: '17f41aa8-8d51-4d3e-8afb-a9f5892078c6',
          status: 'Closed',
          start_time: '2025-04-06T14:52:00+10:00',
          end_time: '2025-04-06T17:05:00+10:00'
        }
      ],
      reservations: [
        {
          id: 40218,
          name_for_reservation: 'Андрей',
          num_people: 3,
          phone_number: '+79825625968',
          status: 'Заявка',
          seating_time: '2025-04-06T13:32:00+10:00',
          end_time: '2025-04-06T14:09:00+10:00'
        },
        {
          id: 40219,
          name_for_reservation: 'Сергей',
          num_people: 6,
          phone_number: '+79320199696',
          status: 'Заявка',
          seating_time: '2025-04-06T17:16:00+10:00',
          end_time: '2025-04-06T19:52:00+10:00'
        },
        {
          id: 40220,
          name_for_reservation: 'Мария',
          num_people: 10,
          phone_number: '+79470708796',
          status: 'Заявка',
          seating_time: '2025-04-06T21:04:00+10:00',
          end_time: '2025-04-06T22:10:00+10:00'
        },
        {
          id: 40221,
          name_for_reservation: 'Василий',
          num_people: 3,
          phone_number: '+79123977698',
          status: 'Открыт',
          seating_time: '2025-04-06T15:24:00+10:00',
          end_time: '2025-04-06T16:18:00+10:00'
        },
        {
          id: 40222,
          name_for_reservation: 'Ксения',
          num_people: 3,
          phone_number: '+79734633263',
          status: 'Живая очередь',
          seating_time: '2025-04-06T16:31:00+10:00',
          end_time: '2025-04-06T17:11:00+10:00'
        },
        {
          id: 40223,
          name_for_reservation: 'Юлия',
          num_people: 2,
          phone_number: '+79115879969',
          status: 'Закрыт',
          seating_time: '2025-04-06T16:49:00+10:00',
          end_time: '2025-04-06T18:27:00+10:00'
        },
        {
          id: 40224,
          name_for_reservation: 'Анатолий',
          num_people: 3,
          phone_number: '+79784787367',
          status: 'Новая',
          seating_time: '2025-04-06T19:22:00+10:00',
          end_time: '2025-04-06T22:19:00+10:00'
        }
      ]
    }
  ]
}
