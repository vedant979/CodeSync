import { Box } from '@mui/material'
import "../../Styles/Result.css";
export const Result = ({html, css, js}) => {
  // console.log(html)
    const code = 
    `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>

    `;
  return (
    <>
        <Box className="result-container">
          <iframe 
            srcDoc={code}
            title='output'
            sandbox='allow-scripts'
            width="100%"
            height="100%"
          />

         
        </Box>
    </>
  )
}
