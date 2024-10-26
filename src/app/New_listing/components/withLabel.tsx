import React from "react";
import { Input } from "@/components/ui/input"; 
import { Label } from "@/components/ui/label";


type InputWithLabelProps = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  name: string;
};

const InputWithLabel = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  defaultValue,
  name,
}: InputWithLabelProps) => {
  return (
    <div className="items-center grid gap-1.5 w-full max-w-sm">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        name={name}
        className="border p-2 rounded" // Optional: add some styling
      />
    </div>
  );
};

export default InputWithLabel;
