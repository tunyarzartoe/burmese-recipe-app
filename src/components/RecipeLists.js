import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import RecipeStore from '../store/recipe';

const RecipeList = observer(() => {
  const { filteredRecipes, fetchRecipes, loading } = RecipeStore;
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  useEffect(() => {
    setPage(1);
  }, [filteredRecipes.length]);

  const totalPages = Math.max(1, Math.ceil(filteredRecipes.length / pageSize));

  const visibleRecipes = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredRecipes.slice(start, start + pageSize);
  }, [filteredRecipes, page]);

  const goTo = (p) => setPage(Math.max(1, Math.min(totalPages, p)));

  return (
    <div className="container my-5">
      <div className="row recipe-grid">
        {loading ? (
          // show skeleton placeholders while loading
          Array.from({ length: 8 }).map((_, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={`s-${idx}`}>
              <div className="card recipe-card shadow-soft">
                <div className="skeleton skeleton-img"></div>
                <div className="card-body">
                  <div className="skeleton-line" style={{width:'70%'}}></div>
                  <div className="skeleton-line" style={{width:'40%'}}></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          visibleRecipes.length ? (
            visibleRecipes.map((recipe) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={recipe.Guid}>
                <div className="card recipe-card shadow-soft">
                  <img
                    src={`/images/${recipe.Name}.jpg`}
                    alt={recipe.Name}
                    onError={(e) => { e.target.src = '/images/default.png'; }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="recipe-title mb-2">{recipe.Name}</h5>
                    <Link to={`/recipe-details/${recipe.Guid}`} className="btn btn-primary mt-auto w-100">
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-5 col-12 empty-state">
              <h5>No recipes found</h5>
            </div>
          )
        )}
      </div>

      {/* Pagination controls */}
      {!loading && filteredRecipes.length > pageSize && (
        <div className="d-flex justify-content-center">
          <div className="pagination">
            <button className="page-btn" onClick={() => goTo(page - 1)} disabled={page === 1}>Prev</button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`page-btn ${page === i + 1 ? 'active' : ''}`}
                onClick={() => goTo(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button className="page-btn" onClick={() => goTo(page + 1)} disabled={page === totalPages}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
});

export default RecipeList;
