export const ROUTES_SOURCE = [
  {
    path: "/",
    label: "home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "Home" }
  },
  {
    path: "/about",
    label: "about",
    name: "about",
    component: () => import("@/views/about/index.vue"),
    meta: { title: "Who We Are" }
  },
  {
    path: "/team",
    label: "team",
    name: "team",
    component: () => import("@/views/team/index.vue"),
    meta: { title: "Our Team" }
  },
  {
    path: "/work",
    label: "work",
    name: "work",
    component: () => import("@/views/work/index.vue"),
    meta: { title: "Our Work" }
  },
  {
    path: "/work/:id",
    label: "project",
    name: "project",
    component: () => import("@/views/work/project/index.vue"),
    meta: { title: "World Vision Canada" },
    hidden: true
  },
  {
    path: "/contact",
    label: "contact",
    name: "contact",
    component: () => import("@/views/contact/index.vue"),
    meta: { title: "Get in Touch" }
  }
];
