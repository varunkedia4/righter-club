import React, {useEffect} from 'react'
import {Container, Header, Button, Input} from "semantic-ui-react";
import ReactGA from "react-ga4";

const FileInput = (props) => {

    const hiddenInput = React.useRef<HTMLInputElement>(null);
    const [ fileName, setFileName ] = React.useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        props.onChange(file);
        setFileName(file?.name ?? "");
        console.log("filename: " + fileName)
    };

    return(
        <div>
            <input onChange={(event) => handleChange(event)} type="file" ref={hiddenInput} hidden />
            <Button onClick={() => hiddenInput.current?.click()} disabled={false}>
                Choose File
            </Button>
            <Input className={ fileName ? "" : "no-file-selected"} value={ fileName ? fileName : "No file selected" } disabled />
        </div>
    );
}

export default FileInput;
