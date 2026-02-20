"use client";
import { MouseEvent, useEffect } from "react";
import { TogleModal } from "@/type/type";
import CloseIcon from "./icons/CloseIcon";
import { menuList } from "@/data/menuList";
import Link from "next/link";

const BurgerMenu = ({ togleModal }: TogleModal) => {
  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      togleModal();
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePressESC = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      togleModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlePressESC);
    return () => {
      document.removeEventListener("keydown", handlePressESC);
    };
  }, [handlePressESC]);

  return (
    <div
      className="fixed p-10 right-0 top-0 z-40 h-screen w-[70%] bg-paper bg-opacity-40"
      onClick={handleOverlayClick}
    >
      <button
        className=" transition-all duration-300 hover:text-gold "
        type="button"
        onClick={togleModal}
      >
        <CloseIcon />
      </button>
      <h2 className="text-center">Євангеліє</h2>
      <ul className="not-last:mb-10 ">
        {menuList.map(({title, href, id}) => <li key={id} className=" transition-all duration-300 hover:text-gold focus:text-gold">
{title}<Link href={href}></Link>
        </li>)}
      </ul>
    </div>
  );
};

export default BurgerMenu;
