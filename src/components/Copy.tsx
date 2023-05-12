import useClipboard from "react-use-clipboard";
import { ClipboardCopy, ClipboardCheck } from "lucide-react";

type CopyTypes = { text: string };

const Copy = ({ text }: CopyTypes) => {
  const [isCopied, setCopied] = useClipboard(text, { successDuration: 1000 });

  return (
    <div className="py-2 px-4 flex gap-3 rounded-3x">
      {text}
      <button onClick={setCopied}>
        {isCopied ? (
          <ClipboardCheck className="w-6 h-6" />
        ) : (
          <ClipboardCopy className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default Copy;
