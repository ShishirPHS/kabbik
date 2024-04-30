import bannerRight from "../../assets/bannerRight.png";
import allProdBtn from "../../assets/allProdIcon.png";
import sofa from "../../assets/sofa.png";
import chair from "../../assets/chair.png";
import bed from "../../assets/bed.png";

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
                className="absolute right-[108px] top-0 z-10"
                src={bannerRight}
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* banner lower */}
      <div className="bg-[#FDCC1A] pt-[42px] pb-[60px] relative">
        <div className="container mx-auto">
          <div className="flex">
            <button
              style={{
                boxShadow: "0px 0px 15px 0px rgba(0, 57, 40, 0.82) inset",
              }}
              className="text-white py-2 px-7 rounded bg-[#2F6F59] font-fontNarrow mr-[35px]"
            >
              Buy Now
            </button>
            <button className="font-fontNarrow font-medium text-xl">
              <span className="flex items-center">
                <img src={allProdBtn} alt="" /> All Product
              </span>
            </button>
          </div>
        </div>
        {/* cards */}
        <div className="flex items-center space-x-[35px] absolute top-[35px] left-[50%] -translate-x-[50%] z-20">
          {/* card 1 */}
          <div
            style={{ boxShadow: "0px 1px 13px 0px rgba(46, 49, 146, 0.09)" }}
            className="pt-[43px] pb-[15px] px-3 bg-gradient-to-b from-[#BDEFDE] to-[#70CEB1] rounded-[22px] flex flex-col items-center"
          >
            <img src={sofa} alt="" />
            <h4 className="font-semibold text-xl font-fontNarrow mt-[18px]">
              Sofa
            </h4>
          </div>
          {/* card 2 */}
          <div
            style={{ boxShadow: "0px 1px 13px 0px rgba(46, 49, 146, 0.09)" }}
            className="pt-[14px] pb-[15px] px-[39px] bg-gradient-to-b from-[#BDEFDE] to-[#70CEB1] rounded-[22px] flex flex-col items-center"
          >
            <img src={chair} alt="" />
            <h4 className="font-semibold text-xl font-fontNarrow mt-[18px]">
              Chair
            </h4>
          </div>
          {/* card 3 */}
          <div
            style={{ boxShadow: "0px 1px 13px 0px rgba(46, 49, 146, 0.09)" }}
            className="pt-[23px] pb-[15px] px-[20px] bg-gradient-to-b from-[#BDEFDE] to-[#70CEB1] rounded-[22px] flex flex-col items-center"
          >
            <img src={bed} alt="" />
            <h4 className="font-semibold text-xl font-fontNarrow mt-[18px]">
              Bed
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
