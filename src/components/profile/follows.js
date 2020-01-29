import React from 'react'
import {useSelector} from 'react-redux'

const Follows = () => {
  const {follows, tab} = useSelector(state => state)

  const renderFollows = () => {
    return follows.map(follow => (
      <div className="follows-item" key={follow.id}>
        <div className="follow-avatar">
          <img src={follow.avatar_url}/>
        </div>
        <div className="follow-title">
          <a className="link" target="__blanck" href={follow.html_url}>{follow.login}</a>
        </div>
      </div>
    ))
  }

  return (
    <div className={`follows ${tab == 'follows' ? 'active' : ''}`}>
      {renderFollows()}
    </div>
  )
}

export default Follows