import React from 'react'

function NavbarComponent(props) {
  return (
    <div className="row">
    <div className="col-md-6">
        <h1 className="title">Duple Weather App</h1>
    </div>

    <div className="col-md-6">
        <form className="region" onSubmit={(e)=>props.changeWeather(e)} > 
            <input type="text" className="regioninput" placeholder="Select your region" onChange={(e)=>{props.changeLocation(e.target.value)}} />
         </form>
    </div>

</div>
  )
}

export default NavbarComponent;
