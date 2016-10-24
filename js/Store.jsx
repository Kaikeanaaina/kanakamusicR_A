const redux = require('redux')
const reactRedux = require('react-redux')
const User = require('../models/User')

/* const { show } = require('../public/data') */
/* pull in where ever it gets data */

const SET_SEARCH_TERM = 'setSearchTerm'

/* name of the function that has to do the heavy lifting */
const initialState = {
  bands: '',
  /* name of the state */
  User
  /* name of the data being passed through the store */
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /* case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action) */
      /* go through a reducer. the root reducer is figuring out what case it is */
    default:
      return state
  }
}

// const reduceSearchTerm = (state, action) => {
//   const newState = {}
//   /* it has to return a new state, but still keep the old state */
//   Object.assign(newState, state, {searchTerm: action.value})
//   /* we assign the new state everything the old state has, and then reassign a specific property */
//   return newState
// }

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))
/* this is creating the store, but brian holt found on the internet that this allows redux to work */

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    User: state.User
  }
}

/*
we are going to use react-redux ability
to plug-in components in the react store.
this is saying, that whenever i pass this into react,
pass this in as props
*/

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

/*
so in our component there could be something like
// this.props.setSearchTerm(‘house’)
which will fire off the mapDispatchToProps
which will also set type(this type of action) and this value.
the dispatch in here will feed the action argument in the rootReducer
*/

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
