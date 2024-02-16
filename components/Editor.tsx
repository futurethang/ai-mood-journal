'use client'
import { updateEntry, deleteEntry } from '@/util/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'
import Spinner from './Spinner'
import { useRouter } from 'next/navigation'
import MoodIcon from './MoodIcon'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Editor = ({ entry }) => {
  const [text, setText] = useState(entry.content)
  const [currentEntry, setEntry] = useState(entry)
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    await deleteEntry(entry.id)
    router.push('/journal')
  }
  useAutosave({
    data: text,
    onSave: async (_text) => {
      if (_text === entry.content) return
      setIsSaving(true)

      const { data } = await updateEntry(entry.id, { content: _text })

      setEntry(data)
      setIsSaving(false)
    },
  })

  return (
    <div className="h-full flex flex-col gap-0 relative justify-between">
      <div className="border-l border-black/5">
        {/* <div
          style={{ background: currentEntry.analysis?.color }}
          className=" bg-blue-600 p-2"
          >
          <h2 className="m-0">Analysis</h2>
        </div> */}
        <div className="flex justify-between items-center px-2 py-4">
          <div className="p-2">
            {isSaving ? (
              <Spinner />
            ) : (
              <div className="w-[16px] h-[16px] rounded-full bg-green-500"></div>
            )}
          </div>
          <p className="text-xl">{`Subject: ${
            currentEntry.analysis?.subject.charAt(0).toUpperCase() +
            currentEntry.analysis?.subject.slice(1)
          }`}</p>
          <div className="flex justify-between">
            <MoodIcon entry={entry} />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleDelete}
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2 prose-p: grow">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-full p-4 bg-[--surface-0]"
        />
      </div>
    </div>
  )
}

export default Editor
