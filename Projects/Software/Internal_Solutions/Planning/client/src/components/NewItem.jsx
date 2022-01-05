import React from 'react'
import '../styles/newItem.css'

const NewItem = () => {
  return (
    <div className="new-item">
      <form action="post">
        <div className="field">
          <label htmlFor="name">Item Name</label>
          <input type="text" />
        </div>
        <div className="field">
          <label htmlFor="cost">Cost</label>
          <input type="text" />
        </div>
        <div className="field">
          <label htmlFor="budget">Budget</label>
          <select name="budget" id="">
            <option>--</option>
            <option>EveryDollar</option>
            <option>Van</option>
            <option>Savings</option>
            <option>Extra</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="account">Account</label>
        <select name="account" id="">
              <option>--</option>
              <option>PCM Check</option>
              <option>PCM Save 1</option>
              <option>PCM Save 2</option>
              <option>One</option>
            </select>
        </div>
        <div className="field">
          <label htmlFor="category">Category</label>
          <select name="category" id="">
              <option>--</option>
              <option>Groceries</option>
              <option>Gas</option>
              <option>Health</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default NewItem;