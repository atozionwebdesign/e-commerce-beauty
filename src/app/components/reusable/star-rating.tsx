import { Rating } from 'react-simple-star-rating';

export default function StarRating(props: { rating: number ; size: number; count: number; class?:string}){

let rating = Math.round(props.rating * 10) / 10;

if(rating == null){
    rating = 0
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
                className={`mr-2 ${props.class}`}
                fillColor='var(--gold)'
            />
            <p className='inline small my-auto'>{`${rating} (${count})`}</p>
        </div>
    )
}