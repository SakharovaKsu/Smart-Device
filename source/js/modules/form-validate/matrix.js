export const matrixReplace = (item, matrix, RegEx) => {
  if (!matrix) {
    console.error('При валидации по матрице обязательно указывать формат матрицы: data-matrix=""');
    item.value = '';
    return;
  }

  if (!RegEx) {
    console.error('При валидации по матрице обязательно указывать формат ограничений: data-matrix-limitations=""');
    item.value = '';
    return;
  }

  const def = matrix.replace(RegEx, '');
  let val = item.value.replace(RegEx, '');
  let i = 0;

  if (def.length >= val.length) {
    val = def;
  }

  item.value = matrix.replace(/./g, (a) => {
    if (/[_\^]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    } else {
      return a;
    }
  });
};
