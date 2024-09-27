"use client";
import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import gsap from "gsap";
import { FormValues } from "@/types/types";

const API_URL: string | undefined = process.env.customKey;

const ContactForm: React.FC = () => {
  const initialValues: FormValues = {
    recipientEmail: "",
    subject: "",
    message: "",
  };

  useEffect(() => {
    // Animate the text and form fields
    gsap.fromTo(
      ".form-header",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      ".form-description",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }
    );

    gsap.fromTo(
      ".form-field",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      ".form-button",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1.2,
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await axios.post(`${API_URL}/send-email`, {
        recipientEmail: values.recipientEmail,
        subject: values.subject,
        message: values.message,
      });

      if (response.status === 200) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email, please try again.");
      }
    } catch (error) {
      console.error("There was an error sending the email:", error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  };

  return (
    <div className="md:px-44 px-5 md:py-10 pb-5 mx-auto">
      <h1 className="form-header md:text-3xl text-xl text-customWhite mt-5">
        Get in <span className="text-darkPurple">Touch</span>!
      </h1>
      <p className="form-description text-white py-1 mb-5">
        Whether you have a project in mind, need help with a bug, or just want
        to collaborate, I’d love to hear from you. As a passionate frontend
        developer, I'm always excited to connect and explore new ideas. Drop me
        a message, and let's build something amazing together!
      </p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="space-y-4">
          <div className="form-field">
            <label
              htmlFor="recipientEmail"
              className="block text-sm font-medium text-darkPurple"
            >
              Recipient Email
            </label>
            <input
              id="recipientEmail"
              name="recipientEmail"
              type="email"
              required
              className="mt-1 block bg-primary text-customWhite w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-darkPurple focus:border-neonPurple focus:shadow-neonGlowPurple"
            />
          </div>
          <div className="form-field">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-darkPurple"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="mt-1 block bg-primary text-customWhite w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-darkPurple focus:border-neonPurple focus:shadow-neonGlowPurple"
            />
          </div>
          <div className="form-field">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-darkPurple"
            >
              Message
            </label>
            <Field
              id="message"
              name="message"
              as="textarea"
              rows={4}
              className="mt-1 block bg-primary text-customWhite w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-darkPurple focus:border-neonPurple focus:shadow-neonGlowPurple"
            />
          </div>
          <button
            type="submit"
            className="form-button border-2 border-darkPurple text-customWhite md:text-xl ease-in  rounded md:px-4 px-1 py-1 hover:bg-darkPurple ease duration-150 hover:text-customWhite"
          >
            Send Email
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
