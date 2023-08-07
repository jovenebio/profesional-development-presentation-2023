///////////////////////////////
//Place General Components Here
///////////////////////////////

function site_intro() {
    
    return (

        <div class="section_block" id="site_intro">
            <div class="sub_headline">
                <img src="https://www.jovenebio.com/images/welcome_icon.png" alt="welcome icon"></img>
                <h3>Welcome to the site!</h3>
            </div>
            <div class="content_wrapper">
                <div class="content_block">
                    <span class="contentText">
                       The site you're currently viewing was built using React.js with 100% deployment and hosting through Amazon Web Services. 
                    </span>
                </div>
            </div>            
        </div>

    );

}

function non_aws_deployment() {
    
    return(

        <div class="section_block" id="non_aws_deployment">
            <div class="sub_headline">
                <img src="https://www.jovenebio.com/images/desktop.png" alt="desktop icon"></img>
                <h3>Traditional Way Of Hosting A Website</h3>
            </div>
            <div class="content_wrapper">
                <div class="content_block">
                    <span class="contentText">
                       Here are the steps on "How To Host Your Own Website (2023)" according to 
                       <a href="https://www.forbes.com/advisor/business/how-host-own-website/" target="blank"> Forbes </a>
                    </span>                    
                       <ol>
                            <li>Choose a Content Management System (CMS)</li>
                                <ul>
                                    <li>WordPress is a free, open source CMS, it does require third-party web hosting. A popular tool for individuals without any coding experience who want to build websites and blogs</li>
                                    <li>All-in-one website builder, such as Wix, Squarespace or Shopify</li>
                                </ul>
                            <li>Purchase a Web Hosting Service</li>
                                <ul>
                                    <li>Through Bluehost, DreamHost, Hostinger, IONOS, and etc.</li>
                                    <li>Some Web Hosting Service also include a public SSL/TLS Certificate with their service</li>
                                </ul>                                
                            <li>Get a Domain Name</li>
                                <ul>
                                    <li>Purchasing your domain through Namecheap, Domain.com or Google Domains, and etc.</li>
                                    <li>EX: jovenebio.com</li>
                                </ul>                                
                            <li>Connect Your Domain To Your Web Host</li>
                                <ul>
                                    <li>Connecting process can vary depending on where you purchased your web hosting service</li>
                                </ul>                             
                            <li>Install WordPress (or Migrate An Existing Site)</li>
                                <ul>
                                    <li>You can now launch the website you designed through WordPress</li>
                                </ul>                             
                       </ol> 
                </div>
            </div> 
        </div>

    );

}

function tools_used() {

    return (
        <div class="section_block" id="tools_used">
            <div class="sub_headline">
                <img src="https://www.jovenebio.com/images/tool-box.png" alt="toolbox icon"></img>
                <h3>Tools Used:</h3>
            </div>
            <div class="content_wrapper">
                <div class="reactjs">
                    <img src="https://www.jovenebio.com/images/react_logo.png" alt="react icon"></img>
                    <span class="contentText">
                        <span class="tool_topic">
                            React.js - </span>
                         Open-source JavaScript framework and library developed by Facebook. Used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript
                    </span>
                </div>
                <div class="aws_route_53">
                    <img src="https://www.jovenebio.com/images/route53.png" alt="route53 icon"></img>
                    <span class="contentText"><span class="tool_topic">
                        AWS Route 53 - </span> 
                         Amazon's Domain Name System (DNS) Service Tool
                    </span>
                </div>
                <div class="aws_S3">
                    <img src="https://www.jovenebio.com/images/s3.png" alt="S3 icon"></img>
                    <span class="contentText">
                        <span class="tool_topic">
                            AWS S3 - </span>
                         Object storage service where you will store your files and objects such as index.html 
                    </span>
                </div>
                <div class="aws_certificate_manager">
                    <img src="https://www.jovenebio.com/images/acm.png" alt="acm icon"></img>
                    <span class="contentText">
                        <span class="tool_topic">
                            AWS Certificate Manager - </span>
                         Sockets Layer (SSL) and Transport Layer Security (TLS) Certificate Provider 
                    </span>
                </div>
                <div class="aws_cloudfront">
                    <img src="https://www.jovenebio.com/images/cloudfront.png" alt="cloudfront icon"></img>
                    <span class="contentText">
                        <span class="tool_topic">
                            AWS Cloudfront - </span>
                         Content Delivery Network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds 
                </span>
                </div>
            </div>
        </div>
    );    

}

function next_steps() {

    return(

        <div class="section_block" id="next_steps">

            <div class="sub_headline">
                <img src="https://www.jovenebio.com/images/road.png" alt="road icon"></img>
                <h3>Next Steps</h3>
            </div>
            <div class="content_wrapper">
                <div class="content_block">
                    <span class="contentText">
                       <ul>
                        <li>Continue learning AWS skillsets and eventually receive AWS Certification. There's a free certification program through <a href="https://aws.amazon.com/training/digital" target="blank">AWS Skill Builder</a></li>
                        <li>Keep practicing and coding with React.js</li> 
                       </ul> 
                    </span>
                </div>
            </div> 

        </div>

    );

}

export {
    site_intro,    
    non_aws_deployment, 
    tools_used,
    next_steps
};