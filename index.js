let arr=[
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/4f84f7cf33100b5d.png?q=100",
         title:"Top Offers",

    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/72ec95ea3c99ee60.png?q=100",
         title:"Mobiles & Tablets",

    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0dac5f7442d7fd5f.png?q=100",
         title:"Electronics",

    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/436cd6fc952ae1cb.png?q=100",
         title:"TVs & Appliances",

    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/eb336e40e5a1b6ec.png?q=100",
         title:"Fashion",
         href:'product.html',

    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/f4f8f26cdeb86ce4.png?q=100",
         title:"Beauty",

    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/92b1f08861995c5f.png?q=100",
         title:"Home & Kitchen",

    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/d47b98754854d054.png?q=100",
         title:"Furniture",

    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/7f42ba8e79833eaa.png?q=100",
         title:"Flights",

    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/898880c3805043b1.png?q=100",
         title:"Grocery",

    },
];

arr.map((element)=>
{
    let pic=document.createElement('img');
    pic.src=element.img_src;

    let title=document.createElement("p");
    title.innerHTML =element.title;

    let box=document.createElement("div");
    box.append(pic,title);

    document.getElementById("pic_array").append(box);

})
