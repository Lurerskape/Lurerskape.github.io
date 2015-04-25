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
	if(show == true) {
		document.getElementById('mobileNavbar').style.left = '-40';
		document.getElementById('hiddenNavbar').style.visibility = 'visible';
	}
	else {
		document.getElementById('mobileNavbar').style.left = '0';
		document.getElementById('hiddenNavbar').style.visibility = 'hidden';
	}
}
function isMiniNavbarShowing() {
	return (getCSS('hiddenNavbar', 'visibility') == 'visible');
}
function javascriptContentDoneLoading() {
	document.getElementById('mainContent').style.visibility = 'visible';
	var width = document.body.clientWidth;
	var mobile = (width < 1000) || (navigator.userAgent.indexOf('BB10') != -1) || (navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('Android') != -1);
	if(mobile) {
		document.getElementById('navbar').style.visibility = 'hidden';
		document.getElementById('navbarHolder').style.height = '80';
		document.getElementById('header').style.paddingTop = '80';
		document.getElementById('mobileNavbar').style.visibility = 'visible';
	}else {
		document.getElementById('navbar').style.visibility = 'visible';
		document.getElementById('navbarHolder').style.height = '50';
		document.getElementById('header').style.paddingTop = '50';
		document.getElementById('mobileNavbar').style.visibility = 'hidden';
		if(isMiniNavbarShowing()) {
			toggleMiniNavbar();		
		}
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
