import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="row mx-0">
                    <div className="col-lg-4 px-0">
                        <div data-aos="fade-up">
                            <h2 className="my-0">Contact</h2>
                            <p className="mt-5 mb-0">“As competition intensifies, the need for creative thinking increases. It is no longer enough to do the same thing better . . . no longer enough to be efficient and solve problems” — Edward de Bono</p>
                        </div>
                        <div data-aos="fade-up">
                            <section className="section-sm pb-0">
                                <h3 className="my-0">P.O. Box 9, Bartlett, TX, USA</h3>
                            </section>
                        </div>
                        <div data-aos="fade-up">
                            <h3 className="mt-5 mb-0">(+512) 964-9473</h3>
                            <p className="mt-5 mb-0">dianeDcandler@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-2 mt-5 mt-lg-0 px-0">
                        <h3 className="my-0" data-aos="fade-up">Let's grab a coffee and jump on conversation <span className="text-primary">chat with me.</span></h3>
                        <section className="section-sm pb-0" data-aos="fade-up">
                            <form className="js-ajax-form">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" required="" placeholder="Email *" />
                                </div>
                                <div className="form-group">
                                    <textarea rows="3" name="message" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="message" id="success-message">Your message is successfully sent...</div>
                                <div className="message" id="error-message">Sorry something went wrong</div>
                                <div className="form-group mb-0">
                                    <button type="submit" className="btn">Contact me</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}
