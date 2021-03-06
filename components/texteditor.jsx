
import dynamic from 'next/dynamic';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState, useEffect } from 'react'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { db } from '../firebase';
import { useRouter } from "next/dist/client/router";
import { useSession } from 'next-auth/client';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';

//dynamic import for the model
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
  ssr: false,
}
)

function TextEditor() {

  const [session] = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const router = useRouter();
  const { id } = router.query;

  //get the doc contant from db 
  const [snapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  //load the previes from db
  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
    }
  }, [snapshot]);

  //update the file contant on the db on each click 
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id).set({
      editorState: convertToRaw(editorState.getCurrentContent())
    }, { merge: true })
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">

      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 bg-white shadow-lg max-w-4xl mx-auto mb-12 border p-10" />
    </div>
  )
}

export default TextEditor
