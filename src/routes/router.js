import { About } from "../views/about.view";
import { Resume } from "../views/resume.view";
import { Skills } from "../views/skills.view";

export const routes = [
  {
    path: "/",
    component: About,
    key: "about-path",
  },
  {
    path: "/skills",
    component: Skills,
    key: "skills-path",
  },
  {
    path: "/resume",
    component: Resume,
    key: "resume-path",
  },
];
