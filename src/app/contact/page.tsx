"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { FormValues } from "@/types/types";
import ContactForm from "@/components/ContactForm";

const API_URL: string | undefined = process.env.customKey;

const EmailForm: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <ContactForm />
    </div>
  );
};

export default EmailForm;
