import React, { useEffect, useState } from "react";
import type { FormValues } from "./Form";
import { type Donor } from "../../data/donars";
import bd from "bangladesh-geojson";
import api from "../../lib/api";
type Props = {
  set: React.Dispatch<React.SetStateAction<boolean>>;
  getData: FormValues;
};
export default function DonerPopup({ set, getData }: Props) {
  const divisions = bd.getDivisions();
  const selectedDivision = divisions.find(
    (item) => String(item.id) === getData.division,
  );
  const districts = selectedDivision
    ? bd.getDistrictsByDivision(selectedDivision.id)
    : [];
  const selectedDistrict = districts.find(
    (item) => String(item.id) === getData.district,
  );
  const upazilas = selectedDistrict
    ? bd.getUpazilasByDistrict(selectedDistrict.id)
    : [];

  const selectedUpazila = upazilas.find(
    (item) => String(item.id) === getData.upazila,
  );
  const [filtersDonors, setFiltersDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getDonors = async () => {
      try {
        setLoading(true);

        const res = await api.get("/donorlist");

        const filtered = res.data.filter(
          (donor: Donor) =>
            donor.bloodGroup === getData.bloodGroup &&
            donor.division === getData.division &&
            donor.district === getData.district &&
            donor.upazila === getData.upazila,
        );

        setFiltersDonors(filtered);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getDonors();
  }, [getData]);
  return (
    <div>
      <div className="fixed inset-0 z-50 top-20 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md">
        <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#17181e] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
            <div>
              <h2 className="text-xl font-bold text-white">
                রক্তদাতার অনুসন্ধান ফলাফল
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                আপনার অনুসন্ধানের ফলাফল নিচে দেওয়া হলো
              </p>
            </div>

            <button
              onClick={() => set(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="overflow-y-auto px-5 py-5 sm:px-7">
            <div
              className={`mb-5 rounded-xl border p-4 ${
                filtersDonors.length > 0
                  ? "border-green-500/20 bg-green-500/5"
                  : "border-red-500/20 bg-red-500/5"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      filtersDonors.length > 0
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {filtersDonors.length > 0 ? "✓" : "!"}
                  </span>

                  <div>
                    <h3 className="font-bold text-white">
                      {filtersDonors.length > 0
                        ? `${filtersDonors.length} জন রক্তদাতা পাওয়া গেছে!`
                        : "দুঃখিত! কোনো রক্তদাতা পাওয়া যায়নি"}
                    </h3>

                    <p className="text-xs text-gray-400">
                      {filtersDonors.length > 0
                        ? "আপনার অনুসন্ধান সফল হয়েছে"
                        : "আপনার এলাকায় এই মুহূর্তে কোনো রক্তদাতা পাওয়া যায়নি"}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    filtersDonors.length > 0
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {filtersDonors.length > 0 ? "সফল" : "পাওয়া যায়নি"}
                </span>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-white/5 bg-[#202127] p-4">
              <h3 className="mb-3 text-sm font-bold text-white">
                আপনার অনুসন্ধানের তথ্য
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-gray-500">রক্তের গ্রুপ</p>
                  <p className="mt-1 font-semibold text-red-400">
                    {getData.bloodGroup}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">বিভাগ</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {selectedDivision?.bn_name}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">জেলা</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {selectedDistrict?.bn_name}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">উপজেলা</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {selectedUpazila?.bn_name}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">জরুরিতা</p>
                  <p className="mt-1 text-sm font-medium text-red-400">
                    {getData.urgency}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold text-white">পাওয়া যাওয়া রক্তদাতারা</h3>
              <span className="text-xs text-gray-400">
                {filtersDonors.length} জন পাওয়া গেছে
              </span>
            </div>

            <div className="space-y-3">
              <div className="space-y-3">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-red-500/20 border-t-red-500"></div>
                    <p className="mt-4 text-sm text-gray-400">
                      রক্তদাতার তথ্য খোঁজা হচ্ছে...
                    </p>
                  </div>
                ) : filtersDonors.length > 0 ? (
                  filtersDonors.map((donor, index) => (
                    <div
                      key={donor.id || index}
                      className="rounded-xl border border-white/10 bg-[#202127] p-4"
                    >
                      <h4 className="font-bold text-white">{donor.name}</h4>
                      <p className="text-xs text-gray-400">
                        {donor.upazila}, {donor.district}
                      </p>
                      <span className="text-red-400">{donor.bloodGroup}</span>
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-gray-400">
                      দুঃখিত! কোনো রক্তদাতা পাওয়া যায়নি।
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-[#17181e] px-5 py-4 sm:px-7">
            <button
              onClick={() => set(false)}
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
