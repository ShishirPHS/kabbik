import star from "../../assets/star.png";
import populwe1 from "../../assets/populwe-1.png";
import populwe2 from "../../assets/populwe-2.png";
import populwe3 from "../../assets/populwe-3.png";
import populwe4 from "../../assets/populwe-4.png";

const Populwe = () => {
  return (
    <div className="container mx-auto pt-[100px] pb-[50px] px-2">
      {/* texts */}
      <div className="flex flex-col items-center mb-[202px]">
        <h3 className="font-semibold font-fontInter text-[25px]">
          POPULWE <span className="text-[#2F8F6F]">WE HAVE</span>
        </h3>
        <p className="text-[#737373] max-w-[848px] text-[10px] text-center mt-1">
          Furniture Concepts is a contract furniture wholesaler serving the
          needs of group living environments including Community Housing,
          Treatment & Recovery Centers, Assisted Living, Camps, Conference
          Centers, Student Housing, Military Dorms & Quarters, and more!
          Behavioral Healthcare Facility Furniture.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-4 gap-[35px]">
        {/* card 1 */}
        <div
          style={{ boxShadow: "0px 1px 13px 0px rgba(46, 49, 146, 0.09)" }}
          className="rounded-[13px] rounded-tr-[116px] pt-[77px] pb-[28px] bg-[#51907D] flex flex-col items-center relative"
        >
          <img className="absolute -top-[160px]" src={populwe1} alt="" />
          <h4 className="font-fontNarrow text-[22px] text-white mb-[2px]">
            Tulip Chair Furniture
          </h4>
          <div className="flex space-x-[4px]">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <h5 className="text-white font-fontNarrow text-[20px] font-bold my-[6px]">
            $12.09
          </h5>
          <button
            style={{ boxShadow: "0px 0px 15px 0px #DDAD00 inset" }}
            className="font-fontNarrow font-medium py-[7px] px-[27px] rounded bg-[#FDCC1A]"
          >
            Buy Now
          </button>
        </div>
        {/* card 2 */}
        <div
          style={{ boxShadow: "0px 1px 13px 0px rgba(46, 49, 146, 0.09)" }}
          className="rounded-[13px] rounded-tr-[116px] pt-[77px] pb-[28px] bg-[#51907D] flex flex-col items-center relative"
        >
          <img className="absolute -top-[160px]" src={populwe2} alt="" />
          <h4 className="font-fontNarrow text-[22px] text-white mb-[2px]">
            Beath Chair Furniture
          </h4>
          <div className="flex space-x-[4px]">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <h5 className="text-white font-fontNarrow text-[20px] font-bold my-[6px]">
            $22.00
          </h5>
          <button
            style={{ boxShadow: "0px 0px 15px 0px #DDAD00 inset" }}
            className="font-fontNarrow font-medium py-[7px] px-[27px] rounded bg-[#FDCC1A]"
          >
            Buy Now
          </button>
        </div>
        {/* card 3 */}
        <div
          style={{ boxShadow: "0px 1px 13px 0px rgba(46, 49, 146, 0.09)" }}
          className="rounded-[13px] rounded-tr-[116px] pt-[77px] pb-[28px] bg-[#51907D] flex flex-col items-center relative"
        >
          <img className="absolute -top-[160px]" src={populwe3} alt="" />
          <h4 className="font-fontNarrow text-[22px] text-white mb-[2px]">
            Yellow armchair
          </h4>
          <div className="flex space-x-[4px]">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <h5 className="text-white font-fontNarrow text-[20px] font-bold my-[6px]">
            $10.00
          </h5>
          <button
            style={{ boxShadow: "0px 0px 15px 0px #DDAD00 inset" }}
            className="font-fontNarrow font-medium py-[7px] px-[27px] rounded bg-[#FDCC1A]"
          >
            Buy Now
          </button>
        </div>
        {/* card 4 */}
        <div
          style={{ boxShadow: "0px 1px 13px 0px rgba(46, 49, 146, 0.09)" }}
          className="rounded-[13px] rounded-tr-[116px] pt-[77px] pb-[28px] bg-[#51907D] flex flex-col items-center relative"
        >
          <img className="absolute -top-[160px]" src={populwe4} alt="" />
          <h4 className="font-fontNarrow text-[22px] text-white mb-[2px]">
            Front view Chair
          </h4>
          <div className="flex space-x-[4px]">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <h5 className="text-white font-fontNarrow text-[20px] font-bold my-[6px]">
            $19.03
          </h5>
          <button
            style={{ boxShadow: "0px 0px 15px 0px #DDAD00 inset" }}
            className="font-fontNarrow font-medium py-[7px] px-[27px] rounded bg-[#FDCC1A]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Populwe;
