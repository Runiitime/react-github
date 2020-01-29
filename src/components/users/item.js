import React from 'react'

const Item = ({item, onAdd, onDelete, type}) => {

  const handleClick = () => {
    if(type === 'team') return onDelete(item)

    return onAdd(item)
  }

  return (
    <div className="list-item">
        <div className="list-item__avatar">
          <img src={item.avatar_url}/>
        </div>
        <div className="list-item__footer">
          <div className="list-item__title">
            <a className="link" target="__blanck" href={item.html_url}>{item.login}</a>
          </div>
          <div className="list-item__btn">
            <button onClick={handleClick}>{type === "team" ? "Удалить" : "Добавить"}</button>
          </div>
        </div>
    </div>
  )
}

export default Item