import Button from "../../../Components/Buttons/Button";

const Newsletter = () => {
  return (
    <div className="bg-newsletter pt-[175px] pb-[100px] flex flex-col text-center gap-[30px] bg-cover bg-center items-center w-full ">
      <h1 className="text-navyBlue font-bold text-4xl">
        Get Leatest Update By Subscribe <br /> 0ur Newslater
      </h1>
      <Button variant="primary">Shop Now</Button>
    </div>
  );
};

export default Newsletter;
