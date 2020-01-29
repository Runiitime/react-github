import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import Spinner from '../components/spinner/spinner'
import {URL} from '../helpres/constants'
import axios from 'axios'
import {updateUsers} from '../store/actions'
import UsersList from '../components/users/list'

const Team = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(URL.users).then(res => {
      if(res.status === 200) {
        dispatch(updateUsers(res.data))
        setIsLoading(false)
      }
    }).catch(err => {
      console.log('err', err)
    })
  }, [])

  if(isLoading) return <Spinner/>

  return (
    <div className="team-page">
      <div className="team">
        <UsersList type="team"/>
      </div>
      <div className="line"></div>
      <div className="users">
        <UsersList type="users"/>
      </div>
    </div>
  )
}

export default Team