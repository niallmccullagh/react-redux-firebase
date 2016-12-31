# Components

<blockquote>
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.
</blockquote>


Components should adhere to the single responsibility principle, which can be used with other components to build a screen. Components maybe reusable across screens and even projects.

## Stateless vs Stateful

Stateless functional components are useful for dumb/presentational components. Presentational components focus on the UI rather than behavior, so it’s important to avoid using state in presentational components. 

Instead we try to manage state in higher level container components or via redux. [See containers](../containers/README.md)
