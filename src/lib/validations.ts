import { z } from 'zod';

// Phone number validation - E.164 format (international phone numbers)
const phoneRegex = /^\+?[1-9]\d{1,14}$/;

// Customer/Application validation schema
export const customerSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  phone: z.string()
    .trim()
    .regex(phoneRegex, "Please enter a valid phone number (e.g., +1234567890)")
    .max(20, "Phone number is too long"),
  location: z.string()
    .trim()
    .min(2, "Location must be at least 2 characters")
    .max(200, "Location must be less than 200 characters"),
  qualification: z.string()
    .max(500, "Qualification must be less than 500 characters"),
  remark: z.string()
    .max(2000, "Remark must be less than 2000 characters")
    .optional(),
  jobField: z.string()
    .max(200, "Job field must be less than 200 characters")
    .optional(),
});

// Provider validation schema
export const providerSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Provider name must be at least 2 characters")
    .max(200, "Provider name must be less than 200 characters"),
  industry: z.string()
    .trim()
    .min(2, "Industry must be at least 2 characters")
    .max(100, "Industry must be less than 100 characters"),
  location: z.string()
    .trim()
    .min(2, "Location must be at least 2 characters")
    .max(200, "Location must be less than 200 characters"),
  contact_number: z.string()
    .trim()
    .regex(phoneRegex, "Please enter a valid contact number (e.g., +1234567890)")
    .max(20, "Contact number is too long"),
  notes: z.string()
    .max(2000, "Notes must be less than 2000 characters")
    .optional(),
});

// Email validation schema
export const emailSchema = z.object({
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be less than 100 characters"),
});
