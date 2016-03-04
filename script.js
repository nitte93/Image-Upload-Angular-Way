// Code goes here

var myApp = angular.module("fileUpload", []);

myApp.controller("uploadController", function(){
  var first =this;
  first.extntionArray  = ['image/jpg','image/jpeg','image/png'];
});

myApp.directive("upload", function(){
  return  {
    restrict: "A",
    controller: 'uploadController',
    link: function(scope, element, attr, controller ){
          //console.log("scope",scope, controller);
          
          element.bind('change', function(m,p,q){
          var file = element.context.files[0];
          //console.log(controller.extntionArray.indexOf(file.type));
            if(element.context.files[0] && controller.extntionArray.indexOf(file.type)){  
                var reader = new FileReader();
                reader.onload = function(e){
                  $('#displayImage')
                  .attr('src', e.target.result)
                  .width(300)
                  .height(400);
                  };
            reader.readAsDataURL(element.context.files[0]);
            }  
        });
      
    } 
  }
})
