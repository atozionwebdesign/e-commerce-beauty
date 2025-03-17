import { Rating } from 'react-simple-star-rating';

export default function StarRating(props){

let rating = props.rating;
if(rating == null){
    rating = ""
}
const size = props.size;
const count = props.count;

    return (
        <div className='flex items-center'>
            <Rating 
                initialValue={rating}
                allowFraction
                readonly
                SVGstyle={{display:"inline"}}
                size={size}
                className='mr-2'
                fillColor='var(--gold)'
            />
            <p className='inline '>{`${rating} (${count})`}</p>
        </div>
    )
}