import { navItemsRight, navItemsLeft } from "./NavItems.js";
import NavBarList from "./navBarList.js";

function NavBar() {
  return (
    <nav className="h-16 bg-tmdbDarkBlue flex justify-between font-semibold gap-1 items-center text-white max-w-[1400px] mx-auto px-10">
      <NavBarList items={navItemsRight} />
      <NavBarList items={navItemsLeft} />
    </nav>
  );
}
export default NavBar;
