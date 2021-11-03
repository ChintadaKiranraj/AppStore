// Write your code here

import './index.css'

const TabItem = props => {
  const {eachTabItem, updateClickedTabId, activeTabIdIs} = props
  const {tabId, displayText} = eachTabItem

  const isSelected = activeTabIdIs ? 'tab-button active' : 'nonActive'

  const onClickTabItem = () => {
    updateClickedTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        id={tabId}
        className={isSelected}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
