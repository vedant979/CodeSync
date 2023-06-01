
import "../../Styles/HomePage.css";
import { Editor } from "../../components/Editor/Editor";
import { NavBar } from "../../components/NavBar/NavBar";
// import { DataContext, DataProvider } from '../../DataProvider/DataProvider';
import { useEffect, useState } from "react";
import { Result } from "../../components/Result/Result";

export const HomePage = () => {
  // const {html,setHtml, css, setCss,js,setJs} = useContext(DataContext);
  const[html, setHtml] = useState("");
  const[css, setCss] = useState("");
  const[js, setJs] = useState("");
  const[width, setWidth] = useState(700);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    })
  });

  // console.log(width)
  return (
    <>
        <div className="main-container">

        { width<=600 ? (
              <div className="phone-container">
                  <h4>Please open this site in Desktop</h4>
              </div>
        ) :
        (
          <>
          <NavBar html={html} css={css} js={js}/>
              <div className='flex-container'>
                <div className='editor-container'>
                  <Editor icon="/" heading="HTML" color="rgb(255, 60, 65)" mode="xml" value={html} onChange={setHtml} />
                  <Editor  icon="*" heading="CSS" color="#3cb5e2" mode="css" value={css} onChange={setCss}/>
                  <Editor icon="()" heading="JS" color="yellow" mode="javascript" value={js} onChange={setJs}/>
                </div>
                <div className='result'>
                  <Result html={html} css={css} js={js}/>
                </div>
              </div>
              </>
        )
        }
        </div>
        
      {/* </DataProvider> */}
    </>
  )
}
