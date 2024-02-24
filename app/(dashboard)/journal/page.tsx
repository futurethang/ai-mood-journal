import EntryCard from '@/components/EntryCard'
import NewEntry from '@/components/NewEntry'
import Question from '@/components/Question'
import { qa } from '@/util/ai'
import { getUserFromClerkID } from '@/util/auth'
import { prisma } from '@/util/db'
import Link from 'next/link'

const getEntries = async () => {
  const user = await getUserFromClerkID()
  const data = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      analysis: true,
    },
  })

  return data
}

const JournalPage = async () => {
  const data = await getEntries()
  return (
    <div className="px-6 py-8 bg-[--surface-0] h-full">
      <div className="mb-4 w-full">
        <Question />
      </div>
      <div className="flex flex-col gap-4">
        <NewEntry />
        {data.map((entry) => (
          <div key={entry.id}>
            <Link href={`/journal/${entry.id}`} className="no-underline">
              <EntryCard entry={entry} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
