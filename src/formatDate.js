'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const fromSeparator = fromFormat[3];
  const toSeparator = toFormat[3];
  const fromDateArr = date.split(fromSeparator);
  const fromFormatObj = {};
  const toFormatArr = [];

  for (let i = 0; i < 3; i++) {
    fromFormatObj[fromFormat[i]] = fromDateArr[i];
  }

  const yearKey = fromFormatObj['YYYY'] ? 'YYYY' : 'YY';

  switch (yearKey) {
    case 'YYYY':
      fromFormatObj['YY'] = fromFormatObj[yearKey].slice(2);
      break;

    case 'YY':
      fromFormatObj['YYYY'] = +fromFormatObj[yearKey] < 30
        ? `20${fromFormatObj[yearKey]}`
        : `19${fromFormatObj[yearKey]}`;
      break;
  }

  /* if (yearKey === 'YY') {
    fromFormatObj['YYYY'] =
      +fromFormatObj[yearKey] < 30
        ? `20${fromFormatObj[yearKey]}`
        : `19${fromFormatObj[yearKey]}`;
  } else {
    fromFormatObj['YY'] = fromFormatObj[yearKey].slice(2);
  } */

  for (const value of toFormat.slice(0, 3)) {
    toFormatArr.push(fromFormatObj[value]);
  }

  return toFormatArr.join(toSeparator);
}

module.exports = formatDate;
