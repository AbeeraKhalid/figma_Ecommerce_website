'use client';

import { TeamMember } from "@/components/about/team";
import { ServiceFeature } from "@/components/about/servicesFeatures";
import Image from "next/image";
import StatCard from "@/components/about/statCard";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 ">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-lg text-muted-foreground mb-8">
          Launced in 2015, Exclusive is South Asia premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          <p className="text-lg text-muted-foreground">
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <div>
          <Image
            src="/SideImage.png"
            alt="Shopping Experience"
            className="rounded-lg w-full"
            width={400}
            height={400}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section >
       <StatCard/>
      </section>

      {/* Team Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMember
            image="/member1.png"
            name="Tom Cruise"
            role="Founder & Chairman"
            socialLinks={{
              twitter: "#",
              linkedin: "#",
              instagram: "#"
            }}
          />
          <TeamMember
            image="/member2.png"
            name="Emma Watson"
            role="Managing Director"
            socialLinks={{
              twitter: "#",
              linkedin: "#",
              instagram: "#"
            }}
          />
          <TeamMember
            image="/member3.png"
            name="Will Smith"
            role="Product Designer"
            socialLinks={{
              twitter: "#",
              linkedin: "#",
              instagram: "#"
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceFeature
            icon={<Image src="/state1.png"alt="Users" width={200} height={200} className="w-[90px] h-[65px]" />}
            title="FREE AND FAST DELIVERY"
            description="Free delivery for all orders over $140"
          />
          <ServiceFeature
            icon={<Image src="/state2.png"alt="Users" width={200} height={200} className="w-[90px] h-[65px]" />}
            title="24/7 CUSTOMER SERVICE"
            description="Friendly 24/7 customer support"
          />
          <ServiceFeature
            icon={<Image src="/state3.png"alt="Users" width={200} height={200} className="w-[90px] h-[65px]" />}
            title="MONEY BACK GUARANTEE"
            description="We return money within 30 days"
          />
        </div>
      </section>
    </main>
  );
}