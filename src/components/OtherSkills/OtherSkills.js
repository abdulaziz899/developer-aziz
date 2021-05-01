import React from 'react';

const OtherSkills = () => {
    return (
        <section className='container py-5'>
            <div className=' mt-2 row'>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h2>HTML5</h2>
                        <h2>85%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>CSS3</h2>
                            <h2>85%</h2>
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
                        <h2>Bootstrap</h2>
                        <h2>90%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>React Bootstrap</h2>
                            <h2>90%</h2>
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
                        <h2>JavaScript</h2>
                        <h2>75%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>React Native</h2>
                            <h2>50%</h2>
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
                        <h2>SCSS</h2>
                        <h2>60%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>Redux</h2>
                            <h2>40%</h2>
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