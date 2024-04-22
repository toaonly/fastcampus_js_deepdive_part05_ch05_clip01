/**
 * (type 혹은 interface 선언한) 객체 처리시 파라미터가 없을 경우에 대한 처리
 * userData 는 반드시 존재함
 * friends 가 없을 수 있음
 * friendliness 가 없을 수 있음
 */
export default function createUser(userData) {
  const user = {
    name: userData.name,
    email: userData.email,
    friends: userData.friends,
    bestFriend: userData.friends.reduce((bf, friend) => {
      return bf.friendliness < friend.friendliness ? friend : bf
    }),
  }

  return user
}
