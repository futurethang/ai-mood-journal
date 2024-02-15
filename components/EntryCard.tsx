import {
  faCircle,
  faHeart,
  faHeartBroken,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EntryCard = ({ entry }: { entry: Entry }) => {
  const date = new Date(entry.createdAt)
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`

  const truncate = (str, num) => {
    return str.length > num ? str.slice(0, num) + '...' : str
  }

  const getMoodIcon = (mood) => {
    switch (mood) {
      case 'positive':
        return (
          <FontAwesomeIcon
            icon={faHeart}
            className=" text-green-400"
            size="2x"
            aria-label="green positive mood icon"
          />
        )
      case 'negative':
        return (
          <FontAwesomeIcon
            icon={faHeartBroken}
            className=" text-red-400"
            size="2x"
            airai-label="red negative mood icon"
          />
        )
      default:
        return (
          <FontAwesomeIcon
            icon={faCircle}
            className=" text-yellow-400"
            size="2x"
            aria-label="yellow neutral mood icon"
          />
        )
    }
  }

  return (
    <div className="divide-y divide-[--divider] overflow-hidden rounded-lg bg-[--surface-2] shadow">
      <div className="px-4 py-3 sm:px-6 flex justify-between">
        {formattedDate}
        {getMoodIcon(entry.analysis ? entry.analysis.mood : '--')}
      </div>
      <div
        className="px-4 py-5 sm:p-6 text-sm overflow-ellipsis overflow-hidden"
        style={{ maxWidth: '160ch' }}
      >
        <i>{entry.analysis ? truncate(entry.analysis.summary, 100) : '--'}</i>
      </div>
      {/* <p>{entry.analysis ? entry.analysis.mood : '--'}</p> */}
    </div>
  )
}

export default EntryCard
