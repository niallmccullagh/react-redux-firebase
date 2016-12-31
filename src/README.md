# Navigating the app

This is a walkthrough of how the application hangs together, which should help understand the flow so that you can add/change things.

## App entry point

The app starts at index.js as the top level component. In this application we are using reacts router to determine which component should be rendered.

## Routing
The routes.js file holds the configuration of which components is rendered for what route. The components are imported and then assigned a route. The code for the component is in the file noted by the path of the import.

## Components

Component declare and export a class that extends `React.Component` which has a render method that returns JSX.

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

See [Components](./components/README.md) for more info.

### Components vs Containers

A container is a react component that deals with state.

In this app our containers are wired to redux to help us manage state, while components refer to "dumb" React components that are unaware of Redux. 

See [Containers](./containers/README.md) for more info.

## The redux bit
Redux provides applications with a predictable application state. It has a number of traits:

* There is only one [store](./store/README.med) so it is easier to manage.
* (Actions)[./actions/README.md] describe that something has happened. Actions are usually the result of the user doing something e.g. clicks a login button, the credentials are verified (in a function called an action creator) and action is dispatched to indicate success or failure.
* (Reducers)[./actions/README.md] update the application state when an action occurs. Reducers are the only place state should be updated.

A component can be connected to redux (thereby classifying the component as a container) to inject values from the redux state into the components props. Action creators can also be injected so that a component can trigger actions.
Have a read through the [components](./components/README.md)] documentation for more info
