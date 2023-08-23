import React, { useState } from 'react';
import '../blog/blog.css';
import PostOne from '../../assets/One.png';
import PostTwo from '../../assets/Two.png';
import PostThree from '../../assets/Three.png';

function Blog() {
  const [expandedPosts, setExpandedPosts] = useState(Array(3).fill(false)); // Initialize with the number of posts you have

  const handleExpandPost = (postIndex) => {
    const newExpandedPosts = expandedPosts.map((value, index) =>
      index === postIndex ? !value : false
    );
    setExpandedPosts(newExpandedPosts);
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
                className={`postContainer items-center w-[70%] h-[70%] md:w-1/1 md:h-[32%] lg:w-1/4 lg:h-[75%] xl:w-1/4 bg-white rounded-lg p-4 flex flex-col space-y-3 ${expandedPosts[index] ? 'expanded' : ''}`}
              >
                {expandedPosts[index] ? (
                  <>
                    {/* Expanded content */}
                    <h2 className='expandedHeading'>{post.heading}</h2>
                    <p>
                      {/* Add additional text or components specific to this post */}
                      {/* For example: */}
                      {index === 0 && (
                        <>
                          <p className='text-center'>The transition into adulthood coincided with a pivotal opportunity at Innovo Networks. As a PABX Technician, my role encompassed not only technical support but also marked the commencement of practical experience in the professional realm. Innovo Networks provided the platform to bridge the gap between theoretical knowledge and hands-on application—a foundational step in my journey into the world of work.</p>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <p className='text-center mt-5'>The awaited opportunity has arrived, presented by CapaCiTi—a chance to upskill in full-stack development over the next 6 months. This is the gateway I've been anticipating, where aspirations meet action. CapaCiTi's program offers a dedicated timeframe to hone expertise, a transformative journey into a new realm of skills and knowledge.</p>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <p className='text-center'>Now, after 6 months, the next chapter unfolds—phase 2 commences. This time, it's at younglings, where the upcoming year will be dedicated to crafting full-stack websites. This stretch offers not just skill refinement, but a chance to immerse myself in practical application. As the year unfolds, the goal comes into focus: the aspiration to secure a permanent position by the journey's end.</p>
                        </>
                      )}
                    </p>
                  </>
                ) : (
                  <>
                    {/* Short content */}
                    <img src={post.image} alt="" className="w-full mb-2" />
                    <h2 className='postHeading text-center text-xl font-semibold mb-2'>{post.heading}</h2>
                    <br />
                    <p className='postText text-sm mb-4 m-2'>{post.text}</p>
                    <button onClick={() => handleExpandPost(index)} className='inline-block self-center px-8 py-4 bg-[#000000] text-white px-4 py-2 rounded-md hover:bg-[#D9171F]'> Read More </button>
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