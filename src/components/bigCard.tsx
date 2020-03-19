import * as React from "react"
import * as PropTypes from "prop-types"
import Skeleton from "@Components/skeleton"

type AdditionalContentType = "warning" | "success" | "error"

type Props = {
  emoji: string
  title: string
  content: string | number
  subContent: string
  additionalContent?: string
  isLoading: boolean
  additionalContentType: AdditionalContentType
}

const BigCard = ({ emoji, title, content, additionalContent, subContent, isLoading, additionalContentType }: Props) => {
  return (
    <div className="big-card card">
      <div className="big-card__wrap card__wrap">
        {isLoading ? (
          <div className="big-card__item big-card__item--text card__item">
            <Skeleton fullHeight>
              <h5>Loading</h5>
            </Skeleton>
            <Skeleton>
              <p>Loading</p>
            </Skeleton>
            <Skeleton fullHeight>
              <small>Loading</small>
            </Skeleton>
          </div>
        ) : (
          <>
            {emoji && (
              <div className="big-card__item big-card__item--badge card__item">
                <span role="img">{emoji}</span>
              </div>
            )}
            <div className="big-card__item big-card__item--text card__item">
              <h5>{title}</h5>
              <p>
                {content}{" "}
                {additionalContent && <span className={`is-${additionalContentType}`}>{additionalContent}</span>}
              </p>
              {subContent && <small>{subContent}</small>}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

BigCard.defaultProps = {
  emoji: "",
  title: "",
  content: "",
  subContent: "",
  additionalContent: "",
  isLoading: false,
  additionalContentType: "error",
}

BigCard.propTypes = {
  emoji: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subContent: PropTypes.string,
  additionalContent: PropTypes.string,
  isLoading: PropTypes.bool,
  additionalContentType: PropTypes.string,
}

export default BigCard
