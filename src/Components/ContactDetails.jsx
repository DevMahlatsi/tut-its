export default function(){
  return(
    <>
      <div className="contact-details-card parent-basic-card">
        <div className="basic-card">
          <div className="icon-container">
            <img src="./src/assets/icons/telephone-svgrepo-com.svg" alt="" className="icon contact-icon" />
          </div>
          <div className="contact-details-lbl">
            <h1 className="test2">Contact Details</h1>
          </div>
        </div>
        <div className="personal-detais-card-extenstion card-extension">
          <ul className="user-details-b">
            <li><p className="user-details-a"><span className="label-span2">Cellphone:</span><span><a href="tel:0123456789">0123456789</a></span></p></li>
            <li><p className="user-details-a"><span className="label-span2">Email:</span><span><a href="mailto:nejihyuga@tut4life.ac.za">nejihyuga@tut4life.ac.za</a></span></p></li>
            <li><p className="user-details-a"><span className="label-span2">Postal Address:</span> <span>The Hyuga Clan</span></p></li>
          </ul>
        </div>
        
      </div>
      
    </>
  )
}