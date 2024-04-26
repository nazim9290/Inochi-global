// "use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation'

// const ServiceCard = ({ data }) => {
//     const router = useRouter();

//     const handleCardClick = () => {
//         router.push(`/post/${data._id}`);
//         // console.log(data._id)
//     };
//     // console.log(data.image)
//     return (
//         <>
//             {
//                 data.image ? (<>
//                     <div className="my-5">

//                         <div className="row my-lg-4">
//                             <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
//                                 <div className="card shadow rounded">
//                                     <div className="card-body text-center">
//                                         <Image src={data.image.url} alt="Bootstrap" width={150} height={150} /><br />
//                                         <p className="text-center mb-5"><b>{data.title}</b></p>
//                                         <p className="text-center mb-5"><b>{data.content}</b></p>

//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>



//                 </>) : (<></>)
//             }
//         </>
//     );
// }

// export default ServiceCard;
// import { useState } from 'react';

// const ServiceCard = ({ data }) => {
//     const router = useRouter();
//     const [showFullContent, setShowFullContent] = useState(false);

//     const handleCardClick = () => {
//         router.push(`/post/${data._id}`);
//     };

//     // Function to truncate the string if it exceeds 40 characters
//     const truncateText = (text, maxLength) => {
//         if (text.length > maxLength) {
//             return text.substring(0, maxLength) + '...';
//         }
//         return text;
//     };

//     return (
//         <>
//             {
//                 data.image ? (
//                     <div className="my-5">
//                         <div className="row my-lg-4">
//                             <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
//                                 <div className="card shadow rounded">
//                                     <div className="card-body text-center">
//                                         <Image src={data.image.url} 
//                                         alt="Bootstrap" width={150} height={150} /><br />
//                                         <p className="text-center mb-5"><b>{data.title}</b></p>
//                                         {showFullContent ? (
//                                             <p className="text-center mb-5"><b>{data.content}</b></p>
//                                         ) : (
//                                             <p className="text-center mb-5">
//                                             <b>{truncateText(data.content, 40)}</b></p>
//                                         )}
//                                         {!showFullContent && (
//                                             <button className="btn btn-link linkbtns" onClick={() =>
//                                              handleCardClick}>Read More</button>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (<></>)
//             }
//         </>
//     );
// }

// export default ServiceCard;
import { useState } from 'react';

const ServiceCard = ({ data }) => {
    const router = useRouter();
    const [showFullContent, setShowFullContent] = useState(false);

    const handleCardClick = () => {
        router.push(`/post/${data._id}`);
    };

    // Function to trim the content to a certain word count
    const trimContent = (text, wordCount) => {
        const words = text.split(' ');
        if (words.length > wordCount) {
            return words.slice(0, wordCount).join(' ') + '...';
        }
        return text;
    };

    return (
        <>
            {
                data.image ? (
                    <div className="my-5">
                        <div className="row my-lg-4">
                            <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                                <div className="card shadow rounded">
                                    <div className="card-body text-center">
                                        <Image src={data.image.url} alt="Bootstrap" 
                                        width={200} height={200} /><br />
                                        <p className="text-center mb-2"><b>{data.title}</b></p>
                                        {showFullContent ? (
                                            <p className="text-center mb-2"><b>{data.content}</b></p>
                                        ) : (
                                            <p className="text-center mb-2"><b>{trimContent(data.content, 10)}</b></p>
                                        )}
                                        {!showFullContent && (
                                            <button className="btn btn-link linkbtns" onClick={() => 
                                            handleCardClick}>Read More</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<></>)
            }
        </>
    );
}

export default ServiceCard;

