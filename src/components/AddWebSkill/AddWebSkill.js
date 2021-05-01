import React from 'react';
import WebSkills from '../WebSkills/WebSkills';

const AddWebSkill = () => {
    return (
        <section className='container py-5'>
            <div className=' mt-2 row'>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h2>React</h2>
                        <h2>80%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>Material UI</h2>
                            <h2>60%</h2>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-2 row'>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h2>Node JS</h2>
                        <h2>70%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>Express JS</h2>
                            <h2>70%</h2>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' row mt-2'>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h2>MongoDB</h2>
                        <h2>70%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>Firebase</h2>
                            <h2>70%</h2>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-2 row '>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h2>Heroku</h2>
                        <h2>80%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>Gatsby</h2>
                            <h2>60%</h2>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddWebSkill;