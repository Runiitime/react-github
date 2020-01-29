import React from 'react'
import {useSelector} from 'react-redux'
import {formateDate} from '../../helpres/helper'
import Tags from './tags'

const Repos = () => {
  const {repos, tab} = useSelector(state => state)

  const renderItems = () => {
    return repos.map(rep => (
      <div className="repos-item" key={rep.id}>
        <div className="item-info">
          <div className="item-info__title">
            <a className="link" href={rep.html_url} target="_blanck">{rep.name}</a>
            <p>{formateDate(rep.created_at)}</p>
          </div>
          <p className="item-info__description">{rep.description}</p>
          <div className="item-info__languages">
            <Tags link={rep.languages_url}/>
          </div>
          <div className="item-info__clone">
          <div className="item-btn">
              <div className="btn-copy">
                <div className="item-btn__icon"></div>
              </div>
            </div>
            <p className="">{rep.clone_url}</p>
            
          </div>
        </div>
      </div>
    ))
  }
  
  return (
    <div className={`repos ${tab == 'repos' ? 'active' : ''}`}> 
      {renderItems()}
    </div>
  )
}

export default Repos