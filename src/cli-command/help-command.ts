import chalk from 'chalk';
import { CliCommandInterface } from './cli-command.interface';

class helpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(`
        Программа для подготовки данных для REST API сервера.  

        Пример: cli.js --<command> [--arguments]
        
        Команды:
        ${ chalk.blue('--version:                   # выводит номер версии') }
        ${ chalk.blue.bgRed.bold('--help:                      # печатает этот текст')}
        ${ chalk.green.underline.bold('--import <path>:             # импортирует данные из TSV')}
        --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных
        `);
  }
}


export default helpCommand;
