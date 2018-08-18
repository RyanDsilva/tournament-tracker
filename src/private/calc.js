// eslint-disable-next-line
const calc = score => {
  const p1 = score.f1 * 0.5;
  const p2 = score.f2 * 0.3;
  const p3 = score.f3 * 0.6;
  const p4 = score.f4 * 0.2;
  const p5 = score.f5 * 0.7;
  return (p1 + p2 + p3 + p4 + p5).toFixed(3);
};

export default calc;
