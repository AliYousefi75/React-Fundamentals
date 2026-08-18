import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"



function CoreConcepts(){
    return(
        <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                      {
                        // <CoreConcept {...CORE_CONCEPTS[0]}/>
                        CORE_CONCEPTS.map((data)=><CoreConcept key={data.title} {...data}/>)
                        }
                    </ul>
                  </section>
    )
}



export default CoreConcepts;