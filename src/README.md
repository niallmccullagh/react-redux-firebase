# Building the app
* Create Page
* Create route

## The redux bit
* Create the actions (see actions readme)
* Create the reducers (see reducers readme)
* Create the store (see store readme)
* Inject the store into react at the root (see store readme)
* Connect redux to Page (see below)

## Components vs Containers

In Redux, a container is a "smart" React component that's hooked directly into the store, while components refer to "dumb" React components that are unaware of Redux. 

## Pages

A page a component that is linked to a route.

They declare and export a class that extends `React.Component` which has a render method that return JSX.

React components can be passed properties that can be used either as logic or displayed in a component.

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

    const element = <Welcome name="Sara" />;
    ReactDOM.render(
      element,
      document.getElementById('root')
    );

Components can contain other components and props can be passed down to them as well.

##  Connecting redux to Page

`mapStateToProps` function maps anything from the redux store state into the props to be used in the presentation.

function mapStateToProps(state, ownProps) {
  return {
    inventory: state.inventory
  };
}

`mapDispatchToProps` function maps dispatch methods into the props to be used in the presentation.

The methods create a action and uses the store to dispatch them. The reducers will then process the action, updating the store which will re-render the component.

the `connect` function wraps the presentational component in a container component. It merges the props using mapStateToProps and mapDispatchToProps and its own props passing them to the wrapped presentational component.
