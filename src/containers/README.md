# Containers

<blockquote>
A container does data fetching and then renders its corresponding sub-component. That’s it.
</blockquote>


Containers are [components](../components/README.md), but are separated out to show that they deal with state.

In this project we use redux within the containers to manage state.


##  Connecting redux to a component

`mapStateToProps` function maps anything from the redux store state into the props to be used in the presentation.

function mapStateToProps(state, ownProps) {
  return {
    inventory: state.inventory
  };
}

`mapDispatchToProps` function maps dispatch methods into the props to be used in the presentation.

The methods create a action and uses the store to dispatch them. The reducers will then process the action, updating the store which will re-render the component.

the `connect` function wraps the presentational component in a container component. It merges the props using mapStateToProps and mapDispatchToProps and its own props passing them to the wrapped presentational component.
