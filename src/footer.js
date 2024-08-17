import React from "react";
import "./App.css";
function Footer(){
    return(
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="line"></div>
                        <h5>News Feeds</h5>
                        <ul>
                            <li><a href="#">Latest Updates</a></li>
                            <li><a href="#">Top Stories</a></li>
                            <li><a href="#">Headlines</a></li>
                            <li><a href="#">News Alerts</a></li>
                            <li><a href="#">Live Updates</a></li>
                            <li><a href="#">Developing Stories</a></li>
                            <li><a href="#">Breaking News</a></li>
                         </ul>
                    </div>
                    <div className="col-2">
                        <div className="line"></div>
                        <h5>Popular Sections</h5>
                        <ul>
                            <li><a href="#">Elections</a></li>
                            <li><a href="#">Israeli–Palestinian conflict 2023</a></li>
                            <li><a href="#">Latest News</a></li>
                            <li><a href="#">National News</a></li>
                            <li><a href="#">International News</a></li>
                            
                        </ul>
                    </div>
                    
                    <div className="col-2">
                    <div className="line"></div>
                        <h5>Business</h5>
                        <ul>
                            <li><a href="#">Agri-Business</a></li>
                            <li><a href="#">Industry</a></li>
                            <li><a href="#">Economy</a></li>
                            <li><a href="#">Markets</a></li>
                            <li><a href="#">Budget</a></li>
                        </ul>
                        <div className="line"></div>
                        <div>
                        <h5>Sports</h5>
                        <ul>
                            <li><a href="#">Cricket</a></li>
                            <li><a href="#">Football</a></li>
                            <li><a href="#">Hockey</a></li>
                            <li><a href="#">Other Sports</a></li>
                        </ul>
                       </div>
                    </div>
                    
                    <div className="col-2">
                        <div className="line"></div>
                        <h5>Newe Sphere</h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                        <div className="line"></div>
                        <h5>Contact Us</h5>
                        <ul>
                            <li><a href="#">Follow Us</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                        
                    </div>
                    <div className="col-4">
                        <div className="line"></div>
                        <h5>Stay Connected</h5>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">YouTube</a></li>
                        </ul>
                        <div className="line"></div>
                        <h5>Newsletter</h5>
                        <form>
                            <input type="email" placeholder="Enter your email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                       <div className="line"></div>
                        <h5>Copyright</h5>
                        <p>&copy; 2023 Newe Sphere. All rights reserved.</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;