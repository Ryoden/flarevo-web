(function() {

jQuery.noConflict();
//����������s�������X�N���v�g������
(function($) {

	//��page top�{�^��

	$(function(){
	var topBtn=$('#pageTop');
	topBtn.hide();


	//���{�^���̕\���ݒ�
	$(window).scroll(function(){
	  if($(this).scrollTop()>80){

	    //---- ��ʂ�80px�X�N���[��������A�{�^����\������
	    topBtn.fadeIn();

	  }else{

	    //---- ��ʂ�80px����Ȃ�A�{�^����\�����Ȃ�
	    topBtn.fadeOut();

	  }
	});


	// ���{�^�����N���b�N������A�X�N���[�����ď�ɖ߂�
	topBtn.click(function(){
	  $('body,html').animate({
	  scrollTop: 0},500);
	  return false;

	});


	});


//���s�������X�N���v�g�����܂�
})(jQuery);



})();




jQuery.noConflict();
//����������s�������X�N���v�g������
(function($) {

$(function(){$(".spmenu_btn").on("click",function(){$(this).next().slideToggle();$(this).toggleClass("active");});});

//���s�������X�N���v�g�����܂�
})(jQuery);
