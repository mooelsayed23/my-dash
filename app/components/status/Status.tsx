import React from "react";

const Status = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-500">
        <div className="flex flex-wrap lg:flex-col lg:flex-nowrap items-center justify-center">



          <div className="flex flex-wrap mx-4">

            <div className="bg-white flex items-start h-28 flex-grow justify-center px-4  my-0.5">
              <div className="flex-col">
                <div className="text-sm font-medium text-gray-400 my-2">
                  Summary
                </div>
                <div className="class flex items-center">
                  <div className="text-3xl font-bold text-gray-200">15k</div>
                  <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                    <div>25%</div>
                  </div>
                </div>
                <div className="w-full h-0.5 bg-gray-400">
                  <div className="w-[25%] h-0.5 bg-red-500"></div>
                </div>
                <div className="text-sm font-medium text-gray-400 ">
                  Last week 18.7k
                </div>
              </div>
            </div>
            <div className="bg-white flex items-start h-28 flex-grow justify-center px-4  my-0.5">
              <div className="flex-col">
                <div className="text-sm font-medium text-gray-400 my-2">
                  Engagement
                </div>
                <div className="class flex items-center">
                  <div className="text-3xl font-bold text-gray-200">23k</div>
                  <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                    <div>85%</div>
                  </div>
                </div>
                <div className="w-full h-0.5 bg-gray-400">
                  <div className="w-[85%] h-0.5 bg-green-500"></div>
                </div>
                <div className="text-sm font-medium text-gray-400 ">
                  Last week 10.2k
                </div>
              </div>
            </div>

            
          </div>





          <div className="flex flex-wrap mx-4">
            <div className="bg-white flex items-start h-28 flex-grow justify-center px-4  my-0.5">
              <div className="flex-col">
                <div className="text-sm font-medium text-gray-400 my-2">
                  Customers
                </div>
                <div className="class flex items-center">
                  <div className="text-3xl font-bold text-gray-200">43k</div>
                  <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                    <div>40%</div>
                  </div>
                </div>
                <div className="w-full h-0.5 bg-gray-400">
                  <div className="w-[40%] h-0.5 bg-red-500"></div>
                </div>
                <div className="text-sm font-medium text-gray-400 ">
                  Last week 44.9k
                </div>
              </div>
            </div>
            <div className="bg-white flex items-start h-28 flex-grow justify-center px-4  my-0.5">
              <div className="flex-col">
                <div className="text-sm font-medium text-gray-400 my-2">
                  Views
                </div>
                <div className="class flex items-center">
                  <div className="text-3xl font-bold text-gray-200">107k</div>
                  <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                    <div>35%</div>
                  </div>
                </div>
                <div className="w-full h-0.5 bg-gray-400">
                  <div className="w-[35%] h-0.5 bg-green-500"></div>
                </div>
                <div className="text-sm font-medium text-gray-400 ">
                  Last week 97k
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Status;
