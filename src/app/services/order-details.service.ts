import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
//food details

fooddetails= [
  {

    id:1,
    foodName:"caffe lette",
    foodDetails:"made primarily from espresso and steamed milk",
    foodPrice:80,
    foodImg:"https://www.thespruceeats.com/thmb/x7I8C5ZULZdDah4KgxqFT4WCAlI=/4200x2800/filters:fill(auto,1)/how-to-make-caffe-latte-765372-hero-01-2417e49c4a9c4789b3abdd36885f06ab.jpg"
  
  },
  {
    id:2,
    foodName:"cappuccino",
    foodDetails:"the perfect balance of espresso",
    foodPrice:120,
    foodImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Italian_breakfast_cappucino%2C_Esino_Lario.jpg/800px-Italian_breakfast_cappucino%2C_Esino_Lario.jpg"
  },
    {
      id:3,
      foodName:"Flat white",
      foodDetails:"an espresso-based coffee drink accompanied with steamed milk and microfoam",
      foodPrice:100,
      foodImg:"https://cdn.vox-cdn.com/thumbor/ZrksPGXGEge0_XVLWgAOQ1C3U5g=/0x0:1000x750/1400x1400/filters:focal(0x0:1000x750):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/45140100/6792268281_d0822743b8_b.0.0.jpg"
    },  
    {
      id:4,
      foodName:"Americano",
      foodDetails:"espresso and amount of water added",
      foodPrice:70,
      foodImg:"https://purpleboat.in/wp-content/uploads/2020/09/cafe-americano.jpeg"
    }, 
    {
      id:5,
      foodName:"carramel macchiato",
      foodDetails:"vanilla syrup and caramel drizzle",
      foodPrice:90,
      foodImg:"https://thelittlestcrumb.com/wp-content/uploads/salted-caramel-macchiato-featured-image-1.jpg"
    }, 
    {
      id:6,
      foodName:"White mocha",
      foodDetails:" milk, and some whipped cream ",
      foodPrice:140,
      foodImg:"https://www.biscuitsandburlap.com/wp-content/uploads/2021/11/white-chocolate-mocha-rec-card-feature.jpg"
    },
    {
      id:7,
      foodName:"chocolate cappaccino",
      foodDetails:"the perfect balance of espresso with chocolate",
      foodPrice:160,
      foodImg:"http://images5.fanpop.com/image/photos/31700000/hot-chocolate-chocolate-31797682-305-363.jpg"
    },
    {
      id:8,
      foodName:"velvet vennila latte",
      foodDetails:"velvety steamed milk and vanilla syrup",
      foodPrice:110,
      foodImg:"https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_topcrop_630"
    },
    {
      id:9,
      foodName:"FRAPPUCCINO",
      foodDetails:"Frappuccino is a portmanteau of frappe and cappuccino, an espresso coffee with frothed milk.",
      foodPrice:200,
      foodImg:"https://www.coffeefriend.co.uk/app/uploads/2021/01/Frappe-virselis.jpg"
    },
    {
      id:10,
      foodName:"IRISH COFFEE",
      foodDetails:"like many of us fell in love with the drink the first moment he tried it.",
      foodPrice:250,
      foodImg:"https://hips.hearstapps.com/hmg-prod/images/1519246658-irish-coffee-delish-1620163679.jpeg"
    },
    {
      id:11,
      foodName:"Café au Lait",
      foodDetails:"This fancy-sounding French drink is actually super simple",
      foodPrice:100,
      foodImg:"https://izzycooking.com/wp-content/uploads/2021/12/Cafe%CC%81-Au-Lait-thumbnail.jpg"
    },
    {
      id:12,
      foodName:"Cortado",
      foodDetails:"This drink, which hails from Spain, is half espresso, half steamed milk. ",
      foodPrice:90,
      foodImg:"https://perfectdailygrind.com/wp-content/uploads/2020/03/Cortadito-1.png"
    },
    {
      id:13,
      foodName:"Red Eye",
      foodDetails:"When you need an extra caffeine boost, go for this two-in-one drink: It's coffee with a shot of espresso.",
      foodPrice:50,
      foodImg:"https://jayarrcoffee.com/wp-content/uploads/2020/05/1_aroma-black-coffee-caffeine-327120_large.jpg?ezimgfmt=rs:372x248/rscb32/ng:webp/ngcb32"
    },
    {
      id:14,
      foodName:"Iced Coffee",
      foodDetails:"Is there anything better than a glass of iced coffee on a hot day ",
      foodPrice:95,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkyDbvVrbcpW6lT9ltj15jh0YblDzAWvEwg&usqp=CAU"
    },
    {
      id:15,
      foodName:"Iced Latte",
      foodDetails:"The chilled version of a latte is simply espresso and milk over ice.",
      foodPrice:110,
      foodImg:"https://fountainavenuekitchen.com/wp-content/uploads/2013/08/Nutella-Iced-Latte-1170x780.jpg",
    },
    {
      id:16,
      foodName:"Cold Brew",
      foodDetails:"Cold brew is one of the biggest coffee trends of the last decade, and for good reason",
      foodPrice:120,
      foodImg:"https://coffeeaffection.com/wp-content/uploads/2019/01/cold-brew_andrew-donovan_unsplash.jpg",
    },
    {
      id:17,
      foodName:"Nitro Cold Brew",
      foodDetails:"Cutting-edge coffee roasters developed this newer type of cold brew using techniques",
      foodPrice:80,
      foodImg:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71225.jpg"
    },
    {
      id:18,
      foodName:"Frappe",
      foodDetails:"This word can be used to describe a variety of coffee and espresso drinks that have been blended with ice.",
      foodPrice:190,
      foodImg:"https://www.seriouseats.com/thmb/TiXJQY-DKf0Y1recTt7St1mKH0o=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__07__20180709-frappe-vicky-wasik-12--39142f60b88242a4ab00f6539b87dafe.jpg"
    },
    {
      id:19,
      foodName:"Manilo",
      foodDetails:"A manilo consists of a regular espresso shot and less than 100 ml (3.4 US fluid ounces; 3.5 imperial fluid ounces) of silky milk.",
      foodPrice:150,
      foodImg:"https://lifebeyondnumbers.b-cdn.net/wp-content/uploads/2019/12/coffee-joints-manila.jpg"
    },
    {
      id:20,
      foodName:"Caffè lungo",
      foodDetails:"A lungo (or allongé in French) is similar to a caffè americano or a long black. ",
      foodPrice:140,
      foodImg:"https://www.perfectbrew.com/wp-content/uploads/2021/07/how-to-make-espresso-lungo-XS.jpg",
    },
    {
      id:21,
      foodName:"Café cubano",
      foodDetails:"Cuban tradition is to drink coffee strong and sweet, often mixing the sugar with the coffee beans before brewing. ",
      foodPrice:40,
      foodImg:"https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/09/Cafe%CC%81-Cubano.jpg"
    },
    {
      id:22,
      foodName:"Cafe Zorro",
      foodDetails:"A cafe Zorro is a double espresso or doppio, added to hot water with a 1:1 ratio",
      foodPrice:120,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/nkff23fy4cniqahgroaa"
    },
    {
      id:23,
      foodName:"Espresso Roberto",
      foodDetails:"An espresso Roberto is a double shot espresso with a small amount of steamed milk on the side.",
      foodPrice:130,
      foodImg:"https://media-cdn.tripadvisor.com/media/photo-s/1b/65/69/8a/img-20200610-wa0000-largejpg.jpg"
    }
    
    
    
  
]

}
