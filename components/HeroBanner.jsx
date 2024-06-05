// import React from 'react';
// import Link from 'next/link';

// import { urlFor } from '../LIB/client';


// const HeroBanner = ({heroBanner}) => {
//   return (
//     <div className='hero-banner-container'>
//       <div>
//         <p className='beats-solo'>{HeroBanner.smallText}</p>
        
//         <h3>{HeroBanner.midText}</h3>
//         <h1>{HeroBanner.largeText1}</h1>
//           <img src={urlFor(HeroBanner.image).url()} alt="headphones"  className="hero-banner-image"/>  
          
        
        

//         <div>
//          <Link href={'/product/${HeroBanner.product}'}> 
//             <button type='button'>{HeroBanner.buttonText}</button>
            
//           </Link> 

//           <div className='desc'>
//             <h5>Description</h5>
//             <p>{HeroBanner.desc}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroBanner



import React from 'react';
import Link from 'next/link';

import { urlFor } from '../LIB/client';
import Image from 'next/image'

const HeroBanner = ({ heroBanner }) => {
  // if (!heroBanner) {
  //   return <div>No data available</div>;
  // }
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        
        
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
          {/* <img src={urlFor(heroBanner.image).url()} alt="headphones"  className="hero-banner-image"/>  */}
          <Image src={urlFor(heroBanner.image).url()} alt="headphones"  className="hero-banner-image"/> 
          
        
        

        <div>
         <Link to={`/product/${heroBanner.product}`}> 
            <button type='button'>{heroBanner.buttonText}</button>
          </Link> 

          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;
