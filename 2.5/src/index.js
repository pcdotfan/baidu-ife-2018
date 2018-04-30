import { san, DataTypes } from "san";
import { router, Link } from "san-router";

import TwoPointFive from "./components/TwoPointFive.san";

router.add({
  rule: "/",
  Component: TwoPointFive
});

router.start();