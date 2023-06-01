
import "../../init.js"
import "../../Styles/Editor.css";
import { Box } from '@mui/material';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { useState } from "react";
export const Editor = ({icon, heading, color,mode,value, onChange}) => {
  // console.log(onChange)
  const handleChange = (editor,data,value)=>{
    onChange(value);
  }
  const [val, setVal]  = useState("false");
  const handleClick = ()=>{
    setVal(!val);
  }
  return (
    <Box className={`${val ? '':'w50'}`+' box-box-container'}
    >
        <Box className="box-items">
            <Box className="editor-heading">
              <Box component="span" className='icon-comp' 
              style={{
                backgroundColor:`${color}`,
              }}>
                {icon}
              </Box>
                {heading}
            </Box>
            <Box>
              <CloseFullscreenIcon className='icon' onClick={handleClick}/>
            </Box>
        </Box>
        <ControlledEditor className=" controlled-editor editor-box"

          value={value}
          onBeforeChange={handleChange}
          options={{
            mode: `${mode}`,
            theme: 'material',
            lineNumbers: true
          }}
        />
    </Box>
  )
}
