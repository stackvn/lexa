import { BuyMeACoffee } from "@kanokpit.y/buy-me-a-coffee";
import { X } from "lucide-react";

export default function BuyMeCoffee({
  setIsModalOpen,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center gap-4 max-w-md text-center pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex-1"></div>
          <div className="cursor-pointer bg-gray-300 text-gray-50 h-8 w-8 flex justify-center items-center rounded-full">
            <X className="h-6 w-6" onClick={() => setIsModalOpen(false)} />
          </div>
        </div>
        <span className="text-5xl">🎉 </span>
        <p className="text-gray-900 dark:text-gray-300 font-normal">
          Post Generated!
        </p>
        <span className="text-gray-700 dark:text-gray-400 text-base">
          Thanks for using <b>Lexa</b>! Feel free to reach out to me on{" "}
          <a
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            className="text-[#1f9ded]"
          >
            Twitter
          </a>{" "}
          with any feedback.
        </span>
        <span className="text-gray-700 dark:text-gray-400 text-base mb-3">
          If you found this product helpful, consider supporting me!
        </span>

        <BuyMeACoffee
          text="Buy me a coffee"
          slug="stackvn"
          buttonColor="901bd6"
        />
      </div>
    </div>
  );
}
