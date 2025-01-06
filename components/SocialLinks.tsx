"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Twitter, href: "https://twitter.com" },
];

export default function SocialLinks() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
      <div className="flex space-x-4">
        {socialLinks.map((link, index) => (
          <motion.div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button size="icon" variant="outline" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
