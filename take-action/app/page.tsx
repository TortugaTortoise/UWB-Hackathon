import logo from './img/logo.png'
import sponsor1 from './img/vwlogofull.svg'
import sponsor2 from './img/logo_black.png'
import sponsor3 from './img/th.jpg'
import Image from 'next/image'
import './homePage.css'

export default function Home() {
  return (

    <div className='homePage py-5 mx-auto'>
      <header className='homePage__header flex text-lg items-center'>
        <div className='homePage__header__content'>
          <h1 className='text-5xl my-10'>TakeAction</h1>
          <p>TakeAction is platform help connect volunteers with activities around neighborhood</p>
        </div>
        <Image src={logo} alt="logo" />
      </header>
      <div className="HomePage__partners mt-10">
        <h2 className='text-3xl'>Our partner</h2>
        <div className="homePage__partners flex px-5 py-10 justify-evenly mt-5">
          <Image src={sponsor2} alt="" />
          <Image src={sponsor3} alt="" />
        </div>
      </div>
    </div>

  )
}
