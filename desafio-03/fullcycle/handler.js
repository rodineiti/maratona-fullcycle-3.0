"use strict";

const calculate = (a = 0, b = 0) => {
  return parseFloat(a.replace(",", ".")) + parseFloat(b.replace(",", "."));
};

module.exports.soma = async ({ queryStringParameters }) => {
  const { a, b } = queryStringParameters || {};

  let total = 0;

  if (a && b) {
    total = calculate(a, b);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ resultado: total }, null, 2),
  };
};
