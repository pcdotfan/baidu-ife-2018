import { san, DataTypes } from "san";
import { router, Link } from "san-router";

import TwoPointFour from "./components/TwoPointFour.san";

router.add({
  rule: "/",
  Component: TwoPointFour
});

router.start();