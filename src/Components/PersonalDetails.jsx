import React from 'react'

const PersonalDetails = (props) =>{
    const continues = (e) =>{
            e.preventDefault();
            props.nextStep();
    }

    return(
        <>
        <div className="card animated fadeInLeft">
                <div className="card-body">
                    <h3 className="card-title">Personal Info</h3>
                    <hr />
               </div>
               <form onSubmit={continues}>

               <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>Name*</label>
                            <input type="text" name="name" className="form-control" onChange={(event) => props.handleChange(event,"name")} defaultValue={props.values.status === 1 ? '' : props.values.name} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Email*</label>
                            <input type="email" name="email" className="form-control" onChange={(event) => props.handleChange(event,"email")}  defaultValue={props.values.status === 1 ? '' : props.values.email} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Mobile*</label>
                            <input type="text" name="phone" className="form-control" onChange={(event) => props.handleChange(event,"phone")} defaultValue={props.values.status === 1 ? '' : props.values.phone} required />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Linkedin</label>
                            <input type="text" name="linkedin" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.linkedin} onChange={(event) => props.handleChange(event,"linkedin")} />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Github</label>
                            <input type="text" name="github" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.github} onChange={(event) => props.handleChange(event,"github")} />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Skills* (Separate each skill with a space and a comma)</label>
                            <input type="text" name="skills" className="form-control"  defaultValue={props.values.status === 1 ? '' : props.values.skills} onChange={(event) => props.handleChange(event,"skills")} />
                        </div>
                    </div>
                    <br />
                    <div className="container text-center"><button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button></div>
                    <br/>


               </form>
        </div>

             
        </>
    );
}

export default PersonalDetails;