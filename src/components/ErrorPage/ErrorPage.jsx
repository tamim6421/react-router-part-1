import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
//   console.log(error);
  return (
    <div>
      <h2> Opps!!!!!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {
        error.status === 404 && <div> 
            <h3> page not found</h3>
            <h3>Go back Home Page</h3>
            <Link to ='/'> <button>Home</button> </Link>
        </div>
      }
    </div>
  );
};

export default ErrorPage;
