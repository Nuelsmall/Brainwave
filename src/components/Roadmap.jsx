// import Heading from "./Heading";
// import Section from "./Section";
// import { roadmap } from "../constants";
// import { check2, grid, loading1 } from "../assets";
// import Tagline from "./Tagline";

// const Roadmap = () => {
//   return (
//     <Section className="overflow-hidden" id="roadmap">
//       <div className="container md:pb-10">
//         <Heading tag="Ready to get started" title="What we are working on" />

//         <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
//           {roadmap.map((item) => {
//             const status = item.status === "done" ? "Done" : "In progress";

//             return (
//               <div key={item.id} className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] 
//               ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}>

//                 <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
//                   <div className="absolute top-0 left-0 max-w-full">
//                     <img
//                       src={grid}
//                       alt="Grid"
//                       className="w-full"
//                       width={550}
//                       height={550}
//                     />                    
//                   </div>
//                   <div className="relative z-1">
//                     <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
//                         <Tagline>{item.date}</Tagline>

//                         <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
//                             <img src={item.status === "done" ? check2 : loading1} alt="status" 
//                             className="mr-2.5"
//                             width={16}
//                             height={16}
//                              />
//                              <div className="tagline">
//                                 {status}
//                              </div>
//                         </div>
//                     </div>
//                     <div className="mb-10 -my-10 -mx-15">
//                         <img src={item.imageUrl} alt="item.title" 
//                         className="w-full"
//                         width={630}
//                         height={420}
//                         />
//                     </div>
//                     <h4 className="h4 mb-4">{item.title}</h4>
//                     <p className="body-2 text-n-4">{item.text}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Roadmap;


// File path: components/Roadmap.js

import React, { memo } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

// RoadmapItem component to render each roadmap item
const RoadmapItem = memo(({ item }) => {
  const status = item.status === "done" ? "Done" : "In progress"; // Determine the status text
  const statusIcon = item.status === "done" ? check2 : loading1; // Determine the status icon
  const containerClasses = `md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
    item.colorful ? "bg-conic-gradient" : "bg-n-6"
  }`; // Define container classes based on the item properties

  return (
    <div className={containerClasses} key={item.id}>
      <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
        <div className="absolute top-0 left-0 max-w-full">
          <img className="w-full" src={grid} width={550} height={550} alt="Grid" />
        </div>
        <div className="relative z-1">
          {/* Header section with date and status */}
          <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
            <Tagline>{item.date}</Tagline>
            <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
              <img className="mr-2.5" src={statusIcon} width={16} height={16} alt={status} />
              <div className="tagline">{status}</div>
            </div>
          </div>
          {/* Image section */}
          <div className="mb-10 -my-10 -mx-15">
            <img className="w-full" src={item.imageUrl} width={628} height={426} alt={item.title} />
          </div>
          {/* Title and text section */}
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 text-n-4">{item.text}</p>
        </div>
      </div>
    </div>
  );
});

// Main Roadmap component
const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => (
          <RoadmapItem item={item} key={item.id} /> // Render each roadmap item
        ))}
        <Gradient /> {/* Gradient design element */}
      </div>
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button> {/* Button linking to the roadmap page */}
      </div>
    </div>
  </Section>
);

export default memo(Roadmap); // Memoize the Roadmap component to optimize re-renders
