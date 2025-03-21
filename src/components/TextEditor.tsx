import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from "../firebase-config";
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {

    const quillRef = useRef<ReactQuill>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const isLocalChange = useRef(false);

    const documentRef = doc(db, "documents", "sample-doc");
    const saveContent = () => {
        if(quillRef.current && isLocalChange.current) {
            const content = quillRef.current.getEditor().getContents();
            console.log('saving content to db: ', content);

            setDoc(documentRef, {content: content.ops}, {merge: true})
            .then(() => console.log("Content saved"))
            .catch(console.error);
            isLocalChange.current = false;
        }
    }

    useEffect(() => {
        if(quillRef.current) {
            //Load initial content from Firestore DB
            
            getDoc(documentRef).then((docSnap) => {
                if(docSnap.exists()) {
                    const savedContent = docSnap.data().content;
                    if(savedContent && quillRef.current) {
                        quillRef.current.getEditor().setContents(savedContent);
                    }
                } else {
                    console.log("No doc found, starting with an empty editor.");
                }
            })
            .catch(console.error);
            //Listen to Firestore for any updates und update locally in real-time

            //Listen for Local text changes and save it to Firestore
            const editor = quillRef.current.getEditor();
            editor.on("text-change", (delta: unknown, oldContents: unknown, source: string) => {
                if(source === "user") {
                    isLocalChange.current = true;
                    setIsEditing(true);
                    saveContent();
    
                    setTimeout(() => setIsEditing(false), 5000);
                }
            });

        }
    }, [])

    return (  
        <div className="google-docs-editor">
            <ReactQuill ref={quillRef} />
        </div>
    );
}
 
export default TextEditor;