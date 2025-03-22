"use client";

import axios from 'axios';
import * as z from 'zod';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TriangleAlert, LoaderCircle, Send } from "lucide-react";

import { useEffect, useState } from 'react';

const formSchema = z.object({
  email: z.string().nonempty({ message: "Email is required" }).email({ message: "Invalid Email Address" }),
  phone: z.string().nonempty({ message: "Phone Number is required" }).regex(/^09\d{9}$/, { message: "Invalid Phone Number" }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

import Image from "next/image"

const ContactForm = () => {
  const [loadTime, setLoadTime] = useState<number>(Date.now());
  const [honeyPotFieldName, setHoneyPotFieldName] = useState<string>("honeypot");
  const [loading, setLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  // Initialize Google ReCaptcha
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Generate a random field name for the honeypot field
  useEffect(() => {
    const randomFieldName = `field_${Math.random().toString(36).substring(7)}`;
    setHoneyPotFieldName(randomFieldName);
    setLoadTime(Date.now());
  }, [])

  // Extend schema to include dynamic honeypot field
  const dynamicFormSchema = formSchema.extend({
    [honeyPotFieldName]: z.string().optional().refine((value) => {
      return value === "" && Date.now() - loadTime > 3000;
    }, { message: "Spam Detected!" })
  })

  // Initialize the form with the dynamic schema
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<z.infer<typeof dynamicFormSchema>>({
    resolver: zodResolver(dynamicFormSchema),
    defaultValues: {
      email: "",
      phone: "",
      subject: "",
      message: "",
    }
  });

  // Register the honeypot field in the form
  useEffect(() => {
    register(honeyPotFieldName);
  }, [])

  // Handler for Form Submission
  const onSubmit = async (values: z.infer<typeof dynamicFormSchema>) => {
    setLoading(true);

    if (!executeRecaptcha) {
      console.error("Recaptcha not initialized");
      return;
    }

    const token = await executeRecaptcha("contact_form");

    const htmlTemplate = `
      <div>
        <strong>Email:</strong> ${values.email}<br/>
        <strong>Phone:</strong> ${values.phone}<br/>
        <strong>Subject:</strong> ${values.subject}<br/>
        <strong>Message:</strong> ${values.message}
      </div>
    `;

    const payload = {
      from: values.email,
      subject: values.subject,
      html: htmlTemplate,
      gRecaptchaToken: token
    }

    try {
      await axios.post("/api/send-email", payload);
      setEmailSuccess(true);
      setSubmitMessage("Email sent successfully!");
      reset();
    } catch (error) {
      setEmailError(true);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 429) {
          setSubmitMessage("Too many submissions. Please try again later.");
        } else {
          setSubmitMessage("Something went wrong. Please try again later.");
        }
      } else {
        setSubmitMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
      setTimeout(() => {
        setEmailSuccess(false);
        setEmailError(false);
        setSubmitMessage(null);
      }, 5000);
    }


    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-1 gap-1 lg:gap-2 items-start">
        {/* Honeypot Field - Randomized Name and Hidden */}
        <input
          type="text"
          placeholder="Tell Us More"
          {...register(honeyPotFieldName)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Timestamp Field - Hidden */}
        <input
          type="hidden"
          value={loadTime.toString()}
          {...register("timestamp")}
        />

        <label className="w-full">
          {errors.email && <div className="text-red-600! text-sm mb-1.5 text-[16px]">{errors.email.message}</div>}
          <div className='relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start h-full'>
            <Image
              className="pointer-events-none w-6 h-full text-red-300 absolute top-0 bottom-0 left-[6px] lg:left-[11px] my-0!"
              src={`/svg/mail.svg`}
              alt=""
              width={100}
              height={100}
            />

            <input
              {...register("email")}
              placeholder="Email"
              className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
            />
          </div>
        </label>

        <label className="w-full">
          {errors.phone && <div className="text-red-600! text-sm my-1.5 text-[16px]">{errors.phone.message}</div>}
          <div className='relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start h-full'>
            <Image
              className="pointer-events-none w-6 h-full text-red-300 absolute top-0 bottom-0 left-[6px] lg:left-[11px] my-0!"
              src={`/svg/phone.svg`}
              alt=""
              width={100}
              height={100}
            />

            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
            />
          </div>
        </label>

        <label className="w-full">
          {errors.subject && <div className="text-red-600! text-sm my-1.5 text-[16px]">{errors.subject.message}</div>}
          <div className='relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start'>
            <Image
              className="pointer-events-none w-6 h-full text-red-300 absolute top-0 bottom-0 left-[6px] lg:left-[11px] my-0!"
              src={`/svg/book.svg`}
              alt=""
              width={100}
              height={100}
            />

            <input
              {...register("subject")}
              placeholder="Subject"
              className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
            />
          </div>
        </label>

        <label className="w-full">
          {errors.message && <div className="text-red-600! text-sm my-1.5 text-[16px]">{errors.message.message}</div>}
          <div className='relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start '>
            <Image
              className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
              src={`/svg/book-open.svg`}
              alt=""
              width={100}
              height={100}
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              rows={10}
              className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-1 md:py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] pr-[12px] lg:pl-[40px] focus:outline-none text-[16px]"
            ></textarea>
          </div>
        </label>

        {emailSuccess && <div className="text-green-600! flex gap-2 items-center"><Send size={16} /> {submitMessage}</div>}
        {emailError && <div className="text-red-600! flex gap-2 items-center"><TriangleAlert size={16} /> {submitMessage}</div>}

        <button type='submit' className="bg-[#017E3F] text-white p-2.5 px-8 mt-1 lg:text-lg font-bold lg:py-3 lg:px-16 cursor-pointer" disabled={loading}>
          {loading ? (
            <LoaderCircle size={20} className="animate-spin" />
          ) : "Submit"}
        </button>
      </form>
    )
  }

  export default ContactForm