/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  id: 'bcaf121f-4dab-4129-90c5-50ae9512eb7f', 
  name: 'Pug',
  height_min: '25',
  height_max: '30',
  weight_min: '8',
  weight_max: '12',
  life_span: '6',
  temperament: "Curious",
  image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Mops-falk-vom-maegdebrunnen-internationaler-champion-fci.jpg' 
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /api/dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
});

describe("Obtiene un Dog por id", () => {
  describe("GET /dogs/:id", () => {
    it("Se espera una respuesta 200 si se pasa un id", () =>
      agent.get("/dogs/bcaf121f-4dab-4129-90c5-50ae9512eb7f").expect(200));
  });
  })

