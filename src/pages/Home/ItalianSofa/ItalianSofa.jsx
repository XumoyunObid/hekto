import sofa from "../../../assets/ItalianSofa.png";
import PinkEllipse from "./../../../assets/icons/PinkEllipse";
import BlueEllipse from "./../../../assets/icons/BlueEllipse";
import OffBlueEllipse from "./../../../assets/icons/OffBlueEllipse";
import Button from "../../../Components/Buttons/Button";

const ItalianSofa = () => {
  return (
    <section className="bg-[#F1F0FF]">
      <div className="container max-w-1200 px-4 flex items-center">
        <img src={sofa} />
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-4xl font-bold text-navyBlue">
            Unique Features Of latest & <br /> Trending Poducts
          </h1>
          <ul>
            <li className="flex items-center text-[#ACABC3] gap-[17px]">
              <span>
                <PinkEllipse />{" "}
              </span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center text-[#ACABC3] gap-[17px]">
              <span>
                <BlueEllipse />{" "}
              </span>
              Reinforced with double wood dowels, glue, screw - nails corner{" "}
              <br />
              blocks and machine nails
            </li>
            <li className="flex items-center text-[#ACABC3] gap-[17px]">
              <span>
                <OffBlueEllipse />{" "}
              </span>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>
          <div className="flex gap-4">
            <Button variant="primary">Add to Card</Button>
            <div>
              <h4>B&B Italian Sofa </h4>
              <span>$32.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItalianSofa;
