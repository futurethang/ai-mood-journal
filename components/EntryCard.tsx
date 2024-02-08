const EntryCard = ({ entry }: { entry: Entry }) => {
  const date = new Date(entry.createdAt).toDateString()
  return (
    <div className="divide-y divide-[--divider] overflow-hidden rounded-lg bg-[--surface-1] shadow">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">
        {entry.analysis ? entry.analysis.summary : '--'}
      </div>
      <div className="px-4 py-4 sm:px-6">
        {entry.analysis ? entry.analysis.mood : '--'}
      </div>
    </div>
  )
}

export default EntryCard
