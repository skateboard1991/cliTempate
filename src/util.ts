import chalk from 'chalk';
const { spawnSync } = require('child_process');

/**
 * 设置文字颜色
 * @param color #RRGGBBAA 
 * @param text 
 * @returns 
 */
export function paintText(color: string, text: string): string {
    return chalk.hex(color)(text);
}



/**
 * 执行系统指令
 * @param command 
 */
export function executeCommand(command: string, params: string[]) {
    const result = spawnSync(command, params, { stdio: 'inherit' });
    // 处理错误
    if (result.error) {
        console.error('Error:', result.error);
        process.exit(result.errno);
        // 这里可以添加更多的错误处理逻辑
    }

    // 返回命令的状态码
    return result.status;
}