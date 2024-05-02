type InputProps = {
  id: string;
  label: string;
  type?: string;
  tip?: string;
  placeholder?: string;
  required?: boolean;
};

const Input = ({
  id,
  label,
  type = "text",
  tip,
  placeholder,
  required = false,
}: InputProps) => {
  return (
    <div className="sm:col-span-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {!required && (
          <span className="font-light text-slate-400 before:content-['_']">
            (Optional)
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        // TODO: Add autocomplete fe: autoComplete="given-name"
        aria-describedby={tip && `${id}_input_tip`}
        className="mt-1.5 block w-[256px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      {tip && (
        <p className="mt-1 text-sm text-gray-500" id={`${id}_input_tip`}>
          {tip}
        </p>
      )}
    </div>
  );
};

export default Input;
