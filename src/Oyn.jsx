import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Omborchi from "./Omborchi";
import { Link } from "react-router-dom";

function Oyn() {

    const dicpach=useDispatch();
const {tanlangan, harflar, xatolarsoni, aler }=useSelector(a=>a);

const arr=tanlangan;


useEffect(()=>{
    document.addEventListener('keypress', (k)=>{
        Klik(k.key)
    }),
    dicpach(Omborchi.actions.tanlandi());
},[])

function Klik(a){
    dicpach(Omborchi.actions.bosildi(a));
};
if (xatolarsoni==0) {
    dicpach(Omborchi.actions.tanlandi());
}
function Alrt(){
    dicpach(Omborchi.actions.aler());
}

function New(){
    Alrt();
    dicpach(Omborchi.actions.tanlandi());
}


  return (
    <div className="w-full pt-[60px] flex flex-col gap-5 items-center">
        <div className="flex justify-between w-full px-[112px] mb-[88px]">
            <div className="flex gap-[57px]">
            <img src="./menu.svg" width={94} alt="" className='cursor-pointer' onClick={Alrt}/>
            <h2 className="text-[88px] text-white font-normal fon">Countries</h2>
            </div>
            <h2 className="text-white h-10 rounded-full bg-red-500 px-3 py-2">{xatolarsoni}</h2>
        </div>
        <div className=" flex gap-5 flex-wrap justify-center">
        {
            arr.map(a=>{
                return <h2 className={`w-[112px] h-[128px] bg-[#2463FF] text-[#2463FF] opacity-90 flex justify-center items-center text-[88px] fon font-normal  rounded-md ${a.aniqlangan ? 'text-white':''}`}>{a.belgi}</h2>
            })
        }
        </div>


        
        <div className=" flex gap-5 w-[600px] justify-center flex-wrap">
        {
            harflar.map(a=>{
                return <h2 className={`w-10  text-center rounded-md text-[#261676] cursor-pointer  bg-white ${a.aniqlangan ? 'opacity-25':''}  ${a=='A'  ? 'ml-5':'' } ${a=='L' ? 'mr-5':'' }`}  onClick={()=>Klik(a.belgi)}>{a.belgi}</h2>
            })
        }
        </div>


        <div className={`absolute w-full h-[100vh] top-0 bg-[#282c967c] justify-center pt-32  ${aler ? 'flex':'hidden'}`}>
            <div className="w-[592px] h-[445px] bg-[#2463FF] rounded-[72px] flex flex-col items-center ">
                <img src="./Paused.png" alt=""  className="mt-[-50px]"/>
                <div className="flex flex-col gap-5 pt-20">
                <button className="px-8 py-1 text-white bg-[#4c4e4cba] rounded-full text-[32px]" onClick={Alrt}>CONTINUE</button>
                <button className="px-8 py-1 text-white bg-[#4c4e4cba] rounded-full text-[32px]" onClick={New}>NEW GAME</button>
                <Link to={'/'} className="grid"><button className="px-8 py-1 text-white bg-[#4c4e4cba] rounded-full text-[32px]">QUIT</button></Link>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Oyn