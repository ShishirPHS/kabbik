import bannerRight from "../../assets/bannerRight.png";
import allProdBtn from "../../assets/allProdIcon.png";

const Banner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FFE481] via-[#FFE173] to-[#FFD63F]">
        <div className="container mx-auto px-2">
          {/* banner upper */}
          <div className="pt-[50px] pb-[78px] relative">
            <div>
              <h1 className="text-[75px] text-[#163A2E] font-semibold font-fontOxanium">
                We <span className="text-[#2F8F6F]">Provide High</span>
              </h1>
              <h2 className="text-[#163A2E] font-semibold text-[45px] font-fontOxanium">
                Quality Furniture
              </h2>
              <p className="text-[#475B54] text-[15px] font-fontOxanium max-w-[834px] mt-[28px]">
                Choose and buy from wide and largest sofa collection of
                Bangladesh. Regal, the most loved and selling furniture brand in
                Bangladesh, brought to you modern, ergonomic, budget friendly
                sofa. Choose among various types of Sofa Such as Fabric Sofa,
                Wooden Sofa, Sofa cum beds, L-shaped Sofa at affordable prices,
                redefine your living room with our most unique ergonomically and
                quality crafted Sofas that suit your needs best.
              </p>
            </div>
            <div>
              <img
                className="absolute right-[108px] top-0"
                src={bannerRight}
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* banner lower */}
      <div className="bg-[#FDCC1A] pt-[42px] pb-[60px]">
        <div className="container mx-auto">
          <button
            style={{
              boxShadow: "0px 0px 15px 0px rgba(0, 57, 40, 0.82) inset",
            }}
            className="text-white py-2 px-7 rounded bg-[#2F6F59] font-fontNarrow"
          >
            Buy Now
          </button>
          <button>
            <img src={allProdBtn} alt="" /> All Product
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
