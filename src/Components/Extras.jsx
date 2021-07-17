import React from 'react'
// import axios from 'axios';
// import { saveAs } from 'file-saver';


const Extras = (props) =>{

    const back = (e) =>{
        e.preventDefault();
        props.prevStep();
            }
    
    const continues = (e) => {
        e.preventDefault();
        props.submitted();
}


    return  (
        <div className="card animated fadeInLeft">

            <div className="card-body">

                <h3 className="card-title">Miscellaneous</h3>
                <hr />
            </div>

            <form onSubmit={continues}>
                
              <div className="row col-lg-10 mx-auto">

                <div className="col-lg-6 md-form">
                <input type="text" name="extra_1" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.extra_1} onChange={(event) => props.handleChange(event,"extra_1")} required />
                <label htmlFor="extra_1">Languages</label>
                </div>
                <div className="col-lg-6 md-form">
                <input type="text" name="extra_2" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.extra_2} onChange={(event) => props.handleChange(event,"extra_2")} required />
                <label htmlFor="extra_2">Hobbies</label>
                </div>
                </div>
                <br />
                <div className="row col-lg-10 mx-auto">

                <div className="col-lg-6 md-form">
                <input type="text" name="extra_3" id="extra_3" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.extra_3} onChange={(event) => props.handleChange(event,"extra_3")} required />
                <label htmlFor="extra_3">Activity/Achievement</label>
                </div>
                <div className="col-lg-6 md-form">
                <input type="text" name="extra_4" id="extra_4" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.extra_4} onChange={(event) => props.handleChange(event,"extra_4")} required />
                <label htmlFor="extra_4">Activity/Achievement</label>
                </div>
                </div>

                <div className="row col-lg-10 mx-auto">
                <div className="col-lg-12 md-form">
                <input type="text" name="extra_5" id="extra_5" className="form-control" defaultValue={props.values.status === 1 ? '' : props.values.extra_5} onChange={(event) => props.handleChange(event,"extra_5")} required/>
                <label htmlFor="extra_5">Activity/Achievement</label>
                </div>
                </div>
                <br />
                <div className="container text-center">
                <button type="button" className="btn btn-info" onClick={back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                <button type="submit" className="btn btn-info">Download PDF<i className="fas fa-download ml-1"></i></button>
                </div>
                <br />



            </form>


        </div>


    );
}
export default Extras;