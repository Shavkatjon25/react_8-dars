import { Link } from "react-router-dom"


function Yon() {
  return (
    <div>
        <div className="flex flex-col items-center pt-20 gap-10">
        <div className="flex gap-[288px] w-[1212px] h-[100px]">
                <Link to={'/'}> <img src="./orqaga.svg" alt="" /></Link>
                <img src="./picc.svg" alt="" />
            </div>
            <div className="grid grid-cols-3 grid-rows-2 w-[1216px] gap-8  h-[430px]">
                <Link to={'/oyn'} className="grid"><button className="text-white bg-[#2463FF] text-[48px] fon font-normal rounded-3xl">MOVIES</button></Link>    
                <Link to={'/oyn'} className="grid"><button className="text-white bg-[#2463FF] text-[48px] fon font-normal rounded-3xl">TV SHOWS</button></Link> 
                <Link to={'/oyn'} className="grid"><button className="text-white bg-[#2463FF] text-[48px] fon font-normal rounded-3xl">COUNTRIES</button></Link> 
                <Link to={'/oyn'} className="grid"><button className="text-white bg-[#2463FF] text-[48px] fon font-normal rounded-3xl">CAPITAL CITIES</button></Link> 
                <Link to={'/oyn'} className="grid"><button className="text-white bg-[#2463FF] text-[48px] fon font-normal rounded-3xl">ANIMALS</button></Link> 
                <Link to={'/oyn'} className="grid"><button className="text-white bg-[#2463FF] text-[48px] fon font-normal rounded-3xl">SPORT</button></Link> 
            </div>
        </div>
    </div>
  )
}

export default Yon