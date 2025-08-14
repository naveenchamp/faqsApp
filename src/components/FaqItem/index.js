// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqs, isWantedReally, onShowToggle} = props
  const {id, questionText, answerText} = faqs

  const onShow = () => {
    onShowToggle(id)
  }

  return (
    <li className="answer">
      <div className="answerText">
        <h1 className="question">{questionText}</h1>
        <button type="button" onClick={onShow} className="button">
          <img
            src={
              isWantedReally
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isWantedReally ? 'minus' : 'plus'}
            className="image"
          />
        </button>
      </div>
      {isWantedReally && (
        <div className="toggleContainer">
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
