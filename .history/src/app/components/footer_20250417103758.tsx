import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Footer(){
    return (
        <div className='h-fit flex mt-5 w-full footer flex-col lg:flex-row md:px-5 lg:px-10 items-center' style={{color:"var(--dark-gray)"}}>
            <div className='flex flex-col self-center mx-auto'>
                <a href='https://atozionwebdesign.com' target='_blank'>
                    <Image 
                        src="https://atozionwebdesign-portfolio-prod1.s3.us-east-1.amazonaws.com/logo-100"
                        width={100}
                        height={75}
                        alt=''
                        className='mx-auto'
                    />
                </a>
                <p className='small text-center md:text-left'>LIVE Test application developed by <strong>Ashley Stith</strong></p>
                <div className='flex mt-5 lg:mt-0 mx-auto'>
                        <p className="large"><a href="https://github.com/atozionwebdesign/e-commerce-beauty" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></p>   
                </div>
            </div>    
        </div>
    )
}