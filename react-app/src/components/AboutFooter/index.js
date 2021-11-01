import React from 'react';
import "./AboutFooter.css"

const AboutFooter = () => {

    return (

        <div className="footer">
            <div className="follow">
            <p></p>
            </div>
            <div className="footer-members">
                <div className="footer-item">
                    <a href="https://github.com/a-echeverri">Follow my GitHub for more: Andres Echeverri</a>
                </div>
                    <img src="../GitHub-Mark-32px.png" alt="github" className="github-logo"></img>
            </div>
        </div>

    )
}

export default AboutFooter;
