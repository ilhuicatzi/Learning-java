import hljs from "highlight.js";
import "highlight.js/styles/base16/humanoid-dark.css";
import java from "highlight.js/lib/languages/java";
import ToolTipCopy from "./ToolTipCopy";

hljs.registerLanguage("java", java);

type Props = {
  code: string;
};

function CodeBlock({ code }: Props) {
  const highlightedCode = hljs.highlight(code, {
    language: "java",
  }).value;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <section className="my-2 rounded-lg relative w-full max-w-60 min-[350px]:max-w-72 min-[450px]:max-w-96 sm:max-w-lg  md:max-w-xl  lg:max-w-2xl">
      <div className="flex justify-end">
        <ToolTipCopy copyToClipboard={copyToClipboard} />
      </div>
      <div
        className="w-full bg-neutral-100 dark:bg-neutral-900/70 rounded-lg overflow-auto"
      >
        <pre>
          <code
            className="inline-block px-4 py-3 text-sm language-java"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
    </section>
  );
}

export default CodeBlock;