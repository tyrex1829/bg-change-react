import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#27272a")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='flex flex-wrap justify-center px-2 py-3 fixed bottom-12 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 rounded-2xl px-3 py-2'>
          <button className='rounded-lg px-4 py-1 outline-none text-white shadow-lg' style={{backgroundColor: "#dc2626"}} onClick={() => setColor("#dc2626")}>Red</button>
          <button className='rounded-lg px-4 py-1 outline-none text-white shadow-lg' style={{backgroundColor: "#84cc16"}} onClick={() => setColor("#84cc16")}>Green</button>
          <button className='rounded-lg px-4 py-1 outline-none text-white shadow-lg' style={{backgroundColor: "#0369a1"}} onClick={() => setColor("#0369a1")}>Blue</button>
          <button className='rounded-lg px-4 py-1 outline-none text-white shadow-lg' style={{backgroundColor: "#65a30d"}} onClick={() => setColor("#65a30d")}>Olive</button>
          <button className='rounded-lg px-4 py-1 outline-none text-white shadow-lg' style={{backgroundColor: "#27272a"}} onClick={() => setColor("#27272a")}>Gray</button>
          <button className='rounded-lg px-4 py-1 outline-none text-white shadow-lg' style={{backgroundColor: "#f59e0b"}} onClick={() => setColor("#f59e0b")}>Yellow</button>
          <button className='rounded-lg px-4 py-1 outline-none text-white shadow-lg' style={{backgroundColor: "#db2777"}} onClick={() => setColor("#db2777")}>Pink</button>
          <button className='rounded-lg px-4 py-1 outline-none text-white shadow-lg' style={{backgroundColor: "#7e22ce"}} onClick={() => setColor("#7e22ce")}>Purple</button>
          <button className='rounded-lg px-4 py-1 outline-none text-white shadow-lg' style={{backgroundColor: "#4c1d95"}} onClick={() => setColor("#4c1d95")}>Lavender</button>
          <button className='rounded-lg px-4 py-1 outline-none text-black shadow-lg' style={{backgroundColor: "#fff"}} onClick={() => setColor("#fff")}>White</button>
          <button className='rounded-lg px-4 py-1 outline-none text-white shadow-lg' style={{backgroundColor: "#020617"}} onClick={() => setColor("#020617")}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
