import { Link, useLocation, useParams } from "react-router-dom";

export default function PatientNav() {
  const { patientId } = useParams();
  const { pathname } = useLocation();

  const linkData = [
    {
      path: `/patient/${patientId}/info`,
      clickPage: "",
      title: "Information",
    },
    {
      path: `/patient/${patientId}/detail`,
      clickPage: "detail",
      title: "Details",
    },
    {
      path: `/patient/${patientId}/diag`,
      clickPage: "diag",
      title: "Diagnosis",
    },
  ];

  return (
    <div className="h-1/6 w-full flex justify-start items-center">
      {linkData.map((data, idx) => (
        <Link
          to={data.path}
          key={idx}
          className={`${
            pathname.includes(data.path)
              ? "bg-bright shadow-inner"
              : "bg-extrabright shadow-normal"
          } h-1/2 w-1/3 mx-3 rounded-2xl flex justify-center items-center border-0`}
        >
          {data.title}
        </Link>
      ))}
    </div>
  );
}
