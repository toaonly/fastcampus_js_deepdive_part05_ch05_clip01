/**
 * document.querySelector(selector) 가 null 일 가능성에 대한 처리
 */
export default function appendButton() {
  const app = document.querySelector('#app')
  const button = document.createElement('button')

  button.textContent = 'Hello Fastcampus!'
  button.addEventListener('click', () => {
    alert('Hello Fastcampus!')
  })

  app.append(button)
}
