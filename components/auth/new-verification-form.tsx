"use client";

import { BeatLoader } from "react-spinners";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (successMessage || errorMessage) return;

    if (!token) {
      setErrorMessage("Missing token!");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccessMessage(data.success);
        setErrorMessage(data.error);
      })
      .catch(() => {
        setErrorMessage("Something went wrong!");
      });
  }, [errorMessage, successMessage, token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {!errorMessage && !successMessage && <BeatLoader />}
        <FormSuccess message={successMessage} />
        {!successMessage && <FormError message={errorMessage} />}
      </div>
    </CardWrapper>
  );
};
