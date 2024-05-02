"use client";

import { useRouter } from "next/navigation";

const ActionButtons = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row-reverse sm:col-span-full">
      <button
        className="ml-4 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
        type="submit"
      >
        Submit
      </button>
      <button onClick={router.back} className="px-5 py-2.5">
        Cancel
      </button>
    </div>
  );
};

export default ActionButtons;
