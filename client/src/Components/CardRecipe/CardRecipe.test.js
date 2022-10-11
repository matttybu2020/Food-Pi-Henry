import CardRecipe from "./CardRecipe.jsx";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


it('renders content', () => {
const recipe = {
    name: "Goulash",
    dietTypes: ["paleolithic", "primal"]
}
const component = render(<CardRecipe name={recipe.name} dietTypes={recipe.dietTypes}/>);   
expect(component.container).toHaveTextContent(recipe.name);
});

