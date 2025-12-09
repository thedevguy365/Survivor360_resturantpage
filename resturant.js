

const partyOrder = document.getElementById('partyOrder');
const bulkOrder = document.getElementById('bulkOrder');

partyOrder.addEventListener('click', function(){
    document.querySelector(".messageBox").style.display = 'flex';
    document.querySelector(".closeButton i").style.display = 'flex';
    document.querySelector(".overlayWindow").style.display = 'flex';
});

bulkOrder.addEventListener('click', function(){
    document.querySelector(".messageBox").style.display = 'flex';
    document.querySelector(".closeButton i").style.display = 'flex';
    document.querySelector(".overlayWindow").style.display = 'flex';
});

document.querySelector(".closeButton i").addEventListener('click', function(){
    document.querySelector(".messageBox").style.display = 'none';
    document.querySelector(".closeButton i").style.display = 'none';
    document.querySelector(".overlayWindow").style.display = 'none'; 
});

const darkModeButton = document.querySelector('.darkModeButton');
const lightModeButton = document.querySelector('.lightModeButton');

darkModeButton.addEventListener('click', function(){
    darkModeButton.style.display = 'none';
    lightModeButton.style.display = 'block';
    document.getElementById('body').style.backgroundColor = 'black';
    document.getElementById("navBar").classList.add('navBarDarkMode');
    document.getElementById("navBar").classList.remove('navBar');
    document.getElementById("content").classList.add('contentDarkMode');
    document.getElementById("content").classList.remove('content');
    document.getElementById("content1").classList.add('contentDarkMode');
    document.getElementById("content1").classList.remove('content');
    document.getElementById("content2").classList.add('contentDarkMode');
    document.getElementById("content2").classList.remove('content');
    document.getElementById("content3").classList.add('contentDarkMode');
    document.getElementById("content3").classList.remove('content');
    document.getElementById("menuContent").classList.add('menuContentDarkMode');
    document.getElementById("menuContent").classList.remove('menuContent');
    document.getElementById("locateMenu").classList.add('locateMenuContentDarkMode');
    document.getElementById("locateMenu").classList.remove('locateMenuContent');
    document.getElementById("contactMenu").classList.add('contactMenuContentDarkMode');
    document.getElementById("contactMenu").classList.remove('contactMenuContent');
    document.getElementById("contentText").classList.add('contentTextDarkMode');
    document.getElementById("contentText").classList.remove('contentText');
    document.getElementById("midSection").classList.add('midSectionDarkMode');
    document.getElementById("midSection").classList.remove('midSection');
    document.getElementById("slider").classList.add('sliderDarkMode');
    document.getElementById("slider").classList.remove('slider');
    document.getElementById("optionsSection").classList.add('optionsSectionDarkMode');
    document.getElementById("optionsSection").classList.remove('optionsSection');
    document.getElementById("options").classList.add('optionsDarkMode');
    document.getElementById("options").classList.remove('options');
    document.getElementById("options1").classList.add('optionsDarkMode');
    document.getElementById("options1").classList.remove('options');
    document.getElementById("options2").classList.add('optionsDarkMode');
    document.getElementById("options2").classList.remove('options');
    document.getElementById("boxHeader").classList.add('boxHeaderDarkMode');
    document.getElementById("boxHeader").classList.remove('boxHeader');
    document.getElementById("boxHeader1").classList.add('boxHeaderDarkMode');
    document.getElementById("boxHeader1").classList.remove('boxHeader');
    document.getElementById("boxHeader2").classList.add('boxHeaderDarkMode');
    document.getElementById("boxHeader2").classList.remove('boxHeader');
    document.getElementById("boxdescription").classList.add('boxdescriptionDarkMode');
    document.getElementById("boxdescription").classList.remove('boxdescription');
    document.getElementById("boxdescription1").classList.add('boxdescriptionDarkMode');
    document.getElementById("boxdescription1").classList.remove('boxdescription');
    document.getElementById("boxdescription2").classList.add('boxdescriptionDarkMode');
    document.getElementById("boxdescription2").classList.remove('boxdescription');
    document.getElementById("objectContainer").classList.add('objectContainerDarkMode');
    document.getElementById("objectContainer").classList.remove('objectContainer');
    document.getElementById("objectContainer1").classList.add('objectContainerDarkMode');
    document.getElementById("objectContainer1").classList.remove('objectContainer');
    document.getElementById("objectContainer2").classList.add('objectContainerDarkMode');
    document.getElementById("objectContainer2").classList.remove('objectContainer');
    document.getElementById("endSection").classList.add('endSectionDarkMode');
    document.getElementById("endSection").classList.remove('endSection');
    document.getElementById("menuButton").classList.add('menuButtonDarkMode');
    document.getElementById("menuButton").classList.remove('menuButton');
})

