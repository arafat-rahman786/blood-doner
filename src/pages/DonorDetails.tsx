import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../lib/api";
import type { Donor } from "../../data/donars";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import bd from "bangladesh-geojson";

export default function DonorDetails() {
  const { id } = useParams();

  const [donor, setDonor] = useState<Donor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDonor = async () => {
      try {
        setLoading(true);

        const res = await api.get(`/donorlist/${id}`);
        setDonor(res.data);
      } catch (error) {
        console.log("তথ্য আনতে সমস্যা হয়েছে:", error);
        setDonor(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getDonor();
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <Navber />
        <div className="flex min-h-[60vh] items-center justify-center bg-[#0d0e12] text-white">
          <p className="animate-pulse text-lg text-red-400">
            রক্তদাতার তথ্য লোড হচ্ছে...
          </p>
        </div>
        <Footer />
      </>
    );
  }

  if (!donor) {
    return (
      <>
        <Navber />
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#0d0e12] px-4 text-center text-white">
          <h2 className="text-2xl font-bold">রক্তদাতাকে খুঁজে পাওয়া যায়নি!</h2>
          <p className="mt-3 text-gray-400">
            এই রক্তদাতার তথ্য পাওয়া যাচ্ছে না।
          </p>
        </div>
        <Footer />
      </>
    );
  }

  const divisions = bd.getDivisions();

  const selectedDivision = divisions.find(
    (item) => String(item.id) === String(donor.division),
  );

  const districts = bd.getDistrictsByDivision(donor.division);

  const selectedDistrict = districts.find(
    (item) => String(item.id) === String(donor.district),
  );

  const upazilas = bd.getUpazilasByDistrict(donor.district);

  const selectedUpazila = upazilas.find(
    (item) => String(item.id) === String(donor.upazila),
  );

  return (
    <>
      <Navber />

      <section className="min-h-[70vh] bg-[#0d0e12] px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#17181e] shadow-2xl shadow-black/20">
            <div className="border-b border-white/10 bg-gradient-to-r from-red-950/60 to-[#17181e] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div>
                  <h1 className="text-2xl font-bold sm:text-3xl">
                    {donor.name}
                  </h1>

                  <p className="mt-2 text-sm text-gray-400">
                    রক্তবন্ধন পরিবারের একজন স্বেচ্ছাসেবী
                  </p>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-2xl font-bold text-red-500">
                  {donor.name?.charAt(0)}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                <div>
                  <p className="text-sm text-gray-400">রক্তের গ্রুপ</p>

                  <h2 className="mt-2 text-4xl font-black text-red-500">
                    {donor.bloodGroup}
                  </h2>
                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    donor.isAvailable
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {donor.isAvailable
                    ? "● রক্তদানে প্রস্তুত"
                    : "● বর্তমানে অনুপলব্ধ"}
                </span>
              </div>

              <h2 className="mb-5 text-xl font-bold">
                রক্তদাতার বিস্তারিত তথ্য
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#0d0e12] p-5">
                  <p className="text-sm text-gray-500">পূর্ণ নাম</p>
                  <p className="mt-2 font-semibold">{donor.name}</p>
                </div>

                <div className="rounded-xl bg-[#0d0e12] p-5">
                  <p className="text-sm text-gray-500">রক্তের গ্রুপ</p>
                  <p className="mt-2 font-semibold text-red-400">
                    {donor.bloodGroup}
                  </p>
                </div>

                <div className="rounded-xl bg-[#0d0e12] p-5">
                  <p className="text-sm text-gray-500">বিভাগ</p>
                  <p className="mt-2 font-semibold">
                    {selectedDivision?.bn_name || "তথ্য নেই"}
                  </p>
                </div>

                <div className="rounded-xl bg-[#0d0e12] p-5">
                  <p className="text-sm text-gray-500">জেলা</p>
                  <p className="mt-2 font-semibold">
                    {selectedDistrict?.bn_name || "তথ্য নেই"}
                  </p>
                </div>

                <div className="rounded-xl bg-[#0d0e12] p-5">
                  <p className="text-sm text-gray-500">উপজেলা</p>
                  <p className="mt-2 font-semibold">
                    {selectedUpazila?.bn_name || "তথ্য নেই"}
                  </p>
                </div>

                <div className="rounded-xl bg-[#0d0e12] p-5">
                  <p className="text-sm text-gray-500">এলাকা</p>
                  <p className="mt-2 font-semibold">
                    {(donor as Donor & { area?: string }).area || "তথ্য নেই"}
                  </p>
                </div>

                <div className="rounded-xl bg-[#0d0e12] p-5">
                  <p className="text-sm text-gray-500">ঠিকানা</p>
                  <p className="mt-2 font-semibold">
                    {(donor as Donor & { address?: string }).address || "তথ্য নেই"}
                  </p>
                </div>

                <div className="rounded-xl bg-[#0d0e12] p-5">
                  <p className="text-sm text-gray-500">মোবাইল নম্বর</p>

                  <a
                    href={`tel:${donor.phone}`}
                    className="mt-2 block font-semibold text-red-400 hover:text-red-300"
                  >
                    {donor.phone}
                  </a>
                </div>
              </div>

              <a
                href={`tel:${donor.phone}`}
                className="mt-8 block rounded-xl bg-red-500 py-4 text-center font-bold text-white transition hover:bg-red-600"
              >
                <span>রক্তদাতার সাথে যোগাযোগ করুন</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
