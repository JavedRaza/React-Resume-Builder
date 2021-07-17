import React from 'react'

const Project = (props) =>{
    const continues = (e) =>{
                e.preventDefault();
                props.nextStep();
            }

    const back = (e) =>{
                e.preventDefault();
                props.prevStep();
            }

    return (
        <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Project Info</h3>
                    <hr />
                </div>
                <form onSubmit={continues}>


                <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Title*</label>
                            <input type="text" name="proj1_title" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.proj1_title} onChange={(event) => props.handleChange(event,"proj1_title")} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Link</label>
                            <input type="text" name="proj1_link" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.proj1_link} onChange={(event) => props.handleChange(event,"proj1_link")} />
                        </div>
                        
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="proj1_desc" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.proj1_desc} onChange={(event) => props.handleChange(event,"proj1_desc")} required />
                        </div>
                    </div>

                    <br />

                    

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Title*</label>
                            <input type="text" name="proj2_title" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.proj2_title} onChange={(event) => props.handleChange(event,"proj2_title")} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Link</label>
                            <input type="text" name="proj2_link" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.proj2_link} onChange={(event) => props.handleChange(event,"proj2_link")} />
                        </div>
                        
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="proj2_desc" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.proj2_desc} onChange={(event) => props.handleChange(event,"proj2_desc")} required />
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
export default Project;