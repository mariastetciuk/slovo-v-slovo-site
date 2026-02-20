import Link from "next/link";
import Image from "next/image";
import BtnOpenMenu from "./BtnOpenMenu";

const Header = () =>{
    return(
<header className="container  bg-black shadow-amber-400 shadow">
    <div className=" py:[30px] flex justify-between items-center">
    <Link href={'/'} className="">
    <Image src={'/лого.svg'} width={70} height={50} alt="logo"/>
        </Link>
        <a className="mt-2 text-paper border-2 py-2 rounded-4xl border-paper text-center leading-4 w-31.25 h-13" href={'https://www.youtube.com/@slovovslovoua'} rel="noopener noreferrer" target='_blank'>
        Слухай нас на <span className="text-gold ">YouTube</span></a>
       <BtnOpenMenu />
        </div>
</header>
    )
} ;
 
export default Header
