"use client"
import React, { Fragment, useState, useMemo } from "react";
import "./enhanced.scss";
import { LiaStoreAltSolid } from "react-icons/lia";

export interface RowData {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

interface EnhancedTableProps {
  data: RowData[];
}

const EnhancedTable: React.FC<EnhancedTableProps> = ({ data }) => {
  const [pagination, setPagination] = useState({ showInTable: 5, startToShow: 1, endToShow: 5, bigNumPagination: 6 });

  const visibleData = useMemo(() => {
    const { startToShow, endToShow } = pagination;
    return data.filter((e) => e.id >= startToShow && e.id <= endToShow);
  }, [data, pagination]);

  const showMore = (number: number) => {
    setPagination((prev) => ({
      ...prev,
      startToShow: (number - 1) * prev.showInTable + 1,
      endToShow: prev.showInTable * number
    }));
  };

  const handleRows = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(e.target.value);
    setPagination((prev) => ({
      ...prev,
      showInTable: num,
      startToShow: 1,
      endToShow: num
    }));
  };

  const goToPage = (pageNumber: number) => {
    const { bigNumPagination } = pagination;
    if (pageNumber >= bigNumPagination) {
      setPagination((prev) => ({ ...prev, bigNumPagination: prev.bigNumPagination + 1 }));
    } else if (pageNumber < 6) {
      setPagination((prev) => ({ ...prev, bigNumPagination: 6 }));
    } else {
      setPagination((prev) => ({ ...prev, bigNumPagination: prev.bigNumPagination - (prev.bigNumPagination - pageNumber - 1) }));
    }
    showMore(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousPage = () => {
    const { startToShow, showInTable } = pagination;
    if (startToShow > 1) {
      const pageNumber = Math.ceil(startToShow / showInTable) - 1;
      showMore(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToNextPage = () => {
    const { endToShow, showInTable } = pagination;
    if (endToShow < data.length) {
      const pageNumber = Math.ceil(endToShow / showInTable) + 1;
      showMore(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full grow overflow-x-hidden sm:px-5 py-5 pt-0 text-nowrap shadow-lg p-3">
      <p className="text-4xl self-start mt-5 flex"><LiaStoreAltSolid className="icon" /> Product</p>
      <div className="shadow-2xl mt-5 sm:px-3 md:px-8 py-8 pt-0 rounded-2xl overflow-x-auto">
      <table className=" text-center w-full product-table">
        <thead >
          <tr className="text-center h-24">
            <th >id</th>
            <th >Dessert (100g serving)</th>
            <th >Calories</th>
            <th >Fat (g)</th>
            <th >Carbs (g)</th>
            <th >Protein (g)</th>
          </tr>
        </thead>
        <tbody >
          {visibleData.map((row) => (
            <tr key={row.id} className="border-b">
              <td className="text-blue-700">{row.id}</td>
              <td className="text-lime-900 font-bold" >{row.name}</td>
              <td className="text-red-300">{row.calories}</td>
              <td className="text-orange-300">{row.fat}</td>
              <td className="text-green-500">{row.carbs}</td>
              <td className="text-teal-400">{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className="flex justify-between w-5/6">
        <div className="button">
          {data.length > visibleData.length && (
            <>
              <button
                onClick={goToPreviousPage}
                className={`mt-3 px-3 py-1  text-black rounded-full ${
                  pagination.startToShow === 1 ? "text-zinc-500" : ""
                }`}
                disabled={pagination.startToShow === 1}
              >
                &lt;
              </button>

              {Array.from({ length: Math.ceil(data.length / pagination.showInTable) }, (_, index) => index + 1).map(
                (number) =>
                  number > pagination.bigNumPagination && number < Math.ceil(data.length / pagination.showInTable) ? (
                    <span key={number}>.</span>
                  ) : (
                    <Fragment key={number}>
                      <button
                        onClick={() => goToPage(number)}
                        className={`mt-3 px-3 py-1 text-black rounded-full ${
                          number === pagination.endToShow / pagination.showInTable
                            ? "bg-blue-300"
                            : ""
                        }`}
                        disabled={number === pagination.endToShow / pagination.showInTable}
                      >
                        {number}
                      </button>
                    </Fragment>
                  )
              )}

              <button
                onClick={goToNextPage}
                className={`mt-3 px-3 py-1  text-black rounded-full ${
                  pagination.endToShow >= data.length ? "text-zinc-500" : ""
                }`}
                disabled={pagination.endToShow >= data.length}
              >
                &gt;
              </button>
            </>
          )}
        </div>

        <div className="mt-3 text-gray-500 rounded">
          row per
          <select
            onChange={handleRows}
            className="border px-4 py-2 right-0 outline-slate-200 z-50 relative bg-slate-300 text-black"
            value={pagination.showInTable}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
        </div>
      </section>
      </div>
    </div>
  );
};

export default EnhancedTable;
