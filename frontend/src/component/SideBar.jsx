import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import {
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function SidebarComponent() {
  // Create a state variable to track whether the "Filter By Category" is open
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="w-22"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <Link to="/">Home</Link>
          </Sidebar.Item>

          <Sidebar.Collapse
            icon={HiShoppingBag}
            label="Filter By Category"
            open={isFilterOpen}
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "off" : "on"]
                  )}
                />
              );
            }}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id="mensClothing"
                className="ml-3 pr-4 rounded-md"
              />
              <label htmlFor="mensClothing" className="ml-2">
                Men's Clothing
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="womensClothing"
                className="ml-3 pr-4 rounded-md"
              />
              <label htmlFor="womensClothing" className="ml-2">
                Women's Clothing
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="jewelry"
                className="ml-3 pr-4 rounded-md"
              />
              <label htmlFor="jewelry" className="ml-2">
                Jewelry
              </label>
            </div>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={HiShoppingBag}
            label="Sort By Price"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "off" : "on"]
                  )}
                />
              );
            }}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="sorting"
                className="ml-3 pr-4 rounded-md"
              />
              <label className="ml-2">Price Low to High</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="sorting"
                className="ml-3 pr-4 rounded-md"
              />
              <label className="ml-2">High To Low</label>
            </div>
          </Sidebar.Collapse>

          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
