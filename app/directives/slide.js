angular.module('slide',['content'])
	.directive('slideDirective',['$window','imageContent','$interval',function($window,imageContent,$interval){
		var linker = function(s,e,a){
			var resigeBG = function(){
				var width = $window.innerWidth;
				var height = $window.innerHeight;
				var i = 0;
				s.image = imageContent.images[0];
				e.css({
					'height':height.toString()+'px',
					'width':width.toString()+'px',
					'padding':0,
					'margin':0,
					'background-image':'url('+e[0].attributes['slide-directive'].value+')',
					 'background-size': 'cover',
					 '-webkit-filter': 'sepia(-50%)',
					'z-index':-1});
			}
			resigeBG();
		}
		return{
			restrict:'A',
			link:linker
		}
	}])
	.directive('tilesDirective',['$window','imageContent','$interval',function($window,imageContent,$interval){
		var linker = function(s,e,a){
			var resigeBG2 = function(){
				var width = $window.innerWidth;
				var height = $window.innerHeight;
				e.css({
					'height':(2*height.toString())+'px',
					'width':width.toString()+'px',
					'padding':0,
					'margin':0,
					 'background-size': 'cover',
					 '-webkit-filter': 'sepia(-50%)',
					'z-index':-1});
			}
			resigeBG2();
		}

		return{
			restrict:'A',
			link:linker
		}
	}])
	.directive('heading',['$window','$interval','$timeout',function($window,$interval,$timeout){
		var linker = function(s,e,a){
			var height = $window.innerHeight;
			var width = $window.innerWidth;
			var attr = e[0].attributes;
			if(attr['heading'].value === 'welcome'){
				var welcome = 'WELCOME';
				var index = 0;
				$timeout(function(){
					$interval(function(){
						e.html(welcome.slice(0,index)+'<span blink>|</span>');
						index++;
					},600,welcome.length+1);	
				},1000);
				e.css({
				'top':'50%',
				'left':'50%',
				'color':'white',
				'z-index':0,
				'font-size':'140px',
				'overflow-y':'hidden',
				'font-family': 'Source Sans Pro, sans-serif'
				});
			}
			else {
				var welcome = e[0].attributes['heading'].value;
				var index = 0;
				var i =1;
				if(attr['fullpage']){
					e.parent().css({
						'height':(height.toString())+'px',
						'width' :width.toString()+'px'
					});
				}
				$timeout(function(){
					$interval(function(){
						e.html(welcome.slice(0,index)+'<span blink>|</span>');
						index++;
						e.css({
						'height':((height/4).toString())+'px',
						'z-index':0,
						'font-size':'140px',
						'overflow-y':'hidden',
						'font-family':'"Vidaloka", serif',
						'color': 'white',  /* Fallback: assume this color ON TOP of image */
		   				'background': 'url("./assets/IMG_1.jpg") no-repeat',
		   				'-webkit-background-clip': 'text',
		   				'-webkit-text-fill-color': 'transparent'
						});
					},600,welcome.length+1)
				},1000);
	
					
				
				
			}
			
			
			
		}
		return{
			restrict:'A',
			link:linker
		}

	}])
	.directive('blink',['$interval',function($interval){
		var linker = function(s,e,a){
			$interval(function(){
				e.toggleClass('hide');
			},300);
		}
		return{
			link:linker
		}
	}])
	.directive('washington',function(){
		var linker = function(s,e,a){

		}
		return{
			link:linker,
			template:'<img src="" />'
		}
	})