




/*-------------
�y�[�W�X�N���[��
-----------*/



<<<<<<< HEAD
$(function() {
    var pageTop = $('#page-top');
    pageTop.hide();
    //�X�N���[����400�ɒB������\��
    $(window).scroll(function () {
        if($(this).scrollTop() > 400) {
=======
jQuery(function() {
    var pageTop = jQuery('#page-top');
    pageTop.hide();
    //�X�N���[����400�ɒB������\��
    jQuery(window).scroll(function () {
        if(jQuery(this).scrollTop() > 400) {
>>>>>>> 20140124-child
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    //�X�N���[�����ăg�b�v
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
����ި��
------------------------------*/

<<<<<<< HEAD
$(document).ready(function(){
  //acordion_tree����U��\����
  $(".acordion_tree").css("display","none");
  //trigger���N���b�N����ƈȉ������s
  $(".trigger").click(function(){
    //�������N���b�N����trigger�̒����.acordion_tree����\���Ȃ�
    if($("+.acordion_tree",this).css("display")=="none"){
         //class��active��ǉ�
         $(this).addClass("active");
         //�����acordion_tree���X���C�h�_�E��
         $("+.acordion_tree",this).slideDown("normal");
  }else{
    //class����active���폜
    $(this).removeClass("active");
    //�N���b�N����trigger�̒����.acordion_tree���\������Ă���΃X���C�h�A�b�v
    $("+.acordion_tree",this).slideUp("normal");
=======
jQuery(document).ready(function(){
  //acordion_tree����U��\����
  jQuery(".acordion_tree").css("display","none");
  //trigger���N���b�N����ƈȉ������s
  jQuery(".trigger").click(function(){
    //�������N���b�N����trigger�̒����.acordion_tree����\���Ȃ�
    if(jQuery("+.acordion_tree",this).css("display")=="none"){
         //class��active��ǉ�
         jQuery(this).addClass("active");
         //�����acordion_tree���X���C�h�_�E��
         jQuery("+.acordion_tree",this).slideDown("normal");
  }else{
    //class����active���폜
    jQuery(this).removeClass("active");
    //�N���b�N����trigger�̒����.acordion_tree���\������Ă���΃X���C�h�A�b�v
    jQuery("+.acordion_tree",this).slideUp("normal");
>>>>>>> 20140124-child
  }
  });
});

