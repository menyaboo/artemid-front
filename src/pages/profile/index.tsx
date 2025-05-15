import type { ReactNode } from 'react';
import { Profile } from "@widget/profile";
import AppealPersonalTable from '@widget/appeal-table';
import PersonalAnalytics from "@widget/personal-analytics";

const ProfilePage = (): ReactNode => (
  <main className="h-screen-m flex justify-center py-10">
    <div className="grid container w-full grid-rows-[240px_1fr] grid-cols-3 gap-4">
      <Profile/>
      <PersonalAnalytics />
      <AppealPersonalTable />
    </div>
  </main>
)

export default ProfilePage