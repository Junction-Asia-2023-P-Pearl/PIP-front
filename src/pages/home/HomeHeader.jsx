export default function HomeHeader() {
  return (
    <div className="h-1/5 w-full flex flex-col justify-end">
      <div className="h-2/5 w-full flex justify-between items-center pl-2">
        <div className="h-full flex justify-start items-center text-5xl">
          PIP
        </div>
        <div className="h-full flex mr-3 justify-end items-center">
          <div className="text-xs mr-3">
            <div>Hi, Jimin.</div>
            <div>We wish the patient a speedy recovery.</div>
          </div>
          <div>
            <img src="src/assets/react.svg" />
          </div>
        </div>
      </div>
      <div className="h-2/5 w-full flex justify-center items-center border border-black">
        Lorem ipsum dolor sit, amet consectetur
      </div>
    </div>
  );
}
