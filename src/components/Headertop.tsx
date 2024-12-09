import Image from "next/image"
import "../styles/headertop.css"
 
import Link from "next/link"
   
export default function HeaderTop(){
  return(
     <main>
     <div className="main-header">
    <Image 
      src="/images/Frame.png"
      width={24} 
      height={24}
      alt="Logo" 
      className="logo" 
    />
     <Link className="link-home "href={"/"}> Skip to main content</Link>
      <ul className="header-links">
      <li><a href="storepage">Find a Store</a></li>
      <li><span>|</span></li>
      <li><a href="#">Help</a></li>
      <li><span>|</span></li>
      <li><a href="joinus">Join Us</a></li>
      <li><span>|</span></li>
      <li><a href="signin">Sign In</a></li>
    </ul>
  </div>
 </main>
  )
  



}