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
            <li><span>Year:</span><span>2026</span></li>
            <li><span>Qualification:</span><span>DPRS20: Dip(Computer Science)</span></li>
            <li><span>Faculty:</span> <span>INFORMATION AND COMMUNICATION</span></li>
            <li><span>Status:</span> <span>L: A ACCEPTED SENIOR STUDENT</span></li>
            <li><span>Academic Choice:</span> <span>1</span></li>
            <li><span>Application Letter:</span> <span>....</span></li>
          </ul>
        </div>
        
      </div>
    </>
  )
}