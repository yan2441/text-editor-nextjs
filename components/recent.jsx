
import Icon from "@material-tailwind/react/Icon";


function Recent() {
  return (
    <section className="px-10 bg-white md:px-0">
      <div className="max-w-3xl py-8 mx-auto">
        <div className="flex items-center justify-between pb-5">
          <h2 className="flex-grow font-medium">My files</h2>
          <p className="mr-12">Creation date</p>
          <Icon name="folder" size="3xl" color="gray" />
        </div>
      </div>
    </section>
  )
}

export default Recent
