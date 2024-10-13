import { memo } from 'react'

import { type ButtonProps, Button } from '@/components/ui/button';

type TLoadingButtonProps = ButtonProps & {
  isLoading: boolean;
}

function LoadingButton(props: TLoadingButtonProps) {
  return (
    <Button
      disabled={props.isLoading}
      {...props}
      className={`w-fit ${props.className}`}
    >
      {props.isLoading ? "...." : props.children}
    </Button>
  )
}

export const MemoLoadingButton = memo(LoadingButton);