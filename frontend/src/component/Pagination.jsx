"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

export default function PaginationComp(page = 1) {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page = 1) => setCurrentPage(page);

  return (
    <div className="flex items-center justify-center text-center text-white-500">
      <Pagination
        currentPage={1}
        layout="table"
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
        totalPages={1000}
      />
    </div>
  );
}
