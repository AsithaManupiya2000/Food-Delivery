import React from 'react'

const SpecialOffer = () => {
  return (
    <div className=' bg-gradient-to-b from-[#1a1212] to-[#2a1e1e] text-white py-16 px-4 font-[Popping]'>
        <div className=' max-w-7xl mx-auto'>
            <div className=' text-center mb-14'>
                <h1 className=' text-5xl font-bold mb-4 transform transition-all bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text
                 text-transparent font-[Playfair_Display] italic'>
                    Today's <span className=' text-stroke-gold'>Special</span> Offers
                </h1>
                <p className=' text-lg text-gray-300 max-w-3xl mx-auto tracking-wide leading-relaxed'>
                    Savour the extraordinary with our culinary masterpieces crafted to prefection
                </p>
            </div>
        </div>
    </div>
  )
}

export default SpecialOffer