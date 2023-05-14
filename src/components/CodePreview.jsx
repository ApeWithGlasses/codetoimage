import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodePreview = ( {text} ) => {
  return (
    <section className="code__preview__container">
        <div className="code__preview">
            <div className="upper__bar">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <div className="code__content">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {text}
              </SyntaxHighlighter>
            </div>
        </div>
    </section>
  )
}

export default CodePreview