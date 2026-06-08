import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import RecipeStore from '../store/recipe';

const RecipeDetails = observer(() => {
  const { id } = useParams();
  const recipe = RecipeStore.recipes.find((item) => item.Guid === id);
  console.log('Recipe details for ID:', id, recipe);

  if (!recipe) {
    return (
      <div className="container my-5">
        <div className="text-center">
          <h3>Recipe not found</h3>
          <p>The recipe you requested could not be found.</p>
          <Link to="/" className="btn btn-primary">
            Back to recipes
          </Link>
        </div>
      </div>
    );
  }

  const ingredients = recipe.Ingredients ? recipe.Ingredients.split('\n') : [];
  const steps = recipe.CookingInstructions ? recipe.CookingInstructions.split('\n') : [];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="card shadow-soft p-4 recipe-card">
            <a href="/" className="back-link mb-3">← Back to recipes</a>
            <div className="recipe-details-container">
              <div className="recipe-details-hero">
                <img
                  src={`/images/${recipe.Name}.jpg`}
                  alt={recipe.Name}
                  onError={(e) => { e.target.src = '/images/default.png'; }}
                  className="card-img-top recipe-details"
                />
              </div>
              <div className="recipe-details-content">
                <h2 className="mb-1">{recipe.Name}</h2>
                <div className="recipe-meta">{recipe.Category || ''} • Serves {recipe.Servings || 'N/A'}</div>

                <div className="mb-3 recipe-section">
                  <h5>Ingredients</h5>
                  {ingredients.map((line, index) => (
                    <p key={index} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="mb-3 recipe-section">
                  <h5>Cooking Instructions</h5>
                  {steps.map((line, index) => (
                    <p key={index} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>

                <div>
                  <Link to="/" className="btn btn-primary">Back to recipes</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RecipeDetails;
