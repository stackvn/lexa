interface TextInputProps {
  text: string;
  setText: (text: string) => void;
}

export default function TextInput({ text, setText }: TextInputProps) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600">Text</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Type your text here..."
        rows={4}
      />
    </div>
  );
}
