
 import "../styles/airmax.css"
 import Image from "next/image"




function AirMax(){
return(
<main>
    <div className="main">
      <div>
        {/*text div*/}
        <div className="heading">
          <h2>Best of Air Max</h2>
        <div className="flex items-end space-x-3">
        <h2>Shop</h2>
        <Image  src={"/images/rightarrow.png"}
         alt=" shop"
         width={48}
         height={48}
         className="main-image"
         />
        <Image  src={"/images/arrow.png"}
         alt=" shop"
         width={48}
         height={48}
         className="main-image"
         />
         </div>
        </div>
        {/*pics div*/}
        <div className="cont-prod" >
            <div>
                <div className="product-image ">
                    <Image src={"/images/men.png"} alt="product" width={420} height={420}></Image>
                </div>
                {/*image title*/}
                    <div className="flex flex-col">
                    <div className=" flex justify-between mt-2 "> 
                    <span className="text-black font-semibold text-[15px]"> Nike Air Max pulse  </span>
                    <span className="font-semibold  mr-6">₹ 13 995</span>
                    </div>
                    <span className="text-slate-400 text-[15px]">Women's Shoes  </span>
                    </div>
                </div>
                <div>
                    <div className="product-image ">
                        <Image src={"/images/women.png"} alt="product" width={420} height={420}></Image>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                    <div className="justify-between mt-2 "> 
                    <span className="text-black font-semibold text-[15px]">Nike Air Max pulse </span>
                    <span className="font-semibold ml-56">₹13 995</span>
                    </div>
                    <span className="text-slate-400 text-[15px]">Mens's Shoes </span>
                    </div>
                    </div>
                    <div>
                    <div className="product-image ">
                        <Image src={"/images/nike.png"} alt="product" width={420} height={420}></Image>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                    <div className=" flex justify-between mt-2 "> 
                    <span className="text-black font-semibold text-[15px]">Nike Air Max 97 SE </span>
                    <span className="font-semibold mr-6">₹ 16 995</span>
                    </div>
                    <span className="text-slate-400 text-[15px]">Mens's Shoes </span>
                    </div>
                </div>
        </div>
      </div>
    </div>
</main>
)
}
export default AirMax 