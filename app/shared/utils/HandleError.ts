import { toast } from 'react-toastify';

type ErrorProps = {
  message: string;
  errorCode: string;
} | null;

const showToast = (msg: string) => {
  return toast.error(`${msg}`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

export const handleError = (error: ErrorProps) => {
  if (error?.errorCode === '31090') {
    showToast('Error: Insufficient Balance');
    return;
  } else if (error?.errorCode === '31088') {
    showToast('Error: Below Minimum trade value');
    return;
  } else {
    showToast('Something went wrong');
  }
};
