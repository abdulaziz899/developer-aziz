import React from 'react';

const OtherSkills = () => {
    return (
        <section className='container py-5'>
            <div className=' mt-2 row'>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h1>HTML5</h1>
                        <h1>85%</h1>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h1>CSS3</h1>
                            <h1>85%</h1>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-2 row'>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h1>Bootstrap</h1>
                        <h1>90%</h1>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h1>React Bootstrap</h1>
                            <h1>90%</h1>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' row mt-2'>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h1>JavaScript</h1>
                        <h1>75%</h1>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h1>React Native</h1>
                            <h1>50%</h1>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-2 row '>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h1>SCSS</h1>
                        <h1>60%</h1>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h1>Redux</h1>
                            <h1>40%</h1>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherSkills;