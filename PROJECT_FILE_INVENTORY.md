# CampusX Project File Inventory

| Path | Type | Active Status | Referenced By / Purpose | Action | Reason |
|---|---|---|---|---|---|
| `src/app/(app)/dashboard/page.tsx` | Route | ACTIVE | Main student dashboard view | KEEP | Active route |
| `src/app/(app)/events/page.tsx` | Route | ACTIVE | Student Events & Campus Calendar portal | KEEP | Active route |
| `src/app/(app)/admin/events/page.tsx` | Route | ACTIVE | Admin Event Management dashboard | KEEP | Active route |
| `src/app/(app)/timetable/page.tsx` | Route | ACTIVE | Student Timetable viewer (BCA & B.Com) | KEEP | Active route |
| `src/app/(app)/fees/page.tsx` | Route | ACTIVE | Fee Structure & Payment receipts page | KEEP | Active route |
| `src/app/(app)/admin/page.tsx` | Route | ACTIVE | Admin Control Panel overview | KEEP | Active route |
| `src/app/(app)/admin/users/page.tsx` | Route | ACTIVE | Admin Student Accounts & Directory | KEEP | Active route |
| `src/app/(app)/admin/fees/page.tsx` | Route | ACTIVE | Admin Fee Structure management | KEEP | Active route |
| `src/app/(app)/admin/timetable/page.tsx` | Route | ACTIVE | Admin Timetable Grid editor | KEEP | Active route |
| `src/components/events/Event3DCard.tsx` | Component | ACTIVE | 3D perspective event card component | KEEP | Active component |
| `src/components/events/EventDetailModal.tsx` | Component | ACTIVE | Event details popup with ICS export & registration | KEEP | Active component |
| `src/components/events/EventMainView.tsx` | Component | ACTIVE | Main events portal layout manager | KEEP | Active component |
| `src/components/events/EventTimelineView.tsx` | Component | ACTIVE | Vertical timeline event view | KEEP | Active component |
| `src/components/events/EventCalendarView.tsx` | Component | ACTIVE | Monthly interactive calendar view | KEEP | Active component |
| `src/components/admin/EventManagementView.tsx` | Component | ACTIVE | Admin Event CRUD & status management table | KEEP | Active component |
| `src/components/timetable/OfficialTimetableGrid.tsx` | Component | ACTIVE | Official Study Hall College timetable matrix | KEEP | Active component |
| `src/components/fees/StudentFeesView.tsx` | Component | ACTIVE | Fee management & receipt view | KEEP | Active component |
| `src/actions/events.ts` | Server Action | ACTIVE | Event registration, CRUD, publish toggles | KEEP | Active server action |
| `src/actions/admin.ts` | Server Action | ACTIVE | Admin user & course management actions | KEEP | Active server action |
| `src/actions/fees.ts` | Server Action | ACTIVE | Fee payment & receipt generation actions | KEEP | Active server action |
| `src/server/db/schema.ts` | Schema | ACTIVE | Drizzle ORM single source of truth models | KEEP | Active schema |
| `src/server/guards.ts` | Authorization | ACTIVE | Server-side authorization & session guards | KEEP | Active guards |
| `public/brand/shc-logo.png` | Asset | ACTIVE | Study Hall College official logo | KEEP | Active brand asset |
| `dev.db` | Database | ACTIVE | SQLite database storing all application data | KEEP | Active database |
| `.env` | Environment | ACTIVE | Environment secrets & DB path configuration | KEEP | Active config |
| `campusx-motion-upgrade.zip` | Archive | INACTIVE | Old ZIP snapshot of motion upgrade | ARCHIVED | Moved to `__ARCHIVE_UNUSED__\zip-extracted\` |
| `campusx.zip` | Archive | INACTIVE | Old project archive package | ARCHIVED | Moved to `__ARCHIVE_UNUSED__\zip-extracted\` |
| `UPDATE-CAMPUSX.bat` | Script | INACTIVE | Legacy zip extraction helper script | ARCHIVED | Moved to `__ARCHIVE_UNUSED__\old-scripts\` |
| `update-campusx.ps1` | Script | INACTIVE | Legacy PowerShell update script | ARCHIVED | Moved to `__ARCHIVE_UNUSED__\old-scripts\` |
| `check_bcom_e2e.ts` | Script | INACTIVE | Standalone temporary check script | ARCHIVED | Moved to `__ARCHIVE_UNUSED__\old-scripts\` |
| `check_fees_e2e.ts` | Script | INACTIVE | Standalone temporary check script | ARCHIVED | Moved to `__ARCHIVE_UNUSED__\old-scripts\` |
| `check_timetable_e2e.ts` | Script | INACTIVE | Standalone temporary check script | ARCHIVED | Moved to `__ARCHIVE_UNUSED__\old-scripts\` |
| `tsconfig.tsbuildinfo` | Build Artifact | GENERATED | TypeScript compiler build cache | ARCHIVED | Moved to `__ARCHIVE_UNUSED__\generated\` |
