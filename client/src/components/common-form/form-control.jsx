import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const FormControl = ({ formControl = [], formData, setFormData }) => {
  const renderComponentByType = (getControlItem) => {
    let element = null;

    switch (getControlItem.ComponentType) {
      case "input":
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
          />
        );
        break;
      case "select":
        element = (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((option) => {
                    <SelectItem key={option.id} value={option.id}>
                      {option.label}
                    </SelectItem>;
                  })
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = <Textarea />;
        break;
      default:
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
          />
        );
        break;
    }

    return element;
  };

  return (
    <div className="flex flex-col gap-3">
      {formControl.map((controlerItem) => {
        return (
          <div key={controlerItem.name}>
            <Label htmlFor={controlerItem.name}>{controlerItem.lable}</Label>
            {renderComponentByType(controlerItem)}
          </div>
        );
      })}
    </div>
  );
};

export default FormControl;