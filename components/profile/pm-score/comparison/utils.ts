// 0 -  29
// 30 - 49
// 50 - 100
export const getPointerRotate = (percentage: number) => {
  if (percentage > 49) return 120 + percentage * 0.6
  if (percentage > 29) return 60 + (percentage - 30) * 3.16
  return percentage * 2.05
}
