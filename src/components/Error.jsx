import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Oooops!</h1>
      <h2>Something went wrong!</h2>
      <h3>
        {error.status} : {error.statusText}
      </h3>
    </>
  );
};

export default Error;
