import { FaSortDown } from "react-icons/fa";
import Image from "next/image";
import "../styles/stores.css"
 
 
 
 export default  function FindStore(){
    return(
      <div>
        <div>
        <div className="header">
            <div className="header-left">
                <span className="new-text">New</span>
                <span className="count">(500)</span>
            </div>
            <div className="header-right">
                <span className="hide-filters">Hide Filters</span>
                <Image src={"/images/filtericon.jpg"} alt="filter icon" width={24} height={24} className="icon" />
                <span className="sort-by">Sort By</span>
                <FaSortDown className="icon" />
            </div>
        </div>
        {/*product images*/}
        <div>
        <div className="flex flex-row justify-center space-x-3 mt-5" >
            <div>
                <div>
                    <Image src={"/images/r1.png"} alt="product" width={348} height={348}/>
                </div>
                {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Air Force 1 Mid '07 </span>
                        <span className="text-slate-400 mr-6">Men's Shoes</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 10 795.00</span>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={"/images/r2.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Court Vision Low Next Nature </span>
                        <span className="text-slate-400 mr-6">Men's Shoes</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 4 995.00</span>
                     </div>
                </div>
                 <div>
                    <div>
                        <Image src={"/images/r3.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Air Force 1 PLT.AF.ORM </span>
                        <span className="text-slate-400 mr-6">Women's Shoes</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 8 695.00</span>
                     </div>
                </div>
            </div>
             <div className="flex flex-row justify-center space-x-3 mt-5">
                <div>
                    <div>
                        <Image src={"/images/r4.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Air Force 1 React </span>
                        <span className="text-slate-400 mr-6">Men's Shoes</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 13 295.00</span>
                     </div>
                </div>
                <div>
                    <div>
                        <Image src={"/images/r5.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Promo Exclusion </span>
                        <span className="text-black font-semibold text-[15px]">Nike Court Vision Low Next Nature </span>
                        <span className="text-slate-400 mr-6">Men's Shoes</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 4 995.00</span>
                     </div>
                  </div>
                  <div>
                    <div>
                        <Image src={"/images/r6.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Standard Issue</span>
                        <span className="text-slate-400 mr-6">Women's Basketball Jersey</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 2 895.00</span>
                     </div>
                </div>
            </div> 
             <div className="flex flex-row justify-center space-x-3 mt-5">
                <div>
                    <div>
                        <Image src={"/images/r7.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Promo Exclusion </span>
                        <span className="text-black font-semibold text-[15px]">Nike Dunk Low Retro SE </span>
                        <span className="text-slate-400 mr-6">Men's Shoes</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 9 695.00</span>
                     </div>
                </div> 
                <div>
                    <div>
                        <Image src={"/images/r8.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Sustainable Materials</span>
                        <span className="text-black font-semibold text-[15px]">Nike Dri-FIT UV Hyverse </span>
                        <span className="text-slate-400 mr-6">Men's Short-Sleeve Graphic Fitness Top</span>
                        <span className="text-slate-400 text-[15px]">3 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 2 495.00</span>
                     </div>
                </div> 
                  <div>
                    <div>
                        <Image src={"/images/r9.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Court Vision Low </span>
                        <span className="text-slate-400 mr-6">Men's Shoes</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 5 695.00</span>
                     </div>
                </div>
            </div>
            <div className="flex flex-row justify-center space-x-3 mt-5">
                  <div>
                    <div>
                        <Image src={"/images/r10.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Dri-FIT Ready </span>
                        <span className="text-slate-400 mr-6">Men's Short-Sleeve Fitness Top</span>
                        <span className="text-slate-400 text-[15px]">2 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 2 495.00</span>
                     </div>
                </div> 
                 <div>
                    <div>
                        <Image src={"/images/r11.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike One Leak Protection:Period</span>
                        <span className="text-slate-400 mr-6">Women's Mid-Rise 18cm (approx.) Biker Short</span>
                        <span className="text-slate-400 text-[15px]">2 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 3 395.00</span>
                     </div>
                </div>
                  <div>
                    <div>
                        <Image src={"/images/r12.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Air Force 1 LV8 3 </span>
                        <span className="text-slate-400 mr-6">kids's Shoes</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 7 495.00</span>
                     </div>
                </div>
             </div>
             <div className="flex flex-row justify-center space-x-3 mt-5">
                 <div>
                    <div>
                        <Image src={"/images/r13.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Blazer Low Platform </span>
                        <span className="text-slate-400 mr-6">Women's Shoes</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 8 195.00</span>
                     </div>
                </div>
                 <div>
                    <div>
                        <Image src={"/images/r14.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Pro Dri-FIT </span>
                        <span className="text-slate-400 mr-6">Men's Tight-Fit Sleeveless Top</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP:₹ 1 495.00</span>
                     </div>
                </div> 
                 <div>
                    <div>
                        <Image src={"/images/r15.png"} alt="product" width={348} height={348}/>
                    </div>
                    {/*image title*/}
                    <div className="flex flex-col">
                        <span className="text-[#9E3500] font-semibold text-[15px]"> Just in </span>
                        <span className="text-black font-semibold text-[15px]">Nike Dunk Low Retro </span>
                        <span className="text-slate-400 mr-6">Women's Shoes</span>
                        <span className="text-slate-400 text-[15px]">1 Colour</span>
                        <span className="text-slate-400 text-[15px]">MRP : ₹ 8 695.00</span>
                     </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
 };