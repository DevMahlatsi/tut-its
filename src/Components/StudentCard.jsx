export default function(){
  return(
    <>
    <div className="student-card-container  basic-card">
      <div className="user-profile">
        <div className="profile-pic-container"> 
          <img className='profile-pic' src="./src/assets/images/neji-picture.jpg" alt="" />
          </div>
          <div>
            <h1 className="testing">Neji Hyuga</h1>
          </div>
      </div>
    <div className="user-details">
      <p className="user-details-a"><span className="label-span">Student No:</span><span>231834060</span></p>
      <p className="user-details-a"><span className="label-span">Status:</span><span className="status-temp">Active</span></p>
    </div>
    </div>

    </>
  )
}