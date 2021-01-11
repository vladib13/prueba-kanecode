$.ajax({
  dataType: 'json',
  url: '/js/data/dashboard-content.json',
  success: (data) => {
    getDashboardContent(data)
  }
});

var dashboard = null;

let getDashboardContent = (data) => {
  dashboard = data;
};