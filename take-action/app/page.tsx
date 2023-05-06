<<<<<<< HEAD
import LoginSignup from './components/loginSignup';
import Link from 'next/link';
=======
import Image from 'next/image'
import Link from 'next/link'
>>>>>>> 936ac9d49822045795b3e8936987f80f2afa09d1

let x = "Hello World"
function testFunction() {
  return x
}
export default function Home() {
  return (
<<<<<<< HEAD
    <div>
      <div className="topnav" id="myTopnav">
        <a href="/" className="active" >Home</a>
        <a href="#opportunities">Opportunities</a>
        <Link href="/contact">Contact</Link>
        <a href="#about">About</a>
        <a href="javascript:void(0);" className="icon">
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <LoginSignup />
      <main>
      </main>

      <footer>

      </footer>
    </div>
=======
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


>>>>>>> 936ac9d49822045795b3e8936987f80f2afa09d1
  )
}
