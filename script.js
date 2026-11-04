/* ОЛСНЫ ЗАЙГ ХЯЗГААРЛАХ */
function getSafeLimit() {
  return WIN_DISTANCE;
}

/* ОЛС ХӨДӨЛГӨХ */
function moveRope() {
  const limit = getSafeLimit();

  const offset = Math.max(
    -limit,
    Math.min(limit, ropeOffset)
  );

  ropeGroup.style.setProperty(
    "--rope-offset",
    `${offset}px`
  );
}
