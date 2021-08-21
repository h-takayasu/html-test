
// どの部分をパパラックスするかを指定する
// imageというクラスのdivの中にimgで画像を入れ込んでいる状態
// speedをプラスの値に指定すると要素は上に上がっていく
// 要素が画面の真ん中に来た時に超ど真ん中に配置する、基本trueに設定する
// callbackで現在のスクロール値を取得できる
// またHTMLにカスタム属性をつけて調整する方法もある
const image = new Rellax('.image_horizontal img',{
    speed:-1,
    center:true,
});

const shape_rhombus = new Rellax('.contents .shape_rhombus',{
    speed:-4,
    center:true,
});

// スクロールされたときにナビゲーションを出すためのJavaScript
document.addEventListener('scroll',function(){
    // 現在の位置が画面上からどれぐらいかを取得　＝　スクロールすると徐々に値は大きくなる
    const scrollY = window.pageYOffset;
    console.log("スクロール位置"+scrollY+"*************************************")
    /*.クラスからノードを取得*/
    // console.log(GetHtmlElement);
    /*.クラス0から子要素を取得*/
    // console.log(GetHtmlElement[0].childNodes);
    // // 現在の画面後半の位置を取得する
    // const scrollUnderpage = document.getElementById('bottombackgroud').getBoundingClientRect().top
    // console.log("要素への距離" + scrollUnderpage)
    // // 少しでも下にスクロールすれば
    // if (scrollY > 600) {
    //     document.getElementById('navs').classList.add('active');
    // } else {
    //     document.getElementById('navs').classList.remove('active');
    // }
    // スクロールが少しでも行われたらナビゲーションバーを表示させる *****************************
    if (scrollY > 300) {
        document.getElementById('navs').classList.add('active');
    } else {
        document.getElementById('navs').classList.remove('active');
    }
    // *************************************************************************************
})