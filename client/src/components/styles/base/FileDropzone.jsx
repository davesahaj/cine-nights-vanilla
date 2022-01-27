import React, {useCallback, useRef } from 'react';
import styled from "styled-components";
import {useDropzone} from 'react-dropzone';
import Button from './Button';

const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  }
  return '#eeeeee';
}
  
const DropzoneWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: ${({ theme }) => theme.secondary};
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

const FileDropzone = ({setSelectedFile}) => {
  const fileRef = useRef(null);

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    setSelectedFile(acceptedFiles[0]);
  }, [])

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
    open } = useDropzone({
        onDrop,
        multiple: false,
        noClick: true,
        noKeyboard: true,
    });

  return (
    <section className="container">
    <DropzoneWrapper {...getRootProps({isFocused, isDragAccept, isDragReject})}>
      <input {...getInputProps()} />
        <span>Drag 'n' drop some files here</span>
        <Button text="Open File Dialog" to={open} />
    </DropzoneWrapper>
    </section>
  );
};

export default FileDropzone;