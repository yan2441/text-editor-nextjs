
import Icon from "@material-tailwind/react/Icon";
import { useCollectionOnce } from "react-firebase-hooks/firestore"
import { db } from "../firebase";
import DocumentRow from './DocumentRow';



function Recent({ session }) {
  const [snapshot] = useCollectionOnce(
    db.collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .orderBy("timestamp", "desc")
  );
  return (
    <section className="px-0 bg-white md:px-0">
      <div className="max-w-3xl py-8 mx-auto">
        <div className="flex items-center justify-between px-4 pb-4">
          <h2 className="flex-grow font-medium">Recent documents</h2>
          <p className="mr-8 font-light">Creation date</p>
          <Icon name="folder" size="2xl" color="gray" />
        </div>

        {snapshot?.docs.map(doc => {
          return <DocumentRow
            key={doc.id}
            id={doc.id}
            fileName={doc.data().filename}
            date={doc.data().timestamp}
          ></DocumentRow>
        })}
      </div>
    </section>
  )
}

export default Recent
