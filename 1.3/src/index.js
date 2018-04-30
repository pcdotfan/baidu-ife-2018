import { san, DataTypes } from "san";
import { router, Link } from "san-router";

import TwoPointOne from "./components/TwoPointOne.san";

router.add({
  rule: "/",
  Component: TwoPointOne
});

router.start();