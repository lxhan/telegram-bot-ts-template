import { createBackMainMenuButtons } from "telegraf-inline-menu";
import { MyContext } from "../my-context";

export const backButtons = createBackMainMenuButtons<MyContext>(
  (context) => "back",
  (context) => "main"
);
