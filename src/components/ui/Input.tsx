import { forwardRef, InputHTMLAttributes, Ref } from "react";
import { memo } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

// eslint-disable-next-line react-refresh/only-export-components
const Input = forwardRef(({ ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      className="border-[1px] border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-3 text-md"
      ref={ref}
      {...rest}
    />
  );
});

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Input);
