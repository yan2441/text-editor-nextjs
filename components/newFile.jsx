import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Image from 'next/image'
import { useState } from "react";
import { db } from "../firebase";
import firebase from 'firebase';


function NewFile({ session }) {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");

  const createDocument = () => {
    if (!input) return;

    db.collection('userDocs').doc(session.user.email).collection("docs").add({
      filename: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput("");
    setShowModal(false);
  };

  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full outline-none"
          placeholder="Enter name of document..."
          onKeyDown={(e) => e.key === 'Enter' && createDocument()}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="blue"
          buttonType="link"
          onClick={() => setShowModal(false)}
          ripple="dark"
        >Cancel
        </Button>

        <Button
          color="blue"
          onClick={createDocument}
          ripple="light"
        >Create</Button>
      </ModalFooter>
    </Modal>
  )
  return (

    <section className="bg-[#F8F9FA] pb-10 px-10">
      {modal}
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
        <div onClick={() => setShowModal(true)} className="relative w-40 border-2 cursor-pointer h-52 hover:border-blue-700">
          <Image src='http://links.papareact.com/pju' layout='fill' />
        </div>
        <p className="mt-2 ml-2 text-sm font-semibold text-gray-700">Blank</p>
      </div>
    </section>
  )
}

export default NewFile
