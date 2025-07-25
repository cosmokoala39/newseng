import { FileText } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CategorySideAd = () => {
  return (
    <div>
      <div className="overflow-hidden relative p-2">
        <div className="p-7 flex items-center rounded gap-7 bg-white" >
          <div className="flex flex-col items-center p-4 rounded-lg shadow-md w-fit space-y-4" style={{ backgroundColor: "#fcf3d9" }}>
           

            <p className="text-sm font-medium text-gray-900 text-center">
             The newspaper of <strong className="font-semibold">Wednesday, July 16, 2025</strong>
            </p>

            <div className="flex flex-col items-center space-y-2">
              <Image 
                alt="couverture journal" 
                width={170} 
                height={250} 
                src="/images/Sidebarad.png" 
                className="w-[170px] h-[250px] shadow-md" 
              />

              <button 
                type="button" 
                aria-label="Je m'abonne pour 1€" 
                className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-sm font-medium rounded hover:bg-yellow-500 transition text-gray-800" 
              >
                <FileText className="w-6 h-6"/>
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategorySideAd
