import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const StudentProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <div className="mb-4">
          <label htmlFor="example" className="block text-gray-700 font-bold mb-2">
            Example Input:
          </label>
          <input
            id="example"
            defaultValue="test"
            {...register("example")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleRequired" className="block text-gray-700 font-bold mb-2">
            Required Input:
          </label>
          <input
            id="exampleRequired"
            {...register("exampleRequired", { required: true })}
            className={`w-full p-3 border ${
              errors.exampleRequired ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.exampleRequired && (
            <span className="text-red-500 text-sm mt-2">This field is required</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentProfile;
