interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  setTitle: (title: string) => void;
}

export default function TextInput({ text, setText, setTitle }: TextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setTitle(e.target.value?.split(" ")[0] || "output");
  };

  return (
    <div>
      <label className="text-sm font-medium text-gray-600">Text</label>
      <textarea
        value={text}
        onChange={(e) => handleChange(e)}
        className="border border-gray-300 p-2 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
        placeholder="Type your text here..."
        rows={4}
      />
    </div>
  );
}
