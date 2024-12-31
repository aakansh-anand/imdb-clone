import Link from "next/link";
import { IconType } from "react-icons";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
}
const MenuItem = ({ title, address, Icon }: MenuItemProps) => {
  return (
    <div>
      <Link href={address} className=" hover:text-amber-600">
        <Icon className="text-2xl sm:hidden" />
        <span className="my-2 hidden text-sm sm:inline">{title}</span>
      </Link>
    </div>
  );
};
export default MenuItem;
