import React, { useState } from "react"
import { Word } from "utils/types"

const Card: React.FC<Word & { onChange: () => void }> = ({ word, translation, onChange }) => {
  const [show, setShow] = useState(false)

  const onChangeWord = () => {
    setShow(false)
    onChange()
  }

  const onShowWord = () => {
    setShow(true)
  }

  return (
    <div className="p-6 rounded bg-white border mb-12 w-full max-w-md mx-auto">
      <div className="">
        <p className="text-blue-900 text-2xl text-black font-bold">{word}</p>
        {show && (
          <p className="text-blue-900">{translation}</p>
        )}
      </div>
      <div className="">
        <button
          onClick={show ? onChangeWord : onShowWord}
          className={`px-6 py-3 rounded-full ${show ? 'bg-blue-900' : 'bg-emerald-900'} text-md font-bold text-white mt-5`}
        >
          {show ? 'next' : 'show'}
        </button>
      </div>
    </div>
  )
}

export default Card