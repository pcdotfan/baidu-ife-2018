import { san, DataTypes } from "san";
import { router, Link } from "san-router";

import TwoPointTwo from "./components/TwoPointTwo.san";

router.add({
  rule: "/",
  Component: TwoPointTwo
});

router.start();