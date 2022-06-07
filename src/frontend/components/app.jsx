import Header from './heading'
import React from 'react'
import { useState, useEffect } from 'react'
import '../../styles/main.css'
export function App() {
   const [data, setData] = useState()
   useEffect(() => {
      async function request() {
         try {
            const info = await fetch('http://localhost:3001/repos-api/', {
               headers: {
                  'Content-Type': 'Application/json'
               }
            });
            const q = await info.json()
            setData(q)
            console.log(q)
         } catch (e) { console.log(e) }
      }
      request()
   }, [])

   return (<>
      <Header/>
      <div className='flex flex-col space-y-4 scroll-smooth overscroll-y-contain py-4 justify-items-center text-orange-300 content-center justify-center items-center  bg-sky-800 w-full  h-full'>
         {data?.data.map((v) => (<div className='rounded-md border-black container bg-gray-800 border-2 h-min  p-4 text-orange-300'>
            <p>{v.commit.message}</p>
            <p>Date: {v?.commit?.committer?.date}</p>
            <p>Email: {v.commit.committer.email}</p>
            <p>GitHub User: {v.commit.committer.name}</p>
            </div>))}
      </div>
      </>
   )
}