import Image from 'next/image'
import React from 'react'

const CategorySideAd_2 = () => {
  return (
    <div>
      <div className="overflow-hidden relative p-0.5">
        
          <div className="flex flex-col items-center p-4 rounded-lg shadow-md w-fit space-y-4" >
            <Image 
                alt="couverture journal" 
                width={300} 
                height={300} 
                src="/images/SidebarAd2.webp" 
                className="w-[300px] h-[300px] shadow-md" 
              />        
        </div>
      </div>
    </div>
  )
}

export default CategorySideAd_2
