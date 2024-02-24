import { Link } from "react-router-dom"


function Bosqich() {
  return (
    <div>
        <div className="flex flex-col items-center">
            <div className="flex gap-[288px] w-[1212px] h-[100px] mt-5">
                <Link to={'/'}><img src="./orqaga.svg" alt="" /></Link>
                <img src="./How.svg" alt="" />
            </div>
            <div className="flex gap-8 justify-center">
              
                    <div className="bg-white w-[384px] text-center p-5 py-[55px]  rounded-2xl">
                        <h2 className="text-[#2463FF] text-[88px] font-normal fon">01</h2>
                        <h2 className="text-[#261676] text-[48px] font-normal fon my-7 ">Choose a category</h2>
                        <p className="text-[#887DC0] text-[26px] font-normal fon px-12">First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</p>
                    </div>
                
                    <div className="bg-white w-[384px] text-center p-5 py-[55px]  rounded-2xl">
                        <h2 className="text-[#2463FF] text-[88px] font-normal fon">02</h2>
                        <h2 className="text-[#261676] text-[48px] font-normal fon my-7 ">Guess letters</h2>
                        <p className="text-[#887DC0] text-[26px] font-normal fon px-12">Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If its wrong, you lose some health, which empties after eight incorrect guesses.</p>
                    </div>
                <div className="bg-white w-[384px] text-center p-5 py-[55px]  rounded-2xl">
                    <h2 className="text-[#2463FF] text-[88px] font-normal fon">03</h2>
                    <h2 className="text-[#261676] text-[48px] font-normal fon my-7 ">Win or lose</h2>
                    <p className="text-[#887DC0] text-[26px] font-normal fon px-12">You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Bosqich