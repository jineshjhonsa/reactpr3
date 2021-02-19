import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function MyInfo() {
  return (
    
    <div>

<body>
    <h2>Graphic Design is my Passion</h2>
   
    <div className="row"> 
        <div className="column">
            <iframe id="playVideo" src="https://www.youtube.com/embed/AIJ4gKCdVE4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="column">
            <iframe id="playVideo" src="https://www.youtube.com/embed/Nx2qeKVtdz4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="column">
            <iframe id="playVideo" src="https://www.youtube.com/embed/vYmWK1FDhBE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="column">
            <iframe id="playVideo" src="https://www.youtube.com/embed/Fk15H6PjBis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="column">
            <iframe id="playVideo" src="https://www.youtube.com/embed/8KtyMcb86go" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="column">
            <iframe id="playVideo" src="https://www.youtube.com/embed/83m261lAlrs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div> 

    {/* <script>
        document.getElementById("playVideo").addEventListener("click", function(event){
          event.preventDefault()
        });
    </script>
         */}


</body>

    </div>
  )
}

export default MyInfo