import Image from 'next/image'

let x = "Hello World"
function testFunction() {
    return x
}
export default function contact() {
    return (
        <div>
            <div className="topnav" id="myTopnav">
                <a href="#home" className="active" >Home</a>
                <a href="#opportunities">Opportunities</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" className="icon">
                    <i className="fa fa-bars"></i>
                </a>
            </div>

            <main>
            </main>
            <h1>Contact page</h1>
            <footer>

            </footer>
        </div>
    )
}