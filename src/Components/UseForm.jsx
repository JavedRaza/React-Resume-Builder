import React from 'react';
import '../App.css';
import PersonalDetails from './PersonalDetails';
import Experience from './Experience';
import Project from './Project';
import Education from './Education';
import Success from './Success';
import Extras from './Extras';


const UseForm = () =>{
    const [state,setState] = React.useState({
        step: 1,
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        skills: '',

        exp1_org: '',
        exp1_pos: '',
        exp1_desc: '',
        exp1_dur: '',

        exp2_org: '',
        exp2_pos: '',
        exp2_desc: '',
        exp2_dur: '',

        proj1_title: '',
        proj1_link: '',
        proj1_desc: '',

        proj2_title: '',
        proj2_link: '',
        proj2_desc: '',

        edu1_school: '',
        edu1_year: '',
        edu1_qualification: '',
        edu1_desc: '',

        edu2_school: '',
        edu2_year: '',
        edu2_qualification: '',
        edu2_desc: '',

        extra_1: '',
        extra_2: '',
        extra_3: '',
        extra_4: '',
        extra_5: '',


        status: 0

    })

    const nextStep = () =>{
        const {step} = state;
        setState({
            ...state,
            step:step +1
        })
    }

    const prevStep = () =>{
        const {step} = state;
        setState({
            ...state,
            step:step - 1
        })
    }

   const  submitted = () => {
        const { status } = state;
        setState({
            ...state,
            status:status +1
        });
    }


    const handleChange = (event ,name) =>{
        setState({
            ...state,
            [name] : event.target.value
        })
        console.log(state);
    }

    switch(state.step){
        case 1 : return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">
                            <PersonalDetails
                                values = {state}
                                nextStep = {nextStep}
                                handleChange = {handleChange}
                            />
                        </div>
                        <br />
                    </div>
                  );

        case 2 : return(
                    <div className="App pt-5 mt-5">
                    <div className="container col-lg-8 mx-auto text-center">

                        <Experience
                            values={state}
                            prevStep={prevStep}
                            nextStep={nextStep}
                            handleChange={handleChange}
                        />
                    </div>
                    <br />
                </div>
                );

        case 3 : return(
            <div className="App pt-5 mt-5">
            <div className="container col-lg-8 mx-auto text-center">

                <Project
                    values={state}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                />
            </div>
            <br />
        </div>
        );

        case 4 : return(
            <div className="App pt-5 mt-5">
            <div className="container col-lg-8 mx-auto text-center">

                <Education
                    values={state}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                />
            </div>
            <br />
        </div>
        );

        case 5 : return(
            <div className="App pt-5 mt-5">
            <div className="container col-lg-8 mx-auto text-center">

                <Extras
                    values={state}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    submitted={submitted}
                    handleChange={handleChange}
                />
            </div>
            <br />
        </div>
        );

        case 6 : return(
            <div className="App pt-5 mt-5">
            <div className="container col-lg-8 mx-auto text-center">

                <Success />
            </div>
            <br />
        </div>
        );

        default: return (
            <div className="App pt-5 mt-5">
                <div className="container col-lg-8 mx-auto text-center">
                    <PersonalDetails
                        values = {state}
                        nextStep = {nextStep}
                        handleChange = {handleChange}
                    />
                </div>
                <br />
            </div>
          );


    }
    
}
export default UseForm;