import React, { PropsWithChildren } from "react"
import { Word } from "utils/types"

const Card: React.FC<Word & { onChange: () => void }> = ({ word, translation, onChange }) => (
  <div className="p-6 rounded bg-white border mb-12 w-60">
    <div className="flex justify-between">
      <p>{word}</p>
      <p>{translation}</p>
    </div>

    <button
      onClick={onChange}
      className="px-6 py-3 rounded bg-blue-900 hover:bg-blue-800 text-md font-bold text-white mt-5"
    >
      new
    </button>
  </div>
)

export default Card