import { useCallback, useState } from "react"

function App() {
  const [length,setLength]  = useState(8);
  const [allowedNumber,setAllowedNumber]= useState(false);
  const [allowedChar,setAllowedChar]= useState(false);

  const [Password,setPassword] = useState("");

  const passGenerator=useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(allowedChar) str +="!@#$%^&*()_+~`?><:}{}][';/.,";
    if(allowedNumber) str+="1234567890";


    for(let i=0;i<length;i++){
      let ind = Math.floor(Math.random() * str.length);
      pass += str[ind];
    }
    console.log(pass);

    setPassword(pass);


  },[length,allowedChar,allowedNumber,setPassword]);
  // passGenerator();
  function handleClick(){
    console.log(allowedChar);
  }
 
 
  return (
    
     

      <div className="w-full max-w-[600px] mx-auto bg-gray-700 mt-20 rounded-lg px-4 ">
         <h1 className="text-white text-3xl capitalize text-center font-[serif] font-[500] pt-8">Password Generator</h1>  
        <div className="py-4 px-4 mt-4 pb-8 flex justify-center "> 
          <input className="outline-none bg-white w-full px-4 py-2 rounded-l-lg text-xl text-black font-bold capitalize" type="text" placeholder="password" readOnly value={Password}/>
          <button className="text-xl bg-[blue] px-3  font-bold capitalize rounded-r-lg cursor-pointer ">copy</button>
        </div>

        <div className="flex gap-x-4 items-center justify-center ">

          <div className="flex items-center py-4 gap-x-2">
            <input type="range" min={5} step={1}  max={20} className="cursor-pointer" onChange={(e)=>setLength(Number(e.target.value))}/>
            <label className="text-lg font-[500] text-white  "  >Length : {length}</label>
          </div>

          <div className="flex items-center py-4 gap-x-2">
            <input className="w-[15px] h-[15px]"   type="checkbox" defaultChecked={allowedNumber} id="numberInput"  onChange={()=>setAllowedNumber(prev => !prev )} />
            <label  className="text-lg font-[500] text-white  "htmlFor="numberInput">Numbers</label>

          </div>

          <div className="flex items-center py-4 gap-x-2">
            <input className="w-[15px] h-[15px] "  type="checkbox" defaultChecked={allowedChar} onClick={handleClick} id="charInput" onChange={()=>setAllowedChar(prev=>!prev)} />
            <label className="text-lg font-[500]   text-white" htmlFor="charInput">Characters</label>
          </div>

        </div>

      </div>
 

  )
}

export default App