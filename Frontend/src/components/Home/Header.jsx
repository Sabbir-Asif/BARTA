import React from 'react';

const Header = () => {
    return (
        <section>
            <div className='p-8 lg:p-12 lg:mt-4'>
                <div className='container text-center mx-auto max-w-5xl'>
                    <h2 className='text-4xl text-green-p font-extrabold font-ruhi'>Bangla AI Research, Tools and Application (BARTA Group)</h2>
                    <p className='text-lg p-8 bg-green-primary text-base-100 font-light font-nunito mt-8 text-center max-w-5xl mx-auto'>
                        We are a group of enthusiastic people wanting to solve the many
                        problems around Bangla Natural Language Processing. We extensively
                        focus on social inclusion and accessibility for universalism of human
                        values.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Header;