import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className=" bg-gray-100 text-blue-500 text-sm uppercase font-light tracking-wide">
       {title}
      </h3>
      <h1 className="text-4xl bg-gray-100 text-blue-500 md:text-5xl font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title