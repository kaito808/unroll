### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  To get “client-side routing”

- What is a single page application?
  Sites that exclusively use client-side routing

- What are some differences between client side and server side routing?
  server side routing only requires one time request to the server when the application is started

- What are two ways of handling redirects with React Router? When would you use each?

1 Using the <Redirect> component:
Useful for “you shouldn’t have gotten here, go here instead”

2. Calling .push method on the history object:
   Useful for “you finished this, now go here”

- What are two different ways to handle page-not-found user experiences using React Router?

1. show that 403 page saying that page not found
2. redirect them to the alive page

- How do you grab URL parameters from within a component using React Router?
  By using useParams()

- What is context in React? When would you use it?
  Any component inside of a Provider can subscribe to context value.In order to subscribe to the value, we need the useContext hook.Without explicitly subscribing, the value isn’t available to components farther down in the hierarchy.

Context is often used to provide a theme or styling information to ensure consistent styling throughout the app.

- Describe some differences between class-based components and function components in React.

Class-based components include a render method where you return the component's JSX, while function componets can manage state by using React Hooks

- What are some of the problems that hooks were designed to solve?
  You can now reuse the logic within a single functional component
