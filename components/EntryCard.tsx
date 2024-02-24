import MoodIcon from './MoodIcon'

const EntryCard = ({ entry }: { entry: Entry }) => {
  const date = new Date(entry.createdAt)
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`

  const truncate = (str, num) => {
    return str.length > num ? str.slice(0, num) + '...' : str
  }

  return (
    <div className="divide-y divide-[--divider] overflow-hidden rounded-lg bg-[--surface-2] shadow">
      <div className="px-4 py-3 sm:px-6 flex justify-between">
        {formattedDate}
        <MoodIcon entry={entry} />
      </div>
      <div
        className="px-4 py-5 sm:p-6 text-sm overflow-ellipsis overflow-hidden"
        style={{ maxWidth: '160ch' }}
      >
        <i>{entry.analysis ? truncate(entry.analysis.summary, 100) : '--'}</i>
      </div>
    </div>
  )
}

export default EntryCard
