import React from 'react';

const ToolsSkills = () => {
    return (
        <section className='container py-5'>
            <div className=' mt-2 row'>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h2>Git</h2>
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
                            <h2>GitHub</h2>
                            <h2>90%</h2>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-2 row'>
                <div style={{height:"100px"}} className="col-md-5 col-sm-12 bg-secondary shadow ">
                    <div className='mt-3 d-flex justify-content-between text-white'>
                        <h2>VS Code</h2>
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
                            <h2>Chrome Dev tool</h2>
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
                        <h2>Figma</h2>
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
                            <h2>Adobe XD</h2>
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
                        <h2>Adobe Photoshop</h2>
                        <h2>20%</h2>
                    </div>
                    <div className="progress ">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='col-md-1 col-sm-12'></div>
                <div style={{height:"100px"}} className="col-md-5  col-sm-12 bg-secondary shadow ">
                    <div>
                        <div className='mt-3 d-flex justify-content-between text-white'>
                            <h2>Adobe Illustrator</h2>
                            <h2>20%</h2>
                        </div>
                        <div className="progress ">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSkills;