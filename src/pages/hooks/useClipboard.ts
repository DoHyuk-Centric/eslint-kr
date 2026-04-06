import { useState } from "react";

export function useClipboard(duration = 2000) {
  const [toast, setToast] = useState<string | null>(null);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast("코드가 복사되었습니다.");
    } catch {
      setToast("복사에 실패했습니다.");
    } finally {
      setTimeout(() => setToast(null), duration);
    }
  };

  return { copy, toast };
}