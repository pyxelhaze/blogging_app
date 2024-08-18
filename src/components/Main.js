import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Main = () => {
    const { data, isLoading, error } = useFetch('https://blogging-point-server-0v9e.onrender.com/blogs')

    return (
        <div className="blog-list">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <Bloglist blogs={data} title='All Blogs' />}
        </div>
    );
};

export default Main;
