import React from 'react'

const Education = (props) =>{
    const continues = (e) =>{
        e.preventDefault();
        props.nextStep();
    }

    const back = (e) =>{
        e.preventDefault();
        props.prevStep();
    }

    return  (
        <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Education Info</h3>
                    <hr />
                </div>

            <form onSubmit={continues}>

            <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>College/University*</label>
                            <input type="text" name="edu1_school" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.edu1_school} onChange={(event) => props.handleChange(event,"edu1_school")} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Year*</label>
                            <input type="text" name="edu1_year" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.edu1_year} onChange={(event) => props.handleChange(event,"edu1_year")} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Qualification*</label>
                            <input type="text" name="edu1_qualification" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.edu1_qualification} onChange={(event) => props.handleChange(event,"edu1_qualification")} required/>
                        </div>

                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="edu1_desc" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.edu1_desc} onChange={(event) => props.handleChange(event,"edu1_desc")} required />
                        </div>
                    </div>


                    <br />

                    


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>School</label>
                            <input type="text" name="edu2_school" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.edu2_school} onChange={(event) => props.handleChange(event,"edu2_school")} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Year</label>
                            <input type="text" name="edu2_year" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.edu2_year} onChange={(event) => props.handleChange(event,"edu2_year")} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Qualification</label>
                            <input type="text" name="edu2_qualification" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.edu2_qualification} onChange={(event) => props.handleChange(event,"edu2_qualification")} />
                        </div>

                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description</label>
                            <input type="text" name="edu2_desc" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.edu2_desc} onChange={(event) => props.handleChange(event,"edu2_desc")} />
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br />


            </form>

         </div>

    );
}
export default Education;