console.log('connected')
async function getUsers() {
  const data = await fetch(`/.netlify/functions/getUsers`)
  const res = await data.json()
  console.log(res)
  let userList = document.querySelector('#users')
  res.forEach((user) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    const img = document.createElement('img')
    img.src = user.avatar_url
    img.className = 'imgStyle img-thumbnail'
    link.innerText = user.login
    link.href = user.html_url
    link.target = '_blank'
    li.appendChild(link)
    userList.appendChild(li)
    userList.appendChild(img)
  })
}
getUsers()
