import { BookingData } from './type'

export const BookingDay7thOfApril: BookingData = {
  available_days: [
    '2025-04-04',
    '2025-04-05',
    '2025-04-06',
    '2025-04-07',
    '2025-04-08'
  ],
  current_day: '2025-04-07',
  restaurant: {
    id: 11100,
    timezone: 'Asia/Vladivostok',
    restaurant_name: 'Супра',
    opening_time: '11:00',
    closing_time: '23:40'
  },
  tables: [
    {
      id: '86525fbf-c4cd-4a37-8497-696c670325f4',
      capacity: 8,
      number: '1',
      zone: '1 этаж',
      orders: [
        {
          id: 'e4898922-4066-4644-9f3e-54d2e377a323',
          status: 'New',
          start_time: '2025-04-07T17:40:00+10:00',
          end_time: '2025-04-07T20:40:00+10:00'
        },
        {
          id: '4475636e-e07d-4882-a97a-03a6cfdc4d66',
          status: 'Banquet',
          start_time: '2025-04-07T20:20:00+10:00',
          end_time: '2025-04-07T22:20:00+10:00'
        },
        {
          id: '01d349c0-73e7-4ce6-9d6e-bc01f7fc4800',
          status: 'Closed',
          start_time: '2025-04-07T20:50:00+10:00',
          end_time: '2025-04-07T21:50:00+10:00'
        },
        {
          id: 'd6a303ea-d2aa-4549-942b-b7f1cffe2850',
          status: 'Banquet',
          start_time: '2025-04-07T16:40:00+10:00',
          end_time: '2025-04-07T17:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26083,
          name_for_reservation: 'Елена',
          num_people: 1,
          phone_number: '+79958765125',
          status: 'Открыт',
          seating_time: '2025-04-07T15:10:00+10:00',
          end_time: '2025-04-07T18:10:00+10:00'
        },
        {
          id: 21084,
          name_for_reservation: 'Анна',
          num_people: 7,
          phone_number: '+79869625581',
          status: 'Живая очередь',
          seating_time: '2025-04-07T17:50:00+10:00',
          end_time: '2025-04-07T18:50:00+10:00'
        },
        {
          id: 23992,
          name_for_reservation: 'Лариса',
          num_people: 10,
          phone_number: '+79709250919',
          status: 'Открыт',
          seating_time: '2025-04-07T17:50:00+10:00',
          end_time: '2025-04-07T19:50:00+10:00'
        },
        {
          id: 20322,
          name_for_reservation: 'Светлана',
          num_people: 6,
          phone_number: '+79306963524',
          status: 'Новая',
          seating_time: '2025-04-07T16:30:00+10:00',
          end_time: '2025-04-07T19:30:00+10:00'
        }
      ]
    },
    {
      id: 'a74c71c3-c329-4de0-8226-450b0c5333e2',
      capacity: 10,
      number: '2',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 26168,
          name_for_reservation: 'Ольга',
          num_people: 9,
          phone_number: '+79335846626',
          status: 'Новая',
          seating_time: '2025-04-07T17:20:00+10:00',
          end_time: '2025-04-07T18:20:00+10:00'
        }
      ]
    },
    {
      id: '15cd2b85-6e51-4b05-9ab5-804df4a55c02',
      capacity: 10,
      number: '3',
      zone: '1 этаж',
      orders: [
        {
          id: 'c0f59ccb-50d4-4fc8-8af0-320f195116e1',
          status: 'Banquet',
          start_time: '2025-04-07T11:00:00+10:00',
          end_time: '2025-04-07T13:00:00+10:00'
        },
        {
          id: 'ca5d3330-506c-4288-9f6d-d7bf0776692b',
          status: 'New',
          start_time: '2025-04-07T17:10:00+10:00',
          end_time: '2025-04-07T19:10:00+10:00'
        },
        {
          id: '510d5783-9d35-4a01-adc7-f263f13ecb62',
          status: 'New',
          start_time: '2025-04-07T12:10:00+10:00',
          end_time: '2025-04-07T14:10:00+10:00'
        },
        {
          id: '460c5bb2-6d64-4671-b997-35c13abeaffc',
          status: 'New',
          start_time: '2025-04-07T18:10:00+10:00',
          end_time: '2025-04-07T21:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24086,
          name_for_reservation: 'Анна',
          num_people: 5,
          phone_number: '+79818190877',
          status: 'Открыт',
          seating_time: '2025-04-07T15:00:00+10:00',
          end_time: '2025-04-07T16:00:00+10:00'
        }
      ]
    },
    {
      id: '5477607a-aadd-46b1-8ddc-5aa3166d765a',
      capacity: 2,
      number: '4',
      zone: '1 этаж',
      orders: [
        {
          id: '6ed77735-cad1-473b-b3ec-f7be9c2681ee',
          status: 'Bill',
          start_time: '2025-04-07T21:30:00+10:00',
          end_time: '2025-04-07T23:30:00+10:00'
        },
        {
          id: '606e0d78-3395-40e9-bd4e-488522af10c8',
          status: 'Closed',
          start_time: '2025-04-07T19:40:00+10:00',
          end_time: '2025-04-07T21:40:00+10:00'
        },
        {
          id: '19c38b4f-3296-4256-b02a-d542dc8117ad',
          status: 'Closed',
          start_time: '2025-04-07T15:50:00+10:00',
          end_time: '2025-04-07T16:50:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: '12215096-d8eb-407d-a5a9-166e6fedc85a',
      capacity: 8,
      number: '5',
      zone: '1 этаж',
      orders: [
        {
          id: '8df171af-753a-4951-b65b-7b274830cb68',
          status: 'New',
          start_time: '2025-04-07T18:50:00+10:00',
          end_time: '2025-04-07T21:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25875,
          name_for_reservation: 'Татьяна',
          num_people: 4,
          phone_number: '+79601840261',
          status: 'Закрыт',
          seating_time: '2025-04-07T22:20:00+10:00',
          end_time: '2025-04-08T01:20:00+10:00'
        },
        {
          id: 28167,
          name_for_reservation: 'Анна',
          num_people: 10,
          phone_number: '+79363533484',
          status: 'Заявка',
          seating_time: '2025-04-07T12:50:00+10:00',
          end_time: '2025-04-07T14:50:00+10:00'
        },
        {
          id: 20885,
          name_for_reservation: 'Валентина',
          num_people: 4,
          phone_number: '+79236275998',
          status: 'Открыт',
          seating_time: '2025-04-07T19:00:00+10:00',
          end_time: '2025-04-07T20:00:00+10:00'
        }
      ]
    },
    {
      id: '1e5874d6-41ff-4d9e-97e3-9de961a5ff99',
      capacity: 12,
      number: '6',
      zone: '1 этаж',
      orders: [],
      reservations: [
        {
          id: 23440,
          name_for_reservation: 'Дмитрий',
          num_people: 4,
          phone_number: '+79659007144',
          status: 'Живая очередь',
          seating_time: '2025-04-07T19:00:00+10:00',
          end_time: '2025-04-07T20:00:00+10:00'
        }
      ]
    },
    {
      id: '2a77ec3f-d733-4987-a37a-f0bc8f1f4d87',
      capacity: 8,
      number: '7',
      zone: '1 этаж',
      orders: [
        {
          id: 'd9c59576-4f55-4944-ad57-737b000e68c3',
          status: 'Closed',
          start_time: '2025-04-07T12:00:00+10:00',
          end_time: '2025-04-07T14:00:00+10:00'
        },
        {
          id: '9bfe1aa9-b558-44a4-b2f4-d458c4477d0b',
          status: 'Closed',
          start_time: '2025-04-07T13:00:00+10:00',
          end_time: '2025-04-07T14:00:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22373,
          name_for_reservation: 'Елена',
          num_people: 3,
          phone_number: '+79910366486',
          status: 'Закрыт',
          seating_time: '2025-04-07T14:10:00+10:00',
          end_time: '2025-04-07T16:10:00+10:00'
        }
      ]
    },
    {
      id: '8864145b-8d0e-4088-aea1-e7914ee187ef',
      capacity: 6,
      number: '8',
      zone: '1 этаж',
      orders: [
        {
          id: '67fdaf00-111c-4171-bb64-4b16be9546b5',
          status: 'New',
          start_time: '2025-04-07T18:10:00+10:00',
          end_time: '2025-04-07T19:10:00+10:00'
        },
        {
          id: '857b9213-ddb2-4afc-8877-d3544a1186a6',
          status: 'Closed',
          start_time: '2025-04-07T18:00:00+10:00',
          end_time: '2025-04-07T21:00:00+10:00'
        },
        {
          id: '62cc3930-feeb-43d6-9b05-76d5edbd4f76',
          status: 'New',
          start_time: '2025-04-07T18:30:00+10:00',
          end_time: '2025-04-07T21:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20965,
          name_for_reservation: 'Светлана',
          num_people: 7,
          phone_number: '+79908333141',
          status: 'Открыт',
          seating_time: '2025-04-07T19:40:00+10:00',
          end_time: '2025-04-07T21:40:00+10:00'
        }
      ]
    },
    {
      id: '46255656-1274-4bcb-9e27-0bb20c518879',
      capacity: 6,
      number: '9',
      zone: '1 этаж',
      orders: [
        {
          id: '6876dc13-a264-4c38-9081-c3f17559460d',
          status: 'New',
          start_time: '2025-04-07T21:10:00+10:00',
          end_time: '2025-04-07T23:10:00+10:00'
        },
        {
          id: 'f1e0e776-c8c5-44f9-bb62-4c0254fe46e8',
          status: 'Closed',
          start_time: '2025-04-07T11:50:00+10:00',
          end_time: '2025-04-07T12:50:00+10:00'
        },
        {
          id: '14fa20a5-9789-4464-a50e-b573b0ed2b63',
          status: 'New',
          start_time: '2025-04-07T11:10:00+10:00',
          end_time: '2025-04-07T13:10:00+10:00'
        },
        {
          id: 'ce7c2379-60bb-4ea5-a400-2ad8745429eb',
          status: 'New',
          start_time: '2025-04-07T15:50:00+10:00',
          end_time: '2025-04-07T18:50:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'f131123c-08dc-4c51-b798-45ce1b98ec11',
      capacity: 4,
      number: '10',
      zone: '1 этаж',
      orders: [
        {
          id: '8877ab0e-36fe-4313-992a-de1c96152712',
          status: 'Closed',
          start_time: '2025-04-07T13:50:00+10:00',
          end_time: '2025-04-07T16:50:00+10:00'
        },
        {
          id: '22e64f62-2776-4f92-87d4-86ac42661a04',
          status: 'Bill',
          start_time: '2025-04-07T21:30:00+10:00',
          end_time: '2025-04-07T23:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24893,
          name_for_reservation: 'Анна',
          num_people: 8,
          phone_number: '+79924975229',
          status: 'Живая очередь',
          seating_time: '2025-04-07T20:50:00+10:00',
          end_time: '2025-04-07T23:50:00+10:00'
        },
        {
          id: 20436,
          name_for_reservation: 'Татьяна',
          num_people: 9,
          phone_number: '+79491305065',
          status: 'Новая',
          seating_time: '2025-04-07T14:50:00+10:00',
          end_time: '2025-04-07T16:50:00+10:00'
        },
        {
          id: 26029,
          name_for_reservation: 'Ирина',
          num_people: 3,
          phone_number: '+79138678941',
          status: 'Открыт',
          seating_time: '2025-04-07T22:40:00+10:00',
          end_time: '2025-04-08T01:40:00+10:00'
        },
        {
          id: 23811,
          name_for_reservation: 'Павел',
          num_people: 10,
          phone_number: '+79047352215',
          status: 'Открыт',
          seating_time: '2025-04-07T17:40:00+10:00',
          end_time: '2025-04-07T20:40:00+10:00'
        }
      ]
    },
    {
      id: '0daeac86-a52b-44f2-b1c4-521825c44383',
      capacity: 6,
      number: '11',
      zone: '1 этаж',
      orders: [
        {
          id: 'e5235cdc-2a8f-4840-8de0-59a7dde6201b',
          status: 'Banquet',
          start_time: '2025-04-07T21:30:00+10:00',
          end_time: '2025-04-07T23:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26814,
          name_for_reservation: 'Татьяна',
          num_people: 4,
          phone_number: '+79749535994',
          status: 'Живая очередь',
          seating_time: '2025-04-07T16:10:00+10:00',
          end_time: '2025-04-07T18:10:00+10:00'
        },
        {
          id: 22720,
          name_for_reservation: 'Татьяна',
          num_people: 3,
          phone_number: '+79403455883',
          status: 'Живая очередь',
          seating_time: '2025-04-07T18:30:00+10:00',
          end_time: '2025-04-07T20:30:00+10:00'
        },
        {
          id: 25383,
          name_for_reservation: 'Наталья',
          num_people: 10,
          phone_number: '+79506730156',
          status: 'Открыт',
          seating_time: '2025-04-07T18:30:00+10:00',
          end_time: '2025-04-07T20:30:00+10:00'
        },
        {
          id: 28101,
          name_for_reservation: 'Мария',
          num_people: 7,
          phone_number: '+79468778986',
          status: 'Закрыт',
          seating_time: '2025-04-07T12:10:00+10:00',
          end_time: '2025-04-07T14:10:00+10:00'
        }
      ]
    },
    {
      id: 'bb06c54a-f8d8-4f05-a471-c97fd9fc0fff',
      capacity: 10,
      number: '12',
      zone: '1 этаж',
      orders: [
        {
          id: 'd70d5b9e-1fe1-4fab-803f-6ab0955812ad',
          status: 'Bill',
          start_time: '2025-04-07T12:40:00+10:00',
          end_time: '2025-04-07T14:40:00+10:00'
        },
        {
          id: 'd0014e25-fe95-4ee2-ad4a-9ebec50f7044',
          status: 'Banquet',
          start_time: '2025-04-07T20:40:00+10:00',
          end_time: '2025-04-07T23:40:00+10:00'
        },
        {
          id: '813fcf80-f85d-4f90-af6d-e4d9459d899b',
          status: 'Bill',
          start_time: '2025-04-07T20:30:00+10:00',
          end_time: '2025-04-07T23:30:00+10:00'
        },
        {
          id: '27bfa0c8-84a0-47fd-9b88-51a594e330c2',
          status: 'New',
          start_time: '2025-04-07T14:20:00+10:00',
          end_time: '2025-04-07T16:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26171,
          name_for_reservation: 'Лариса',
          num_people: 4,
          phone_number: '+79135442857',
          status: 'Заявка',
          seating_time: '2025-04-07T17:00:00+10:00',
          end_time: '2025-04-07T18:00:00+10:00'
        },
        {
          id: 28184,
          name_for_reservation: 'Татьяна',
          num_people: 7,
          phone_number: '+79197264634',
          status: 'Живая очередь',
          seating_time: '2025-04-07T18:50:00+10:00',
          end_time: '2025-04-07T21:50:00+10:00'
        }
      ]
    },
    {
      id: '1c9c88c4-90aa-494a-b21e-8d8a2ed3016c',
      capacity: 6,
      number: '13',
      zone: '1 этаж',
      orders: [
        {
          id: '5a3be9f6-6453-4633-9d76-f26b4b5f66d9',
          status: 'New',
          start_time: '2025-04-07T19:10:00+10:00',
          end_time: '2025-04-07T20:10:00+10:00'
        },
        {
          id: 'e796da35-7fb1-42dd-830b-92f190556c1a',
          status: 'Banquet',
          start_time: '2025-04-07T13:20:00+10:00',
          end_time: '2025-04-07T16:20:00+10:00'
        },
        {
          id: '07c66171-3965-4db7-9e9f-ada6151dc6da',
          status: 'Banquet',
          start_time: '2025-04-07T18:10:00+10:00',
          end_time: '2025-04-07T19:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24971,
          name_for_reservation: 'Татьяна',
          num_people: 7,
          phone_number: '+79200529386',
          status: 'Новая',
          seating_time: '2025-04-07T17:30:00+10:00',
          end_time: '2025-04-07T20:30:00+10:00'
        },
        {
          id: 26198,
          name_for_reservation: 'Ольга',
          num_people: 2,
          phone_number: '+79188691821',
          status: 'Заявка',
          seating_time: '2025-04-07T16:00:00+10:00',
          end_time: '2025-04-07T19:00:00+10:00'
        },
        {
          id: 20867,
          name_for_reservation: 'Алексей',
          num_people: 5,
          phone_number: '+79430742268',
          status: 'Живая очередь',
          seating_time: '2025-04-07T13:20:00+10:00',
          end_time: '2025-04-07T14:20:00+10:00'
        }
      ]
    },
    {
      id: '38fad8d2-f40f-4509-a115-13000c692754',
      capacity: 2,
      number: '101',
      zone: '2 этаж',
      orders: [],
      reservations: [
        {
          id: 20586,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79504221875',
          status: 'Закрыт',
          seating_time: '2025-04-07T14:20:00+10:00',
          end_time: '2025-04-07T16:20:00+10:00'
        },
        {
          id: 22377,
          name_for_reservation: 'Алексей',
          num_people: 1,
          phone_number: '+79988729764',
          status: 'Закрыт',
          seating_time: '2025-04-07T18:10:00+10:00',
          end_time: '2025-04-07T19:10:00+10:00'
        },
        {
          id: 21564,
          name_for_reservation: 'Валентина',
          num_people: 2,
          phone_number: '+79541837636',
          status: 'Заявка',
          seating_time: '2025-04-07T21:50:00+10:00',
          end_time: '2025-04-07T23:50:00+10:00'
        },
        {
          id: 25163,
          name_for_reservation: 'Татьяна',
          num_people: 7,
          phone_number: '+79043677200',
          status: 'Заявка',
          seating_time: '2025-04-07T20:20:00+10:00',
          end_time: '2025-04-07T22:20:00+10:00'
        }
      ]
    },
    {
      id: '28c1928f-8968-40d3-9f00-eae713cf007a',
      capacity: 12,
      number: '102',
      zone: '2 этаж',
      orders: [
        {
          id: '96011343-da20-4f42-b61a-0bd2b45a7dc3',
          status: 'Closed',
          start_time: '2025-04-07T15:40:00+10:00',
          end_time: '2025-04-07T17:40:00+10:00'
        },
        {
          id: 'febd48ef-49db-4af5-b17e-0ffc244b06e8',
          status: 'New',
          start_time: '2025-04-07T18:10:00+10:00',
          end_time: '2025-04-07T20:10:00+10:00'
        },
        {
          id: '8fa02619-4b1a-4730-b4ef-e6aee1aef582',
          status: 'Bill',
          start_time: '2025-04-07T11:50:00+10:00',
          end_time: '2025-04-07T13:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 23497,
          name_for_reservation: 'Алексей',
          num_people: 5,
          phone_number: '+79289290071',
          status: 'Закрыт',
          seating_time: '2025-04-07T14:30:00+10:00',
          end_time: '2025-04-07T17:30:00+10:00'
        }
      ]
    },
    {
      id: '7325276a-ea86-47ec-b896-a8d66ec47aa2',
      capacity: 12,
      number: '103',
      zone: '2 этаж',
      orders: [
        {
          id: '18094fa8-f35a-42bb-8302-99328aff7f3a',
          status: 'Bill',
          start_time: '2025-04-07T16:00:00+10:00',
          end_time: '2025-04-07T17:00:00+10:00'
        },
        {
          id: '90e704ff-2d52-4c9b-956f-166563cdf4ac',
          status: 'Closed',
          start_time: '2025-04-07T20:40:00+10:00',
          end_time: '2025-04-07T23:40:00+10:00'
        },
        {
          id: 'fd4c205b-7918-4cf9-b363-cb8291c97737',
          status: 'Closed',
          start_time: '2025-04-07T22:40:00+10:00',
          end_time: '2025-04-08T01:40:00+10:00'
        },
        {
          id: 'f31107cc-15bb-48c0-a479-5fa5473f6b96',
          status: 'Banquet',
          start_time: '2025-04-07T19:20:00+10:00',
          end_time: '2025-04-07T22:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28506,
          name_for_reservation: 'Алексей',
          num_people: 6,
          phone_number: '+79171925178',
          status: 'Новая',
          seating_time: '2025-04-07T22:00:00+10:00',
          end_time: '2025-04-08T01:00:00+10:00'
        },
        {
          id: 29705,
          name_for_reservation: 'Лариса',
          num_people: 9,
          phone_number: '+79689975492',
          status: 'Заявка',
          seating_time: '2025-04-07T11:00:00+10:00',
          end_time: '2025-04-07T14:00:00+10:00'
        }
      ]
    },
    {
      id: '9bad15e3-f5fa-4632-afef-3c906090ed98',
      capacity: 2,
      number: '104',
      zone: '2 этаж',
      orders: [
        {
          id: 'a79842a5-f713-4609-8d9d-043781fcaf3e',
          status: 'New',
          start_time: '2025-04-07T12:30:00+10:00',
          end_time: '2025-04-07T14:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 29763,
          name_for_reservation: 'Дмитрий',
          num_people: 1,
          phone_number: '+79035156208',
          status: 'Заявка',
          seating_time: '2025-04-07T14:40:00+10:00',
          end_time: '2025-04-07T15:40:00+10:00'
        },
        {
          id: 28664,
          name_for_reservation: 'Светлана',
          num_people: 5,
          phone_number: '+79919046037',
          status: 'Заявка',
          seating_time: '2025-04-07T21:20:00+10:00',
          end_time: '2025-04-08T00:20:00+10:00'
        }
      ]
    },
    {
      id: 'f739036e-0e3b-4ac2-8b45-c71c5930509f',
      capacity: 4,
      number: '105',
      zone: '2 этаж',
      orders: [],
      reservations: [
        {
          id: 22144,
          name_for_reservation: 'Анна',
          num_people: 6,
          phone_number: '+79099907486',
          status: 'Живая очередь',
          seating_time: '2025-04-07T15:20:00+10:00',
          end_time: '2025-04-07T16:20:00+10:00'
        }
      ]
    },
    {
      id: 'f16ead00-4ad2-4db9-bdc9-e09a37d1582e',
      capacity: 12,
      number: '106',
      zone: '2 этаж',
      orders: [
        {
          id: '214776e0-53e9-452c-a19a-80b0b8c40774',
          status: 'Bill',
          start_time: '2025-04-07T11:30:00+10:00',
          end_time: '2025-04-07T14:30:00+10:00'
        },
        {
          id: '9b4bf202-de4b-4f9e-96fe-3eac042e55c5',
          status: 'Closed',
          start_time: '2025-04-07T12:50:00+10:00',
          end_time: '2025-04-07T13:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25910,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79999516336',
          status: 'Новая',
          seating_time: '2025-04-07T16:30:00+10:00',
          end_time: '2025-04-07T19:30:00+10:00'
        },
        {
          id: 21646,
          name_for_reservation: 'Светлана',
          num_people: 6,
          phone_number: '+79735382119',
          status: 'Закрыт',
          seating_time: '2025-04-07T11:10:00+10:00',
          end_time: '2025-04-07T14:10:00+10:00'
        },
        {
          id: 20474,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79000931826',
          status: 'Живая очередь',
          seating_time: '2025-04-07T15:50:00+10:00',
          end_time: '2025-04-07T16:50:00+10:00'
        }
      ]
    },
    {
      id: 'ec863c05-9b46-4a55-81f8-c2377e0e4bde',
      capacity: 4,
      number: '107',
      zone: '2 этаж',
      orders: [
        {
          id: 'ea786fd8-4ae8-4ea5-b1f1-6f6aba72d524',
          status: 'Banquet',
          start_time: '2025-04-07T16:40:00+10:00',
          end_time: '2025-04-07T17:40:00+10:00'
        },
        {
          id: 'cef27edb-37c8-4c78-a484-827721b7b582',
          status: 'Banquet',
          start_time: '2025-04-07T22:20:00+10:00',
          end_time: '2025-04-08T00:20:00+10:00'
        },
        {
          id: '537fc226-614e-4fdb-bce1-f3582487ba9b',
          status: 'Banquet',
          start_time: '2025-04-07T11:20:00+10:00',
          end_time: '2025-04-07T13:20:00+10:00'
        },
        {
          id: '8b8d7b57-2d14-462e-bc1b-41f1d0d16c3f',
          status: 'Closed',
          start_time: '2025-04-07T12:40:00+10:00',
          end_time: '2025-04-07T14:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 25951,
          name_for_reservation: 'Ирина',
          num_people: 2,
          phone_number: '+79727007792',
          status: 'Живая очередь',
          seating_time: '2025-04-07T21:30:00+10:00',
          end_time: '2025-04-07T22:30:00+10:00'
        },
        {
          id: 28701,
          name_for_reservation: 'Павел',
          num_people: 9,
          phone_number: '+79360001855',
          status: 'Живая очередь',
          seating_time: '2025-04-07T18:40:00+10:00',
          end_time: '2025-04-07T19:40:00+10:00'
        },
        {
          id: 25545,
          name_for_reservation: 'Ирина',
          num_people: 7,
          phone_number: '+79488735454',
          status: 'Заявка',
          seating_time: '2025-04-07T21:40:00+10:00',
          end_time: '2025-04-08T00:40:00+10:00'
        },
        {
          id: 25683,
          name_for_reservation: 'Ирина',
          num_people: 4,
          phone_number: '+79034413244',
          status: 'Открыт',
          seating_time: '2025-04-07T12:00:00+10:00',
          end_time: '2025-04-07T15:00:00+10:00'
        }
      ]
    },
    {
      id: '47e477f2-0ed7-4481-aae0-2700e5c41b34',
      capacity: 6,
      number: '108',
      zone: '2 этаж',
      orders: [
        {
          id: '9f996687-acdb-4762-b406-5939e440121c',
          status: 'New',
          start_time: '2025-04-07T19:40:00+10:00',
          end_time: '2025-04-07T21:40:00+10:00'
        },
        {
          id: 'e40d4b9c-83aa-4adb-a52b-5b6605c3cbee',
          status: 'Closed',
          start_time: '2025-04-07T13:50:00+10:00',
          end_time: '2025-04-07T15:50:00+10:00'
        },
        {
          id: 'ce686bcd-7813-4f7a-8589-af436905cb07',
          status: 'New',
          start_time: '2025-04-07T17:10:00+10:00',
          end_time: '2025-04-07T20:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22060,
          name_for_reservation: 'Ирина',
          num_people: 5,
          phone_number: '+79908642199',
          status: 'Закрыт',
          seating_time: '2025-04-07T13:10:00+10:00',
          end_time: '2025-04-07T15:10:00+10:00'
        },
        {
          id: 22095,
          name_for_reservation: 'Ирина',
          num_people: 2,
          phone_number: '+79517017609',
          status: 'Живая очередь',
          seating_time: '2025-04-07T13:10:00+10:00',
          end_time: '2025-04-07T15:10:00+10:00'
        }
      ]
    },
    {
      id: 'a20b9999-f6a7-42c9-a1ad-6136195c7670',
      capacity: 10,
      number: '109',
      zone: '2 этаж',
      orders: [
        {
          id: '07afe088-28f7-47ed-b13e-292c7e6c7b93',
          status: 'Banquet',
          start_time: '2025-04-07T20:30:00+10:00',
          end_time: '2025-04-07T21:30:00+10:00'
        },
        {
          id: '74a13382-7c86-4eb7-b68f-0791cdfe28b2',
          status: 'Banquet',
          start_time: '2025-04-07T14:40:00+10:00',
          end_time: '2025-04-07T17:40:00+10:00'
        },
        {
          id: '7841cdfc-263e-4fde-912b-4e88fc3a2727',
          status: 'Banquet',
          start_time: '2025-04-07T11:10:00+10:00',
          end_time: '2025-04-07T13:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 23036,
          name_for_reservation: 'Павел',
          num_people: 1,
          phone_number: '+79626931615',
          status: 'Живая очередь',
          seating_time: '2025-04-07T11:20:00+10:00',
          end_time: '2025-04-07T12:20:00+10:00'
        },
        {
          id: 28705,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79162054956',
          status: 'Новая',
          seating_time: '2025-04-07T21:40:00+10:00',
          end_time: '2025-04-07T22:40:00+10:00'
        },
        {
          id: 28417,
          name_for_reservation: 'Елена',
          num_people: 9,
          phone_number: '+79710986099',
          status: 'Открыт',
          seating_time: '2025-04-07T11:30:00+10:00',
          end_time: '2025-04-07T12:30:00+10:00'
        }
      ]
    },
    {
      id: 'd7e5368f-defb-4e14-aa83-aec3e918cb6f',
      capacity: 4,
      number: '110',
      zone: '2 этаж',
      orders: [
        {
          id: 'e2f38d13-4d4f-4cfe-991f-2e0b2582e232',
          status: 'Bill',
          start_time: '2025-04-07T15:20:00+10:00',
          end_time: '2025-04-07T17:20:00+10:00'
        },
        {
          id: '4ff1f38f-b709-452f-a625-ec5cb43a38bb',
          status: 'Bill',
          start_time: '2025-04-07T19:10:00+10:00',
          end_time: '2025-04-07T21:10:00+10:00'
        }
      ],
      reservations: []
    },
    {
      id: 'ca13e19b-a8b9-4ee8-ae96-8baa07acbd4b',
      capacity: 6,
      number: 'B1',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '511cef53-89e9-4a7e-b946-9a4cde97cada',
          status: 'Banquet',
          start_time: '2025-04-07T14:50:00+10:00',
          end_time: '2025-04-07T17:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20525,
          name_for_reservation: 'Валентина',
          num_people: 3,
          phone_number: '+79696867141',
          status: 'Закрыт',
          seating_time: '2025-04-07T19:10:00+10:00',
          end_time: '2025-04-07T22:10:00+10:00'
        },
        {
          id: 24446,
          name_for_reservation: 'Мария',
          num_people: 8,
          phone_number: '+79468189882',
          status: 'Живая очередь',
          seating_time: '2025-04-07T15:10:00+10:00',
          end_time: '2025-04-07T18:10:00+10:00'
        }
      ]
    },
    {
      id: 'bc79c075-ee1f-4c49-ae05-b24ed38d60bc',
      capacity: 4,
      number: 'B2',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'ce3683ae-2787-450f-98d4-561923ff4679',
          status: 'Banquet',
          start_time: '2025-04-07T15:10:00+10:00',
          end_time: '2025-04-07T17:10:00+10:00'
        },
        {
          id: '0b12f22a-9daf-4853-a0fa-352f8e829f84',
          status: 'Closed',
          start_time: '2025-04-07T12:00:00+10:00',
          end_time: '2025-04-07T15:00:00+10:00'
        },
        {
          id: 'f6c9430d-2ab9-4262-aeb8-d3e206d883ef',
          status: 'Closed',
          start_time: '2025-04-07T12:50:00+10:00',
          end_time: '2025-04-07T14:50:00+10:00'
        },
        {
          id: '25ea80d3-c39b-4948-85b1-311a62f4f855',
          status: 'Banquet',
          start_time: '2025-04-07T19:20:00+10:00',
          end_time: '2025-04-07T20:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 20481,
          name_for_reservation: 'Мария',
          num_people: 1,
          phone_number: '+79961593255',
          status: 'Новая',
          seating_time: '2025-04-07T16:30:00+10:00',
          end_time: '2025-04-07T18:30:00+10:00'
        },
        {
          id: 28186,
          name_for_reservation: 'Наталья',
          num_people: 4,
          phone_number: '+79955105422',
          status: 'Живая очередь',
          seating_time: '2025-04-07T12:10:00+10:00',
          end_time: '2025-04-07T15:10:00+10:00'
        },
        {
          id: 23092,
          name_for_reservation: 'Виктор',
          num_people: 4,
          phone_number: '+79543145218',
          status: 'Закрыт',
          seating_time: '2025-04-07T14:30:00+10:00',
          end_time: '2025-04-07T17:30:00+10:00'
        }
      ]
    },
    {
      id: '8d177a2f-e47b-4f19-9c39-64bd02348b05',
      capacity: 2,
      number: 'B3',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '11fe3324-a6fc-402b-8d9c-fea4687ec221',
          status: 'Banquet',
          start_time: '2025-04-07T11:40:00+10:00',
          end_time: '2025-04-07T13:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24180,
          name_for_reservation: 'Светлана',
          num_people: 8,
          phone_number: '+79057010978',
          status: 'Новая',
          seating_time: '2025-04-07T15:40:00+10:00',
          end_time: '2025-04-07T16:40:00+10:00'
        },
        {
          id: 26541,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79485641096',
          status: 'Заявка',
          seating_time: '2025-04-07T22:10:00+10:00',
          end_time: '2025-04-08T00:10:00+10:00'
        },
        {
          id: 24149,
          name_for_reservation: 'Елена',
          num_people: 5,
          phone_number: '+79777432932',
          status: 'Заявка',
          seating_time: '2025-04-07T13:00:00+10:00',
          end_time: '2025-04-07T15:00:00+10:00'
        },
        {
          id: 23632,
          name_for_reservation: 'Дмитрий',
          num_people: 6,
          phone_number: '+79628651066',
          status: 'Закрыт',
          seating_time: '2025-04-07T13:00:00+10:00',
          end_time: '2025-04-07T14:00:00+10:00'
        }
      ]
    },
    {
      id: 'd67b54a1-c29c-4a42-9655-bfcf5c7fca6e',
      capacity: 8,
      number: 'B4',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'abc5f6e4-9ec1-4dc8-8c6d-bf2105083cf9',
          status: 'Bill',
          start_time: '2025-04-07T19:20:00+10:00',
          end_time: '2025-04-07T22:20:00+10:00'
        },
        {
          id: 'df371b2a-0fa6-4a18-a437-efdb02ef4550',
          status: 'Banquet',
          start_time: '2025-04-07T22:00:00+10:00',
          end_time: '2025-04-08T01:00:00+10:00'
        },
        {
          id: '7cc710cc-2037-4460-adfe-9b0a40067410',
          status: 'New',
          start_time: '2025-04-07T18:20:00+10:00',
          end_time: '2025-04-07T21:20:00+10:00'
        },
        {
          id: '68421c8d-f293-47ae-8f53-f2ea9c64b3b7',
          status: 'Closed',
          start_time: '2025-04-07T12:20:00+10:00',
          end_time: '2025-04-07T14:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28593,
          name_for_reservation: 'Мария',
          num_people: 2,
          phone_number: '+79284455781',
          status: 'Новая',
          seating_time: '2025-04-07T13:10:00+10:00',
          end_time: '2025-04-07T15:10:00+10:00'
        },
        {
          id: 27914,
          name_for_reservation: 'Алексей',
          num_people: 10,
          phone_number: '+79049416541',
          status: 'Открыт',
          seating_time: '2025-04-07T11:00:00+10:00',
          end_time: '2025-04-07T13:00:00+10:00'
        }
      ]
    },
    {
      id: '1e14544c-bbe3-4092-9b33-4092f1749ef3',
      capacity: 6,
      number: 'B5',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'e793aa1a-c80c-4bb5-8593-047646ab6148',
          status: 'Closed',
          start_time: '2025-04-07T12:30:00+10:00',
          end_time: '2025-04-07T13:30:00+10:00'
        },
        {
          id: '324ee4f7-fe61-4c8a-81ad-51d3c5cd4668',
          status: 'New',
          start_time: '2025-04-07T22:50:00+10:00',
          end_time: '2025-04-08T01:50:00+10:00'
        },
        {
          id: '330d2bb7-d7cb-455e-b855-0950703395da',
          status: 'Closed',
          start_time: '2025-04-07T16:10:00+10:00',
          end_time: '2025-04-07T17:10:00+10:00'
        }
      ],
      reservations: [
        {
          id: 24167,
          name_for_reservation: 'Елена',
          num_people: 2,
          phone_number: '+79753560347',
          status: 'Закрыт',
          seating_time: '2025-04-07T22:50:00+10:00',
          end_time: '2025-04-08T01:50:00+10:00'
        },
        {
          id: 24781,
          name_for_reservation: 'Анна',
          num_people: 9,
          phone_number: '+79726839113',
          status: 'Закрыт',
          seating_time: '2025-04-07T16:50:00+10:00',
          end_time: '2025-04-07T17:50:00+10:00'
        },
        {
          id: 22035,
          name_for_reservation: 'Дмитрий',
          num_people: 9,
          phone_number: '+79186596957',
          status: 'Заявка',
          seating_time: '2025-04-07T13:00:00+10:00',
          end_time: '2025-04-07T16:00:00+10:00'
        },
        {
          id: 20180,
          name_for_reservation: 'Светлана',
          num_people: 2,
          phone_number: '+79745984048',
          status: 'Открыт',
          seating_time: '2025-04-07T12:30:00+10:00',
          end_time: '2025-04-07T14:30:00+10:00'
        }
      ]
    },
    {
      id: '679f68c0-73e1-49aa-99ea-61afa6b6746c',
      capacity: 10,
      number: 'B6',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '2ca0ae4d-a543-43ef-9dfd-f72882b4b9cf',
          status: 'New',
          start_time: '2025-04-07T13:40:00+10:00',
          end_time: '2025-04-07T15:40:00+10:00'
        },
        {
          id: '08d9ec19-200e-4f2a-8633-bccd842db1ea',
          status: 'Banquet',
          start_time: '2025-04-07T18:30:00+10:00',
          end_time: '2025-04-07T21:30:00+10:00'
        },
        {
          id: '8e0a52f4-332f-456a-96a3-48a922f2cec9',
          status: 'Banquet',
          start_time: '2025-04-07T16:20:00+10:00',
          end_time: '2025-04-07T19:20:00+10:00'
        },
        {
          id: 'ceee6a39-6c94-4338-8646-f4211676202b',
          status: 'Banquet',
          start_time: '2025-04-07T21:20:00+10:00',
          end_time: '2025-04-07T23:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27087,
          name_for_reservation: 'Валентина',
          num_people: 10,
          phone_number: '+79022779902',
          status: 'Живая очередь',
          seating_time: '2025-04-07T21:30:00+10:00',
          end_time: '2025-04-07T23:30:00+10:00'
        }
      ]
    },
    {
      id: '9f4d97a6-3bf3-426d-bf28-b1f5d191f097',
      capacity: 8,
      number: 'B7',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'af6507b6-7ca5-4aed-9603-7d35690d68c8',
          status: 'Bill',
          start_time: '2025-04-07T18:20:00+10:00',
          end_time: '2025-04-07T19:20:00+10:00'
        },
        {
          id: 'cc62ae26-2890-4fd1-b1c9-3c91b99f63c6',
          status: 'Bill',
          start_time: '2025-04-07T22:00:00+10:00',
          end_time: '2025-04-08T00:00:00+10:00'
        },
        {
          id: '56e22f55-563b-476b-8c30-d64bbd9fa6e6',
          status: 'Banquet',
          start_time: '2025-04-07T18:40:00+10:00',
          end_time: '2025-04-07T21:40:00+10:00'
        },
        {
          id: '27617de3-9c75-401e-a636-1780f670d3d8',
          status: 'Closed',
          start_time: '2025-04-07T21:20:00+10:00',
          end_time: '2025-04-07T23:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27151,
          name_for_reservation: 'Павел',
          num_people: 2,
          phone_number: '+79918548350',
          status: 'Открыт',
          seating_time: '2025-04-07T12:30:00+10:00',
          end_time: '2025-04-07T13:30:00+10:00'
        },
        {
          id: 23204,
          name_for_reservation: 'Татьяна',
          num_people: 1,
          phone_number: '+79937717563',
          status: 'Открыт',
          seating_time: '2025-04-07T19:30:00+10:00',
          end_time: '2025-04-07T22:30:00+10:00'
        }
      ]
    },
    {
      id: '30b5c228-c557-41bb-8ab9-19a543ac5355',
      capacity: 4,
      number: 'B8',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'ce7124e4-ec48-4b40-8a4a-bbccebacdb86',
          status: 'New',
          start_time: '2025-04-07T13:20:00+10:00',
          end_time: '2025-04-07T14:20:00+10:00'
        },
        {
          id: '15f16e4f-aee5-445b-9fa3-84ca1237846e',
          status: 'Banquet',
          start_time: '2025-04-07T14:40:00+10:00',
          end_time: '2025-04-07T16:40:00+10:00'
        },
        {
          id: '945d6437-b4f0-41c9-acde-ba9743f9e5af',
          status: 'Closed',
          start_time: '2025-04-07T22:00:00+10:00',
          end_time: '2025-04-07T23:00:00+10:00'
        },
        {
          id: '70b5cf04-5252-483b-a1f0-769cdf6dfc06',
          status: 'Banquet',
          start_time: '2025-04-07T20:30:00+10:00',
          end_time: '2025-04-07T22:30:00+10:00'
        }
      ],
      reservations: [
        {
          id: 27553,
          name_for_reservation: 'Виктор',
          num_people: 5,
          phone_number: '+79018558118',
          status: 'Новая',
          seating_time: '2025-04-07T21:20:00+10:00',
          end_time: '2025-04-08T00:20:00+10:00'
        },
        {
          id: 29920,
          name_for_reservation: 'Мария',
          num_people: 8,
          phone_number: '+79361198665',
          status: 'Живая очередь',
          seating_time: '2025-04-07T12:40:00+10:00',
          end_time: '2025-04-07T14:40:00+10:00'
        },
        {
          id: 27024,
          name_for_reservation: 'Дмитрий',
          num_people: 9,
          phone_number: '+79209081014',
          status: 'Заявка',
          seating_time: '2025-04-07T13:10:00+10:00',
          end_time: '2025-04-07T15:10:00+10:00'
        }
      ]
    },
    {
      id: 'be7b85e4-119e-4004-8b47-21be8b2ec029',
      capacity: 8,
      number: 'B9',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '671a78ec-6354-4ff1-97a4-3b7b71cf61bf',
          status: 'Banquet',
          start_time: '2025-04-07T14:40:00+10:00',
          end_time: '2025-04-07T17:40:00+10:00'
        },
        {
          id: '38501b74-f6db-431c-a408-c9571d6a019e',
          status: 'Closed',
          start_time: '2025-04-07T19:20:00+10:00',
          end_time: '2025-04-07T21:20:00+10:00'
        }
      ],
      reservations: [
        {
          id: 28147,
          name_for_reservation: 'Анна',
          num_people: 6,
          phone_number: '+79764321110',
          status: 'Заявка',
          seating_time: '2025-04-07T17:00:00+10:00',
          end_time: '2025-04-07T20:00:00+10:00'
        },
        {
          id: 27982,
          name_for_reservation: 'Ирина',
          num_people: 6,
          phone_number: '+79534817386',
          status: 'Закрыт',
          seating_time: '2025-04-07T16:10:00+10:00',
          end_time: '2025-04-07T18:10:00+10:00'
        }
      ]
    },
    {
      id: 'e6d78469-5bea-4ddc-9c3c-21b3af66866a',
      capacity: 10,
      number: 'B10',
      zone: 'Банкетный зал',
      orders: [],
      reservations: []
    },
    {
      id: '72a73726-c08d-4376-bc99-b1b0be65c0ec',
      capacity: 12,
      number: 'B11',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 20742,
          name_for_reservation: 'Павел',
          num_people: 1,
          phone_number: '+79519415743',
          status: 'Живая очередь',
          seating_time: '2025-04-07T15:50:00+10:00',
          end_time: '2025-04-07T18:50:00+10:00'
        }
      ]
    },
    {
      id: 'c2cb59c3-3264-47a3-b700-72bda8168a8c',
      capacity: 10,
      number: 'B12',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 22178,
          name_for_reservation: 'Валентина',
          num_people: 10,
          phone_number: '+79109711368',
          status: 'Новая',
          seating_time: '2025-04-07T18:00:00+10:00',
          end_time: '2025-04-07T19:00:00+10:00'
        },
        {
          id: 26866,
          name_for_reservation: 'Алексей',
          num_people: 7,
          phone_number: '+79363601602',
          status: 'Закрыт',
          seating_time: '2025-04-07T11:40:00+10:00',
          end_time: '2025-04-07T14:40:00+10:00'
        },
        {
          id: 20225,
          name_for_reservation: 'Лариса',
          num_people: 9,
          phone_number: '+79777013622',
          status: 'Открыт',
          seating_time: '2025-04-07T11:10:00+10:00',
          end_time: '2025-04-07T12:10:00+10:00'
        },
        {
          id: 20457,
          name_for_reservation: 'Лариса',
          num_people: 6,
          phone_number: '+79529339126',
          status: 'Новая',
          seating_time: '2025-04-07T22:00:00+10:00',
          end_time: '2025-04-08T00:00:00+10:00'
        }
      ]
    },
    {
      id: 'c0e05946-c3c4-428e-a57b-61c2bc7fb615',
      capacity: 4,
      number: 'B13',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 29817,
          name_for_reservation: 'Ольга',
          num_people: 8,
          phone_number: '+79181499606',
          status: 'Заявка',
          seating_time: '2025-04-07T19:10:00+10:00',
          end_time: '2025-04-07T20:10:00+10:00'
        }
      ]
    },
    {
      id: 'f60c630a-ca57-4dd8-9492-78fe667eefaa',
      capacity: 10,
      number: 'B14',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'c33df3a5-a795-42e0-8f11-6d5f3b85ad70',
          status: 'New',
          start_time: '2025-04-07T12:00:00+10:00',
          end_time: '2025-04-07T15:00:00+10:00'
        },
        {
          id: 'b7c69d0c-95c6-4591-ac9a-fb20ce908c36',
          status: 'Closed',
          start_time: '2025-04-07T19:00:00+10:00',
          end_time: '2025-04-07T22:00:00+10:00'
        },
        {
          id: '6f59a13c-8b6f-4264-824f-f308c920bcb5',
          status: 'New',
          start_time: '2025-04-07T18:50:00+10:00',
          end_time: '2025-04-07T19:50:00+10:00'
        }
      ],
      reservations: [
        {
          id: 22968,
          name_for_reservation: 'Татьяна',
          num_people: 10,
          phone_number: '+79233843632',
          status: 'Заявка',
          seating_time: '2025-04-07T12:20:00+10:00',
          end_time: '2025-04-07T14:20:00+10:00'
        },
        {
          id: 27718,
          name_for_reservation: 'Татьяна',
          num_people: 4,
          phone_number: '+79776383083',
          status: 'Открыт',
          seating_time: '2025-04-07T18:00:00+10:00',
          end_time: '2025-04-07T20:00:00+10:00'
        },
        {
          id: 29244,
          name_for_reservation: 'Ирина',
          num_people: 8,
          phone_number: '+79609845816',
          status: 'Открыт',
          seating_time: '2025-04-07T18:10:00+10:00',
          end_time: '2025-04-07T19:10:00+10:00'
        },
        {
          id: 29855,
          name_for_reservation: 'Анна',
          num_people: 4,
          phone_number: '+79034428441',
          status: 'Заявка',
          seating_time: '2025-04-07T20:40:00+10:00',
          end_time: '2025-04-07T23:40:00+10:00'
        }
      ]
    },
    {
      id: '5ae457cf-1be9-49ea-9c3e-f460523473f4',
      capacity: 10,
      number: 'B15',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 23304,
          name_for_reservation: 'Ольга',
          num_people: 8,
          phone_number: '+79431081782',
          status: 'Новая',
          seating_time: '2025-04-07T17:50:00+10:00',
          end_time: '2025-04-07T19:50:00+10:00'
        },
        {
          id: 27120,
          name_for_reservation: 'Дмитрий',
          num_people: 3,
          phone_number: '+79737340139',
          status: 'Живая очередь',
          seating_time: '2025-04-07T19:00:00+10:00',
          end_time: '2025-04-07T22:00:00+10:00'
        },
        {
          id: 25716,
          name_for_reservation: 'Валентина',
          num_people: 7,
          phone_number: '+79031038584',
          status: 'Открыт',
          seating_time: '2025-04-07T21:30:00+10:00',
          end_time: '2025-04-07T22:30:00+10:00'
        }
      ]
    },
    {
      id: 'e24b57ca-d747-44c1-9a6a-12f3842db3a2',
      capacity: 10,
      number: 'B16',
      zone: 'Банкетный зал',
      orders: [
        {
          id: '94b819c0-74b4-4663-9838-1d23b1c06ded',
          status: 'Closed',
          start_time: '2025-04-07T15:40:00+10:00',
          end_time: '2025-04-07T16:40:00+10:00'
        },
        {
          id: '0fa48ed2-2069-4e3b-b0e7-a85450529b0d',
          status: 'New',
          start_time: '2025-04-07T20:00:00+10:00',
          end_time: '2025-04-07T23:00:00+10:00'
        },
        {
          id: '9adf4404-b415-4f99-870c-f63ddde00399',
          status: 'Closed',
          start_time: '2025-04-07T20:20:00+10:00',
          end_time: '2025-04-07T21:20:00+10:00'
        },
        {
          id: '403931ee-ed6f-4a6f-a2e3-318901e1af71',
          status: 'Bill',
          start_time: '2025-04-07T19:40:00+10:00',
          end_time: '2025-04-07T20:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 26407,
          name_for_reservation: 'Анна',
          num_people: 7,
          phone_number: '+79359283681',
          status: 'Заявка',
          seating_time: '2025-04-07T17:20:00+10:00',
          end_time: '2025-04-07T18:20:00+10:00'
        },
        {
          id: 29868,
          name_for_reservation: 'Павел',
          num_people: 6,
          phone_number: '+79428274378',
          status: 'Заявка',
          seating_time: '2025-04-07T14:50:00+10:00',
          end_time: '2025-04-07T15:50:00+10:00'
        }
      ]
    },
    {
      id: 'f86792d5-548c-449f-99b5-8014172c0e58',
      capacity: 10,
      number: 'B17',
      zone: 'Банкетный зал',
      orders: [],
      reservations: [
        {
          id: 29134,
          name_for_reservation: 'Анна',
          num_people: 5,
          phone_number: '+79670160164',
          status: 'Открыт',
          seating_time: '2025-04-07T18:40:00+10:00',
          end_time: '2025-04-07T21:40:00+10:00'
        },
        {
          id: 29395,
          name_for_reservation: 'Дмитрий',
          num_people: 2,
          phone_number: '+79886822455',
          status: 'Новая',
          seating_time: '2025-04-07T22:30:00+10:00',
          end_time: '2025-04-07T23:30:00+10:00'
        },
        {
          id: 29468,
          name_for_reservation: 'Ирина',
          num_people: 5,
          phone_number: '+79854887517',
          status: 'Закрыт',
          seating_time: '2025-04-07T12:30:00+10:00',
          end_time: '2025-04-07T13:30:00+10:00'
        },
        {
          id: 26007,
          name_for_reservation: 'Сергей',
          num_people: 1,
          phone_number: '+79056943149',
          status: 'Открыт',
          seating_time: '2025-04-07T16:50:00+10:00',
          end_time: '2025-04-07T17:50:00+10:00'
        }
      ]
    },
    {
      id: '42e29182-283e-43d6-af2d-d15e29634548',
      capacity: 10,
      number: 'B18',
      zone: 'Банкетный зал',
      orders: [
        {
          id: 'f633ca2e-e9d3-4944-b16f-9e7ef3b9e954',
          status: 'Bill',
          start_time: '2025-04-07T12:40:00+10:00',
          end_time: '2025-04-07T15:40:00+10:00'
        },
        {
          id: '151bad26-1088-475b-8913-2c2f6f097e08',
          status: 'Closed',
          start_time: '2025-04-07T19:10:00+10:00',
          end_time: '2025-04-07T20:10:00+10:00'
        },
        {
          id: 'e768b71e-14ea-4c31-9371-336e400ca0a4',
          status: 'Banquet',
          start_time: '2025-04-07T20:40:00+10:00',
          end_time: '2025-04-07T21:40:00+10:00'
        }
      ],
      reservations: [
        {
          id: 21792,
          name_for_reservation: 'Лариса',
          num_people: 1,
          phone_number: '+79263524721',
          status: 'Новая',
          seating_time: '2025-04-07T11:10:00+10:00',
          end_time: '2025-04-07T12:10:00+10:00'
        },
        {
          id: 25900,
          name_for_reservation: 'Валентина',
          num_people: 5,
          phone_number: '+79250820501',
          status: 'Живая очередь',
          seating_time: '2025-04-07T17:30:00+10:00',
          end_time: '2025-04-07T19:30:00+10:00'
        },
        {
          id: 23883,
          name_for_reservation: 'Светлана',
          num_people: 5,
          phone_number: '+79083870831',
          status: 'Заявка',
          seating_time: '2025-04-07T13:10:00+10:00',
          end_time: '2025-04-07T14:10:00+10:00'
        }
      ]
    }
  ]
}
