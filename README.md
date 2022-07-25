# News Site Part III

## High Level Objectives
1. Build the Section Page - a page that displays articles for a specific section.
2. Create article search feature on Home Page

## Initial Setup
If you want to use your own code, go ahead and replace the `src` folder of this project with the `src` folder from your previous completed solution.

Once you've copied over these files, run `npm install` followed by `npm run dev`. Verify that no errors appear in your browser console or terminal, and that your app functions the same as it did in the last challenge.

## The Section Page
The Section Page will be used to display articles that belong to a specific section (specifically, "World", "Science",  or "Books").  The Section Page should be loaded when a user clicks on one of these options in the top navigation.

The route that should display a section page should be `/sections/:sectionName`, where the `:sectionName` parameter would be one of the supported sections (listed above). For example, Clicking on the "World" link in the top navigation would redirect to http://localhost:5173/sections/world - this page would only display articles whose "section" property is set to "world".

To accomplish this, you will need to:

1. Create `SectionPage.js` inside of `src/pages`
2. Create a new route (`/sections/:sectionName`) in App.js which points to the `SectionPage` component
3. Obtain the `sectionName` from the url using `useParams()`
4. Within `SectionPage.js`, utilize the `filter()` function to retrieve articles by a specific section, and store them in a state value (`articles`). Remember, we'll be using `useEffect` here, just like we did for our HomePage component. 
5. Pass `articles` into the `<ArticleList>` component, thereby rendering the `ArticleList` with articles for the desired section. 

Attempt to navigate to **http://localhost:5173/#/sections/world**, and confirm that this is showing you the appropriate content. We should only see news articles that have a section value of "world".

## Section Links in `AppNav.js`
Now we need to update our AppNav component to use the new route that we added. We'll be using the Link component from the React Router, just like before, to facilitate internal navigation within our application. 

Attempt to navigate from the home page to a section page, using the AppNav links. Verify that we are taken to the correct page and showing the appropriate content.

Attempt to navigate from one section page to another section page, using the AppNav links. Uh-oh, there seems to be some issue here! While our url changes to the correct location, our content remained the same! Why would this be?? 

As we've mentioned before, React smartly only update the page contents when it knows something has changed. In this case, we're going from one section page to another, so the SectionPage component doesn't need to be removed from the view, and thus React keeps the previous one that was in use. However, React doesn't know anything need to change, because the render is only relying on the internal state values (in this case, `articles`). 

We need to get a new set of articles for the new section. How can we do this? This is where the component lifecycle concepts come into play. Our component need to react to an update, in this case, from the url. We will need to use `useParams` to figure out the new section value, and use that to get a new collection of articles. 



## Article Search

Let's add the ability to search for articles on the Home Page.  In order to accomplish this, the high-level things we need to build are:

1. Add a new function that accepts a search term, and returns a list of articles with that term in their title.
2. Add an input box to the `src/pages/HomePage` component that calls the function above, and updates state.
3. Add a new state value to track the search text. 


**HomePage.js**

As mentioned above, you will want to add a text input to the `HomePage`.  Why not use React Bootstraps's nicely styled text input? (Remember that you'll need to import all of these new libraries from `react-bootstrap` at the top of your file!) Go ahead and put this above your `<ArticleList>` component:

```javascript
<InputGroup>
  <InputGroup.Text>Search</InputGroup.Text>
  <FormControl placeholder="by Title" onChange={handleSearch} />
</InputGroup>
```

Note that we've provided the method that should be called from the `onChange` event - it's a class method called `handleSearch()`. 
Create the `handleSearch()` class method on the `HomePage.js` component. Within this event handler, you should:
1. Extract the value of the text input and set it to a new state value (`searchTitle`)
2. Update our useEffect() dependency array to include `searchTitle`

If these steps are completed successfully, the list of articles displayed on the home page should change as you interact with the text box.

## Extended Challenge #1
Can you extend the search feature to work for the Home or any Section page? *HINT: Consider moving the search input to the AppNav component!*

## Extended Challenge #2
There is a something bad about our current design for filtering articles. Currently, we're making an "API call" for **every** character that a user types into the search field. This may seem okay when our total data size is around 40 articles, but imagine what would happen if we had to serve 40,000 articles, or even worse, 40 million articles! Making so many API calls is not the best design, especially if it can be avoided. In this case, there should be a way to cut down the number of API calls we need to make, right? Think about all of the tools we have at our disposal... <ins>can you update the design of News Site so that the filtering functionality is retained, but our total API calls are reduced?</ins>
