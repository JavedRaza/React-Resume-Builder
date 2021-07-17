import React from 'react'

const Experience = (props) =>{
    const continues = (e) =>{
        e.preventDefault();
        props.nextStep();
            }
    const back = (e) =>{
        e.preventDefault();
        props.prevStep();
            }
    
    return(
         <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Experience Info</h3>
                    <hr />
                </div>

               <form onSubmit={continues}>


               <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        
                        <div className="col-lg-4 text-left">
                            <label>Institute/Organisation*</label>
                            <input type="text" name="exp1_org" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.exp1_org} onChange={(event) => props.handleChange(event,"exp1_org")} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Position*</label>
                            <input type="text" name="exp1_pos" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.exp1_pos} onChange={(event) => props.handleChange(event,"exp1_pos")} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Duration*</label>
                            <input type="text" name="exp1_dur" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.exp1_dur} onChange={(event) => props.handleChange(event,"exp1_dur")} required />
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="exp1_desc" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.exp1_desc} onChange={(event) => props.handleChange(event,"exp1_desc")} required />
                        </div>
                    </div>

                    <br/>

                        

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Institute/Organisation*</label>
                            <input type="text" name="exp2_org" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.exp2_org} onChange={(event) => props.handleChange(event,"exp2_org")} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Position*</label>
                            <input type="text" name="exp2_pos" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.exp2_pos} onChange={(event) => props.handleChange(event,"exp2_pos")} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Duration*</label>
                            <input type="text" name="exp2_dur" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.exp2_dur} onChange={(event) => props.handleChange(event,"exp2_dur")} required />
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="exp2_desc" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.exp2_desc} onChange={(event) => props.handleChange(event,"exp2_desc")} required />
                        </div>
                    </div>
                    <br/>
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br/>


               </form>

        </div>


    )
}

export default Experience;