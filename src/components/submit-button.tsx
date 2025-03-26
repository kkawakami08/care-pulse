import Image from "next/image";
import { Button } from "./ui/button";

interface SubmitButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({
  isLoading,
  className,
  children,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "bg-green-500 text-white w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src={"/icons/loader.svg"}
            alt="Loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
