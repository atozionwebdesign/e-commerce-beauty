import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default function About(){
    return(
        <div className='flex-1 max-h-full overflow-y-auto'>
            <p className='text-center mb-3 font-bold gold'>ii.ix.xxii - Breathe Easy, Glow Naturally, an E-Commerce Web App</p>
            <p>This is fully functioning test e-commerce mobile responsive web application. It is built using Nextjs with a Node server and MongoDB database.  Multiple API server routes are created and the front-end is customized using TailwindCSS. It is integrated with a Stripe test sandbox and deployed via an AWS EC2 instance</p>
            <p className="mt-5 mb-3 "><strong>Developed By:</strong> Senior Full-Stack Developer, Ashley Stith</p>
            <p className="font-bold mt-3 mb-1 mx-auto text-center md:text-left large" style={{color:'var(--dark-olive)'}}>TECH STACK:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="grid-cols-1">
                    <p style={{color: 'var(--dark-rose)'}} className='mx-auto text-center md:text-left font-bold'>FRONT-END:</p>
                    <ul style={{listStyleType: 'circle'}} className="small ml-5">
                        <li>NextJS Framework</li>
                        <li>TailwindCSS</li>
                        <li>FontAwesome</li>
                        <li><strong>Languages:</strong> HTML, CSS, TypeScript, JavaScript</li>
                    </ul>
                </div>
                <div className="grid-cols-1">
                    <p style={{color: 'var(--dark-rose)'}} className='mx-auto text-center md:text-left font-bold'>BACK-END:</p>
                    <ul style={{listStyleType: 'circle'}} className="small ml-5">
                        <li>Node.js </li>
                        <li>MongoDB</li>
                        <li>AWS - EC2, S3 Bucket</li>
                        <li>Caddy Web Server</li>
                        <li>Stripe</li>
                        <li>Docker</li>
                        <li><strong>Languages:</strong> Typescript, Javascript, Mongoose, YAML</li>
                    </ul>
                </div>
            </div>
            <p className="font-bold mt-3 mb-1 mx-auto text-center md:text-left large" style={{color:'var(--dark-olive)'}}>DEPLOYMENT DETAILS:</p>
            <p>Application packaged as Docker container to assist with deployment and portability.  <strong>GitHub Actions</strong> is leveraged to streamline the deployment process by triggering builds and deployments on every push to a specified branch.  The application is deployed to an Amazon Elastic Compute Cloud (EC2) virtual server instance and Caddy is used to securely serve the application on HTTPS. Code repository managed and stored on the Github repository linked below.</p>
            <p className="mt-5 mb-3 text-center xlarge"><a href="https://github.com/atozionwebdesign/e-commerce-beauty" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></p>
        </div>
    )
}