import { Button } from "../ui/button";
import FormControl from "./form-control";

const CommonForm = ({
  handleSubmit,
  buttonText = "Submit",
  formControl = [],
  formData,
  setFormData,
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
      <Button type="submit">{buttonText}</Button>
    </form>
  );
};

export default CommonForm;
