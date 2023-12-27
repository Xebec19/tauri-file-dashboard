import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { z } from "zod";

type MountForm = {
  clientID: string;
  clientSecret: string;
};

const FormSchema = z.object({
  clientID: z.string().min(1, "access key is mandatory"),
  clientSecret: z.string().min(1, "secret key is mandatory"),
});

export default function Mount() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MountForm>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<MountForm> = (data) => console.log(data);

  return (
    <div className="w-full px-2 space-y-8">
      <h1 className="text-xl">Mount</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 max-w-[400px]"
      >
        <label htmlFor="clientID">Client ID</label>
        <Controller
          control={control}
          name="clientID"
          render={({ field }) => <Input type="text" {...field} />}
        />
        <div className="col-span-2">
          {errors.clientID && (
            <span className="text-red-500 text-sm">
              {errors.clientID.message}
            </span>
          )}
        </div>
        <label htmlFor="clientSecret">Client Secret</label>
        <Controller
          control={control}
          name="clientSecret"
          render={({ field }) => <Input type="text" {...field} />}
        />
        <div className="col-span-2">
          {errors.clientSecret && (
            <span className="text-red-500 text-sm">
              {errors.clientSecret.message}
            </span>
          )}
        </div>
        <Button type="submit" className="col-span-2 text-right">
          Submit
        </Button>
      </form>
    </div>
  );
}
