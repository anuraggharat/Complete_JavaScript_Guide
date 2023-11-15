const arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8]],
    [9, 10],
  ];
  
  function CustomFlat(arr, depth = 1) {
    let array = [];
  
    arr.forEach((e) => {
      if (Array.isArray(e) && depth > 0) {
        array = [...array,...CustomFlat(e, depth - 1)];
      } else {
        array.push(e);
      }
    });
  
    return array;
  }
  
  console.log(CustomFlat(arr, 2).toString());
  