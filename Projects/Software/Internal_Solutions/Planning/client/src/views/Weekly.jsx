import React from 'react'
import '../styles/weekly.css'

const Weekly = () => {
  const agreementData = {
    "limits": [
      {
        "name": "conversation",
        "value": 300
      }
    ]
  }

  const dummyItemData = {
    "categories": [
      {
        "name": "over-limit",
        "label": "Over Limit",
        "items": []
      }, {
        "name": "under-limit",
        "label": "Under Limit",
        "items": [
          {
            "name": "Tire Balancing",
            "date": "Thursday",
            "account": "PCM Check",
            "conversation-category": "under-limit",
            "amount-exact": 25,
            "amount-upper-limit": 60,
            "amount-lower-limit": 50,
            "budget":""
          }
        ]
      }, {
        "name": "appointments",
        "label": "Appointments",
        "items": []
      },
      {
        "name": "gifts-tithes",
        "label": "Gifts & Tithes",
        "items": []
      }
    ]
  }

  const weeklyData = {
    "headers": ["Cost", "Budget", "Account", "Category"],
    "categories": [
      {
        "name": ""
      }
    ]
  }


  return (
    <div className='weekly'>
      <table>
        <tr>
          {
            weeklyData.headers.map((header) =>
              <th>{header}</th>
            )
          }
        </tr>
        {
          dummyItemData.categories.map((category) =>
            <div className="agreement-category">
              <tr>
                <td><h3>{category.label}</h3></td>
                {/* <td>$Amount</td> */}
                {
                  weeklyData.headers.map((header) =>
                    <th>{header}</th>
                  )
                }
              </tr>{
                category.items.map((item) =>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item["amount-exact"]}</td>
                  </tr>
                )
              }
            </div>
          )
        }
      </table>


      <table>
        <tr>
          <th>Item</th>
          <th>Cost</th>
          <th>Budget</th>
          <th>Account</th>
          <th>Category</th>
        </tr>
        <tr>
          <td>
            <h2>Expected Expenses</h2>
          </td>
          <td>$728.4</td>
        </tr>
        <tr>
          <td>
            <h3>Over $300</h3>
          </td>
        </tr>
        <tr>
          <td><input type="text" /></td>
          <td><input type="number" /></td>
          <td>
            <select name="" id="">
              <option>--</option>
              <option>EveryDollar</option>
              <option>Van</option>
              <option>Savings</option>
              <option>Extra</option>
            </select>
          </td>
          <td>
            <select name="" id="">
              <option>--</option>
              <option>PCM Check</option>
              <option>PCM Save 1</option>
              <option>PCM Save 2</option>
              <option>One</option>
            </select>
          </td>
          <td>
            <select name="" id="">
              <option>--</option>
              <option>Groceries</option>
              <option>Gas</option>
              <option>Health</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <h3>Under $300</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h2>Appointments</h2>
          </td>
          <td>$324.8</td>
        </tr>
        <tr>
          <td>
            <h2>Gifts & Tithes</h2>
          </td>
          <td>$386.4</td>
        </tr>
      </table>
    </div >
  )
}

export default Weekly;