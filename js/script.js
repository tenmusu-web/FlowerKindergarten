jQuery(function ($) {


    //-----------------------
    //  ドロワーメニューの実装
    //-----------------------

    $('.p-drawer__icon').on('click', function () {
        $(this).toggleClass('js-open');  //アイコンの動きを操作
        $('.p-drawer__menu').slideToggle(); //ドロワーメニューをスライドで出し入れ
        //別の指定があったらclassのつけ外しで制御しても良い
        $('body').toggleClass('no-scroll');
        //メニュー開いているときにスクロールしないようにする
        return false;
    });

    //背景画像をクリックしたら消えるようにする
    $('.p-drawer__menu--bg').on('click', function () {
        $('.p-drawer__menu ').slideUp();
        $('body').removeClass('no-scroll');
        $('.p-drawer__icon').removeClass('js-open');
        return false;
    });

    //ドロワーメニューを開いたままPC版サイズまで広げたときにドロワーメニューが自動で消えるようにする
    $(window).resize(function () {
        var windowWidth = $(window).width();
        var windowSm = 767; // ブレイクポイント - 1px
        if (windowSm < windowWidth) {
            $('.p-drawer__menu').slideUp();
            $('body').removeClass('no-scroll');
            $('.p-drawer__icon').removeClass('js-open');
        }
    });

});
