const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>Breads Index Page</h2>
        <p>I Have {breads[0].name} Bread!</p>

        {/* the cod e above will use the breads model array to
         render teh brads data*/}
        <ul>
            {
                breads.map((bread, index)=> {
                    return(
                        <li key={index}>
                            <a href={`/breads/${index}`}>                            
                                {bread.name}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
        <div className="newButton">
             <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
      


      </Default>
    )
}

module.exports = Index
