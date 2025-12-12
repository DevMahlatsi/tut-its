export default function(){
  return(
    <>
      <div className="application-details-card parent-basic-card">
        <div className="basic-card">
          <div className="icon-container">
            <img src="./src/assets/icons/form-svgrepo-com.svg" alt="" className="icon application-icon" />
          </div>
          <div className="application-details-lbl">
            <h1 className="test2">Application Info</h1>
          </div>
        </div>
        <div className="personal-detais-card-extenstion card-extension">
          <ul className="user-details-b">
            <li><p className="user-details-a"><span className="label-span2">Year:</span><span>2026</span></p></li>
            <li><p className="user-details-a"><span className="label-span2">Qualification:</span><span>DPRS20: Dip(Computer Science)</span></p></li>
            <li> <p className="user-details-a"><span className="label-span2">Faculty:</span> <span>INFORMATION AND COMMUNICATION</span></p></li>
            <li><p className="user-details-a"><span className="label-span2">Status:</span> <span>L: A ACCEPTED SENIOR STUDENT</span></p></li>
            <li><p className="user-details-a"><span className="label-span2">Academic Choice:</span> <span>1</span></p></li>
            <li> <p className="user-details-a"><span className="label-span2">Application Letter:</span> <span>....</span></p></li>
          </ul>
        </div>
        
      </div>
    </>
  )
}