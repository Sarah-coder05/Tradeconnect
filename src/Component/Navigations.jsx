import { Link } from "react-router-dom";

const navigations = [
  {
    component: Link,
    name: "Dashboard",
    to: "/dashboard/home",
    activeIcon: "/images/category.svg",
  },
  {
    component: Link,
    name: "Search Vendors",
    to: "/dashboard/search",
    activeIcon: "/images/people.svg",
  },
  {
    component: Link,
    name: "Messages",
    to: "/dashboard/messages",
    activeIcon: "/images/directbox-notif.svg",
  },
  {
    component: Link,
    name: "Subscription",
    to: "/dashboard/subscription",
    activeIcon: "/images/wallet-money.svg",
  },
  {
    component: Link,
    name: "Transactions",
    to: "/dashboard/transactions",
    activeIcon: "/images/gift.svg",
  },
  {
    component: Link,
    name: "Notification",
    to: "/dashboard/notifications",
    activeIcon: "/images/notification.svg",
  },
  {
    component: Link,
    name: "Settings",
    to: "/dashboard/settings",
    activeIcon: "/images/setting-2.svg",
  },
];

export default navigations;