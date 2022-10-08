import index from "./index";
import {} from "../Actios/Actios";

describe("index", () => {
  it("Deberia retornar el estado inicial", () => {
    expect(index(undefined, [])).toEqual({
        recipes: [],
        allRecipes: [],
        diets: [],
        detail:[],
        favorites: [],
    });
  });
});
