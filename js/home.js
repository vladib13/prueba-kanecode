setTimeout(() => {
  console.log(dashboard);
}, 50);

$('#sidebar-collapser').click(() => {
  $('.main-container').hasClass('sidebar__collapsed') ? 
  $('.main-container').removeClass('sidebar__collapsed').find('.section-sidebar').removeClass('sidebar__collapsed') :
  $('.main-container').addClass('sidebar__collapsed').find('.section-sidebar').addClass('sidebar__collapsed');
})