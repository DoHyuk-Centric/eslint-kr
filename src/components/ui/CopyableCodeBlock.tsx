import { useClipboard } from "../../pages/hooks/useClipboard";

interface Props {
  lang: string;
  code: string;
  children: React.ReactNode;
}

export default function CopyableCodeBlock({ lang, code, children }: Props) {
  const { copy, toast } = useClipboard();

  return (
    <>
      <div className="code-block">
        <div className="code-block-header">
          <span className="code-lang">{lang}</span>
          <button className="copy-btn" onClick={() => copy(code)}>
            복사
          </button>
        </div>
        <pre>
          <code>{children}</code>
        </pre>
      </div>

      <div className="toast-container">
        {toast && <div className="toast">{toast}</div>}
      </div>
    </>
  );
}