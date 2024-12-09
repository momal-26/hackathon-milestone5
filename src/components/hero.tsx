 
 import "../styles/hero.css"
 import Image from "next/image"
 
 
 export default function Hero(){
    return(
<main>
<div className="h-[1000px] w-[1344px] mt-20px ml-10" >
   <div className=" items-center justify-center">
    <div>
        <h1 className="text-[15px] text-center leading-4 mt-5">Hello Nike App</h1>
        <p className="text-[11px] text-center leading-5">Download the app to access everything Nike. Get Your Great</p>
          </div>  
          <div className="ml-20px mr-20px">
          <Image src={"/images/Image.png"}
          alt=" hero"
          width={1300}
          height={700}
          />
          </div>
          <div className="mt-10">
            <h2 className="text-[15px] text-center">First Look</h2>
            <h2 className=" text-[56px] text-center leading-9 mt-5">Nike Air Max Pulse</h2>
            <p className="text-[15px] text-center mt-5">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br/>
            designed to push you past your limits and help you go to the max.</p>
          </div>
          <div className="buttons">
           <button className="button">Notify Me</button>
          <button className="button">Shop Air Max</button>
         </div>
  </div>
</div>
</main>
    )
}