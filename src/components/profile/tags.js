import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'

const Tags = ({link}) => {
  const {user} = useSelector(state => state)
  const [tags, setTags] = useState([])

  useEffect(() => {
    if(Object.keys(user).length > 0) {
      axios.get(link).then(res => {
        if(res.status === 200) {
          let langs = []

          for(let key in res.data) {
            langs.push(key)
          }
          setTags(langs)
        }
      }).catch(err => {
        console.log('err', err)
      })
    }
  }, [user])

  const renderTags = () => {
    if(tags.length === 0) return null

    return tags.map(tag => <div className="tags-item" key={`${tag}_${new Date()}`}>{tag}</div>)
  }

  return (
    <div className="tags">
      {renderTags()}
    </div>
  )
}

export default Tags