function bufferOverReadExample() {
  const buffer = Buffer.from('Hello, World!');

  // Attempt to read more bytes than the buffer contains
  const result = buffer.toString('utf-8', 0, 50);

  console.log(result);
}

bufferOverReadExample();
