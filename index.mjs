import {chromium} from 'playwright' ; 

const browser = await chromium.launch(
    {headless: true  }           
);

const page = await browser.newPage();


// pinteres 
const pageMain  ='https://www.pinterest.com.mx/search/pins/?q=' ; 
const search  = 'xiao genshin impact'
const parseUrl = pageMain + search.replace(' ', '%20');
await page.goto(`${parseUrl}`);
// div content img const divContent = document.querySelector(".vbI .XiG")
// more 
// get img 
// but with more the 1000 img 



await page.evaluate("window.onload =()=>{window.scrollTo(0, document.body.scrollHeight)};")
setTimeout(async () => {
    await page.waitForSelector('img');
    const images = await  page.$$eval('img', imgs => imgs.map(img => img.getAttribute('src')));
        console.log("hola")
    console.log(images);
}, 5000);


