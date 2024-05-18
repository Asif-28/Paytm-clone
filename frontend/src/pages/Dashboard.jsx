import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div className="float-right mr-10 my-4 ">
        <button
          onClick={() => localStorage.removeItem("token")}
          className="text-white px-3 py-2 rounded-md bg-slate-800 hover:bg-black"
        >
          Logout
        </button>
      </div>
      <div className="m-8">
        <Balance value={"5,000"} />
        <Users />
      </div>
    </div>
  );
};
