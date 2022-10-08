const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() =>
   conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Milanesa a la napolitana' });
        it("should work when its a valid summary", () => {
          Recipe.create({ summary: "Resumen milanesa a la napolitana" });
        });
        /*it("should work when its a valid Puntuation", () => {
          Recipe.create({ Puntuation: 10 });
        });*/
        it("should work when its a valid healthScore", () => {
          Recipe.create({ healthScore: 10 });
        });
        it("should work when its a valid steps", () => {
          Recipe.create({ steps: "Pasos a seguir para la creacion" });
      });
    });
    });
  });
})
