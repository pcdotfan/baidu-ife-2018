import { san, DataTypes } from "san";
import { router, Link } from "san-router";

import TwoPointSix from "./components/TwoPointSix.san";

router.add({
  rule: "/",
  Component: TwoPointSix
});

router.start();