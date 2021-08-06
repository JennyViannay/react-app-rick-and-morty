import React from "react";


const Pagination = ({infos, page, handleChangeNext, handleChangePrev}) => {
    return (
        <div>
            <div className="text-center">
                <div className="inline-flex mt-2">
                    {infos.prev === null ?
                        <button onClick={handleChangePrev} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 disabled">Prev</button>
                        :
                        <button onClick={handleChangePrev} className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4">Prev</button>
                    }
                    {infos.next === null ?
                        <button onClick={handleChangeNext} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 disabled">Next</button>
                        :
                        <button onClick={handleChangeNext} className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4">Next</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Pagination;