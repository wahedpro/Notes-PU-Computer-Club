import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Link } from "react-router-dom"

const Navbar = () => {
  useGSAP(()=>{
    gsap.from(".navbar",{
      y:-60,
      delay:1,
      duration:0.5,
      opacity:0
    })
  })
  return (
    <div className='navbar w-[90%] bg-white sticky top-0  mx-auto flex items-center justify-between pt-4 pb-2'>
        <Link to="/"><img className="w-[125px]" src="./logo.png" alt="" /></Link>
        <div className='flex gap-10 border-b py-2 px-5 rounded-2xl border-gray-200'>
            <Link to="/">Home</Link>
            <Link>Notes</Link>
            <Link>Video</Link>
            <Link>Memory</Link>
        </div>
        <Link to="/login" className="bg-[#3b3ffb] text-white px-5 py-2 rounded-4xl">Login</Link>
    </div>
  )
}

export default Navbar