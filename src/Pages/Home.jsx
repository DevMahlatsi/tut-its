import AcademicStatus from "../Components/AcademicStatus";
import ApplicationForm from "../Components/ApplicationForm";
import ContactDetails from "../Components/ContactDetails";
import PersonalDetails from "../Components/PersonalDetails";
import StudentCard from "../Components/StudentCard";

export default function(){
  return(
    <>
      
      <div className="home">
        <StudentCard/>
        <PersonalDetails/>
        <ContactDetails/>
        <AcademicStatus/>
        <ApplicationForm/>
      </div>
      

      
    </>
  )
}