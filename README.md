# Burmese Recipe App

A React-based application showcasing traditional Burmese recipes with detailed cooking instructions, ingredients, and an interactive user interface.

## Project Overview

This application displays a collection of Burmese recipes with the ability to:
- Browse recipes in a responsive grid layout
- View detailed recipe information including ingredients and cooking instructions
- Search recipes by name
- Navigate seamlessly between recipe list and detail views

## Technology Stack

- **Frontend Framework**: React 18
- **State Management**: MobX (with MobX React Lite hooks)
- **Routing**: React Router v6
- **Styling**: Bootstrap 5
- **Build Tool**: Create React App

## Project Structure

```
src/
├── app/
│   ├── Navbar.js          # Top navigation component
│   └── Footer.js          # Footer component
├── components/
│   ├── RecipeLists.js     # Recipe grid display component
│   └── RecipeDetails.js   # Individual recipe details view
├── containers/
│   └── RecipeListsContainer.js  # Container component with store binding
├── store/
│   └── recipe.js          # MobX store for recipe state management
├── data/
│   └── BurmeseRecipes.json # Recipe data source
├── App.js                 # Main app component with routing
├── index.js              # React DOM entry point
└── index.css             # Global styles
```

## Features

1. **Recipe Listing**: Displays recipes in a responsive grid (1-4 columns based on screen size)
2. **Recipe Details**: Full recipe page with ingredients and cooking instructions
3. **Image Handling**: Fallback to default image if recipe image fails to load
4. **Responsive Design**: Mobile-friendly layout using Bootstrap grid system
5. **State Management**: Centralized recipe state using MobX

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Installation & Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view in your browser

## Dependencies

- `react` & `react-dom` - UI framework
- `react-router-dom` - Client-side routing
- `mobx` & `mobx-react-lite` - State management
- `react-scripts` - Build tooling (Create React App)

## Recent Updates

- ✅ Fixed ESLint warnings (removed unused props, fixed alt attributes)
- ✅ Added missing Babel plugin (`@babel/plugin-proposal-private-property-in-object`)
- ✅ Implemented React Router for recipe detail pages
- ✅ Created RecipeDetails component for full recipe views
- ✅ Replaced anchor links with React Router Link components

## Notes

- All recipe data is stored in `src/data/BurmeseRecipes.json`
- Images should be placed in `public/images/` directory named after recipe names
- The app uses a default image fallback if recipe images are missing

