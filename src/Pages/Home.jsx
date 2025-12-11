import AcademicStatus from "../Components/AcademicStatus";
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
      </div>
      

      
    </>
  )
}