
// "use client"
// import React, { useState } from 'react';
// import SideNavbar from '@/app/component/SideNavbar';
// import Foter from '@/app/component/Foter';
// import TopBanner from '@/app/component/TopBanner';
// import ChartComponent from '@/app/component/ChartComponent';
// import Link from 'next/link';

// const Account = () => {
//   const [sortOption, setSortOption] = useState('default');

//   const handleSort = (option) => {
//     setSortOption(option);
//   };

//   return (
//     <>
//       <div className="d-flex">
//         <SideNavbar />
//         <div className="w-75" style={{ marginLeft: 'auto' }}>
//           {/* Add sorting navigation */}
//           <nav>
//             <div
//               role="button"
//               onClick={() => handleSort('default')}
//               onKeyDown={() => handleSort('default')}
//               tabIndex={0}
//             >
//               Default
//             </div>
//             <div
//               role="button"
//               onClick={() => handleSort('option1')}
//               onKeyDown={() => handleSort('option1')}
//               tabIndex={0}
//             >
//               Option 1
//             </div>
//             <div
//               role="button"
//               onClick={() => handleSort('option2')}
//               onKeyDown={() => handleSort('option2')}
//               tabIndex={0}
//             >
//               Option 2
//             </div>
//             <div
//               role="button"
//               onClick={() => handleSort('option3')}
//               onKeyDown={() => handleSort('option3')}
//               tabIndex={0}
//             >
//               Option 3
//             </div>
//           </nav>

//           {/* Conditionally render components based on sort option */}
//           {sortOption === 'default' && <ChartComponent />}
//           {sortOption === 'option1' && <ChartComponent />}
//           {sortOption === 'option2' && <TopBanner />}
//           {sortOption === 'option3' && <ChartComponent />}
//         </div>
//       </div>
//       <Foter />
//     </>
//   );
// };

// export default Account;

"use client"
import React, { useState } from 'react';
import SideNavbar from '@/app/component/SideNavbar';
import Foter from '@/app/component/Foter';
import TopBanner from '@/app/component/TopBanner';
import ChartComponent from '@/app/component/ChartComponent';
import Link from 'next/link';

const Account = () => {


  return (
    <>
      <div className="d-flex">
        <SideNavbar />
        <div className="w-75" style={{ marginLeft: 'auto' }}>
         
          <ChartComponent />

        </div>
      </div>
      <Foter />
    </>
  );
};

export default Account;
