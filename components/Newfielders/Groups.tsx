"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Glee from "@/assets/Newfielders/g.png";
import Dance from "@/assets/Newfielders/d.png";
import Chess from "@/assets/Newfielders/cc.png";
import Church from "@/assets/Newfielders/c.png";
import BoyScout from "@/assets/Newfielders/bs.png";
import GirlScout from "@/assets/Newfielders/gs.png";
import Art from "@/assets/Newfielders/a.png";
import Journalism from "@/assets/Newfielders/j.png";

const CLUBS = [
  { id: "glee", name: "Glee Club", img: Glee, description: "A vibrant community for students who love to express themselves through music. Members gather to practice vocal techniques, learn new songs, and perform at school events and competitions." },
  { id: "dance", name: "Dance Club", img: Dance, description: "The Dancing Club welcomes students who enjoy moving to the rhythm and expressing themselves through dance. From contemporary to hip hop, this club explores a variety of dance styles." },
  { id: "chess", name: "Chess Club", img: Chess, description: "A haven for strategic thinkers and lovers of the classic game of chess. Students meet to play matches, participate in tournaments, and study advanced strategies." },
  { id: "church", name: "Church Servers Club", img: Church, description: "The Church Servers Club is dedicated to students who wish to serve their local church community. Members assist during services and engage in community service projects." },
  { id: "bs", name: "Boy Scout of the Philippines", img: BoyScout, description: "The Boy Scouts Club focuses on outdoor adventure, leadership, and community service. Members participate in camping, hiking, and survival skills training." },
  { id: "gs", name: "Girl Scout of the Philippines", img: GirlScout, description: "The Girl Scouts Club empowers young women through leadership activities, outdoor adventures, and community service projects." },
  { id: "art", name: "Art Club", img: Art, description: "A creative space for students passionate about visual arts. Members explore painting, sculpture, and digital art and showcase their work in exhibitions." },
  { id: "journalism", name: "Journalism Club", img: Journalism, description: "The Journalism Club is for students who love writing and storytelling. Members work on school publications and participate in writing workshops." },
];

export default function Groups() {
  const [activeClub, setActiveClub] = useState<string | null>(null);

  useEffect(() => {
    if (activeClub) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeClub]);

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* Club Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full justify-center">
        {CLUBS.map((club) => (
          <Club key={club.id} club={club} onOpen={() => setActiveClub(club.id)} />
        ))}
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeClub && (
          <Modal
            club={CLUBS.find((c) => c.id === activeClub)!}
            onClose={() => setActiveClub(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Club Component
function Club({ club, onOpen }: { club: typeof CLUBS[number]; onOpen: () => void }) {
  return (
    <motion.button
      className="btn btn-ghost hover:bg-white w-full h-64 shadow-md border-gray-100 bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${club.img.src})` }}
      onClick={onOpen}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    />
  );
}

// Modal Component
function Modal({ club, onClose }: { club: typeof CLUBS[number]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white text-black p-6 rounded-lg shadow-lg max-w-lg relative mx-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-bold text-lg">{club.name}</h3>
        <p className="py-4">{club.description}</p>
      </motion.div>
    </motion.div>
  );
}
