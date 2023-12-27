import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

type ActivityForm = {
  filePath: string;
  operation: string;
  user: string;
};

const ActivitySchema = z.object({
  filePath: z.string().min(1, "File path is mandatory"),
  operation: z.string().min(1, "Operation is mandatory"),
  user: z.string().min(1, "User is mandatory"),
});

export default function ActivityPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ActivityForm>({
    defaultValues: {
      filePath: "",
      operation: "",
      user: "",
    },
    resolver: zodResolver(ActivitySchema),
  });

  const onSubmit: SubmitHandler<ActivityForm> = (data) => console.log(data);

  return (
    <div className="w-full px-2 space-y-8">
      <h1 className="text-xl">Activity</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <label htmlFor="filePath">File Path</label>
        <Controller
          control={control}
          name="filePath"
          render={({ field }) => <Input type="text" {...field} />}
        />

        <div className="col-span-2">
          {errors.filePath && (
            <span className="text-red-500 text-sm">
              {errors.filePath.message}
            </span>
          )}
        </div>

        <label htmlFor="operation">Operation</label>
        <Controller
          control={control}
          name="operation"
          render={({ field }) => <Input type="text" {...field} />}
        />

        <div className="col-span-2">
          {errors.operation && (
            <span className="text-red-500 text-sm">
              {errors.operation.message}
            </span>
          )}
        </div>

        <label htmlFor="user">User</label>
        <Controller
          control={control}
          name="user"
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={(value) => field.onChange(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a user" />
              </SelectTrigger>
              <SelectContent className="bg-background border">
                <SelectItem value="user1">User 1</SelectItem>
                <SelectItem value="user2">User 2</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <div className="col-span-2">
          {errors.user && (
            <span className="text-red-500 text-sm">{errors.user.message}</span>
          )}
        </div>

        <div className="col-span-2">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
