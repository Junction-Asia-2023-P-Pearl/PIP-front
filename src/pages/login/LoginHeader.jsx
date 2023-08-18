export default function LoginHeader() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-2/5 flex justify-center items-center text-3xl">PIP</div>
      <div className="h-3/5 flex flex-col justify-around items-center">
        <div className="text-center">
          <div>Hi There!</div>
          <div>Enter your ID and Password</div>
        </div>
        <div className="h-1/2 w-1/2 flex justify-center items-center">
          <img src="src\assets\react.svg" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
