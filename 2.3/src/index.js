import { san, DataTypes } from "san";
import { router, Link } from "san-router";

import TwoPointThree from "./components/TwoPointThree.san";

router.add({
  rule: "/",
  Component: TwoPointThree
});

router.start();