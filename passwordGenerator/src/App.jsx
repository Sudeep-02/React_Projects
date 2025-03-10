import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
   

  const funcCallback = useCallback(() => {
    let CharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let pass = "";
    const numberSet = "0123456789";
    const specialChar = "!@#$%^&*";
    if(numberAllowed) CharSet += numberSet;
    if(charAllowed) CharSet += specialChar;
    
    for (let i = 0; i < length; i++) {
      let count = Math.floor(Math.random() * CharSet.length + 1)
      pass += CharSet.charAt(count);
      
      console.log(count);
      
    }

    setPassword(pass)
  },[length,charAllowed,numberAllowed,setPassword])
  //useRef hook
  const passwordRef = useRef(null)
    
  useEffect(()=>{
    funcCallback()
  },[length,numberAllowed,charAllowed,funcCallback])
   
  const passwordCopy = useCallback(()=> {
       passwordRef.current?.select();
       passwordRef.current?.setSelectionRange(0, 999);

      window.navigator.clipboard.writeText(password);
  },[password])

  
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={passwordCopy}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500 active:bg-blue-800'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={25}
        value={length}
         className='cursor-pointer'
         onChange={(e)=> (setLength(e.target.value))}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=> setNumberAllowed((prev) => !prev)}
      />
      <label htmlFor="numberInput">Set</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={ () => {setCharAllowed((prev) => !prev) } }
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App