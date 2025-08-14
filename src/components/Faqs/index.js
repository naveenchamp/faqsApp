// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList,
      activeId: [],
    }
  }

  onShowToggle = id => {
    this.setState(prevState => {
      const isOpen = prevState.activeId.includes(id)
      return {
        activeId: isOpen
          ? prevState.activeId.filter(openId => openId !== id)
          : [...prevState.activeId, id],
      }
    })
  }

  render() {
    const {faqsList, activeId} = this.state
    return (
      <div className="bg-container">
        <div className="faqsContainer">
          <h1 className="Fqs">FAQs</h1>
          <ul className="questionContainer">
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                faqs={eachItem}
                isWantedReally={activeId.includes(eachItem.id)}
                onShowToggle={this.onShowToggle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
