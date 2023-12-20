export interface Guest {
  name: string;
}

export interface Invite {
  id: string;
  guests: Array<Guest>;
}

const INVITES: Array<Invite> = [
  {
    id: 'b6e307aa-3cfd-464b-af9c-94310c2ac2e6',
    guests: [{ name: 'David Baytopp' }, { name: 'Lesley Baytopp' }],
  },
  {
    id: 'a363f744-d7cc-4a52-84a6-db2043bf58cc',
    guests: [{ name: 'Allison Williams' }, { name: 'Alan Williams' }],
  },
  {
    id: '861afed4-47be-4cf7-af01-a374f25dca4d',
    guests: [
      { name: 'Stuart Gibbs' },
      { name: 'Ulricke Gibbs' },
      { name: 'Ewan Gibbs' },
      { name: 'Daniel Gibbs' },
      { name: 'Oliver Gibbs' },
    ],
  },
  {
    id: 'b4ac7a4b-6ce2-4c38-9e7f-57fd152144b7',
    guests: [{ name: 'Trevor Fenton' }, { name: 'Colleen Fenton' }],
  },
  {
    id: 'e22e2f46-4701-4d62-a6a8-ce2179717abe',
    guests: [{ name: 'Demi Coetzee' }, { name: 'Wesley Coetzee' }],
  },
  {
    id: '1cb25bbb-39e2-42cb-9e7e-b35b80c4b51c',
    guests: [{ name: 'Karine Fenton' }, { name: 'Peter Fenton' }],
  },
  {
    id: '4007344d-179e-4f6c-bd23-60568f3df15a',
    guests: [{ name: 'Jennifer Smith' }],
  },
  {
    id: 'f254f7a6-a455-4053-85d4-da120ab7cae8',
    guests: [{ name: 'Ryan Hart' }],
  },
  {
    id: 'fd7f694e-a089-4a64-976e-cbb06fb0f7c0',
    guests: [{ name: 'Angela Clark' }, { name: 'James Thomson' }],
  },
  {
    id: '5d453abd-86cf-41c2-b3a5-0499e830b552',
    guests: [{ name: 'Alexandra Baldwin' }, { name: 'James Damant' }],
  },
  {
    id: 'ab480df5-fc0a-49aa-b234-08891ca27211',
    guests: [{ name: 'Catherine Baytopp' }, { name: 'Shalom' }],
  },
  {
    id: 'f66e234a-ac53-4632-a5fb-9e7c35a61a8d',
    guests: [{ name: 'Tamryn Baytopp' }],
  },
  {
    id: 'f57de168-4ff6-4bea-949a-e13f6817c662',
    guests: [{ name: 'Grant Hart' }, { name: 'Portia Hart' }],
  },
  {
    id: 'c010f4a8-47f6-4781-b8e8-ddc495f05c28',
    guests: [{ name: 'Chris Williams' }, { name: 'Ashley Laurent' }],
  },
  {
    id: '09eee6f2-0af8-428a-b9e7-2a4963a2525c',
    guests: [{ name: 'Liane Walker' }, { name: 'Dane Walker' }],
  },
  {
    id: '1d1e66ab-57a3-46d9-b2dd-7eb9294d9590',
    guests: [{ name: 'Douglas McFerren' }, { name: 'Caitlin Simons' }],
  },
  {
    id: 'acfb724b-d31b-4cdd-ae65-8eff69d54f7c',
    guests: [
      { name: 'Andrea Smith' },
      { name: 'Trevor Smith' },
      { name: 'Gaby Smith' },
      { name: 'Kara Smith' },
    ],
  },
  {
    id: 'c7220e95-9dbb-4f57-97af-7057aa7295c7',
    guests: [{ name: 'Jenna Kamps' }, { name: 'Jason Kamps' }],
  },
  {
    id: '062e5768-a0d9-451d-81f4-9719732cf37a',
    guests: [{ name: 'Jade Wilson' }, { name: 'James Wilson' }],
  },
  {
    id: '05898505-b11d-476e-b865-846b743e25c4',
    guests: [
      { name: 'Lauren Ward' },
      { name: 'Kayleigh Ward' },
      { name: 'Shirleen Ward' },
    ],
  },
  {
    id: '8e0c7967-9877-41b4-bfbc-8c5580743d31',
    guests: [{ name: 'Taylin Weirich' }, { name: 'Jason Farr' }],
  },
  {
    id: '4b72fab8-c687-48ce-8234-6e1d225f470b',
    guests: [{ name: 'Chelsea Clark' }, { name: 'Dundas Clark' }],
  },
  {
    id: '7623f48c-25f2-4ae2-8f74-cf16f60f0956',
    guests: [{ name: 'Tania Wild' }, { name: 'Jon Dillon' }],
  },
  {
    id: 'f87f9a5e-33ae-4704-8cfd-c1d68bdfb770',
    guests: [{ name: 'Carol Kotze' }, { name: 'Tertius Kotze' }],
  },
  {
    id: '471c9f4c-a7e7-4f7f-ab8b-b14e7cbb9572',
    guests: [{ name: 'Joan Baytopp' }, { name: 'Phillip Baytopp' }],
  },
  {
    id: '55554ac5-e430-41ea-9298-194c556da5c2',
    guests: [{ name: 'Tyla Fenton' }],
  },
  {
    id: '56477d27-300d-4c86-a4bb-d0db93aabdd5',
    guests: [{ name: 'Mike Gibbs' }, { name: 'Ann Gibbs' }],
  },
  {
    id: 'b36adc41-dde9-4b0a-a211-a19fc6259d12',
    guests: [{ name: 'James Jacobi' }, { name: 'Coralie Smith' }],
  },
  {
    id: '9b54299f-6eaa-4cad-926c-cd44140e618f',
    guests: [{ name: 'Andrew Jacobi' }],
  },
  {
    id: '7fee4a77-0b05-4b7e-82be-f869eadceebd',
    guests: [{ name: 'Juan Araujo' }, { name: 'Sophie Spekreijse' }],
  },
  {
    id: '25ed6d5e-00e7-4f7d-b39c-e0b7b075cc9a',
    guests: [{ name: 'Rebecca MacCourt' }],
  },
  {
    id: 'c78ad28e-773b-4b61-bb1e-ffb00b794c27',
    guests: [{ name: 'Brian Lewis' }, { name: 'Marisheen Lewis' }],
  },
  {
    id: '9b470429-5d56-4684-aecf-4e7a3ec4773f',
    guests: [{ name: 'Michael Pereira' }],
  },
  {
    id: '9b1d5825-58d4-4265-970b-296b0b262f71',
    guests: [{ name: 'Todd Atterbury' }],
  },
  {
    id: 'da88accb-a1c2-4d4d-b8df-51dc709d2b78',
    guests: [{ name: 'Grace McInnes' }],
  },
  {
    id: '5fce0d45-5d8e-491f-a725-d48ab42211a7',
    guests: [{ name: 'Caitlin Bell' }, { name: 'Mitchell Austin' }],
  },
  {
    id: 'c2bff678-fa31-4b5a-876c-ce52860c9585',
    guests: [{ name: 'Eryn Farland' }],
  },
  {
    id: '15e84dd7-e1ed-4d6a-b53f-fbee54a39bbd',
    guests: [{ name: 'Matthew Barbieri' }],
  },
  {
    id: 'c1a42194-a087-42f6-a5ad-ba468a46c010',
    guests: [{ name: 'Christopher Baytopp' }, { name: 'Carla Baytopp' }],
  },
  {
    id: 'f9c0c6e3-3b03-4cdc-8ea8-d7d43e6fd252',
    guests: [{ name: 'Amy Buckley' }, { name: 'Kyle Buckley' }],
  },
  {
    id: '37b4e814-27cb-4200-8048-a3205c487e81',
    guests: [
      { name: 'Zania Weirich' },
      { name: 'Patrick Weirich' },
      { name: 'Erin Weirich' },
    ],
  },
  {
    id: '8e73adb0-7d2d-420f-bfdd-5ec7e0c0e1b5',
    guests: [{ name: 'Anthony Gibbs' }, { name: 'Dawn Gibbs' }],
  },
  {
    id: 'db7c9af1-6105-4ab1-b0fb-50ac17baeb95',
    guests: [
      { name: 'Dale Williams' },
      { name: 'Dee Williams' },
      { name: 'Amy Williams' },
      { name: 'Nina Williams' },
    ],
  },
  {
    id: 'a846b814-13b3-4799-8213-6d7f38e8fd44',
    guests: [{ name: 'Isaac Tetro' }, { name: 'Rose Farr' }],
  },
  {
    id: '8ba245fb-d8da-43f5-9853-95175e35dac3',
    guests: [{ name: 'Armando Homann' }, { name: 'Andrea Homann' }],
  },
];

export { INVITES };
