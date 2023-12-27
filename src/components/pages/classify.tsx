import {
  Controller,
  SubmitHandler,
  useForm,
  useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Fragment } from "react";
import { Plus, Trash } from "lucide-react";

type ClassifyForm = {
  filePath: string;
  identifiers: string[];
};

const FormSchema = z.object({
  filePath: z.string().min(1, "File path is mandatory"),
  identifiers: z.array(z.string().min(1, "Identifier is mandatory")),
});

export default function ClassifyPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ClassifyForm>({
    defaultValues: {
      filePath: "",
      identifiers: [" "],
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<ClassifyForm> = (data) => console.log(data);

  const { fields, append, remove } = useFieldArray<any>({
    name: "identifiers",
    control: control,
  });

  return (
    <div className="w-full px-2 space-y-8">
      <h1 className="text-xl">Classify</h1>

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
        {fields.map((field, index) => (
          <Fragment key={field.id}>
            <label htmlFor="identifiers">Identifier</label>
            <div className="flex">
              <Controller
                control={control}
                name={`identifiers.${index}`}
                render={({ field }) => <Input type="text" {...field} />}
              />
              &nbsp;
              {index === fields.length - 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => append(" ")}
                >
                  <Plus />
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => remove(index)}
                >
                  <Trash />
                </Button>
              )}
            </div>
            <div className="col-span-2">
              {errors.identifiers && (
                <span className="text-red-500 text-sm">
                  {errors?.identifiers[index]?.message}
                </span>
              )}
            </div>
          </Fragment>
        ))}
        <Button type="submit" className="col-span-2 text-right">
          Submit
        </Button>
      </form>
    </div>
  );
}
