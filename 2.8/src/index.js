import { san, DataTypes } from "san";
import { router, Link } from "san-router";

import TwoPointSevenOne from "./components/TwoPointSevenOne.san";

router.add({
  rule: "/",
  Component: TwoPointSevenOne
});

router.start();