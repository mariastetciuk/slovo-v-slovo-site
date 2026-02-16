'use client'
import { useState } from "react"
import BurgerMenuIcon from "./icons/BurgerMenuIcon"
import BurgerMenu from "./BurgerMenu";

const BtnOpenMenu = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const togleModal = () => setIsShowMenu((pref) =>!pref)


    return (
        <div>
        <button type="button" className="text-paper transition-all duration-300 hover:text-gold" onClick={togleModal} aria-label="open menu">
            <BurgerMenuIcon/>
        </button>
{isShowMenu && <BurgerMenu togleModal={togleModal}/>}
        </div>
    )
}
export default BtnOpenMenu