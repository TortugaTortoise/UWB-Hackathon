import Image from 'next/image'

let x = "Hello World"
function testFunction()
{
  return x
}
export default function Home() {
  return (
<div> 
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active" >Home</a>
      <a href="#opportunities">Opportunities</a>
      <a href="Contac.tsx">Contact</a>
      <a href="#about">About</a>
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
