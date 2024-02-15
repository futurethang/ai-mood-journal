'use client'

import { newEntry } from '@/util/api'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const NewEntry = () => {
  const router = useRouter()

  const handleOnClick = async () => {
    const { data } = await newEntry()
    router.push(`/journal/${data.id}`)
  }

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg bg-[--surface-1] shadow"
      onClick={handleOnClick}
    >
      <div className="px-4 py-5 sm:p-6 flex gap-4">
        <FontAwesomeIcon
          icon={faPlusCircle}
          className=" text-gray-400"
          size="2x"
        />
        <span className="text-3xl">New Entry</span>
      </div>
    </div>
  )
}

export default NewEntry
