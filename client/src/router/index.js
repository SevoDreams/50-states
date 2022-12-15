import { createRouter, createWebHashHistory } from "vue-router";
import StateList from "@/components/StateList";
import AboutSite from "@/components/AboutSite";
import StateMap from "@/components/StateMap";
import NotFound from "@/components/NotFound";
import StatesVisited from "@/components/StatesVisited";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    // Depending on the path we choose, a specific component is shown
    {
      path: "/",
      name: "StateList",
      component: StateList,
      // When we go to the path (base path here), the component is shown.
    },
    {
      path: "/about",
      name: "AboutSite",
      component: AboutSite,
    },
    {
      path: "/map/:state",
      name: "StateMap",
      component: StateMap,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/visited",
      name: "StatesVisited",
      component: StatesVisited,
    },
  ],
});
