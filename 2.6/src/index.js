import { san, DataTypes } from "san";
import { router, Link } from "san-router";

import TwoPointSix from "./components/TwoPointSix.san";
import UIkit from 'uikit';

router.add({
  rule: "/",
  Component: TwoPointSix
});

router.start();