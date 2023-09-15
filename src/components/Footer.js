import Image from "next/image"

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerImages">
        
       <a href="">
       <Image src='/images/instagram.png' width={20} height={20}/>
       </a>
       <a href="">
       <Image src='/images/facebook.png' width={20} height={20}/>
       </a>
       <a href="">
       <Image src='/images/twitter.png' width={20} height={20}/>
       </a>
       <a href="">
       <Image src='/images/youtube.png' width={20} height={20}/>
       </a>
      </div>
    <div className="footerNav">
        <h2>Conditions of Use</h2>
        <h2>Privacy & Policy</h2>
        <h2>Press Room</h2>
    </div>
    <div>
        <h2>
        © 2023 MovieBox by Nizam Shahr 
        </h2>
    </div>
    </div>
  )
}

export default Footer
