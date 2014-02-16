




/*-------------
ページスクロール
-----------*/



<<<<<<< HEAD
$(function() {
    var pageTop = $('#page-top');
    pageTop.hide();
    //スクロールが400に達したら表示
    $(window).scroll(function () {
        if($(this).scrollTop() > 400) {
=======
jQuery(function() {
    var pageTop = jQuery('#page-top');
    pageTop.hide();
    //スクロールが400に達したら表示
    jQuery(window).scroll(function () {
        if(jQuery(this).scrollTop() > 400) {
>>>>>>> 20140124-child
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    //スクロールしてトップ
        pageTop.click(function () {
<<<<<<< HEAD
        $('body,html').animate({
=======
        jQuery('body,html').animate({
>>>>>>> 20140124-child
            scrollTop: 0
        }, 800);
        return false;
        });
  });

/*---------------------------
ｱｺｰﾃﾞｨｵﾝ
------------------------------*/

<<<<<<< HEAD
$(document).ready(function(){
  //acordion_treeを一旦非表示に
  $(".acordion_tree").css("display","none");
  //triggerをクリックすると以下を実行
  $(".trigger").click(function(){
    //もしもクリックしたtriggerの直後の.acordion_treeが非表示なら
    if($("+.acordion_tree",this).css("display")=="none"){
         //classにactiveを追加
         $(this).addClass("active");
         //直後のacordion_treeをスライドダウン
         $("+.acordion_tree",this).slideDown("normal");
  }else{
    //classからactiveを削除
    $(this).removeClass("active");
    //クリックしたtriggerの直後の.acordion_treeが表示されていればスライドアップ
    $("+.acordion_tree",this).slideUp("normal");
=======
jQuery(document).ready(function(){
  //acordion_treeを一旦非表示に
  jQuery(".acordion_tree").css("display","none");
  //triggerをクリックすると以下を実行
  jQuery(".trigger").click(function(){
    //もしもクリックしたtriggerの直後の.acordion_treeが非表示なら
    if(jQuery("+.acordion_tree",this).css("display")=="none"){
         //classにactiveを追加
         jQuery(this).addClass("active");
         //直後のacordion_treeをスライドダウン
         jQuery("+.acordion_tree",this).slideDown("normal");
  }else{
    //classからactiveを削除
    jQuery(this).removeClass("active");
    //クリックしたtriggerの直後の.acordion_treeが表示されていればスライドアップ
    jQuery("+.acordion_tree",this).slideUp("normal");
>>>>>>> 20140124-child
  }
  });
});

