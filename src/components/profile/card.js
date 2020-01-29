import React from 'react'
import {useSelector} from 'react-redux'

const Card = () => {
  const {user} = useSelector(state => state)

  const formateDate = () => {
    return new Date(user.created_at).toLocaleDateString()
  }

  return (
    <>
      <div className="profile-card">
        <div className="profile-card__img">
          <img src={user.avatar_url}/>
        </div>
        <div className="profile-card__text">
          <a className="link" href={user.html_url} target="_blanck">{user.login}</a>
        </div>
        <div className="profile-card__text">
          <p className="profile-card__text-p">Дата создания: {formateDate()}</p>
        </div>
      </div>
    </>
  )
}

export default Card