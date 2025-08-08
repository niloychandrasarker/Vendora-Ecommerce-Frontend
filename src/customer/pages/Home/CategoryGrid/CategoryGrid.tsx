const CategoryGrid = () => {
  return (
    <div className="grid gap-6 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20 py-4">
      {/* Large vertical card - Women's Ethnic */}
      <div className="col-span-3 row-span-12 group cursor-pointer">
        <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23807268/2023/6/29/9930b235-5318-4755-abbe-08f99e969e781688026636544LehengaCholi7.jpg"
            alt="Women's Ethnic Wear"
          />
        </div>
      </div>

      {/* Small card - Men's Footwear */}
      <div className="col-span-2 row-span-6 group cursor-pointer">
        <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24651572/2023/8/25/4fbf6d8c-d093-46c5-a5a6-7dd67c0c76551692964752597HouseofPataudiMenTanFauxLeatherFormalSlipOnLoafers1.jpg"
            alt="Men's Footwear"
          />
        </div>
      </div>

      {/* Medium card - Electronics */}
      <div className="col-span-4 row-span-6 group cursor-pointer">
        <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://images.pexels.com/photos/12730873/pexels-photo-12730873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Electronics"
          />
        </div>
      </div>

      {/* Large vertical card - Men's Wear */}
      <div className="col-span-3 row-span-12 group cursor-pointer">
        <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://shreeman.in/cdn/shop/files/20_3cfbd5a3-ecb6-482a-b798-7ffd9de1c784.jpg?v=1712061674&width=700"
            alt="Men's Fashion"
          />
        </div>
      </div>

      {/* Medium card - Home & Living */}
      <div className="col-span-4 row-span-6 group cursor-pointer">
        <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/media/2025/05/05/Daraz-e5d85d3f7351694d764f41f3b3770393.jpg?jadewits_media_id=43889"
            alt="Home & Living"
          />
        </div>
      </div>

      {/* Small card - Women's Footwear */}
      <div className="col-span-2 row-span-6 group cursor-pointer">
        <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13837166/2021/8/19/04e40e02-4c56-4705-94d0-f444b29973aa1629373611707-House-of-Pataudi-Women-Maroon-Embellished-Handcrafted-Wedges-1.jpg"
            alt="Women's Footwear"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
