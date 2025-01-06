"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Biography() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Biography</h2>
      <motion.div
        initial={{ height: "auto" }}
        animate={{ height: expanded ? "auto" : "100px" }}
        className="overflow-hidden"
      >
        <p className="mb-4">
          I'm a passionate web developer with a keen interest in creating
          intuitive and efficient user experiences. With a background in
          computer science and years of hands-on experience, I've developed a
          strong foundation in both front-end and back-end technologies.
        </p>
        {expanded && (
          <p>
            Throughout my career, I've worked on a variety of projects, from
            small business websites to large-scale enterprise applications. I'm
            always eager to learn new technologies and stay up-to-date with the
            latest industry trends. When I'm not coding, you can find me
            exploring nature, reading tech blogs, or contributing to open-source
            projects.
          </p>
        )}
      </motion.div>
      <Button onClick={() => setExpanded(!expanded)} className="mt-4">
        {expanded ? "Read Less" : "Read More"}
      </Button>
    </section>
  );
}
