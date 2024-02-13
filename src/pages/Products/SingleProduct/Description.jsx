import ChevronRightIcon from "./../../../assets/icons/ChevronRightIcon";
const Description = () => {
  return (
    <div className="bg-[#F9F8FE]">
      <div className="container max-w-1200 px-4 py-[110px] flex flex-col items-start justify-center gap-[60px]">
        <ul className="flex gap-[85px] items-center ">
          <li className="text-navyBlue text-2xl font-semibold underline">
            Description
          </li>
          <li className="text-navyBlue text-2xl font-semibold">
            Additional Info
          </li>
          <li className="text-navyBlue text-2xl font-semibold">Reviews</li>
          <li className="text-navyBlue text-2xl font-semibold">Video</li>
        </ul>
        <div className="flex flex-col gap-4">
          <p className="text-xl text-navyBlue font-semibold">Varius tempor.</p>
          <p className="text-[#A9ACC6] text-base">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl text-navyBlue font-semibold">More Details</p>
          <ul>
            <li className="text-[#A9ACC6] text-base flex gap-2 items-center">
              <ChevronRightIcon /> Aliquam dis vulputate vulputate integer
              sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
              Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </li>
            <li className="text-[#A9ACC6] text-base flex gap-2 items-center">
              <ChevronRightIcon /> Aliquam dis vulputate vulputate integer
              sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
              Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </li>
            <li className="text-[#A9ACC6] text-base flex gap-2 items-center">
              <ChevronRightIcon /> Aliquam dis vulputate vulputate integer
              sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
              Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </li>
            <li className="text-[#A9ACC6] text-base flex gap-2 items-center">
              <ChevronRightIcon /> Aliquam dis vulputate vulputate integer
              sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
              Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
