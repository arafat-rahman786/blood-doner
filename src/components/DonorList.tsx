
import { useEffect, useState } from "react";
import api from "../../lib/api";
import bd from "bangladesh-geojson";
import type { Donor } from "../../data/donars";
import { Link } from "react-router";

export default function DonorList() {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);

  const divisions = bd.getDivisions();

  useEffect(() => {
    const getDonors = async () => {
      try {
        const res = await api.get("/donorlist");
        setDonors(res.data);
      } catch (error) {
        console.log("ডেটা আনতে সমস্যা হয়েছে:", error);
      } finally {
        setLoading(false);
      }
    };

    getDonors();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#0d0e12] py-20 text-center text-white">
        রক্তদাতাদের তথ্য লোড হচ্ছে...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0d0e12] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            আমাদের স্বেচ্ছাসেবী পরিবার
          </span>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            আমাদের <span className="text-red-500">রক্তদাতাগণ</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            যারা মানুষের জীবন বাঁচাতে স্বেচ্ছায় রক্তদানের জন্য প্রস্তুত, তাদের
            নিয়েই আমাদের রক্তবন্ধন পরিবার। আপনার প্রয়োজনে খুঁজে নিন কাছের একজন
            রক্তদাতা।
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#17181e] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold">নিবন্ধিত রক্তদাতা</h2>
            <p className="mt-1 text-sm text-gray-400">
              আমাদের পরিবারের স্বেচ্ছাসেবী সদস্যদের তালিকা
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-red-500/10 px-5 py-3">
            <span className="text-2xl font-bold text-red-500">
              {donors.length.toLocaleString("bn-BD")}
            </span>
            <span className="text-sm text-gray-400">রক্তদাতা</span>
          </div>
        </div>

        {donors.length === 0 ? (
          <p className="py-12 text-center text-gray-400">
            এখনো কোনো রক্তদাতা পাওয়া যায়নি।
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {donors.map((item) => {
              const division = divisions.find(
                (d) => String(d.id) === String(item.division)
              );

              const districts = bd.getDistrictsByDivision(
                String(item.division)
              );

              const district = districts.find(
                (d) => String(d.id) === String(item.district)
              );

              const upazilas = bd.getUpazilasByDistrict(
                String(item.district)
              );

              const upazila = upazilas.find(
                (u) => String(u.id) === String(item.upazila)
              );

              return (
                <div
                  data-aos="zoom-in"
                  key={item.id}
                  className="group rounded-2xl border border-white/10 bg-[#17181e] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-500/40"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-xl font-bold text-red-500">
                        {item.name?.charAt(0)}
                      </div>

                      <div>
                        <h3 className="font-bold">{item.name}</h3>

                        {item.isVerified && (
                          <div className="mt-1 flex items-center gap-1 text-xs text-green-400">
                            <span>✓</span>
                            যাচাইকৃত রক্তদাতা
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
                      {item.bloodGroup}
                    </div>
                  </div>

                  <div className="mb-5 space-y-3 rounded-xl bg-[#0d0e12] p-4">
                    <div className="flex items-center justify-between gap-2 text-sm">
                      <span className="text-gray-500">বিভাগ</span>
                      <span className="text-right text-gray-300">
                        {division?.bn_name || "তথ্য নেই"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 text-sm">
                      <span className="text-gray-500">জেলা</span>
                      <span className="text-right text-gray-300">
                        {district?.bn_name || "তথ্য নেই"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 text-sm">
                      <span className="text-gray-500">উপজেলা</span>
                      <span className="text-right text-gray-300">
                        {upazila?.bn_name || "তথ্য নেই"}
                      </span>
                    </div>
                  </div>

                  <div className="mb-5 flex items-center justify-between gap-2">
                    <span className="text-sm text-gray-500">
                      বর্তমান অবস্থা
                    </span>

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                        item.isAvailable
                          ? "bg-green-500/10 text-green-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {item.isAvailable
                        ? "● রক্তদানে প্রস্তুত"
                        : "● বর্তমানে অনুপলব্ধ"}
                    </span>
                  </div>

                  <Link
                    to={`/DonorDetails/${item.id}`}
                    className="block w-full rounded-xl border border-red-500/30 bg-red-500/10 py-3 text-center text-sm font-semibold text-red-400 transition hover:bg-red-600 hover:text-white"
                  >
                    বিস্তারিত দেখুন
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
