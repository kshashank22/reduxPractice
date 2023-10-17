import React from 'react'
import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

function App() {
  const initialState = { value: 0 }

  function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'counter/incremented') {
      // If so, make a copy of `state`
      return {
        ...state,
        // and update the copy with the new value
        value: state.value + 1
      }
    }
    // otherwise return the existing state unchanged
    return state
  }

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())

store.dispatch({ type: 'counter/incremented' })

console.log(store.getState())



// {value: 0}
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default App
