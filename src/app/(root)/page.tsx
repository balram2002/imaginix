import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { navLinks } from '../../../constants'
import Link from 'next/link'
import Image from 'next/image'
import { Collection } from '@/components/shared/Collection'
import { getAllImages } from '@/lib/actions/imageActions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home | Imaginix",
  description: "Home Page to see everything at one place.",
};

const HomePage = async ({ searchParams }: SearchParamProps) => {

  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery })

  return (
    <>
      <section className="home">
        <h1 className='home-heading'>
          Unleash Your Creative Vision with Imaginix
        </h1>

        <ul className="flex-center w-full gap-20">
          {navLinks?.slice(1, 5).map((link) => {
            return (
              <Link key={link.route} href={link.route} className='flex-center flex-col gap-2'>
                <li className='flex-center w-fit rounded-full bg-white p-4'>
                  <Image
                    src={link.icon}
                    alt='image'
                    width={24}
                    height={24}
                  />
                </li>
                <p className='p-14-medium text-center text-white'>{link.label}</p>
              </Link>
            )
          })}
        </ul>
      </section>

      <section className='sm:mt-12'>
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  )
}

export default HomePage