import Link from "next/link"

export default function navBar() {
    return (
        <div className="topnav" id="myTopnav">
            <Link href="/" className="active" >Home</Link>
            <Link href="/opportunities">Opportunities</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
            <Link href="javascript:void(0);" className="icon">
                <i className="fa fa-bars"></i>
            </Link>
        </div>
    )
}