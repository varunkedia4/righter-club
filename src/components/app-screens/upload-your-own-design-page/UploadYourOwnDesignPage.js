import React, {useEffect} from 'react'
import {Container, Header} from "semantic-ui-react";
import ReactGA from "react-ga4";
import FileInput from "./FileInput";

import { useRef, useState } from 'react';
import axios from 'axios';


const FileUpload = () => {
    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [data, getFile] = useState({name: "", path: ""});
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accesing file
        console.log(file);
        setFile(file); // storing file
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        console.log(formData)
        axios.post('http://localhost:4500/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                    ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            getFile({ name: res.data.name,
                path: 'http://localhost:4500' + res.data.path
            })
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <div className="file-upload" style={{minHeight: '37em', paddingTop:'3em'}}>
                <input type="file" ref={el} onChange={handleChange}/>
                <div className="progessBar" style={{width: progress}}>
                    {progress}
                </div>
                <button onClick={uploadFile} className="upbutton">
                    Upload
                </button>
                <hr/>
                {/* displaying received video*/}
                {data.path && <video src={data.path} autoPlay controls/>}
            </div>
        </div>
    );
}
export default FileUpload;