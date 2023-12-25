"use client";
import { Suspense } from 'react'

import CreateBlog from '../../component/createBlog';
const Page = () => {
  return (
    <div>
    <Suspense fallback={<p>Loading Blog page ...</p>}>
    <CreateBlog/>

      </Suspense>
    </div>
  );
}

export default Page;
