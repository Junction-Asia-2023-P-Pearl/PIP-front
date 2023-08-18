import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";

export default function Login() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full grid grid-rows-2">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  );
}
