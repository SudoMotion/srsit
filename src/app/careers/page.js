import PageHeader from "@/components/PageHeader";
export const metadata = {
  title: "Careers | SRS IT",
  description: "Join our team at SRS IT. View our current job openings.",
};

export default function CareersPage() {
  const jobs = [
    { title: "Senior Frontend Developer", type: "Full-Time", location: "Dhaka, Bangladesh", dept: "Engineering" },
    { title: "Laravel Backend Developer", type: "Full-Time", location: "Remote", dept: "Engineering" },
    { title: "Digital Marketing Specialist", type: "Full-Time", location: "Dhaka, Bangladesh", dept: "Marketing" },
    { title: "UI/UX Designer", type: "Part-Time", location: "Remote", dept: "Design" },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <PageHeader title="JOIN OUR TEAM" />

      <section className="py-16 max-w-7xl mx-auto px-4 md:px-9">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] uppercase tracking-wide">Open Positions</h2>
          <div className="w-16 h-1 bg-[#f97316] mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid gap-6">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-neutral-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#f97316] bg-[#f97316]/10 px-3 py-1 rounded-full">{job.dept}</span>
                <h3 className="text-xl font-bold text-[#1a1a1a] mt-3">{job.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-neutral-500 text-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {job.location}
                  </div>
                </div>
              </div>
              <button className="bg-[#1a1a1a] text-white px-6 py-2 rounded font-bold uppercase text-sm tracking-wide hover:bg-[#f97316] transition-colors group-hover:scale-105 transform duration-200">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

