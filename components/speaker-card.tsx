"use client"

import { motion } from 'framer-motion'

export interface SpeakerCardProps {
  name: string
  title: string
  institution: string
  country: string
  bio?: string
  image?: string
  colored?: boolean
}

export function SpeakerCard({
  name,
  title,
  institution,
  country,
  bio,
  image,
  colored,
}: SpeakerCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col"
    >
      {/* Image */}
      <div className="w-full aspect-square bg-muted rounded-sm mb-6 overflow-hidden flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover ${colored ? '' : 'grayscale'}`}
          />
        ) : (
          <div className="text-xs text-muted-foreground text-center px-4">Speaker Portrait</div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-serif text-lg font-normal mb-1">{name}</h3>
        <p className="text-sm text-accent font-medium mb-3">{title}</p>
        <p className="text-sm text-foreground/80 mb-2">{institution}</p>
        <p className="text-xs text-muted-foreground mb-4">{country}</p>

        {bio && (
          <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3">{bio}</p>
        )}
      </div>
    </motion.div>
  )
}

export default SpeakerCard
