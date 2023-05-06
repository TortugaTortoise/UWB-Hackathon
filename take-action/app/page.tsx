import Image from 'next/image'
import Link from 'next/link'

let x = "Hello World"
function testFunction()
{
  return x
}
export default function Home() {
  return (
<div> 
    <div className="topnav" id="myTopnav">
      <link href="#home" className="active" >Home</link>
      <link href="#opportunities">Opportunities</link>
      <link href="/contact">Contact</link>
      <link href="#about">About</link >
      <a href="javascript:void(0);" className="icon" onClick={testFunction()}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
      
    <main> 
    </main>

    <footer> 
        
    </footer>
</div>


  )
}
