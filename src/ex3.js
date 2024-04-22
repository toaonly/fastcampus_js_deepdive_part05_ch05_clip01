/**
 * 제너릭 타입 처리
 */
export default function getLength(havningSize) {
  return typeof havningSize.size === 'number'
    ? havningSize.size
    : havningSize.length
}
