import bd from "bangladesh-geojson";
import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import DonerPopup from "./DonerPopup";
export type FormValues = {
  bloodGroup: string;
  division: string;
  district: string;
  upazila: string;
  urgency: string;
};

export default function Form() {
  const [showPopup, setShowPopup] = useState(false);
  const [searchData, setSearchData] = useState<FormValues | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();
  const selectedDivision = watch("division");
  const selectedDistrict = watch("district");
  const divisions = bd.getDivisions();
  const districts = selectedDivision
    ? bd.getDistrictsByDivision(selectedDivision)
    : [];
  const upazilas = selectedDistrict
    ? bd.getUpazilasByDistrict(selectedDistrict)
    : [];
  const onsubmit: SubmitHandler<FormValues> = (data) => {
    setSearchData(data);
    setShowPopup(true);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
      >
        <div>
          <select
            {...register("bloodGroup", {
              required: "রক্তের গ্রুপ নির্বাচন করুন",
            })}
            name="bloodGroup"
            className="w-full appearance-none rounded-xl border border-white/10 bg-[#101116] px-4 py-3.5 text-sm text-gray-400 outline-none transition focus:border-red-500"
          >
            <option value="">রক্তের গ্রুপ নির্বাচন</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          {errors.bloodGroup && (
            <p className="mt-1 text-xs text-red-500">
              {errors.bloodGroup.message}
            </p>
          )}
        </div>

        <div>
          <select
            {...register("division", {
              required: "বিভাগ নির্বাচন করুন",
              onChange: () => {
                setValue("district", "");
                setValue("upazila", "");
              },
            })}
            name="division"
            className="w-full appearance-none rounded-xl border border-white/10 bg-[#101116] px-4 py-3.5 text-sm text-gray-400 outline-none transition focus:border-red-500"
          >
            <option value="">বিভাগ নির্বাচন করুন</option>
            {divisions.map((division) => (
              <option key={division.id} value={division.id}>
                {division.bn_name}
              </option>
            ))}
          </select>
          {errors.division && (
            <p className="mt-1 text-xs text-red-500">
              {errors.division.message}
            </p>
          )}
        </div>

        <div>
          <select
            {...register("district", {
              required: "জেলা নির্বাচন করুন",
              onChange: () => {
                setValue("upazila", "");
              },
            })}
            name="district"
            className="w-full appearance-none rounded-xl border border-white/10 bg-[#101116] px-4 py-3.5 text-sm text-gray-400 outline-none transition focus:border-red-500"
          >
            <option value="">জেলা নির্বাচন করুন</option>
            {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.bn_name}
              </option>
            ))}
          </select>
          {errors.district && (
            <p className="mt-1 text-xs text-red-500">
              {errors.district.message}
            </p>
          )}
        </div>

        <div>
          <select
            {...register("upazila", {
              required: "উপজেলা নির্বাচন করুন",
            })}
            disabled={!selectedDistrict}
            name="upazila"
            className="w-full appearance-none rounded-xl border border-white/10 bg-[#101116] px-4 py-3.5 text-sm text-gray-400 outline-none transition focus:border-red-500"
          >
            <option value="">উপজেলা নির্বাচন করুন</option>
            {upazilas.map((upazila) => (
              <option key={upazila.id} value={upazila.id}>
                {upazila.bn_name}
              </option>
            ))}
          </select>
          {errors.upazila && (
            <p className="mt-1 text-xs text-red-500">
              {errors.upazila.message}
            </p>
          )}
        </div>

        <div>
          <select
            {...register("urgency")}
            name="urgency"
            className="w-full appearance-none rounded-xl border border-white/10 bg-[#101116] px-4 py-3.5 text-sm text-gray-400 outline-none transition focus:border-red-500"
          >
            <option value="">জরুরিতা নির্বাচন</option>
            <option value="জরুরি">জরুরি</option>
            <option value="সাধারণ">সাধারণ</option>
          </select>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#ed2441] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          রক্তদাতা খুঁজুন
        </button>
      </form>

      {showPopup && searchData && (
        <DonerPopup getData={searchData} set={setShowPopup} />
      )}
    </div>
  );
}
