import Link from "next/link";
import Image from "next/image";

const Header = () =>{
    return(
<header className="container rounded-b-xl bg-black">
    <div className=" py:[30px] flex justify-between align-baseline">
    <Link href={'/'} className="">
    <Image src={'/лого.svg'} width={80} height={50} alt="logo">
        </Image>
        </Link>
        <div className="text-white border-2 rounded-4xl flex border-white px-2 justify-center items-center">
        <Link href={'https://www.youtube.com/@slovovslovoua'} rel="noopener noreferrer" target='_blank'>
        Слухай нас на <span className="text-red-600 text-xl">YouTube</span></Link>
        </div>
        </div>
</header>
    )
} ;
 
export default Header
