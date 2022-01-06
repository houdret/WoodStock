import React from 'react'
import '../styles/Creative.css';
const Creative = () => {
    return (
        <div className="creative">
            <div className="creative-left">
                <div>
                    <img src="../media/tables.png" alt="tables" id="tables" height="810px" />
                </div>
            </div>
            
            <div className="creative-right">
                <div>
                    <img src="../media/wood-2.png" alt="wood-2" id="wood-2" />
                </div>
                <div className="creative-team">
                    <h1>CREATIVE TEAM</h1>
                </div>
                <div>
                    <h1>GOOG MINSET</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Modi quaerat aliquid facere illum saepe commodi tenetur obcaecati expedita fuga doloremque. 
                        Nam provident impedit, esse voluptates nesciunt enim doloremque repellendus dolorum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ut iure culpa, sunt inventore fugiat assumenda voluptate. 
                        Provident quam distinctio excepturi mollitia iure vero deserunt, velit libero incidunt dolorum obcaecati!
                    </p>
                </div>
                <div className="go">
                    <div>
                        <h3>Meat the team</h3>
                    </div>                
                    <div>
                        <hr />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Creative
