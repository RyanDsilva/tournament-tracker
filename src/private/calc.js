// eslint-disable-next-line
const calc = score => {
  const judge1f1 = score.judge1.f1 * 0.1;
  const judge1f2 = score.judge1.f2 * 0.3;
  const judge1f3 = score.judge1.f3 * 0.2;
  const judge1f4 = score.judge1.f4 * 0.4;
  const judge1f5 = score.judge1.f5 * 0.1;
  const judge1 = judge1f1 + judge1f2 + judge1f3 + judge1f4 + judge1f5;

  const judge2f1 = score.judge2.f1 * 0.1;
  const judge2f2 = score.judge2.f2 * 0.3;
  const judge2f3 = score.judge2.f3 * 0.2;
  const judge2f4 = score.judge2.f4 * 0.4;
  const judge2f5 = score.judge2.f5 * 0.1;
  const judge2 = judge2f1 + judge2f2 + judge2f3 + judge2f4 + judge2f5;

  return ((judge1 + judge2) / 2).toFixed(3);
};

export default calc;
