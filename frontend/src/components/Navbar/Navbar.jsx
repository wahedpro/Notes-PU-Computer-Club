import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='w-[90%] bg-white sticky top-0  mx-auto flex items-center justify-between pt-4 pb-2'>
        <Link to="/"><img className="w-[125px]" src="./logo.png" alt="" /></Link>
        <div className='flex gap-10 border-b py-2 px-5 rounded-2xl border-gray-200'>
            <a href="">Home</a>
            <a href="">Notes</a>
            <a href="">Video</a>
            <a href="">Memory</a>
        </div>
        <Link to="/registration" className="bg-[#3b3ffb] text-white px-5 py-2 rounded-4xl">Registration</Link>
    </div>
  )
}

export default Navbar