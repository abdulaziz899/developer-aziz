import React from 'react';

const ProgramingSkills = () => {
    return (
        <section className='container py-5'>
            <div className=' mt-2 row'>
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
                            <h2>C++</h2>
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
                        <h2>C</h2>
                        <h2>60%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>Java</h2>
                            <h2>10%</h2>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' row mt-2'>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h2>Python</h2>
                        <h2>10%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 my-3 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>Php</h2>
                            <h2>10%</h2>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default ProgramingSkills;