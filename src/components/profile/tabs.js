import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateTab} from '../../store/actions'
import {TABS} from '../../helpres/constants'

const Tabs = () => {
  const dispatch = useDispatch()
  const {tab} = useSelector(state => state)

  const setTab = (id) => {
    dispatch(updateTab(id))
  }

  const renderTabs = () => {
    return TABS.map(item => <li className={`tab ${tab === item.id ? 'active' : ''}`} key={item.id} onClick={() => setTab(item.id)}>{item.title}</li>)
  }

  return (
    <div className="tabs-panel">
      <ul className="tabs-list">
        {renderTabs()}
      </ul>
    </div>
  )

}

export default Tabs