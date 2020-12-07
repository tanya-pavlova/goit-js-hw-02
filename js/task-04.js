
const formatString = function(string) {
   
  if (string.length <= 40) {
    return string;}

    else {
        const longString = string.split('');
        longString.splice(40);
        longString.push('...');

        return longString.join('');
    }
}

  
   

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

  console.log(formatString('Curabitur ligula sapien.'));

  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
    );