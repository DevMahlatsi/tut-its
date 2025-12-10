import tutLoginLogo from '../assets/images/tutLoginLogo.png'
import {useState, useRef} from "react";

export function SignIn(){
    const studNumberRef = useRef(null);
    const studPasswordRef = useRef(null);

    const typeOfLearners = [
        { id: 1, type: "Student", label: "Student Number" },
        { id: 2, type: "Personnel", label: "Personnel Number" },
        { id: 3, type: "Other", label: "External Number" },
        { id: 4, type: "Alumni", label: "Alumni Number"}
    ];
    const helpLearner = [
        {id: 1, type: "Forgot Pin"},
        {id: 2, type: "Change Pin"},
        {id: 3, type: "Request Pin"},
        {id: 4, type: "Forgot Student Number"}
    ]

    const [userType, setUserType] = useState(typeOfLearners[0].label);
    
    // const [studentNumber, setStudentNumber] = useState("");
    // const [studentPin, setStudentPin] = useState("");


    
    
    const handleUserType = (id) =>{
        const temp = typeOfLearners.find((user) => user.id === id).label;
        studNumberRef.current.value = "";
        studPasswordRef.current.value = "";
        setUserType(temp);
        

    }

    const handleSubmit = (event) => {
        //ought to get rid of default behavior first chief
        event.preventDefault();
    }



    return (
    <section className={'sign-in-section'}>
        <title>Jeremia</title>
    {/*    probably put the logo here*/}

        <img src={tutLoginLogo}
             alt=""
             className={'img-logo'}/>
        <form onSubmit={handleSubmit}>
            <div className={'ctrl'}>
                <fieldset className={'radio'}>
                    {typeOfLearners.map((learner) => (
                        < >
                            <input
                                key={learner.id}
                                type={"radio"}
                                id={`learner-${learner.id}`}
                                name={"userType"}
                                className={'radio__input'}
                                checked={userType === learner.label}
                                onChange={() => handleUserType(learner.id)}
                            />
                            <label

                                className={"radio__label"}
                                htmlFor={`learner-${learner.id}`}
                            >

                                {learner.type}
                                {/*don't touch*/}
                            </label>

                        </>

                    ))}


                </fieldset>
            </div>

            <div className="user-details">
                {/*<label htmlFor="studentNumber">*/}
                {/*    {userType}:*/}
                {/*</label>*/}
                <input type="text"
                       className={'aa'}
                       name="userNumber"
                       ref={studNumberRef}
                       id="studentNumber"
                       placeholder={userType}
                       maxLength={10}/>
                {/*<label htmlFor="studentPassword">*/}
                {/*    Pin:*/}
                {/*</label>*/}
                <input type="password"
                       className={'aa'}
                       ref={studPasswordRef}
                       name="userPassword"
                       maxLength = {5}
                       placeholder={"Pin"}
                       id="studentPassword"/>
            </div>
            <div className={'sign-footer'}>
                <input type="submit"
                       value="Login"
                       className={'btn-login'}
                       // to handleSubmit
                />
                <select name="Need help?" className={'help-options'}>
                    <option value="" disabled selected>Help Options</option>
                    {helpLearner.map((learner) => (
                        <option key={learner.id} value={learner.type}>{learner.type}</option>
                    ))};


                </select>
            </div>


        </form>
    </section>

    )
}