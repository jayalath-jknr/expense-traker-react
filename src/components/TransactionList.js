import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobleState'
import Transaction from './Transaction'

export default function TransactionList() {
    
    const {transactions} = useContext(GlobalContext)
  return (
    <div><h3>History</h3>
          <ul className="list">
              {transactions.map(transaction => (<Transaction key={transaction.id} transaction={ transaction}/>))}
         {/* <li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li> */}
      </ul></div>
  )
}
