import Spinner from 'react-bootstrap/Spinner';

export default function Loader(){

    return (
        <div className="w-full h-100 flex justify-center xlarge gold">
            <div className='my-auto flex'>
                <Spinner animation="border" role="status" className='h-full'/>
                <p className="ml-2">LOADING...</p>
            </div>
                
        </div>
    )
}