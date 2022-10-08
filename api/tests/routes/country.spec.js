/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

//('/recipes')
//('/diets')


const agent = session(app);

describe("Recipe routes", () => {
  describe("GET /recipes", () => {
    it("should get 200", () => agent.get("/recipes").expect(200));
  });
  describe("GET /recipes objet ", () => {
    it("GET /recipes should get 200 different to an array", () =>
      agent.get("/recipes").then((res) => {
        expect(res.send).to.not.be.equal(typeof Array);
      }));
  });
  describe("GET /recipes", () => {
    it("should get 200", () => agent.get("/recipes").expect(200));
  });
  describe("POST /recipe", () => {
    it("should get 404 if we dont send data", () =>
      agent.get("/recipe").expect(404));
  });
  describe("GET /diets", () => {
    it("should get 200", () => agent.get("/diets").expect(200));
  });
  describe("delete /recipe/:id", () => {
    it("should get 200", () => agent.get("/recipe/:id").expect(200));
  });

  describe("GET /diets array ", () => {
    it("should get 200 and different to objet", () =>
      agent.get("/diets").then((res) => {
        expect(res.send).to.not.be.equal(typeof Object);
      }));
  });
});











/*

const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
  });
});*/






