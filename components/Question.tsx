'use client'

import { askQuestion } from '@/util/api'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Question = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { data } = await askQuestion(question)

    setAnswer(data)
    setLoading(false)
    setQuestion('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-between gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-10/12 border border-gray-300 rounded-md p-2 text-lg"
          disabled={loading}
          placeholder="Ask a question..."
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-md"
        >
          Ask
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {answer && (
        <div className="flex flex-col items-start">
          <p className="my-4 text-xl">{answer}</p>
          <button
            aria-label="clear answer"
            className="text-red-400"
            onClick={() => setAnswer(null)}
          >
            clear
          </button>
        </div>
      )}
    </div>
  )
}

export default Question
