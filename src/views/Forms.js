import { toJson, fromJson } from 'locustjs-forms';
import React, { useState } from 'react';

const Forms = () => {
    const [form, setForm] = useState({});
    const [expand, setExpand] = useState(false);
    const onSaveForm = e => {
        const f = toJson('#frm1', null, expand);
        setForm(f);
    }
    const onLogForm = e => {
        const f = toJson('#frm1', null, expand);

        console.log(f);
    }
    const onResetFrom = e => {
        document.getElementById('frm1').reset();
    }
    const onRestoreForm = e => {
        fromJson('#frm1', form, null, expand);
    }

    return (<div className="content"><div className="row justify-content-center">
        <div className="col-lg-12 mt-4 pt-2">
            <div className="col-md-2">
                <div className="form-group position-relative">
                    <label>Expand <span className="text-danger">*</span></label>
                    <input name="exapnd" type="checkbox" defaultChecked={expand} onClick={_ => setExpand(!expand)} /> Expand
                </div>
            </div>
        </div>
        <div className="col-lg-12 mt-4 pt-2">
            <form id="frm1">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <div className="form-group position-relative">
                            <label>Name <span className="text-danger">*</span></label>
                            <input name="name" type="text" className="form-control" placeholder="First Name :" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group position-relative">
                            <label>Email <span className="text-danger">*</span></label>
                            <input name="email" type="email" className="form-control" placeholder="Your email :" />
                        </div>
                    </div>
                    <div className="col-md-2 mt-md-3">
                        <div className="form-group position-relative">
                            <label>Sex <span className="text-danger">*</span></label>
                            <input name="sex" type="radio" value="male" /> Male
                            <input name="sex" type="radio" value="female" /> Female
                        </div>
                    </div>
                    <div className="col-md-2 mt-md-3">
                        <div className="form-group position-relative">
                            <label>Active <span className="text-danger">*</span></label>
                            <input name="active" type="checkbox" />
                        </div>
                    </div>
                    <div className="col-md-2 mt-md-3">
                        <div className="form-group position-relative">
                            <label>Interests <span className="text-danger">*</span></label>
                            <input name="interests" type="checkbox" value="1" /> Sport
                            <input name="interests" type="checkbox" value="2" /> Media
                            <input name="interests" type="checkbox" value="3" /> TV
                            <input name="interests" type="checkbox" value="4" /> Tech
                            <input name="interests" type="checkbox" value="5" /> Home
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group position-relative">
                            <label>Color <span className="text-danger">*</span></label>
                            <select name="color" className="form-control">
                                <option value="-1">Pick a color</option>
                                <option>Green</option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>White</option>
                                <option>Yellow</option>
                                <option>Orange</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <div className="form-group position-relative">
                            <label>Button Name <span className="text-danger">*</span></label>
                            <input name="button.name" type="text" className="form-control" placeholder="Button Name :" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group position-relative">
                            <label>Button Title <span className="text-danger">*</span></label>
                            <input name="button.title" type="text" className="form-control" placeholder="Button Title :" />
                        </div>
                    </div>
                    <div className="col-md-2 mt-md-3">
                        <div className="form-group position-relative">
                            <label>Active <span className="text-danger">*</span></label>
                            <input name="button.active" type="checkbox" />
                        </div>
                    </div>
                    <div className="col-md-2 mt-md-3">
                        <div className="form-group position-relative">
                            <label>Tags <span className="text-danger">*</span></label>
                            <input name="button.tags" type="checkbox" value="locust" /> locust
                            <input name="button.tags" type="checkbox" value="javascript" /> javascript
                            <input name="button.tags" type="checkbox" value="es6" /> es6
                            <input name="button.tags" type="checkbox" value="json" /> json
                        </div>
                    </div>
                    <div className="col-md-2 mt-md-3">
                        <div className="form-group position-relative">
                            <label>Button Type <span className="text-danger">*</span></label>
                            <input name="button.type" type="radio" value="1" /> Primary
                            <input name="button.type" type="radio" value="2" /> Success
                            <input name="button.type" type="radio" value="3" /> Info
                            <input name="button.type" type="radio" value="4" /> Warning
                            <input name="button.type" type="radio" value="5" /> Danger
                        </div>
                    </div>
                    <div className="col-md-2 mt-md-3">
                        <button type="button" className="btn btn-primary btn-block mb-2 btn-sm btn-fill" onClick={onLogForm}>Log</button>
                        <button type="button" className="btn btn-primary btn-block mb-2 btn-sm btn-fill" onClick={onSaveForm}>Save</button>
                        <button type="button" className="btn btn-primary btn-block mb-2 btn-sm btn-fill" onClick={onResetFrom}>Reset</button>
                        <button type="button" className="btn btn-primary btn-block mb-2 btn-sm btn-fill" onClick={onRestoreForm}>Restore</button>
                    </div>
                </div>
            </form>
        </div>
    </div></div>)
}

export default Forms;