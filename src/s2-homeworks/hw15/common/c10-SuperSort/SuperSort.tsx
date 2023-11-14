import React from 'react'
import {FaSort, FaSortDown, FaSortUp} from 'react-icons/fa'

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === down) {
    return up
  } else if (sort === up) {
    return ''
  } else {
    return down
  }
}


const SuperSort: React.FC<SuperSortPropsType> = (
  {
    sort, value, onChange, id = 'hw15',
  }
) => {
  const up = '0' + value
  const down = '1' + value


  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const Icon = () => {
    if (sort === down) return <FaSortDown/>
    if (sort === up) return <FaSortUp/>
    return <FaSort/>
  }
  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
    >
          <Icon/>
        </span>
  )
}

export default SuperSort
