import { Button } from "../ui/button";
import FormControl from "./form-control";

const CommonForm = ({
  handleSubmit,
  buttonText = "Submit",
  formControl = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Render FormControl component */}
      <FormControl
        formControl={formControl}
        formData={formData}
        setFormData={setFormData}
      />
      {/* Submit button */}
      <Button disabled={isButtonDisabled} type="submit" className="mt-5 w-full bg-black text-white hover:text-black">{buttonText}</Button>
    </form>
  );
};

export default CommonForm;
