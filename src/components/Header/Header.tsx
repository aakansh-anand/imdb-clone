import Link from "next/link";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-10 py-5">
      <div className="flex gap-5">
        <MenuItem title="Home" address="/" Icon={FaHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="">
        <Link href={"/"} className="">
          <h2 className="flex items-center gap-2 text-2xl">
            <span className="rounded-lg bg-amber-500 px-2 py-1 font-bold">
              IMDb
            </span>
            <span className="hidden text-xl sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </header>
  );
};
export default Header;
