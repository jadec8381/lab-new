var images = [
	{
		"name": "有些事",
		"image" : '<img class="youxieshi" src="../Final-images/有些事.gif">',
		"left": "550px",
		"top": "20px",
		"collections": "b_decoration"
	},

	{
		"name": "有些事",
		"image" : '<img class="youxieshi" src="../Final-images/有些事.gif">',
		"left": "250px",
		"top": "20px",
		"collections": "b_decoration"
	},

	{
		"name": "有些事",
		"image" : '<img class="youxieshi" src="../Final-images/有些事.gif">',
		"left": "-50px",
		"top": "20px",
		"collections": "b_decoration"
	},

	{
		"name": "有些事",
		"image" : '<img class="youxieshi" src="../Final-images/有些事.gif">',
		"left": "850px",
		"top": "20px",
		"collections": "b_decoration"
	},

	{
		"name": "有些事",
		"image" : '<img class="youxieshi" src="../Final-images/有些事.gif">',
		"left": "1150px",
		"top": "20px",
		"collections": "b_decoration"
	},

	// {
	// 	"name": "windows_default_wallpaper",
	// 	"image" :'<img class="windows_default_wallpaper" src="../Final-images/windows_default_wallpaper.jpg">',
	// 	"left": "300px",
	// 	"top": "400px",
	// 	"theme": "background",
	// },

	{
		"name": "QQ秀_1",
		"image" : '<img class="qq_show_1" src="../Final-images/qq秀1.gif">',
		"left": "500px",
		"top": "200px",
		"collections": "a_qqshow",
	},

	{
		"name": "QQ秀2",
		"image" : '<img class="" src="../Final-images/qq秀2.gif">',
		"left": "100px",
		"top": "200px",
		"collections": "a_qqshow",
	},

	{
		"name": "QQ秀3",
		"image" : '<img class="qq_show_3" src="../Final-images/qq秀3.gif">',
		"left": "500px",
		"top": "200px",
		"collections": "a_qqshow",
	},

	{
		"name": "QQ秀4",
		"image" :'<img class="qq_show_4" src="../Final-images/qq秀4.gif">',
		"left": "600px",
		"top": "200px",
		"collections": "a_qqshow",
	},

	{
		"name": "漂亮宝贝不干了",
		"image" :'<img class="plbbbgl" src="../Final-images/plbbbgl.jpg">',
		"left": "500px",
		"top": "200px",
		"collections": "c_meme",
	},

	{
		"name": "草，垃圾",
		"image" : '<img class="jietoutuya_laji" src="../Final-images/jietoutuya_laji.jpg">',
		"left": "0px",
		"top": "100px",
		"collections": "c_meme",
	},

	{
		"name": "上楼洗澡！",
		"image" :'<img class="jietoutuya_xizao" src="../Final-images/jietoutuya_xizao.jpg">',
		"left": "500px",
		"top": "100px",
		"collections": "c_meme",
	},


	{
		"name": "ps终于打开了！",
		"image" :'<img class="ps_isfinally_opened" src="../Final-images/photoshop终于打开了!.png">',
		"left": "0px",
		"top": "600px",
		"collections": "c_meme",
	},

	{
		"name": "靠危近险",
		"image" : '<img class="jietoutuya_kaoweijinxian" src="../Final-images/靠危近险.jpg">',
		"left": "800px",
		"top": "100px",
		"collections": "c_meme",
	},

	{
		"name": "pink_butterfly_accessory",
		"image" :'<img class="pink_butterfly_accessory" src="../Final-images/粉蝴蝶挂件.gif">',
		"left": "250px",
		"top": "20px",
		"position": "fixed",
		"collections": "b_decoration",
	},

	{
		"name": "pink_butterfly_accessory2",
		"image" :'<img class="pink_butterfly_accessory" src="../Final-images/粉蝴蝶挂件.gif">',
		"left": "1000px",
		"top": "20px",
		"position": "fixed",
		"collections": "b_decoration",
	},

	{
		"name": "plant1",
		"image" :'<img class="plant1" src="../Final-images/plant1.gif">',
		"left": "10px",
		"top": "450px",
		"collections": "b_decoration",
	},

	{
		"name": "plant1",
		"image" :'<img class="plant1" src="../Final-images/plant1.gif">',
		"left": "1010px",
		"top": "450px",
		"collections": "b_decoration",
	},



]

var phrases = [
	{	"title": "此处不祥，乱涂乱画",
		"left": "500px",
		"top": "200px",
		"font-size": "100px",
		"position": "fixed",
	}
]

