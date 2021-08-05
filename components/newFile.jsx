import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from 'next/image'

function NewFile() {
  return (
    <section className="bg-[#F8F9FA] pb-10 px-10">
      <div className="max-w-3xl mx-auto">

        {/* text & option button */}
        <div className="flex items-center justify-between py-6">
          <h2 className="text-lg text-gray-700">create new docemnt</h2>

          <Button
            color="gray"
            buttonType="outline"
            iconOnly={true}
            ripple="dark"
            className="border-0"
          >
            <Icon name="more_vert" size="3xl" />
          </Button>
        </div>

        {/* div for new doc */}
        <div className="relative w-40 border-2 cursor-pointer h-52 hover:border-blue-700">
          <Image src='http://links.papareact.com/pju' layout='fill' />
        </div>
        <p className="mt-2 ml-2 text-sm font-semibold text-gray-700">Blank</p>
      </div>
    </section>
  )
}

export default NewFile
