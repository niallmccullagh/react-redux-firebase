# Store
<blockquote>
The Store is the object that brings actons and reducers together.
</blockquote>

The store has the following responsibilities:

* Holds application state;
* Allows access to state via getState();
* Allows state to be updated via dispatch(action);
* Registers listeners via subscribe(listener);
* Handles unregistering of listeners via the function returned by subscribe(listener).

When creating the store:
* we pass it the reducers
* the initialState ( Set empty object and let reducer default if not rehydrating from a persistent store)
* and any enhancers; e.g. middleware

```
createStore(
  rootReducer,
  {},
  applyMiddleware(thunk, reduxImmutableStateInvariant())
)
```

## React and Redux
The store is passed to react component implicitly via react context. See the `Provider` component in  index.js within the root of the project. This makes the store available to all sub components.

## middleware

A quick overview of the middleware used.

### redux-thunk
A thunk is a function that returns another function. redux-thunk enables us to dispatch multiple actions asynchronously.

### redux-immutable-state-invariant

Because you're not allowed to mutate your state in your reducers!. And by extension, you shouldn't mutate them either outside. In order to change state in your app, you should always return a new instance of your state with the changes.

If you're doing things correctly, you should see nothing different. But if you don't, that is, if you're mutating your data somewhere in your app either in a dispatch or between dispatches, an error will be thrown with a (hopefully) descriptive message.
