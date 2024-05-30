export interface Guest {
  id: string;
  name: string;
  isComing: boolean;
}

export interface Invite {
  id: string;
  guests: Array<Guest>;
}

const INVITES: Array<Invite> = [
  {
    id: 'b6e307aa-3cfd-464b-af9c-94310c2ac2e6',
    guests: [
      {
        name: 'David Baytopp',
        isComing: true,
        id: '6566edf6-2e6e-44cf-9c24-9f93080d3465',
      },
      {
        name: 'Lesley Baytopp',
        isComing: true,
        id: '6b5ae48a-d1e7-4210-a38c-d3ad4199b2d9',
      },
    ],
  },
  {
    id: 'a363f744-d7cc-4a52-84a6-db2043bf58cc',
    guests: [
      {
        name: 'Allison Williams',
        isComing: true,
        id: 'da07a2ac-9996-4693-afa6-c0bc59a1eed6',
      },
      {
        name: 'Alan Williams',
        isComing: true,
        id: '579aebd5-2da9-436a-9beb-d10f42794260',
      },
    ],
  },
  {
    id: '861afed4-47be-4cf7-af01-a374f25dca4d',
    guests: [
      {
        name: 'Stuart Gibbs',
        isComing: true,
        id: '69eda7ee-93db-4fc9-9e0e-e3e4b7168bf3',
      },
      {
        name: 'Ulricke Gibbs',
        isComing: true,
        id: '8608805c-94a1-42b5-bdb4-f9709e771e23',
      },
      {
        name: 'Daniel Gibbs',
        isComing: true,
        id: '2456bc6f-f064-4c57-86d7-0c7473827181',
      },
      {
        name: 'Oliver Gibbs',
        isComing: true,
        id: 'f952d39f-8d33-4ba9-a0c2-d8fdb708a736',
      },
    ],
  },
  {
    id: 'b4ac7a4b-6ce2-4c38-9e7f-57fd152144b7',
    guests: [
      {
        name: 'Trevor Fenton',
        isComing: true,
        id: '8c1c1fcb-7edd-4e33-975d-2312b3798d1b',
      },
      {
        name: 'Colleen Fenton',
        isComing: true,
        id: 'c0fde1da-c56d-4663-8f25-150166c4b0e5',
      },
    ],
  },
  {
    id: 'e22e2f46-4701-4d62-a6a8-ce2179717abe',
    guests: [
      {
        name: 'Demi Coetzee',
        isComing: true,
        id: '079ad9e0-a067-457c-9320-fd15c3b4c61b',
      },
      {
        name: 'Wesley Coetzee',
        isComing: true,
        id: '7879d1c4-6531-4196-81f0-5857fc261fc8',
      },
    ],
  },
  {
    id: '1cb25bbb-39e2-42cb-9e7e-b35b80c4b51c',
    guests: [
      {
        name: 'Karine Fenton',
        isComing: true,
        id: 'af6da37d-b1ec-456f-b6db-d9e4f10d5998',
      },
      {
        name: 'Peter Fenton',
        isComing: true,
        id: '07cadd0c-afc9-4f61-9438-b38897969a18',
      },
    ],
  },
  {
    id: '4007344d-179e-4f6c-bd23-60568f3df15a',
    guests: [
      {
        name: 'Jennifer Smith',
        isComing: true,
        id: '52ff1ae4-0399-48dc-adbc-af0c6f133cf1',
      },
    ],
  },
  {
    id: 'f254f7a6-a455-4053-85d4-da120ab7cae8',
    guests: [
      {
        name: 'Ryan Hart',
        isComing: true,
        id: 'f71e7749-7a4e-420a-80d9-073bcdd258b0',
      },
    ],
  },
  {
    id: 'fd7f694e-a089-4a64-976e-cbb06fb0f7c0',
    guests: [
      {
        name: 'Angela Clarke',
        isComing: true,
        id: '3ae217a2-384d-45d6-9183-82460be96c52',
      },
      {
        name: 'James Thomson',
        isComing: true,
        id: 'dc7194ef-d563-4983-bbd8-08ef6568de7c',
      },
    ],
  },
  {
    id: '5d453abd-86cf-41c2-b3a5-0499e830b552',
    guests: [
      {
        name: 'Alexandra Baldwin',
        isComing: true,
        id: 'bc7141af-491c-46da-bb4e-248b0229555b',
      },
      {
        name: 'James Damant',
        isComing: true,
        id: '91ee32ef-88d6-4d0d-a4d6-2261f3a9f56f',
      },
      {
        name: 'Abby Waller',
        isComing: true,
        id: '898ee494-2b73-489c-9c91-8ebd68faa8a7',
      },
      {
        name: 'Andrew Waller',
        isComing: true,
        id: '6513a774-9903-4d6e-a044-961e6e7d440c',
      },
    ],
  },
  {
    id: 'ab480df5-fc0a-49aa-b234-08891ca27211',
    guests: [
      {
        name: 'Catherine Baytopp',
        isComing: true,
        id: 'd116d69d-3832-49cb-88b8-47c7fb329d5e',
      },
      {
        name: 'Shalom Mashiri',
        isComing: true,
        id: '4fdf56b2-7d68-4725-9997-22ef3bfcedce',
      },
    ],
  },
  {
    id: 'f66e234a-ac53-4632-a5fb-9e7c35a61a8d',
    guests: [
      {
        name: 'Tamryn Baytopp',
        isComing: true,
        id: '2d2e3f28-feba-43bf-98d7-76b31cebd12e',
      },
    ],
  },
  {
    id: 'f57de168-4ff6-4bea-949a-e13f6817c662',
    guests: [
      {
        name: 'Grant Hart',
        isComing: true,
        id: '712512fd-5ddf-4ef1-9f77-8c8f7590aabf',
      },
      {
        name: 'Portia Hart',
        isComing: true,
        id: '05ffa513-30cd-4c84-8163-494ca57005b3',
      },
    ],
  },
  {
    id: 'c010f4a8-47f6-4781-b8e8-ddc495f05c28',
    guests: [
      {
        name: 'Christopher Williams',
        isComing: true,
        id: 'a2e2dd17-a117-4eb2-9993-97ef24e274c2',
      },
      {
        name: 'Ashleigh Laurent',
        isComing: true,
        id: '976bf8b3-e885-4a66-b0f7-e7c15cbcafd5',
      },
    ],
  },
  {
    id: '09eee6f2-0af8-428a-b9e7-2a4963a2525c',
    guests: [
      {
        name: 'Liane Walker',
        isComing: true,
        id: '012b70a9-9103-47ac-bd6f-f367928a26fe',
      },
      {
        name: 'Dane Walker',
        isComing: true,
        id: 'f25906be-4bb4-458e-b30f-d27d19f92ada',
      },
    ],
  },
  {
    id: '1d1e66ab-57a3-46d9-b2dd-7eb9294d9590',
    guests: [
      {
        name: 'Douglas McFerren',
        isComing: true,
        id: '5e90a1ed-1906-4162-b17e-2697bf47e511',
      },
      {
        name: 'Caitlin Simons',
        isComing: true,
        id: 'd6dd638f-f14c-469d-b74e-63021f7ff31e',
      },
    ],
  },
  {
    id: 'acfb724b-d31b-4cdd-ae65-8eff69d54f7c',
    guests: [
      {
        name: 'Andrea Smith',
        isComing: true,
        id: '6a08048a-be01-40ab-b124-186d17074962',
      },
      {
        name: 'Trevor Smith',
        isComing: true,
        id: 'e98299fc-57f3-4868-b0e7-808cf26a09c4',
      },
      {
        name: 'Kara Smith',
        isComing: true,
        id: '5e19a899-5080-4b1f-8738-9f1ea1da06c4',
      },
      {
        name: 'Gabrielle Smith',
        isComing: true,
        id: '26804b61-9726-4036-a55c-a90ddfc47127',
      },
      {
        name: 'Brett Powell',
        isComing: true,
        id: 'dd4c0bdb-a1b2-4141-b4e7-ef41d525ef1b',
      },
    ],
  },
  {
    id: 'c7220e95-9dbb-4f57-97af-7057aa7295c7',
    guests: [
      {
        name: 'Jenna Kamps',
        isComing: true,
        id: 'bd8648e7-eb64-4765-9625-ba40499dada6',
      },
      {
        name: 'Jason Kamps',
        isComing: true,
        id: '8ad66562-4971-4dc2-9bf3-9697bedfda0a',
      },
    ],
  },
  {
    id: '062e5768-a0d9-451d-81f4-9719732cf37a',
    guests: [
      {
        name: 'Jade Wilson',
        isComing: true,
        id: 'a690132a-ac73-4737-9723-a129f0082dd2',
      },
      {
        name: 'James Wilson',
        isComing: true,
        id: 'dce2b516-a075-44be-9913-60248c88b24b',
      },
    ],
  },
  {
    id: '05898505-b11d-476e-b865-846b743e25c4',
    guests: [
      {
        name: 'Lauren Ward',
        isComing: true,
        id: '5e5f696f-d72c-4f0e-98b3-91231fdfe09a',
      },
      {
        name: 'Kayleigh Ward',
        isComing: true,
        id: '451fcc07-e05a-45a1-ba6f-8fe72e7355bd',
      },
      {
        name: 'Shirleen Ward',
        isComing: true,
        id: '3416cfe6-e753-40ce-9304-9932b2596fd9',
      },
    ],
  },
  {
    id: '8e0c7967-9877-41b4-bfbc-8c5580743d31',
    guests: [
      {
        name: 'Taylin Weirich',
        isComing: true,
        id: '231b121a-ff34-43c0-89c4-e863a0061be3',
      },
      {
        name: 'Jason Farr',
        isComing: true,
        id: '1e5ce3e4-ab37-4d21-be71-ff46658a036c',
      },
    ],
  },
  {
    id: '4b72fab8-c687-48ce-8234-6e1d225f470b',
    guests: [
      {
        name: 'Chelsea Clark',
        isComing: true,
        id: 'cc635660-83ed-4d93-b96d-1dc24f8fa843',
      },
      {
        name: 'Dundas Clark',
        isComing: true,
        id: '6eae6dad-d14c-48d0-aec8-a6eb201ba680',
      },
    ],
  },
  {
    id: '7623f48c-25f2-4ae2-8f74-cf16f60f0956',
    guests: [
      {
        name: 'Tania Wild',
        isComing: true,
        id: '5fa44cc2-a699-43c8-bdfc-cc85f5394137',
      },
      {
        name: 'Jon Dillon',
        isComing: true,
        id: 'd708d3df-1c1a-4058-a7f4-37ba3a1c4430',
      },
    ],
  },
  {
    id: 'f87f9a5e-33ae-4704-8cfd-c1d68bdfb770',
    guests: [
      {
        name: 'Carol Kotze',
        isComing: true,
        id: '0cb1f40c-7e89-4b3a-8312-44c7523d3282',
      },
      {
        name: 'Tertius Kotze',
        isComing: true,
        id: '72644b33-489a-4f73-b9fa-df609c6babd2',
      },
    ],
  },
  {
    id: '471c9f4c-a7e7-4f7f-ab8b-b14e7cbb9572',
    guests: [
      {
        name: 'Joan Baytopp',
        isComing: true,
        id: '6c5fd17a-5832-453d-ac81-a2330981370e',
      },
      {
        name: 'Phillip Baytopp',
        isComing: true,
        id: '7bc6ca05-bded-4809-a67e-13b6c3988aaf',
      },
    ],
  },
  {
    id: '55554ac5-e430-41ea-9298-194c556da5c2',
    guests: [
      {
        name: 'Tyla Fenton',
        isComing: true,
        id: 'c210d6a2-0c03-4fd9-b99c-b69974d088cc',
      },
    ],
  },
  {
    id: '56477d27-300d-4c86-a4bb-d0db93aabdd5',
    guests: [
      {
        name: 'Michael Gibbs',
        isComing: true,
        id: '33262a9a-aafb-4dd9-885f-00157a86c8ef',
      },
      {
        name: 'Ann Gibbs',
        isComing: true,
        id: 'f38c76b6-19e7-423f-affc-3b35b38af69a',
      },
    ],
  },
  {
    id: 'b36adc41-dde9-4b0a-a211-a19fc6259d12',
    guests: [
      {
        name: 'James Jacobi',
        isComing: true,
        id: '0422b41e-614a-4774-a614-5c1033d42e3d',
      },
      {
        name: 'Coralie Smith',
        isComing: true,
        id: 'd2f33392-02c8-4661-a2bc-efcee77a0c1e',
      },
    ],
  },
  {
    id: '7fee4a77-0b05-4b7e-82be-f869eadceebd',
    guests: [
      {
        name: 'Juan Araujo',
        isComing: true,
        id: '7c8a6af7-89ea-4dfe-9030-61bf32a7ca6a',
      },
      {
        name: 'Sophie Spekreijse',
        isComing: true,
        id: '437fbd72-82b5-4378-b196-daceba52007d',
      },
    ],
  },
  {
    id: '25ed6d5e-00e7-4f7d-b39c-e0b7b075cc9a',
    guests: [
      {
        name: 'Rebecca MacCourt',
        isComing: true,
        id: '96d81180-f9e8-4492-ad6d-bcf110e7e0f5',
      },
    ],
  },
  {
    id: 'c78ad28e-773b-4b61-bb1e-ffb00b794c27',
    guests: [
      {
        name: 'Brian Lewis',
        isComing: true,
        id: '48650b39-baf0-4df0-b3b0-af2a5ea835a6',
      },
      {
        name: 'Marashene Lewis',
        isComing: true,
        id: '09dd3abd-0c4b-4e6d-b3a8-56df9f91463e',
      },
    ],
  },
  {
    id: '9b470429-5d56-4684-aecf-4e7a3ec4773f',
    guests: [
      {
        name: 'Michael Pereira',
        isComing: true,
        id: '21fdfc52-5182-4213-b8e4-db045355f905',
      },
    ],
  },
  {
    id: '9b1d5825-58d4-4265-970b-296b0b262f71',
    guests: [
      {
        name: 'Todd Atterbury',
        isComing: true,
        id: 'd920ab57-fdab-4e53-9100-5d526960d830',
      },
      {
        name: 'Cassidy Johnston',
        isComing: true,
        id: 'a7a251e1-2f0b-4427-b3ee-a60e07ca6914',
      },
    ],
  },
  {
    id: 'da88accb-a1c2-4d4d-b8df-51dc709d2b78',
    guests: [
      {
        name: 'Ewan Gibbs',
        isComing: true,
        id: '839b2afd-9928-4d4c-a2c3-72138c648e2a',
      },
      {
        name: 'Grace McInnes',
        isComing: true,
        id: 'edf9f418-1c05-48a9-bcd2-5b5779a8194b',
      },
    ],
  },
  {
    id: '5fce0d45-5d8e-491f-a725-d48ab42211a7',
    guests: [
      {
        name: 'Caitlin Bell',
        isComing: true,
        id: 'a6c9b396-df64-431b-8044-b1df1a7e47ee',
      },
      {
        name: 'Mitchell Austin',
        isComing: true,
        id: '8c6690ed-a151-4e48-93ed-824d9892e2dd',
      },
    ],
  },
  {
    id: 'c2bff678-fa31-4b5a-876c-ce52860c9585',
    guests: [
      {
        name: 'Eryn Farland',
        isComing: true,
        id: '67938384-011b-42fd-8080-5e791a2b9b5e',
      },
      {
        name: 'Calvin Smith',
        isComing: true,
        id: '18f23511-fe3a-4866-83f1-5ef5bfec04db',
      },
    ],
  },
  // done
  {
    id: '15e84dd7-e1ed-4d6a-b53f-fbee54a39bbd',
    guests: [
      {
        name: 'Matthew Barbieri',
        isComing: true,
        id: '60e5f9ba-c976-4174-b6a0-d7a1c6ab11de',
      },
      {
        name: 'Claire Rouillard',
        isComing: true,
        id: '2e42caab-0d7d-4a37-ac97-1c30e86223d5',
      },
    ],
  },
  {
    id: 'c1a42194-a087-42f6-a5ad-ba468a46c010',
    guests: [
      {
        name: 'Christopher Baytopp',
        isComing: true,
        id: 'f3f0a297-ba00-4113-a4a3-49707b02e4d7',
      },
      {
        name: 'Carla Baytopp',
        isComing: true,
        id: '153652cb-9b44-4414-9397-e08f1531e6df',
      },
    ],
  },
  {
    id: 'f9c0c6e3-3b03-4cdc-8ea8-d7d43e6fd252',
    guests: [
      {
        name: 'Amy Buckley',
        isComing: true,
        id: '30c0b053-186b-4dc6-ac72-dc2e05253979',
      },
      {
        name: 'Kyle Buckley',
        isComing: true,
        id: '41753c32-f6c5-4810-af34-fcc0b66738c4',
      },
    ],
  },
  {
    id: '37b4e814-27cb-4200-8048-a3205c487e81',
    guests: [
      {
        name: 'Zania Weirich',
        isComing: true,
        id: '6036dd8c-94ae-4dae-a6f2-c2bf253cde8d',
      },
      {
        name: 'Patrick Weirich',
        isComing: true,
        id: 'b10d9e61-9967-4086-a3ad-a54d54b6daa0',
      },
      {
        name: 'Erin Weirich',
        isComing: true,
        id: 'eaa6bb7b-377f-4dd7-8a44-4c2bb5edc7e2',
      },
    ],
  },
  {
    id: '8e73adb0-7d2d-420f-bfdd-5ec7e0c0e1b5',
    guests: [
      {
        name: 'Anthony Gibbs',
        isComing: true,
        id: '8669e28b-9866-438b-96e9-62b137b36ad6',
      },
      {
        name: 'Dawn Gibbs',
        isComing: true,
        id: '778c69d7-f37d-4b9b-a66d-d41f36456ced',
      },
    ],
  },
  {
    id: 'db7c9af1-6105-4ab1-b0fb-50ac17baeb95',
    guests: [
      {
        name: 'Dale Williams',
        isComing: true,
        id: '8a6255dd-5a37-4e99-a12f-6744a392ee94',
      },
      {
        name: 'Deirdre Williams',
        isComing: true,
        id: '0dc5e9af-5589-46fa-b104-645cdbfa9334',
      },
      {
        name: 'Nina Williams',
        isComing: true,
        id: '28665cdc-2620-4d07-96db-3c9db322666a',
      },
    ],
  },
  {
    id: '09179198-f69a-4f47-bea8-7e44663a99fb',
    guests: [
      {
        name: 'Amy Williams',
        isComing: true,
        id: '52ba9933-7ba1-49d5-a666-5ec609213660',
      },
      {
        name: 'Tim Schlesinger',
        isComing: true,
        id: '2f069fee-434d-4376-874a-20c06281b137',
      },
    ],
  },
  {
    id: 'a846b814-13b3-4799-8213-6d7f38e8fd44',
    guests: [
      {
        name: 'Isaac Tetro',
        isComing: true,
        id: 'cb915516-da58-46f0-ad04-015fd831830e',
      },
    ],
  },
  {
    id: '8ba245fb-d8da-43f5-9853-95175e35dac3',
    guests: [
      {
        name: 'Armando Homann',
        isComing: true,
        id: '8ddae693-03fb-4f30-9da1-7d1f12457d02',
      },
      {
        name: 'Andrea Homann',
        isComing: true,
        id: '1a7cad23-28e8-4aa7-9bca-aee3f0a51d47',
      },
    ],
  },
  {
    id: '372c23e0-ce54-42c9-9e7f-f2a33817c273',
    guests: [
      {
        name: 'Andrew Jacobi',
        isComing: true,
        id: '62f5e3c0-41f3-494e-b10c-dfb14c845684',
      },
    ],
  },
  {
    id: '0694508b-7ac2-4ae8-912f-deef49ff46f5',
    guests: [
      {
        name: 'Jessica Heaver',
        isComing: true,
        id: '5dbd90cb-91e9-412c-b343-7348038eeabb',
      },
    ],
  },
  {
    id: '30c06337-0e03-4cc7-b560-346849ba053e',
    guests: [
      {
        name: 'Chantelle van Niekerk',
        isComing: true,
        id: '0d1d3bd8-a30b-4e65-9f61-a5e473943f5c',
      },
    ],
  },
  {
    id: 'bb61e609-6945-4dc8-a027-ac8719b75963',
    guests: [
      {
        name: 'Alex Furber',
        isComing: true,
        id: 'd7e5de5c-4951-414b-ac78-ccfc96241081',
      },
      {
        name: 'Beata Furber',
        isComing: true,
        id: '19ff0049-37c7-48df-a3af-c456717279c0',
      },
    ],
  },
  {
    id: '3b1f1c19-8ead-4427-8149-00ccc756a606',
    guests: [
      {
        name: 'Calden Gibbs',
        isComing: true,
        id: 'fd0e58e8-f771-4d91-915e-2adb799e1453',
      },
    ],
  },
  {
    id: '3d7cfe8f-3abb-4958-b9ae-dc4a63c55071',
    guests: [
      {
        name: 'Jodi Gibbs',
        isComing: true,
        id: '4c889b93-5972-4afe-bdd9-ee0c210075e8',
      },
    ],
  },
  {
    id: 'd0f81da3-3c5d-422d-ae61-b2de4101dc59',
    guests: [
      {
        name: 'Hannah Gibbs',
        isComing: true,
        id: '1f2ff11b-98fa-493e-a048-0d2517ac8dc9',
      },
    ],
  },
  {
    id: 'c45377e0-0775-494b-8bc3-121e72a56fa1',
    guests: [
      {
        name: 'Natasha Gibbs',
        isComing: true,
        id: 'ab6d197b-e506-4ee1-9f0d-72bd6b74f9d4',
      },
    ],
  },
  {
    id: '95666f4c-0aa7-4348-bb82-47520ec72d87',
    guests: [
      {
        name: 'Dean Gibbs',
        isComing: true,
        id: '6cf61e76-bdc0-40ee-a83e-a119a0f7e5d3',
      },
    ],
  },
  {
    id: '5fc04a78-2e14-43e0-b83e-a15991958d43',
    guests: [
      {
        name: 'Nicole Gibbs',
        isComing: true,
        id: '80b668aa-a8cc-4873-94a6-8c7793fb4189',
      },
    ],
  },
  {
    id: 'fa50f926-fec9-405c-8d7c-5f1e1fda864e',
    guests: [
      {
        name: 'Phil Pietersen',
        isComing: true,
        id: 'a1bd376a-aa0f-4c1e-a6f6-acb31ad9ad71',
      },
      {
        name: 'Clara Pietersen',
        isComing: true,
        id: '4bcdb8e4-cf91-42b8-a9bc-ccc7592b8637',
      },
    ],
  },
  {
    id: '3f2d5c3f-6a6e-49ca-9d05-33263d693d25',
    guests: [
      {
        name: 'Leon Buirski',
        isComing: true,
        id: 'e5be7826-77fc-45a9-b71d-cdd070600821',
      },
      {
        name: 'Anthea Buirski',
        isComing: true,
        id: 'f8fd6ff8-2088-46ef-9583-1bfc1b394c36',
      },
      {
        name: 'Luke Buirski',
        isComing: true,
        id: 'e3c9b94d-8dc8-4356-ad10-1558012e1de7',
      },
      {
        name: 'Alexia Buirski',
        isComing: true,
        id: 'b0fe1c7c-e5e2-4084-9d29-ad2acb6afdad',
      },
    ],
  },
];

export { INVITES };
