export default function AdminLoginForm() {
  return (
    <form className="h-full w-full flex flex-col justify-start items-center">
      <div className="h-1/2 w-full flex flex-col justify-center items-center">
        <input
          className="bg-lightGray h-1/3 w-4/5 border-0 rounded-2xl text-xl pl-6 shadow-xl"
          placeholder="Password"
        />
      </div>
      <div className="h-1/2 w-full flex flex-col justify-start items-center">
        <input
          className="bg-dark h-1/4 w-1/4 border-0 rounded-3xl shadow-xl text-white"
          type="submit"
          value={"Login"}
        />
      </div>
    </form>
  );
}