import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useSession, signOut } from "next-auth/client";

function Header() {
  const [session] = useSession();
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 bg-white shadow-md">

      {/* menu & logo  */}
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="w-20 h-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="3xl" color="blue" />
      <h1 className="hidden ml-2 text-2xl text-gray-700 md:inline-flex ">Docs</h1>

      {/* search bar */}
      <div className="flex items-center flex-grow px-5 py-2 mx-3 text-gray-600 bg-gray-100 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray" />
        <input type="text" placeholder="Search" className="flex flex-grow px-5 text-base bg-transparent outline-none" />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden w-20 h-20 ml-5 border-0 md:inline-flex md:ml-20"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>

      <img
        loading="lazy"
        src={session?.user?.image}
        alt="profile pic"
        onClick={signOut}
        className="w-12 h-12 ml-2 rounded-full cursor-pointer"
      />
    </header>
  )
}

export default Header
