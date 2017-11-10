import { Logger } from './logger'

let logger = new Logger();

const testMsg = 'Log Test';
const errorMsg = 'Error Log Test';
const warnMsg = 'Warning Log Test';
const tableTest = ['Dave','Mary','Sally']
const tableTest2 = [{Name:'dave'},{Name:'Mary'},{Name:'Sally'}]
const tableTest3 = 'Dave';

logger.log(testMsg);
logger.warn(warnMsg);
logger.error(errorMsg);
logger.table(tableTest);
logger.table(tableTest2);
logger.table(tableTest3);


