import React from 'react'
import LineItem from './LineItem'

const ListItem = ({skills}) => {
  return (
    <ol>
        {skills.map((skill) => <LineItem skill={skill} /> )}
    </ol>
  )
}

export default ListItem