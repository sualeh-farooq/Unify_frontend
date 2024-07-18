"use client";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { useState } from 'react';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Uploader(props) {
    const [profilePic, setProfilePic] = useState(null);

    return (
        // <FilePond
        //     files={files}
        //     onupdatefiles={filesUpdate}
        //     allowMultiple={false}
        //     className="mt-3"
        //     maxFiles={1}
        //     name={name}
        //     labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        // />

<FilePond
   files={profilePic}
   onupdatefiles={(fileItems) => {
   setProfilePic({profilePic: fileItems.map((fileItem) =>     
   fileItem.file) })}}

   server={{process: () => {
   let form_data = new FormData();
   form_data.append('profile_pic', profilePic);
   props.updateProfileFiles(form_data)

}}}

   type="file"
   id="img"
   name="filepond"
   accept="image/*"
   labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
/>
    );
}
