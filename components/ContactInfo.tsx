"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  const contactItems = [
    { icon: Mail, text: "example@email.com" },
    { icon: Phone, text: "+1 (123) 456-7890" },
    { icon: MapPin, text: "New York, NY, USA" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      {contactItems.map((item, index) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-2"
        >
          <item.icon className="h-5 w-5 text-gray-500" />
          <span>{item.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
