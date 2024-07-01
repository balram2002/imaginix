
# Next.js Full Stack AI SaaS Image Manipulation Application with credit system using stripe.

Some Features:

-   🌟 Tech stack: MERN + Material UI + SCSS/Bootstrap + Razorpay + Cloudinary
-   🎃 **Authentication and Authorization**: Secure user access with registration, login, and route protection.
-   👾 **Community Image Showcase**: Explore user transformations with easy navigation using pagination
-   🚀 **Advanced Image Search**: Find images by content or objects present inside the image quickly and accurately
-   👌 **Image Restoration**: Revive old or damaged images effortlessly
-   🎃 **Image Recoloring**: Customize images by replacing objects with desired colors easily
-   👾 **Image Generative Fill**: Fill in missing areas of images seamlessly
-   🚀 **Object Removal**: Clean up images by removing unwanted objects with precision
-   👌 **Background Removal**: Extract objects from backgrounds with ease
-   🐞 **Transformed Image Details**: View details of transformations for each image
-   ⏳ **Transformation Management**: Control over deletion and updates of transformations

-   🎃 **Credits System**: Earn or purchase credits for image transformations
-   👾 **Profile Page**: Access transformed images and credit information personally
-   🚀 **Credits Purchase**: Securely buy credits via Stripe for uninterrupted use
-   👌 **Responsive UI/UX**: A seamless experience across devices with a user-friendly interface
-   🐞 and much more...
 
### Setup .env file

```js
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

### install the dependencies

```shell
npm install
```

### Start the app

```shell
npm run dev
```