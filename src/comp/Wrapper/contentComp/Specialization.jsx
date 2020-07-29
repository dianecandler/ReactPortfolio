import React, { useEffect } from 'react';
import Specializationbar from './Specializationbar';

export default function Specialization() {

  return (
    <section id="specialization" className="section py-0">
      <div className="container">
        <div className="row mx-0 align-items-center">
          <div className="col-md-6 order-md-2 order-lg-1 col-lg-4 px-0">
            <h2 className="my-0 wide-lg float-md-right float-lg-none offset-lg-5 mb-5 mb-md-0" data-aos="fade-right" data-aos-delay="500">I <span className="text-primary">use</span> the latest technology</h2>
          </div>
          <div className="col-md-6 order-md-1 order-lg-2 col-lg-4 px-0" data-aos="blur">
            <img alt="" className="w-100" src="img/370x434-2.jpg" />
          </div>
          <div className="col-md-6 offset-md-6 offset-lg-0 order-md-3 order-lg-3 col-lg-4 mt-5 pl-0 pl-md-30 mt-md-0" data-aos="fade-up" data-aos-delay="1000">
            <p className="mb-0 pl-md-30px">We have experience in implementing projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education, communication.</p>
          </div>
        </div>
        <section className="section-sm pb-0">
          <div className="row mx-0">
            <Specializationbar type="Front-end" length="80" delay="1000" />
            <Specializationbar type="Back-end" length="60" delay="1500" />
            <Specializationbar type="Full-stack" length="70" delay="2000" />
          </div>
        </section>
      </div>
    </section>
  )
}
