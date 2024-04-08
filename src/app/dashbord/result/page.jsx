"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import Review from "@/app/component/Review"
import { useEffect, useState } from 'react';

const Page = () => {
    const [correctAnswersCount, setCorrectAnswersCount] = useState(null);

    useEffect(() => {
      // Retrieve correct answers count from local storage
      const count = localStorage.getItem('correctAnswersCount');
      setCorrectAnswersCount(count);
    }, []);
  return (
    <>
      <div className="d-flex">
      <SideNavbar />
      <div className="w-75" style={{ marginLeft: 'auto' }}>
      {correctAnswersCount !== null && (
            <div>
              <h2>Result</h2>
              <p>Correct Answers: {correctAnswersCount}</p>
            </div>
          )}
      </div>
    </div>
    <Foter/>
    </>
  );
};

export default Page;
