

import "../css/card.css"

function Card() {

  return (
    <div className="card">
      <div className='top' >
        <img className="mainimg" src='https://avatars2.githubusercontent.com/u/66278659?v=4'></img>
      </div>
      <div className='mid' >
        <h3 style={{ margin: "0px"}} >Rita Correia <span style={{opacity: "0.6" }} >32</span></h3>
        <p style={{margin: "0px"}} >London</p>
      </div>

      <div className='bottom' >
        <div>
          <h2>80K</h2>
          <p>Followers</p>
        </div>
        <div>
          <h2>803K</h2>
          <p>Likes</p>
        </div>
        <div>
          <h2>1.4K</h2>
          <p>Likes</p>
        </div>

      </div>
    </div>

  )
}

export default Card
