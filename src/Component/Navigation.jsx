import React from "react";
import LogoutButton from "./Logout"; // Adjust path as needed
import navigations from "./Navigations"; // Replace with your navigation data; // Optional for CSS if Tailwind isn't being used

const SideBar = () => {
  // Simulating the current path for active link highlighting
  const currentPath = window.location.pathname;

  return (
    <div className="border m-3 border-[#EBEBEB] rounded-[10px] h-full">
      <aside className="flex flex-col h-full">
        {/* Logo */}
        <div className="self-center py-5">
          <img
            src="/images/trade_connect.svg" // Update to correct image path
            alt="Trade Connect Logo"
            width={95}
            height={90}
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 flex-grow">
          {navigations.map((dashboardNavigation, index) => {
            const isActive =
              currentPath === dashboardNavigation.to || currentPath.includes(dashboardNavigation.to);
            const isSecondToLast = index === navigations.length - 2;

            return (
              <div key={dashboardNavigation.name}>
                {/* Active Link Highlight */}
                <div className={`${isActive ? "bg-[#992B1C]" : ""} rounded-md`}>
                  <a href={dashboardNavigation.to} className="no-underline">
                    <span
                      className={`flex px-3 gap-3 py-2 rounded-md mx-4 my-2 ${
                        isActive ? "bg-[#992B1C] text-white" : "bg-transparent text-black"
                      }`}
                    >
                      <img
                        src={dashboardNavigation.activeIcon} // Update image path
                        alt={dashboardNavigation.name}
                        width={24}
                        height={24}
                      />
                      <p>{dashboardNavigation.name}</p>
                    </span>
                  </a>
                </div>

                {/* Separator Before Logout */}
                {isSecondToLast && <div className="border-b border-[#8E8E8E]" />}
              </div>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto p-4">
          <LogoutButton/>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
