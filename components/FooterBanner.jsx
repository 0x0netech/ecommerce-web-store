// import React from 'react';
// import Link from "next/link";
// import { urlFor } from '@/LIB/client';

// const FooterBanner = ({footerBanner:{discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText,image}}) => {
//   return (
//     <div className = "footer-banner-container">
//       <div className = "banner-desc">
//           <div className="left">
//              <p>{discount}</p>
//              <h3>{largeText1}</h3>
//              <h3>{largeText2}</h3>
//              <p>{saleTime}</p>


//           </div>
//           <div className= "right">
//             <p>{smallText}</p>
//             <h3>{midText}</h3>
//             <p>{desc}</p>
//             <link href={'/product/${product}'}>
//               <button type='button'>{buttonText}
              
//               </button>
            
//             </link>

//           </div>
//           <img src= {urlFor(image)} className='footer-banner-image'/>
//       </div>
//     </div>
//   )
// }

// export default FooterBanner

// import React from 'react';
// import Link from "next/link";
// import { urlFor } from '@/LIB/client';

// const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image } }) => {
//   return (
//     <div className="footer-banner-container">
//       <div className="banner-desc">
//         <div className="left">
//            <p>{discount}</p> 
//           <h3>{largeText1}</h3>
//           <h3>{largeText2}</h3>
//           <p>{saleTime}</p>
//         </div>
//         <div className="right">
//           <p>{smallText}</p>
//           <h3>{midText}</h3>
//           <p>{product.desc}</p> {/* Assuming the product object has a 'desc' property */}
//           <Link href={`/product/${product}`}>
//             <button type="button">{buttonText}</button>
//           </Link>
//         </div>
//         <img src={urlFor(image)} className="footer-banner-image" alt="Footer Banner" />
//       </div>
//     </div>
//   );
// };

// export default FooterBanner;


 import React from 'react';
 import Link from "next/link";
//  import { urlFor } from '@/LIB/client';
 import { urlFor } from '../LIB/client';
import Image from 'next/image'


 const FooterBanner = ({ footerBanner }) => {
//   // Destructure the properties from the footerBanner object
   const { discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image } = footerBanner || {};

   return (
    <div className="footer-banner-container">
       <div className="banner-desc">
         <div className="left">
           <p>{discount}</p> 
           <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
           <p>{saleTime}</p>
         </div>
        <div className="right">
           <p>{smallText}</p>
          <h3>{midText}</h3>
          {product && <p>{product.desc}</p>}
           {product && (
             <Link to={`/product/${product}`}>
               <button type="button">{buttonText}</button>
             </Link>
          )}
         </div>
         {/* {image && <img src={urlFor(image)} className="footer-banner-image" alt="Footer Banner" />} */}
         <Image src={urlFor(image)} className="footer-banner-image" alt="Footer Banner"/>
       </div>
     </div>
   );
 };

 export default FooterBanner;

// import React, { useEffect, useState } from 'react';
// // import client from '../my-webstore/sanity.cli';
// import imageUrlBuilder from '@sanity/image-url';
// import Link from 'next/link';

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   return builder.image(source);
// }

// const FooterBanner = () => {
//   const [footerBannerData, setFooterBannerData] = useState(null);

//   useEffect(() => {
//     // Fetch the data from Sanity using the client
//     client.fetch(
//       `*[_type == "footerBanner"][0] {
//         discount,
//         largeText1,
//         largeText2,
//         saleTime,
//         smallText,
//         midText,
//         'product': product->{
//           desc
//         },
//         buttonText,
//         'image': image.asset->url
//       }`
//     )
//       .then((data) => {
//         setFooterBannerData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching footer banner data:', error);
//       });
//   }, []);

//   if (!footerBannerData) {
//     return null; // Return early if data is still loading or not available
//   }

//   return (
//     <div className="footer-banner-container">
//       <div className="banner-desc">
//         <div className="left">
//           <p>{footerBannerData.discount}</p>
//           <h3>{footerBannerData.largeText1}</h3>
//           <h3>{footerBannerData.largeText2}</h3>
//           <p>{footerBannerData.saleTime}</p>
//         </div>
//         <div className="right">
//           <p>{footerBannerData.smallText}</p>
//           <h3>{footerBannerData.midText}</h3>
//           <p>{footerBannerData.product.desc}</p>
//           <Link href={`/product/${footerBannerData.product._id}`}>
//             <button type="button">{footerBannerData.buttonText}</button>
//           </Link>
//         </div>
//         <img src={urlFor(footerBannerData.image)} className="footer-banner-image" alt="Footer Banner" />
//       </div>
//     </div>
//   );
// };

// export default FooterBanner;
