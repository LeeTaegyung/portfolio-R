import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ViewCode = ({ codeString }: { codeString: string }) => {
    return (
        <SyntaxHighlighter language="javascript" style={coldarkDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

export default ViewCode;
