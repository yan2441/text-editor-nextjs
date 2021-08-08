import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../../firebase";
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { useSession, signOut, getSession } from 'next-auth/client';
import Login from './../../components/login';
import TextEditor from "../../components/texteditor";

function Doc() {
  //check session or redirect to login
  const [session] = useSession();
  if (!session) return <Login />

  //get the id of file from url
  const router = useRouter();
  const { id } = router.query;

  //serch by id of doc 
  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  //check for security
  if (!loadingSnapshot && !snapshot?.data()?.filename) {
    router.replace("/");
  }

  return (
    <div>
      <header className="flex items-center justify-between p-3 pb-1">
        <span onClick={() => router.push("/")}
          className="cursor-pointer">
          <Icon name="description" size="3xl" color="blue" />
        </span>

        <div className="flex-grow px-2">
          <h2>{snapshot?.data()?.filename}</h2>
          <div className="flex items-center h-8 -ml-1 space-x-1 text-sm text-gray-600">
            <p className="option">file</p>
            <p className="option">edit</p>
            <p className="option">view</p>
            <p className="option">insert</p>
            <p className="option">format</p>
            <p className="option">tools</p>
          </div>
        </div>

        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          className="hidden h-10 md:inline-flex"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
        >
          <Icon name="people" size="md" /> SHARE
        </Button>

        <img className="w-10 h-10 ml-2 rounded-full cursor-pointer" src={session.user.image}
          alt="profile pic"
          onClick={signOut} />
      </header>

      <TextEditor />
    </div>
  )
}

export default Doc

//implement SSR to remove lags
export async function getServerSideProps(context) {
  const session = await getSession(context);


  return {
    props: {
      session,
    },
  }
}