import React from 'react'
import { PropTypes } from 'prop-types';

const Counter = ({ value, onIncrement, onDecrement,onIncrementAsync, takinLatest, getPostData, loadData }) =>
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>

        <button onClick={onIncrementAsync}>
          Unique
        </button>

        <button onClick={takinLatest}>Taking latest</button>
        <button onClick={getPostData}>Get Post Data</button>
        <hr />
        
        <div>
          Clicked: {value} times
        </div>

         <h3>All Posts</h3>
         /* // will throw errors */
        {
          loadData?.length > 0 && loadData.map((el, index) => <div key={index}>{el.title}</div>)
        }
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
