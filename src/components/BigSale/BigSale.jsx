import bigSaleLeftImg from "../../assets/bigSaleLeftImg.png";

const BigSale = () => {
  return (
    <div>
      <div className="container mx-auto mb-[116px]">
        <div className="grid grid-cols-10 gap-[30px]">
          <div
            style={{ boxShadow: "0px 1px 13px 0px rgba(46, 49, 146, 0.09)" }}
            className="col-span-6 bg-[#A8E1E4] flex justify-end rounded-[13px] relative"
          >
            {/* image */}
            <img
              className="absolute left-[35px] bottom-[17px]"
              src={bigSaleLeftImg}
              alt=""
            />
            <div
              style={{ boShadow: "0px 1px 13px 0px rgba(46, 49, 146, 0.09)" }}
              className="bg-[#49A9AE] w-[457px] 2xl:w-[557px] pt-[22px] pb-[223px] pr-[43px] rounded-[13px] flex justify-end"
            >
              <div>
                <h4 className="font-fontItalianno text-[64px] text-white">
                  Furniture
                </h4>
                <h3 className="font-fontItalianno text-[96px] text-white leading-[60px]">
                  Big Sale
                </h3>
                <div className="btnDiv">
                  <button className="orderBtn mt-12">Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default BigSale;
