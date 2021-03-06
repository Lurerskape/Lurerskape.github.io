var mobileNav = false;
function getCSS(element, property) {
	var elem = document.getElementById(element);
	var css = null;
	if(elem.currentStyle) {
		css = elem.currentStyle[property];
	}else if(window.getComputedStyle) {
		css = document.defaultView.getComputedStyle(elem, null).getPropertyValue(property);
	}
	return css;
}
function toggleMiniNavbar() {
	var show = (getCSS('hiddenNavbar', 'visibility') != 'visible');
	showMiniNavbar(show);
}
function showMiniNavbar(show) {
	if(show == true && mobileNav == true) {
		//document.getElementById('mobileNavbar').style.left = '-40';
		document.getElementById('mobileNavbar').className = 'show';
		document.getElementById('hiddenNavbar').className = 'show';
		document.getElementById('navbarHolder').className = 'show';
	}
	else {
		document.getElementById('mobileNavbar').className = '';
		document.getElementById('hiddenNavbar').className = '';
		document.getElementById('navbarHolder').className = '';
	}
}
function isMiniNavbarShowing() {
	return (getCSS('hiddenNavbar', 'visibility') == 'visible');
}
function createDialog(contentId, title) {
	dialog = ('<div id="popUp" style="height:' + document.documentElement.scrollHeight + '"><div id="dialog"><button class="cancel" onclick="closeDialog()" style="float: left;">Close</button><p style="color: #8888FF; font-family: Sans-Serif; font-size: 28px;">' + title + '</p>' + document.getElementById(contentId).innerHTML + '</div></div>')
	var dialogTemp = document.createElement('div');
	dialogTemp.innerHTML = dialog;
	var docFrag = document.createDocumentFragment();
	while(dialogTemp.firstChild) {
		docFrag.appendChild(dialogTemp.firstChild);
	}
	document.body.insertBefore(docFrag, document.body.childNodes[0]);
	window.scrollTo(0, document.documentElement.scrollHeight / 6);
}
function closeDialog() {
	document.getElementById('popUp').remove();
}
function javascriptContentDoneLoading() {
	mobileNav = false;
	document.getElementById('mainContent').style.visibility = 'visible';
	var width = document.body.clientWidth;
	var mobile = (width < 1000) || (navigator.userAgent.indexOf('BB10') != -1) || (navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('Android') != -1);
	if(document.getElementById('navbarHolder') == null) {
		var page = window.location.href;
		var navbar = '';
		if(page.indexOf('/Downloads/') > -1) {
			navbar = ('<div id="navbarHolder" onmousedown="return false"><ul id="navbar"><li><a href="../index.html" id="other">Home</a></li><li><a href="" id="current">Downloads</a></li><li><a href="../Code/index.html" id="other">Code</a></li><li><a href="../Contact/index.html" id="other">Contact</a></li></ul><img src="../Resources/Images/Hamburger.png" id="mobileNavbar" onclick="toggleMiniNavbar();event.stopPropagation()"/><ul id="hiddenNavbar"><li><a href="../index.html" id="otherMobile">Home</a></li><li><a href="" id="currentMobile">Downloads</a></li><li><a href="../Code/index.html" id="otherMobile">Code</a></li><li><a href="../Contact/index.html" id="otherMobile">Contact</a></li></ul></div>');
		}else if(page.indexOf('/Code/Java/') > -1) {
			navbar = ('<div id="navbarHolder" onmousedown="return false"><ul id="navbar"><li><a href="../../index.html" id="other">Home</a></li><li><a href="../../Downloads/index.html" id="other">Downloads</a></li><li><a href="../index.html" id="current">Code</a></li><li><a href="../../Contact/index.html" id="other">Contact</a></li></ul><img src="../../Resources/Images/Hamburger.png" id="mobileNavbar" onclick="toggleMiniNavbar();event.stopPropagation()"/><ul id="hiddenNavbar"><li><a href="../../index.html" id="otherMobile">Home</a></li><li><a href="../../Downloads/index.html" id="otherMobile">Downloads</a></li><li><a href="../index.html" id="currentMobile">Code</a></li><li><a href="../../Contact/index.html" id="otherMobile">Contact</a></li></ul></div>');
		}else if(page.indexOf('/Code/') > -1) {
			navbar = ('<div id="navbarHolder" onmousedown="return false"><ul id="navbar"><li><a href="../index.html" id="other">Home</a></li><li><a href="../Downloads/index.html" id="other">Downloads</a></li><li><a href="" id="current">Code</a></li><li><a href="../Contact/index.html" id="other">Contact</a></li></ul><img src="../Resources/Images/Hamburger.png" id="mobileNavbar" onclick="toggleMiniNavbar();event.stopPropagation()"/><ul id="hiddenNavbar"><li><a href="../index.html" id="otherMobile">Home</a></li><li><a href="../Downloads/index.html" id="otherMobile">Downloads</a></li><li><a href="" id="currentMobile">Code</a></li><li><a href="../Contact/index.html" id="otherMobile">Contact</a></li></ul></div>');
		}else if(page.indexOf('/Contact/') > -1) {
			navbar = ('<div id="navbarHolder" onmousedown="return false"><ul id="navbar"><li><a href="../index.html" id="other">Home</a></li><li><a href="../Downloads/index.html" id="other">Downloads</a></li><li><a href="../Code/index.html" id="other">Code</a></li><li><a href="" id="current">Contact</a></li></ul><img src="../Resources/Images/Hamburger.png" id="mobileNavbar" onclick="toggleMiniNavbar();event.stopPropagation()"/><ul id="hiddenNavbar"><li><a href="../index.html" id="otherMobile">Home</a></li><li><a href="../Downloads/index.html" id="otherMobile">Downloads</a></li><li><a href="../Code/index.html" id="otherMobile">Code</a></li><li><a href="" id="currentMobile">Contact</a></li></ul></div>');
		}else {
			navbar = ('<div id="navbarHolder" onmousedown="return false"><ul id="navbar"><li><a href="http://lurerskape.github.io/index.html" id="current">Home</a></li><li><a href="/Downloads/index.html" id="other">Downloads</a></li><li><a href="/Code/index.html" id="other">Code</a></li><li><a href="/Contact/index.html" id="other">Contact</a></li></ul><img src="Resources/Images/Hamburger.png" id="mobileNavbar" onclick="toggleMiniNavbar();event.stopPropagation()"/><ul id="hiddenNavbar"><li><a href="" id="currentMobile">Home</a></li><li><a href="../Downloads/index.html" id="otherMobile">Downloads</a></li><li><a href="../Code/index.html" id="otherMobile">Code</a></li><li><a href="../Contact/index.html" id="otherMobile">Contact</a></li></ul></div>');
		}
		var navTemp = document.createElement('div');
		navTemp.innerHTML = navbar;
		var docFrag = document.createDocumentFragment();
		while(navTemp.firstChild) {
			docFrag.appendChild(navTemp.firstChild);
		}
		document.body.insertBefore(docFrag, document.body.childNodes[0]);
	}
	if(mobile) {
		document.body.setAttribute('onclick','showMiniNavbar(false)');
		document.getElementById('navbar').style.visibility = 'hidden';
		document.getElementById('navbarHolder').style.height = '70';
		document.getElementById('header').style.paddingTop = '70';
		document.getElementById('mobileNavbar').style.visibility = 'visible';
		mobileNav = true;
	}else {
		showMiniNavbar(false);
		document.getElementById('mobileNavbar').style.visibility = 'hidden';
		document.getElementById('navbar').style.visibility = 'visible';
		document.getElementById('navbarHolder').style.height = '50';
		document.getElementById('header').style.paddingTop = '50';
	}
}
function resetColor(elementId, hexColor) {
	document.getElementById(elementId).style.color = hexColor;
}
function resetBackground(elementId, hexColor) {
	document.getElementById(elementId).style.background = hexColor;
}
function convertColors(RGB, HEX, color) {
	var RGBElement = document.getElementById(RGB);
	var HEXElement = document.getElementById(HEX);
	var colorSwab = document.getElementById(color);
	var convertFromRGB = RGBElement.value != '';
	if(convertFromRGB) {
		var okay = checkRGBInput(RGBElement);
		if(okay) {
			var red = parseInt(RGBElement.value.split(',')[0]).toString(16);
			var green = parseInt(RGBElement.value.split(',')[1]).toString(16);
			var blue = parseInt(RGBElement.value.split(',')[2]).toString(16);
			if(red.length < 2) red = '0'.concat(red);
			if(red.length > 2) red = 'ff';
			if(green.length < 2) green = '0'.concat(green);
			if(green.length > 2) green = 'ff';
			if(blue.length < 2) blue = '0'.concat(blue);
			if(blue.length > 2) blue = 'ff';
			HEXElement.value = ('#'.concat(red.toString(16)).concat(green.toString(16)).concat(blue.toString(16)));
			colorSwab.style.background = HEXElement.value;
		}else {
			blinkElement(RGB, '#DD4444', 250);
			window.alert("Please use RRR,GGG,BBB in the RGB field.");
			RGBElement.value = '';
		}
	}else {
		var okay = checkHEXInput(HEXElement);
		if(okay) {
			var RGB = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(HEXElement.value);
			var red = parseInt(RGB[1], 16);
			var green = parseInt(RGB[2], 16);
			var blue = parseInt(RGB[3], 16);
			RGBElement.value = (red.toString()).concat(',').concat(green.toString()).concat(',').concat(blue.toString());
			colorSwab.style.background = 'rgb('.concat(RGBElement.value).concat(')');
		}else {
			blinkElement(HEX, '#DD4444', 250);
			window.alert("Please use #RRGGBB in the HEX field.");
			HEXElement.value = '';
		}
	}
}
function blinkElement(elementId, colorToBlink, time) {
	var element = document.getElementById(elementId);
	var originalColor = getCSS(elementId, 'border-color');
	element.style.borderColor = colorToBlink;
	setTimeout(function() {
		element.style.borderColor = originalColor;
	}, time);
}
function clearValue(elementId) {
	document.getElementById(elementId).value = '';
}
function checkRGBInput(element) {
	return (element.value.split(',').length == 3);
}
function checkHEXInput(element) {
	return element.value.length == 6 || element.value.length == 7;
}
function copyToClipboard(text) {
	clipboard = text.createTextRange();
	clipboard.execCommand("Copy");
}
//Spoil means to hide.
function spoil(event, name) {
	var button = event.target;
	var spoil = (button.innerHTML.indexOf('/') != -1);
	var elements = document.getElementsByName(name);
	for(i = 0; i < elements.length; i++) {
		var element = elements[i];
		if(spoil == true) {
			element.style.visibility = 'hidden';
			element.style.position = 'absolute';
		}else {
			element.style.visibility = 'visible';
			element.style.position = 'static';
		}
	}
	if(spoil == true) {
		button.innerHTML = button.innerHTML.slice(1, button.innerHTML.length);
	}else {
		button.innerHTML = '/'.concat(button.innerHTML);
	}
}
function tabMouseOver(event, over) {
	var element = document.getElementById('hiddenNav');
	var bodyRect = document.body.getBoundingClientRect();
	var navLinkRect = event.target.getBoundingClientRect();
	var xOffset = navLinkRect.left - bodyRect.left;
	if(over == 1) {
		element.style.visibility = 'visible';
		element.style.left = parseInt(xOffset);
	}else {
		element.style.visibility = 'hidden';
	}
}
function showDownloadSprite(event, visible) {
	var downloadRect = event.target.getBoundingClientRect();
	var bodyRect = document.body.getBoundingClientRect();
	var yOffset = downloadRect.top - bodyRect.top;
	document.getElementById('downloadSprite').style.top = parseInt(yOffset) + 49;
	if(visible == '1') {
		document.getElementById('downloadSprite').style.visibility = 'visible';
	}else {
		document.getElementById('downloadSprite').style.visibility = 'hidden';
	}
}
var windowScrolls = 0;
//This shows/hides the navbar if you scroll up/down respectively.
function toggleNavbar(event) {
	var scrolls = document.body.scrollTop;
	var up = (windowScrolls > scrolls);
	if(!up) {
		document.getElementById('navbarHolder').style.visibility = 'hidden';
		document.getElementById('navbar').style.visibility = 'hidden';
	}else {
		document.getElementById('navbarHolder').style.visibility = 'visible';
		document.getElementById('navbar').style.visibility = 'visible';
	}
	windowScrolls = document.body.scrollTop;
}
function showDesc(elem, show) {
	var element = document.getElementById(elem);
	if(show == '1') {
		element.style.visibility = 'visible';
		element.style.position = 'static';
	}else {
		element.style.position = 'absolute';
		element.style.visibility = 'hidden';
	}
}
function navigateTo(address) {
	window.open(address);
}
function navigateToPart(address, div) {
	var newWindow = window.open(address.concat('#'.concat(div)));
}
