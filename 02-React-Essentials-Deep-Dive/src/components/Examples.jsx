import TabButton from "./TabButton"
import { useState } from "react"
import { EXAMPLES } from "../data"





function Examples(){

    const [selectedTopic,setSelectedTopic] = useState()

    function selectHandler(selectedButton){
    setSelectedTopic(selectedButton)
  }

    return(
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>selectHandler('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>selectHandler('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={()=>selectHandler('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onSelect={()=>selectHandler('state')}>State</TabButton>
            </menu>
            
            {!selectedTopic && <p>Please Select Topic</p>}
            {selectedTopic && <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>}

          </section>
    )
}

export default Examples;