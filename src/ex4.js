/**
 * entries 와 reduce 를 사용했을 경우 타입 추론의 처리
 */
export default function keyValueSwap(data) {
  return Object.entries(data).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [v]: k,
    }
  }, {})
}
