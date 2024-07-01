import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-black font-medium text-lg mt-12 mb-0 '>
            <div className='footer-div flex items-center text-black w-full p-32 py-8 justify-between'>
                <span>{new Date().getFullYear()}&nbsp;© All Rights Reserved.</span>
                <span> Built with <span className='text-[#B63E96] text-2xl px-1'>♡</span> by <Link href='https://balram-dhakad-portfolio.vercel.app'>Balram Dhakad</Link></span>
                <Link href='/' className=''>Imaginix</Link>
            </div>
        </footer>
    )
}

export default Footer