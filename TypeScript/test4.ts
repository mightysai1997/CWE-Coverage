import * as readlineSync from 'readline-sync';

const buffer: Buffer = Buffer.alloc(10);
const bytesRead: number = process.stdin.readSync(buffer, 0, 15);

console.log(buffer.toString());
