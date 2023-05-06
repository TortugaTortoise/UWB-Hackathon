import LoginSignup from './components/loginSignup';
import Link from 'next/link';

let x = "Hello World"
function testFunction() {
  return x
}
export default function Home() {
  return (
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
  )
}
