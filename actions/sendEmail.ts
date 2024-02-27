"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_RrMkHqmr_KWy3fp49q7yk9i8fpFt9nRoT");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    // data = await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: "qq534883225@gmail.com",
    //   subject: "Hello World",
    //   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    // });
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      // to: "bytegrad@gmail.com",
      to: "534883225@qq.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
