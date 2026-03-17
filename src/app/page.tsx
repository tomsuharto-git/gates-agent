'use client';

import { SideNav } from '@/components/SideNav';
import { SectionBackground } from '@/components/sections/SectionBackground';
import { SectionAssignment } from '@/components/sections/SectionAssignment';
import { SectionChallenge } from '@/components/sections/SectionChallenge';
import { SectionWontWork } from '@/components/sections/SectionWontWork';
import { SectionTask } from '@/components/sections/SectionTask';
import { SectionImperatives } from '@/components/sections/SectionImperatives';
import { SectionOpportunity } from '@/components/sections/SectionOpportunity';
import { SectionWaysIn } from '@/components/sections/SectionWaysIn';
import { SectionNext } from '@/components/sections/SectionNext';

export default function Home() {
  return (
    <>
      <SideNav />
      <main className="lg:ml-[200px]">
        <SectionBackground />
        <SectionAssignment />
        <SectionChallenge />
        <SectionWontWork />
        <SectionTask />
        <SectionImperatives />
        <SectionOpportunity />
        <SectionWaysIn />
        <SectionNext />
      </main>
    </>
  );
}
