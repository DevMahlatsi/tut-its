export default function(){
  return(
    <>
    <div className="personal-details-card parent-basic-card">
      <div className="basic-card">
        <div className="icon-container">
          <img className="icon user-icon" src="./src/assets/icons/user-svgrepo-com.svg"/>
        </div>
        <div className="personal-details-lbl">
          <h1 className="test2">Personal Details</h1>
        </div>
      </div>
      <div className="personal-detais-card-extenstion card-extension">
        <ul className="user-details-b">
            
            <li><p className="user-details-a"><span className="label-span2">Gender:</span><span >Male</span></p></li>
            <li><p className="user-details-a"><span className="label-span2">Birthdate:</span>3-July-....<span></span></p></li>
            <li><p className="user-details-a"><span className="label-span2">Id No:</span> <span>9876543210</span></p></li>
            <li><p className="user-details-a"><span className="label-span2">Maritial Status:</span> <span>Single</span></p></li>
            <li><p className="user-details-a"><span className="label-span2">Citizenship:</span> <span>Konohagakure</span></p></li>
          </ul>

      </div>
    </div>
    
      
    </>
  )
}