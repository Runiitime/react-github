import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {updateTeamList, updateUsers} from '../../store/actions'
import Item from './item'

const List = ({type}) => {
  const {users, team} = useSelector(state => state)
  const [isAsc, setIsAsc] = useState(false)
  const [localUsers, setLocalUsers] = useState(() => users)
  const [searchStr, setSearchStr] = useState('')
  const dispatch = useDispatch()
  
  useEffect(() => {
    let result = team.sort((a, b) => {
      if(isAsc) {
        if (a.login.toLowerCase() < b.login.toLowerCase()) return -1;
        if (a.login.toLowerCase() > b.login.toLowerCase()) return 1;
        return 0; 
      } else {
        if (b.login.toLowerCase() < a.login.toLowerCase()) return -1;
        if (b.login.toLowerCase() > a.login.toLowerCase()) return 1;
        return 0; 
      }
    })

    dispatch(updateTeamList(result))
  }, [isAsc])

  useEffect(() => {
    setLocalUsers(users)
  }, [users])

  const addUser = (item) => {
    let filterUsers = localUsers.filter(user => user.id !== item.id)
    dispatch(updateTeamList([item, ...team]))        
    dispatch(updateUsers(filterUsers))
  }

  const deleteUser = (user) => {
    let result = team.filter(item => item.id !== user.id)
    dispatch(updateTeamList([...result]))   
    dispatch(updateUsers([...users, user]))
  }

  const renderItems = () => {
    if(type === 'team') {
      if(team.length === 0) return <div className="empty">Список пуст</div>

      return team.map(user => <Item item={user} key={user.id} onAdd={addUser} onDelete={deleteUser} type={type}/>)
    }

    return localUsers.map(user => <Item item={user} key={user.id} onAdd={addUser} onDelete={deleteUser} type={type}/>)
  }

  const renderFilter = () => {
    return (
      <div className="filter" onClick={() => setIsAsc(!isAsc)}> 
        <div className="filter-content">
          <div className={`filter-icon ${isAsc ? 'asc' : 'desc'}`}></div>
          Логин
        </div>
      </div>
    )
  }

  const handleSearch = (e) => {
    const {value} = e.target
    setSearchStr(value)

    if(value.length === 0) {
      return setLocalUsers(users)
    }

    let results = users.filter(user => user.login.toLowerCase().startsWith(value.toLowerCase()))
    setLocalUsers(results)    
  }

  const renderSearch = () => {
    return (
      <div className="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Поиск по логину" value={searchStr} onChange={handleSearch} name="search-input" className="search-input"/>          
        </form>
      </div>
    )
  }

  return (
    <>
      <div className="list-header">{type === 'team' ? 'Команда' : 'Список пользователей'}</div>
      {type === 'team' ? renderFilter() : renderSearch()}
      <div className="list">
        {renderItems()}
      </div>
    </>
  )
}

export default List