import React, { useState } from 'react';
import '../blog/blog.css';
import PostOne from '../../assets/One.png';
import PostTwo from '../../assets/Two.png';
import PostThree from '../../assets/Three.png';

function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

  const handleExpandPost = (postIndex) => {
    setExpandedPost(postIndex);
  };

  return (
    <>
      <section id='blog'>
      <div id='blogContainer' className='flex flex-col h-full w-full'>
        <div className="blogImage">
          <h1 className='blogHeading'> BLOG </h1>
        </div>
          <div className="blogPostContainer grid ml-20 md:ml-0 lg:ml-0 md:flex md:flex-wrap justify-center items-center h-full w-full overflow-hidden gap-4 md:gap-8">
            {[
              { image: PostOne, heading: "Working World", text: "The start of my journey into becoming an adult..." },
              { image: PostTwo, heading: "New Beginnings", text: "The opportunity I've been waiting for..." },
              { image: PostThree, heading: "One Step Closer", text: "6 months later and phase 2 has begun..." },
            ].map((post, index) => (
              <div
                key={index}
                className={`postContainer items-center w-[70%] h-[70%] md:w-1/1 md:h-[32%] lg:w-1/4 lg:h-[75%] xl:w-1/4  bg-white flex flex-col space-y-3 ${expandedPost === index ? 'expanded' : ''}`}
              >
                {expandedPost !== index ? (
                  <>
                    <img src={post.image} alt="" className="w-full mb-2" />
                    <h2 className='postHeading text-center text-xl font-semibold mb-2'>{post.heading}</h2>
                    <br />
                    <p className='postText text-sm mb-4 m-2'>{post.text}</p>
                    <button onClick={() => handleExpandPost(index)} className='inline-block self-center px-8 py-4 bg-[#000000] text-white px-4 py-2 rounded-md hover:bg-[#D9171F]'> Read More </button>
                  </>
                ) : (
                  <>
                    {/* Content to show when expanded */}
                    <p>Additional content for {post.heading}</p>
                    {/* You can add any other content here */}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;