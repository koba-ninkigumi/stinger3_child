/*-------------
�y�[�W�X�N���[��
-----------*/

jQuery(function() {
    var pageTop = jQuery('#page-top');
    pageTop.hide();
    //�X�N���[����400�ɒB�������\��
    jQuery(window).scroll(function () {
        if(jQuery(this).scrollTop() > 400) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    //�X�N���[�����ăg�b�v
        pageTop.click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
        });
  });

/*---------------------------
����ި��
------------------------------*/

jQuery(document).ready(function(){
  //acordion_tree�����U���\����
  jQuery(".acordion_tree").css("display","none");
  //trigger���N���b�N�����ƈȉ������s
  jQuery(".trigger").click(function(){
    //�������N���b�N����trigger�̒�����.acordion_tree�����\���Ȃ�
    if(jQuery("+.acordion_tree",this).css("display")=="none"){
         //class��active���ǉ�
         jQuery(this).addClass("active");
         //������acordion_tree���X���C�h�_�E��
         jQuery("+.acordion_tree",this).slideDown("normal");
  }else{
    //class����active���폜
    jQuery(this).removeClass("active");
    //�N���b�N����trigger�̒�����.acordion_tree���\�������Ă����΃X���C�h�A�b�v
    jQuery("+.acordion_tree",this).slideUp("normal");
  }
  });
});
