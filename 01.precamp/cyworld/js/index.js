
// ifram의 setAttribute를 이용하여 속성값을 변경
const menuHome = () => {
  document.getElementById('contextFrame').setAttribute("src","home.html")
  document.getElementById('menuHome').style = "color : #000; background-color: #fff;"
  document.getElementById('menuJukebox').style = "color : #fff; background-color: #55b2e4;"
  document.getElementById('menuGame').style = "color : #fff; background-color: #55b2e4;"
} 
const menuJukebox = () => {
  document.getElementById('contextFrame').setAttribute("src","jukebox.html")
  document.getElementById('menuJukebox').style = "color : #000; background-color: #fff;"
  document.getElementById('menuHome').style = "color : #fff; background-color: #55b2e4;"
  document.getElementById('menuGame').style = "color : #fff; background-color: #55b2e4;"
} 
const menuGame = () => {
  document.getElementById('contextFrame').setAttribute("src","game.html")
  document.getElementById('menuGame').style = "color : #000; background-color: #fff;"
  document.getElementById('menuHome').style = "color : #fff; background-color: #55b2e4;"
  document.getElementById('menuJukebox').style = "color : #fff; background-color: #55b2e4;"
} 