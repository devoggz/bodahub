import AddPostForm from "@/components/posts/AddPostForm";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto h-screen p-6  bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <AddPostForm />
    </div>
  );
};

export default page;
