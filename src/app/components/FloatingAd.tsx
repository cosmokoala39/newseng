import Image from "next/image";

export default function FloatingAd () {
    return(
        <div className="sticky top-24">
            <div className="overflow-hidden relative p-0.5">
                    
                      <div className="flex flex-col items-center p-8 w-fit space-y-4" >
                        <Image
                            alt="couverture journal" 
                            width={300} 
                            height={300} 
                            src="/images/SidebarAd2.jpg" 
                            className="w-[300px] h-[300px] shadow-md" 
                          />        
                    </div>
                  </div>
        </div>
    )
}