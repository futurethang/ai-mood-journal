import React from 'react'
import {
  faCircle,
  faHeart,
  faHeartBroken,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MoodIcon({ entry }) {
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
  return <div>{getMoodIcon(entry.analysis ? entry.analysis.mood : '--')}</div>
}
