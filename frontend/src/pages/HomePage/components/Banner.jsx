import { Link } from 'react-router-dom'

const Banner = () => {
  return (
   <div className="w-[100%] flex flex-col items-center gap-3 py-30">
        <p className='border px-2 rounded-4xl border-gray-200'>Your Personal Digital Notebook</p>
        <h3 className='text-center text-4xl mb-5'>Organize <span className='text-[#3b3ffb]'>tasks</span>, ideas, and inspiration — all in <span className='text-[#3b3ffb]'>one</span> place. <br /> Productivity has never looked this <span className='text-[#3b3ffb]'>good</span>.</h3>
        <Link to="" className="bg-[#0d0d1f] text-white px-5 py-2 rounded-4xl">Get Started</Link>
    </div>
  )
}

export default Banner