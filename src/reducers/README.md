# Reducers

<blockquote>
Reducers specify how the application's state  changes in response to an action.
</blockquote>


## State Object
In Redux, all application state is stored as a single object. The shape of this object is defined in `initialState.js`.


## Handling Actions

Reducers are pure functions. Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

` (previousState, action) => newState `

So each reducer takes in the previous state, and the action that it is responding. It processes that action to produce the new state

## Combined Reducers
If you look at the `index.js` you will see that the `rootReducer` is made up of all the individual reducers. Each reducer handles different parts of the state object.

The `combineReducers` method takes an object that maps the state field names to the reducers that manage them. It is common to make use the ES6 object shorthand and name the reducers functions after the piece of state that manage them.

## Don't mutable the state

Remember reducers should be pure functions. Use `Object.assign` to create copies and then change the copy.

## Actions -> Redux Store -> reducers

Look at `store\configureStore.js` to see how we create a redux store that holds the state and takes care of calling the reducers when actions are dispatched.
