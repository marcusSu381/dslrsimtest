'use strict';



  // myapp.controller('HomeCtrl', function ($scope) {
  //   $scope.settings = [
  //   {'filename': '1',
  //    'aperture': 'f/2'},
  //   {'filename': '2',
  //    'aperture': 'f/2.8'},
  //    {'filename': '3',
  //    'aperture': 'f/4'},
  //    {'filename': '4',
  //    'aperture': 'f/5.6'},
  //    {'filename': '5',
  //    'aperture': 'f/8'},
  //   {'filename': '6',
  //    'aperture': 'f/11'},
  //    {'filename': '7',
  //    'aperture': 'f/16'},
  //    {'filename': '8',
  //    'aperture': 'f/22'}
  // ];
  // $scope.demotext=myapp.demotext;
  // });




myapp.controller(
            "HomeCtrl",
            function( $scope, preloader ) {

                // I keep track of the state of the loading images.
                $scope.isLoading = true;
                $scope.isSuccessful = false;
                $scope.percentLoaded = 0;

                // I am the image SRC values to preload and display./
                // -- 
                // NOTE: "cache" attribute is to prevent images from caching in the 
                // browser (for the sake of the demo).
                $scope.imageLocations = [
                {'filename': 'images/merge/3/3/3/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'800',
                'slider3':'3'
                },
                //11
                {'filename': 'images/merge/1/1/1/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/1/1/2/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/1/1/3/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/1/1/4/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/1/1/5/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'3200',
                'slider3':'5'
                },
                
                //12
                {'filename': 'images/merge/1/2/1/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/1/2/2/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/1/2/3/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/1/2/4/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/1/2/5/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'3200',
                'slider3':'5'
                },
                //13
                {'filename': 'images/merge/1/3/1/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/1/3/2/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/1/3/3/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/1/3/4/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/1/3/5/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'3200',
                'slider3':'5'
                },
                //14
                {'filename': 'images/merge/1/4/1/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/1/4/2/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/1/4/3/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/1/4/4/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/1/4/5/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'3200',
                'slider3':'5'
                },
                //15
                {'filename': 'images/merge/1/5/1/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/1/5/2/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/1/5/3/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/1/5/4/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/1/5/5/img.jpg',
                'aperture':'f/2',
                'slider1':'1',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'3200',
                'slider3':'5'
                },
                //21
                {'filename': 'images/merge/2/1/1/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/2/1/2/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/2/1/3/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/2/1/4/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/2/1/5/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'3200',
                'slider3':'5'
                },
                //22
                {'filename': 'images/merge/2/2/1/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/2/2/2/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/2/2/3/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/2/2/4/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/2/2/5/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'3200',
                'slider3':'5'
                },
                //23
                {'filename': 'images/merge/2/3/1/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/2/3/2/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/2/3/3/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/2/3/4/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/2/3/5/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'3200',
                'slider3':'5'
                },
                //24
                {'filename': 'images/merge/2/4/1/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/2/4/2/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/2/4/3/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/2/4/4/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/2/4/5/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'3200',
                'slider3':'5'
                },
                //25
                {'filename': 'images/merge/2/5/1/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/2/5/2/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/2/5/3/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'80000',
                'slider3':'3'
                },
                {'filename': 'images/merge/2/5/4/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/2/5/5/img.jpg',
                'aperture':'f/4',
                'slider1':'2',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'3200',
                'slider3':'5'
                },
                //31
                {'filename': 'images/merge/3/1/1/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/3/1/2/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/3/1/3/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/3/1/4/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/3/1/5/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'3200',
                'slider3':'5'
                },
                //32
                {'filename': 'images/merge/3/2/1/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/3/2/2/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/3/2/3/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/3/2/4/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/3/2/5/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'3200',
                'slider3':'5'
                },
                //33
                {'filename': 'images/merge/3/3/1/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/3/3/2/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'400',
                'slider3':'2'
                },
                // {'filename': 'images/merge/3/3/3/img.jpg',
                // 'aperture':'f/5.6',
                // 'slider1':'3',
                
                // 'ss':"1/300",
                // 'slider2':'3',
                
                // 'iso':'800',
                // 'slider3':'3'
                // },
                {'filename': 'images/merge/3/3/4/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/3/3/5/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'3200',
                'slider3':'5'
                },
                //34
                {'filename': 'images/merge/3/4/1/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/3/4/2/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/3/4/3/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/3/4/4/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/3/4/5/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'3200',
                'slider3':'5'
                },
                //35
                {'filename': 'images/merge/3/5/1/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/3/5/2/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/3/5/3/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/3/5/4/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/3/5/5/img.jpg',
                'aperture':'f/5.6',
                'slider1':'3',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'3200',
                'slider3':'5'
                },
                //41
                {'filename': 'images/merge/4/1/1/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/4/1/2/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/4/1/3/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/4/1/4/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/4/1/5/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'3200',
                'slider3':'5'
                },
                //42
                {'filename': 'images/merge/4/2/1/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/4/2/2/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/4/2/3/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/4/2/4/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/4/2/5/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'3200',
                'slider3':'5'
                },
                //43
                {'filename': 'images/merge/4/3/1/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/4/3/2/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/4/3/3/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/4/3/4/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/4/3/5/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'3200',
                'slider3':'5'
                },
                //44
                {'filename': 'images/merge/4/4/1/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/4/4/2/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'40000',
                'slider3':'2'
                },
                {'filename': 'images/merge/4/4/3/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/4/4/4/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/4/4/5/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'3200',
                'slider3':'5'
                },
                //45
                {'filename': 'images/merge/4/5/1/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/4/5/2/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/4/5/3/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/4/5/4/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/4/5/5/img.jpg',
                'aperture':'f/11',
                'slider1':'4',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'3200',
                'slider3':'5'
                },
                //51
                {'filename': 'images/merge/5/1/1/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/5/1/2/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/5/1/3/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/5/1/4/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/5/1/5/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/125",
                'slider2':'1',
                
                'iso':'3200',
                'slider3':'5'
                },
                //52
                {'filename': 'images/merge/5/2/1/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/5/2/2/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/5/2/3/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/5/2/4/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/5/2/5/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/200",
                'slider2':'2',
                
                'iso':'3200',
                'slider3':'5'
                },
                //53
                {'filename': 'images/merge/5/3/1/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/5/3/2/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/5/3/3/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/5/3/4/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/5/3/5/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/300",
                'slider2':'3',
                
                'iso':'3200',
                'slider3':'5'
                },
                //54
                {'filename': 'images/merge/5/4/1/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/5/4/2/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/5/4/3/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/5/4/4/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/5/4/5/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/400",
                'slider2':'4',
                
                'iso':'3200',
                'slider3':'5'
                },
                //55
                {'filename': 'images/merge/5/5/1/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'100',
                'slider3':'1'
                },
                {'filename': 'images/merge/5/5/2/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'400',
                'slider3':'2'
                },
                {'filename': 'images/merge/5/5/3/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'800',
                'slider3':'3'
                },
                {'filename': 'images/merge/5/5/4/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'1600',
                'slider3':'4'
                },
                {'filename': 'images/merge/5/5/5/img.jpg',
                'aperture':'f/22',
                'slider1':'5',
                
                'ss':"1/500",
                'slider2':'5',
                
                'iso':'3200',
                'slider3':'5'
                },
                ];

                
                preloader.preloadImages( $scope.imageLocations ).then(
                    function handleResolve( imageLocations ) {

                        // Loading was successful.
                        $scope.isLoading = false;
                        $scope.isSuccessful = true;

                        console.info( "Preload Successful" );

                    },
                    function handleReject( imageLocation ) {

                        // Loading failed on at least one image.
                        $scope.isLoading = false;
                        $scope.isSuccessful = false;

                        console.error( "Image Failed", imageLocation );
                        console.info( "Preload Failure" );

                    },
                    function handleNotify( event ) {

                        $scope.percentLoaded = event.percent;

                        console.info( "Percent loaded:", event.percent );

                    }
                    );

            }
            );


        // -------------------------------------------------- //
        // -------------------------------------------------- //


        // I provide a utility class for preloading image objects.
        myapp.factory(
            "preloader",
            function( $q, $rootScope ) {

                // I manage the preloading of image objects. Accepts an array of image URLs.
                function Preloader( imageLocations ) {

                    // I am the image SRC values to preload.
                    this.imageLocations = imageLocations;
                    
                    // As the images load, we'll need to keep track of the load/error 
                    // counts when announing the progress on the loading.
                    this.imageCount = this.imageLocations.length;
                    this.loadCount = 0;
                    this.errorCount = 0;

                    // I am the possible states that the preloader can be in.
                    this.states = {
                        PENDING: 1,
                        LOADING: 2,
                        RESOLVED: 3,
                        REJECTED: 4
                    };

                    // I keep track of the current state of the preloader.
                    this.state = this.states.PENDING;

                    // When loading the images, a promise will be returned to indicate 
                    // when the loading has completed (and / or progressed).
                    this.deferred = $q.defer();
                    this.promise = this.deferred.promise;

                }


                // ---
                // STATIC METHODS.
                // ---


                // I reload the given images [Array] and return a promise. The promise
                // will be resolved with the array of image locations.
                Preloader.preloadImages = function( imageLocations ) {

                    var preloader = new Preloader( imageLocations );

                    return( preloader.load() );

                };


                // ---
                // INSTANCE METHODS.
                // ---


                Preloader.prototype = {

                    // Best practice for "instnceof" operator.
                    constructor: Preloader,


                    // ---
                    // PUBLIC METHODS.
                    // ---


                    // I determine if the preloader has started loading images yet.
                    isInitiated: function isInitiated() {

                        return( this.state !== this.states.PENDING );

                    },


                    // I determine if the preloader has failed to load all of the images.
                    isRejected: function isRejected() {

                        return( this.state === this.states.REJECTED );

                    },


                    // I determine if the preloader has successfully loaded all of the images.
                    isResolved: function isResolved() {

                        return( this.state === this.states.RESOLVED );

                    },


                    // I initiate the preload of the images. Returns a promise.
                    load: function load() {

                        // If the images are already loading, return the existing promise.
                        if ( this.isInitiated() ) {

                            return( this.promise );

                        }

                        this.state = this.states.LOADING;

                        for ( var i = 0 ; i < this.imageCount ; i++ ) {

                            this.loadImageLocation( this.imageLocations[ i ].filename );

                        }

                        // Return the deferred promise for the load event.
                        return( this.promise );

                    },


                    // ---
                    // PRIVATE METHODS.
                    // ---


                    // I handle the load-failure of the given image location.
                    handleImageError: function handleImageError( imageLocation ) {

                        this.errorCount++;

                        // If the preload action has already failed, ignore further action.
                        if ( this.isRejected() ) {

                            return;                         

                        }

                        this.state = this.states.REJECTED;

                        this.deferred.reject( imageLocation );

                    },

                    
                    // I handle the load-success of the given image location.
                    handleImageLoad: function handleImageLoad( imageLocation ) {

                        this.loadCount++;

                        // If the preload action has already failed, ignore further action.
                        if ( this.isRejected() ) {

                            return;                         

                        }

                        // Notify the progress of the overall deferred. This is different
                        // than Resolving the deferred - you can call notify many times
                        // before the ultimate resolution (or rejection) of the deferred.
                        this.deferred.notify({
                            percent: Math.ceil( this.loadCount / this.imageCount * 100 ),
                            imageLocation: imageLocation
                        });

                        // If all of the images have loaded, we can resolve the deferred
                        // value that we returned to the calling context.
                        if ( this.loadCount === this.imageCount ) {

                            this.state = this.states.RESOLVED;

                            this.deferred.resolve( this.imageLocations );

                        }

                    },


                    // I load the given image location and then wire the load / error 
                    // events back into the preloader instance.
                    // --
                    // NOTE: The load/error events trigger a $digest.
                    loadImageLocation: function loadImageLocation( imageLocation ) {

                        var preloader = this;

                        // When it comes to creating the image object, it is critical that
                        // we bind the event handlers BEFORE we actually set the image 
                        // source. Failure to do so will prevent the events from proper
                        // triggering in some browsers.
                        var image = $( new Image() )
                        .load(
                            function( event ) {

                                    // Since the load event is asynchronous, we have to 
                                    // tell AngularJS that something changed.
                                    $rootScope.$apply(
                                        function() {
                                            
                                            preloader.handleImageLoad( event.target.src );

                                            // Clean up object reference to help with the
                                            // garbage collection in the closure.
                                            preloader = image = event = null;

                                        }
                                        );

                                }
                                )
                        .error(
                            function( event ) {

                                    // Since the load event is asynchronous, we have to 
                                    // tell AngularJS that something changed.
                                    $rootScope.$apply(
                                        function() {
                                            
                                            preloader.handleImageError( event.target.src );

                                            // Clean up object reference to help with the
                                            // garbage collection in the closure.
                                            preloader = image = event = null;

                                        }
                                        );

                                }
                                )
                        .prop( "src", imageLocation )
                        ;
                        
                    }

                };


                // Return the factory instance.
                return( Preloader );

            }
            );
       