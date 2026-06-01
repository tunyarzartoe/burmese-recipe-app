import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import RecipeStore from '../store/recipe';

const RecipeDetails = observer(() => {
  const { id } = useParams();
  const recipe = RecipeStore.recipes.find((item) => item.Guid === id);

  if (!recipe) {
    return (
      <div className="container my-5">
        <div className="text-center">
          <h3>Recipe not found</h3>
          <p>The recipe you requested could not be found.</p>
          <Link to="/" className="btn" style={{ backgroundColor: 'rgba(63, 195, 128, 1)' }}>
            Back to recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card shadow-sm p-4" style={{ borderRadius: '0.75rem' }}>
            <h2 className="mb-3">{recipe.Name}</h2>
            <img
              src={`images/${recipe.Name}.jpg`}
              alt={recipe.Name}
              onError={(e) => { e.target.src = 'images/default.png'; }}
              className="card-img-top mb-4"
              style={{ maxHeight: '320px', objectFit: 'cover' }}
            />
            <div className="mb-4">
              <h5>Ingredients</h5>
              {recipe.Ingredients.split('\n').map((line, index) => (
                <p key={index} className="mb-1">
                  {line}
                </p>
              ))}
            </div>
            <div className="mb-4">
              <h5>Cooking Instructions</h5>
              {recipe.CookingInstructions.split('\n').map((line, index) => (
                <p key={index} className="mb-1">
                  {line}
                </p>
              ))}
            </div>
            <Link to="/" className="btn" style={{ backgroundColor: 'rgba(63, 195, 128, 1)' }}>
              Back to recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RecipeDetails;
