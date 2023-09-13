import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handeladdbookMark}) => {
   const {title,cover,readingTime,author,postedDate,hashtags} = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover pic of the tittle ${title}`} />
            <div className='authorMain flex justify-between'>
                <div className='flex '>
                    <img src={author.image} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author.name}</h3>
                        <p>Posted date: {postedDate}</p>
                    </div>
                </div>
                <div>
                    <span>{readingTime} min read</span>
                    <button onClick={()=>handeladdbookMark(blog)} className='ml-2 text-red-600'> <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold pt-4 pb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((has,idx) =><span  className='mr-4' key={idx}><a href=''>{has}</a></span>)
                }
            </p>
            <button className='underline text-[#6047EC] text-2xl font-bold'>Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handeladdbookMark:PropTypes.func
}
export default Blog;