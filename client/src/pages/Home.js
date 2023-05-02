import React, { useState, useEffect} from 'react';
import IgAccount from '../components/IgAccount';
import AccountForm from '../components/AccountForm';

const Home = () => {

  const [ igAccount, setIgAccount ] = useState([])

  useEffect(() => {
    const fetchedData = async () => {
      const res = await fetch('/api/igaccount/')
      const data = await res.json();
      setIgAccount(data);
      console.log(igAccount);
    }

    fetchedData()
  },[])

  return (
    <div className='home bg-gray-100'>
      
      <div className='grid gap-4 grid-cols-4 p-10'>
        <div className='col-span-3'>
          {igAccount && igAccount.map( (account) => {
            return(
              <IgAccount key={account._id} accountInfo = {account}  />
            )}
          )}
        </div>

        <div className=''>
          <AccountForm/>
        </div>
      </div>


    </div>
  )
}

export default Home