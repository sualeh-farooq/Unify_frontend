// // Quill Text Editor
// "use client"
// import "react-quill/dist/quill.snow.css";
// import dynamic from "next/dynamic";
// import { useState } from "react";
// const QuillNoSSRWrapper = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });

// const modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ size: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     ["link", "image"],
//     ["clean"],
//   ],
//   clipboard: {
//     matchVisual: false,
//   },
// };

// export default function Editor({value , onChange}) {
//   // const [value, setValue] = useState(initialText);

//   function handleChange(newValue) {
//     setValue(newValue);
//   }

//   function submitHandler(event) {
//     event.preventDefault();
//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <QuillNoSSRWrapper
//         value={value}
//         onChange={onChange}
//         modules={modules}
//         theme="snow"
//       />
//     </form>
//   );
// }


"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor({value , setValue}) {

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video', 'code-block'], // Added 'code-block' for code button
      ['clean']
    ],
  };

  // const [value, setValue] = useState('');

  return (
    <ReactQuill 
      className='mt-3' 
      theme="snow" 
      modules={modules} // Pass the modules object, not modules.toolbarOptions
      value={value} 
      onChange={setValue} 
    />
  );
}
