import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "../ui/button";

export default function ErrorPage() {
  const error = useRouteError() as any;
  const navigate = useNavigate();

  return (
    <div className="h-400 w-full flex flex-col justify-center items-center py-4 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl">Oops!</h1>
        <h2 className="text-xl">Sorry, an expected error has errored.</h2>
      </div>

      <div className="text-md">
        <i>{error.statusText || error.message}</i>
      </div>

      <div>
        <Button variant={"link"} onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
