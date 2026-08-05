import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <div>
                <div>
                    <Image
                     src="/images/logo.png"
                     alt="School Logo"
                     width={80}
                     height={80}
                    />
                </div>
                <div>
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/school">School life</Link>
                  <Link href="/academics">Academics</Link>
                  <Link href="/gallery">Gallery</Link>
                </div>
            </div>

        </nav>
    )
}