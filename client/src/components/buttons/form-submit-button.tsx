import { memo, type ButtonHTMLAttributes } from "react";
import { useNavigation } from "react-router";

import { Button } from "@/components/ui/button";

type FormSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function SubmitButton(props: FormSubmitButtonProps) {
  const navigation = useNavigation();

  return (
    <Button className="w-full" type="submit">
      {
        navigation.state === "submitting" 
        ? "Saving..." 
        : !props.children
          ? "Save"
          : props.children
      }
    </Button>
  );
}

export const FormSubmitButton = memo(SubmitButton);