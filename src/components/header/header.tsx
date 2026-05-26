import Link from "next/link";
import  Navbar  from "@/components/header/navbar";
import style from '@/components/header/header.module.css';


export default function Header() {
  return (
    <header className={style.header}>
      <Navbar />
      <div className={style.right}>
        <Link className={style.btn} href={"/login"}> login</Link>
        <Link className={style.btn} href={"/register"}> register </Link>
      </div>
    </header>
  );
}
