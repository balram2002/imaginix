import Header from '@/components/shared/Header'
import React from 'react'
import { transformationTypes } from '../../../../../../constants'
import TransformationForm from '@/components/shared/TransformationForm';
import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/userActions';
import { redirect } from 'next/navigation';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Image AI Tool | Imaginix",
  description: "AI powered image manipulation tool",
};

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const user = await getUserById(userId);
  return (
    <>
      <Head>
        <title>{`${transformation.title + " | Imaginix"}`}</title>
        <meta name="description" content={`${transformation.title + "tool powered by Imaginix"}`} />
      </Head>
      <Header
        title={transformation.title}
        subTitle={transformation.subTitle} />

      <section className='mt-10'>
        <TransformationForm
          action='Add'
          userId={user?._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user?.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage