import React from 'react'
import PropTypes from "prop-types"

type Props = {
  emoji: string,
  title: string,
  content: string | number,
  subContent: string,
  additionalContent?: string
}

const BigCard = ({emoji, title, content, additionalContent, subContent}: Props) => {
  return (
    <div className="big-card card">
      <div className="big-card__wrap card__wrap">
        {emoji && (
          <div className="big-card__item big-card__item--badge card__item">
            <span role="img">{emoji}</span>
          </div>
          )
        }
        
        <div className="big-card__item big-card__item--text card__item">
          <h5>{title}</h5>
          <p>{content} {additionalContent && <span>{additionalContent}</span>}</p>
          {subContent && <small>{subContent}</small> }
        </div>
      </div>
    </div>
  )
}


BigCard.defaultProps = {
  emoji: '',
  title: '',
  content: '',
  subContent: '',
  additionalContent: '',
}

BigCard.propTypes = {
  emoji: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  subContent: PropTypes.string,
  additionalContent: PropTypes.string,
}

export default BigCard