import React from "react";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-12 ">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <h2 className="text-red-500 text-sm font-semibold">Featured</h2>
          </div>
          <div className="flex items-center gap-8">
            <h3 className="text-3xl font-semibold">New Arrival</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
