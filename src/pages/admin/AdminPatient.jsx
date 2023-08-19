import Select from "react-select";

const options = [
  { value: "1", label: "Pill 1" },
  { value: "2", label: "Pill 2" },
  { value: "3", label: "Pill 3" },
  { value: "4", label: "Pill 4" },
  { value: "5", label: "Pill 5" },
];

const patientInfo = {
  name: "Daehee Han",
  birth: "2003-04-01",
  disease: "Diabetes",
};

export default function AdminPatient() {
  return (
    <form className="h-screen w-screen flex justify-center items-center">
      <div className="h-5/6 w-full grid grid-rows-6">
        <div className="flex justify-center items-center">
          <div className="h-2/3 w-3/4 flex justify-center items-center text-2xl font-semibold bg-grey rounded-3xl">
            Patient Information
          </div>
        </div>
        <div className="h-2/3 w-full flex justify-between items-center">
          <div className="h-full w-1/2 px-3 flex flex-col justify-center items-start">
            <label
              htmlFor="name"
              className="h-1/4 w-3/5 font-semibold flex justify-center items-center text-sm bg-grey rounded-2xl">
              Name
            </label>
            <input
              name="name"
              className="h-3/4 w-full pl-3 border-4 border-grey rounded-xl"
              type="text"
              value={patientInfo.name}
              disabled
            />
          </div>
          <div className="h-full w-1/2 px-3 flex flex-col justify-center items-start">
            <label
              htmlFor="birth"
              className="h-1/4 w-3/5 font-semibold flex justify-center items-center text-sm bg-grey rounded-2xl">
              Birth
            </label>
            <input
              name="birth"
              className="h-3/4 w-full pl-3 border-4 border-grey rounded-xl"
              type="text"
              value={patientInfo.birth}
              disabled
            />
          </div>
        </div>
        <div className="h-2/3 w-full flex justify-center items-center">
          <div className="h-full w-11/12">
            <label
              htmlFor="disease"
              className="h-1/4 w-2/5 font-semibold flex justify-center items-center text-sm bg-grey rounded-2xl">
              Disease
            </label>
            <input
              name="disease"
              className="h-3/4 w-full pl-3 border-4 border-grey rounded-xl"
              type="text"
              value={patientInfo.disease}
              disabled
            />
          </div>
        </div>
        <div className="h-2/3 w-full flex justify-center items-center">
          <div className="h-full w-11/12">
            <label
              htmlFor="Pill"
              className="h-1/4 w-2/5 font-semibold flex justify-center items-center text-sm bg-grey rounded-2xl">
              Pill
            </label>
            <Select
              options={options}
              className="h-3/4 w-full pl-3 border-4 border-grey rounded-xl"
            />
          </div>
        </div>
        <div className="h-2/3 w-full flex justify-center items-center">
          <div className="h-full w-11/12">
            <label
              htmlFor="amount"
              className="h-1/4 w-2/5 font-semibold flex justify-center items-center text-sm bg-grey rounded-2xl">
              Amount (mg)
            </label>
            <input
              name="amount"
              className="h-3/4 w-full pl-3 border-4 border-grey rounded-xl"
              type="number"
            />
          </div>
        </div>
        <div className="h-2/3 w-full flex justify-center items-center">
          <input
            type="submit"
            value={"Send"}
            className="h-1/2 w-1/4 flex justify-center items-center bg-grey rounded-xl font-semibold"
          />
        </div>
      </div>
    </form>
  );
}
// export default function AdminPatient() {
//   return (
//     <form className="h-screen w-screen flex flex-col justify-start items-center">
//       <div className="h-1/3 w-3/4 flex flex-col justify-center items-center">
//         <div className="text-3xl font-semibold">Patient Information</div>
//         <div>
//           <div>
//             <label htmlFor="name" className="font-semibold">
//               Name:&nbsp;
//             </label>
//             <input type="text" value={patientInfo.name} disabled />
//           </div>
//           <div>
//             <label htmlFor="birth" className="font-semibold">
//               Birth:&nbsp;
//             </label>
//             <input type="text" value={patientInfo.birth} disabled />
//           </div>
//           <div>
//             <label htmlFor="disease" className="font-semibold">
//               Disease:&nbsp;
//             </label>
//             <input type="text" value={patientInfo.disease} disabled />
//           </div>
//         </div>
//       </div>
//       <Select options={options} />
//       <div className="flex justify-start">
//         <label htmlFor="amount">Amount: </label>
//         <input
//           name="amount"
//           type="number"
//           min={0}
//           max={1000}
//           className="border border-black"
//         />
//         <div>mg</div>
//       </div>
//       <div>
//         <input type="submit" value={"확인"} className="border border-black" />
//       </div>
//     </form>
//   );
// }
