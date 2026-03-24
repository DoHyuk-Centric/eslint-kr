import { useState } from "react";

type CodeBlockProps = {
  commands: Record<string, string>;
  defaultTab?: string;
};

export default function CodeBlock({
  commands,
  defaultTab = "npm",
}: CodeBlockProps) {
  const [pm, setPm] = useState(defaultTab);

  return (
    <div className="code-block">
      <div className={`code-block-header ${Object.keys(commands).length > 1 ? "is-tabs" : ""}`}>
        {Object.keys(commands).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setPm(item)}
            className={`code-lang ${pm === item ? "active" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>

      <pre>
        <code>{commands[pm]}</code>
      </pre>
    </div>
  );
}