lightModeButton.addEventListener('click', function(){
    darkModeButton.style.display = 'block';
    lightModeButton.style.display = 'none';
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById("navBar").classList.remove('navBarDarkMode');
    document.getElementById("navBar").classList.add('navBar');
    document.getElementById("content").classList.add('content');
    document.getElementById("content").classList.remove('contentDarkMode');
    document.getElementById("content1").classList.add('content');
    document.getElementById("content1").classList.remove('contentDarkMode');
    document.getElementById("content2").classList.add('content');
    document.getElementById("content2").classList.remove('contentDarkMode');
    document.getElementById("content3").classList.add('content');
    document.getElementById("content3").classList.remove('contentDarkMode');
    document.getElementById("menuContent").classList.add('menuContent');
    document.getElementById("menuContent").classList.remove('menuContentDarkMode');
    document.getElementById("locateMenu").classList.add('locateMenuContent');
    document.getElementById("locateMenu").classList.remove('locateMenuContentDarkMode');
    document.getElementById("contactMenu").classList.add('contactMenuContent');
    document.getElementById("contactMenu").classList.remove('contactMenuContentDarkMode');
    document.getElementById("contentText").classList.add('contentText');
    document.getElementById("contentText").classList.remove('contentTextDarkMode');
    document.getElementById("midSection").classList.add('midSection');
    document.getElementById("midSection").classList.remove('midSectionDarkMode');
    document.getElementById("slider").classList.add('slider');
    document.getElementById("slider").classList.remove('sliderDarkMode');
    document.getElementById("optionsSection").classList.add('optionsSection');
    document.getElementById("optionsSection").classList.remove('optionsSectionDarkMode');
    document.getElementById("options").classList.add('options');
    document.getElementById("options").classList.remove('optionsDarkMode');
    document.getElementById("options1").classList.add('options');
    document.getElementById("options1").classList.remove('optionsDarkMode');
    document.getElementById("options2").classList.add('options');
    document.getElementById("options2").classList.remove('optionsDarkMode');
    document.getElementById("boxHeader").classList.add('boxHeader');
    document.getElementById("boxHeader").classList.remove('boxHeaderDarkMode');
    document.getElementById("boxHeader1").classList.add('boxHeader');
    document.getElementById("boxHeader1").classList.remove('boxHeaderDarkMode');
    document.getElementById("boxHeader2").classList.add('boxHeader');
    document.getElementById("boxHeader2").classList.remove('boxHeaderDarkMode');
    document.getElementById("boxdescription").classList.add('boxdescription');
    document.getElementById("boxdescription").classList.remove('boxdescriptionDarkMode');
    document.getElementById("boxdescription1").classList.add('boxdescription');
    document.getElementById("boxdescription1").classList.remove('boxdescriptionDarkMode');
    document.getElementById("boxdescription2").classList.add('boxdescription');
    document.getElementById("boxdescription2").classList.remove('boxdescriptionDarkMode');
    document.getElementById("objectContainer").classList.add('objectContainer');
    document.getElementById("objectContainer").classList.remove('objectContainerDarkMode');
    document.getElementById("objectContainer1").classList.add('objectContainer');
    document.getElementById("objectContainer1").classList.remove('objectContainerDarkMode');
    document.getElementById("objectContainer2").classList.add('objectContainer');
    document.getElementById("objectContainer2").classList.remove('objectContainerDarkMode');
    document.getElementById("endSection").classList.add('endSection');
    document.getElementById("endSection").classList.remove('endSectionDarkMode');
    document.getElementById("menuButton").classList.add('menuButton');
    document.getElementById("menuButton").classList.remove('menuButtonDarkMode');
})