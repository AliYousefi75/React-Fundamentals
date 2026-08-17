import { useState } from "react"
import CoreConcept from "./components/CoreConcept"
import Header from "./components/Header/Header"
import TabButton from "./components/TabButton"
import {CORE_CONCEPTS} from './data'
import { EXAMPLES } from "./data.js"
import { Component } from "react"
import { Fragment } from "react"

function App() {

  const [selectedTopic,setSelectedTopic] = useState()

  function selectHandler(selectedButton){
    setSelectedTopic(selectedButton)
  }

  
    return(
      <Fragment>
        <Header />
        <main>

          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {
                // <CoreConcept {...CORE_CONCEPTS[0]}/>
                CORE_CONCEPTS.map((data)=><CoreConcept key={data.title} {...data}/>)
                }
            </ul>
          </section>

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

        </main>
      </Fragment>
    )

  }

export default App
