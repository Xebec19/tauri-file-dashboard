import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { z } from "zod";

type IDPForm = {
  awsAccessKey: string;
  awsSecretKey: string;
};

const FormSchema = z.object({
  awsAccessKey: z.string().min(1, "access key is mandatory"),
  awsSecretKey: z.string().min(1, "secret key is mandatory"),
});

export default function IDPPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IDPForm>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<IDPForm> = (data) => console.log(data);

  return (
    <div className="w-full px-2 space-y-8">
      <h1 className="text-xl">IDP</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <label htmlFor="awsAccessKey">AWS Access Key</label>
        <Controller
          control={control}
          name="awsAccessKey"
          render={({ field }) => <Input type="text" {...field} />}
        />
        <div className="col-span-2">
          {errors.awsAccessKey && (
            <span className="text-red-500 text-sm">
              {errors.awsAccessKey.message}
            </span>
          )}
        </div>
        <label htmlFor="awsSecretKey">AWS Secret Key</label>
        <Controller
          control={control}
          name="awsSecretKey"
          render={({ field }) => <Input type="text" {...field} />}
        />
        <div className="col-span-2">
          {errors.awsSecretKey && (
            <span className="text-red-500 text-sm">
              {errors.awsSecretKey.message}
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
