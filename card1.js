var card1data = [
    {
      image_url:
        "https://cdn1.tripoto.com/media/filter/tst/img/2163002/Image/1638778652_image_cover_b.jpg",
      name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
      price: "1170",
      strikedoffprice: "2599",
    },
    {
      image_url:
        "https://cdn1.tripoto.com/media/filter/tst/img/2163002/Image/1640323403_image_cover_b.jpg",
      name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657204838_omya_img_cover_b.jpg",
      name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
      price: 945,
      strikedoffprice: 2099,
    },
    {
      image_url:
        "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654504108_ce_c1.jpg",
      name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
      price: 399,
      strikedoffprice: 799,
    },
    {
      image_url:
        "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1653394847_nw_c2.jpg",
      name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg",
      name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
      price: 1440,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg",
      name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: 1999,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg",
      name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
      price: 769,
      strikedoffprice: 1099,
    },
    {
        image_url:
          "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660666126_image_covera.jpg",
        name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
        price: 769,
        strikedoffprice: 1099,
      },
      {
        image_url:
          "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1662966110_image_cover_2.jpg",
        name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
        price: 769,
        strikedoffprice: 1099,
      },
      {
        image_url:
          "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1653391344_ln_c1.jpg",
        name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
        price: 769,
        strikedoffprice: 1099,
      }
    ];
      card1data.forEach(function(ele)
    {
           let card1container=document.createElement("div")
           let hotelimg=document.createElement("img");
           hotelimg.src=ele.image_url

           let hoteldesc=document.createElement("h3")
           hoteldesc.innerText=ele.name

           let hotelprice=document.createElement("h2")
            hotelprice.innerText=ele.price
           let buynow=document.createElement("button")
           buynow.innerText="Buy Now"
           buynow.style.backgroundColor="white"
           buynow.style.border="1px solid blue"
           buynow.style.color="blue"
           buynow.style.width="100px"
           buynow.style.height="70px"
            card1container.append(hotelimg,hoteldesc,hotelprice,buynow)
            document.getElementById("card1pagecontainer").append(card1container)


    })

  