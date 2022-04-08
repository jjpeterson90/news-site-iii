# News Site Part II

## Initial Setup

Each day of the News Site app will build on the previous day's code.

Today, we are going to create 1 new component, 2 pages, and a routing system to build up News Site II. A large majority of this code has already been written for you either here or in the previous day's code. We'll be moving quite a bit of code from one place to another.

Your choice: for this challenge, we have provided the solutions to `news-site-i` in the starting code here. It is up to you whether you would like to use our code or your own code from yesterday.

1. Create a new React app from your terminal: `npx create-react-app news-site-ii`

2. Copy over the `components`, `data`, and `pages` directories from this repo to the `src/` of your new React project. If you would like to use your own code from `news-site-I`, replace the following files in the `components` directories with your files from `news-site-i`: `Article/Article.js`, `ArticleTeaser/ArticleTeaser.js`, and `AppNav/AppNav.js`. 

3. Copy over the `App.js` from either this repo or your `news-site-i` into your new `news-site-ii` project.

4. Later today, we will be adding some styling. There are many libraries out there but the one we are going to use is [react bootstrap](https://react-bootstrap.github.io/). React Bootstrap is a component libraries for React that uses Bootstrap styles under the hood. 

```sh
$ npm install react-bootstrap bootstrap
```

5. If you're using react-boostrap, add `import 'bootstrap/dist/css/bootstrap.min.css'` to your `src/index.js`. We'll come back to style this app a bit later - at this point, start up your new app. Your code should operate exactly like it did with `news-site-I`. **Do not move forward unless it's the same.**

6. At the moment, the `<a>` links in your `ArticleTeaser` component appends a `#` to the URL when clicked. This can cause a problem when handling route/url changes later today. Let's modify the `onClick` event handler to alleviate this changing `onClick` to this:
```javascript
onClick={(event) => {
  event.preventDefault();
  props.handleTitleClick(props.id);
}}
```
`event.preventDefault()` is the key line here - this will prevent the default behavior of the `<a>` tag. This default behavior is what's responsible for adding this hashtag to the URL.


## Component I: ArticleList
We have a new component today that has been stubbed out: the `ArticleList` component. Instead of showing a random article, we want our homepage to show a list of article teasers. Your mission is to handle the `props` that are being passed in appropriately and create the content that the component should render.

Props for `ArticleList`:
1. `articles` - an array of article objects
2. `handleTitleClick` - a function

The `ArticleList` component will receive an array of `articles` (if you want a refresher on the data shape, take a look at `src/data/news.json`). `map` over this array and create an array of `ArticleTeaser`s. When you `map` over the `articles` array, it's good to use arrow functions. Take a look at what your `ArticleTeaser` component requires (you may want to utilize the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)):
- id (how can you use the indexes of the articles array to act as IDs?)
- title
- created_date
- handleTitleClick

Don't worry about this not doing anything yet - we will wire it up in the next section.

## React Router
[React Router V6](https://reactrouter.com/docs/en/v6) is a popular open source library that's used to control routing in a single page app. Using this library, you can load `component`s based on URL paths. For example, you can configure React Router to load ComponentX when the URL `http://localhost:3000/componentx` is requested.

To utilize React Router, let's install:
```sh
$ npm install react-router-dom --save
```

In `App.js`, bring in the necessary libraries from the package you just installed:

```javascript
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
```

Let's rewrite our `render`:
```javascript
return (
  <div>
    <h1>AppNav Component</h1>
    <hr />
    <AppNav navItems={navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:articleID" element={<ArticlePage />} />
        </Routes>      
      </div>
    </Router>
  </div>
);
```

Here we are wrapping our app in a `Router` and using `Route` components, which will look for an exact URL path match and render the compenent you specify for that path. Because we think of these components as different pages in our app, we've kept them in a `Pages` directory and named them accordingly.

With this rewrite, we are no longer utilizing `article` or the imported `ArticleTeaser` and `Article` components in `App.js`. Go ahead and delete those imports and state instantiation.

At this time, you may see a number of warnings and errors - how do you bring in `HomePage` and `ArticlePage` (found in `src/pages/`)?

Once the `HomePage` component is succesfully brought in, it's about 60% complete - once you've defined your route - and assuming you successfully built the `ArticleList` `component` in the step above - you should see a full list of articles at the `/` path (`http://localhost:3000/`).

You also should be able to see the `ArticlePage` `component` (`src/pages/ArticlePage`) by navigating to `http://localhost:3000/articles/1`. It should simply have the NavBar at the top and the words `Article Page` (boilerplate).

If you are seeing the behavior above, you may continue to the next step. If not, ask your classmates or instructional staff for help.

## HomePage Component

As mentioned above, the `HomePage` is largely complete - it simply renders the `ArticleList` `component`. The one piece of functionality you need to complete is the `handleTitleClick` function being passed into the `ArticleList` `component`. Ultimately, this function should trigger a page change. React Router automatically passes a series of routing-related props to the `HomePage` `component`. We can use the `useNavigate` hook from [React Router V6](https://reactrouter.com/docs/en/v6/api#usenavigate) to manually navigate to a route path. Ultimately, this url should look something like `navigate(`/articles/${articleID}`)`

`articleID` corresponds to the index of an item in the articles array, and is a parameter already being passed into this function. You should be able to click links in your homepage and be able to hit different urls that correspond with the article that you clicked.

## ArticlePage Component
The `ArticlePage` component should render the `Article` component, and provide the necessary props to the child component. If you remember, `Article` accepts a variety of props from a single article object in `src/data/news.json` array. In order to determine the array object to use, we need to obtain the params from the router logic. To do this, we can employ the `useParams()` hook. The index you'll want to target within the articles array will be contained within `params.articleID`, which corresponds to `[articleID]` portion in this URL: `http://localhost:3000/article/[articleID]`

__For React Router V6__

If using React Router V6 you can use the `useParams` hook to retrieve dynamic params from the current URL (ex: `articleID`) that were matched by the Route Path.

React Router V6 example for url: http://localhost:3000/articles/:articleID
```js
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  let { articleID } = useParams();

  return (
    <div>
      <div>Article Page</div>
      <div>Article ID: { articleID }</div>
    </div>
  )
}
```

Write the code necessary to find the news article and pass it into the `Article` component and render it all out on the screen. The Article page should render the article's:
- Title
- Created Date
- Byline
- Image (Note: Someone changed the data structure that we are receiving for news articles. Look inside the JSON and see if you can find the URL for the images. Then, update your code to account for this)
- Abstract

As of right now, keep in mind that people are able to actually hit `/articles/0`, which is not REST-ful - all IDs should start at 1. How can we alter the code to both get the correct article in the JSON file and be REST-ful?

## Style with Bootstrap
Style everything using React-bootstrap! Let's make the Nav bar, the list of ArticleTeasers, and the Articles look nice.

