#!/usr/bin/env node
import { executeCommand, paintText } from "./util";
executeCommand('执行命令', []);
console.log(paintText(`#FF0000`, `hello world1`));