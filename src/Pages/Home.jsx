import AcademicStatus from "../Components/AcademicStatus";
import ApplicationForm from "../Components/ApplicationForm";
import ContactDetails from "../Components/ContactDetails";
import NavigationBar from "../Components/NavigationBar";
import PersonalDetails from "../Components/PersonalDetails";
import StudentCard from "../Components/StudentCard";

export default function(){
  return(
    <>
    <div className="home-base">
      <div className="home1">
        <StudentCard/>
        <NavigationBar/>
      </div>
      <div className="home2">
        <PersonalDetails/>
        <ContactDetails/>
        <AcademicStatus/>
        <ApplicationForm/>
      </div>
    </div>
      
      

      
    </>
  )
}