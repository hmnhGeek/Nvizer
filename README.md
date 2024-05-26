# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

# Carousel Component

The Carousel component is a horizontal scrolling container that displays news articles using the NewsCard component. It automatically scrolls through the articles in a loop, allowing users to view multiple articles without manual interaction.

## How it Works

The Carousel component utilizes JavaScript and CSS to achieve the scrolling functionality.

### JavaScript Concepts

#### useRef Hook

The `useRef` hook is used to create a reference to the DOM element representing the carousel container. This allows us to access and manipulate the container's scroll properties.

```jsx
const carouselRef = useRef(null);
```

#### useEffect Hook

The `useEffect` hook is used to start the automatic scrolling when the component mounts. It also cleans up the scroll interval when the component unmounts to prevent memory leaks.

```jsx
useEffect(() => {
  startScroll();

  return () => clearInterval(scrollInterval);
}, []);
```

#### setInterval

The `setInterval` function is used to continuously scroll the carousel at regular intervals. It increments or decrements the `scrollLeft` property of the carousel container based on the scrolling direction.

```jsx
const startScroll = () => {
  scrollInterval = setInterval(() => {
    // Scroll the carousel container
    carouselRef.current.scrollLeft += direction;
    // Check if reached end of the carousel
    if (
      direction === 1 &&
      carouselRef.current.scrollLeft >=
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth
    ) {
      direction = -1; // Change direction to scroll back
    } else if (direction === -1 && carouselRef.current.scrollLeft === 0) {
      direction = 1; // Change direction to scroll forward
    }
  }, 20);
};
```

### CSS Concepts

#### overflow-x Property

The `overflow-x` property is set to "hidden" to hide the horizontal scrollbar while still allowing horizontal scrolling within the container.

```jsx
style={{ overflowX: "hidden" }}
```

#### whitespace-nowrap Class

The `whitespace-nowrap` class is applied to the carousel container to prevent line wrapping of the articles and maintain them in a single row.

```jsx
className = "flex overflow-x-auto whitespace-nowrap";
```

## How to Use

To use the Carousel component, simply pass an array of news articles as props. Each news article should be an object containing relevant information such as title, description, image, etc.

```jsx
<Carousel articles={newsArticles} />
```

## Customization

You can customize the scrolling behavior and appearance of the Carousel component by adjusting the scroll speed, interval, and CSS styles according to your requirements.
