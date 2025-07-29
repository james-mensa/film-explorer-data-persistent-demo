'use client'

import { Character } from '@/types/apis'
import Image from 'next/image'
import Link from 'next/link'

export const CharacterCard = (character: Character) => {
  const { id, name, image, status, gender } = character

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'bg-emerald-500/90'
      case 'dead':
        return 'bg-rose-600/90'
      default:
        return 'bg-gray-500/90'
    }
  }

  const getGenderColor = (gender: string) => {
    switch (gender.toLowerCase()) {
      case 'male':
        return 'bg-blue-500/15 text-blue-600 dark:text-blue-400'
      case 'female':
        return 'bg-pink-500/15 text-pink-600 dark:text-pink-400'
      case 'genderless':
        return 'bg-purple-500/15 text-purple-600 dark:text-purple-400'
      default:
        return 'bg-gray-500/15 text-gray-600 dark:text-gray-400'
    }
  }

  return (
    <Link
      href={`/character/${id}`}
      className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 300px"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-200 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
          {name}
        </h2>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${getGenderColor(
              gender
            )}`}
          >
            {gender}
          </span>
        </div>
      </div>

      {/* Floating ID badge */}
      <div className="absolute right-4 top-4 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        #{id}
      </div>
    </Link>
  )
}