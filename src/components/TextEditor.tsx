import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { setDoc, doc } from 'firebase/firestore';
import { db } from "../firebase-config";

const TextEditor = () => {

    const quillRef = useRef<ReactQuill>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const documentRef = doc(db, "documents", "sample-doc");
    const saveContent = () => {
        if(quillRef.current) {
            const content = quillRef.current.getEditor().getContents();
            console.log('saving content to db: ', content);

            setDoc(documentRef, {content: content.ops}, {merge: true}).then(() => console.log("Content saved"))
            .catch(console.error);
        }
    }

    useEffect(() => {
        if(quillRef.current) {
            //Load initial content from Firestore DB
            
            //Listen to Firestore for any updates und update locally in real-time

            //Listen for Local text changes and save it to Firestore
            const editor = quillRef.current.getEditor();
            editor.on("text-change", () => {
                setIsEditing(true);
                saveContent();

                setTimeout(() => setIsEditing(false), 5000);
            })

        }
    }, [])

    return (  
        <div className="google-docs-editor">
            <ReactQuill ref={quillRef} />
        </div>
    );
}
 
export default TextEditor;