/////////////////////////////
//AWS Tools
//AWS Specific Components
////////////////////////////

function aws_intro() {
    return(
        <div class="section_block" id="aws_intro">
            <div class="sub_headline">
                <img src="https://www.jovenebio.com/images/Amazon_Web_Services_Logo.png" alt="amazon web services logo"></img>
                <h3>What is AWS and Why this topic?</h3>
            </div>
            <div class="content_wrapper">
                <div class="content_block">
                    <span class="contentText">
                    Amazon web service is an online platform that provides scalable and cost-effective cloud computing solutions. AWS is a broadly adopted cloud platform that offers several on-demand operations like compute power, database storage, and content delivery to help corporates scale and grow. AWS is widely used by Fortune 500 Companies such as Netflix, Comcast, and GE.
                    </span>
                    <span class="contentText">
                    To my knowledge no one on the Front-End team has had an introductory course or developed using Amazon Web Services. There is a need in Front-End for someone to be knowledgable about this topic in order to support the team with DevOps asset migrations and application deployment (Vercel vs. AWS).
                    </span>
                </div>
            </div>             
        </div>
    );
}

function before_getting_started() {
    return (
        <div class="section_block" id="before_getting_started">
            <div class="sub_headline">
                <img src="https://www.jovenebio.com/images/chronometer.png" alt="time icon"></img>
                <h3>Before Getting Started:</h3>
            </div>
            <div class="content_wrapper">
                <div class="content_title">
                    <span class="contentText">AWS Free Tier:</span>
                </div>
                <div class="content_block">
                    <span class="contentText">
                        <ul>
                            <li>To access multiple Amazon Web Services tools you can sign up for the free tier account <a href="https://aws.amazon.com/free" target="blank" >here</a></li>
                            <li>Once completed you will purchase a domain through Amazon Route 53</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    );
}

function aws_guide() {
    return (

        <div class="section_block" id="aws_guide">

            <div class="sub_headline">
                <img src="https://www.jovenebio.com/images/note.png" alt="notes icon"></img>
                <h3>AWS Guides Used:</h3>
            </div>
            <div class="content_wrapper">
                <div class="content_summary">Here are the guides I used during my training. It's better to go over the official documentation over me having to reinvent the wheel. I will comment on the steps where I ran into an since the direction was unclear to me at the time.</div>
                <div class="content_title">
                    <span class="contentText">
                        <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html" target="blank">Configuring a static website using a custom domain registered with Route 53</a>
                    </span>
                </div>
                <div class="content_block">
                    <span class="contentText">
                        <ul>
                            <li>STEP 2: When registering a subdomain it's better to use a "*" (Wildcard) over "www" as a subdomain since this encompasses any subdomain you may create in the future as long as the root domain is the same. This will save you time in having to register each subdomain such as "www, dev, www-dev, and etc"</li>
                            <li>STEP 5: I set this up but didnt really use the feature. This is a nice to have but logging is not necessary for launching the static site in AWS. However, you may find this useful depending on your site needs</li>
                            <li>STEP 11: In this step, you create the alias records that you add to the hosted zone for your domain maps example.com and www.example.com. Instead of using IP addresses, the alias records use the Amazon S3 website endpoints. Amazon Route 53 maintains a mapping between the alias records and the IP addresses where the Amazon S3 buckets reside. You create two alias records, one for your root domain and one for your subdomain. </li>
                        </ul>
                    </span>
                </div>
                <div class="content_title">
                    <span class="contentText">
                        <a href="https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html" target="blank">DNS validation</a>
                    </span>
                </div>
                <div class="content_block">
                    <span class="contentText">
                        <ul>
                            <li>Once you have your site up and running you will notice your site is listed as unsecure. You will need to register for a public site SSL/TLS certificate. This is done through Amazon Certificate Manager</li>
                            <li>Amazon only provides public certificates from their N.Virginia servers. Make sure to register your certificate through the N. Virgina server even if your main server is elsewhere such as the Ohio server</li>
                            <li>You will be able to save time by registering your root domain and the subdomain with the wildcard "*".</li>
                            <li>To make your life easier choose to validate through DNS since this will validate using Amazon S3 Buckets</li>
                        </ul>
                    </span>
                </div>
                <div class="content_title">
                    <span class="contentText">
                        <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStartedCreateDistribution.html" target="blank">Amazon Cloudfront</a>
                    </span>
                </div>
                <div class="content_block">
                    <span class="contentText">
                        <ul>
                            <li>You will use Amazon Cloudfront to connect your public SSL/TLS certificate by creating a distribution list</li>
                            <li>Choose your root domain and subdomain. Your certificate will be available in the dropdown. The other settings can be left at their default state</li>
                            <li>Once the distribution is complete go back to your S3 buckets. Update the alias buckets to reference to the Amazon Cloudfront distribution link</li>
                        </ul>
                    </span>
                </div>                                  
            </div>

        </div>
        
    );
}

export {
    aws_intro, 
    before_getting_started, 
    aws_guide
};