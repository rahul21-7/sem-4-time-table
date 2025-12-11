import { useState } from 'react'
import React from "react"
import AI_thoery from './components/AI_thoery'
import OS_lab from './components/OS_lab'
import Monday from './components/Monday'
import Tuesday from './components/Tuesday'
import Wednesday from './components/Wednesday'
import Thursday from './components/Thursday'
import Friday from './components/Friday'
import Times from './components/Times'

function App() {

  return (
    <>
      <div className='flex justify-center items-center h-screen w-screen'>
        <div class="hover-3d">
          <figure class="rounded-2xl">
            <div className='flex justify-center items-center flex-col gap-4'>
              <h2>Time Table</h2>
              <Times />
              <Monday />
              <Tuesday />
              <Wednesday />
              <Thursday />
              <Friday />
            </div>
          </figure>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default App
