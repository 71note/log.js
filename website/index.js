
//加载顶部查询逻辑
let searchInputNode = document.getElementById('searchInput');
let searchInputBtnNode = document.getElementById('searchInputBtn');

searchInputBtnNode.onclick = function (){
    window.open(`https://logjs.site/chatGPT.html?q=${searchInputNode.value}`);
}