var audio = [
	{
		"name": "两只蝴蝶",
		"audio": '<source src="../Final-images/两只蝴蝶.mp3" type="audio/mp3">'
	}
]

// var filterArray = images.filter(function(images){ return images.color === 'red'});

// $(".audio").animate({ 
        // top: "-=30px",
     
      // }, 1000);
// the above is for audio player animation (bouncing around the page); work on it later

// for(var i=0; i<5; i++){
// 	 $('.phrases').append('<div style="text-align: center;>')
// }


for (var i=0; i<images.length; i++){
	var imagesDiv = $('<div/>', {
		'class': 'box'
	})
	.html(images[i].image)
	.css({

	})
}

for(var i=0; i<phrases.length; i++){
	$('.title').append("<div class='title'>"+phrases[i].title+"<br>"+"</div>")
}
// this is for the phrases appearing on the page


 for(var i=0; i<images.length; i++){
 	var imagesDiv = $('<div/>', {
 			'class': 'box'
 		})
		.html(images[i].image)
		.css({
			'position':'absolute',
			'width':'50px',
			'top': images[i].top, 
			'left': images[i].left})

	$('.images').append(imagesDiv)
}

// for(var i=0; i<phrases.length; i++){
//  	var phrasesDiv = $('<div/>', {
//  			'class': 'box'
//  		})
// 		.html(phrases[i].phrase)
// 		.css({
// 			'position':'absolute',
// 			'font-size': phrases[i].font-size,
// 			'top': phrases[i].top, 
// 			'left': phrases[i].left})

// 	$('.phrases').append(phrasesDiv)
// }



// the below js code is for typewriting animation effect; code from Geoff Graham: https://css-tricks.com/snippets/css/typewriter-effect/
// var TxtType = function(el, toRotate, period) {
//         this.toRotate = toRotate;
//         this.el = el;
//         this.loopNum = 0;
//         this.period = parseInt(period, 10) || 2000;
//         this.txt = '';
//         this.tick();
//         this.isDeleting = false;
//     };

//     TxtType.prototype.tick = function() {
//         var i = this.loopNum % this.toRotate.length;
//         var fullTxt = this.toRotate[i];

//         if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//         } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }

//         this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//         var that = this;
//         var delta = 200 - Math.random() * 100;

//         if (this.isDeleting) { delta /= 2; }

//         if (!this.isDeleting && this.txt === fullTxt) {
//         delta = this.period;
//         this.isDeleting = true;
//         } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.loopNum++;
//         delta = 500;
//         }

//         setTimeout(function() {
//         that.tick();
//         }, delta);
//     };

//     window.onload = function() {
//         var elements = document.getElementsByClassName('typewrite');
//         for (var i=0; i<elements.length; i++) {
//             var toRotate = elements[i].getAttribute('data-type');
//             var period = elements[i].getAttribute('data-period');
//             if (toRotate) {
//               new TxtType(elements[i], JSON.parse(toRotate), period);
//             }
//         }
//         // INJECT CSS
//         var css = document.createElement("style");
//         css.type = "text/css";
//         css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//         document.body.appendChild(css);
//     };
// above is typewriting effect

// change size of the images on js file; no scroll√; sorting arrays (give them categories or collections or themes) array.sort(); add description



// images.sort(function(a, b) {
// 	if (a.collections > b.collections) {
// 		return 1;
// 	}
// 	if (a.collections < b.collections) {
// 		return -1;
// 	}
// 	return 0;
// });

images.sort(function (a,b) {
	var collectionsA = a.collections.toUpperCase();
	var collectionsB = b.collections.toUpperCase();
	if (collectionsA < collectionsB) {
		return -1;
	}
	if (collectionsA > collectionsB) {
		return 1;
	}
	return 0;
});


// for(var i=0; i<images.length; i++){
// 	var imagesDiv = $('<div/>', {
// 			'class': 'box'
// 		})
// 		.data('image', images[i])
// 		.html(images[i].name)
// 		.css({'background-color': images[i].image})
// 		.click(function(){console.log($(this).data("images").name)})

// 	$('#images').append(imageDiv)
// }

// for(var i=0; i<images.length; i++){
// 	var imageDiv = $('<div/>', {
// 			'class': 'box'
// 		})
// 		.data('images', images[i])
// 		.html(images[i].name)
// 		.css({'background-color': images[i].color})
// 		.click(function(){
// 			$(this).append( '<span> is ' +  $(this).data("images").image + '</span>')
// 			})

// 	$('.images').append(imagesDiv)
// }
