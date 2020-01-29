import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Card from '../components/profile/card';
import Spinner from '../components/spinner/spinner'
import axios from 'axios'
import {URL} from '../helpres/constants'
import {updateUserProfile, updateUserRepos, updateUserFollow} from '../store/actions'
import Repos from '../components/profile/repos';
import Follows from '../components/profile/follows';
import Tabs from '../components/profile/tabs';

const Profile = () => {
  const {profileLogin, user, tab} = useSelector(state => state)
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${URL.userProfile}/${profileLogin}`).then(res => {
      if(res.status === 200) {
        dispatch(updateUserProfile(res.data))
      }
    }).catch(err => {
      console.log('err', err)
    })
  }, [])

  useEffect(() => {
    if(Object.keys(user).length > 0) {
      loadRepos()
      loadFollows()
      setIsLoading(false)
    }   
  }, [user])

  const loadRepos = () => {
    axios.get(user.repos_url).then(res => {
      if(res.status === 200) {
        dispatch(updateUserRepos(res.data))
      }
    }).catch(err => {
      console.log('err', err)
    })
  }

  const loadFollows = () => {
    axios.get(`${URL.userProfile}/${profileLogin}/following`).then(res => {
      if(res.status === 200) {
        dispatch(updateUserFollow(res.data))
      }
    }).catch(err => {
      console.log('err', err)
    }) 
  }

  if(isLoading) return <Spinner/>

  return (
    <div className="profile">
      <Card/>
      <div className="profile-data">
        <Tabs/>
        {
          tab === 'repos' ? <Repos id="repos"/> : <Follows id="follows"/>
        }
      </div>
    </div>
  )
}

export default Profile