let unionInference: string | number;
unionInference = 'ts';
console.log('unionInference string length: ', unionInference.length);

unionInference = 18; // 永远活在那 18 岁
console.log('unionInference number length: ', unionInference.length);
