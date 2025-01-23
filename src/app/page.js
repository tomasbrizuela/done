'use client'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState(false);
  const [sub, setSub] = useState({ 'email': '' });
  const handleSub = (e) => {
    let email = e.target.value;
    setSub(prevState => ({ ...prevState, email }));
    console.log(email)
  }

  const subscribeToNewsletter = async () => {
    let url = 'https://donebackk-948213617426.southamerica-east1.run.app/newSub';
    let data = sub
    let options = {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(data)
    }
    let response = await fetch(url, options);
    let responseData = await response.json();
    console.log(responseData)
    if (responseData.Message === "Subscribed") {
      setStatus(true)
      setTimeout(() => {
        setStatus(false)
      }, 500)
    }
  }
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center item-center h-80 gap-4">
        <div>
          <h1 className="text-center text-black font-bold text-4xl">Welcome to the future of productivity</h1>
        </div>
        <div>
          <p className='text-center text-sm text-gray-500'>Suscribe to get the latest updates</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center w-1/3 gap-1 mx-auto'>
          <Input placeholder='email@gmail.com' onChange={handleSub} />
          {status ? <Button className="bg-green-600 hover:bg-green-600 font-bold">Suscribed</Button> : <Button onClick={subscribeToNewsletter}>Suscribe</Button>}
        </div>
      </div>
    </>
  );
}
