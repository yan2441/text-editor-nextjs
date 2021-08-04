import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center px-4 py-2 bg-white shadow-md">

      <Button
        color="blue"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="w-20 h-20 border-0 "
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="3xl" color="blue" />
      <h1 className="ml-2 text-2xl text-gray-700 "></h1>
    </div>
  )
}

export default Header
