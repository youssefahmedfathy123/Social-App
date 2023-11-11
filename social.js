const menuItems = document.querySelectorAll('.menu-item');


const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// theme 
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');








// =============== Sidebar ====================

// remove active class from all menu items
const changeAciveItem = () => {
    menuItems.forEach( x => {
     x.classList.remove('active');
    })
}




menuItems.forEach( x => {
   x.addEventListener('click', () => {
    changeAciveItem();
    x.classList.add('active');
    if(x.id != 'notifications'){
        document.querySelector('.notifications-popupe').style.display = 'none';
    }else{
        document.querySelector('.notifications-popupe').style.display = 'block';
        document.querySelector('#notifications .notification-count').style.display = 'none';
    }
   })
})


// =============== Messages ====================
// searches chat 
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();  // youssef
    message.forEach( x => {    /* هتعمل الفانكشن دي لكل واحده*/ 
 let name = x.querySelector('h5').textContent.toLowerCase(); // you
 if(name.indexOf(val) != -1){
    x.style.display = 'flex';
 }else{
    x.style.display = 'none';
 }
    })

}


// hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = ' 0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display ='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// theme

// open model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}


// close model
const closeThemeModel = (y) => {
    if(y.target.classList.contains('customize-theme')){
      themeModel.style.display = 'none';
    }
}

themeModel.addEventListener('click',closeThemeModel);
theme.addEventListener('click',openThemeModel);

// remove active class from spans or font size
const removeSizeSelector = () => {
    fontSizes.forEach(x => {
        x.classList.remove('active');
    })
}











// font sizes
fontSizes.forEach( x => {
    let fontSize;

    

    x.addEventListener(('click'), () => {

   removeSizeSelector();
   x.classList.add('active');

    if(x.classList.contains('font-size-1')){
       fontSize = '10px';
       root.style.setProperty('--sticky-top-left','5.4rem');
       root.style.setProperty('--sticky-top-right','5.4rem')
    } else if(x.classList.contains('font-size-2')){
       fontSize = '13px';
       root.style.setProperty('--sticky-top-left','5.4rem');
       root.style.setProperty('--sticky-top-right','-7rem')
    } else if(x.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('--sticky-top-left','-2rem');
        root.style.setProperty('--sticky-top-right','-17rem')
     } else if(x.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('--sticky-top-left','-5rem');
        root.style.setProperty('--sticky-top-right','-25rem')
     } else if(x.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('--sticky-top-left','-12rem');
        root.style.setProperty('--sticky-top-right','-35rem') 
     }

 // change font size of the root html element
     document.querySelector('html').style.fontSize = fontSize;
          })

    
})

// remove primary-color active

const removePrimaryColor = () => {
    colorPalette.forEach( x => {
     x.classList.remove('active');
})
}



// change primary color
colorPalette.forEach( x => {
   x.addEventListener('click', () => {
     let primaryHue;
          

      if(x.classList.contains('color-1')){
         primaryHue = 252;
      }else if(x.classList.contains('color-2')){
         primaryHue = 52;
      }else if(x.classList.contains('color-3')){
        primaryHue = 352;
     }else if(x.classList.contains('color-4')){
        primaryHue = 152;
     }else if(x.classList.contains('color-5')){
        primaryHue = 202;
     }
     removePrimaryColor();
     x.classList.add('active');
     
     root.style.setProperty('--primary-color-hue',primaryHue);
   })
})

// theme background values
let  darkColorLightnes;
let  lightColorLightness;
let  whiteColorLightness;

const changeBG = () => {
root.style.setProperty('--dark-color-lightness',darkColorLightnes);
root.style.setProperty('--light-color-lightness',lightColorLightness);
root.style.setProperty('--white-color-lightness',whiteColorLightness);                 
}


bg1.addEventListener(('click'),() => {

    
window.location.reload();
})

bg2.addEventListener(('click'),() => {
    darkColorLightnes = '95%';
    lightColorLightness = '15%';
    whiteColorLightness  ='20%';

    bg3.classList.remove('active');
    bg1.classList.remove('active');
    bg2.classList.add('active');

  
    changeBG();
  })

  bg3.addEventListener(('click'),() => {
    darkColorLightnes = '95%';
    lightColorLightness = '0%';
    whiteColorLightness  ='10%';
   
    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');


    changeBG();
  })
  


