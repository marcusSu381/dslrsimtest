var output = document.querySelectorAll('output')[0];
  
  // $(document).on('change', 'input[type="range"]', function(e) {
  //       output.innerHTML = e.target.value+".jpg";
  // });
  
  $('input[type=range]').rangeslider({
    polyfill: false
  });
