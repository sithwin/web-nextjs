import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Truck, CheckCircle, Coins } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: Truck,
    description: "Get your dream delivered to your door step right away",
  },
  {
    name: "Gurantee Quality",
    Icon: CheckCircle,
    description:
      "Every product on our website is verified by International Association of Colored Stone Dealers (ICA)",
  },
  {
    name: "Every budget",
    Icon: Coins,
    description:
      "Craftsmanship allow you to create a custom piece of jewelry, with precious stones of incomparble quality.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Your Jeweler and Private Dealer Exclusive gems and jewelry{" "}
            <span className="text-blue-600">Without intermediaries</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            As a dealer and jeweler, we select each stone directly, without
            intermediaries. We support you in the creation of your custom
            jewelry, guaranteeing incomparable quality and authenticity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              See the jewelry &rarr;
            </Link>
            <Link
              href="/products"
              className={buttonVariants({ variant: "secondary" })}
            >
              Create my custom jewelry &rarr;
            </Link>
          </div>
        </div>

        {/* TODO: List products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
